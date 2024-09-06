
import React, {useEffect,useState} from 'react'
import { ToastAlert } from '../Functions';

import { AttendenceRegisterNav } from './AttendanceRegsHome';
import MyRegisters from './MyRegisters';
export function CreateAttendanceRegister(){
    const[status,setStatus]=useState('')
    return (<div>
           
      
         
    
    
<div class='row'>
<div class='col-md-3'></div>
<div class='col-md-6'><div style={{padding:"10px"}}>
      <div class="label1">Send an SMS message to many contacts at once.</div>
      <div class="label2">Create a register, save contacts in the register then send an SMS message to all the contacts at once. You can also make quick phones calls to all the contacts.</div>
<AttendenceRegisterNav/>
<p></p>
         <form method="post" id="attendanceRegisterCreateForm" action="#">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Create register</div></div>
      
       <div class="mb-3">
        <div class="formInputLable">Name of register</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="attendanceRegisterTitle" ></textarea>
     
     <br></br>
     <div class="formInputLable">Contact</div>
    <input type="text" class="form-control" autoComplete="off" name="contact"></input>
    
     <br></br>
     <div class="formInputLable">PIN</div>
       <input type="password" class="form-control" autoComplete="off" name="pin"></input>
      
     
       </div>
       
       <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
       <div  onClick={
       
         ()=>{
          
           if(Array.from(document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value).length<2){
  ToastAlert('toastAlert2','Type a name for the register',3000)
            
  
  }else if(Array.from(document.getElementById("attendanceRegisterCreateForm").contact.value.trim()).length<10||Array.from(document.getElementById("attendanceRegisterCreateForm").contact.value.trim()).length>10)
           {
            ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
           }else if(Array.from(document.getElementById("attendanceRegisterCreateForm").pin.value).length<5||Array.from(document.getElementById("attendanceRegisterCreateForm").pin.value).length>5)
           {
            ToastAlert('toastAlert2','Enter PIN',3000)
           }
  
  else{
      setStatus("<div style='color:green;'>Creating your Register, <span style='color:red;'>please wait ......</span></div>") 
      fetch('/verifyUser',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  contact:document.getElementById("attendanceRegisterCreateForm").contact.value,
  pin:document.getElementById("attendanceRegisterCreateForm").pin.value,
          }) 
      }).then(res=>res.json()).then((resp)=>{
      
          if(resp.registered===false){
            ToastAlert('toastAlert2','Not registered. Tap menu and register',3000)
          }
           else{
              if(resp.registered===true&&resp.pin===false){
                ToastAlert('toastAlert2','Incorrect PIN',3000)
      
              }else{
                              
                ToastAlert('toastAlert1','Please wait.........',3000)
           fetch(`/getTradingDetails/${resp.details.contact}`).then(resp=>{
       
          return resp.json()}).then(response=>{

let traderDetailsObj=response[0]
          
            if(traderDetailsObj.permissionTokensObj.createAttendanceRegisterTokens>0){
                                
              ToastAlert('toastAlert1','Creating............',3000)
           
              fetch('/createAttendanceRegister',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  registerTitle:document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value,
  institution:resp.details.institution,
  name:resp.details.name,
  contact:parseInt(document.getElementById("attendanceRegisterCreateForm").contact.value),
          })
      }).then(resp=>{
          
          return resp.json()}).then(res=>{
         
         if(res.registerLimitReached===1){
          ToastAlert('toastAlert2','Limit reached, cant create more registers',3000)
         }else{
          if(res.success===1){
            ToastAlert('toastAlert1','Successful, please wait......',3000)
            document.getElementById("attendanceRegisterCreateForm").attendanceRegisterTitle.value=""
            document.getElementById("attendanceRegisterCreateForm").contact.value=""
            document.getElementById("attendanceRegisterCreateForm").pin.value=""
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
              
            
          }
        
      }
          
  
      )
      
    
  }
         }
       } class="form-submit-btn">Create register</div><p></p>
      
       </form>
       </div></div>
<div class='col-md-3'></div>

<div class='col-md-3'></div>
<div class='col-md-6'><MyRegisters/></div>
<div class='col-md-3'></div>


</div>
    
    
  
     </div>)
}

export default CreateAttendanceRegister