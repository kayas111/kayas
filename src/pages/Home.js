import React, {useEffect,useState} from 'react'
import { ToastAlert } from './Functions';
import { useParams } from 'react-router-dom';
import it1 from './imgs/it1.jpg';
import it2 from './imgs/it2.jpg';

import it3 from './imgs/it3.jpg';
import it4 from './imgs/it4.jpg';
import it5 from './imgs/it5.jpg';
import it6 from './imgs/it6.jpg';
import it7 from './imgs/it7.jpg';
import it8 from './imgs/it8.jpg';
import it9 from './imgs/it9.jpg';
import it10 from './imgs/it10.jpg';
import it11 from './imgs/it11.jpg';
import it12 from './imgs/it12.jpg';
import it13 from './imgs/it13.jpg';


import it14 from './imgs/it14.jpg';
import it15 from './imgs/it15.jpg';
import it16 from './imgs/it16.jpg';
import it17 from './imgs/it17.jpg';

import it18 from './imgs/it18.jpg';
import it19 from './imgs/it19.jpg';
import it20 from './imgs/it20.jpg';

import it21 from './imgs/it21.jpg';

import lights from './imgs/lights.jpg';

import ad from './imgs/ad.jpg';
import pant1 from './imgs/pant1.jpg';
import ip1 from './imgs/ip1.jpg';

import alert from './imgs/alert.jpg';
import isaac1 from './imgs/isaac1.jpg';
import isaac2 from './imgs/isaac2.jpg';

import isaac3 from './imgs/isaac3.jpg';
import kahu from './imgs/kahu.jpg';
import rogers from './imgs/rogers.jpg';
import wobu from './imgs/wobu.jpg';
import msg1 from './imgs/msg1.jpg';





import craft7 from './imgs/craft7.jpg';

import wp5 from './imgs/wp5.jpg';




import s1 from './imgs/s1.jpg';
import s2 from './imgs/s2.jpg';
import s3 from './imgs/s3.jpg';
import s4 from './imgs/s4.jpg';


import s6 from './imgs/s6.jpg';




import parco from './imgs/parco.jpg';
import fan from './imgs/fan.jpg';



import flatiron from './imgs/flatiron.jpg';


import woofer from './imgs/woofer.jpg';

import cake2 from './imgs/cake2.jpg';



import ClientBusinesses from './ClientBusinesses'
import About from './About';





export function Home(){
  let componentParams=useParams(),CreateOwnPageUrl='/advertise/items'
  


return(
    <div><p></p>
    <BusinessClientAdComponent businessName="Freshers' trusted online shopping website-Kayas" id='items' />
 
    <Itemsele componentParams={componentParams} />
    
  
    </div>
 
);

} 


export function CarousItem(props){
     
    return(
        <div class="carousel-item ">
        <img src={props.img} class=" d-block w-100" alt="..."  height={props.hght} /><div class="carousel-caption   d-md-block">
        <br></br><br></br><br></br><div class="carmsg"><div class="carmsgcolor"><br></br><br></br>{props.msg}</div></div>
        
      
          </div>
            </div>
  
    ); 
  }
  export function Carousele(){
    let caroushght="400px";
   
    return (
    
         <div id="carouselExampleControls" class="carousel slide carousel-fade col-md-12" data-bs-ride="carousel">
        <div class="nega"><marquee direction="left" behavior="scroll">Kayas Makerere University wishes to present to you, as a student of Makerere University, a proposal concerning 1,000/= shillings interest loans. Please read through the proposal presented to you by part of our team by clicking the loans button above and post your view and comment about the proposal. Thank you.</marquee></div>
  
        <div class="carousel-inner">
         <div className="row">  
         <div className="col-1"></div>
         <div class="col-10">
        <div class="carousel-item active">
  <div class="carousel-caption caption-four  d-md-block">
  <br></br><br></br><br></br><br></br><br></br><div class="carmsgcolor"><span >Scroll down for contact details</span></div>
   
   </div> 
     </div>
    
    
     
     <CarousItem hght={caroushght} img={ad} msg="" />
          <CarousItem hght={caroushght} img={wp5} msg="What is KAYAS Makerere University? Scroll down for details." />
         <CarousItem hght={caroushght} img={msg1} msg="" />
     <CarousItem hght={caroushght} img={wp5} msg="Earn with KAYAS Makerere University. It's free WhatsApp Isaac on 0755643774" />
          <CarousItem hght={caroushght} img={isaac3} msg="" />
         <CarousItem hght={caroushght} img={wp5} msg="What is Kayas all about? Did you know? ....." />
     <CarousItem hght={caroushght} img={wp5} msg="We buy items from you as a student" />
     <CarousItem hght={caroushght} img={wp5} msg="We provide  items to students at affordable prices" />
     <CarousItem hght={caroushght} img={wp5} msg="#Keep it Kayas" />
      <CarousItem hght={caroushght} img={kahu} msg="" />
     
     <CarousItem hght={caroushght} img={wp5} msg="Take care of con men and con women" />
     <CarousItem hght={caroushght} img={wp5} msg="Read brief details about con men towards the bottom of the page" />
       
     <CarousItem hght={caroushght} img={s1} msg="students' pride" />
     
    
     <CarousItem hght={caroushght} img={s2} msg="Makerere we got you covered" />
  

  <CarousItem hght={caroushght} img={s6} msg="" />
 
  <CarousItem hght={caroushght} img={s3} msg="" />
  <CarousItem hght={caroushght} img={s4} msg="" />
  
    
     </div>
     <ClientBusinesses/>
     </div>
         
     
    
     
     
    
     
     
     </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    
  <p></p>
    </div>

    
    );
  }

 
export function Items(props){
  let componentParams=useParams();
  
  let name,contact;
  /* original contact button
  
   <a  href={props.url}> 
       <div style={{paddingRight:"5px"}}>
        <div style={{background:"green",borderRadius:"8px",color:"white",fontSize:"10px"}} class="btn btn-sm"><span class="hovereffect"><span class="fa fa-whatsapp"></span> {props.contact}</span></div>
        </div>
       </a>
  */
    return (
        <div class="item">
            <div class ="photo">
              
                <img  src={props.img} alt="kayas"  class="d-block w-100" />
           
               </div>
            <div class="infor"> <div class="item-id">{props.id}</div>
   <div class="item-desc" >{props.des}</div>
   
   <div class="item-price">Updating price...</div>
     
       <div onClick={()=>{
        name=window.prompt("Your name")
if(name===null){
  ;
}else{
contact=window.prompt("Your contact")
if(contact===null){;}else{
fetch('/submitMessage',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({name:name,contact:parseInt(contact),serviceType:`${props.id}, ${props.des} of shs ${props.price} ordered by ${name} (${contact}). Recommended by 0${parseInt(componentParams.recommender)}`,recommender:parseInt(componentParams.recommender)})
}).then(resp=>resp.json()).then(resp=>{
window.alert("Message sent.");
})
}
}




       
       }} style={{borderRadius:"5px",background:"green",color:"white",textAlign:"center",fontSize:"16px"}}><div class="hovereffect">Order | <span style={{fontSize:"10px"}}>Pay on delivery</span></div></div>
       
      

   </div>
   
        </div>
    );
  }
 export async function GetRequestsThroughRecommender(recommender){
          
  return await fetch(`/requestsThroughRecommender/${recommender}`).then(res=>res.json()).then(res=>{
  
    return res.length

    })
  }
  export function ContactCapture(props){
    useEffect(()=>{
      if(props.recommender===undefined){
        window.alert('Recommder prop absent in ContactCapture Comp')
      }else{
        ;
      }
    },[])
    return(<div>
      <div onClick={()=>{
         let contact=window.prompt('Enter WhatsApp contact',""),recommender=props.recommender

         if(contact!=null){
if(Array.from(contact).length<10 || Array.from(contact).length>10){
  window.alert('Enter 10 digits contact')
}else{
if(recommender===undefined){

recommender=703852178
}else{
;
}


let requestBody={name:'Client',contact:parseInt(contact),recommender:parseInt(recommender),serviceType:props.reason}



  fetch('/submitMessageFromContactCapture',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(requestBody) 
}).then(res=>res.json()).then((resp)=>{
   
   window.alert("Your request has been received")
}
    

) 

}

         }else{
;
         }



      }} class={props.class} style={props.style}>{props.buttonLabel}</div>
    </div>)
  }
