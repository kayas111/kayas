import { VerifyRegistrationAndPin,ToastAlert,ListArticles, IsLoggedIn } from '../Functions';
import firebase from 'firebase/compat/app';

import { getStorage, ref, deleteObject } from "firebase/storage";
import 'firebase/compat/storage';
import {useCookies} from 'react-cookie'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react';

import axios from 'axios'

firebase.initializeApp({
  apiKey: "AIzaSyCf0LC-eL1pJ2Rpvh59ukbg5OUFm6IcrEA",
  authDomain: "kayas-42321.firebaseapp.com",
  projectId: "kayas-42321",
  storageBucket: "kayas-42321.appspot.com"

})
const storage=firebase.storage()
const bucket=storage.ref()


export function PubArticleSearchComp(){
  const [searchStatus,setSearchStatus]=useState('')
  const [searchResults,setSearchResults]=useState('')
  const [marqueeNews,setMarqueeNews]=useState('')
  useEffect(()=>{

fetch('/getMarqueeNews').then(resp=>resp.json()).then(resp=>{
resp.reverse()
setMarqueeNews(resp.map(marqueeNews=>{
  return(<span class="marqueeNewsSpan2" ><span class="marqueeNewsSpan1">{marqueeNews.msg}</span></span>)
}))
})




  },[])

  return(
    <div>
      <div style={{paddingRight:"10px",paddingLeft:"10px"}}><marquee scrollamount="3" class="marquee">{marqueeNews}</marquee></div>
      <div style={{padding:"5px"}}>
      <div class="PubArticleSearchCompContainer1">
        <div  style={{textAlign:"center"}}>{searchStatus}</div>
      

        <div>
          <input id="articleSearchValue" class="searchInputTag1" placeholder='Search for articles'
            onKeyDown={(event)=>{
          if(event.key==='Enter' || event.key==='NumpadEnter'){
  setSearchStatus(<div><span style={{fontSize:"2px",height:"15px",width:"15px"}} class="spinner-border" role="status"> </span> <span>Searching.....</span></div>)
                  
            axios.post('/searchForArticles',{
              articleSearchValue:document.querySelector('#articleSearchValue').value
            }).then(resp=>{
              
              if(resp.data.length===0){
                ToastAlert('toastAlert2','No results',3000);
                setSearchStatus('')
                setSearchResults('')
              } else{
                ToastAlert('toastAlert1','Successful',3000);
                setSearchStatus('')
                setSearchResults(ListArticles(resp.data))
              }
            })  
          }else{

          }
        
          
          
                  }}
        
        ></input>
        </div>
   
       

      </div>
    </div>
    <div class="row" >{searchResults}</div>
    </div>
  )
}

export function ArticlesNav(props){
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  let style2={padding:"5px"}
  
    return(
  <div>
    <div style={{paddingTop:"8px",display:"flex",flexWrap:"wrap"}}>
      <div style={style2}><div class="button1" onClick={()=>{
              window.location.href=`/pages/pubarticles/createarticle`
            }}><span class="hovereffect"><span class="fa fa-plus"></span> New article</span></div></div>
      <div style={style2}><div class="button1" onClick={()=>{

if(IsLoggedIn(cookies)===true && parseInt(props.articleAuthorContact)===parseInt(cookies.user.contact)){
  ToastAlert('toastAlert1','Deleting, please wait.....',4000)
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
 

  
}else{    ToastAlert('toastAlert2','Not allowed',3000)

}


            

            }}><span class="hovereffect"><span class="fa fa-minus"></span> Delete</span></div>  </div>

<div style={style2}><div class="button1" onClick={()=>{
             if(IsLoggedIn(cookies)===true){
              window.location.href="/pages/pubarticles/MyArticles"
             } else{;}
            }}>
     
<span class="hovereffect"> My Articles</span>
</div></div>  

      <div style={style2}><div class="button1" onClick={()=>{
         ToastAlert('toastAlert2','Not allowed',3000)
            //  window.location.href=`/pages/pubarticles/assessmyarticles`
            }}>
     
<span class="hovereffect"> Assess</span>
</div></div>
    
        
            
            
            
            
            </div>


<div><PubArticleSearchComp/></div>

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






   