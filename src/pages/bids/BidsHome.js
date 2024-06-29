import React, {useEffect,useState} from 'react'
import {Itemsele,ThemeWrap} from '../Home';
import item from '../imgs/item.jpg';


 

export function BidsHome(){
 let data=""
const[bids,setBids]=useState('') 
const[bidsNumb,setBidsNumb]=useState('Loading.......') 
const[biddingStatus,setBiddingStatus]=useState('') 
const[biddingMsg,setBiddingMsg]=useState('Please wait......') 
const[biddingHeadline,setBiddingHeadline]=useState('Please wait......') 

useEffect(()=>{
       fetch('/collection_bids_bids').then(res=>res.json()).then(res=>{
              setBidsNumb(res.length)
              res.forEach(bid=>{
             
                data+=`<div class="col-6 col-md-6">${bid.name}</div><div class="col-6 col-md-6">${bid.bidAmount}/=</div><hr></hr>`
              
              })
              
              setBids(data);
                })

                fetch('/collection_biddingControls').then(res=>res.json()).then(res=>{
setBiddingMsg(res[0].biddingMsg)
setBiddingHeadline(res[0].biddingHeadline)

                })

},[])
    


return(

  <div style={{padding:"5px"}}>
   <div class='row'>
 

<div class='col-md-6'> <div style={{fontSize:"20px",color:"green"}}>{biddingHeadline}</div>

<div>{biddingMsg}</div>
<p></p>
<div style={{fontSize:"20px",color:"green"}}>How to purchase</div>
<div style={{fontSize:"15px"}}>Use the form below to post an amount you are willing to offer to buy it <span style={{color:"red"}}>but remember</span>, the highest bidder appears on top and we do follow up from top to bottom, so far <span style={{color:"red",fontSize:"20px"}}>{bidsNumb}</span> people have shown interest, scroll down to see them:</div>
</div>
<div class='col-md-6'> <div style={{padding:"10px"}}>  
    <div style={{color:"green",fontSize:"20px"}}>How much can you offer? Post here:</div>
    <div style={{padding:"4px",fontSize:"15px",color:"red"}}><span style={{fontWeight:"bold"}}>{bidsNumb} </span>posts so far. Scroll under the form below to see the posts:</div>
        <br></br><form id="biddingForm" action="/collection_bids_bid">
    <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="name" placeholder='Enter your name' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Your WhatsApp Contact e.g 0703852178' ></input>
  <br></br>
  <div style={{fontSize:"15px",color:"red"}}>Do not use commas as you enter your amount</div>
  <div style={{color:"red",fontSize:"15px"}}>NOTE: The highest bidder will always appear on top</div> 
  <textarea type="text"  class="form-control" autoComplete="off" name="bidAmount" placeholder='Amount you would offer in shs without commas e.g 10000 but not 10,000'></textarea>

  
    </div>
       
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:biddingStatus}}/>
    <div style={{borderRadius:"18px"}} type="text" class="btn btn-success hovereffect" onClick={()=>{


setBiddingStatus('<div style="color:green;">Submitting........</div>')

if(Array.from(document.getElementById("biddingForm").name.value).length<2){
  setBiddingStatus('<div style="color:red;">Enter your name...........</div>')

} else if(Array.from(document.getElementById("biddingForm").contact.value).length<10 || Array.from(document.getElementById("biddingForm").contact.value).length>10){
  setBiddingStatus('<div style="color:red;">Enter contact of 10 digits............</div>')

} else if(Array.from(document.getElementById("biddingForm").bidAmount.value).find(character=>{return character===','})!=undefined ){
  setBiddingStatus('<div style="color:red;">Amount should not have commas..........</div>')

} else if(Array.from(document.getElementById("biddingForm").bidAmount.value).length<2){
  setBiddingStatus('<div style="color:red;">Enter an amount..........</div>')
}


else{
  setBiddingStatus('<div style="color:green;">Submitting.............</div>')
fetch('/submitBid',{
  method:'POST',
  headers:{
    'content-type':'application/json',
    
  },
  body:JSON.stringify({name:document.getElementById("biddingForm").name.value,contact:parseInt(document.getElementById("biddingForm").contact.value),bidAmount:parseInt(document.getElementById("biddingForm").bidAmount.value)})
}).then(resp=>resp.json()).then(resp=>{
  setBiddingStatus(resp[0])
  document.getElementById("biddingForm").name.value=""
  document.getElementById("biddingForm").contact.value=""
  document.getElementById("biddingForm").bidAmount.value=""
  setBidsNumb('Loading......')
  fetch('/collection_bids_bids').then(res=>res.json()).then(res=>{
    setBidsNumb(res.length)
    res.forEach(bid=>{
   
      data+=`<div class="col-6 col-md-6">${bid.name}</div><div class="col-6 col-md-6">${bid.bidAmount}/=</div><hr></hr>`
    
    })
    
    setBids(data);
      })

})

}


    }}><span class="fa fa-money"></span> Post Amount</div>
    
    </form></div></div>


