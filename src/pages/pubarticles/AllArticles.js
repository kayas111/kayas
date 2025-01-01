


import 'firebase/compat/storage';

import { ArticlesNav,PubArticleSearchComp } from './PubArticleHome';
import React, {useEffect,useState} from 'react';

import { ListArticles, SuspenseComponent } from '../Functions';
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
      setArticles(ListArticles(resp))
 
 
 })
 
 },[])
 
 
         return(<div>
          <div class="row">{articles}</div>
       </div>)
       }

export default AllArticles