export  function AdComponent(props){
  let componentParams=props.componentParams
const [advertiserName,setAdvertiserName]=useState('Please wait.....')
    const [initiateAdStatus,setInitiateAdStatus]=useState('')
 
    const [requestsThroughRecommenderNumb,setRequestsThroughRecommenderNumb]=useState('Please wait.....')
    const [websiteVisits,setWebsiteVisits]=useState('calculating.....')
   

    const [advertiserContact,setAdvertiserContact]=useState('')

   
        useEffect(()=>{
          fetch(`/getTradingDetails/${componentParams.recommender}`).then(res=>res.json()).then(resp=>{
         
      if(resp.length===0){
       setWebsiteVisits(`No details for advertiser`)

      }else{
setWebsiteVisits(resp[0].pagesVisitsNo)
      }
          
             
                 })

         
if(componentParams.recommender===undefined || componentParams.recommender==="undefined"){

fetch('/collection_controls').then(res=>res.json()).then(res=>{
    setAdvertiserName(`<div><div style='font-size:15px;'>Advertised by: Kayas</div></div>`)
    setAdvertiserContact('0703852178')
    GetRequestsThroughRecommender('0703852178').then(resp=>{
    
      setRequestsThroughRecommenderNumb(resp)
    
     })
     

  })

}else{


  fetch(`/admin_getDetails/${componentParams.recommender}`).then(res=>res.json()).then(res=>{
  
  
   if(res[1]===undefined){
  
    setAdvertiserName(`<div><div style='font-size:15px;'>Advertised by: Kayas</div></div>`)
    setAdvertiserContact('0703852178')
   
    GetRequestsThroughRecommender('0703852178').then(resp=>{
    
      setRequestsThroughRecommenderNumb(resp)
    
     })
     

   }else{
 
    setAdvertiserName(`<div><div >Advertised by: ${res[1].name}</div></div>`)
    setAdvertiserContact(res[1].contact)
   
 
  GetRequestsThroughRecommender(res[1].contact).then(resp=>{
    
   setRequestsThroughRecommenderNumb(resp)
 
  })
  
   }
   })
}

fetch('/registerPageVisitOfTrader',{
  method:"post",
  headers:{'Content-type':'application/json'},
  body:JSON.stringify({
recommender:parseInt(componentParams.recommender)

  }) 
}).then(res=>res.json()).then(res=>{})


 },[])


  return(<div style={{padding:"18px"}}>
    <div class="row AdComponentDiv">
        <div class="col-md-6">
        <div style={{fontSize:"12px",color:"orange",paddingBottom:"10px"}} dangerouslySetInnerHTML={{__html:advertiserName}}/>
        <div style={{color:"black",fontSize:"22px"}}>{props.businessName}</div>
             
        </div>
        
        <div style={{paddingBottom:"8px",color:"grey"}}> <span style={{fontSize:"12px"}}>Views: {websiteVisits}</span> | <span style={{fontSize:"12px"}} dangerouslySetInnerHTML={{__html:`Pending requests: ${requestsThroughRecommenderNumb}`}} />
        <div style={{borderBottom:"1px solid grey"}}></div>
        </div>
       
    
        
        <div style={{display:"flex",flexWrap:"wrap",color:"green"}}>
          
          <div style={{padding:"5px",textDecoration:"underline"}}><div style={{paddingTop:"10px"}}><div style={{fontSize:"13px"}} class="hovereffect hoverEffectUnderline" onClick={()=>{
          window.location.href=`/pages/message/throughrecommender/${advertiserContact}`
        }}><span class='fa fa-envelope'></span> Send message</div></div></div>

          <div style={{padding:"5px",textDecoration:"underline"}}><div style={{paddingTop:"10px"}}><div style={{fontSize:"13px"}} class="hovereffect hoverEffectUnderline" onClick={()=>{
          window.location.href=`${props.AdvertiseUrl}/${advertiserContact}`
        }}> Share page</div></div></div>
                        
        <div style={{padding:"5px",textDecoration:"underline"}} >  <div style={{borderRadius:"5px",fontSize:"13px",paddingTop:"10px"}} 
onClick={()=>{
    
      fetch('/verifyUser',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
contact:window.prompt('Enter your contact'),
pin:'11111'
        }) 
    }).then(res=>res.json()).then((resp)=>{
      
        if(resp.registered===false){
          window.alert("You are not registered with Kayas, please register to proceed!")
       

        } else if(resp.registered===true){
          
          window.location.href=`${props.CreateOwnPageUrl}/${resp.details.contact}`

        } 
         else{
          window.alert("An error has occured. Please try again")
          
           }
       
    }
        

    )  

  

  }} class="hovereffect"> Create your page </div></div>

</div>
       </div>
  </div>)
 }





export function SendFreeSms(props){
let componentParams=useParams(),maxCharLength=130,freeSmsUnitCost=50
let [newMaxCharLength,SetNewMaxCharLength]=useState(maxCharLength)
let [notice,setNotice]=useState('')
let [updateTrigger,setUpdateTrigger]=useState(0)
let [noOfSmsAvailable,setNoOfSmsAvailable]=useState(0)
let [noOfFreeSmsUsers,setNoOfFreeSmsUsers]=useState('')
  
  let [sponsorContact,setSponsorContact]=useState('')
  let [allowPeopleToSendFreeSmsValue,setAllowPeopleToSendFreeSmsValue]=useState('')
  let [charLength,setCharLength]=useState('0')
 
  let [sendFreeSmsStatus,setSendFreeSmsStatus]=useState('')





useEffect(()=>{
  
if(parseInt(componentParams.sponsor)===NaN){
  setNotice("<div style='color:red;font-size:25px'>This account does not exist</div>")

}else{
  fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:parseInt(componentParams.sponsor),
pin:'11111'
    }) 
}).then(res=>res.json()).then((resp)=>{
  
    if(resp.registered===false){
      setNotice("<div style='color:red;font-size:25px'>This account does not exist</div>")
   
    } else if(resp.registered===true){
      fetch(`/getTradingDetails/${parseInt(componentParams.sponsor)}`).then(res=>res.json()).then(resp=>{

let traderDetailsObj=resp[0]
//console.log(traderDetailsObj)
setNotice(traderDetailsObj.freeSmsObj.freeSmsNotice)
setNoOfSmsAvailable(traderDetailsObj.accBal/freeSmsUnitCost)
setSponsorContact(traderDetailsObj.contact)
 setNoOfFreeSmsUsers(traderDetailsObj.freeSmsObj.freeSmsUsers.length)
if(traderDetailsObj.freeSmsObj.allowFreeSmsSending===1){
  setAllowPeopleToSendFreeSmsValue('Yes')
}else{
  setAllowPeopleToSendFreeSmsValue('No')
}




      })
      
    } 
     else{
     ;
      
       }
   
}
    

)  


}

},[])

