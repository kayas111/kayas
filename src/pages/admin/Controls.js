import React, {useEffect,useState} from 'react'



 
export function ControlsNav(){
  const [attendeeRegistersNumb,setAttendeeRegistersNumb]=useState('')
  const [reqNumb,setReqNumb]=useState('')
  
  const [monitoredOpinionsNumb,setMonitoredOpinionsNumb]=useState('')
  
  const [recomNumb,setRecomNumb]=useState('')
  const [tradersNumb,setTradersNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [monitoredArticlesNumb,setMonitoredArticlesNumb]=useState('')
  const [visits,setVisits]=useState('')
  const [status,setStatus]=useState('')
  const [tradingStatus,setTradingStatus]=useState('')
 
 
      useEffect(()=>{
    
 
          fetch('/collection_registers_registers').then(res=>res.json()).then(res=>{
            setAttendeeRegistersNumb(res.length)})

        fetch('/collection_monitoredopinions_number').then(res=>res.json()).then(res=>{
      
          setMonitoredOpinionsNumb(res.length)
        })
       
        fetch('/collection_controls').then(res=>res.json()).then(res=>{
      
          setVisits(res[0].noOfVisits)
        })
        fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
          setReqNumb(res.length)
            })
           
            fetch('/collection_recommendations_number').then(res=>res.json()).then(res=>{
              setRecomNumb(res.length)
                })
      fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
                  setKayasersNumb(res.length)
                    })
  fetch('/collection_traders_number').then(res=>res.json()).then(res=>{
                      setTradersNumb(res.length)
                        })
                        fetch('/collection_multidocs_monitoredArticleOpinions').then(res=>res.json()).then(res=>{
                          setMonitoredArticlesNumb(res.length)
                            })

                            fetch('/getCurrentPushNotification').then(res=>res.json()).then(resp=>{
                             // document.getElementById('setPushNotificationForm').title.value=resp[0].notification.title
                             // document.getElementById('setPushNotificationForm').body.value =resp[0].notification.body
                     
                                })

      },[])    

return(
  <div style={{padding:"10px",background:"black",fontSize:"12px"}}>
 
  <a style={{color:"white",paddingRight:"9px",}} href="/pages/admin/requests"><span class="hovereffect">Requests {reqNumb}  </span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/recommendations"><span class="hovereffect"> Recommendations {recomNumb} </span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/kayasers"><span class="hovereffect"> Kayasers {kayasersNumb} </span></a> 
      <br></br>
      <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/clientsmonitor"><span class="hovereffect"> Monitored-Opinions{monitoredOpinionsNumb}</span></a> 
      
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/attendeeregisters"><span class="hovereffect"> Registers {attendeeRegistersNumb}</span></a> <br></br>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/articlesmonitor"><span class="hovereffect">Monitored-Articles {monitoredArticlesNumb}</span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="#"><span class="hovereffect"> Visits {visits}</span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/controls"><span class="hovereffect">Controls</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/kayasercare"><span class="hovereffect">Kayas-Care</span></a><br></br> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/traderscare"><span class="hovereffect">Traders {tradersNumb}</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/attendanceregistercare"><span class="hovereffect">Register-Care</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/smsnotificationscare"><span class="hovereffect">SMS-Notifications</span></a> 
     
     </div>
)



}



  


