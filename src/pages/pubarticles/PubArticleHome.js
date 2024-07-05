import { VerifyRegistrationAndPin,ToastAlert } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState,useContext,useReducer} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {kayasDomainUrl} from '../../Variables'

firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()



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

export function ArticlesNav(props){
  let style2={padding:"5px"}
  
    return(
  
    <div style={{paddingTop:"8px",display:"flex",flexWrap:"wrap"}}>
      <div style={style2}><div class="button1" onClick={()=>{
              window.location.href=`/pages/pubarticles/createarticle`
            }}><span class="hovereffect"><span class="fa fa-plus"></span> New article</span></div></div>
      <div style={style2}><div class="button1" onClick={()=>{
let pin=window.prompt('Enter your PIN to delete this article.');
VerifyRegistrationAndPin(props.articleAuthorContact,pin).then(resp=>{
  if(resp.pin===false){
    
    ToastAlert('toastAlert2','Not allowed',3000)
  }else{
  const imageRef = ref(getStorage(), `pubArticleImages/pubArticleImage_${props.articleId}`);
  deleteObject(imageRef).then(() => {
  fetch('/deleteArticle',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      articleId:parseInt(props.articleId)

    }) 
}).then(resp=>resp.json()).then(resp=>{
window.location.href=`/pages/pubarticles/article/${props.articleId}`
})
}).catch((error) => {
   fetch('/deleteArticle',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      articleId:parseInt(props.articleId)

    }) 
}).then(resp=>resp.json()).then(resp=>{
window.location.href=`/pages/pubarticles/article/${props.articleId}`
})

 });
 

  


  }
})


            

            }}><span class="hovereffect"><span class="fa fa-minus"></span> Delete</span></div>  </div>
      <div style={style2}><div class="button1" onClick={()=>{
              window.location.href=`/pages/pubarticles/assessmyarticles`
            }}>
     
<span class="hovereffect"> Assess</span>
</div></div>

          

            
            
            
            
            
            </div>
 
  
    )
  }
export function PubArticleCompHome(){
    return(
        <div>
            <div style={{color:"red",fontSize:"25px",textAlign:"center"}}>Kayas Articles</div>
            
            
    <div style={{padding:"3px"}}>
        
        
      <div class="row">
          
    <div class="col-md-6">  Kayas Aticles allows you to write stories and other information that you want the public to read and react to. As you scroll down, you will be able to see how your article will look like. To be able to create an article, you need to have an account with Kayas. 
        <p></p>
    You can always keep checking your article to see how many reactions have been posted by diffrent students and you will also be able to receive notifications each time a student reacts to your article.
    <div><a href="/pages/pubarticles/createarticle"><span class="btn btn-success">Create an Article now</span></a></div>
<p></p><p></p></div>

<div class="col-md-6">
    <div style={{color:"green", fontSize:"20px",fontWeight:"bold"}}>How your article will look like:</div>
    Below is how your article will appear. It consists of an Article headline and a body. The headline is what your article is about and the body is the information that the article describes.
</div>  
<p></p>
<div class="col-md-3"></div>
<div class="col-md-6">
<div style={{color:"red",fontSize:"25px"}}>This is how the Article headline will appear.</div>
<div style={{color:"green",fontSize:"12px",textDecoration:"underline"}}>Wriiten by: Your name and contact will appear here as the Author</div>
<div style={{color:"grey",fontSize:"15px"}}><span style={{color:"red"}}>20</span> students have commented on this article</div>
<ArticlesNav/>
<div><p></p><p></p>This is now the body of your article. Here you will write what ever information you want to publish and share out. You could write a success message or any words of encouragement to your loved one. Below this body will be a form which students will be in position to use to react to your information.</div>
<div style={{textAlign:"center",padding:"20px",paddingRight:"40px"}}> 
              <div style={{color:"green",fontWeight:"bold", fontSize:"15px"}}>Post your reaction</div>
              
               <form method="post" id="clientForm">
           <div class="mb-3">
           
           <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Your Name e.g. Charles'  ></input>
           <br></br>
           <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter Your WhatsApp Contact'  ></input>
           <br></br>
           
             <textarea rows="5"  type="text" class="form-control" autoComplete="off" name="msg" placeholder='Type Your Message Here' ></textarea>
            
             
           </div>
          
           <div style={{borderRadius:"30px"}} class="btn btn-success">Post</div><p></p>
           <a href="/pages/brocode" ><label style={{color:"green"}}><span class="hovereffect"> Who is Kayas? Get to know</span></label></a>
           </form>
           <div style={{textAlign:"center"}}>
        
             <div style={{color:"red",fontWeight:"bold"}}>20 reactions below:</div>
               <span style={{borderRadius:"30px"}}  class="btn btn-success">Tap here to see</span></div>      
               
           </div>

           <div style={{borderRadius:"40px",border:"1px solid green",padding:"5px",textAlign:"center"}}>
            <a style={{color:"grey"}} href="#">
              <span  class="hovereffect">More trending stories, tap here <span  style={{height:"19px", width:"19px",color:"grey"}}class="spinner-grow" role="status"></span></span> </a>
             <br></br>
             <a style={{color:"green",fontSize:""}} href="https://twitter.com/isaacopiokayas">
              <span  class="hovereffect">Follow Kayas on Twitter, tap here <span  class="fa fa-twitter"></span></span> </a>
             <br></br>
             <a style={{color:"green",fontSize:""}} href="#">
              <span  class="hovereffect">Share story through WhatsApp, tap here <span  class="fa fa-whatsapp"></span></span> </a>
             
             
              </div>
</div>
<div class="col-md-3"></div>
      </div>

<p></p>



       
        </div>
        </div>
        )
}




