import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
import { ToastAlert } from '../Functions'
export function TradersCare(){
    const[updateTraderDetailsFormStatus,setUpdateTraderDetailsFormStatus]=useState('')
    const[setTraderNoticeStatus,setSetTraderNoticeStatus]=useState('')
    const[traders,setTraders]=useState('')
    const[traderNotice,setTraderNotice]=useState('')
    let data='';
    useEffect(()=>{
      fetch(`/collection_controls`).then(res=>res.json()).then(res=>{
       
        document.getElementById("setTraderNoticeForm").msg.value=res[0].traderNotice
    
      })
      fetch(`/collection_traders_number`).then(res=>res.json()).then(res=>{
       
   res.reverse()
      res.forEach(trader=>{
                       
        data+=`<div class='col-md-4'><div>Name: ${trader.name}</div><div>Contact: 0${trader.contact}</div><div>Acc bal: ${trader.accBal}</div><div>Visits: ${trader.pagesVisitsNo}</div><div>Institution: ${trader.institution}</div><hr></hr></div>`
      
      })
      
     setTraders(data);
    
      })
      
    })

    let style={padding:"3px"}
    return(<div>
    <div style={{fontSize:"20px",color:"red",textAlign:"center"}}>Traders Care</div>
    
    <ControlsNav/>
    <div class="row">
      <div class="col-md-6">
      <div style={{padding:"5px"}}> 
      
        <form id="updateTraderDetailsForm" >
        <div style={{paddingBottom:"8px"}}><div class="formLabel">Update Trader details</div></div>
        <div style={{fontSize:"12px"}}>accBal,sendSmsTokens,createAttendanceRegisterTokens</div>
      <div class="mb-3">
  <input type="text" class="form-control" autoComplete="off" name="contact" placeholder="Enter trader's contact" ></input><br></br>
  <input type="text" class="form-control" autoComplete="off" name="fieldToUpdate" placeholder="Enter field to update" ></input><br></br>
  
  <div style={{display:"flex",flexWrap:"wrap"}}>
<div style={style}><div class="button1"
 onClick={()=>{
        
  if(Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length<10||Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length>10){
    ToastAlert('toastAlert2','Enter correct contact of 10 digits',3000)
  } 
  else{
    setUpdateTraderDetailsFormStatus('Updating ........')
    fetch('/updateTraderDetails',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({method:'updateAsAdmin',argsObj:{traderContact:parseInt(document.getElementById('updateTraderDetailsForm').contact.value),fieldToUpdate:'bnplEligibility',updateValue:'notApplicable'}

      }) 
  }).then(res=>res.json()).then((resp)=>{
    setUpdateTraderDetailsFormStatus(resp[0])

  ToastAlert('toastAlert1',`${resp.msg}`,3000)
     
  }
      

  )  



  }
  

}}

>Turn BNPL eligibility on/off</div></div>

  </div>
  
  <input type="text" class="form-control" autoComplete="off" name="updateValue" placeholder='Enter update value'></input>
   
      </div>
      <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:updateTraderDetailsFormStatus}}/>
      <div class="row">
  <div class="col-6 col-md-6">  <div style={{borderRadius:"18px",fontSize:"12px"}} 
  onClick={()=>{
        
        if(Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length<10||Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length>10){
          setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter contact of 10 digits</div>')
        } else if(Array.from(document.getElementById('updateTraderDetailsForm').fieldToUpdate.value).length<1){
          setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter field to update!</div>')
        } else if(Array.from(document.getElementById('updateTraderDetailsForm').updateValue.value).length<1){
          setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter an update value!</div>')
        }
        else{
          setUpdateTraderDetailsFormStatus('Updating ........')
          fetch('/updateTraderDetails',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({method:'updateAsAdmin',argsObj:{traderContact:parseInt(document.getElementById('updateTraderDetailsForm').contact.value),fieldToUpdate:document.getElementById('updateTraderDetailsForm').fieldToUpdate.value,updateValue:parseInt(document.getElementById('updateTraderDetailsForm').updateValue.value)}
    
            }) 
        }).then(res=>res.json()).then((resp)=>{
          setUpdateTraderDetailsFormStatus(resp[0])
           
        }
            
    
        )  
  
  
  
        }
        
  
      }}type="text" class="btn btn-success hovereffect">Update</div></div>
  
  
      </div>
    
  
      </form>
      </div>
      </div>
      <div class="col-md-6">
      <div style={{padding:"5px"}}> 
      
  
        <form id="setTraderNoticeForm" >
        <div style={{paddingBottom:"8px"}}><div class="formLabel">Set trader notice</div></div>
      <div class="mb-3">
  <textArea type="text" class="form-control" autoComplete="off" name="msg" placeholder='Enter message' ></textArea>
  
   
      </div>
      <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:setTraderNoticeStatus}}/>
      <div class="row">
  
  <div class="col-6 col-md-6"><div style={{borderRadius:"18px",fontSize:"12px"}} class="btn btn-success hovereffect" 
  onClick={()=>{
        
    if(Array.from(document.getElementById('setTraderNoticeForm').msg.value).length<1){
      setSetTraderNoticeStatus('<div style="color:red;">Enter a message</div>')
    }
    else{
  
      setSetTraderNoticeStatus('Setting............')
      fetch('/setTraderNotice',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
  msg:document.getElementById("setTraderNoticeForm").msg.value,
  
        }) 
    }).then(res=>res.json()).then((resp)=>{
      setSetTraderNoticeStatus(resp[0])
    
     
    
       
       
    }
        
  
    )  
  
  
  
    }
    
  
  }}
  
  >Set notice</div></div>
  
      </div>
    
  
      </form>
      </div>
      </div>
    </div>
   
    <div style={{fontSize:"15px",padding:"5px",paddingTop:"40px"}} class='row' dangerouslySetInnerHTML={{__html:traders}}/>
    </div>)
  }

  export default TradersCare