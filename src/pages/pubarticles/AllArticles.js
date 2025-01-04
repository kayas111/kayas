


import 'firebase/compat/storage';

import { ArticlesNav,PubArticleSearchComp } from './PubArticleHome';
import React, {useEffect,useState} from 'react';

import { ListArticles, SuspenseComponent } from '../Functions';

export function AllArticles(props){
    const[articles,setArticles]=useState(<SuspenseComponent/>)
 useEffect( async ()=>{
   
 await  fetch('/getAllArticles').then(res=>res.json()).then( async (resp)=>{
   
  let  articles= await ListArticles(resp)
      setArticles(articles)
 
 
 })
 
 },[])
 
 
         return(<div>
          <div class="row">{articles}</div>
       </div>)
       }

export default AllArticles