useEffect(()=>{
  
  fetch(`/getTradingDetails/${parseInt(componentParams.sponsor)}`).then(res=>res.json()).then(resp=>{

    let traderDetailsObj=resp[0]
    
    
    setNoOfSmsAvailable(traderDetailsObj.accBal/freeSmsUnitCost)
    
    
          })
          
},[updateTrigger])






  return (<div style={{padding:"5px"}}>
    <div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">


<div style={{padding:"10px"}}>  
 <form id="sendFreeSmsForm" >
 <div style={{paddingBottom:"8px"}}><div class="formLabel" >Send Free SMS
 <div style={{paddingTop:"0px",fontSize:"10px"}}> <span style={{fontSize:"15px"}}>{noOfFreeSmsUsers}</span> people have sent SMS through this, you too can send. </div>
 
 </div></div>
    
 <div style={{color:"red",padding:"5px",fontSize:"17px"}} dangerouslySetInnerHTML={{__html:notice}}></div>
 
    
  
    <div style={{padding:"5px",paddingTop:"15px"}}>No. of SMS left: <span style={{color:"red"}}>{noOfSmsAvailable}</span></div>
   
   
     
    
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="receipient" placeholder='To: Enter contact to send to (10 digits)' ></input> <br></br>
<input type="text" class="form-control" autoComplete="off" name="sender" placeholder='From: Enter your contact (10 digits)' ></input><br></br>
<input type="text" class="form-control" autoComplete="off" name="name" placeholder='Enter your first name e.g Charles' onChange={
()=>{
  SetNewMaxCharLength(maxCharLength-Array.from(document.getElementById("sendFreeSmsForm").name.value.trim()).length)
}
} ></input>
<br></br>
<div style={{textAlign:"right"}} class="col-12">
    <div  class="btn btn-warning btn-sm"
      onClick={()=>{document.getElementById("sendFreeSmsForm").smsMessage.value=''}}>Clear message</div>
      
    </div>
<div style={{padding:"3px"}}><span style={{color:"red"}}>{charLength}</span> out of {newMaxCharLength} characters maximum</div>



<textArea rows="5" type="text" class="form-control" autoComplete="off" name="smsMessage" placeholder='Type SMS here. Your name and contact will automatically be added to the message' onChange={()=>{
  setCharLength(Array.from(document.getElementById("sendFreeSmsForm").smsMessage.value.trim()).length)
  
  
}} ></textArea>


 
     </div>
     <div style={{fontSize:"12px"}}>

   </div>
    <div style={{padding:"10px",fontSize:"15px",textAlign:"center"}} dangerouslySetInnerHTML={{__html:sendFreeSmsStatus}}/>
   
    <div class="row">
     
<div class="row col-12">
<div class="col-6">
<div style={{textAlign:"center"}}>Allowed to send SMS?</div>
<div style={{color:"red",textAlign:"center",fontSize:"18px"}} dangerouslySetInnerHTML={{__html:allowPeopleToSendFreeSmsValue}}></div>
</div>
  <div class="col-6"> <div style={{borderRadius:"18px"}} onClick={()=>{

if(Array.from(document.getElementById('sendFreeSmsForm').receipient.value.trim()).length<10||Array.from(document.getElementById('sendFreeSmsForm').receipient.value.trim()).length>10){
  setSendFreeSmsStatus("<div style='color:red;'>Enter 10 digits for receipient's contact ......</div>")
  

} else if(Array.from(document.getElementById('sendFreeSmsForm').sender.value.trim()).length<10||Array.from(document.getElementById('sendFreeSmsForm').sender.value.trim()).length>10){
  setSendFreeSmsStatus("<div style='color:red;'>Enter 10 digits for sender's contact......</div>")
  

}
else if(Array.from(document.getElementById('sendFreeSmsForm').name.value.trim()).length<2){
  setSendFreeSmsStatus("<div style='color:red;'>Please enter your name......</div>")
  

}

else if(Array.from(document.getElementById('sendFreeSmsForm').smsMessage.value.trim()).length<1){
  setSendFreeSmsStatus("<div style='color:red;'>Enter a message..........</div>")
  

}
else if(Array.from(document.getElementById('sendFreeSmsForm').smsMessage.value.trim()).length>newMaxCharLength){


  setSendFreeSmsStatus(`<div style='color:red;'>Your message is longer than ${newMaxCharLength} characters, please reduce ......</div>`)
  

}

else if(noOfSmsAvailable<0){

  setSendFreeSmsStatus(`<div style='color:red;'>No SMS left. Contact 0${parseInt(componentParams.sponsor)} to top up more SMS</div>`)
  

}
else if(allowPeopleToSendFreeSmsValue==='No'){

  setSendFreeSmsStatus(`<div style='color:red;'>Not allowed to send free SMS. Contact 0${parseInt(componentParams.sponsor)} to permit you</div>`)
  

}

else {
  setSendFreeSmsStatus(`<div style='color:green;'>Sending........</div>`)
 
  fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:sponsorContact,
pin:'11111',
    }) 
}).then(res=>res.json()).then((resp)=>{
         
    if(resp.registered===false){
     
      setSendFreeSmsStatus(`<div style='color:red;'>This account does not exist.</div>`)
    }
     else{
      let payLoad={method:"sendFreeSmsMessage",argsObj:{sponsor:sponsorContact,number:'256'+parseInt(document.getElementById('sendFreeSmsForm').receipient.value.trim()),senderName:document.getElementById('sendFreeSmsForm').name.value.trim(),senderContact:parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim()),senderid:'0'+parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim()),message:document.getElementById('sendFreeSmsForm').smsMessage.value.trim()+` (${document.getElementById('sendFreeSmsForm').name.value.trim()} 0${parseInt(document.getElementById('sendFreeSmsForm').sender.value.trim())}) #SMS by Kayas`}}
   
    
      fetch('/sendSmsMessage',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(payLoad) 
    }).then(res=>res.json()).then((resp)=>{

if(resp.success===1){
  setSendFreeSmsStatus(`<div style='color:green;'>Message sent <span class='fa fa-check'></span> to ${document.getElementById('sendFreeSmsForm').receipient.value} </div>`)
setUpdateTrigger(updateTrigger+=1)
document.getElementById('sendFreeSmsForm').receipient.value=''


}else{
  setSendFreeSmsStatus(`<div style='color:red;'>Error must have occured!</div>`)
}

    })

      }
   
}
    

)



}



    }}type="text" class="btn btn-sm btn-success hovereffect">Send SMS</div></div>
   

</div>

</div>


    </form>
    
    </div>
    







</div>
<div class="col-md-3"></div>

    </div>


<div style={{paddingTop:"40px"}}>
  
<About/>
</div>





  </div>)
}


 export function BusinessClientAdComponent(props){

  let componentParams=useParams(),CreateOwnPageUrl=`/advertise/${props.id}`,AdvertiseUrl=`whatsapp://send?text=*🔥${props.businessName}.*%0A%0AVisit the website below:%0Ahttps://kayas-mak.herokuapp.com/advertise/${props.id}`
 
 
     return(<div>
 <AdComponent businessName={props.businessName} CreateOwnPageUrl={CreateOwnPageUrl} AdvertiseUrl={AdvertiseUrl}   componentParams={componentParams} />
 
     </div>)
 }
 export async function SetKayasAndKayasUrlDetails(recommender){
 

  return  await fetch(`/admin_getDetails/${recommender}`).then(res=>res.json()).then((res)=>{
        if(res[1]===undefined){
         return {kayasurl:`/pages/message/throughrecommender/0703852178`}
         }else{
          return {kayasurl:`/pages/message/throughrecommender/${res[1].contact}`}
     
         
          }
          })
  
     
   


  
      
 }
export function NotFound(){
  return(<div>
<div style={{fontSize:"20px",paddingTop:"10px",paddingLeft:"30px",color:"red",textAlign:"center"}}>How can I help you?</div>
<div class='row'>
  <div class='col-md-2'></div>
  <div class='col-md-8'>
<MessageForm/>

  </div>
  <div class='col-md-2'></div>
</div>
<ClientBusinesses/>
  </div>)
}

  export function Itemsele(props){
    let componentParams=useParams()
  
  let recommender=componentParams.recommender
  
   
    const [kayasurl,setKayasurl]=useState('')
    const [kayas,setKayas]=useState('Please wait....')
    const [fresherShoppingClickValue,setfresherShoppingClickValue]=useState('Tap here to get started')

useEffect(async ()=>{
 let result=await SetKayasAndKayasUrlDetails(recommender)
 
 setKayasurl(result.kayasurl)
 setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
return resp[0].kayas 
  }))


},[])
   //  <GeneralComp />
   //<GeneralComp1 />
