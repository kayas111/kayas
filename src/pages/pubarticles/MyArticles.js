


import 'firebase/compat/storage';


import React, {useState} from 'react';


export function MyArticles(){
    const[status,setStatus]=useState('')
    let data=""
    const[myArticles,setMyArticles]=useState('')
   
            return(<div>
            <div style={{padding:"10px"}}>
                 
    <form method="post" id="myArticlesForm" action="#">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">See/share your Articles</div></div>
    

 <div class="mb-3">
 <div class="formInputLabel">Contact</div>
<input type="text" class="form-control" autoComplete="off" name="contact" ></input>
   <br></br>
<div class="formInputLabel">PIN</div>
 <input type="password" class="form-control" autoComplete="off" name="pin"  ></input>


 </div>
 
 <div style={{fontSize:"17px",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:status}}/>
 <div   onClick={
   ()=>{

     if(Array.from(document.getElementById("myArticlesForm")[0].value).length<10||Array.from(document.getElementById("myArticlesForm")[0].value).length>10){
setStatus("<div style='color:red'>Please enter a correct number......</div>")

}else if(Array.from(document.getElementById("myArticlesForm")[1].value).length<5||Array.from(document.getElementById("myArticlesForm")[1].value).length>5)
     {
        setStatus("<div style='color:red;'>Please enter a PIN of 5 digits ......</div>")
     }

else{
setStatus("<div style='color:green;'>Getting your Articles, <span style='color:red;'>please wait ......</span></div>") 
fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:document.getElementById("myArticlesForm")[0].value,
pin:document.getElementById("myArticlesForm")[1].value,
    }) 
}).then(res=>res.json()).then((resp)=>{
   
    
    if(resp.registered===false){
        setStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas then begin writing articles</div>")
    }
     else{
        if(resp.registered===true&&resp.pin===false){
            setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)

        }else{
            
   setStatus(`<div style='color:green;'><span style='color:red;'>Please be patient as we get your articles ......</div>`)

   fetch('/getMyArticles',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
      contact:document.getElementById("myArticlesForm")[0].value,
    })
}).then(resp=>{
    
    return resp.json()}).then(resp=>{
if(resp.length===0){
setStatus(`<div style='color:red;'>You don't have any Articles written. Please write some and get back. Thank you.</div>`) 

}else{
resp.reverse()



setMyArticles(resp.map((articleObject)=>{
    let newComments;
    if(articleObject.newCommentsNumb===undefined){
        newComments=0
        }else{
        newComments=articleObject.newCommentsNumb
        }

    return(
    <div class="col-md-6" onClick={()=>{
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


// resp.forEach(articleObject=>{

// let newComments;
// if(articleObject.newCommentsNumb===undefined){
// newComments=0
// }else{
// newComments=articleObject.newCommentsNumb
// }

// data+=`<div class='col-sm-6 col-md-4' style='background:#E3E3E3;border:4px solid white;border-radius:20px;padding:10px;' onclick=fetch('/resetPubArticlesNewCommentsNumb',{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({id:${articleObject.id}})}) ><div><a  style='color:black;' href='/pages/pubarticles/article/${articleObject.id}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:black;font-size:18px;'>${articleObject.headline1}</div><div style='font-size:12px;color:grey;'>Article ${articleObject.id}</div><div style='color:grey;padding-top:5px;'><span style='color:red;'>${newComments}</span> new comments | <span style='color:red;'>${articleObject.visits}</span> views | <span style='color:red;'>${articleObject.pubArticleOpinions.length}</span> comments</div></div> </span></a></div></div>`
// })
// setMyArticles('<div style="text-align:center;font-size:20px;color:red;">Your Articles below:</div>'+data)
// setStatus(`<div style='color:green;'>Done, scroll down to see your Articles. <span class='fa fa-check'></span></div>`) 

}

      
     
      })
   
        }
        
      
    }
   
}
    

)


}
   }
 } class="form-submit-btn backgroundColorHovereffect">See articles</div><p></p>
 <div class="formInputLabel">Share title</div>
<input type="text" class="form-control" autoComplete="off" name="articlesShareTitle"  ></input><br></br>
<div onClick={
   ()=>{

     if(Array.from(document.getElementById("myArticlesForm")[0].value).length<10||Array.from(document.getElementById("myArticlesForm")[0].value).length>10){
setStatus("<div style='color:red'>Please enter a correct number......</div>")

}else if(Array.from(document.getElementById("myArticlesForm")[1].value).length<5||Array.from(document.getElementById("myArticlesForm")[1].value).length>5)
     {
        setStatus("<div style='color:red;'>Please enter a PIN of 5 digits ......</div>")
     }

else{
setStatus("<div style='color:green;'>Getting your Articles, <span style='color:red;'>please wait ......</span></div>") 
fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:document.getElementById("myArticlesForm")[0].value,
pin:document.getElementById("myArticlesForm")[1].value,
    }) 
}).then(res=>res.json()).then((resp)=>{
   
    
    if(resp.registered===false){
        setStatus("<div style='color:red;'>You are not registered with Kayas, please register with Kayas then begin writing articles</div>")
    }
     else{
        if(resp.registered===true&&resp.pin===false){
            setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)

        }else{
       
           
   setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient as we finalize with getting your articles ......</div>`)

window.location.href=`whatsapp://send?text=*${document.getElementById("myArticlesForm").articlesShareTitle.value.trim()}*%0A___________________________%0A%0ASee the details by tapping the link below:%0Ahttps://kayas-mak.herokuapp.com/pages/pubarticles/sharemyarticles/${document.getElementById("myArticlesForm").contact.value}%0A_______________________%0A_Powered by: 🌹Kayas_`
        }
        
      
    }
   
}
    

)


}
   }
 } class="form-submit-btn backgroundColorHovereffect"><span class='fa fa-whatsapp'></span> Share articles</div>


 </form><p></p><p></p>
 <div class="row">{myArticles}</div>
 

 </div>
        
   
    
            </div>)
          
  }

  export default MyArticles