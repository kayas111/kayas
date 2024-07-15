import { VerifyRegistrationAndPin,ToastAlert } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
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


  export default ShareMyArticles