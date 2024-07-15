import { useState,useEffect } from "react"
export function Messager(){
    let data='',whatsAppMessengerText1=`*Good morning*, hope you are *fine*%0A%0A*From:* Aswa Stephen Thomas❗%0A*To:* You%0A*Thru*: Kayas%0A%0A*Aswa T-shirts at 10,000/= Register yourself for one here below if you dont mind:*%0A%0A
    Tap this link to register:%0A
    https://kayas-mak.herokuapp.com/pages/attendanceregs/783989317/3%0A*Lets Keep It Kayas. I will always update you*`
      const[status,setStatus]=useState('')
      const[mukContactsNumb,setMukContactsNumb]=useState('')
      const[mukEducationNumb,setMukEducationNumb]=useState('')
      const[mubsContactsNumb,setMubsContactsNumb]=useState('')
      const[nduContactsNumb,setNduContactsNumb]=useState('')
      const[status2,setStatus2]=useState('')
      const[messageesNumb,setMessageesNumb]=useState('')
      const[messagees,setMessagees]=useState('')
      const[messagerIntroStatementSetStatus,setMessagerIntroStatementSetStatus]=useState('')
      const[messagerIntroStatement,setMessagerIntroStatement]=useState('')
      const[clearanceStatus,setClearanceStatus]=useState('')
      const[pushToAttendanceRegisterStatus,setPushToAttendanceRegisterStatus]=useState('')
      useEffect(()=>{
        
        fetch(`/universityContacts`).then(res=>res.json()).then(resp=>{
       
          setMukContactsNumb(resp[0].messagees.length)
          setNduContactsNumb(resp[1].messagees.length)
          setMubsContactsNumb(resp[2].messagees.length)
          setMukEducationNumb(resp[3].messagees.length)
          })
       
        fetch(`/messagees`).then(res=>res.json()).then(res=>{
          setMessageesNumb(res.messagees.length)
          let num=1;
           // res.reverse()
    if(res.messagees.length===0){
      ;
    }else{
      if(res.messagees[0].name===undefined){
        res.messagees.forEach(messagee=>{
          data+=`<div class='col-4 col-sm-4 col-md-2'><span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=256${messagee}&text=${res.introStatement}'><span class='hovereffect'>${num}:${messagee}</span></a><hr></hr></div>`
         num++;
         })
      }else{
      
        res.messagees.forEach(messagee=>{
               data+=`<div class='col-4 col-sm-4 col-md-2'><span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=256${messagee.contact}&text=${messagee.name}, ${res.introStatement}'><div>${num}. ${messagee.name}</div><div><span class='hovereffect'>0${messagee.contact}</span></div></a><hr></hr></div>`
              num++;
              })
             
      
      }
      
    }
    
    
    
    
            
            setMessagees(data)
          })
          
        
        },[])
    
      return (<div>
        <div style={{color:"red",textAlign:"center",fontSize:"25px"}}>Kayas Messager</div>
        <div style={{color:"red",textAlign:"center",fontSize:"15px"}}>Supports top up</div>
        <div style={{color:"grey",fontSize:"10px",padding:"5px"}}>{mukContactsNumb} mukContacts, {mukEducationNumb} mukEducation, {nduContactsNumb} nduContacts, {mubsContactsNumb} mubsContacts  </div>
       <div class='row'>
       <div class='col-md-6'style={{padding:"30px"}}>  
        
        
       <form id="messengingForm" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Add messagee</div>
       <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:status}}/>
        <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter WhatsApp Contact e.g 703852178' ></input>
     
        </div>
     
        <div style={{borderRadius:"18px"}} onClick={()=>{
    
    if(Array.from(document.getElementById('messengingForm').contact.value).length<9||Array.from(document.getElementById('messengingForm').contact.value).length>9){
    setStatus("<div style='color:red;'>Enter 9 digits ......</div>")
    document.getElementById('messengingForm').contact.value=""
    }
    else{
      setStatus("<div style='color:red;'>Adding......</div>")
      fetch('/addToMessagingQueue',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({contact:document.getElementById('messengingForm').contact.value})
      }).then(res=>res.json()).then(res=>{
     if(res.presence===1){
        setStatus(`<div style='color:red;'>That contact: ${document.getElementById('messengingForm').contact.value} is already in the list....</div>`)
        document.getElementById('messengingForm').contact.value=""
      }else{
        setMessageesNumb(messageesNumb+1)
        setStatus(`<div style='color:green;'>Successfully added ${document.getElementById('messengingForm').contact.value}</div>`)
        document.getElementById('messengingForm').contact.value=""
      }
    
        
      })
    }
    
    
        }}type="text" class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Add</div>
        </form>
        
        </div>
        <div class='col-md-6'style={{padding:"30px"}}>  
        
        <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:status2}}/>
       <form id="removeMessagee" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Remove messagee</div>
        <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter WhatsApp Contact e.g 703852178' ></input>
        </div>
     
        <div style={{borderRadius:"18px"}} onClick={()=>{
    
    if(Array.from(document.getElementById('removeMessagee').contact.value).length<9||Array.from(document.getElementById('removeMessagee').contact.value).length>9){
    setStatus2("<div style='color:red;'>Enter 9 digits ......</div>")
    document.getElementById('messengingForm').contact.value=""
    }else{
      setStatus2("<div style='color:red;'>Removing......</div>")
      fetch('/removeMessageeInMessager',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({contact:parseInt(document.getElementById('removeMessagee').contact.value)})
      }).then(res=>res.json()).then(res=>{
      if(res.presence===0){
        setStatus2(`<div style='color:red;'>That contact: ${document.getElementById('removeMessagee').contact.value} is not in the list....</div>`)
        document.getElementById('removeMessagee').contact.value=""
      }else{
        
        setStatus2(`<div style='color:green;'>Successfully removed ${document.getElementById('removeMessagee').contact.value}</div>`)
        document.getElementById('removeMessagee').contact.value=""
      }
      
        
      })
    }
    
    
        }}type="text" class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Remove</div>
        </form>
        
        </div>
        <div class='col-md-6'style={{padding:"30px"}}>  
        
        
       <form id="setMessagerIntroStatementForm" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Set intro Statement</div>
        <div class="mb-3">
    <textArea rows="3" type="text" class="form-control" autoComplete="off" name="messagerIntroStatement" placeholder='Enter statement' ></textArea>
        </div>
        <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:messagerIntroStatementSetStatus}}/>
        <div type="text" class="btn btn-success hovereffect" onClick={()=>{
          setMessagerIntroStatementSetStatus("<div style='color:green;'>Setting.............</div>")
          fetch('/setMessagerIntroStatement',{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({statement:document.getElementById('setMessagerIntroStatementForm').messagerIntroStatement.value})
          }).then(res=>res.json()).then(resp=>{
            setMessagerIntroStatementSetStatus(resp[0])
          })
        }}>Set</div>
        </form>
        
        </div>
        <div class='col-md-6'style={{padding:"30px"}}>  
        
        
       <form id="pushToAttendanceregisterForm" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Push to Attendance Register</div>
        <div class="mb-3">
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="contact" placeholder="Enter Registrar's Contact" ></textArea>
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="registerId" placeholder='Enter Register ID' ></textArea>
    
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="property" placeholder='Enter property e.g Year of entry' ></textArea>
    
    <br></br>
    <textArea rows="1" type="text" class="form-control" autoComplete="off" name="propertyValue" placeholder='Property value' ></textArea>
    
        </div>
        <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:pushToAttendanceRegisterStatus}}/>
        <div class="row">
          <div class="col-6">
        <div  type="text" class="btn btn-success hovereffect" onClick={()=>{
          setPushToAttendanceRegisterStatus("<div style='color:green;'>Pushing.............</div>")
          fetch('/pushToAttendanceRegister',{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({registrarContact:parseInt(document.getElementById('pushToAttendanceregisterForm').contact.value),registerId:parseInt(document.getElementById('pushToAttendanceregisterForm').registerId.value)})
          }).then(res=>res.json()).then(resp=>{
            setPushToAttendanceRegisterStatus(resp[0])
          })
        }}>Push</div> 
        </div>
        <div class="col-6">
        <div type="text" class="btn btn-success hovereffect" onClick={()=>{
    
          
          let arrayStringToJoin=[],joinedArrayString,flag=0
          document.getElementById('pushToAttendanceregisterForm').property.value.trim().split(' ').forEach(string=>{
           if(flag===0){
            arrayStringToJoin.push(string)
           }else{
            arrayStringToJoin.push(string.replace(string.charAt(0),string.charAt(0).toUpperCase()))
           }
            
            flag++
            
            
            
          })
    
          joinedArrayString=arrayStringToJoin.join('')
          console.log(joinedArrayString)
    
          setPushToAttendanceRegisterStatus("<div style='color:green;'>Categorizing.........</div>")
          fetch('/categorizeMessagerContacts',{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({property:joinedArrayString,propertyValue:document.getElementById('pushToAttendanceregisterForm').propertyValue.value.trim()})
          }).then(res=>res.json()).then(resp=>{
            setPushToAttendanceRegisterStatus(resp[0])
            document.getElementById('pushToAttendanceregisterForm').property.value=""
            document.getElementById('pushToAttendanceregisterForm').propertyValue.value=""
    
          })
        }}>Add property</div>
        </div>
        </div>
        </form>
        
        </div>
    
        <div class='col-md-6'style={{padding:"30px"}}>  
        
        
       <form id="clearanceForm" >
       <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Clear All messagees</div>
        <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="categoryId" placeholder='Enter category ID to top up' ></input>
        </div>
        <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:clearanceStatus}}/>
        <div style={{borderRadius:"18px"}} onClick={()=>{
    
      setClearanceStatus("<div style='color:red;'>Clearing......</div>")
      fetch('/deleteMessageesList',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({categoryId:document.getElementById('clearanceForm').categoryId.value})
      }).then(res=>res.json()).then(res=>{
     if(res.category===0){
      setClearanceStatus("<div style='color:red;'>Institution category doesn't exist...</div>")
     }else if(res.category===1){
      setClearanceStatus("<div style='color:green;'>Succesfull</div>")
      document.getElementById('clearanceForm').categoryId.value=""
     }else{
      setClearanceStatus("<div style='color:green;'>Error must have happened. Confirm</div>")
      
     }
      })
    
        }}type="text" class="btn btn-success hovereffect">Clear messagees</div>
        </form>
        
        </div>
    
    
    
       </div>
      
        
        <hr></hr>
       <div class="row"> 
        
        <div style={{padding:"5px",color:"red",textAlign:"center"}}><span style={{color:"red", fontSize:"20px"}}>{messageesNumb} messagees in the list</span></div> 
    
       </div>
        <p></p><div class="row" style={{fontSize:"17px",textAlign:"center"}} dangerouslySetInnerHTML={{__html:messagees}}/> 
    
    
    
      </div>)
    }
    
    export default Messager