let v= "col-6 col-md-2 bod";
//items
    return (
        <div>
      <BusinessClientAdComponent businessName="Kayas Online shop" id='items' />
      
        <div class="itemse">
       
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
            <div class={v}><Items id="Dust bin" des="On sale" price="5,000/=" img={it14} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Matress" des="With a pillow and blanket @210,000/=" price="140,000/=" img={it9} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Adjustable Reading table" des="Brand new" price="90,000/=" img={it7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Reading Seat" des="Brand new" price="15,000/=" img={it10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Laptop bag" des="Brand new" price="50,000/=" img={it8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Basins" des="Brand new"  price="5,000/=" img={it20} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Stabex Gas cylinder, 6kgs" des="Brand new"  price="160,000/=" img={it11} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Percolator" des="Brand new" price="35,000/=" img={parco} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Plate rack" des="Brand new"  price="25,000/=" img={it12} url={kayasurl} contact={kayas} /></div>
          <div class={v}><Items id="Fan" des="Brand new"  price="70,000/=" img={fan} url={kayasurl} contact={kayas} /></div>
          <div class={v}><Items id="Plastic storage can" des="Store a variety of items like food, etc" price="70,000/=" img={it13} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Suit case" des="Brand new" price="150,000/=" img={it2} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Go Tv full set" des="Brand new"  price="80,000/=" img={it17} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Dust pan" des="On sale" price="7,000/=" img={it5} url={kayasurl} contact={kayas} /></div>
             
           
            
            
            <div class={v}><Items id="Woolen carpets" des="Pleasant colors" price="90,000/150,000 and above" img={ip1} url={kayasurl} contact="See more" /></div>
                       
             <div class={v}><Items id="Sweeping broom" des="On sale" price="6,000/=" img={it1} url={kayasurl} contact={kayas} /></div>
           
     
        
            <div class={v}><Items id="Ladies & Gents crafts" des="On sale" price="35,000/=" img={craft7} url="/pages/part4/part4home" contact="See more" /></div>
            
            <div class={v}><Items id="Juice blender" des="Brand new"  price="100,000/=" img={it6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Aillipu woofers" des="brand new"  price="150,000/=" img={woofer} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Hot coil" des="Brand new" price="35,000/=" img={it4} url={kayasurl} contact={kayas}/></div>
            
            <div class={v}><Items id="Hot plate" des="Brand new" price="40,000/=" img={it3} url={kayasurl} contact={kayas}/></div>
            <div class={v}><Items id="Double Hot plate" des="Brand new" price="80,000/=" img={it18} url={kayasurl} contact={kayas}/></div>
            
            
            <div class={v}><Items id="Laundry basket" des="On sale" price="20,000/=" img={it15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Saachi flat iron" des="Brand new" price="40,000/=" img={flatiron} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Extension cable 4 ports" des="Brand new" price="20,000/=" img={it16} url={kayasurl} contact={kayas} /></div>
            
          
            
            
            <div class={v}><Items id="Cakes" des="Birth days, etc"  price="Negotiable" img={cake2} url={kayasurl} contact={kayas} /></div>
            
            
            </div>
           
        </div>
        <ClientBusinesses/>
      
        <div style={{backgroundColor:"black",paddingTop:"30px",paddingBottom:"40px"}}>
<div class="row">
<div class="col-12 col-sm-12 col-md-6">
<div style={{fontSize:"30px",color:"white"}}>Do you have any Hostel item to sell?</div>
<div style={{color:"white"}}>Please let us know about any item ranging from woofers, television screens, woofers, flat irons, carpets, gas cylinders and many more.</div>
<p></p></div>
<div class="col-12 col-sm-12 col-md-6">
<div style={{fontSize:"30px",color:"white"}}>Smart Bakery Limitted</div>
<div style={{color:"white"}}>An upcoming and leading provider of delicious cakes and doughnuts for birthday parties and other parties as well within student settings and Kampala at large. We take all sorts of orders and make deliveries as well.<p></p> We do extend our services to University students, treasure and thank them for being the leading customers of our products. We also welcome all those who need cakes and doughnuts at their service to feel free and make requests/orders. Thank you.<p></p>  </div>
</div>
<div class="col-12 col-sm-12 col-md-6">
<div style={{fontSize:"30px",color:"white"}}>To our dear freshers take care...</div>
<div style={{color:"white"}}>Kayas welcomes all freshers to Makerere University, a very proud environment to be in.  Kayas is a student service that aids students acquire cheaper hostel items being sold by fellow students at very much affordable prices.<p></p> We also wish to inform you as a fresher not to trust any stranger around the University setting. Very many con men and con women will be taking advantage of your ignorance about campus life and will encourage you to leave your tuition with them such that they help you pay on your behalf.<br></br> Con men will always come with information claiming to know you and and  will convince you that they are in the same class groups with you. Please take kin attention about such people around you. Feel free to make inquiries through Kayas, a trusted student service. Contact us on our Whats App number 0703852178.<br></br></div>
</div>


</div>
               
            </div>
        </div>
    );
  }

  export function ContactLabel (props){
    return(<span>
      {props.labelValue}
    </span>)
  }
   export function Profile(props){
      let v="col-12 col-sm-12 col-md-12",link="#"
      return (
    
    <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}>
      <div className="row"> <div class="col-3 col-sm-4 col-md-5"></div> 
      <div class="col-6 col-sm-4  col-md-2"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img}
       alt="kayas"/></div> <div class="col-3 col-sm-4 col-md-5"></div><div style={{textAlign:"center",paddingTop:"30px"}}>
        <div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}
        </div><div style={{textAlign:"center",fontSize:"15px", color:"red"}}>{props.post}</div>
        <div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"green"}}>{props.campus}</div>  
        <div> <a href={props.contactLabelHref}><button type="button" class="btn btn-sm btn1 btn-success">{props.contactLabel}</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",borderBottom:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:""}}>{props.msg}</div>    </div></div>
    
      );
    }
 
