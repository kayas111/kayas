import { ArticlesNav } from "./pubarticles/PubArticleHome";
import { kayasDomainUrl } from "../Variables";
export function SuspenseComponent(){
  return(
    <div class="SuspenseContainer">
    <div><span style={{fontSize:"8px"}} class="spinner-border" role="status"></span></div>
 <div>Kayas</div> 
  </div>
  )
}

export function IsLoggedIn(cookies){
if(cookies.user===undefined){
  ToastAlert('toastAlert2','You are not logged in, please log in',4000);

return false;
}else{
 return true; 
}



}


export async function ListOtherAuthorArticles(ArrayOfArticles,currentArticleId){
  let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact
  
    let otherAuthorArticles=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id!==parseInt(currentArticleId))).reverse()
   
 return (ListArticles(otherAuthorArticles))
  
    
    }
  
    export function ListOtherArticles(ArrayOfArticles,currentArticleId){
     
     
     
      let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact
    let otherArticles=ArrayOfArticles.filter(article=>article.contact!==authorContact).reverse()
 return (ListArticles(otherArticles))
      
        
        }
      


export function ListAuthorArticlesPlusOthers(ArrayOfArticles,currentArticleId){
let authorContact= ArrayOfArticles.filter(article=>article.id===parseInt(currentArticleId))[0].contact

  let otherAuthorArticles=ArrayOfArticles.filter(article=>(article.contact===authorContact && article.id!==parseInt(currentArticleId))).reverse()
  let otherArticles=ArrayOfArticles.filter(article=>article.contact!==authorContact).reverse()
  return (ListArticles(otherAuthorArticles.concat(otherArticles)))

  
  }



export function ListArticles(ArrayOfArticles){
let style={padding:"5px"},verificationTick
  // return (
    
  //   ArrayOfArticles.map((articleObject)=>{
  //     return(
  //     <div class="col-md-4" onClick={()=>{
  //       window.location.href=`/pages/pubarticles/article/${articleObject.id}`
  //     }}>
        
  //       <div class="pubArticleListItemContainer">
  //       <div class="pubArticleListItemContainer2 backgroundColorHoverEffect3">
  // <div class="pubArticleListItemInstitution">{articleObject.institution}</div>
  // <div class="pubArticleListItemHeadline">{articleObject.headline1}</div>
  // <div class="pubArticleListItemViewsAndVisits">
  //       <div>{articleObject.visits} views | Article {articleObject.id}</div>
       
  //       <div>Created by {articleObject.author} 0{articleObject.contact}</div>
  //       </div>
  
  
  // </div>
  //     </div>
      
      
  //     </div>
      
  //     )})
      
      
  //     )
  return (
    ArrayOfArticles.map(article=>{
      let whatsappPublicArticleShareLink=`whatsapp://send?text=*${article.headline1.trim()}*%0ASee details below. Tap the link:%0A%0A${kayasDomainUrl}/pages/pubarticles/article/${article.id}%0A%0A_Created by: ${article.author}_`
      
      return(
      <div>
                                       
                     
  <div class="row">
        <div class="col-md-3"></div>
        
        <div  class="col-md-6">
        
        
       <div class="articleContainer">
        <div class="articleContainer2">
        <ArticlesNav articleAuthorContact={article.contact} articleId={article.id}/>  
        <div class="articleHeadline" >{article.headline1}</div>
               
        <div style={{paddingBottom:"3px"}}>
        <div style={{display:"flex",flexWrap:"wrap"}}>
          <div  style={style}>
            <div><span style={{color:"red",fontSize:"15px",fontWeight:"600"}}>{article.visits}</span>  
          </div> 
          
          </div>
    
          <div style={style}>
          <div class="button1"  onClick={
        ()=>{
         window.location.href=whatsappPublicArticleShareLink
        }}><span class="fa fa-whatsapp"></span> Share article</div>
                         
          </div><p></p>
     
    
    
          </div>
          <div style={{paddingTop:"5px"}}>
        <div style={{fontSize:"12px"}}> Created by {article.author} (0{article.contact}) <span dangerouslySetInnerHTML={{__html:verificationTick}}/>
        <div >{article.institution} </div>
        </div>
    
    
    </div><p></p>
          
          
           </div>   
          
           
    <div style={{paddingTop:"2px"}}><img src={article.imageDownLoadUrl} class=" d-block w-100" /></div>
    
    <div style={{paddingTop:"5px",fontSize:"14px"}}><p></p>
     <div  dangerouslySetInnerHTML={{__html:article.body}}/>
     <div>Always keep it Kayas.
      </div><p></p>
     </div>
     
           
    
        </div>
       </div>


        
        </div>
        <div class="col-md-3"></div>
        

        </div>  
       
            
   

            


  </div>
    
    )})
  )
  }
export function getFormData(event){
  event.preventDefault();
  return (Object.fromEntries(new FormData(event.currentTarget)))

}

export function getFormDataOnClick(formElement){
  return (Object.fromEntries(new FormData(formElement)))
  }

export function setKayaserVerificationStatus(verificationDetailsObj,handlerFunction,nextFunction){
  if(verificationDetailsObj.registered===false){
    handlerFunction ("<div style='color:red;'>You are not registered with Kayas, please register.</div>")
   
  }else if(verificationDetailsObj.registered===true&&verificationDetailsObj.pin===false){
    handlerFunction (`<div style='color:red;'>${verificationDetailsObj.details.name}, your PIN is incorrect.</div>`)
  }
  else if(verificationDetailsObj.registered===true&&verificationDetailsObj.pin===true){
    handlerFunction(`<div style='color:green;'>Plese wait.......</div>`)
    nextFunction()
  }
  
  else{
    
  }

 }


export async function VerifyRegistrationAndPin(contact,pin){
      

  
 return await fetch('/verifyUser',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
contact:parseInt(contact),
pin:pin.trim(),
  }) 
}).then(res=>res.json()).then((resp)=>{
 
 if(resp.registered===false || resp.registered===true&&resp.pin===false || resp.registered===true&&resp.pin===true){
  
    return(resp)
  }
    else{
      return({msg:'Error'})
    }
    
    
    
    })


}
export function ConvertFileToBase64(file){
    return new Promise((resolve,reject)=>{
      let fileReader=new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload=()=>{
        resolve(fileReader)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  
  export function ReadFileAsArrayBuffer(file){
    return new Promise((resolve,reject)=>{
      let fileReader=new FileReader()
      fileReader.readAsArrayBuffer(file)
      fileReader.onload=()=>{
        resolve(fileReader)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  export async function GetTradingDetails(contact){
   let tradingDetails= await fetch(`/getTradingDetails/${contact}`).then(resp=>{
    
      return resp.json()}).then(resp=>{ return resp[0]})
      return tradingDetails

  }
export function ToastAlert(alertClass,message,delay){
  
let body=document.querySelector('body'),alertDiv=document.createElement('div')
alertDiv.textContent=message
alertDiv.classList.add(alertClass)
body.appendChild(alertDiv)
setTimeout(()=>{
  body.removeChild(alertDiv)
},delay)

  }



  export function globalReducerFunction(state,action){
    console.log(state)
    console.log('--------')
    switch(action.type){
      case 'add1':{
state.value=state.value+1
        return(state)
        
      }
    }
  }


  