export function SmsNotificationsCare(){
  let data=''
  const[pendingForSmsNotifications,setPendingForSmsNotifications]=useState('')
  const[SmsNotificationsRequestsNumb,setSmsNotificationsRequestsNumb]=useState('')
  const[subscriptionStatus,setSubscriptionStatus]=useState('')
  const[numbOfSmsSubscribers,setNumbOfSmsSubscribers]=useState('')
  useEffect(()=>{
  fetch('/pendingForSmsNotifications').then(resp=>resp.json()).then(resp=>{
   
    if(resp.length===0){
      setPendingForSmsNotifications(`<div>No pending SMS notification requests.</div>`)
      setSmsNotificationsRequestsNumb(resp.length)
    }else{
       resp.forEach(doc=>{
        data+=`<div  class='col-md-4'><div>Name: ${doc.name}</div><div>Contact:  ${doc.contact}</div><div>Recommender:  ${doc.recommender}</div><hr></hr></div>`
     
     })

     setPendingForSmsNotifications(data)
     setSmsNotificationsRequestsNumb(resp.length)
    }
    
  })
  fetch('/smsSubscribers').then(resp=>resp.json()).then(resp=>{
    setNumbOfSmsSubscribers(resp.length)
  })


  })
  return(
    <div>
      <div style={{color:"red",fontSzize:"12px",textAlign:"center"}}>SMS Notifications Care</div>
      <ControlsNav/>
      <div style={{color:"red",padding:"10px"}}>{SmsNotificationsRequestsNumb} requests, {numbOfSmsSubscribers} subscribers</div>
     <div class="row">
     <div class="col-md-6" style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>SUBSCRIBE/TOP UP</div>
    <form id='SmsSubscriptionForm' >
    <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Subscribers Contact e.g 0703852178' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="noOfSms" placeholder='Enter number of SMS' ></input>

    
     </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:subscriptionStatus}}/>
    <div class="row">
<div class="col-6 col-md-6">
<div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
 if(Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length<9 || Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length>10){
    setSubscriptionStatus('<div style="color:red;">Enter contact of atleast 9 digits.......</div>')

} else if(Array.from(document.getElementById('SmsSubscriptionForm').noOfSms.value).length<1){
  setSubscriptionStatus('<div style="color:red;">Enter number of SMS.......</div>')
}

else{
    setSubscriptionStatus('<div style="color:green;">Subscribing............</div>')

fetch('/subscriberequestforsmsnotifications',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({noOfSms:parseInt(document.getElementById('SmsSubscriptionForm').noOfSms.value),contact:parseInt(document.getElementById('SmsSubscriptionForm').contact.value)})
}).then(resp=>resp.json()).then(resp=>{
    setSubscriptionStatus(resp[0])
  document.getElementById('SmsSubscriptionForm').noOfSms.value=""
  document.getElementById('SmsSubscriptionForm').contact.value=""


})

}



    }}>Subscribe</div>

</div>
<div class="col-6 col-md-6">
<div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
 if(Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length<9 || Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length>10){
    setSubscriptionStatus('<div style="color:red;">Enter contact of atleast 9 digits.......</div>')

} else if(Array.from(document.getElementById('SmsSubscriptionForm').noOfSms.value).length<1){
  setSubscriptionStatus('<div style="color:red;">Enter number of SMS.......</div>')
}

else{
    setSubscriptionStatus('<div style="color:green;">Topping up..........</div>')

fetch('/topupsmsnotifications',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({noOfSms:parseInt(document.getElementById('SmsSubscriptionForm').noOfSms.value),contact:parseInt(document.getElementById('SmsSubscriptionForm').contact.value)})
}).then(resp=>resp.json()).then(resp=>{
    setSubscriptionStatus(resp[0])
  document.getElementById('SmsSubscriptionForm').noOfSms.value=""
  document.getElementById('SmsSubscriptionForm').contact.value=""


})

}



    }}>Top up</div>
</div>


    </div>
   



    </form>
   
    
    </div>
     </div>
     
     

    

      <div class='row' style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:pendingForSmsNotifications}}/>
    </div>
  )
}


export function RegisterCare(){

  const[registerDetailsStatus,setRegisterDetailsStatus]=useState('')
  const[updateRegisterDetailsStatus,setUpdateRegisterDetailsStatus]=useState('')
  const [mapAttendanceRegisterToMessagerStatus,setMapAttendanceRegisterToMessagerStatus]=useState('')


 
  return (<div>
    <ControlsNav/>
    <div class="row">
    
    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>GET REGISTER DETAILS</div>
    <div  dangerouslySetInnerHTML={{__html:registerDetailsStatus}}/>
    <form id="getAttendanceRegDetailsForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="registrarContact" placeholder='Registrar contact'></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="registerId" placeholder='Register ID'></input>
       </div>
   
<div class="row">
<div class="col-6 col-md-6"> <span type="submit" class="btn btn-success" onClick={()=>{
    setRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/getAttendanceRegDetails',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value)})
    }).then(res=>res.json()).then(resp=>{
   
if(resp.length===0){
  setRegisterDetailsStatus('<div style="color:red;">Register does not exist!</div>')

}else{
setRegisterDetailsStatus(`<div><div>Title: ${resp[0].registerTitle}</div><div>Contacts: ${resp[0].attendees.length}</div><div>Created by: ${resp[0].name}</div></div>`)
}

    })

         
  
  
      }}>GET</span></div>

