
import React, {useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import {Itemsele} from '../Home';

import trade1 from '../imgs/trade1.png'

import { useCookies } from 'react-cookie';




import { ToastAlert } from '../Functions';


 

export function TradingHome(){
 
 
    
 

return(

  <div style={{color:"grey"}}>
      <p></p>
  <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Get started</div><p></p>
 
 <div class="row">

<div class="col-sm-12 col-md-6">  <img src={trade1} class=" d-block w-100" alt="..."  /></div>
<div class=" col-md-6"> <div style={{color:"grey",padding:"4px"}}>
 Use Kayas pages to earn you credit or payment. Below this, is a page of items. Use it to create your own page that will automatically come with items. To do so, tap the advertise button to produce your own page.<p></p>You are always able to see how many requests/orders have been made through your page. For every successful purchase, your account is credited<p></p>
 Use the "Your account button" to see your accout balance. 

</div> </div>


 </div>
 

  <div style={{padding:"20px"}}></div>    
  <Itemsele />

  </div>
);
}

export function TradingAccount(){
  let componentParams=useParams()
   componentParams.recommender=componentParams.trader
  let [updateTrigger,setUpdateTrigger]=useState(0)
  
  const[traderContact,setTraderContact]=useState('')
  const[traderAccBal,setTraderAccBal]=useState('')
  const[traderCashOutBal,setTraderCashOutBal]=useState('')
  const[traderNotice,setTraderNotice]=useState('')
  
  const [cookies]=useCookies(['user'])
  
  const[allowPeopleToSendFreeSmsValue,setAllowPeopleToSendFreeSmsValue]=useState('')
  const[freeSmsNoticeValue,setFreeSmsNoticeValue]=useState('')
 
  


function UpdateTraderDetails(operationObj){

  fetch('/updateTraderDetails',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(operationObj) 
}).then(res=>res.json()).then(resp=>{

if(resp.success===1){
ToastAlert('toastAlert1','Successful',3000)
setUpdateTrigger(updateTrigger+=1)

}else{
  ToastAlert('toastAlert2','not successful',3000)
}



})


}

  useEffect(()=>{
    if(cookies.user===undefined){
ToastAlert('toastAlert2','Not logged in',3000)
window.location.href='/pages/about'

    }else{
      
      fetch(`/getTradingDetails/${cookies.user.contact}`).then(res=>res.json()).then((resp)=>{
  
        if(resp.length===0){
          
          setTraderAccBal(0)
          
        }else{

          let traderDetailsObj=resp[0]
          
          setTraderAccBal(traderDetailsObj.accBal)
          setTraderCashOutBal(traderDetailsObj.cashOutBal)
          setTraderContact(traderDetailsObj.contact)
        
    
          if(traderDetailsObj.freeSmsObj.allowFreeSmsSending===1){
            setAllowPeopleToSendFreeSmsValue('Yes')
          }else{
            setAllowPeopleToSendFreeSmsValue('No')
          }
     setFreeSmsNoticeValue(traderDetailsObj.freeSmsObj.freeSmsNotice)
  
        }
  
  
    }
        
  
    )  
  
   
    
    fetch(`/collection_controls`).then(res=>res.json()).then(res=>{
       
      setTraderNotice(res[0].traderNotice)
  
    })
    
     
    
  
    }


},[updateTrigger])


  

return(
<div>

<div class="row">

<div class="col-md-6" style={{padding:"18px"}}>  
<div style={{padding:"5px",background:"black"}}>
<div style={{color:"orange",padding:"4px"}}>Account balance: <span style={{fontSize:"20px"}}>{traderAccBal} shs</span></div>
<div style={{color:"white",padding:"4px"}}>Payment from Kayas: <span style={{fontSize:"20px"}}>{traderCashOutBal} shs</span></div>
</div>

<div style={{paddingTop:"10px"}}>{traderNotice}</div><br></br>
<form id="traderNoticeForm">
<div style={{paddingBottom:"8px"}}><div class="formLabel" >Send Kayas a message</div></div>
    <div class="mb-3">
    
    <textarea rows="5" type="text" class="form-control" autoComplete="off" name="msg" placeholder='Enter message to notify Kayas. Include neccessary contacts if there is need.' ></textarea>
  </div>
  
    <div type="text" class="button1" onClick={()=>{
      if((Array.from(document.getElementById('traderNoticeForm').msg.value.trim())).length<1){
        ToastAlert('toastAlert2','Enter a message',3000)
      }else{
        ToastAlert('toastAlert1','Sending......',3000)
        fetch('/submitMessage',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({name:cookies.user.name,contact:traderContact,serviceType:document.getElementById('traderNoticeForm').msg.value,recommender:traderContact})
      }).then(res=>res.json()).then((resp)=>{
        ToastAlert('toastAlert1','Sent',3000)
        document.getElementById('traderNoticeForm').msg.value=""

      })



      }
    }}><span class="fa fa-envelope"></span> send</div>
    </form>
    </div>
    <div style={{padding:"18px"}} class="col-md-6">
     

<form id="traderSettingsForm">
<div style={{paddingBottom:"8px"}}><div class="formLabel" >Settings</div></div>
    <div class="mb-3">
    <div style={{padding:"5px"}}>People can send free SMS through your account: <span style={{color:"red"}}>{allowPeopleToSendFreeSmsValue}</span> | <span  style={{color:"green"}} onClick={()=>{
                   
    if(allowPeopleToSendFreeSmsValue==='Yes'){
      UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'allowFreeSmsSending',updateValue:0}})
    }else{
      UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'allowFreeSmsSending',updateValue:1}})
    }
    
    
             
  
    }}>Change</span>
  
    
    
    </div>
    <div style={{padding:"5px",paddingBottom:"8px"}}>Current Free SMS notice: <span style={{color:"red"}}>{freeSmsNoticeValue}</span> | <span  style={{color:"green"}} onClick={()=>{


UpdateTraderDetails({method:"updateAsKayaser",argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'freeSmsNotice',updateValue:document.getElementById('traderSettingsForm').freeSmsNoticeMessage.value.trim()}})




}}>Change</span>



</div>
<textarea rows="3" type="text" class="form-control" autoComplete="off" name="freeSmsNoticeMessage" placeholder='Type your new notice message here'></textarea>





  </div>
  
    </form>
    




    </div>
</div>











<div>

</div>

</div>




)




}





export default TradingHome



