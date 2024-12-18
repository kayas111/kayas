
import React, {useState,useEffect} from 'react'
import { ToastAlert,IsLoggedIn,SuspenseComponent } from '../Functions';
import {useCookies} from 'react-cookie'
export function MyRegisters(){
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[status,setStatus]=useState('')
    const[goToRegisterStatus,setGoToRegisterStatus]=useState('')
    let data=""
    const[myRegisters,setMyRegisters]=useState(<SuspenseComponent/>)
    useEffect(()=>{
if(IsLoggedIn(cookies)==true){
 
fetch('/getMyRegisters',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
    contact:parseInt(cookies.user.contact),
  })
}).then(resp=>{
 return resp.json()}).then(resp=>{
if(resp.length===0){
ToastAlert('toastAlert2','You have no registers. Create one',3000)
setTimeout(()=>{
  window.location.href='/pages/attendanceregs/createattendanceregister'
},4000)

}else{
  
resp.reverse()

setMyRegisters(
resp.map((register)=>{
return(
  <div class='col-sm-6 col-md-4'>
    <div style={{padding:"5px"}}  onClick={()=>{
      window.location.href=`/pages/attendanceregs/${register.contact}/${register.registerId}`
    }}>

<div style={{border:"1px solid orange",padding:"5px"}} class="backgroundColorHoverEffect3">
<div style={{fontWeight:"600",fontSize:"15px"}} >{register.registerTitle}</div>
<div>{register.attendees.length} contacts.</div>
</div>


    </div>
  </div>
)
})

)
ToastAlert('toastAlert1','Successful',3000)
}

    
   
    })
 
      

}else{

}




    },[])
           

    /*
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
             
     */
            return(<div>
  
      <div style={{padding:"5px"}}>
        
      <div id="myregisters" class="blackBgOrangeColor">My registers
      <div style={{color:"white",textAlign:"center",fontSize:"10px"}}>A list of all registers created by you.</div> 
      </div>
      <div style={{paddingTop:"3px"}}class="row">{myRegisters}</div>

 
 </div>


 
   
    
            </div>)
          
  }

  export default MyRegisters