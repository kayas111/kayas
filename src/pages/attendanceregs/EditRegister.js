
import React, {useEffect,useState} from 'react'
import { ToastAlert } from '../Functions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';

export function EditRegister(){
    let componentParams=useParams()
    const[status,setStatus]=useState('')
    const[registerTitle,setRegisterTitle]=useState('')
    const[alert,setAlert]=useState('')
   
    useEffect(()=>{
      ToastAlert('toastAlert1','Please wait as we retrieve your Register ....',3000)
      
      fetch(`/attendanceregs/${componentParams.registrarContact}/${componentParams.registerId}`).then(res=>res.json()).then(resp=>{
  
        if(resp.presence===0){
            ToastAlert('toastAlert2','Does not exist',3000)
         setAlert('<div style="color:red;">This Register does not exist.</div>')
         setRegisterTitle('<div style="color:red;"> DOES NOT EXIST</div>')
        }else{
         
          setRegisterTitle(resp.registerTitle)
          document.getElementById("registerEditForm").registerTitle.value=resp.registerTitle
      setAlert(`<div style="color:green;">Successful. <span style="color:red;">${resp.name}</span> please proceed with editing your Register. <span style="color:red;">But remember</span> that editing your register will make you lose all your registered contacts.</div>`)
        }
      
  
      })
    },[])
    return (<div>
           <AttendenceRegisterNav/>
        <p></p>
      <div style={{padding:"20px"}}><div style={{color:"green", fontSize:"15px",fontWeight:""}}>Edit/clear register: <br></br><div style={{fontSize:'15px'}} dangerouslySetInnerHTML={{__html:registerTitle}}/></div>
   <p></p>   <div style={{fontSize:"15px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:alert}}/>
    <form method="post" id="registerEditForm" action="#">
     <div class="mb-3">
     <div class="row" style={{paddingBottom:"3px"}}><div class="col-6"><div style={{paddingBottom:"8px"}}><div class="formLabel">Register title</div></div></div><div style={{textAlign:"right"}}class="col-6"><div class="btn btn-danger btn-sm"
      onClick={()=>{document.getElementById("registerEditForm").registerTitle.value=''}}>Clear Title</div></div></div>
     <textarea rows="2" type="text" class="form-control" autoComplete="off" name="registerTitle" placeholder='Type the New title here'></textarea>
    <br></br>
   
    <input type="hidden" class="form-control" autoComplete="off" name="contact"defaultValue={componentParams.registrarContact}></input>
   <input type="password" class="form-control" autoComplete="off" name="pin"  placeholder="Enter your PIN e.g. 12345 (5 digits)" ></input>
    
   
     </div>
     
     <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
     <div style={{borderRadius:"18px"}}  onClick={
     
       ()=>{
        
         if(Array.from(document.getElementById("registerEditForm").registerTitle.value).length<2||Array.from(document.getElementById("registerEditForm").registerTitle.value).length>200){
            ToastAlert('toastAlert2','Enter register title',3000)
  
  }else if(Array.from(document.getElementById("registerEditForm").contact.value).length<9||Array.from(document.getElementById("registerEditForm").contact.value).length>10)
         {
            ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
         }else if(Array.from(document.getElementById("registerEditForm").pin.value).length<5||Array.from(document.getElementById("registerEditForm").pin.value).length>5)
         {
            ToastAlert('toastAlert2','Enter PIN',3000)
         }
  
  else{
    ToastAlert('toastAlert1','Please wait....',3000)
    fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
  contact:document.getElementById("registerEditForm").contact.value,
  pin:document.getElementById("registerEditForm").pin.value,
        }) 
    }).then(res=>res.json()).then((resp)=>{
       if(resp.registered===false){
        ToastAlert('toastAlert2','Not registered',3000)
        }
         else{
            if(resp.registered===true&&resp.pin===false){
                ToastAlert('toastAlert2','Incorrect PIN',3000)
          }else{
                          
            ToastAlert('toastAlert1','Please wait.....',3000)
            fetch('/editAttendeeRegister',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
  registerTitle:document.getElementById("registerEditForm").registerTitle.value,        
  registrarContact:parseInt(document.getElementById("registerEditForm").contact.value),
  registerId:parseInt(componentParams.registerId)
  })
    }).then(resp=>{
     
        return resp.json()}).then(response=>{
        if(response.registerPresent===0){
            ToastAlert('toastAlert2','Not permitted because of mismatches',3000)
        }else if(response.success===1){
            ToastAlert('toastAlert1','Successful',3000)
            window.location.href=`/pages/attendanceregs/${document.getElementById("registerEditForm").contact.value}/${componentParams.registerId}`
          
          document.getElementById("registerEditForm").contact.value=''
          document.getElementById("registerEditForm").pin.value=''
          document.getElementById("registerEditForm").registerTitle.value=''
  
        }else{
            ToastAlert('toastAlert2','Error, try again',3000)
        }
  
        })
  
         
            }
            
          
        }
       
    }
        
  
    )
    
  
  }
       }
     } class="btn btn-success hovereffect">Save</div><p></p>
    
     </form>
     </div>
  
   
  
     </div>)
  }
  
export default EditRegister  