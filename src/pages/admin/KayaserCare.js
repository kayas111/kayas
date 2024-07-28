import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
export function KayaserCare(){
    const[careDeleteKayaserStatus,setCareDeleteKayaserStatus]=useState('')
    const[careRegDetailsStatus,setCareRegDetailsStatus]=useState('')
    const[careUpdateDetailsStatus,setCareUpdateDetailsStatus]=useState('')
    const[careUpdatePermissionTokenStatus,setCareUpdatePermissionTokenStatus]=useState('')
    return (<div>
      <ControlsNav/>
      <div class="row">
      
      <div class="col-md-3"style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>GET REGISTRATION DETAILS</div>
      <div  dangerouslySetInnerHTML={{__html:careRegDetailsStatus}}/>
      <form id="getRegDetailsForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' ></input>
     
    
      </div>
     <div> <span type="submit" class="btn btn-success" onClick={()=>{
     
    
        
  if(Array.from(document.getElementById("getRegDetailsForm").contact.value).length<9||Array.from(document.getElementById("getRegDetailsForm").contact.value).length>10){
    setCareRegDetailsStatus("Enter correct contact")
  }else{
    setCareRegDetailsStatus("Please wait ...")
    let url='/admin_getDetails/'+document.getElementById("getRegDetailsForm").contact.value
    fetch(url).then(res=>res.json()).then(res=>{
  if(res.length===1){
      setCareRegDetailsStatus(res[0])
     }
     else{
      
      setCareRegDetailsStatus(`Name: ${res[1].name}<div>Institution: ${res[1].institution}</div><div>Email: ${res[1].email}</div><div>Contact: ${res[1].contact}</div>`)
     }
  
              })
  }
  
           
    
    
        }}>GET DETAILS</span></div>
      </form></div>
      <div class="col-md-3"style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>DELETE KAYASER</div>
      <div  dangerouslySetInnerHTML={{__html:careDeleteKayaserStatus}}/>
      <form id="deleteKayaserForm">
      <div class="mb-3">
    
      <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' minLength={10} required></input>
     
    
      </div>
     <div> <span type="submit" class="btn btn-success" onClick={()=>{
     
  if(Array.from(document.getElementById("deleteKayaserForm").contact.value).length<9||Array.from(document.getElementById("deleteKayaserForm").contact.value).length>10){
    setCareDeleteKayaserStatus("Enter correct contact.........")
  }else{
    setCareDeleteKayaserStatus("Please wait ......")
    let url='/admin_deleteKayaser/'+document.getElementById("deleteKayaserForm").contact.value
    fetch(url).then(res=>res.json()).then(res=>{
  
      setCareDeleteKayaserStatus(res[0])
      document.getElementById("deleteKayaserForm").contact.value=''
              })
  }
  
           
    
    
        }}>DELETE KAYASER</span></div>
      </form></div>
  
      <div class="col-md-3"style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>UPDATE REGISTRATION DETAILS</div>
      <div style={{fontSize:"9px",color:"grey"}}>name,stdNo,email,contact,pin,institution</div>
      <form id="updateDetailsForm" action="/admin_setPin">
      <div class="mb-3">
        <input  type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Enter name of  Field to update'></input><br></br>
      <input  type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Enter Value to update with'></input>
     
    
      </div>
      <div  dangerouslySetInnerHTML={{__html:careUpdateDetailsStatus}}/>
  
      <div type="submit" class="btn btn-success"onClick={()=>{
        setCareUpdateDetailsStatus("Updating ........")
              
           fetch('/admin_updateDetails',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
    contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
    fieldToUpdate:document.getElementById("updateDetailsForm").fieldToUpdate.value,
    fieldValue:document.getElementById("updateDetailsForm").fieldValue.value,
            }) 
        }).then(res=>res.json()).then(res=>{
          if(res.presence===0){
            setCareUpdateDetailsStatus("Doesn't exist as a Kayaser")
          }else{
  if(res.fieldPresent===0){
    setCareUpdateDetailsStatus("Field is not valid")
  }else {
    if(res.success===1){
    setCareUpdateDetailsStatus("successfull")
  }else{
  
    setCareUpdateDetailsStatus("Is already up to date")
  }
     }   }
  
          })
    
    
        }}>Update</div>
      </form></div>
      <div class="col-md-3"style={{padding:"20px"}}>  
      <div style={{color:"red", fontSize:"15px"}}>UPDATE PERMISSION TOKEN</div>
      <div style={{fontSize:"9px",color:"grey"}}>editArticle,createArticle,createAttendanceRegister</div>
      <form id="updatePermissionTokenForm" >
      <div class="mb-3">
        <input  type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Enter permission type to grant'></input><br></br>
      <input  type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Enter Value to update with'></input>
     
    
      </div>
      <div  dangerouslySetInnerHTML={{__html:careUpdatePermissionTokenStatus}}/>
  
      <div type="submit" class="btn btn-success"onClick={()=>{
  if(Array.from(document.getElementById("getRegDetailsForm").contact.value).length<9||Array.from(document.getElementById("getRegDetailsForm").contact.value).length>10){
    setCareUpdatePermissionTokenStatus("Enter atleast 9 digits of the contact.....")
  }else{
    fetch('/verifyUser',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
      contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
  pin:'11111'
      }) 
  }).then(res=>res.json()).then((resp)=>{
      if(resp.registered===false){
        setCareUpdatePermissionTokenStatus("<div style='color:green;'><span style='color:red;'>Not registered with Kayas!</div>")
     
  
      }
       else{
        
     
    setCareUpdatePermissionTokenStatus("Updating ........")
              
    fetch('/admin_updatePermissionToken',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
  contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
  fieldToUpdate:document.getElementById("updatePermissionTokenForm").fieldToUpdate.value,
  fieldValue:document.getElementById("updatePermissionTokenForm").fieldValue.value,
     }) 
  }).then(res=>res.json()).then(res=>{
    setCareUpdatePermissionTokenStatus(res[0])
   })
  
  
        
         }
     
  }
      
  
  )  
  
  
    
  }
  
       
    
        }}>Update token</div>
      </form></div>
  
      </div>
       
      </div>)
  }
export default KayaserCare  