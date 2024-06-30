
import React, {useEffect,useState} from 'react'
import { useParams} from 'react-router-dom'
import {Itemsele} from '../Home';

import trade1 from '../imgs/trade1.png'
import trader1s from '../imgs/trader1s.jpg'
import trader1s1 from '../imgs/trader1s1.jpg'
import { useCookies } from 'react-cookie';
import trader2s from '../imgs/trader2s.jpg'


import trader4 from '../imgs/trader4.jpg'
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
  const[recommendationsNumb,setRecommendationsNumb]=useState('')
  const[traderContact,setTraderContact]=useState('')
  const[traderAccBal,setTraderAccBal]=useState('')
  const[traderCashOutBal,setTraderCashOutBal]=useState('')
  const[traderNotice,setTraderNotice]=useState('')
  const[traderNotifyStatus,setTraderNotifyStatus]=useState('')
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  
  const[allowPeopleToSendFreeSmsValue,setAllowPeopleToSendFreeSmsValue]=useState('')
  const[freeSmsNoticeValue,setFreeSmsNoticeValue]=useState('')
 
  const [requestsThroughRecommenderNumb,setRequestsThroughRecommenderNumb]=useState('Please wait.....')


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
// document.getElementById('traderSettingsForm').freeSmsNoticeMessage.value='' 
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
  
    fetch(`/recommendations/${componentParams.trader}`).then(res=>res.json()).then(res=>{
       
      setRecommendationsNumb(res.length)
  
    }) 
    fetch(`/requestsThroughRecommender/${componentParams.trader}`).then(res=>res.json()).then(res=>{
       
      setRequestsThroughRecommenderNumb(`${res.length} orders pending`)
  
    })
    
    fetch(`/collection_controls`).then(res=>res.json()).then(res=>{
       
      setTraderNotice(res[0].traderNotice)
  
    })
    
     
    
  
    }


},[])


  

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
  <div style={{fontSize:"12px"}} dangerouslySetInnerHTML={{__html:traderNotifyStatus}}/>
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




