import { useState } from "react"
import { ToastAlert } from "./Functions"
export function RegistrationPage(){

    const[status,setStatus]=useState('')
    
    
    return (<div>
      <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'>

        <div style={{padding:"10px"}}>  
    <form method="post" id="freeRegistrationForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Register</div></div>

     <div class="mb-3">
     <div class="formInputLabel">Your name</div>
     <input type="text" class="form-control" autoComplete="off" name="name"  ></input>
   <br></br>
   <div class="formInputLabel">Institution/brand/organization</div>
   <textArea rows="2" type="text" class="form-control" autoComplete="off" name="institution"  ></textArea>
   <br></br><div class="formInputLabel">WhatsApp contact</div>
   <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
   <br></br> 
   
   <div class="formInputLabel">Email</div>
   <input type="text" class="form-control" autoComplete="off" name="email" ></input>
  
   <br></br>
   <div class="formInputLabel">PIN e.g. 12345</div>
     <input type="text" class="form-control" autoComplete="off" name="pin" ></input>
  
     </div>
      <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:status}}/>
     <div onClick={
      ()=>{
  

        if(Array.from(document.getElementById("freeRegistrationForm").name.value).length<2){

ToastAlert('toastAlert2','Enter a correct name',3000)

}else if(Array.from(document.getElementById("freeRegistrationForm").institution.value).length<11)
{
  
  ToastAlert('toastAlert2','Enter a valid institution name',3000)
}
else if(Array.from(document.getElementById("freeRegistrationForm").contact.value).length<10||Array.from(document.getElementById("freeRegistrationForm").contact.value).length>10)
        {
          ToastAlert('toastAlert2','Enter correct contact format e.g 0703852178',3000)
        }else if(Array.from(document.getElementById("freeRegistrationForm").email.value).length<11)
        {
           
           ToastAlert('toastAlert2','Enter correct email address',3000)
        }
        else if(Array.from(document.getElementById("freeRegistrationForm").pin.value).length<5||Array.from(document.getElementById("freeRegistrationForm").pin.value).length>5)
        {
          ToastAlert('toastAlert2','Create 5 digits PIN e.g. 12345',3000)
        }
else{

ToastAlert('toastAlert1','Please wait ......',3000)
  
   fetch('/verifyUser',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
contact:document.getElementById("freeRegistrationForm").contact.value,
pin:document.getElementById("freeRegistrationForm").pin.value
       }) 
   }).then(res=>res.json()).then((resp)=>{
       if(resp.registered===false){
        fetch('/collection_kayasers_registerFree',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
        name:document.getElementById("freeRegistrationForm").name.value.trim(),
        institution:document.getElementById("freeRegistrationForm").institution.value.trim(),
        contact:document.getElementById("freeRegistrationForm").contact.value.trim(),
        email:document.getElementById("freeRegistrationForm").email.value.trim(),
        pin:document.getElementById("freeRegistrationForm").pin.value.trim()

       })
   }) .then(resp=>{
       
   
       return resp.json()}).then(res=>{
        
     let kayaserDetailsObj=res
     ToastAlert('toastAlert1',`Successfully registered as ${kayaserDetailsObj.name}`,3000)
     
     document.getElementById("freeRegistrationForm").name.value=""
     document.getElementById("freeRegistrationForm").institution.value=""
   
   document.getElementById("freeRegistrationForm").contact.value=""
       document.getElementById("freeRegistrationForm").email.value=""
     document.getElementById("freeRegistrationForm").pin.value=""
     fetch(`/getTradingDetails/${kayaserDetailsObj.contact}`).then(res=>res.json()).then(resp=>{
let traderDetailsObj=resp[0]


setStatus(`<div style='color:green;'>You have registered succesfully as ${traderDetailsObj.name}. <span style='color:red;'>Thank you.</span></div>`)

     })
      
      
      
      
          })
      
      

       } else if(resp.registered===true){
        setStatus("<div style='color:red;'>You already registered with Kayas. You don't need to register again</div>")
    } 
        else{
          setStatus("<div style='color:red;'>We appologize, an error has occured as you tried to register. Please try again</div>")
         
          }
      
   }
       

   )
 
 
}
      } 

     } class="form-submit-btn backgroundColorHovereffect"><span class="fa fa-user-circle"></span> Register</div><p></p>
    
     </form></div>


        </div>
        <div class='col-md-3'></div>
      </div>
     
    
     </div>)
  }


export default RegistrationPage