</div>
  
   
   
    <div style={{textAlign:"center",fontWeight:"bold",color:"red",paddingTop:"40px"}}>{bidsNumb} bids below:</div>
       <div style={{padding:"20px",fontSize:"15px"}} ><div class='row' dangerouslySetInnerHTML={{__html:bids}}/></div>

       <div style={{padding:""}}>  
 
    <form id='contactsSecreteForm' >
    <div class="btn btn-success" onClick={()=>{

if(document.getElementById('contactsSecreteForm').contactsSecrete.value!='hosea'){

}else{
  setBidsNumb('Loading......')
  fetch('/collection_bids_bids').then(res=>res.json()).then(res=>{
    setBidsNumb(res.length)
    res.forEach(bid=>{
   
      data+=`<div class="col-4 col-md-4">${bid.name}</div><div class="col-4 col-md-4">${bid.bidAmount}/=</div><div class="col-4 col-md-4">${bid.contact}</div><hr></hr>`
    
    })
    
    setBids(data);
      })
}




    }} >Thanks for bidding!</div>
    <div class="mb-3">
  
    <textArea rows="1" type="password" class="form-control" name="contactsSecrete" placeholder=''></textArea>
  
    </div>
   
  
    </form></div>
       
      
 

  </div>
);
}



export function ViewOffer(){
  const[status,setStatus]=useState('')

 
return(

<div >
   


     <div class="row" style={{padding:"5px"}}>  
     <div class="col-md-3" style={{color:"green",textAlign:"center"}}><p></p> To view today's offer, enter your details below to continue</div>
    <div class="col-md-6"> <div style={{padding:"30px"}}>  

  
  <form method="post" action="/linkToOffer">
  <div class="mb-3">

  <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Your WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
<br></br>



  <input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter Your PIN' maxLength={5} minLength={5} required></input>
  </div>
  
  <div class="row">

  <div class="col-6" ><div style={{color:"red"}}>{status}</div>
      <button onClick={

      ()=>{
             setStatus("Please wait ......... Incase it takes longer, then your  network connection may be poor")
      }
  } type="submit" style={{borderRadius:"18px"}} class="btn btn-success hovereffect"> Continue</button></div>
 <div class="col-6"  style={{padding:"6px"}}><a href="https://kayas-mak.herokuapp.com/pages/services" ><label style={{color:"green"}}><span class="hovereffect"><span class="fa fa-user"></span> REGISTER</span></label></a></div>
  
  
  </div>

  
  <div style={{fontSize:"12px",color:"green",textAlign:"left"}}>Thank you for Keeping It Kayas. Always Keep it Kayas</div>
  </form></div></div>
     
      </div>
    
<Itemsele />

</div>
);
}


export default BidsHome



