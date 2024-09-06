


import React, {useEffect,useState} from 'react'
import { ToastAlert } from '../Functions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import { kayasDomainUrl } from '../../Variables';


export function AttendanceRegister(){
    let registerParams=useParams(),charactersPerSms=145
     const[status,setStatus]=useState('')
     const[status2,setStatus2]=useState('')
     const[sendSmsTokens,setSendSmsTokens]=useState('')
   
     const[retrieveStatus,setRetrieveStatus]=useState('')
       let formActionUrl=`/pages/attendanceregs/article/`
       const[registrarName,setRegistrarName]=useState('')
       const[messageesNumb,setMessageesNumb]=useState('')
       const[arrayOfAttendees,setArrayOfAttendees]=useState([])
       const[sendToContactRegisterStatus,setSendToContactRegisterStatus]=useState('')
       const[sendToContactRegisterName,setSendToContactRegisterName]=useState('')
       const[clickCharge,setClickCharge]=useState('10000')
       const[clickNumb,setClickNumb]=useState('10000')
       const[clickRate,setClickRate]=useState('100')
       const[messagees,setMessagees]=useState('')
       const[registrarContact,setRegistrarContact]=useState('')
       const[institution,setInstitution]=useState('')
       const[registerTitle,setRegisterTitle]=useState('Please wait......')
       const[accBal,setAccBal]=useState('Caltulating......')
       const[charLength,setCharLength]=useState('')
       const[noOfSms,setNoOfSms]=useState('')
       const[smsUnitCost,setSmsUnitCost]=useState('')
       const[smsCost,setSmsCost]=useState('caltulating.....')
     
       const [attendeeRegisterMessageStatus,setAttendeeRegisterMessageStatus]=useState('')
       const [attendeeRegisterSmsStatus,setAttendeeRegisterSmsStatus]=useState('')
       let contactsReceivedFlag=0
    
    
      const[registerPresentFlag,setregisterPresentFlag]=useState(1)
       
   function NoOfSmsCalculator(charLength){
 
 
     let smsArrayCategory=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],numbOfSms=1
     smsArrayCategory.reverse()
     smsArrayCategory.forEach(category=>{
       if(charLength<(category*charactersPerSms)+1){
         numbOfSms=category
       }else{
 ;
       }
     })
 
 return numbOfSms
 
   }
       
       let data="",whatsappAttendanceRegisterShareLink=`whatsapp://send?text=*${registerTitle}*%0A%0ATap link below to register:%0A${kayasDomainUrl}/pages/attendanceregs/${registerParams.registrar}/${registerParams.id}%0A%0A*Thank you.*`,
       kayasWhatsappGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'
      useEffect(()=>{
      
         fetch(`/attendanceregs/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(registerDataDoc=>{
                
           if(registerDataDoc.presence===0){
          
             setRegisterTitle("This Register does not exist. Please try another or create your own register too for free")
             setRegistrarName("Kayas 0703852178-WhatsApp")
           }else{
                 
             setRegistrarName(registerDataDoc.name)
             setInstitution(registerDataDoc.institution)
             setRegisterTitle(registerDataDoc.registerTitle)
             setRegistrarContact(registerDataDoc.contact)
         
             fetch(`/attendeesMessage/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
         
               setSmsUnitCost(res.smsUnitCost)
               let noDelaySmsUnitCost=res.smsUnitCost
               setNoOfSms(NoOfSmsCalculator(Array.from(res.smsmessage).length))
               setCharLength(Array.from(res.smsmessage).length)
             //  document.getElementById("setAttendeeRegisterMessageForm").message.value=res.message
            document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=res.smsmessage
          
            setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value).length)*noDelaySmsUnitCost*res.attendees.length)
 
         
                
         }) 
           
          
         
           }
          
           
         })
 
 
         fetch(`/attendees/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
           setMessageesNumb(res.registerDoc.attendees.length)
           setArrayOfAttendees(res.registerDoc.attendees)
 
            
         })
         fetch(`/getTradingDetails/${registerParams.registrar}`).then(res=>res.json()).then((resp)=>{
 
 setAccBal(resp[0].accBal)
 setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
 
         })
 
 
         },[])
  
 
       
       //return statement
           /*    <div class='col-md-6'style={{padding:"30px"}}>  
  <form id="setAttendeeRegisterMessageForm" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Set WhatsApp message</div></div>
     
     <div style={{paddingBottom:"5px"}}>This section is for the Register Admin, {registrarName} </div><div style={{fontSize:"10px", color:"grey",paddingBottom:"5px"}}><span style={{color:"red"}}>Warning: </span>Do not use '#' in your message  because it will interfere with your message!<br></br>To create a paragraph, use %0A%0A i.e. percentage sign, digit zero then capital letter A, twice. For a new line use only %0A.<br></br><span style={{color:"red"}}>Please endeavor to use the normal whatsapp messenger to send messages but not TM whatsapp and others.</span>
     <br></br><span style={{color:"red"}}>Do not use apostrophes in your message for example, do not write "don't", instead write in full as "do not", for a word like "you're", write in full as "you are"</span>
     </div>
   <div style={{textAlign:"right",paddingBottom:"3px"}}><div class="btn btn-warning btn-sm"
       onClick={()=>{document.getElementById("setAttendeeRegisterMessageForm").message.value=''}}>Clear message</div></div>
     
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <textArea rows="5" type="text" class="form-control" autoComplete="off" name="message" placeholder='Enter your message here'></textArea><br></br>
 <input type="password" class="form-control" autoComplete="off" name="pin" placeholder='Enter your PIN' ></input>  
      </div>
     <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:attendeeRegisterMessageStatus}}/>
     <div style={{borderRadius:"18px"}} onClick={()=>{
 
 if(Array.from(document.getElementById('setAttendeeRegisterMessageForm').contact.value).length<9||Array.from(document.getElementById('setAttendeeRegisterMessageForm').contact.value).length>10){
   setAttendeeRegisterMessageStatus("<div style='color:red;'>Enter contact of 10 digits ......</div>")
 
 }
 else if(Array.from(document.getElementById('setAttendeeRegisterMessageForm').pin.value).length<5||Array.from(document.getElementById('setAttendeeRegisterMessageForm').pin.value).length>5){
   setAttendeeRegisterMessageStatus("<div style='color:red;'>Enter 5 digits PIN</div>")
 }else{
   fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
 contact:document.getElementById("setAttendeeRegisterMessageForm").contact.value,
 pin:document.getElementById("setAttendeeRegisterMessageForm").pin.value,
     }) 
 }).then(res=>res.json()).then((resp)=>{
          
     if(resp.registered===false){
      
       setAttendeeRegisterMessageStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas.</div>")
     }
      else{
         if(resp.registered===true&&resp.pin===false){
           setAttendeeRegisterMessageStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
 
         }else{
           setAttendeeRegisterMessageStatus("<div style='color:green;'>Setting, please wait ...........</div>")
           fetch('/setAttendeeRegisterMessagee',{
             method:"post",
             headers:{'Content-type':'application/json'},
             body:JSON.stringify({
               registrarContact:parseInt(document.getElementById("setAttendeeRegisterMessageForm").contact.value),
        message:document.getElementById("setAttendeeRegisterMessageForm").message.value,
        registerId:parseInt(registerParams.id)
       
             }) 
         }).then(res=>res.json()).then(resp=>{
           setAttendeeRegisterMessageStatus(resp[0])
         })
 
 
 
         }
         
       
     }
    
 }
     
 
 )
 
 
 }
     }}type="text" class="btn btn-success hovereffect">Set/save message</div>
     </form>
     
     </div>*/
      
      
          return(
              
             <div>
              <div class="row">
<div class="col-md-6">  <div style={{fontSize:"20px",padding:"3px",fontWeight:"500"}}>{registerTitle}</div>
                         <div style={{fontSize:"12px",color:"",paddingLeft:"5px",textDecoration:"underline"}}>Register ID: {registerParams.id} Created by: {registrarName} 0{registrarContact}</div>
        </div>
<div class="col-md-6"><AttendenceRegisterNav/></div>

              </div>
           
                         
        
        <div style={{padding:"5px"}}>         
           <div class="row">
            <div class='col-md-6' style={{padding:"15px"}}>  
            <div class="label1">Save contact or go to bottom to display</div>
            <div  class="label2">Add a contact to the register</div>
    <form id="messengingForm" >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Save contact</div></div>
     <div  style={{color:'green',textAlign:"center"}}><span style={{color:'red'}}>{messageesNumb}</span> contacts in the list.</div>
     
     <div class="mb-3">
     <div class="formInputLabel">Name or description (optional)</div>
     <textarea row="2" type="text" class="form-control" autoComplete="off" name="name" ></textarea><br></br>
     <div class="formInputLabel">Contact</div>
 <input type="text" class="form-control" autoComplete="off" name="contact"></input>
   </div>
  <div class="row">
  
   <div>
   <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:status}}/>
   <div class='row'>
     <div class="col-6">
     <div onClick={()=>{
 let name;
 if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
 ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }
 else{
   if(Array.from(document.getElementById('messengingForm').name.value).length<2){
 name=""
   }else{
 name=document.getElementById('messengingForm').name.value.trim()
   }
   ToastAlert('toastAlert1','Saving......',3000)
   fetch(`/getTradingDetails/${registrarContact}`).then(res=>res.json()).then(resp=>{
     let traderDetailsObj=resp[0]
   fetch(`/addToAttendeesRegister`,{
     method:"post",
     headers:{"Content-type":"application/json"},
     body:JSON.stringify({name:name,contact:parseInt(document.getElementById('messengingForm').contact.value.trim()),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
   }).then(res=>res.json()).then(res=>{
 
  if(res.registerPresent===0){
   ToastAlert('toastAlert2','Register does not exist',3000)
 
  
 }
 else{
   if(res.success===1){
     ToastAlert('toastAlert1','Successful, save another',3000)
     document.getElementById('messengingForm').contact.value=""
     document.getElementById('messengingForm').name.value=""
     setMessageesNumb(res.attendees.length)
   }else if(res.success==='memberPresent'){
     ToastAlert('toastAlert2','Contact already exists',3000)
     document.getElementById('messengingForm').contact.value=""
     document.getElementById('messengingForm').name.value=""
 
   }else {
     ToastAlert('toastAlert2','Error occured, try again',3000)
   }
  }
    
 
 
 
 })
 
 
 
 
 
 
 
 
 
 
            })
 
 
 
 
 
 
 
 
 
 }
 
 
     }}type="text" class="button1"><span class="fa fa-user-circle"></span> Save</div>
     </div>
     <div class="col-6">
     <div onClick={()=>{
 if(Array.from(document.getElementById('messengingForm').contact.value.trim()).length<10||Array.from(document.getElementById('messengingForm').contact.value.trim()).length>10){
   ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }
 else{
   setStatus("<div style='color:green;'>Getting details......</div>")
   if(arrayOfAttendees.length===0){
     ToastAlert('toastAlert2','Register not ready, try again',3000)
   }else{
     let index=0,position,details,contact=parseInt(document.getElementById('messengingForm').contact.value)
     arrayOfAttendees.forEach(attendeeDoc=>{
     
       if(attendeeDoc.contact===contact){
       
         position=index+1
         details=attendeeDoc
       }else{
 
       }
 
       index++
     })
 if(position===undefined){
   ToastAlert('toastAlert2','Not in the list',3000)
 }else{
   ToastAlert('toastAlert1',`${details.name} at position ${position} in the list`,4000)
   
 }
  
 
   }
 }
 
 
     }}type="text" class="button1"> Get details</div>
     </div>
 
 </div>
 </div>
     
     </div>
     </form>
     
     </div>
 <div class='col-md-6'style={{padding:"15px"}}>  
     <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:status2}}/>
     <div class="label1">Delete</div>
     <div class="label2">Remove a contact in this register</div>
     
    <form id="removeMessagee" >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Delete contact</div></div>
     <div class="mb-3">
       <div class="fomrInputLabel">Enter contact</div>
 <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
     </div>
  
     <div onClick={()=>{
 
 if(Array.from(document.getElementById('removeMessagee').contact.value.trim()).length<9||Array.from(document.getElementById('removeMessagee').contact.value.trim()).length>10){
 ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 document.getElementById('messengingForm').contact.value=""
 }else{
   
   fetch('/removeFromAttendeesRegister',{
     method:"post",
     headers:{"Content-type":"application/json"},
     body:JSON.stringify({contact:parseInt(document.getElementById('removeMessagee').contact.value),registrarContact:registrarContact,registerId:parseInt(registerParams.id)})
   }).then(res=>res.json()).then(res=>{
 if(res.registerPresent===0){
   setStatus2(`<div style='color:red;'>You can not proceed with the action because the Regsiter is not present</div>`)
 
 }else{
   ToastAlert('toastAlert1','Removing.......',2000)
  if(res.attendeeInList===0){
   ToastAlert('toastAlert2','not in the list',3000)
 }else{
 if(res.success===1){
   ToastAlert('toastAlert1','Successful',2000)
   document.getElementById('removeMessagee').contact.value=''
   setMessageesNumb(messageesNumb-1)
 }else{
   ToastAlert('toastAlert1','Error occured, try again',3000)
   document.getElementById('removeMessagee').contact.value=''
 
 }
 
 
 }
 
 }
 
   })
 }
     }}type="text" class="button1"><span class="fa fa-trash"></span> Delete</div>
     </form>
     
     </div>
     <div style={{paddingTop:"15px",padding:"5px",textAlign:"center"}}>
             <div>Created by:</div>
             <div style={{fontSize:"22px"}}>{registrarName}</div>
             <div>{institution} 0{registrarContact}</div>
             </div>
 
             <div style={{padding:"30px"}}><div style={{color:"red",fontSize:"20px",textAlign:"center",paddingTop:"20px",borderBottom:"1px solid red"}}>Below here is only for the Admin</div></div>
       
     <div class='col-md-6'style={{padding:"15px"}}>  
     <div class="label1">Send SMS message</div>
     <div class="label2">Send a customized message to all contacts in this register</div>
  <form id="setAttendeeRegisterSmsForm" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Set SMS message</div></div>
   
     <div style={{paddingBottom:"5px"}}>This section is for the Register Admin, {registrarName} </div>
     
   <div style={{textAlign:"right",paddingBottom:"3px"}}><div class="btn btn-warning btn-sm"
       onClick={()=>{document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=''}}>Clear message</div></div>
     
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <div class="formInputLabel">Enter message</div>
 <textarea rows="5" type="text" class="form-control" autoComplete="off" name="smsmessage" onChange={()=>{
   setCharLength(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)
   setNoOfSms(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length))
   setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)*smsUnitCost*messageesNumb)
 }} ></textarea>
 <div style={{fontSize:"10px",paddingTop:"5px",paddingBottom:"5px"}}>1 SMS={charactersPerSms} characters. <span style={{color:"red",fontSize:"15px"}}>{charLength} </span> characters typed = <span style={{color:"red",fontSize:"15px"}}>{noOfSms}</span> SMS, Rate: {smsUnitCost}/= per SMS </div>
 <div >Cost for {messageesNumb} contacts: <span style={{color:"red"}}>{smsCost}</span> </div>
 
 <div style={{fontSize:"19px"}}>Balance: {accBal}/=</div>
 <div >Sending times left: <span style={{color:"red"}}>{sendSmsTokens}</span> </div><br></br>
 <div class="formInputLabel">PIN</div>
 <input type="password" class="form-control" autoComplete="off" name="pin" ></input>  
      </div>
      <div style={{fontSize:"12px"}}>
    </div>
     <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:attendeeRegisterSmsStatus}}/>
    
     <div class="row">
       <div class="col-6">
     <div onClick={()=>{
 
 if(Array.from(document.getElementById('setAttendeeRegisterSmsForm').contact.value.trim()).length<9||Array.from(document.getElementById('setAttendeeRegisterSmsForm').contact.value.trim()).length>10){
   ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 
 }
 else if(Array.from(document.getElementById('setAttendeeRegisterSmsForm').pin.value.trim()).length<5||Array.from(document.getElementById('setAttendeeRegisterSmsForm').pin.value.trim()).length>5){
   ToastAlert('toastAlert2','Enter PIN of 5 digits',3000)
 }else{
   fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
 contact:document.getElementById("setAttendeeRegisterSmsForm").contact.value,
 pin:document.getElementById("setAttendeeRegisterSmsForm").pin.value,
     }) 
 }).then(res=>res.json()).then((resp)=>{
          
     if(resp.registered===false){
      
       ToastAlert('toastAlert2','Not registered. Tap menu and register',3000)
     }
      else{
         if(resp.registered===true&&resp.pin===false){
           ToastAlert('toastAlert2','Incorrect PIN',3000)
 
         }else{
           ToastAlert('toastAlert1','Setting......',2000)
           fetch('/setAttendeeRegisterSms',{
             method:"post",
             headers:{'Content-type':'application/json'},
             body:JSON.stringify({
               registrarContact:parseInt(document.getElementById("setAttendeeRegisterSmsForm").contact.value),
        smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
        registerId:parseInt(registerParams.id)
       
             }) 
         }).then(res=>res.json()).then(resp=>{
           setAttendeeRegisterSmsStatus(resp[0])
           ToastAlert('toastAlert1',`${resp[0]}`,3000)
 
         })
 
 
 
         }
         
       
     }
    
 }
     
 
 )
 
 
 }
     }}type="text" class="button1">Set/save SMS</div>
 </div>
 <div class="col-6">
     <div onClick={()=>{
 
 if(Array.from(document.getElementById('setAttendeeRegisterSmsForm').contact.value.trim()).length<9||Array.from(document.getElementById('setAttendeeRegisterSmsForm').contact.value.trim()).length>10){
   ToastAlert('toastAlert2','Enter contact of 10 digits',3000)
 
 } else if(Array.from(document.getElementById('setAttendeeRegisterSmsForm').smsmessage.value).length<1||Array.from(document.getElementById('setAttendeeRegisterSmsForm').pin.value).length>5){
   ToastAlert('toastAlert2','Enter a message',3000)
 }
 else if(Array.from(document.getElementById('setAttendeeRegisterSmsForm').pin.value.trim()).length<5||Array.from(document.getElementById('setAttendeeRegisterSmsForm').pin.value.trim()).length>5){
   ToastAlert('toastAlert2','Enter pin of 5 digits',3000)
 } else if(accBal<smsCost){
   ToastAlert('toastAlert2','Low balance, contact Kayas to top up',3000)
 }
 else if(sendSmsTokens<1){
   ToastAlert('toastAlert2','Zero times of sending. Contact Kayas to top up.',4000)
 }
 
 else{
   fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
 contact:document.getElementById("setAttendeeRegisterSmsForm").contact.value.trim(),
 pin:document.getElementById("setAttendeeRegisterSmsForm").pin.value.trim(),
     }) 
 }).then(res=>res.json()).then((resp)=>{
          
     if(resp.registered===false){
      
       ToastAlert('toastAlert2','Not registered. Tap menu to register',3000)
     }
      else{
         if(resp.registered===true&&resp.pin===false){
           ToastAlert('toastAlert2','Incorrect PIN',3000)
 
         }else{
           ToastAlert('toastAlert1','Sending.........',3000)
          
           document.getElementById("setAttendeeRegisterSmsForm").pin.value=''
           fetch('/sendAttendeeRegisterSms',{
             method:"post",
             headers:{'Content-type':'application/json'},
             body:JSON.stringify({
               registrarContact:parseInt(document.getElementById("setAttendeeRegisterSmsForm").contact.value),
        smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
        registerId:parseInt(registerParams.id),
        smsCost:smsCost
       
             }) 
         }).then(res=>res.json()).then(resp=>{
           setAttendeeRegisterSmsStatus(resp[0])
           ToastAlert('toastAlert1',`${resp[0]}`,3000)
           fetch(`/getTradingDetails/${registerParams.registrar}`).then(res=>res.json()).then((resp)=>{
 
             setAccBal(resp[0].accBal)
             setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
                     })
 
 
         })
 
 
 
         }
         
       
     }
    
 }
     
 
 )
 
 
 }
     }}type="text" class="button1">Send SMS</div>
 </div>
 
 </div>
 
 
     </form>
     
     </div>
     
     <div class='col-md-6'style={{padding:"15px"}}>  
     <div class="label1">Transfer/share contact</div>
     <div class="label2">Send a copy of a contact to your other register. Enter the register ID to identify the register to send to.</div>
  <form id="sendContactToRegister" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Send contact to a register</div></div>
     <div style={{paddingBottom:"5px"}}>This section is for the Register Admin, {registrarName} </div>
     <div style={{paddingTop:"5px"}}>Sending to: <span style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterName}}/> </div>
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="registrarContact" defaultValue={registrarContact} ></input>
 <div class="formInputLabel">Enter the ID of the register to send to</div>
 <input type="text" class="form-control" autoComplete="off" name="registerId"  
 onChange={
   ()=>{
     
   setSendToContactRegisterName('Searching for register.........')
   fetch('/getAttendanceRegDetails',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
      registrarContact:registrarContact,
      registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value),
      
      
     }) 
 }).then(res=>res.json()).then(resp=>{
   if(resp.length===0){
     ToastAlert('toastAlert2','You have no register with that ID',3000)
   }else{
     setSendToContactRegisterName(`${resp[0].registerTitle}`)
     ToastAlert('toastAlert1',`Sending to ${resp[0].registerTitle} `,4000)
 
   }
 })
   }
 }></input> <br></br>
 <div class="formInputLabel">Enter a position corresponding to the contact e.g. 1,2,3...</div>
 <input type="text" class="form-control" autoComplete="off" name="contactPosition" ></input> 
      </div>
     
     <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:sendToContactRegisterStatus}}/>
     
     <div onClick={()=>{
       
 
       if(parseInt(document.getElementById("sendContactToRegister").contactPosition.value)==='NaN'){
         ToastAlert('toastAlert2','Enter a position corresponding to a contact e.g 1,2,3,....',3000)
       }else{
 
       let contactPosition=parseInt(document.getElementById("sendContactToRegister").contactPosition.value)
       if(contactPosition<1){
         ToastAlert('toastAlert2','Position can not be less than 1',3000)
       }else{
 
         let attendeeDoc=arrayOfAttendees[contactPosition-1]
                
                if(attendeeDoc===undefined){
                 ToastAlert('toastAlert2',`Refresh the page to update OR position ${document.getElementById("sendContactToRegister").contactPosition.value} does not exist in this register`,7000)
                 
                }else{
                 fetch(`/addToAttendeesRegister`,{
                   method:"post",
                   headers:{"Content-type":"application/json"},
                   body:JSON.stringify({name:attendeeDoc.name,contact:attendeeDoc.contact,registrarContact:registrarContact,registerId:parseInt(document.getElementById("sendContactToRegister").registerId.value)})
                 }).then(res=>res.json()).then(resp=>{
                   
                   if(resp.success===1){
                     ToastAlert('toastAlert1','Successful',3000)
                     document.getElementById("sendContactToRegister").contactPosition.value=''
                   }else if(resp.success==='memberPresent'){
                     ToastAlert('toastAlert2','Contact is already in the register you are sending to',4000)
                     document.getElementById("sendContactToRegister").contactPosition.value=''
                   } else if(resp.registerPresent===0){
                     ToastAlert('toastAlert2','Register does not exist',3000)
                     document.getElementById("sendContactToRegister").contactPosition.value=''
                   }
                   else{
         
                   }
                 })
                 
                }
         
 
       }
 
     
       }
       }}type="text" class="button1">Send</div>
     </form>
     
     </div>
     
     <div class='col-md-6'style={{padding:"15px"}}>  
   <div class="label1">Display contacts</div>
   <div class="label2">Show all contacts in this register</div>
  <form id="retrieveMessagee" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Display contacts ({messageesNumb})</div></div>
     <div style={{paddingBottom:"5px"}}>This section is for the Register Admin, {registrarName} </div>
   
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <div class="formInputLabel">PIN</div>
 <input type="password" class="form-control" autoComplete="off" name="pin" ></input>  
      </div>
     <div style={{fontSize:"10px"}}>{clickNumb} clicks, Rate: {clickRate}/= per click, Amount to pay: {clickCharge}</div>
     <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:retrieveStatus}}/>
     
     <div onClick={()=>{
 ToastAlert('toastAlert1','Please wait......',3000)
 setTimeout(()=>{
   if(contactsReceivedFlag===0){
     ToastAlert('toastAlert1','Gaining network, please wait......',8000)
   }else{
   ;
   }
    
   
   
      },11500)
 
 if(Array.from(document.getElementById('retrieveMessagee').contact.value.trim()).length<9||Array.from(document.getElementById('retrieveMessagee').contact.value.trim()).length>10){
   ToastAlert('toastAlert2','Wait for network......',3000)
 
 }else if(Array.from(document.getElementById('retrieveMessagee').pin.value.trim()).length<5||Array.from(document.getElementById('retrieveMessagee').pin.value.trim()).length>5){
   ToastAlert('toastAlert2','Enter PIN of 5 digits',3000)
 }else{
   fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
 contact:document.getElementById("retrieveMessagee").contact.value,
 pin:document.getElementById("retrieveMessagee").pin.value,
     }) 
 }).then(res=>res.json()).then((resp)=>{
          
     if(resp.registered===false){
       contactsReceivedFlag=1
       ToastAlert('toastAlert2','Not registered. Tap menu to register',3000)
     }
      else{
         if(resp.registered===true&&resp.pin===false){
           contactsReceivedFlag=1
           ToastAlert('toastAlert2','Incorrect PIN',3000)
 
         }else{
           ToastAlert('toastAlert1','Getting contacts, please wait.......',3000)
           fetch(`/attendeesMessage/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
          
 let message=res.message
 
 fetch(`/attendees/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
   let responseDoc=res,position=1,registerDoc=responseDoc.registerDoc
  
   contactsReceivedFlag=1
             setMessageesNumb(responseDoc.registerDoc.attendees.length)
             let num=1
           
  if(responseDoc.closed===true){
   ToastAlert('toastAlert2','Register closed. Contact Kayas',3000)
  }else{
   
   
  registerDoc.attendees.forEach(attendeeObj=>{
     attendeeObj.position=position
     position++
   })
 
 
   setMessagees(
    registerDoc.attendees.map(attendeeObj=>{
     return (<div style={{padding:"5px"}}>
 <div class="row" style={{background:"white",borderRadius:"20px"}}><div class="col-6">{attendeeObj.position}. {attendeeObj.name}</div><div class="col-6" style={{textAlign:"right"}}>
   
 
 <a  onClick={()=>{
   window.location.href=`tel:0${attendeeObj.contact}`
 }}><span class="hovereffect"> <span class="fa fa-phone "></span></span></a> 0{attendeeObj.contact} <a  onClick={()=>{
   window.location.href=`https://wa.me/256${attendeeObj.contact}?text=Hello ${attendeeObj.name}, I would like to speak to you briefly. Is it okay?%0A%0AI am *${registerDoc.name.trim()}*%0A%0A____________________%0A${attendeeObj.position}`
 }}><span class="hovereffect"> <span class="fa fa-whatsapp "></span></span> </a>   </div>  </div>
 
 
     </div>)
   }))
   
 
   ToastAlert('toastAlert1','Successful. Scroll to see',3000)
 
  }
 
 
 
   
             })
 
 
           })
 
  
 
 
         }
         
       
     }
    
 }
     
 
 )
 
 
 
 
 }
     }}type="text" class="button1">Display/Refresh</div>
     </form>
     
     </div>
             </div>
            
 </div>
 
     <p></p>
     
 <div style={{background:"#e9e8e8",padding:"10px"}}>{messagees}</div>    
      
           <div class="row"style={{textAlign:"center",padding:"20px",fontSize:"15px"}}>
           
          <div class="col-md-3"></div>
          <div class="col-md-6"><div style={{borderRadius:"40px",border:"1px solid green",padding:"5px"}}>
          <a style={{color:"green",fontSize:""}} href='/pages/brocode'>
               <span  class="hovereffect">Get to know Kayas </span> </a><br></br>
              <a style={{color:"green",fontSize:""}} href="https://twitter.com/isaacopiokayas">
               <span  class="hovereffect">Follow Kayas on Twitter, tap here <span  class="fa fa-twitter"></span></span> </a>
              <br></br>
              <a style={{color:"green",fontSize:""}} href={kayasWhatsappGroupLink}>
               <span  class="hovereffect">Join Kayas WhatsApp group, tap here <span  class="fa fa-whatsapp"></span></span> </a>
               <br></br>
              
             
               
               </div>
               
               <div style={{padding:"10px"}}>Share to WhatsApp friends or Groups <br></br> <a style={{color:"green"}} href={whatsappAttendanceRegisterShareLink}><span  class="btn btn-warning hovereffect"><span class='fa fa-whatsapp'></span> Share this Register</span></a></div>
               
               </div>
           
               <div class="col-md-3"></div>
     
           </div>
            
             </div>
               
              
             );
             
             
        //return statement
       
       
       }
 
       
       export default AttendanceRegister