<div class="col-6 col-md-6"> <span type="submit" class="btn btn-success" onClick={()=>{
    setRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/closeopenAttendanceReg',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value)})
    }).then(res=>res.json()).then(resp=>{
      setRegisterDetailsStatus(resp[0])

    })

         
  
  
      }}>CLOSE/OPEN</span></div>


</div>

    </form></div>

    <div class="col-md-3" style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>MAP ATTENDANCE REGISTER TO MESSAGER</div>
    <div  dangerouslySetInnerHTML={{__html:mapAttendanceRegisterToMessagerStatus}}/>
    <form  id="mapAttendanceRegisterForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="attendanceRegisterAdminContact" placeholder='Register Admin Contact' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="attendanceRegisterId" placeholder='Register Id' ></input>
     
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
  setMapAttendanceRegisterToMessagerStatus("Mapping.................")
    
      fetch('/mapAttendanceRegisterToMessager',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({registerAdminContact:parseInt(document.getElementById('mapAttendanceRegisterForm').attendanceRegisterAdminContact.value),
    registerId:parseInt(document.getElementById('mapAttendanceRegisterForm').attendanceRegisterId.value)})}).then(res=>res.json()).then(resp=>{
      setMapAttendanceRegisterToMessagerStatus(resp[0])
     
    }) 
        
  
      }}>MAP REGISTER</span></div>
    </form></div>  

    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>EDIT REGISTER</div>
    <div style={{fontSize:"9px",color:"grey"}}>registerTitle,name,contact,permissionToAddContactTokens,smsUnitCost</div>
    <div  dangerouslySetInnerHTML={{__html:updateRegisterDetailsStatus}}/>
    <form id="updateAttendanceRegDetailsForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Field to update'></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Field value'></input>
       </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
  setUpdateRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/updateAttendanceRegDetails',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value),fieldToUpdate:document.getElementById('updateAttendanceRegDetailsForm').fieldToUpdate.value,fieldValue:document.getElementById('updateAttendanceRegDetailsForm').fieldValue.value})
    }).then(res=>res.json()).then(resp=>{
   
      setUpdateRegisterDetailsStatus(resp[0])

    })

         
  
  
      }}>UPDATE</span></div>
    </form></div>

    </div>
     
    </div>)
}




export function AttendeeRegisters(){
  let data=''
  const [attendeeRegisters,setAttendeeRegisters]=useState('')
  const [attendeeRegistersNumb,setAttendeeRegistersNumb]=useState('')
 
 
  useEffect(()=>{
    fetch('/collection_registers_registers').then(res=>res.json()).then(res=>{
      setAttendeeRegistersNumb(res.length)
if(res.length===0){
  setAttendeeRegisters("no registers")
}else{
 res.reverse()
  res.forEach(registerDoc=>{
    data+=`<div class='col-sm-6 col-md-4'><div><a  style='color:black;' href='/pages/attendanceregs/${registerDoc.contact}/${registerDoc.registerId}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:green;font-size:18px;font-weight:bold;'>${registerDoc.registerTitle}</div><div style='font-size:12px;color:red;'>${registerDoc.institution} student wrote this. Tap to read details.</div><div style='font-size:12px;color:grey;'>Register ${registerDoc.registerId}, written by: ${registerDoc.name} ${registerDoc.contact}</div><div style='color:grey;'><span style='color:red;'>${registerDoc.attendees.length}</span> contacts</div></div> </span></a></div><hr></hr></div>`
})
setAttendeeRegisters(data)
}
      
    })})

  return(<div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>{attendeeRegistersNumb} Attendee Registers</div>
    <ControlsNav/>
    <div style={{padding:"5px"}} class="row"  dangerouslySetInnerHTML={{__html:attendeeRegisters}}/>
    </div>)
}


export default ControlsNav