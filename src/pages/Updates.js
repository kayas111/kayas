import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {Itemsele,CarousItem,RegistrationForm,RecommendationForm,MessageForm} from './Home';




 
export function Updates(){
    let componentParams=useParams()
const[subscriptionStatus,setSubscriptionStatus]=useState('')

 return( 

<div>
<p></p>  
    <div style={{fontSize:"20px",color:"red",paddingLeft:"5px",fonyWeight:"bold"}}>Get Kayas Updates to beautify your room!</div>
    
    <div class="row">
<div class="col-md-6"> <div style={{padding:"10px",color:"grey"}}><div style={{fontSize:""}}>To get instant updates from Kayas concerning cheaper student used (second hand) hostel items like Tvs, woofers, dressing mirrors, tv stands, etc, here are two ways described below: <p></p>
    <ol style={{textAlign:"left"}}>
     
    <li>Instant SMS notification on your phone at a cost of 500shs per SMS. This allows you to get a notification even when offline or do not have data. Use the form at the bottom to subscribe to this service.</li>
    <li>Kayas WhatsApp status updates. Here you will be able to see status updates from the Kayas business line. This is free of charge and all you need to do use the same form below to subscribe and you will be contacted. </li>
    <li><span style={{color:"red"}}>NOTE: </span>SMS notifications will always be instant and first, WhatsApp status updates will only take place <span style={{color:"red"}}>4 or more hours after</span> the SMS notification has taken place.</li>
    </ol>
    
    </div>
    
    </div></div>
<div class="col-md-6">
<div style={{fontSize:"20px",color:"red",paddingLeft:"5px",fonyWeight:"bold"}}>You can as well contact Kayas to sell your items.</div>
<div style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>SUBSCRIBE FOR UPDATES</div>
    <form id='SmsSubscriptionForm' >
    <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Enter your name' ></input>
  <br></br>
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Contact e.g 0703852178' ></input>
     </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:subscriptionStatus}}/>
    <div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
if(Array.from(document.getElementById('SmsSubscriptionForm').name.value).length<2){
    setSubscriptionStatus('<div style="color:red;">Enter correct name.......</div>')
}
else if(Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length<10 || Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length>10){
    setSubscriptionStatus('<div style="color:red;">Enter contact of 10 digits.......</div>')

} 

else{
    setSubscriptionStatus('<div style="color:green;">Subscribing............</div>')

fetch('/subscribeforsmsnotifications',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({name:document.getElementById('SmsSubscriptionForm').name.value,contact:parseInt(document.getElementById('SmsSubscriptionForm').contact.value),recommender:componentParams.recommender})
}).then(resp=>resp.json()).then(resp=>{
    setSubscriptionStatus(resp[0])
  document.getElementById('SmsSubscriptionForm').name.value=""
  document.getElementById('SmsSubscriptionForm').contact.value=""


})




}





    }}><span class="fa fa-envelope"></span> Subscribe</div>
    </form>
   
    
    </div>

    
</div>


    </div>
   
  

<hr></hr>
 
  <Itemsele />
  </div>
);
}







export default Updates