
import React, {useState} from 'react'
import { ToastAlert } from '../Functions';



export function MyRegisters(){
    const[status,setStatus]=useState('')
    const[goToRegisterStatus,setGoToRegisterStatus]=useState('')
    let data=""
    const[myRegisters,setMyRegisters]=useState('')
           
            return(<div>
  
      <div style={{padding:"15px"}}>
        
      <div id="myregisters" class="label1">Your registers</div>
  <div class="label2">See a list of all registers created by you.</div>          
    <form method="post" id="myRegsitersForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">See your registers</div></div>
 <div class="mb-3">
<div class="formInputLabel">Contact</div>
<input type="text" class="form-control" autoComplete="off" name="contact"></input>

<br></br>
<div class="formInputLabel">PIN</div>
 <input type="password" class="form-control" autoComplete="off" name="pin"></input>


 </div>
 
 <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>

 <div onClick={
   ()=>{

     if(Array.from(document.getElementById("myRegsitersForm").contact.value.trim()).length<10||Array.from(document.getElementById("myRegsitersForm").contact.value.trim()).length>10){

ToastAlert('toastAlert2','Enter contact of 10 digits',3000)

}else if(Array.from(document.getElementById("myRegsitersForm").pin.value.trim()).length<5||Array.from(document.getElementById("myRegsitersForm").pin.value.trim()).length>5)
     {
      ToastAlert('toastAlert2','Enter PIN',3000)
     }

else{
ToastAlert('toastAlert','Please wait.....',3000)
fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:document.getElementById("myRegsitersForm").contact.value,
pin:document.getElementById("myRegsitersForm").pin.value,
    }) 
}).then(res=>res.json()).then((resp)=>{
         
    if(resp.registered===false){
      ToastAlert('toastAlert2','Not registered. Tap menu and register',3000)
    }
     else{
        if(resp.registered===true&&resp.pin===false){
          ToastAlert('toastAlert2','Incorrect PIN',3000)

        }else{
      
    fetch('/getMyRegisters',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      contact:parseInt(document.getElementById("myRegsitersForm").contact.value),
    })
}).then(resp=>{
   return resp.json()}).then(resp=>{
if(resp.length===0){
ToastAlert('toastAlert2','You have no registers created.',3000)

}else{
resp.reverse()
resp.forEach(register=>{
data+=`<div class='col-sm-6 col-md-4'><div><a  style='color:black;' href='/pages/attendanceregs/${register.contact}/${register.registerId}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:green;font-size:15px;font-weight:bold;'>${register.registerTitle}</div><div>${register.attendees.length} contacts.</div><div style="font-size:15px;color:grey;">Register ID: ${register.registerId}</div><div style='color:grey;'>Tap here to view details.</div></div></span></a></div><div><a href="/pages/editattendanceregs/${register.contact}/${register.registerId}"><div class='btn btn-success btn-xs hovereffect'><span class='fa fa-edit'></span>Clear Register</div></a></div><hr></hr></div>`
})
setMyRegisters(data)
ToastAlert('toastAlert1','Successful',3000)
}

      
     
      })
   
        }
        
      
    }
   
}
    

)


}
   }
 } class="form-submit-btn">Display registers</div>

 </form>
 <div style={{padding:"3px"}}class="row" dangerouslySetInnerHTML={{__html:myRegisters}}/>
 
 </div>


 <div style={{padding:"15px"}}>
 <div class="label1">Go to register</div>
  <div class="label2">Enter your contact and register ID to open that register.</div>
            
      <form method="post" id="goToRegsiterForm" action="#">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Go to register</div></div>

   <div class="mb-3">
   <div class="formInputLabel">Contact</div>
  <input type="text" class="form-control" autoComplete="off" name="contact"></input>

 
 <br></br>
 <div class="formInputLabel">ID of register</div>
   <input type="text" class="form-control" autoComplete="off" name="registerId"></input>
  
 
   </div>
   
   <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:goToRegisterStatus}}/>

   <div  onClick={
     ()=>{
  
       if(Array.from(document.getElementById("goToRegsiterForm").contact.value.trim()).length<10||Array.from(document.getElementById("goToRegsiterForm").contact.value.trim()).length>10){
        ToastAlert('toastAlert2','Enter contact of 10 digits',3000)

}else if(Array.from(document.getElementById("goToRegsiterForm").registerId.value).length<1)
       {
        ToastAlert('toastAlert2','Enter ID of register to go to',3000)
       }

else{
ToastAlert('toastAlert1','Please wait.....',2000)
window.location.href=`/pages/attendanceregs/${parseInt(document.getElementById("goToRegsiterForm").contact.value)}/${document.getElementById("goToRegsiterForm").registerId.value}`
}
     }
   } class="form-submit-btn">Go to Register</div>
  
   </form>
   
   
   </div>
              
   
    
            </div>)
          
  }

  export default MyRegisters