export function RegistrationForm(props){
  /*<form method="post" id="registrationForm" action={props.actionUrl}>
   <div class="mb-3">
   <input type="text" class="form-control" autoComplete="off" name="name" value="isaac test" placeholder='Your Name e.g. Charles Kahuma' required></input>
 <br></br>
 <input type="text" class="form-control" autoComplete="off" name="stdNo" value="1900717809" placeholder='Student Number e.g. 1900717809' maxLength={10} minLength={10} required></input><br></br>
   <input type="text" class="form-control" autoComplete="off" name="contact" value="0782675558"placeholder='WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
 <br></br> 
 <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Enter an Airtel number where a registration fee of {props.registrationFee} will be charged.</div>
 <textArea rows="2" type="text" class="form-control" autoComplete="off" name="payerNo" placeholder='Number to make payment. Must be an Airtel number' maxLength={10} minLength={10} required></textArea>
 <br></br>
 <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>You will receive some quick sale updates through your E-mail</div>
 <input type="text" class="form-control" autoComplete="off" name="email"value="kayas.makerere@gmail.com"placeholder='Your E-mail address' required></input>

 <br></br>
   <input type="text" class="form-control" autoComplete="off" name="pin" value="12345" placeholder='Create your PIN e.g. 12345 (5 digits)' maxLength={5} minLength={5} required></input>

 
 
   </div>
   <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Make sure you have saved the Kayas Business Number 0703852178 before registering.</div>
   <div style={{color:"red",fontSize:"20px"}}>{status}<p></p></div>
   <button style={{borderRadius:"18px"}} type="submit" onClick={
     ()=>{
       document.getElementById("registrationForm").addEventListener("submit",(submit)=>{
        
          
           setStatus("Please wait as we try to register you .....")
        
       
       })
     }
   } class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Register</button><p></p>
  
   </form>
   
   */

const[status,setStatus]=useState('')


  return (<div><div style={{padding:"30px"}}>  
  <div style={{color:"green", fontSize:"15px",fontWeight:"bold"}}>Registration form </div>
  
   <div>You are unable to register apparently, please contact Kayas on 0703852178 for any inquiries</div>
   </div>
  
   </div>)
}
export function RegistrationPage(){
  //<RegistrationForm registrationFee="35,000/=" actionUrl="/collection_kayasers_register"/>
  return(<div>
    <FreeRegistrationForm/>
  </div>)
}
export function AdminRegistrationForm(props){
  

  const[status,setStatus]=useState('')
  
  
    return (<div><div style={{padding:"30px"}}>  
    <div style={{color:"green", fontSize:"15px",fontWeight:"bold"}}>ADMIN REGISTRATION FORM </div>
    <form method="post" id="registrationForm" action={props.actionUrl}>
     <div class="mb-3">
     <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Your Name e.g. Charles Kahuma' required></input>
   <br></br>
   <input type="text" class="form-control" autoComplete="off" name="stdNo" placeholder='Student Number e.g. 1900717809' maxLength={10} minLength={10} required></input><br></br>
     <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
   <br></br> 
   
   <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>You will receive some quick sale updates through your E-mail</div>
   <input type="text" class="form-control" autoComplete="off" name="email"  placeholder='Your E-mail address' required></input>
  
   <br></br>
     <input type="text" class="form-control" autoComplete="off" name="pin"  placeholder='Create your PIN e.g. 12345 (5 digits)' maxLength={5} minLength={5} required></input>
     <br></br>
    
   <input type="text" class="form-control" autoComplete="off" name="adminRegCode"  placeholder='Enter Admin Registration Code'  required></input>
  
   
   
     </div>
     <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Make sure you have saved the Kayas Business Number 0703852178 before registering.</div>
     <div style={{color:"red",fontSize:"20px"}}>{status}<p></p></div>
     <button style={{borderRadius:"18px"}} type="submit" onClick={
       ()=>{
         document.getElementById("registrationForm").addEventListener("submit",(submit)=>{
          
            
             setStatus("Please wait as we try to register you .....")
          
         
         })
       }
     } class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Register</button><p></p>
    
     </form></div>
    
     </div>)
  }
  
  export function FreeRegistrationForm(props){
  

    const[status,setStatus]=useState('')
    
    
      return (<div>
        <div class='row'>
          <div class='col-md-3'></div>
          <div class='col-md-6'>

          <div style={{padding:"10px"}}>  
      <form method="post" id="freeRegistrationForm">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Register</div></div>

       <div class="mb-3">
       <div class="formInputLabel">Your name</div>
       <input type="text" class="form-control" autoComplete="off" name="name"  ></input>
     <br></br>
     <div class="formInputLabel">Institution/brand/organization</div>
     <textArea rows="2" type="text" class="form-control" autoComplete="off" name="institution"  ></textArea>
     <br></br><div class="formInputLabel">WhatsApp contact</div>
     <input type="text" class="form-control" autoComplete="off" name="contact" ></input>
     <br></br> 
     
     <div class="formInputLabel">Email</div>
     <input type="text" class="form-control" autoComplete="off" name="email" ></input>
    
     <br></br>
     <div class="formInputLabel">PIN e.g. 12345</div>
       <input type="text" class="form-control" autoComplete="off" name="pin" ></input>
    
       </div>
        <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:status}}/>
       <div onClick={
        ()=>{
    

          if(Array.from(document.getElementById("freeRegistrationForm").name.value).length<2){
 
 ToastAlert('toastAlert2','Enter a correct name',3000)
 
 }else if(Array.from(document.getElementById("freeRegistrationForm").institution.value).length<11)
 {
    
    ToastAlert('toastAlert2','Enter a valid institution name',3000)
 }
 else if(Array.from(document.getElementById("freeRegistrationForm").contact.value).length<10||Array.from(document.getElementById("freeRegistrationForm").contact.value).length>10)
          {
            ToastAlert('toastAlert2','Enter correct contact format e.g 0703852178',3000)
          }else if(Array.from(document.getElementById("freeRegistrationForm").email.value).length<11)
          {
             
             ToastAlert('toastAlert2','Enter correct email address',3000)
          }
          else if(Array.from(document.getElementById("freeRegistrationForm").pin.value).length<5||Array.from(document.getElementById("freeRegistrationForm").pin.value).length>5)
          {
            ToastAlert('toastAlert2','Create 5 digits PIN e.g. 12345',3000)
          }
 else{
  
  ToastAlert('toastAlert1','Please wait ......',3000)
    
     fetch('/verifyUser',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({
 contact:document.getElementById("freeRegistrationForm").contact.value,
 pin:document.getElementById("freeRegistrationForm").pin.value
         }) 
     }).then(res=>res.json()).then((resp)=>{
         if(resp.registered===false){
          fetch('/collection_kayasers_registerFree',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify({
          name:document.getElementById("freeRegistrationForm").name.value.trim(),
          institution:document.getElementById("freeRegistrationForm").institution.value.trim(),
          contact:document.getElementById("freeRegistrationForm").contact.value.trim(),
          email:document.getElementById("freeRegistrationForm").email.value.trim(),
          pin:document.getElementById("freeRegistrationForm").pin.value.trim()
 
         })
     }) .then(resp=>{
         
     
         return resp.json()}).then(res=>{
          
       let kayaserDetailsObj=res
       ToastAlert('toastAlert1',`Successfully registered as ${kayaserDetailsObj.name}`,3000)
       
       document.getElementById("freeRegistrationForm").name.value=""
       document.getElementById("freeRegistrationForm").institution.value=""
     
     document.getElementById("freeRegistrationForm").contact.value=""
         document.getElementById("freeRegistrationForm").email.value=""
       document.getElementById("freeRegistrationForm").pin.value=""
       fetch(`/getTradingDetails/${kayaserDetailsObj.contact}`).then(res=>res.json()).then(resp=>{
let traderDetailsObj=resp[0]


setStatus(`<div style='color:green;'>You have registered succesfully as ${traderDetailsObj.name}. <span style='color:red;'>Thank you.</span></div>`)

       })
        
        
        
        
            })
        
        

         } else if(resp.registered===true){
          setStatus("<div style='color:red;'>You already registered with Kayas. You don't need to register again</div>")
      } 
          else{
            setStatus("<div style='color:red;'>We appologize, an error has occured as you tried to register. Please try again</div>")
           
            }
        
     }
         
 
     )
   
   
 }
        } 

       } class="form-submit-btn backgroundColorHovereffect"><span class="fa fa-user-circle"></span> Register</div><p></p>
      
       </form></div>


          </div>
          <div class='col-md-3'></div>
        </div>
       
      
       </div>)
    }
    
export function AdminRegistrationPage(){
  return(<div>
    <AdminRegistrationForm actionUrl="/collection_kayasers_registerThrouhAdmin"/>
  </div>)
}
export function HookupRegistrationPage(){
  return(<div>
    <RegistrationForm registrationFee="10,000/=" actionUrl="/collection_kayasers_registerToHookup"/>
  </div>)
}

export function Messager(){
let data='',whatsAppMessengerText1=`*Good morning*, hope you are *fine*%0A%0A*From:* Aswa Stephen Thomas❗%0A*To:* You%0A*Thru*: Kayas%0A%0A*Aswa T-shirts at 10,000/= Register yourself for one here below if you dont mind:*%0A%0A
Tap this link to register:%0A
https://kayas-mak.herokuapp.com/pages/attendanceregs/783989317/3%0A*Lets Keep It Kayas. I will always update you*`
  const[status,setStatus]=useState('')
  const[mukContactsNumb,setMukContactsNumb]=useState('')
  const[mukEducationNumb,setMukEducationNumb]=useState('')
  const[mubsContactsNumb,setMubsContactsNumb]=useState('')
  const[nduContactsNumb,setNduContactsNumb]=useState('')
  const[status2,setStatus2]=useState('')
  const[messageesNumb,setMessageesNumb]=useState('')
  const[messagees,setMessagees]=useState('')
  const[messagerIntroStatementSetStatus,setMessagerIntroStatementSetStatus]=useState('')
  const[messagerIntroStatement,setMessagerIntroStatement]=useState('')
  const[clearanceStatus,setClearanceStatus]=useState('')
  const[pushToAttendanceRegisterStatus,setPushToAttendanceRegisterStatus]=useState('')
  useEffect(()=>{
    
    fetch(`/universityContacts`).then(res=>res.json()).then(resp=>{
   
      setMukContactsNumb(resp[0].messagees.length)
      setNduContactsNumb(resp[1].messagees.length)
      setMubsContactsNumb(resp[2].messagees.length)
      setMukEducationNumb(resp[3].messagees.length)
      })
   
    fetch(`/messagees`).then(res=>res.json()).then(res=>{
      setMessageesNumb(res.messagees.length)
      let num=1;
       // res.reverse()
if(res.messagees.length===0){
  ;
}else{
  if(res.messagees[0].name===undefined){
    res.messagees.forEach(messagee=>{
      data+=`<div class='col-4 col-sm-4 col-md-2'><span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=256${messagee}&text=${res.introStatement}'><span class='hovereffect'>${num}:${messagee}</span></a><hr></hr></div>`
     num++;
     })
  }else{
  
    res.messagees.forEach(messagee=>{
           data+=`<div class='col-4 col-sm-4 col-md-2'><span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=256${messagee.contact}&text=${messagee.name}, ${res.introStatement}'><div>${num}. ${messagee.name}</div><div><span class='hovereffect'>0${messagee.contact}</span></div></a><hr></hr></div>`
          num++;
          })
         
  
  }
  
}




        
        setMessagees(data)
      })
      
    
    },[])

  return (<div>
    <div style={{color:"red",textAlign:"center",fontSize:"25px"}}>Kayas Messager</div>
    <div style={{color:"red",textAlign:"center",fontSize:"15px"}}>Supports top up</div>
    <div style={{color:"grey",fontSize:"10px",padding:"5px"}}>{mukContactsNumb} mukContacts, {mukEducationNumb} mukEducation, {nduContactsNumb} nduContacts, {mubsContactsNumb} mubsContacts  </div>
   <div class='row'>
   <div class='col-md-6'style={{padding:"30px"}}>  
    
    
   <form id="messengingForm" >
   <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Add messagee</div>
   <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:status}}/>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter WhatsApp Contact e.g 703852178' ></input>
 
    </div>
 
    <div style={{borderRadius:"18px"}} onClick={()=>{

if(Array.from(document.getElementById('messengingForm').contact.value).length<9||Array.from(document.getElementById('messengingForm').contact.value).length>9){
setStatus("<div style='color:red;'>Enter 9 digits ......</div>")
document.getElementById('messengingForm').contact.value=""
}
else{
  setStatus("<div style='color:red;'>Adding......</div>")
  fetch('/addToMessagingQueue',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({contact:document.getElementById('messengingForm').contact.value})
  }).then(res=>res.json()).then(res=>{
 if(res.presence===1){
    setStatus(`<div style='color:red;'>That contact: ${document.getElementById('messengingForm').contact.value} is already in the list....</div>`)
    document.getElementById('messengingForm').contact.value=""
  }else{
    setMessageesNumb(messageesNumb+1)
    setStatus(`<div style='color:green;'>Successfully added ${document.getElementById('messengingForm').contact.value}</div>`)
    document.getElementById('messengingForm').contact.value=""
  }

    
  })
}


    }}type="text" class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Add</div>
    </form>
    
    </div>
    <div class='col-md-6'style={{padding:"30px"}}>  
    
    <div style={{padding:"5px",fontSize:"20px"}} dangerouslySetInnerHTML={{__html:status2}}/>
   <form id="removeMessagee" >
   <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Remove messagee</div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter WhatsApp Contact e.g 703852178' ></input>
    </div>
 
    <div style={{borderRadius:"18px"}} onClick={()=>{

if(Array.from(document.getElementById('removeMessagee').contact.value).length<9||Array.from(document.getElementById('removeMessagee').contact.value).length>9){
setStatus2("<div style='color:red;'>Enter 9 digits ......</div>")
document.getElementById('messengingForm').contact.value=""
}else{
  setStatus2("<div style='color:red;'>Removing......</div>")
  fetch('/removeMessageeInMessager',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({contact:parseInt(document.getElementById('removeMessagee').contact.value)})
  }).then(res=>res.json()).then(res=>{
  if(res.presence===0){
    setStatus2(`<div style='color:red;'>That contact: ${document.getElementById('removeMessagee').contact.value} is not in the list....</div>`)
    document.getElementById('removeMessagee').contact.value=""
  }else{
    
    setStatus2(`<div style='color:green;'>Successfully removed ${document.getElementById('removeMessagee').contact.value}</div>`)
    document.getElementById('removeMessagee').contact.value=""
  }
  
    
  })
}


    }}type="text" class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Remove</div>
    </form>
    
    </div>
    <div class='col-md-6'style={{padding:"30px"}}>  
    
    
   <form id="setMessagerIntroStatementForm" >
   <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Set intro Statement</div>
    <div class="mb-3">
