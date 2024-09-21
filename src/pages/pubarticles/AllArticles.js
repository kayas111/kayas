


import 'firebase/compat/storage';

import { ArticlesNav,PubArticleSearchComp } from './PubArticleHome';
import React, {useEffect,useState} from 'react';

import { SuspenseComponent } from '../Functions';
// firebase.initializeApp({
//   apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
//   authDomain: "kayas-42321.firebaseapp.com",
//   projectId: "kayas-42321",
//   storageBucket: "kayas-42321.appspot.com"

// })
// const storage=firebase.storage()
// const bucket=storage.ref()


export function AllArticles(){
    const[articles,setArticles]=useState(<SuspenseComponent/>)
 useEffect(()=>{
 fetch('/getAllArticles').then(res=>res.json()).then(resp=>{
      setArticles(resp.map((articleObject)=>{
     return(
     <div class="col-md-4" onClick={()=>{
       window.location.href=`/pages/pubarticles/article/${articleObject.id}`
     }}><div class="pubArticleListItemContainer">
       
    <div class ="pubArticleListItemContainer2 backgroundColorHoverEffect3">
    <div class="pubArticleListItemInstitution">{articleObject.institution}</div>
     <div class="pubArticleListItemHeadline">{articleObject.headline1}</div>
     <div class="pubArticleListItemViewsAndVisits">
                   <div>{articleObject.visits} views, {articleObject.pubArticleOpinions.length} comments, Article {articleObject.id}</div>
                   <div>Created by {articleObject.author} 0{articleObject.contact}</div>
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

export default AllArticles