
import 'firebase/compat/storage';


import React, {useState} from 'react';


import { ArticlesNav } from './PubArticleHome';

export function AssessMyArticles(){
    const[assessmentStatus,setAssessmentStatus]=useState('')
    let data=""
    const[myArticlesAsessment,setMyArticlesAsessment]=useState('')
      return(
    <div>
    <div style={{color:"red",fontSize:"20px",textAlign:"center",padding:"5px"}}>Assess your Articles</div>
    
    <ArticlesNav/>
    <div style={{padding:"5px"}}>Assessing allows you to see what comments have been received on your Articles. Assessing allows you see who has commented, their name and their contact.</div>
  <div class="row">
  <div class="col-md-6" style={{padding:"20px"}}>
    
            
                     
            <form method="post" id="articlesAsessmentForm" action="#">
            <div style={{paddingBottom:"8px"}}><div class="formLabel">Assessment form</div></div>
  
         <div class="mb-3">
        
        <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter WhatsApp Contact e.g 0703852178'></input>
      
       
       <br></br>
         <input type="password" class="form-control" autoComplete="off" name="pin"  placeholder="Enter your PIN e.g. 12345 (5 digits)" ></input>
        
       
         </div>
         
         <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:assessmentStatus}}/>
         <div style={{borderRadius:"18px"}}  onClick={
           ()=>{
        
             if(Array.from(document.getElementById("articlesAsessmentForm").contact.value).length<10||Array.from(document.getElementById("articlesAsessmentForm").contact.value).length>10){
              setAssessmentStatus("<div style='color:red'>Please enter a correct contact......</div>")
    
    }else if(Array.from(document.getElementById("articlesAsessmentForm").pin.value).length<5||Array.from(document.getElementById("articlesAsessmentForm").pin.value).length>5)
             {
              setAssessmentStatus("<div style='color:red;'>Please enter a PIN of 5 digits ......</div>")
             }
    
    else{
      setAssessmentStatus("<div style='color:green;'>Getting your Assessment, <span style='color:red;'>please wait ......</span></div>") 
        fetch('/verifyUser',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
    contact:document.getElementById("articlesAsessmentForm").contact.value,
    pin:document.getElementById("articlesAsessmentForm").pin.value,
            }) 
        }).then(res=>res.json()).then((resp)=>{
           
            
            if(resp.registered===false){
              setAssessmentStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas then begin writing articles</div>")
            }
             else{
                if(resp.registered===true&&resp.pin===false){
                  setAssessmentStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
        
                }else{
                 
                  setAssessmentStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient............</div>`)
    
           fetch('/articleAssessments',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
              contact:parseInt(document.getElementById("articlesAsessmentForm").contact.value),
            })
        }).then(resp=>{
         
            return resp.json()}).then(resp=>{
    if(resp.length===0){
      setAssessmentStatus(`<div style='color:red;'>You don't have any Assessments at the moment, please try again later. Thank you.</div>`) 
    
    }else{
  resp.reverse()
   resp.forEach(assessmentDoc=>{
          data+=`<div class='col-md-9'><div><div  style='padding-bottom:10px;'><div><span style='color:black;'>${assessmentDoc.msg}</span></div><div style='color:green;'>Comment by: <span style='color:;'>${assessmentDoc.commenter} - 0${assessmentDoc.commenterContact} </span></div> <div style='font-size:12px;color:grey;'>Article ${assessmentDoc.articleId}, written by: ${assessmentDoc.author}</div><div style='color:grey;font-size:12px;font-weight:;'>${assessmentDoc.headline1}</div>    </div></div><hr></hr></div>`
      })
      setMyArticlesAsessment(data)
      setAssessmentStatus(`<div style='color:green;'>Successful <span class="fa fa-check"></span> Scroll down to see.</div>`)
    }
    
              
             
              })
           
                }
                
              
            }
           
        }
            
    
        )
        
      
    }
           }
         } class="btn btn-success hovereffect">Assess</div><p></p>
        
         </form>
  
      
        
         </div>
  </div>
  
  
         <div style={{padding:"5px"}} class="row" dangerouslySetInnerHTML={{__html:myArticlesAsessment}}/>
  
  
  
  
  
    </div>
      )
    }

    export default AssessMyArticles