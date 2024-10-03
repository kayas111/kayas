import { useState } from "react"
import { ToastAlert,VerifyRegistrationAndPin } from "./Functions"
import { setCookieOptionsObj} from '../Variables';
import {useCookies} from 'react-cookie'
export function LoginPage(){
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    return (<div>
          <div class='row'>
        <div class='col-md-3'></div>
        <div class='col-md-6'>

        <div style={{padding:"10px"}}>  
    <form method="post" id="loginForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Log in</div></div>

     <div class="mb-3">
 
   <br></br><div class="formInputLabel">Contact</div>
   <input type="text" class="form-control" autoComplete="off" name="contact" ></input>

  
   <br></br>
   <div class="formInputLabel">PIN e.g. 12345</div>
     <input type="password" class="form-control" autoComplete="off" name="pin" ></input>
  
     </div>
      
     <div onClick={
      ()=>{
  if(Array.from(document.getElementById("loginForm").contact.value.trim()).length<10||Array.from(document.getElementById("loginForm").contact.value.trim()).length>10)
        {
          ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
        }
        else if(Array.from(document.getElementById("loginForm").pin.value).length<5||Array.from(document.getElementById("loginForm").pin.value).length>5)
        {
          ToastAlert('toastAlert2','Enter PIN of 5 digits e.g. 12345',3000)
        }
else{

ToastAlert('toastAlert1','Please wait ......',3000)
  
let contact=document.getElementById("loginForm").contact.value,pin=document.getElementById("loginForm").pin.value
 VerifyRegistrationAndPin(contact.trim(),pin.trim()).then(resp=>{
    
    if(resp.registered===false){
     ToastAlert('toastAlert2','Not registered. Tap menu to register',3000)
    }else
    
       if(resp.pin===false){
         
         ToastAlert('toastAlert2','Incorrect PIN',3000)
       }else{
         let user={name:resp.details.name,contact:resp.details.contact,role:'user'}
         setCookie('user',user,setCookieOptionsObj)
       ToastAlert('toastAlert1','Logged in',3000)
       document.getElementById("loginForm").pin.value=""
       document.getElementById("loginForm").contact.value=""
       }
     })
    


 
}
      } 

     } class="form-submit-btn backgroundColorHovereffect"> Log in</div><p></p>
    
     </form></div>


        </div>
        <div class='col-md-3'></div>
      </div>
     
    
    </div>)
}

export default LoginPage