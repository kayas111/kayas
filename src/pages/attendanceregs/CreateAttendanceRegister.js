
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import MyRegisters from './MyRegisters';
export function CreateAttendanceRegister(){
    const[status,setStatus]=useState('')
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
   
    return (<div>
         
<div class='row'>
<div class='col-md-3'></div>
<div class='col-md-6'><div style={{padding:"10px"}}>
      <div class="pageLabel">Send an SMS message to many contacts at once.</div>
      <div class="pageDescription">Create a register, save contacts in the register and send an SMS message to all the contacts at once. You can also make quick phones calls to all the contacts.</div>
<AttendenceRegisterNav/>
<p></p>
         <form method="post" id="attendanceRegisterCreateForm" action="#">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Create register</div></div>
      
       <div class="mb-3">
        <div class="formInputLabel">Name of register</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="attendanceRegisterTitle" ></textarea>
     
     <br></br>
     
       </div>
       
       <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
       <div  onClick={
       
         ()=>{

if(IsLoggedIn(cookies)===true){
  
          
  if(Array.from(document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value).length<1){
    ToastAlert('toastAlert2','Type a name for the register',3000)
              
    
    }  
    else{
           
        ToastAlert('toastAlert1','Please wait.........',3000)
        fetch(`/getTradingDetails/${cookies.user.contact}`).then(resp=>{
    
       return resp.json()}).then(response=>{
  
  let traderDetailsObj=response[0]
       
         if(traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens>0){
                             
           ToastAlert('toastAlert1','Creating............',3000)
      
           fetch('/createAttendanceRegister',{
       method:"post",
       headers:{'Content-type':'application/json'},
       body:JSON.stringify({
  registerTitle:document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value,
  institution:traderDetailsObj.institution,
  name:traderDetailsObj.name,
  contact:parseInt(traderDetailsObj.contact),
       })
   }).then(resp=>{
       
       return resp.json()}).then(res=>{
      
      if(res.registerLimitReached===1){
       ToastAlert('toastAlert2','Limit reached, cant create more registers',3000)
      }else{
       if(res.success===1){
         ToastAlert('toastAlert1','Successful, please wait......',3000)
         document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value=""
     
         window.location.href=`/pages/attendanceregs/${res.contact}/${res.registerId}`
       }else{
         
         ToastAlert('toastAlert2','Not created, try again',3000)
  
       }
      }
          
    
       })
     
          }
         else {
  
           ToastAlert('toastAlert2','Contact Kayas to create more registers',4000)
         }
        
       })
  
        
           
        
      
    }
           
}else{}

         }
       } class="form-submit-btn button1">Create register</div><p></p>
      
       </form>
       </div></div>
<div class='col-md-3'></div>
</div>
    
    
  
     </div>)
}

export default CreateAttendanceRegister