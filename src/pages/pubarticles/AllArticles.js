


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
 
 
         return(<div style={{padding:"5px"}}>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                <div class="label">All articles</div>
            <div class="description">All articles created on Kayas</div>
                </div>
                <div class="col-md-3"></div>
            </div><p></p>
          <div class="row">{articles}</div>
       </div>)
       }

export default AllArticles