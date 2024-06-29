
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react'

import { FreeRegistrationForm } from '../Home';

export function OpinionPollsComp(props){
  let componentParams=useParams(),data='',position=1
  
  const[opinionPollsSubmitStatus,setOpinionPollsSubmitStatus]=useState('')
  const[candidates,setCandidates]=useState('<div style="color:red;font-size:20px;">Please wait........</div>')
  const[opinionPolls,setOpinionPolls]=useState('')
  const[triggerUpdate,setTriggerUpdate]=useState(0)
  
  useEffect(()=>{
    
    if(props.description===undefined){
      window.alert('Missing prop in opinion poll comp')
    }else{
       
    fetch(`/getOpinionPolls/${props.description}`).then(res=>res.json()).then(resp=>{
  let opinionPolls=resp,noOfOpinionPolls=resp.length,arrayOfGroupedOpinionPolls=[]
  setOpinionPolls(opinionPolls)
  props.candidates.forEach(candidate=>{
    
    arrayOfGroupedOpinionPolls.push({candVotedFor:candidate,candVotes:opinionPolls.filter(opinionObj=>opinionObj.candVotedFor===candidate)})
  })
      
      
    arrayOfGroupedOpinionPolls.forEach(candidateObj=>{
     
      data+=`<div style="border:5px solid white;"><div style="border-radius:9px;border:0.2px solid grey;padding:5px;"> <div style="font-size:20px;">${position}. ${candidateObj.candVotedFor}</div> <div> ${candidateObj.candVotes.length} votes out of ${opinionPolls.length} votes <span style="color:red;">(${(candidateObj.candVotes.length/noOfOpinionPolls)*100}%)</span></div></div></div>`
      position++
    })

    setCandidates(data)
  
    })

    }

  },[triggerUpdate])

  return(<div>
<div style={{padding:"5px"}}>
  <div style={{opacity:"0.2",fontSize:"10px"}}>Description: {props.description}</div>
<div style={{color:"red",fontSize:"22px",paddingBottom:"10px"}}>{props.heading1}</div>
    <div style={{color:"green",borderBottom:"1px solid green",fontSize:"17px"}}>{props.heading2}</div><p></p>

  </div>   
    <div>
    
      <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:candidates}}/>
      
      </div>

    <div style={{padding:"30px"}}>  
    
    <form id="opinionpollsForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Submit your opinion</div></div>
    <div class="mb-3">
    
    <input type="text" class="form-control" autoComplete="off" name="candId" placeholder='Enter corresponding number e.g. 1,2,3,4'></input>
  <br></br>
  <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Contact e.g 0703852178'></input>
  
    </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:opinionPollsSubmitStatus}}/>
    <p></p>
    <div style={{borderRadius:"18px"}} type="submit" onClick={
        ()=>{
    

          if(Array.from(document.getElementById("opinionpollsForm").candId.value.trim()).length<1){
            setOpinionPollsSubmitStatus("<div style='color:red'>Please enter correct choice e.g. 1 or 2 or 3, etc</div>")
 
 }else if(Array.from(document.getElementById("opinionpollsForm").contact.value.trim()).length<10||Array.from(document.getElementById("opinionpollsForm").contact.value.trim()).length>10)
 {
  setOpinionPollsSubmitStatus("<div style='color:red;'>Please enter correct contact...</div>")
 }
 
 else{
  setOpinionPollsSubmitStatus("<div style='color:green;'>submitting......</div>") 
  
  fetch('/submitOpinionpoll',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({
 
 candVotedFor:props.candidates[parseInt(document.getElementById("opinionpollsForm").candId.value)-1],
 contactOfVoter:parseInt(document.getElementById("opinionpollsForm").contact.value.trim()),
 description:props.description,
 candidates:props.candidates
         }) 
     }).then(res=>res.json()).then((resp)=>{
      setOpinionPollsSubmitStatus(resp[0])
      setTriggerUpdate(triggerUpdate+1)
      document.getElementById("opinionpollsForm").contact.value=""
      document.getElementById("opinionpollsForm").candId.value=""
     }
         
 
     )
   
   
 }
        } 

       } class="btn btn-success hovereffect"> Submit opinion</div>
    </form></div>
<div style={{color:"green",fontSize:"20px",padding:"5px"}}>Thanks for keeping it Kayas, please forward the polls to your groups too!</div>

  </div>)
}


export function KyuOpinionPolls(props){
  return(<div>
<OpinionPollsComp heading1="Kyambogo Guild Presidential Opinion Polls" heading2="Whom are you promising your vote, who is capable?" description="kyuGuildPolls" candidates={["Nakayenga","Katumwa","Mwebesa","Jakisa","None of the above"]} />
  </div>)
  
}

export function OpinionPoll1(props){
  return(<div>
<OpinionPollsComp heading1="Kayas Guild presidential polls " heading2="Submit your opinion at the bottom, be honest. Who is fit for the guild presidential seat?" description="opinionpoll1" candidates={["Mayiga Victoria","Ssendagi Ibrahim","Ssemanda Mudathiru","Wandukwa Simon","Wacha Elizabeth Shakirah","Ssemaganda George","Efiti Andrew","Basalirwa Jonathan","Lubega Vincent Nsamba","Ayebale Ronald","Ssemuyaba Joshua Vitali","Kasekende Fulugensio","Ikemeri Allan Micah","Kabaale Hamis","Ariho Edmond","Mukwaya Muhammadi"]} />
  </div>)
  
}

export function AcholiStudentsUnionPoll(props){
  return(<div>
<OpinionPollsComp heading1="Who is capable for the Acholi Students' Union?" heading2="Honestly cast your honesty..." description="acholistudentsunionpoll" candidates={["Okoth Phillips","Enoba Ceasar","None of the above"]} />
  </div>)
  
}


