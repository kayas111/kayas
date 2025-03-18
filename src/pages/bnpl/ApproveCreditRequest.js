import { useState } from "react"
import { ToastAlert,GetTradingDetails,PersistentToastAlert,closeToastAlert } from "../Functions"
import { useCookies } from "react-cookie"
export function ApproveCreditRequest(){
const[status, setStatus]=useState('')
const [cookies]=useCookies(['user'])
    return (<div style={{padding:"3px"}}>
        
        
    <div class="row">
       <div class="col-md-3"></div>
       <div style={{textAlign:"left"}} class="col-md-6">
       <div class="pageLabel">Approve credit request</div>
<p></p>

       <form method="post" id="offerCreditServiceForm">
<div style={{paddingBottom:"8px"}}><div class="formLabel">Approve credit request</div></div>
    <div class="mb-3">
    
 <div class="formInputLabel">Student number</div>
  <input type="text" class="form-control" autoComplete="off" name="studentNo" ></input><br></br>
   
  <div class="formInputLabel">Describe product/service being offered</div>
  <textarea rows={3} type="text" class="form-control" autoComplete="off" name="description" ></textarea><br></br>
   
  <div class="formInputLabel">Price</div>
  <input type="text" class="form-control" autoComplete="off" name="price" ></input><br></br>
   
   
   </div>
     <div class="status">{status}</div>
    <div onClick={
        
     ()=>{
        let price=document.getElementById("offerCreditServiceForm").price.value.trim()
               
        if((parseInt(price)>0)==false){

            ToastAlert('toastAlert2','Enter a valid price',4000)
            
            
            
            } else 
 if(Array.from(document.getElementById("offerCreditServiceForm").studentNo.value.trim()).length<10){

ToastAlert('toastAlert2','Enter a student number',3000)


}  else if(Array.from(document.getElementById("offerCreditServiceForm").description.value.trim()).length<3){

    ToastAlert('toastAlert2','Describe product/service being offered on credit',4000)
    
    
    } 
   
    else if(Array.from(document.getElementById("offerCreditServiceForm").price.value.trim()).length<1 ||
    Array.from(price).includes(',')
    
    ){

        ToastAlert('toastAlert2','Enter the price without commas',4000)
        
        
        } 

else{
    
    setStatus('Please wait.......')
   let form=document.getElementById("offerCreditServiceForm")
   GetTradingDetails(cookies.user.contact).then(traderDetails=>{
    let payLoad={studentNo:form.studentNo.value.trim(),description:form.description.value.trim(),price:form.price.value.trim(),creditOfferedBy:traderDetails.name}
    fetch('/approveCreditRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(payLoad) 
}).then(res=>res.json()).then(resp=>{

    setStatus(resp.msg)
})
   })

   



}
     } 

    } class="button1"> Approve</div>
    

    <p></p>
   
    </form>
       </div>
       <div class="col-md-3"></div>
    </div>
</div>)



}

export default ApproveCreditRequest