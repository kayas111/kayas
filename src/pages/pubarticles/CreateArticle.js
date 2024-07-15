import {ToastAlert } from '../Functions';
import firebase from 'firebase/compat/app';
import { ArticlesNav} from './PubArticleHome';
import MyArticles from './MyArticles';
import AllArticles from './AllArticles';
import 'firebase/compat/storage';

import React, {useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()

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
      if(value!==94){
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

export default CreateArticle