export function CreateArticle(){
    const[status,setStatus]=useState('')
    const[body,setBody]=useState('')
    const[progressBarValue,setProgressBarValue]=useState(0)
    const[imagePreview,setImagePreview]=useState('Image appears here')
    

   


    return (<div>
           

      <div className ="row">
<div class='col-md-3'></div>
<div class='col-md-6'>
<ArticlesNav/>
  <div style={{padding:"8px"}}>
    <form method="post" id="articleCreateForm" action="#">

    <div style={{paddingBottom:"8px"}}><div class="formLabel">Create article.</div></div>
       <div class="mb-3">
     <div class="formInputLabel">Create headline</div>
     <textarea rows="3" type="text" class="form-control" autoComplete="off" name="articleHeadline1"></textarea>
   
   <br></br>
   <div class="formInputLabel">Add photo <span style={{fontSize:"12px"}}> <input type="file" id="pubArticleImageInputElement" name="file" onChange={(event)=>{
  let file=document.querySelector('#pubArticleImageInputElement').files[0]
  if(file.type==='image/png'||file.type==='image/jpg'||file.type==='image/jpeg'||file.type==='image/gif'||file.type==='image/webp'||file.type==='image/avif'){
    setImagePreview(URL.createObjectURL(file))
  }else{
        
    window.location.href='/pages/pubarticles/createarticle'
    ToastAlert('toastAlert2','Image type not supported. Change image',3000)
  }
  
 
}}></input></span></div>

   <div style={{paddingTop:"4px"}}><img src={imagePreview} class=" d-block w-100" alt=""/></div>
  <br></br>
  <div class="formInputLabel">Paste your message below:</div>
  <CKEditor config={{toolbar:['Bold','Italic','Link','NumberedList','BulletedList']}}
        editor={ ClassicEditor }
        onChange={ ( event, editor ) => {
        
          const data = editor.getData();
          setBody(data);
          


        } }
      />
   
   <br></br>
   <div class="formInputLabel">Contact</div>
    <input type="text" class="form-control" autoComplete="off" name="contact"></input>
  
   
   <br></br>
   <div class="formInputLabel">PIN</div>
     <input type="password" class="form-control" autoComplete="off" name="pin" ></input>
    
   
     </div>
     
     <div style={{fontSize:"12px",paddingTop:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
     <progress value={progressBarValue} max="100"  style={{width:"100%",color:"red"}}/>
     <div style={{borderRadius:"5px"}}  onClick={
     
       ()=>{
      
          
                 
          
         if(Array.from(document.getElementById("articleCreateForm").articleHeadline1.value.trim()).length<2){
          ToastAlert('toastAlert2','Enter a headline',3000)

}else if(Array.from(body).length<8)
         {
            
            ToastAlert('toastAlert2','Type some information in the body section',3000)
         }else if(Array.from(document.getElementById("articleCreateForm").contact.value.trim()).length<10||Array.from(document.getElementById("articleCreateForm")[2].value.trim()).length>10)
         {
            ToastAlert('toastAlert2','Enter correct contact format e.g. 0703852178',3000)
         }else if(Array.from(document.getElementById("articleCreateForm").pin.value.trim()).length<5||Array.from(document.getElementById("articleCreateForm")[3].value.trim()).length>5)
         {
            
            ToastAlert('toastAlert2','Enter your PIN',3000)
         }

else{
    setStatus("<div style='color:green;'>Creating please wait ......</div>") 
    fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
contact:document.getElementById("articleCreateForm").contact.value,
pin:document.getElementById("articleCreateForm").pin.value,
        }) 
    }).then(res=>res.json()).then((resp)=>{
       
        if(resp.registered===false){
            window.alert('Visit menu and register with Kayas')
        }
         else{
            if(resp.registered===true&&resp.pin===false){
              ToastAlert('toastAlert2','Incorrect PIN. Try again',3000)
    
            }else{
                            
            
          fetch(`/getTradingDetails/${parseInt(document.getElementById("articleCreateForm").contact.value)}`).then(res=>res.json()).then(resp=>{

let traderDetailsObj=resp[0]

   
         if(traderDetailsObj.permissionTokensObj.createPubArticleTokens<1 || 
          traderDetailsObj.permissionTokensObj.createPubArticleTokens>1){
                             
            fetch('/createArticle',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
headline1:document.getElementById("articleCreateForm")[0].value.trim(),
institution:traderDetailsObj.institution.trim(),
author:traderDetailsObj.name.trim(),
contact:parseInt(document.getElementById("articleCreateForm").contact.value.trim()),
body:body.trim()

      })
  }).then(resp=>{
      
      return resp.json()}).then(res=>{
        let responseObject=res
        if(res.limitReached===1){
setStatus(`<div style='color:red;'>Maximum limit reached. Delete some articles to create space.</div>`)
ToastAlert('toastAlert2','Maximum number of articles reached. Delete some',5000)
}else{


  let imageFile=document.querySelector('#pubArticleImageInputElement').files[0]
setStatus(`<div style='color:green;'>Creating, please wait.....</div>`) 
          document.getElementById("articleCreateForm").articleHeadline1.value=""
      
      document.getElementById("articleCreateForm").contact.value=""
      document.getElementById("articleCreateForm").pin.value=""
if(imageFile===undefined){
  window.location.href=`/pages/pubarticles/article/${res.id}`
  ToastAlert('toastAlert1','Successful. Please wait....',3000)
  }else{

    let value=0;
    setInterval(()=>{
      if(value!=94){
        value+=1
        setProgressBarValue(value)
    
      }else{;}
     
    },400)
    setStatus(`<div style='color:green;'>Saving image.......</div>`) 

  let imageName=`pubArticleImage_${responseObject.id}`
   let imageRef= bucket.child(`pubArticleImages/${imageName}`)
   imageRef.put(imageFile).then(resp=>{
   imageRef.getDownloadURL({
    orderBy:'generation',limitTo:1
   }).then(resp=>{
   let imageDownLoadUrl=resp;
    
    fetch('/addPubArticleImageUrlToArticle',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({contact:parseInt(responseObject.contact),articleId:responseObject.id,imageDownLoadUrl:imageDownLoadUrl})
  }).then(resp=>{
      setStatus(`<div style='color:green;'>Image saved</div>`) 
      window.location.href=`/pages/pubarticles/article/${res.id}`
      ToastAlert('toastAlert1','Successful. Please wait....',3000)
   })
   
           
   })
   })
   
  }
   
     
}
        
    })
    
         }
        else if(traderDetailsObj.permissionTokensObj.createPubArticleTokens===0) {
          setStatus(`<div style='color:red;'>${traderDetailsObj.name}, please whatsapp Kayas on 0703852178 to renew your tokens in order to be able to create more articles. <br></br><span style="color:green;">You can instead edit your already existing Articles to come up with a new Article. Go and see your Articles <span style="color:red;">and click the edit button</span> to edit one of your Articles. Thank you for keeping it Kayas.</span></div>`)
        }
        else{
          setStatus(`<div style='color:green;'><span style='color:red;'>${traderDetailsObj.name},</span> an error must have occured, please try again.</div>`)
        }



          

        



         })




       
            }
            
          
        }
       
    }
        

    )
    
  
}
       }
     } class="form-submit-btn backgroundColorHovereffect">Create Article</div><p></p>
    
     </form>
     </div>
     
     
     
     <div style={{paddingTop:"30px"}}></div>
     <MyArticles />
     
     </div>