<textArea rows="3" type="text" class="form-control" autoComplete="off" name="messagerIntroStatement" placeholder='Enter statement' ></textArea>
    </div>
    <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:messagerIntroStatementSetStatus}}/>
    <div type="text" class="btn btn-success hovereffect" onClick={()=>{
      setMessagerIntroStatementSetStatus("<div style='color:green;'>Setting.............</div>")
      fetch('/setMessagerIntroStatement',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({statement:document.getElementById('setMessagerIntroStatementForm').messagerIntroStatement.value})
      }).then(res=>res.json()).then(resp=>{
        setMessagerIntroStatementSetStatus(resp[0])
      })
    }}>Set</div>
    </form>
    
    </div>
    <div class='col-md-6'style={{padding:"30px"}}>  
    
    
   <form id="pushToAttendanceregisterForm" >
   <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Push to Attendance Register</div>
    <div class="mb-3">
<textArea rows="1" type="text" class="form-control" autoComplete="off" name="contact" placeholder="Enter Registrar's Contact" ></textArea>
<br></br>
<textArea rows="1" type="text" class="form-control" autoComplete="off" name="registerId" placeholder='Enter Register ID' ></textArea>

<br></br>
<textArea rows="1" type="text" class="form-control" autoComplete="off" name="property" placeholder='Enter property e.g Year of entry' ></textArea>

<br></br>
<textArea rows="1" type="text" class="form-control" autoComplete="off" name="propertyValue" placeholder='Property value' ></textArea>

    </div>
    <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:pushToAttendanceRegisterStatus}}/>
    <div class="row">
      <div class="col-6">
    <div  type="text" class="btn btn-success hovereffect" onClick={()=>{
      setPushToAttendanceRegisterStatus("<div style='color:green;'>Pushing.............</div>")
      fetch('/pushToAttendanceRegister',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({registrarContact:parseInt(document.getElementById('pushToAttendanceregisterForm').contact.value),registerId:parseInt(document.getElementById('pushToAttendanceregisterForm').registerId.value)})
      }).then(res=>res.json()).then(resp=>{
        setPushToAttendanceRegisterStatus(resp[0])
      })
    }}>Push</div> 
    </div>
    <div class="col-6">
    <div type="text" class="btn btn-success hovereffect" onClick={()=>{

      
      let arrayStringToJoin=[],joinedArrayString,flag=0
      document.getElementById('pushToAttendanceregisterForm').property.value.trim().split(' ').forEach(string=>{
       if(flag===0){
        arrayStringToJoin.push(string)
       }else{
        arrayStringToJoin.push(string.replace(string.charAt(0),string.charAt(0).toUpperCase()))
       }
        
        flag++
        
        
        
      })

      joinedArrayString=arrayStringToJoin.join('')
      console.log(joinedArrayString)

      setPushToAttendanceRegisterStatus("<div style='color:green;'>Categorizing.........</div>")
      fetch('/categorizeMessagerContacts',{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({property:joinedArrayString,propertyValue:document.getElementById('pushToAttendanceregisterForm').propertyValue.value.trim()})
      }).then(res=>res.json()).then(resp=>{
        setPushToAttendanceRegisterStatus(resp[0])
        document.getElementById('pushToAttendanceregisterForm').property.value=""
        document.getElementById('pushToAttendanceregisterForm').propertyValue.value=""

      })
    }}>Add property</div>
    </div>
    </div>
    </form>
    
    </div>

    <div class='col-md-6'style={{padding:"30px"}}>  
    
    
   <form id="clearanceForm" >
   <div style={{color:"green",fontWeight:"bold",textAlign:"center", fontSize:"15px"}}>Clear All messagees</div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="categoryId" placeholder='Enter category ID to top up' ></input>
    </div>
    <div style={{padding:"5px",fontSize:"15px"}} dangerouslySetInnerHTML={{__html:clearanceStatus}}/>
    <div style={{borderRadius:"18px"}} onClick={()=>{

  setClearanceStatus("<div style='color:red;'>Clearing......</div>")
  fetch('/deleteMessageesList',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({categoryId:document.getElementById('clearanceForm').categoryId.value})
  }).then(res=>res.json()).then(res=>{
 if(res.category===0){
  setClearanceStatus("<div style='color:red;'>Institution category doesn't exist...</div>")
 }else if(res.category===1){
  setClearanceStatus("<div style='color:green;'>Succesfull</div>")
  document.getElementById('clearanceForm').categoryId.value=""
 }else{
  setClearanceStatus("<div style='color:green;'>Error must have happened. Confirm</div>")
  
 }
  })

    }}type="text" class="btn btn-success hovereffect">Clear messagees</div>
    </form>
    
    </div>



   </div>
  
    
    <hr></hr>
   <div class="row"> 
    
    <div style={{padding:"5px",color:"red",textAlign:"center"}}><span style={{color:"red", fontSize:"20px"}}>{messageesNumb} messagees in the list</span></div> 

   </div>
    <p></p><div class="row" style={{fontSize:"17px",textAlign:"center"}} dangerouslySetInnerHTML={{__html:messagees}}/> 



  </div>)
}
export function RecommendationForm(){
  return (
    <div>
<div style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"24px"}}>ADD CHILD/RECOMMEND</div>
    <div style={{fontFamily:"charm",color:"grey",textAlign:"center"}}>Recommend a friend. Enter your contact, the contact you want to recommend and the pin you created during registration with Kayas.</div>
    <br></br><form method="post" action="/collection_recommendations_recommendation">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off" name="recommender" placeholder='Your WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
  <br></br>
  <div style={{fontSize:"12px",color:"green",textAlign:"center"}}>Enter the WhatsApp number of your friend you wish to recommend below:</div>
  <input type="text"  class="form-control" autoComplete="off" name="recommendee" placeholder='Whom To Recommend e.g 0703852178' maxLength={10} minLength={10} required></input>
  <br></br>
  
  
    <input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter Your PIN' maxLength={5} minLength={5} required></input>
    </div>
    
    <button style={{borderRadius:"18px"}} type="text" class="btn btn-success hovereffect"><span class="fa fa-user-circle"></span> Recommend/Add child</button>
    </form>
    
    </div>
   
    </div>
  )
}
export function OrderForm(){
  return(
    <div style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"24px"}}>ORDER</div>
    
    <br></br><form method="post" action="/collection_orders_order">
    <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Your name'  required></input>
  <br></br>
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Your WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
  <br></br>
 
  
  <textArea rows="5"type="text"  class="form-control" autoComplete="off" name="msg" placeholder='Describe Your Request e.g. need a Loan or Sell item or Purchase item, etc' required></textArea>
 
  <div style={{fontFamily:"",color:"green",textAlign:""}}>Incase you don't know the trading ID and code, contact the student who sent this message to you.</div>
  <input type="text"  class="form-control" autoComplete="off" name="tradingId" placeholder='Enter Trading ID' maxLength={10} minLength={10} required></input>
  <br></br>
  
  
    <input type="text" class="form-control" autoComplete="off" name="tradingCode" placeholder='Enter trading code' maxLength={4} minLength={4} required></input>
    </div>
    
    <button style={{borderRadius:"18px"}} type="text" class="btn btn-success hovereffect"><span class="fa fa-envelope"></span> Order</button>
    </form></div>
  )
}

