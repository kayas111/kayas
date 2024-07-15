import { VerifyRegistrationAndPin,ToastAlert } from '../Functions';
import firebase from 'firebase/compat/app';

import 'firebase/compat/storage';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
import { ArticlesNav} from './PubArticleHome';
import AllArticles from './AllArticles';
import {kayasDomainUrl} from '../../Variables'

firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()




export function PubArticleComp(){//clientcomponent
    let articleParams=useParams()
      let formActionUrl=`/pages/pubarticles/article/${articleParams.id}`
      const[visits,setVisits]=useState('')
      const[opinions,setOpinions]=useState('')
      const[articleHeadline1,setArticleHeadline1]=useState('')
      const[articleAuthor,setArticleAuthor]=useState('')
      const[articleAuthorContact,setArticleAuthorContact]=useState('')
      const[articleBody,setArticleBody]=useState('<div style="font-size:20px;color:red;">Please wait..........<p></p></div>')
      const[opinionsStatus,setOpinionsStatus]=useState('')
      const[submissionStatus,setSubmissionStatus]=useState('')
      const[opinionsNumb,setOpinionsNumb]=useState('')
      const[articleInstitution,setArticleInstitution]=useState('')
      const[articleDoc,setArticleDoc]=useState('')
      const [details,setDetails]=useState()
      const[authorArticles,setAuthorArticles]=useState(<div style={{paddingLeft:"15px",fontSize:"20px",color:"green",textAlign:"center"}}>
      More stories loading.......
      </div>)
      const[verificationTick,setVerificationTick]=useState('')
     const[imageDownLoadUrl,setImageDownLoadUrl]=useState('')
      
      let opinionsReceivedFlag=0,whatsappPublicArticleShareLink=`whatsapp://send?text=*🌹KAYAS: ${articleHeadline1.trim()}*%0A___________________________%0A%0ASee details using the link below:%0A%0A${kayasDomainUrl}/pages/pubarticles/article/${articleParams.id}%0A%0A_Created by: ${articleAuthor}_`
      
     useEffect(()=>{
         
        fetch(`/pubarticle/${articleParams.id}`).then(res=>res.json()).then(articleDataArray=>{
                 
          if(articleDataArray.length===0){
            setArticleHeadline1("This article does not exist or has been deleted.")
            ToastAlert('toastAlert2','Does not exit or has been deleted',3000)
            setArticleAuthor("Unknown")
            setArticleBody('<div style="font-size:20px;color:red;">This article does not exist or has been deleted.<p></p></div>')
          }else{
            let articleDocument=articleDataArray[0]
            if(articleDataArray[0].verified==='true'){ 
              setVerificationTick('<span class="fa fa-check"></span>')
            }else{
              ;
            }
            if(articleDataArray[0].visits===undefined){
              setVisits(0)
            }else{
 setVisits(articleDataArray[0].visits)

            }
            if(articleDocument.imageDownLoadUrl===undefined){;}else{
              setImageDownLoadUrl(articleDocument.imageDownLoadUrl)
            }
            
            setArticleDoc(articleDataArray[0])
            
            setOpinionsNumb(articleDataArray[0].pubArticleOpinions.length)
            
            opinionsReceivedFlag=1
            setArticleInstitution(articleDataArray[0].institution)
            setArticleHeadline1(articleDataArray[0].headline1)
          setArticleAuthor(articleDataArray[0].author)
          setArticleAuthorContact(articleDataArray[0].contact)
          setArticleBody(articleDataArray[0].body)
          
          fetch('/getMyArticles',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
              contact:parseInt(articleDataArray[0].contact),
            })
          }).then(resp=>{
          
            return resp.json()}).then(resp=>{
             
              if(resp.length===0){
                setAuthorArticles(`<div style='color:red;text-align:center;'>These Articles do not exist.</div>`) 
              
              }else{
                let firstArticle=resp[0]
              resp.reverse()

                 setAuthorArticles((resp.map((articleObject)=>{
                return(
                <div class="col-md-4" onClick={()=>{
                  window.location.href=`/pages/pubarticles/article/${articleObject.id}`
                }}>
                  
                  <div class="pubArticleListItemContainer">
                  <div style={{border:"1px solid #d4d4d4",padding:"3px"}}>
   <div class="backgroundColorHoverEffect3"><div class="pubArticleListItemInstitution">{articleObject.institution}</div>
    <div class="pubArticleListItemHeadline">{articleObject.headline1}</div>
    <div class="pubArticleListItemViewsAndVisits">
                  <div>{articleObject.visits} views, {articleObject.pubArticleOpinions.length} comments, Article {articleObject.id}</div>
                  <div>Created by {articleObject.author} 0{articleObject.contact}</div>
                  </div>

    </div>
   </div>
                </div></div>
                
                )})))




              }
              
            })
        
          }
         
          
        })
         
        
        },[])
      
      
      //return statement
 
     
         return(
             
            <div>
                                       
                     
            <div class="row">
                  <div class="col-md-2"></div>
                  
                  <div  class="col-md-8">
                  <ArticlesNav articleAuthorContact={articleAuthorContact} articleId={articleParams.id}/>
                    <div style={{padding:"6px"}}>
                  <div class="articleContainer">
                  <div style={{fontSize:"20px",color:"black",paddingBottom:"15px",fontWeight:"500"}}>{articleHeadline1}</div>
                           
              <div style={{paddingBottom:"10px"}}>
              <div class="row">
                <div class="col-9"><div  style={{fontSize:"13px",color:"",borderBottom:"1px solid black"}}><span style={{color:"red"}}>{visits}</span> views and <span style={{color:"red"}}>{opinionsNumb}</span> comments, Article {articleParams.id} </div></div>
                <div style={{textAlign:"right"}} class="col-3">
                <span class="hovereffect" style={{fontSize:"13px",background:"green",borderRadius:"4px",padding:"5px",color:"white"}} onClick={
              ()=>{
                window.location.href=whatsappPublicArticleShareLink
              }}><span class="fa fa-whatsapp"></span> Share</span>
                               
                </div>
                </div> </div>     
                      
               
              
              
          
            
<div style={{paddingTop:"3px"}}><img src={imageDownLoadUrl} class=" d-block w-100" /></div>
           <div style={{paddingTop:"10px"}} dangerouslySetInnerHTML={{__html:articleBody}}/>
                  <div>Always keep it Kayas.</div>

<div style={{textAlign:"center"}}>
<div style={{paddingTop:"20px"}}>Created by:</div>
<div style={{fontSize:"15px",fontWeight:"500"}}>{articleAuthor} <span dangerouslySetInnerHTML={{__html:verificationTick}}/></div>
<div style={{fontSize:"12px"}}>{articleInstitution} 0{articleAuthorContact}</div>

</div>
</div>

            
                  </div>

                     <div style={{borderRadius:"10px",padding:"5px"}}>
                 
                 <div style={{paddingTop:"20px"}}>
                  <div style={{display:"flex",flexWrap:"wrap"}}>
            <div style={{padding:"5px"}}>
<div >
             <span class="button2" onClick={()=>{
                  
                setOpinionsStatus("Please wait ..........")
                setTimeout(()=>{
               if(opinionsReceivedFlag===0){
               setOpinionsStatus("Hope your network is okay. <span style='color:red;'>Please wait.........</span>")
               }else{
               ;
               }
               
                },5000)
  
                  fetch(`/pubarticleopinions/${articleParams.id}`).then(res=>res.json()).then(res=>{

                    let articleOpinionsDocument=res,opinions=articleOpinionsDocument.pubArticleOpinions,position=0
                    opinionsReceivedFlag=1
                
                    
                    opinions.forEach(opinionDoc=>{
                      position++
                      opinionDoc.position=position
                    })
                
             
                setOpinions(opinions.map((opinionObj)=>{
                    return (<div style={{padding:"10px"}}><div style={{padding:"5px",background:"white",borderRadius:"5px",textAlign:"left"}}>
                <div style={{fontSize:"15px"}}>{opinionObj.position}. {opinionObj.name} </div>
                <div style={{paddingLeft:"17px"}}>
                <div style={{fontSize:"12px"}}>{opinionObj.msg}</div>
                </div></div></div>)
                  }))
                
                  setOpinionsStatus('Done. See the comments below:')
               
                    
                    })           

               
                  }}>Comments ({opinionsNumb})</span>
</div>
</div>
<div style={{padding:"5px"}}>
  <div >
             <span class="button2" onClick={
              ()=>{
                window.location.href="#authorArticles"
              }}>More stories </span>
</div>
</div>
            </div>
                 </div>

                       
            <div style={{fontSize:"12px",textAlign:"left",paddingTop:"5px"}} dangerouslySetInnerHTML={{__html:opinionsStatus}}/>
              <div style={{background:"#ebebeb",borderRadius:"5px"}}>{opinions}</div>
  
                          
            

</div>


<div class="col-md-12"> 

<div style={{padding:"5px"}}> 
 
<form method="post" id="clientForm" action={formActionUrl}>
<div style={{paddingBottom:"8px"}}><div class="formLabel">Post your comment<div style={{fontSize:"10px",color:"white"}} class="hovereffect" onClick={()=>{window.location.href="#authorArticles"}}>Or see more storis</div></div></div>

<div class="mb-3">
<div class="formInputLabel">Type message</div>
<textarea rows="5"  type="text" class="form-control" autoComplete="off" name="msg" ></textarea>
<br></br>
<div class="formInputLabel">Your name</div>
<input type="text" class="form-control" autoComplete="off" name="name" ></input>
<input type="hidden" class="form-control" autoComplete="off" name="contact" value="1234567890" ></input>
</div>
<div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:submissionStatus}}/>
<div onClick={()=>{


if(Array.from(document.getElementById("clientForm").msg.value).length<1){
  ToastAlert('toastAlert2','Type a message',2000)
  } else if(Array.from(document.getElementById("clientForm").name.value).length<1){

ToastAlert('toastAlert2','Enter your name',2000)
}
 
else{

setSubmissionStatus("<div style='color:green;'>Submiting, please wait .....</div>")

fetch('/submitPubarticleOpinion/'+articleParams.id,{method:"post",
headers: { 'Content-type': 'application/json' },
body:JSON.stringify({name:document.getElementById("clientForm").name.value,contact:parseInt(document.getElementById("clientForm").contact.value),msg:document.getElementById("clientForm").msg.value})
}).then(res=>{

res.json()
}).then(resp=>{

setOpinionsNumb(opinionsNumb+1)
setSubmissionStatus(`<div style='color:green;'>Thank you ${document.getElementById("clientForm").name.value} for submiting.</div>`)
document.getElementById("clientForm").name.value=""
document.getElementById("clientForm").contact.value=""
document.getElementById("clientForm").msg.value=""
ToastAlert('toastAlert1','Successful',3000)
})


}




}} class="form-submit-btn backgroundColorHovereffect">Post</div><p></p>
<a href="/pages/brocode" ><label style={{color:"green"}}><span class="hovereffect"> Who is Kayas? Get to know</span></label></a>
</form>
              
</div>

</div>
                  
                  </div>
                  <div class="col-md-2"></div>
                  

                  </div>  
                 
            

           
            
             
          
<div style={{paddingTop:"15px"}} id="authorArticles"></div>
                   
          <div class="row">{authorArticles}</div>
         
                
          <AllArticles/>
      
            </div>
              
             
            );
            
            
            
            
           
          
        
      
       //return statement
      
      
      }
    
     export default PubArticleComp