<div class='col-md-3'></div>


      </div>
         

    
  
     </div>)
}

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
      export function AllArticles(){
   const[articles,setArticles]=useState(<div style={{padding:"40px",fontSize:"15px",color:"green",textAlign:"center"}}>
      More stories loading.......
      </div>)
useEffect(()=>{
fetch('/getAllArticles').then(res=>res.json()).then(resp=>{
     setArticles(resp.map((articleObject)=>{
    return(
    <div class="col-md-4" onClick={()=>{
      window.location.href=`/pages/pubarticles/article/${articleObject.id}`
    }}><div class="pubArticleListItemContainer">
      
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
    
    )}))


})

},[])


        return(<div>
 <div class="row">{articles}</div>
      </div>)
      }

      export function MyArticles(){
        const[status,setStatus]=useState('')
        let data=""
        const[myArticles,setMyArticles]=useState('')
       
                return(<div>
                <div style={{padding:"10px"}}>
                     
        <form method="post" id="myArticlesForm" action="#">
        <div style={{paddingBottom:"8px"}}><div class="formLabel">See/share your Articles</div></div>
        

     <div class="mb-3">
     <div class="formInputLabel">Contact</div>
    <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
       <br></br>
   <div class="formInputLabel">PIN</div>
     <input type="password" class="form-control" autoComplete="off" name="pin"  ></input>
    
   
     </div>
     
     <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
     <div   onClick={
       ()=>{
    
         if(Array.from(document.getElementById("myArticlesForm")[0].value).length<10||Array.from(document.getElementById("myArticlesForm")[0].value).length>10){
setStatus("<div style='color:red'>Please enter a correct number......</div>")

}else if(Array.from(document.getElementById("myArticlesForm")[1].value).length<5||Array.from(document.getElementById("myArticlesForm")[1].value).length>5)
         {
            setStatus("<div style='color:red;'>Please enter a PIN of 5 digits ......</div>")
         }

else{
    setStatus("<div style='color:green;'>Getting your Articles, <span style='color:red;'>please wait ......</span></div>") 
    fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
contact:document.getElementById("myArticlesForm")[0].value,
pin:document.getElementById("myArticlesForm")[1].value,
        }) 
    }).then(res=>res.json()).then((resp)=>{
       
        
        if(resp.registered===false){
            setStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas then begin writing articles</div>")
        }
         else{
            if(resp.registered===true&&resp.pin===false){
                setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
    
            }else{
                
       setStatus(`<div style='color:green;'><span style='color:red;'>Please be patient as we get your articles ......</div>`)

       fetch('/getMyArticles',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
          contact:document.getElementById("myArticlesForm")[0].value,
        })
    }).then(resp=>{
        setStatus(`<div style='color:green;'>Your Articles have been received, please wait we share with you ......</div>`)

        return resp.json()}).then(resp=>{
if(resp.length===0){
  setStatus(`<div style='color:red;'>You don't have any Articles written. Please write some and get back. Thank you.</div>`) 

}else{
resp.reverse()
  resp.forEach(articleObject=>{

    let newComments;
if(articleObject.newCommentsNumb===undefined){
  newComments=0
}else{
  newComments=articleObject.newCommentsNumb
}

    data+=`<div class='col-sm-6 col-md-4' style='background:#E3E3E3;border:4px solid white;border-radius:20px;padding:10px;' onclick=fetch('/resetPubArticlesNewCommentsNumb',{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:${articleObject.id}})}) ><div><a  style='color:black;' href='/pages/pubarticles/article/${articleObject.id}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:black;font-size:18px;'>${articleObject.headline1}</div><div style='font-size:12px;color:grey;'>Article ${articleObject.id}</div><div style='color:grey;padding-top:5px;'><span style='color:red;'>${newComments}</span> new comments | <span style='color:red;'>${articleObject.visits}</span> views | <span style='color:red;'>${articleObject.pubArticleOpinions.length}</span> comments</div></div> </span></a></div></div>`
})
setMyArticles('<div style="text-align:center;font-size:20px;color:red;">Your Articles below:</div>'+data)
    setStatus(`<div style='color:green;'>Done, scroll down to see your Articles. <span class='fa fa-check'></span></div>`) 

}

          
         
          })
       
            }
            
          
        }
       
    }
        

    )
    
  
}
       }
     } class="form-submit-btn backgroundColorHovereffect">See articles</div><p></p>
     <div class="formInputLabel">Share title</div>
    <input type="text" class="form-control" autoComplete="off" name="articlesShareTitle"  ></input><br></br>
    <div onClick={
       ()=>{
    
         if(Array.from(document.getElementById("myArticlesForm")[0].value).length<10||Array.from(document.getElementById("myArticlesForm")[0].value).length>10){
setStatus("<div style='color:red'>Please enter a correct number......</div>")

}else if(Array.from(document.getElementById("myArticlesForm")[1].value).length<5||Array.from(document.getElementById("myArticlesForm")[1].value).length>5)
         {
            setStatus("<div style='color:red;'>Please enter a PIN of 5 digits ......</div>")
         }

else{
    setStatus("<div style='color:green;'>Getting your Articles, <span style='color:red;'>please wait ......</span></div>") 
    fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
contact:document.getElementById("myArticlesForm")[0].value,
pin:document.getElementById("myArticlesForm")[1].value,
        }) 
    }).then(res=>res.json()).then((resp)=>{
       
        
        if(resp.registered===false){
            setStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas then begin writing articles</div>")
        }
         else{
            if(resp.registered===true&&resp.pin===false){
                setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
    
            }else{
           
               
       setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient as we finalize with getting your articles ......</div>`)
 
window.location.href=`whatsapp://send?text=*${document.getElementById("myArticlesForm").articlesShareTitle.value.trim()}*%0A___________________________%0A%0ASee the details by tapping the link below:%0Ahttps://kayas-mak.herokuapp.com/pages/pubarticles/sharemyarticles/${document.getElementById("myArticlesForm").contact.value}%0A_______________________%0A_Powered by: 🌹Kayas_`
            }
            
          
        }
       
    }
        

    )
    
  
}
       }
     } class="form-submit-btn backgroundColorHovereffect"><span class='fa fa-whatsapp'></span> Share articles</div>


     </form><p></p><p></p>
     <div style={{padding:"3px"}}class="row" dangerouslySetInnerHTML={{__html:myArticles}}/>
     <hr></hr>
    
     </div>
            
       
        
                </div>)
              
      }

      export function ShareMyArticles(props){
        let componentParams=useParams(),articleAuthorContact
             
        let data=""
        const[myArticles,setMyArticles]=useState('')
        const[others,setOthers]=useState('')
        function FetchArticles(articleAuthorContact){
          fetch('/getMyArticles',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
              contact:parseInt(articleAuthorContact),
            })
          }).then(resp=>{
          
            return resp.json()}).then(resp=>{
             
              if(resp.length===0){
                setMyArticles(`<div style='color:red;text-align:center;'>These Articles do not exist.</div>`) 
              
              }else{
                let firstArticle=resp[0]
              resp.reverse()
                resp.forEach(articleObject=>{
              
               
                  data+=`<div class='col-sm-6 col-md-4' style='background:#E3E3E3;border:4px solid white;border-radius:20px;padding:10px;' ><div><a  style='color:black;' href='/pages/pubarticles/article/${articleObject.id}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='font-size:12px;color:red;'>${articleObject.institution}</div><div style='color:black;font-size:18px;'>${articleObject.headline1}</div><div style='color:grey;padding-top:5px;'><span style='color:red;'>${articleObject.visits}</span> views, <span style='color:red;'>${articleObject.pubArticleOpinions.length}</span> comments | Article ${articleObject.id}</div></div> </span></a></div> </div>`
              })
              setMyArticles(`<div style="text-align:center;font-size:18px;color:black;padding-bottom:10px;"><div style="font-size:12px;">Articles by:</div> ${firstArticle.author}</div>`+data)
                  
              
              }
              
            })
        }
        
        
        useEffect(()=>{
        
           
          if(componentParams.articleAuthorContact===undefined){
      //check this code, this condition is not significant
          articleAuthorContact=props.articleAuthorContact
          FetchArticles(articleAuthorContact)

        
          }else{
            articleAuthorContact=componentParams.articleAuthorContact
            FetchArticles(articleAuthorContact)
          }






        },[])
       
                return(<div>
      
      <div style={{padding:"13px"}}class="row" dangerouslySetInnerHTML={{__html:myArticles}}/>
       
        
                </div>)
              
      }