export function MessageForm(props){
  const [advertiserContact,setAdvertiserContact]=useState('')
  const [sendNotice,setSendNotice]=useState('Please wait.....')
  let componentParams=useParams()
  
  useEffect(()=>{
    if(componentParams.recommender===undefined){
      setAdvertiserContact('0703852178')
      setSendNotice('Send message')
      
    }else{
      setAdvertiserContact(componentParams.recommender)
      setSendNotice('Send message')
    }
  })
  

  const [requestStatus,setRequestStatus]=useState('')

  return (
    <div style={{padding:"20px"}}>  
    <form id='requestForm' >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Send message</div></div>

    <div class="mb-3">
      <div class="formInputLabel">Name</div>
    <input type="text" class="form-control" autoComplete="off" name="name" ></input>
  <br></br>
  <div class="formInputLabel">Contact</div>
    <input type="text" class="form-control" autoComplete="off" name="contact"></input>
  <br></br>
  <div class="formInputLabel">Type your request/inquiry</div>
  <textArea rows="5"type="text" list="serviceTypes" class="form-control" autoComplete="off" name="serviceType"></textArea>
 
    </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:requestStatus}}/>
    <div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
if(Array.from(document.getElementById('requestForm').name.value).length<2){
  setRequestStatus('<div style="color:red;">Enter correct name.......</div>')
}
else if(Array.from(document.getElementById('requestForm').contact.value).length<10 || Array.from(document.getElementById('requestForm').contact.value).length>10){
  setRequestStatus('<div style="color:red;">Enter contact of 10 digits.......</div>')

} else if(Array.from(document.getElementById('requestForm').serviceType.value).length<3){
  setRequestStatus('<div style="color:red;">Enter correct message/order request.......</div>')
}

else{
  setRequestStatus('<div style="color:green;">Sending..............</div>')

fetch('/submitMessage',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({name:document.getElementById('requestForm').name.value,contact:parseInt(document.getElementById('requestForm').contact.value),serviceType:document.getElementById('requestForm').serviceType.value,recommender:parseInt(advertiserContact)})
}).then(resp=>resp.json()).then(resp=>{
  setRequestStatus('<div style="color:green;">Successful <span class="fa fa-check"></span> Thank you.</div>')
  document.getElementById('requestForm').name.value=""
  document.getElementById('requestForm').contact.value=""
  document.getElementById('requestForm').serviceType.value=""

})




}

    }}><span class="fa fa-envelope"></span> {sendNotice}</div>
    </form>
   
    
    </div>
  )
}


  export function Alert(){
    let v="col-12 col-sm-12 col-md-6";
    return (
  
    <div style={{background:"white",textAlign:"center"}}>
    <div  class="row">
      <div class=" col-sm-6 col-md-6"><img src={alert} class=" d-block w-100" alt="..."  /></div>
    
      <div style={{textAlign:"left",padding:"30px"}}class="row col-sm-6 col-md-6"> 
      <div style={{padding:"10px"}}class="col-sm-12 col-md-12"><a href="https://kayas-mak.herokuapp.com/pages/brocode"><span class="btn btn-danger hovereffect"> Get to Know Kayas</span></a></div>
      <div style={{padding:"10px"}} class="col-sm-12 col-md-12"><a href="https://kayas-mak.herokuapp.com/pages/quotes"><span class="btn btn-success hovereffect"> Do you feel depressed? Tap Here</span></a></div>
      </div>
    </div>
    
    </div>
  
    );
  }

 
  export function MugArtComp(props){
    let v="col-12 col-sm-12 col-md-6";
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p><div className="row"><div class="col-3"></div><img style={{borderRadius:"90px"}} class=" d-block w-50" src={props.img} alt="kayas"/><div class="col-3"></div></div><div style={{textAlign:"center"}}><div style={{fontWeight:"bold",textAlign:"center",fontSize:"20px", color:"green"}}>{props.name}</div><div> <a href="https://api.whatsapp.com/send?phone=256703852178&text=Hello,%20I%20would%20love%20to%20comment%20about%20the%20Don't%20Sleep%20Hungry%20Campaign."><button type="button" class="btn btn1 btn-success">Share Your Comment</button></a></div><div style={{fontWeight:"bold",textAlign:"center",fontSize:"", color:"rgb(187, 9, 9)"}}>{props.post}</div> <div  style={{color:"grey",fontSize:"",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }


  function Art(){
   //let kayas=256703852178;
    
    return (
        <div style={{background:"white"}}class="row">
          <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"25px",color:"red"}}>Hostel Room Items </div> <div></div></div>
          <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"20px",color:"red"}}></div> <div></div></div>
          
          
        <div style={{textAlign:"center"}}>  <div style={{textAlign:"center", fontWeight:"bold",fontSize:"25px",color:"red"}}> </div> <div></div></div>
       <p></p><p></p> 
     
      
       
     </div>
    );
  }

  export function ArtCompGuildHome(props){
    let v="col-12 col-sm-12 col-md-6",link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20Kayas%20Makerere%20University,%20I%20wish%20to%20promise%20my%20vote%20too%20for%20"+props.name
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div> <div > <marquee><span style={{fontWeight:"bold",fontSize:"20px",color:"green"}}>370</span> <span style={{color:"green"}}>Promises</span></marquee></div> <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Promise Your Vote</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }
  export function ArtCompGrc(props){
    let v="col-12 col-sm-12 col-md-6",link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20"+props.name+",%20I%20wish%20to%20promise%20my%20vote%20too%20for%20you%20through%20Kayas%20Makerere%20University."
    return (
  
  <div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Promise Your Vote</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>
  
    );
  }
  

export function ArtComp(props){
  let v="col-12 col-sm-12 col-md-6",phone=256772043895,link="https://api.whatsapp.com/send?phone="+phone+"&text=Hello%20Kayas%20Makerere%20University,%20my%20comment%20with%20msgID"+props.phone+"%20is:%20"
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Join Me</button></a></div> </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}

