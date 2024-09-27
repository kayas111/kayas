import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn } from '../Functions';
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { AttendenceRegisterNav } from './AttendanceRegsHome';
import { kayasDomainUrl } from '../../Variables';


export function SendSms(){

    let registerParams=useParams(),charactersPerSms=145
    
     const[status,setStatus]=useState('')
     const [cookies]=useCookies(['user'])
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
       const[accBal,setAccBal]=useState('calculating......')
       const[charLength,setCharLength]=useState('')
       const[noOfSms,setNoOfSms]=useState('')
       const[smsUnitCost,setSmsUnitCost]=useState('')
       const[smsCost,setSmsCost]=useState('calculating.....')
     
       const [attendeeRegisterMessageStatus,setAttendeeRegisterMessageStatus]=useState('')
       
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
      
         fetch(`/attendanceregs/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(registerDataDoc=>{
                
           if(registerDataDoc.presence===0){
          
             setRegisterTitle("This Register does not exist. Please try another or create your own register too for free")
             setRegistrarName("Kayas 0703852178-WhatsApp")
           }else{
            
             setRegistrarName(registerDataDoc.name)
             setInstitution(registerDataDoc.institution)
             setRegisterTitle(registerDataDoc.registerTitle)
             setRegistrarContact(registerDataDoc.contact)
         

  /*
             fetch(`/attendeesMessage/${registerParams.registrar}/${registerParams.id}`).then(res=>res.json()).then(res=>{
         
               setSmsUnitCost(res.smsUnitCost)
               let noDelaySmsUnitCost=res.smsUnitCost
               setNoOfSms(NoOfSmsCalculator(Array.from(res.smsmessage).length))
               setCharLength(Array.from(res.smsmessage).length)
             //  document.getElementById("setAttendeeRegisterMessageForm").message.value=res.message
            document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=res.smsmessage
          
            setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value).length)*noDelaySmsUnitCost*res.attendees.length)
 
         
                
         }) 
           */


             fetch(`/attendeesMessage/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(res=>{
         
               setSmsUnitCost(res.smsUnitCost)
               let noDelaySmsUnitCost=res.smsUnitCost
               setNoOfSms(NoOfSmsCalculator(Array.from(res.smsmessage).length))
               setCharLength(Array.from(res.smsmessage).length)
             
            document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=res.smsmessage
          
            setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value).length)*noDelaySmsUnitCost*res.attendees.length)
 
         
                
         }) 
           
          
         
           }
          
           
         })
 
 
         fetch(`/attendees/${registerParams.registrarContact}/${registerParams.registerId}`).then(res=>res.json()).then(res=>{
            
           setMessageesNumb(res.registerDoc.attendees.length)
           setArrayOfAttendees(res.registerDoc.attendees)
 
            
         })
         fetch(`/getTradingDetails/${registerParams.registrarContact}`).then(res=>res.json()).then((resp)=>{
 
 setAccBal(resp[0].accBal)
 setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
 
         })
 
 IsLoggedIn(cookies)
         },[])
  
 



    return (<div>
<div class="row">
<div class="col-md-3"></div>
<div class='col-md-6'style={{padding:"15px"}}>  
<AttendenceRegisterNav/><p></p>
     <div class="blackBgOrangeColor">Send SMS to {registerTitle} <div style={{color:"white"}}>{messageesNumb} contacts</div></div>
     
 
 
 <div style={{fontSize:"19px"}}>Account balance: <span style={{color:"red",fontSize:"20px"}}>{accBal}/=</span></div>
 <div >Sending times left: <span style={{color:"red"}}>{sendSmsTokens}</span> </div>
 

 
 <br></br>
  <form id="setAttendeeRegisterSmsForm" >
  <div style={{paddingBottom:"8px"}}><div class="formLabel">Send to {registerTitle} </div></div>

     
   <div style={{textAlign:"right",paddingBottom:"3px"}}><div class="btn btn-sm btn-warning"
       onClick={()=>{document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value=''}}>Clear message</div></div>
     
     <div class="mb-3">
 <input type="hidden" class="form-control" autoComplete="off" name="contact" defaultValue={registrarContact} ></input>
 <div style={{fontSize:"12px",paddingTop:"5px",paddingBottom:"5px"}}>Rate: <span style={{fontSize:"20px",color:"red"}}>{charactersPerSms}</span> characters per contact = <span style={{fontSize:"20px",color:"red"}}>{smsUnitCost}/=</span> </div>
 <div>Cost for <span style={{fontSize:"20px",color:"red"}}>{charLength}</span> characters to <span style={{fontSize:"20px",color:"red"}}>{messageesNumb}</span> contacts = <span style={{fontSize:"20px",color:"red"}}>{smsCost}/=</span></div>
 <p></p>
 <div class="formInputLabel">Enter message</div>
 <textarea rows="5" type="text" class="form-control" autoComplete="off" name="smsmessage" onChange={()=>{
   setCharLength(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)
   setNoOfSms(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length))
   setSmsCost(NoOfSmsCalculator(Array.from(document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value.trim()).length)*smsUnitCost*messageesNumb)
 }} ></textarea>

      </div>
      <div style={{fontSize:"12px"}}>
    </div>
     
    
     <div style={{display:"flex",flexWrap:"wrap"}}>
       <div style={{padding:"5px"}}>
     <div onClick={()=>{
       ToastAlert('toastAlert1','Setting......',2000)
       fetch('/setAttendeeRegisterSms',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({
           registrarContact:parseInt(cookies.user.contact),
    smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
    registerId:parseInt(registerParams.registerId)
   
         }) 
     }).then(res=>res.json()).then(resp=>{
       
       ToastAlert('toastAlert1',`${resp[0]}`,3000)

     })


     }}type="text" class="button1">Save SMS</div>
 </div>
 <div style={{padding:"5px"}}>
     <div onClick={()=>{
      if(parseInt(accBal)<parseInt(smsCost)){
        ToastAlert('toastAlert2','Low account balance. Contact Kayas',3000)
      }else{
        if(window.confirm("Press OK to confirm")===true){
          
        
        ToastAlert('toastAlert1','Sending.........',3000)
          
                
        fetch('/sendAttendeeRegisterSms',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
            registrarContact:parseInt(cookies.user.contact),
     smsmessage:document.getElementById("setAttendeeRegisterSmsForm").smsmessage.value,
     registerId:parseInt(registerParams.registerId),
     smsCost:smsCost
    
          }) 
      }).then(res=>res.json()).then(resp=>{
        
        ToastAlert('toastAlert1',`${resp[0]}`,3000)
        fetch(`/getTradingDetails/${registerParams.registrar}`).then(res=>res.json()).then((resp)=>{

          setAccBal(resp[0].accBal)
          setSendSmsTokens(resp[0].permissionTokensObj.sendSmsTokens)
                  })


      })


      
        }else{
;
        }
      }
     }}type="text" class="button1">Send SMS</div>
 </div>
 <div style={{padding:"5px"}}>
     <div onClick={()=>{
                ToastAlert('toastAlert1','Please wait.........',3000)
          
            window.location.href=`/pages/attendanceregs/${parseInt(cookies.user.contact)}/${registerParams.registerId}`
             
      
     }}type="text" class="button1">Back to register</div>
 </div>
 </div>
 
 
     </form>
     
     </div>



<div class="col-md-3"></div>

</div>



    </div>)
}

export default SendSms