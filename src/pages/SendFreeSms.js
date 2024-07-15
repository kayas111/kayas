import { useState,useEffect } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export function SendFreeSms(props){
    let componentParams=useParams(),maxCharLength=130,freeSmsUnitCost=50
    let [newMaxCharLength,SetNewMaxCharLength]=useState(maxCharLength)
    let [notice,setNotice]=useState('')
    let [updateTrigger,setUpdateTrigger]=useState(0)
    let [noOfSmsAvailable,setNoOfSmsAvailable]=useState(0)
    let [noOfFreeSmsUsers,setNoOfFreeSmsUsers]=useState('')
      
      let [sponsorContact,setSponsorContact]=useState('')
      let [allowPeopleToSendFreeSmsValue,setAllowPeopleToSendFreeSmsValue]=useState('')
      let [charLength,setCharLength]=useState('0')
     
      let [sendFreeSmsStatus,setSendFreeSmsStatus]=useState('')
    
    
    
    
    
    useEffect(()=>{
      
    if(parseInt(componentParams.sponsor)===NaN){
      setNotice("<div style='color:red;font-size:25px'>This account does not exist</div>")
    
    }else{
      fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
    contact:parseInt(componentParams.sponsor),
    pin:'11111'
        }) 
    }).then(res=>res.json()).then((resp)=>{
      
        if(resp.registered===false){
          setNotice("<div style='color:red;font-size:25px'>This account does not exist</div>")
       
        } else if(resp.registered===true){
          fetch(`/getTradingDetails/${parseInt(componentParams.sponsor)}`).then(res=>res.json()).then(resp=>{
    
    let traderDetailsObj=resp[0]
    //console.log(traderDetailsObj)
    setNotice(traderDetailsObj.freeSmsObj.freeSmsNotice)
    setNoOfSmsAvailable(traderDetailsObj.accBal/freeSmsUnitCost)
    setSponsorContact(traderDetailsObj.contact)
     setNoOfFreeSmsUsers(traderDetailsObj.freeSmsObj.freeSmsUsers.length)
    if(traderDetailsObj.freeSmsObj.allowFreeSmsSending===1){
      setAllowPeopleToSendFreeSmsValue('Yes')
    }else{
      setAllowPeopleToSendFreeSmsValue('No')
    }
    
    
    
    
          })
          
        } 
         else{
         ;
          
           }
       
    }
        
    
    )  
    
    
    }
    
    },[])
    
    useEffect(()=>{
      
      fetch(`/getTradingDetails/${parseInt(componentParams.sponsor)}`).then(res=>res.json()).then(resp=>{
    
        let traderDetailsObj=resp[0]
        
        
        setNoOfSmsAvailable(traderDetailsObj.accBal/freeSmsUnitCost)
        
        
              })
              
    },[updateTrigger])
    
    
    
    
    
    
      return (<div style={{padding:"5px"}}>
        <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
    
    
    <div style={{padding:"10px"}}>  
     <form id="sendFreeSmsForm" >
     <div style={{paddingBottom:"8px"}}><div class="formLabel" >Send Free SMS
     <div style={{paddingTop:"0px",fontSize:"10px"}}> <span style={{fontSize:"15px"}}>{noOfFreeSmsUsers}</span> people have sent SMS through this, you too can send. </div>
     
     </div></div>
        
     <div style={{color:"red",padding:"5px",fontSize:"17px"}} dangerouslySetInnerHTML={{__html:notice}}></div>
     
        
      
        <div style={{padding:"5px",paddingTop:"15px"}}>No. of SMS left: <span style={{color:"red"}}>{noOfSmsAvailable}</span></div>
       
       
         
        
        <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="receipient" placeholder='To: Enter contact to send to (10 digits)' ></input> <br></br>
    <input type="text" class="form-control" autoComplete="off" name="sender" placeholder='From: Enter your contact (10 digits)' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Enter your first name e.g Charles' onChange={
    ()=>{
      SetNewMaxCharLength(maxCharLength-Array.from(document.getElementById("sendFreeSmsForm").name.value.trim()).length)
    }
    } ></input>
    <br></br>
    <div style={{textAlign:"right"}} class="col-12">
        <div  class="btn btn-warning btn-sm"
          onClick={()=>{document.getElementById("sendFreeSmsForm").smsMessage.value=''}}>Clear message</div>
          
        </div>
    <div style={{padding:"3px"}}><span style={{color:"red"}}>{charLength}</span> out of {newMaxCharLength} characters maximum</div>
    
    
    
    <textArea rows="5" type="text" class="form-control" autoComplete="off" name="smsMessage" placeholder='Type SMS here. Your name and contact will automatically be added to the message' onChange={()=>{
      setCharLength(Array.from(document.getElementById("sendFreeSmsForm").smsMessage.value.trim()).length)
      
      
    }} ></textArea>
    
    
     
         </div>
         <div style={{fontSize:"12px"}}>
    
       </div>
        <div style={{padding:"10px",fontSize:"15px",textAlign:"center"}} dangerouslySetInnerHTML={{__html:sendFreeSmsStatus}}/>
       
        <div class="row">
         
    <div class="row col-12">
    <div class="col-6">
    <div style={{textAlign:"center"}}>Allowed to send SMS?</div>
    <div style={{color:"red",textAlign:"center",fontSize:"18px"}} dangerouslySetInnerHTML={{__html:allowPeopleToSendFreeSmsValue}}></div>
    </div>
      <div class="col-6"> <div style={{borderRadius:"18px"}} onClick={()=>{
    
    if(Array.from(document.getElementById('sendFreeSmsForm').receipient.value.trim()).length<10||Array.from(document.getElementById('sendFreeSmsForm').receipient.value.trim()).length>10){
      setSendFreeSmsStatus("<div style='color:red;'>Enter 10 digits for receipient's contact ......</div>")
      
    
    } else if(Array.from(document.getElementById('sendFreeSmsForm').sender.value.trim()).length<10||Array.from(document.getElementById('sendFreeSmsForm').sender.value.trim()).length>10){
      setSendFreeSmsStatus("<div style='color:red;'>Enter 10 digits for sender's contact......</div>")
      
    
    }
    else if(Array.from(document.getElementById('sendFreeSmsForm').name.value.trim()).length<2){
      setSendFreeSmsStatus("<div style='color:red;'>Please enter your name......</div>")
      
    
    }
    
    else if(Array.from(document.getElementById('sendFreeSmsForm').smsMessage.value.trim()).length<1){
      setSendFreeSmsStatus("<div style='color:red;'>Enter a message..........</div>")
      
    
    }
    else if(Array.from(document.getElementById('sendFreeSmsForm').smsMessage.value.trim()).length>newMaxCharLength){
    
    
      setSendFreeSmsStatus(`<div style='color:red;'>Your message is longer than ${newMaxCharLength} characters, please reduce ......</div>`)
      
    
    }
    
    else if(noOfSmsAvailable<0){
    
      setSendFreeSmsStatus(`<div style='color:red;'>No SMS left. Contact 0${parseInt(componentParams.sponsor)} to top up more SMS</div>`)
      
    
    }
    else if(allowPeopleToSendFreeSmsValue==='No'){
    
      setSendFreeSmsStatus(`<div style='color:red;'>Not allowed to send free SMS. Contact 0${parseInt(componentParams.sponsor)} to permit you</div>`)
      
    
    }
    
    else {
      setSendFreeSmsStatus(`<div style='color:green;'>Sending........</div>`)
     
      fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
    contact:sponsorContact,
    pin:'11111',
        }) 
    }).then(res=>res.json()).then((resp)=>{
             
        if(resp.registered===false){
         
          setSendFreeSmsStatus(`<div style='color:red;'>This account does not exist.</div>`)
        }
         else{
          let payLoad={method:"sendFreeSmsMessage",argsObj:{sponsor:sponsorContact,number:'256'+parseInt(document.getElementById('sendFreeSmsForm').receipient.value.trim()),senderName:document.getElementById('sendFreeSmsForm').name.value.trim(),senderContact:parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim()),senderid:'0'+parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim()),message:document.getElementById('sendFreeSmsForm').smsMessage.value.trim()+` (${document.getElementById('sendFreeSmsForm').name.value.trim()} 0${parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim())}) #SMS by Kayas`}}
       
        
          fetch('/sendSmsMessage',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(payLoad) 
        }).then(res=>res.json()).then((resp)=>{
    
    if(resp.success===1){
      setSendFreeSmsStatus(`<div style='color:green;'>Message sent <span class='fa fa-check'></span> to ${document.getElementById('sendFreeSmsForm').receipient.value} </div>`)
    setUpdateTrigger(updateTrigger+=1)
    document.getElementById('sendFreeSmsForm').receipient.value=''
    
    
    }else{
      setSendFreeSmsStatus(`<div style='color:red;'>Error must have occured!</div>`)
    }
    
        })
    
          }
       
    }
        
    
    )
    
    
    
    }
    
    
    
        }}type="text" class="btn btn-sm btn-success hovereffect">Send SMS</div></div>
       
    
    </div>
    
    </div>
    
    
        </form>
        
        </div>
        
    
    
    
    
    
    
    
    </div>
    <div class="col-md-3"></div>
    
        </div>
    
    
    <div style={{paddingTop:"40px"}}>
      
    </div>
    
    
    
    
    
      </div>)
    }

    export default SendFreeSms