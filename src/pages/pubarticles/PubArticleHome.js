import { VerifyRegistrationAndPin,ToastAlert } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';

import {kayasDomainUrl} from '../../Variables'

firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()




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
            
            
    
        </div>
        )
}






   