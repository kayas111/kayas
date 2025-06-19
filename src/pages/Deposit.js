import { useState } from "react"
import { IsLoggedIn, ToastAlert } from "./Functions"
import { useCookies } from "react-cookie"

export function Deposit(){
const [status,setStatus]=useState('')
const [cookies,setCookie, removeCookie]=useCookies(['user'])
return(
    <div style={{padding:"5px"}}>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <div class="pageLabel">Deposit</div>
            <div class="pageDescription">Deposit money to your Kayas account</div>
      

<p></p>
            <form method="post" id="depositForm">
   

     <div class="mb-3">
     <div class="formInputLabel">Contact to deposit from</div>
     <input type="text" class="form-control" autoComplete="off" name="contact"  ></input>
   <br></br>
  <div class="formInputLabel">Amount</div>
   <input type="text" class="form-control" autoComplete="off" name="amount" ></input>
 
   
  
     </div>
      <div class="status">{status}</div>
     <div onClick={
      ()=>{
  
if(IsLoggedIn(cookies)==true){
    let beneficiary={}
    beneficiary.name=cookies.user.name
    beneficiary.contact=cookies.user.contact
    
    let form=document.getElementById("depositForm")
        if(Array.from(form.contact.value.trim()).length<10 || Array.from(form.contact.value).length>10){

ToastAlert('toastAlert2','Enter contact of 10 digits',3000)

}else  if((parseInt(form.amount.value.trim())>0)==false){

    ToastAlert('toastAlert2','Enter a valid amount',4000)
    
    
    
    } 
    
    else  if(parseInt(form.amount.value.trim())<500){

        ToastAlert('toastAlert2','Minimum amount to deposit is 500/=',4000)
        
        
        
        }
    
    else if( Array.from(form.amount.value.trim()).includes(',')){
        ToastAlert('toastAlert2','Enter an amount without commas',4000)

    }

else{

setStatus('Please wait.....')
let payLoad={
    payerNo:parseInt(document.getElementById("depositForm").contact.value.trim()),
    amount:parseInt(document.getElementById("depositForm").amount.value.trim()),
    beneficiary:beneficiary,
    paymentReason:'depositToKayasAccount'
           }
  
           
   fetch('/makePayment',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify(payLoad) 
   }).then(res=>res.json()).then((resp)=>{
     window.location.href=resp.redirectUrl
   }
       

   )
 
 
}}else{
    ;
}
      } 

     } class="button1"><span class="fa fa-money"></span> Deposit</div><p></p>
    
     </form>


            </div>
            <div class="col-md-3"></div>
        </div>
        
    </div>
)



}export default Deposit