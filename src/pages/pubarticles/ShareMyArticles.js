import { VerifyRegistrationAndPin,ToastAlert, ListArticles, SuspenseComponent } from '../Functions';
import firebase from 'firebase/compat/app';
import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';
export function ShareMyArticles(props){
    let componentParams=useParams(),articleAuthorContact
         
    const[authorName,setAuthorName]=useState('')
    const[myArticles,setMyArticles]=useState(SuspenseComponent)
    
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
           
            ToastAlert('toastAlert2','These Articles do not exist',3000)
          
          }else{
            let firstArticle=resp[0]
            setAuthorName(firstArticle.author)
          resp.reverse()
          setMyArticles(ListArticles(resp))
          
              
          
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
      <p></p>
  <div class="blackBgOrangeColor">Stories by {authorName}</div>
  <p></p>
  <div class="row">{myArticles}</div>
   
    
            </div>)
          
  }


  export default ShareMyArticles