export function Trader(props){
  let formActionUrl=`/pages/trading/${props.id}`
  const[opinions,setOpinions]=useState('')
  const[opinionsNumb,setOpinionsNumb]=useState('')
  let data=""
  useEffect(()=>{
     
  
    fetch(`/opinions/${props.id}`).then(res=>res.json()).then(res=>{
      setOpinionsNumb(res.length)
      res.forEach(opinion=>{
     if(props.showCustomerContact==="on"){
      data+='<div>'+opinion.name+" "+opinion.contact+"</div><div>Trading ID: "+opinion.tradingId+" ("+opinion.cookies.user.name+")</div><hr></hr>"
     }
       else{
        data+='<div>'+opinion.name+"</div><div>Trading ID: "+opinion.tradingId+" ("+opinion.cookies.user.name+")</div><hr></hr>"
       }
      
      })
      
      setOpinions(data);
        })
    
    },[])
  
  
  
  
    return(
    
      <div>
      
      
      <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>{props.headline1}</div><p></p>
      <div style={{textAlign:"center",color:"grey"}}><span style={{color:"red",fontSize:"20px"}}>{opinionsNumb}</span> {props.opinionsHeading1}</div>
              
         <div> {props.code}</div>
         <div style={{textAlign:"center",color:"grey"}}><span style={{color:"red",fontSize:"20px"}}>{opinionsNumb}</span> {props.opinionsHeading2}</div>
         <div style={{textAlign:"center",padding:"20px"}}> 
         <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>{props.formHeading}</div>
         
          <form method="post" action={formActionUrl}>
      <div class="mb-3">
      
      <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Your Name e.g. Charles'   required></input>
      <br></br>
      <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter Your WhatsApp Contact'  minLength={10} maxLength={10} required></input>
      <br></br>
      <div style={{fontFamily:"charm",color:"green",textAlign:""}}>Incase you don't know the trading ID and code, contact the student who sent this message to you.</div>
      <input type="text" class="form-control" autoComplete="off" name="tradingId" placeholder='Enter trading ID' maxLength={10} minLength={10} required></input>
 <br></br>
    <input type="text" class="form-control" autoComplete="off" name="tradingCode" placeholder='Enter trading code' maxLength={4} minLength={4} required></input>
    
       
      </div>
          
      <button type="submit" class="btn btn-success">{props.formButtonLabel}</button><p></p>
      <a href="https://kayas-mak.herokuapp.com/pages/brocode" ><label style={{color:"green"}}><span class="hovereffect"> Who is Kayas? Get to know</span></label></a>
      </form>
          
          
      </div>
      
      <div style={{textAlign:"center",color:"red",fontWeight:"bold"}}>{opinionsNumb} {props.opinionsHeading3}</div>
     
  <div style={{textAlign:"center",padding:"20px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:opinions}}/></div>
    
  <div style={{padding:"8px",fontSize:"15px",color:"grey"}}>Get a customized page like this from Kayas Makerere at only 5,000/= Surprise your beloved one with a page for his or her birthday. It really looks good</div>   
      
      </div>
        
       
      );
  
  }



  export function Trader1s(){
    function Code(){

      return (<div style={{color:"grey",paddingTop:"15px",paddingBottom:"30px"}}>Akwaata Empola Hostel being the only hostel where all rooms are only occupied by one student presents a <span style={{color:"green",fontWeight:"bold"}}>Beach Bash Season 2</span> due to take place on 26th Nov, 2022 in Entebbe at a fee of only 25,000/= that caters for transport to and fro, bus vibes, silent disco, drinks, entry and beach soccer but <span style={{color:"green", fontWeight:"bold"}}>do you know what?</span> Scroll below this photo and see the news:
     <p></p> <div class="row"><div class="col-md-4"></div><div class="col-md-4"> <img src={trader1s} class=" d-block w-100" alt="Kayas loves you"  /><div style={{textAlign:"center",color:"green",fontWeight:"bold"}}>Akwaata Empola Beach Bash Season 2</div></div><div class="col-md-4"></div></div>
     <p></p>
      <div>Payment can be done in <span style={{color:"green", fontWeight:"bold"}}>installments</span> but the only better thing to do now is to leave your contact on this page so that your ticket is kept for you. The only number allowed to contact you for any payments through the webpage is: <span style={{color:"green", fontWeight:"bold"}}>0703852178</span> </div>
      <p></p>
      <div>Akwaata residents are very friendly and interractive so, come <span style={{color:"green", fontWeight:"bold"}}>hook up with a friend from Akwaata Empola Hostel</span> and remember Friends are not born, they are made!!</div>
      <p></p>
      <div>Incase you need to leave a booking for your ticket even <span style={{color:"green", fontWeight:"bold"}}>without cash at hand</span>,
       use a  <span style={{color:"green", fontWeight:"bold"}}>Trading ID and a Trading Code</span> in the booking form below and remember; friends are not born, they are made!!</div>
      <div style={{color:"yellow", background:`url(${trader1s1})`, fontSize:"30px", fontFamily:"charm",textAlign:"center",padding:"20px"}}>You may not be in position to make it, but you can not fail to share the oportunity to a friend !!</div>
       
      </div>)
    }
    return(
      <div>
        <Trader id="trader1s" code={Code()} img={trader1s} headline1="The hardest hostel in Makerere Kikoni !!"
        opinionsHeading1="students have requested for tickets but before you move down, read this for details:"
        opinionsHeading2="requests have been posted below this form. Have a look" 
        opinionsHeading3="online bookings below:"
        formHeading="Make a booking" formButtonLabel="Post"/>
      </div>
    )
  }
  

  export function Trader2s(){

    function Code(){

      return (<div style={{color:"grey",paddingTop:"15px",paddingBottom:"30px"}}> <span style={{color:"green",fontWeight:"bold"}}>Payments in installments</span> are allowed so feel free to begin your installment payments:
     <p></p> <div class="row"><div class="col-md-4"></div><div class="col-md-4"> <img src={trader2s} class=" d-block w-100" alt="Kayas loves you"  /><div style={{textAlign:"center",color:"green",fontWeight:"bold"}}></div></div><div class="col-md-4"></div></div>
     <p></p>
      <div>Payment can be done in <span style={{color:"green", fontWeight:"bold"}}>installments</span> but the only better thing to do now is to leave your contact on this page so that your ticket is kept for you. The only number allowed to contact you for any payments through the webpage is: <span style={{color:"green", fontWeight:"bold"}}>0703852178</span> </div>
      <p></p>
     
      <p></p>
      <div>Incase you need to leave a booking for your ticket even <span style={{color:"green", fontWeight:"bold"}}>without cash at hand</span>,
       use a  <span style={{color:"green", fontWeight:"bold"}}>Trading ID and a Trading Code</span> in the booking form below and remember; friends are not born, they are made!!</div>
    <p></p>  <div style={{color:"yellow", background:`url(${trader1s1})`, fontSize:"30px", fontFamily:"charm",textAlign:"center",padding:"20px"}}>You may not be in position to make it, but you can not fail to share the opportunity to a friend !!</div>
       
      </div>)}
    return(
      <div>
       <Trader id="trader2s" code={Code()} headline1="Camp Heist !!"
        opinionsHeading1="people have requested for tickets. Scroll down for details:"
        opinionsHeading2="requests have been posted below this form. Have a look" 
        opinionsHeading3="online bookings below:"
        formHeading="Make a booking" formButtonLabel="Post" showCustomerContact="off"/>
      </div>
    )
  }


  export function Trader3s(props){//Muk cu to trade in new members


function Code(){
  return(<div style={{padding:"4px"}}>
    <div style={{padding:"10px",background:"black",fontSize:"10px",textAlign:"center"}}>
<a style={{color:"white",paddingRight:"9px",}} href="https://kayas-mak.herokuapp.com/pages/cu/cuhome"><span class="hovereffect">SEE THE COMMITTEE</span></a> 
</div><p></p>
    <div style={{color:"grey"}}>Campus sometimes may have challenges that leave you living with no hopes.</div>
    <p></p><div style={{color:"black"}}>Come and listen to fellow students as they speak or come and share to other students your opinion or experience  about how you have managed to go through any campus hardships.</div>
    <p></p><div style={{color:"green"}}>Leave your contact through the form below using 0703852178 as the trading ID and 1234 as the trading code and we will contact you to find out whether you wish to share your experience to other students this Sunday <div style={{fontSize:"30px",textAlign:"center",fontWeight:"bold"}}>OR</div> whether you wish to be present on Sunday at the <span style={{fontWeight:"bold"}}>Upper Psychology room in Complex hall starting at 5pm.</span><br></br>Your notice will allow for early planning.</div>
    </div>
   )
}
    return(
      <div>
       
        <Trader id="trader3s"  code={Code()}opinionsHeading1="students have sent their notices to attend. But before you scroll down, this is the issue:"
        opinionsHeading2="students have so far posted their notices to be reminded tumorrow. Scroll below this form to see and also be part by posting yours too:"
        opinionsHeading3="members have shown their intrests online to be present" headline1="On Sunday at 5pm"  formHeading="Submit your whatsapp contact" formButtonLabel="Submit" caption=""    showCustomerContact="on"/>
      
      </div>
    )
  }


  export function Trader4s(){ //Christian union
    function Code(){
      return(
        <div>
    <div style={{padding:"5px"}}>Feel free to join the attendance. We will also send you  a reminder of the details of the event. Share to a friend as well. Let's unite</div>
    
        </div>
      )
    }
    
        return(
          <div>
           
            <Trader id="trader4s" img={trader4} topMsg="We welcome you. Come share your life stories, testimonies, pieces of advice, etc at the Upper Psychology room at Complex Hall" 
            opinionsHeading="members below" headline1="Mak Christian Union" headline2="Complex Hall, Upper Psychology room at 5pm" formHeading="Join attendance" formButtonLabel="Submit" caption="" extraCode={Code()} showCustomerContact="on"/>
          
          </div>
        )
      }

export default TradingHome



