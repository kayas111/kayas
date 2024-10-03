import {ToastAlert,IsLoggedIn } from '../Functions';
import firebase from 'firebase/compat/app';
import { ArticlesNav} from './PubArticleHome';
import {useCookies} from 'react-cookie'
import MyArticles from './MyArticles';
import AllArticles from './AllArticles';
import 'firebase/compat/storage';

import React, {useState,useEffect} from 'react';
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
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[status,setStatus]=useState('')
    const[body,setBody]=useState('')
    const[progressBarValue,setProgressBarValue]=useState(0)
    const[imagePreview,setImagePreview]=useState('Image appears here')
    
useEffect(()=>{
 if(IsLoggedIn(cookies)===true){;}else{;}




},[])
   
function CreateArticle(){     
  setStatus("<div style='color:green;'>Creating please wait ......</div>") 
  fetch(`/getTradingDetails/${parseInt(cookies.user.contact)}`).then(res=>res.json()).then(resp=>{

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
  contact:parseInt(traderDetailsObj.contact),
  body:body.trim()
  
        })
    }).then(resp=>{
        
        return resp.json()}).then(res=>{
          let responseObject=res
          if(res.limitReached===1){
  
  ToastAlert('toastAlert2','Maximum number of articles reached. Delete some',5000)
  }else{
                             
  let imageFile=document.querySelector('#pubArticleImageInputElement').files[0]  
    
  
            document.getElementById("articleCreateForm").articleHeadline1.value=""
      
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
            ToastAlert('toastAlert2','Maximum number of articles reached. Delete some',4000)
          }
          else{
            ToastAlert('toastAlert2','Error, try again',3000)
          }
  
           })}

    return (<div>
           

      <div className ="row">
<div class='col-md-3'></div>
<div class='col-md-6'>
<ArticlesNav/>
  <div style={{padding:"8px"}}>
    <form method="post" id="articleCreateForm" action="#">

    <div style={{paddingBottom:"8px"}}><div class="formLabel">Create article.</div></div>
       <div class="mb-3">
     <div class="formInputLabel">Type headline</div>
     <textarea rows="3" type="text" class="form-control" autoComplete="off" name="articleHeadline1"></textarea>
   
   <br></br>
   <div class="formInputLabel">Add photo <span style={{fontSize:"12px"}}> <input type="file" id="pubArticleImageInputElement" name="file" onChange={(event)=>{
  let file=document.querySelector('#pubArticleImageInputElement').files[0]
  let fileTypeCharacterArray=Array.from(file.type)
  if(fileTypeCharacterArray[0]==='i'&&fileTypeCharacterArray[1]==='m'&&fileTypeCharacterArray[2]==='a'&&fileTypeCharacterArray[3]==='g'&&fileTypeCharacterArray[4]==='e'){
    setImagePreview(URL.createObjectURL(file))
  }else{
        
    ToastAlert('toastAlert2',`Image format ${file.type} not supported. Change image`,5000)
    setTimeout(()=>{
      window.location.href='/pages/pubarticles/createarticle'
    },5000)
  }
  
 
}}></input></span></div>

   <div style={{paddingTop:"4px"}}><img src={imagePreview} class=" d-block w-100" alt=""/></div>
  <br></br>
  <div class="formInputLabel">Type/Paste your message here:</div>
  
  <CKEditor config={{toolbar:['Bold','Italic','Link','NumberedList','BulletedList']}}
        editor={ ClassicEditor }
        onChange={ ( event, editor ) => {
        
          const data = editor.getData();
          setBody(data);
          


        } }
      />
   
   
    </div>
     
     <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:status}}/>
     <progress value={progressBarValue} max="100"  style={{width:"100%",color:"red"}}/>
     <div   onClick={
     
       ()=>{
      
                 
          
         if(Array.from(document.getElementById("articleCreateForm").articleHeadline1.value.trim()).length<1){
          ToastAlert('toastAlert2','Enter a headline',3000)

}else {
  if(Array.from(body).length<1){
    
          let imageFile=document.querySelector('#pubArticleImageInputElement').files[0] 
          if(imageFile===undefined) {
            ToastAlert('toastAlert2','Type or paste some information in the body section',3000)
            
          }else{
            CreateArticle()
          }
            
         } else{
        
          CreateArticle()
          
          
        }
        }

       }
     } class="form-submit-btn backgroundColorHovereffect">Create Article</div><p></p>
    
     </form>
     </div>
     
     
     
     
     
     
     </div>
<div class='col-md-3'></div>
<div class='col-md-3'></div>
<div class="col-md-6"><MyArticles /></div>
<div class='col-md-3'></div>

      </div>
         

    
  
     </div>)
}

export default CreateArticle