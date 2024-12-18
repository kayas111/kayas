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
export function ListArticles(ArrayOfArticles){
  return (
    
    ArrayOfArticles.map((articleObject)=>{
      return(
      <div class="col-md-4" onClick={()=>{
        window.location.href=`/pages/pubarticles/article/${articleObject.id}`
      }}>
        
        <div class="pubArticleListItemContainer">
        <div class="pubArticleListItemContainer2 backgroundColorHoverEffect3">
  <div class="pubArticleListItemInstitution">{articleObject.institution}</div>
  <div class="pubArticleListItemHeadline">{articleObject.headline1}</div>
  <div class="pubArticleListItemViewsAndVisits">
        <div>{articleObject.visits} views | Article {articleObject.id}</div>
        <div>Created by {articleObject.author} 0{articleObject.contact}</div>
        </div>
  
  
  </div>
      </div></div>
      
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


  
