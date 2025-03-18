
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react'

import { FreeRegistrationForm } from '../Home';

export function OpinionPollsComp(props){
  let componentParams=useParams(),data='',position=0
  
  const[opinionPollsSubmitStatus,setOpinionPollsSubmitStatus]=useState('')
  const[candidates,setCandidates]=useState('Please wait........')
  
  const[triggerUpdate,setTriggerUpdate]=useState(0)
  
  useEffect(()=>{
    
    if(props.description===undefined){
      window.alert('Missing prop in opinion poll comp')
    }else{
       
    fetch(`/getOpinionPolls/${props.description}`).then(res=>res.json()).then(resp=>{
  let opinionPolls=resp,noOfOpinionPolls=resp.length,arrayOfGroupedOpinionPolls=[]
  
  props.candidates.forEach(candidate=>{
    
    arrayOfGroupedOpinionPolls.push({candVotedFor:candidate,candVotes:opinionPolls.filter(opinionObj=>opinionObj.candVotedFor===candidate)})
  })
      
   

    setCandidates(arrayOfGroupedOpinionPolls.map(candidateObj=>{
      position++
      return (
        <div class="candContainer1">
<div class="candContainer2">
<div class="candName">{position}. {candidateObj.candVotedFor}</div>
        <div style={{paddingLeft:"20px"}}>{candidateObj.candVotes.length} votes out of {opinionPolls.length} votes <span style={{color:"red"}}>({(candidateObj.candVotes.length/noOfOpinionPolls)*100}%)</span></div>
        
        
</div>
       
        </div>
      )
     
    }))
  
    })

    }

  },[triggerUpdate])

  return(<div>
<div style={{padding:"5px"}}>
  <div style={{opacity:"0.2",fontSize:"10px"}}>Description: {props.description}</div>
<div style={{fontSize:"22px",fontWeight:"600",paddingBottom:"10px"}}>{props.heading1}</div>
    <div style={{borderBottom:"1px solid green",fontSize:"17px"}}>{props.heading2}</div><p></p>
    
    <div style={{fontSize:"15px"}}>{candidates}</div>
    {/* <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:candidates}}/> */}
  </div>   
    <div>
    
      
      
      </div>

    <div style={{padding:"5px"}}>  
    
    <form id="opinionpollsForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Submit your opinion</div></div>
    <div class="mb-3">
    
    <input type="text" class="form-control" autoComplete="off" name="candId" placeholder='Enter number corresponding to a candidate e.g. 1,2,3,4'></input>
  <br></br>
  <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Contact e.g 0703852178'></input>
  
    </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:opinionPollsSubmitStatus}}/>
    <p></p>
    <div type="submit" onClick={
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

       } class="button1 hovereffect"> Submit opinion</div>
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
<OpinionPollsComp heading1="Makerere Guild presidential polls - Choose your candidate" heading2="Submit your opinion at the bottom, be honest. Who is fit for the guild presidential seat?" description="opinionpoll1" candidates={["Tukwasiibwe Martin","Bumba Erinest","Ssentamu Churchill James", "Rukundo John Baptist", "Ategyeka Prosper", "Odini Mark", "Wankya Ivan", "Basalirwa Ismail", "Mugabe Job" ]} />
  </div>)
  
}

export function AcholiStudentsUnionPoll(props){
  return(<div>
<OpinionPollsComp heading1="Who is capable for the Acholi Students' Union?" heading2="Honestly cast your honesty..." description="acholistudentsunionpoll" candidates={["Okoth Phillips","Enoba Ceasar","None of the above"]} />
  </div>)
  
}