export function KayasTeam(){
  return(<div>
    <div style={{textAlign:"center"}}>  <p></p><div style={{fontWeight:"bold",fontSize:"20px",color:"red"}}>1k interest loans !!</div> <div style={{padding:"4px",textAlign:"center"}}>Kayas loaning service is now up and running. The service is eligible to only year one and year two students of Makerere University. Read the loaning details presented by part of the kayas Team below. </div></div>
       <div style={{textAlign:"center"}}>  <div style={{textAlign:"center",fontFamily:"charm", fontWeight:"bold",fontSize:"20px",color:"red"}}></div> <p></p></div> 
     
    <ArtCompKayas name="Isaac  Opio" phone="256755643774"social={<a style={{color:"green"}}href="https://twitter.com/isaacopiokayas"><span class="fa fa-twitter"> Follow on Twitter</span></a>} img={isaac2} post ="For Kayas Makerere University" msg="Kayas Makerere loaning service is now up and running to offer manageable loan amounts to year one and two students of Makerere University with a mission of abolishing the 'SLEEP HUNGRY MOMENTS' that are experienced by many of the students in the category shared  above. The loaning service offers you an opportunity to request for financial aid of only 20,000/= with a colateral of either a student ID or original National ID. The loan is expected to be paid back with an interest of 1,000/= only if paid back after a period of not more than 3 days that are counted starting from  the borrowing date. Any payments made after the 3 days period calls for an interest of 2,000/= which is levied per week. All you need to present as a collateral security is a University students ID or original National ID. It is a Don't Sleep Hungry Campaign. Please continue to read details from my collegue below." />
  <ArtCompKayas name="Charles  Kahuma" phone="256700411626" post ="For Kayas Makerere University" img={kahu} msg="A hungry man is an Angry man. Control the anger by controlling the hunger. Don't sleep hungry. To procceed to requesting  for a loan, click the 'Request For A Loan' button below this and you will be directed to a services page where you will need to read the requirements, meet them  and send your request thereafter. Thank you for Keeping it Kayas" />
  
     <div  style={{textAlign:"center"}}> <a style={{color:"green",fontSize:"20px"}}href="https://kayas-mak.herokuapp.com/pages/message"> <span class="fa fa-money hovereffect"> Request For A Loan</span> </a></div>
  </div>);
}

export function ArtCompKayas(props){
  let v="col-12 col-sm-12 col-md-6",phone=256703852178,link="https://api.whatsapp.com/send?phone="+props.phone+"&text=Hello%20"+props.name+",%20Kayas%20Makerere%20University."
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"30px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"15px", color:"green"}}>{props.name}</div><div style={{fontWeight:"",textAlign:"center",fontSize:"15px", color:"rgb(187, 9, 9)"}}>{props.post}</div>  <div> <a href={link}><button type="button" class="btn btn-sm btn1 btn-success"> <span class="fa fa-whatsapp"> </span> Contact me</button></a></div> <div style={{color:"green",paddingTop:"5px"}}>{props.social}</div></div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}
export function Anchor(props){
  return(<div style={{paddingBottom:"15px"}}>
  <a  style={{color:"black"}} href={props.href}>
  <span class="hoverEffectUnderline">
  <div style={{color:"green"}}>{props.heading1}</div>
    <div style={{color:"grey"}}>{props.heading2}</div>
   {props.caption}
  </span>
  </a>
  </div>)
}

function ArtComp1(props){
  let v="col-12 col-sm-12 col-md-6";
  return (

<div class={v} style={{paddingBottom:"10px"}}><p></p> <div style={{padding:"10px"}}><div className="row">  <div class="col-6"><img style={{borderRadius:"90px"}} class=" d-block w-100" src={props.img} alt="kayas"/></div> <div style={{textAlign:"center",paddingTop:"40px"}}class="col-6"><div style={{fontWeight:"bold",fontSize:"20px", color:"green"}}>{props.name}</div>   </div> </div></div> <div style={{paddingLeft:"5px"}}>    <div  style={{color:"grey",textAlign:"center",fontFamily:"Charm",border:"0.5px solid grey",borderRadius:"20px",padding:"3px",overflow:"scroll"}}>{props.msg}</div>    </div></div>

  );
}
  export function GeneralComp1(){
    let v=" col-sm-12 col-md-4 gencols";
    
    return (
        <div class="generale row">
       
            <div class={v}><div class="generaleH">KAYAS Makerere University</div>Kayas is a trade service that allows you as a University student acquire common hostel requirements/items. The service also gives an opportunity to any one who discovers "dead price" offers and immediately claims for it within a period of less than 48 hours. <div>
            <p></p>You can subscribe to our services in order to receive free updates on affordable items being sold by students. If you do have an insiprational message too, share with us through this link <a href="https://api.whatsapp.com/send?phone=256703852178&text=Hello,%20I%20would%20like%20to%20...."> SUBSCRIBE/MOTIVATE</a> 
            
            <hr style={{color:"green",height:"2px"}}></hr>
        </div> <p></p> | <span class="fa fa-whatsapp"> | <span class="fa fa-phone"></span> | 0703852178 </span><br></br>  </div>
        
            <div class={v}><div class="generaleH">Recognized Kayas Agents.</div>The Agents listed below are the only registered agents with the authority to inform you about our services and  reply to your inquiries as well.<br></br>Isaac-Makerere University-0755643774<br></br>Charles-Makerere University-0700411626 <p></p><strong>KAYAS #MAKERERE STUDENTS' TRUST</strong><div style={{background:"white"}}><span class="generaleH1">Reach out to Isaac incase of any inquiries or business through this link:</span> <a href="https://api.whatsapp.com/send?phone=256755643774&text=Hi,%20Isaac."> WHATSAPP</a></div>     </div>
            <div class={v}><div class="generaleH">The Benefits of Kayas.</div> With Kayas, students have the opportunity to earn from open products where a student is paid after every successful transaction of each of the open products. Participation is free of charge. </div>
            
        </div>
    );
  }
  
 

  export function GeneralComp(){
    let v="col-sm-12 col-md-4 gencols genPadTop";
    
    return (
        <div class="generale row">
          
          <div class={v}><img src={isaac1} class=" d-block w-100" alt="..."  /> <div><div class="generaleH1">An interview</div><div class="gen1"> An interview with one of the finalists  from the College of Computing who has also been our client showed a positive receipt of the service. Many of the finalists feel sad because they will miss the cheap offers from Kayas that they have always wanted ever since they joined Makerere University.<p></p> "Yes we all want to own, but we need affordable items. Kayas is really an opportunity to the year ones", one of the finalists also commented so.</div> </div>   </div>
          
        
        
                        
                        
                        <div class={v}><img src={isaac3} class=" d-block w-100" alt="..."  /> <div><div class="generaleH1">Keep it Kayas  - Isaac</div><div class="gen1">Having cheaper items delivered to you has always been your cry. We all want to own, but we need to own basing on our pockets.<br></br> As Kayas, we serve students of Makerere with all they may need at very reduced costs. Embrace Kayas <br></br>I remain, Isaac-Makerere University-<a href="https://api.whatsapp.com/send?phone=256755643774&text=Hi,%20Isaac"> WhatsApp</a></div> </div>   </div>
        </div>
    );
  }
  function Lights(){
   
    
    return (
      <div  style={{padding:"8px"}}class="row"><div class="col-6 col-sm-6 col-md-4"><img style={{borderRadius:"20px"}}src={lights} class=" d-block w-100" alt="..."  /></div> <div style={{borderRadius:"20px",color:"grey",fontFamily:"charm",fontSize:"20px",opacity:"0.7",background:"white",textAlign:"center"}}class="col-6 col-sm-6 col-md-4">Beautiful room light. Amazing and glitters like a flame burning besides you. Order one for yourself @80,000/=</div></div>
    )
  }

  export function ThemeWrap(props){
    let v="col-sm-12 col-lg-6 gencols";
  return(

  <div class="row"><div class="col-md-3"></div><div class={v} > 

  <div><img src={props.img} class=" d-block w-100" alt="..."  /> </div><div> 
     <div>
      <div style={{textAlign:"center", fontWeight:"bold",color:"red"}}>{props.headline}</div><div style={{textAlign:"center",paddingBottom:"5px"}}><span style={{border:"1px solid grey",padding:"3px",borderRadius:"10px",color:"grey",fontFamily:"charm",fontSize:"11px"}}>{props.date}</span></div></div>
      <div style={{textAlign:"center",padding:"2px",fontFamily:"charm",color:"grey"}}>{props.msg}</div></div><hr></hr>
      
      
      </div>
      <div class="col-md-3"></div>
      
      </div>
      
      )
  
  }


export function FamilyDetailsNav(){
  return(

<div style={{padding:"10px",background:"black",fontSize:"10px"}}>
<a style={{color:"white",paddingRight:"9px",}} href="/pages/recommend"><span class="hovereffect">ADD-CHILD/RECOMMEND</span></a> 
<a style={{color:"white",paddingRight:"9px",}} href="/pages/family/familydetails"><span class="hovereffect">SEE-YOUR-FAMILY</span></a>
        
       <a  style={{color:"white",paddingRight:"9px"}} href="/pages/family/familygroup"><span class="hovereffect"> JOIN-GROUP</span></a>
       <a style={{color:"white",paddingRight:"9px",}} href="/pages/family/familyhome"><span class="hovereffect">HOME</span></a> 
     </div>

  )
}



  
export default Home
