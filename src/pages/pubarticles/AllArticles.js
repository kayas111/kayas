


import 'firebase/compat/storage';
import {Link} from 'react-router-dom';
import { ArticlesNav,PubArticleSearchComp } from './PubArticleHome';
import React, {useEffect,useState} from 'react';

import { ListArticles, SuspenseComponent } from '../Functions';

export function AllArticles(props){
    const[articles,setArticles]=useState(<SuspenseComponent/>)
//  useEffect( async ()=>{
   
//  await  fetch('/getAllArticles').then(res=>res.json()).then( async (resp)=>{
   
//   let  articles= await ListArticles(resp)
//       setArticles(articles)
 
 
//  })
 
//  },[])
  let style={color:"black"}
 
         return(<div style={{padding:"5px"}}>
              <div class="pageLabel">Select the category of your choice</div>
            <div class="pageDescription">All categories are listed below</div>
              <p></p>
          <div class="row">
<div class="col-md-3">
<Link style={style}  to="/pages/pubarticles/sharemyarticles/703852178">
<div class="allArticlesCont1">
<div class="allArticlesCont2">
<div class="bold">Trending in Makerere University</div>
<div class="light">Created by Kayas 0703852178</div>
</div>
</div>
</Link>
</div>


<div style={{padding:"12px", fontSize:"15px",fontWeight:"600"}}>
    Other categories will be uploaded soon
</div>



          </div>

          <div style={{paddingBottom:"300px"}}></div>
       </div>)
       }

export default AllArticles