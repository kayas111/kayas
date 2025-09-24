import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
export function Requests(){
  let data=""
 
  const [requests,setRequests]=useState('')
  const [requestManagementFormStatus,setRequestManagementFormStatus]=useState('')
 
      useEffect(()=>{
       
                   fetch('/collection_requests_requests').then(res=>res.json()).then(res=>{
                   
                      res.forEach(request=>{
                     
                        data+=`<div class='col-md-6' style='background-color:#E1E1E1;border:6px solid white;border-radius:12px;padding:10px;'> <div style='border-radius:10px;padding:3px;'><div>${request.name} - 0${request.contact}</div><div style='color:green;'>${request.serviceType}</div></div><div style='padding-top:5px;'>Recommender: 0${request.recommender}</div><div>ID: ${request._id}</div></div>`
                      
                      })
                      
                      setRequests(data);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Requests</div>
    <ControlsNav/>
<div class="row">
  <div class="col-md-4">
  <div style={{padding:"30px"}}>  
    
    <form id="requestManagementForm" >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Request management</div></div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="requestId" placeholder='Enter request ID' ></input>
 
    </div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:requestManagementFormStatus}}/>
    <div style={{borderRadius:"18px"}} onClick={()=>{
      
      if(Array.from(document.getElementById('requestManagementForm').requestId.value.trim()).length<24||Array.from(document.getElementById('requestManagementForm').requestId.value.trim()).length>24){
        setRequestManagementFormStatus('<div style="color:red;">Enter correct ID</div>')
      }else{
        setRequestManagementFormStatus('Clearing......')
        fetch('/clearRequest',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({requestId:document.getElementById('requestManagementForm').requestId.value})
  }).then(res=>res.json()).then(res=>{
    setRequestManagementFormStatus(res[0])
    document.getElementById('requestManagementForm').requestId.value=""
    
  })
      }
      
      
      
  

    }}type="text" class="btn btn-success hovereffect">Clear request</div>
    </form>
    </div>
 

  </div>

  
  </div>      

 <div style={{padding:"20px",fontSize:"15px"}}><div class="row" dangerouslySetInnerHTML={{__html:requests}}/></div>


  
  </div>
);
}

export default Requests