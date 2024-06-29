

import React,{useEffect,useState,useContext,createContext, useReducer} from 'react'

import {KyuOpinionPolls,OpinionPoll1,AcholiStudentsUnionPoll} from './pages/VoterOpinionPolls/VoterOpinionPollsHome';
import {Itemsele,NotFound,RegistrationPage,RecommendationForm,MessageForm,OrderForm,AdminRegistrationPage,HookupRegistrationPage, Messager, SendFreeSms} from './pages/Home';
import { AllArticles, CreateArticle,AssessMyArticles, MyArticles, PubArticleComp,ShareMyArticles, PubArticleCompHome } from './pages/pubarticles/PubArticleHome';
import { AttendanceRegisterComp,CreateAttendanceRegister, EditRegister, MyRegisters } from './pages/attendanceregs/AttendanceRegsHome';

import {FollowersHome,FollowingComp} from './pages/Followers'
import About from './pages/About';

import Links from './pages/Links';
import Maintenance from './pages/Maintenance';  
import {BidsHome,ViewOffer} from './pages/bids/BidsHome';
import Brocode from './pages/Brocode';  
import {ClientBusinesses,Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client9,Client10,Client11,Client12} from './pages/ClientBusinesses'; 
import Quotes from './pages/Quotes';
import logo from './logo2.png';
import Devs from './pages/Devs';
import {ControlsHome,ShowHookUps,Kayasers,Requests,Recommendations,Orders,ClientsMonitor, ArticlesMonitor,TradersCare, KayaserCare,RegisterCare, AttendeeRegisters, SmsNotificationsCare} from './pages/admin/Controls';

import {TradingHome,TradingAccount} from './pages/trading/TradingHome';


import { HookUpHome, HookupProfiles, CreateHookupProfile } from './pages/hookup/HookUpHome'



import Updates from './pages/Updates';


import './App.css';
import  './index.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';


export function App() {
  const [hookupNumb,setHookupNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  
  const [articlesNumb,setArticlesNumb]=useState('')
  const [reqNumb,setReqNumb]=useState('')
  
  useEffect(()=>{
   
    fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
      setReqNumb(res.length)
        })

    fetch('/collection_hookups_number').then(res=>res.json()).then(res=>{
      setHookupNumb(res.length)
    })
    fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
      setKayasersNumb(res.length)
        })

    
    
    fetch('/getAllArticles').then(res=>res.json()).then(res=>{
      setArticlesNumb(res.length)
      })
      
    
  },[])



   let s={color:"white"}
   


  return (
    <BrowserRouter><div>

<div class="navigation"> 
       
        <nav  class=" navbar-expand-sm navbar-light bg-black" >
     <div class="container-fluid">
      <div  class="row">
        
      <div class="col-12" style={{textAlign:"center"}}>
      <div class='row'>
<div class='col-4 col-md-5'></div>
<div class='col-4 col-md-2'><img src={logo} class="d-block w-100" alt="..."  /></div>
<div class='col-4 col-md-5'>

<div><span style={{color:"#1C1C1C",fontSize:"8px"}}>  - </span></div>
</div>

      </div>
      </div>
       <div style={{textAlign:"center"}}><span style={{color:"orange",fontSize:"11px"}}> {kayasersNumb} - It takes nothing to know - {reqNumb}</span></div>
       
      



       </div>
    



     </div>
   </nav>
   
   


 
   <nav style={{paddingLeft:"10px"}} class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button  style={{color:"yellow"}} class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> Menu
      </button> 

      <div class="navbar-collapse justify-content-md-center collapse" id="navbarsExample08" >
        <ul style={{display:"flex",flexWrap:"wrap"}} class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" style={s} href="/pages/pubarticles/allarticles"><span class="hovereffect">Trending stories ({articlesNumb})  </span></a>
          </li>
         
          <li class="nav-item">
          <a class="nav-link" style={s} href="/pages/pubarticles/createarticle"><span class="hovereffect">Create Article</span></a>
          </li>
          <li class="nav-item">
  <a class="nav-link" style={s} href="/pages/register"><span class="hovereffect">Register </span></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" style={s} href="/pages/attendanceregs/createattendanceregister"><span class="hovereffect">Bulk SMS/Quicker phone calls</span></a>
          </li>
        <li class="nav-item active">
          <a class="nav-link" style={s} href="/pages/message"><span class="hovereffect">Send message</span></a>
          </li>
          <li class="nav-item">
          <a  class="nav-link" style={s} href="/advertise/items/0703852178"><span class="hovereffect">Buy items</span></a>
          </li>
        
         
          
          <li class="nav-item">
   <a class="nav-link" style={s} href="/pages/followershome"><span class="hovereffect">Get urgent information when offline</span></a> 


          </li>
          <li class="nav-item">
   <a class="nav-link" style={s} href="/pages/clientbusinesses/0703852178"><span class="hovereffect">More</span></a>
          </li>
         
        
         
          <li class="nav-item">
          <a class="nav-link" style={s} href="#" onClick={()=>{
           let contact=window.prompt('Enter your contact')

         if(contact!=null){
if(Array.from(contact).length<10 || Array.from(contact).length>10){
  window.alert('Enter 10 digits contact')
}else{

  fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
contact:contact,
pin:'11111'
    }) 
}).then(res=>res.json()).then((resp)=>{
    if(resp.registered===false){
     window.alert("You are not registered with Kayas, please register to proceed!")
   

    } else if(resp.registered===true){
     
      window.location.href=`/pages/trading/tradingaccount/${resp.details.contact}`

    } 
     else{
     window.alert("An error has occured. Please try again")
      
       }
   
}
    

) 

}

         }else{
;
         }


 
          
          }} ><span class="hovereffect">Account</span></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" style={s} href="/pages/about"><span class="hovereffect">About</span></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" style={s} href="/advertise/client1/0703852178"><span class="hovereffect">Loans</span></a> 
          </li>
          <li class="nav-item">
          <a class="nav-link" style={s} href="/pages/brocode"><span class="hovereffect">Who is Kayas?</span></a> 
          </li>
     
         
        
          <li class="nav-item">
          <a class="nav-link"  style={s} href="/pages/quotes"><span class="hovereffect">Quotes</span></a>
          </li>
         

          
          <li class="nav-item">
   <a class="nav-link" style={s} href="/pages/hookup/hookuphome"><span class="hovereffect">{hookupNumb} Hookups</span></a>

          </li>
          <li class="nav-item">
    <a class="nav-link" style={s} href="#"><span class="hovereffect">Links</span></a> 
      </li>
   
        
          
        </ul>
      </div>
    </nav>

        </div>
      
  
  <Switch>
      
      <Route path="/advertise/items/:recommender" exact component={Itemsele}/>
      <Route path="/advertise/client1/:recommender" exact component={Client1}/>
      <Route path="/advertise/client2/:recommender" exact component={Client2}/>
      <Route path="/advertise/client3/:recommender" exact component={Client3}/>
      <Route path="/advertise/client4/:recommender" exact component={Client4}/>
      <Route path="/advertise/client5/:recommender" exact component={Client5}/>
      <Route path="/advertise/client6/:recommender" exact component={Client6}/>
      <Route path="/advertise/client7/:recommender" exact component={Client7}/>
      <Route path="/advertise/client8/:recommender" exact component={Client8}/>
      <Route path="/advertise/client9/:recommender" exact component={Client9}/>
      <Route path="/advertise/client10/:recommender" exact component={Client10}/>
      <Route path="/advertise/client11/:recommender" exact component={Client11}/>
      <Route path="/advertise/client12/:recommender" exact component={Client12}/>
           
      <Route path="/pages/attendanceregs/:registrar/:id" component={AttendanceRegisterComp}/>
      <Route path="/pages/attendanceregs/seemyregisters" component={ MyRegisters }/>
      <Route path="/pages/attendanceregs/createattendanceregister" component={CreateAttendanceRegister}/>
      <Route path="/pages/editattendanceregs/:registrarContact/:registerId" component={ EditRegister }/>
      <Route path="/pages/pubarticles/article/:id" component={PubArticleComp}/>
      <Route path="/pages/pubarticles/createarticle" component={CreateArticle}/>
      
      <Route path="/pages/pubarticles/pubarticlehome" component={PubArticleCompHome}/>
      <Route path="/pages/pubarticles/allarticles" component={AllArticles}/>
      <Route path="/pages/pubarticles/seemyarticles" component={MyArticles}/>
      <Route path="/pages/pubarticles/sharemyarticles/:articleAuthorContact" exact component={ShareMyArticles}/>
      <Route path="/pages/pubarticles/assessmyarticles" component={AssessMyArticles}/>
   
      
      <Route path="/pages/voteropinionpolls/kyu" exact component={KyuOpinionPolls}/>
      <Route path="/pages/voteropinionpolls/opinionpoll1" exact component={OpinionPoll1}/>
      <Route path="/pages/voteropinionpolls/acholistudentsunion" exact component={AcholiStudentsUnionPoll}/>
      
      <Route path="/pages/brocode" component={Brocode}/>
      <Route path="/pages/clientbusinesses/:recommender" exact component={ClientBusinesses}/>
      <Route path="/pages/clientbusinesses" exact component={ClientBusinesses}/>
     

      <Route path="/pages/quotes" component={Quotes}/>
      
      <Route path="/pages/links" exact component={Links}/>
      <Route path="/pages/about" component={About}/>
      <Route path="/pages/updates/:recommender" component={Updates}/>
      <Route path="/pages/updates" component={Updates}/>
      <Route path="/pages/maintenance" component={Maintenance}/>
      <Route path="/pages/bids/getlink" component={ViewOffer}/>
      


      <Route path="/pages/trading/tradingaccount/:trader" exact component={TradingAccount}/>
      <Route path="/pages/trading/tradinghome" component={TradingHome}/>
   
      <Route path="/pages/bids/bidshome" component={BidsHome}/>
      
      
     
      
    
      <Route path="/hookups" exact component={HookupProfiles}/>
      <Route path="/pages/hookup/hookuphome" component={HookUpHome}/>
      <Route path="/pages/hookup/createprofile" component={CreateHookupProfile}/>
      
      <Route path="/pages/admin/controls" component={ControlsHome}/>
      <Route path="/pages/admin/showhookups" component={ShowHookUps}/>
      <Route path="/pages/admin/requests" component={Requests}/>
      <Route path="/pages/admin/orders" component={Orders}/>
      <Route path="/pages/admin/kayasers" component={Kayasers}/>
      <Route path="/pages/admin/attendeeregisters" component={ AttendeeRegisters }/>
      <Route path="/pages/admin/smsnotificationscare" component={ SmsNotificationsCare }/>
      <Route path="/pages/sendfreesms/:sponsor" exact component={ SendFreeSms }/>
      
      <Route path="/pages/admin/traderscare" component={ TradersCare }/>
      <Route path="/pages/admin/kayasercare" component={ KayaserCare }/>
      <Route path="/pages/admin/attendanceregistercare" component={ RegisterCare }/>
      <Route path="/pages/admin/articlesmonitor" component={ArticlesMonitor}/>
      <Route path="/pages/admin/clientsmonitor" component={ClientsMonitor}/>
      <Route path="/pages/admin/recommendations" component={Recommendations}/>
      <Route path="/pages/register" component={RegistrationPage}/>
      <Route path="/pages/registerthroughadmin" component={AdminRegistrationPage}/>
      <Route path="/pages/registertohookup" component={HookupRegistrationPage}/>
      <Route path="/pages/recommend" component={RecommendationForm}/>
      <Route path="/pages/message" exact component={MessageForm}/>
      <Route path="/pages/message/throughrecommender/:recommender" component={MessageForm}/>
      <Route path="/pages/orderform" component={OrderForm}/>
      <Route path="/pages/messager" component={Messager}/>
      
      <Route path="/pages/devs" component={Devs}/>
      
      <Route path="/pages/followershome" exact component={FollowersHome}/>
      <Route path="/pages/following/:contact/:categoryId" exact component={FollowingComp}/>
      <Route path="" component={NotFound}/>
      
   </Switch>



        
    

    <Basenavele />

   

    </div>
    
    
  
    </BrowserRouter>
    
  );
  
}



export function Basenavele(){ 
  //setTimeout(Chmic,20000);
  const [egoSmsAccBal,setEgoSmsAccBal]=useState('')
  const [tradersTotalCredit,setTradersTotalCredit]=useState('')
  const [smsService,setSmsService]=useState('loading......')
  useEffect(()=>{
    fetch('/egoSmsAccBal').then(res=>res.json()).then(res=>{
      setEgoSmsAccBal(res.Balance)
      fetch('/tradersTotalCredit').then(res=>res.json()).then(res=>{
          setTradersTotalCredit(res.tradersTotalCredit)
      if(egoSmsAccBal>tradersTotalCredit){
        setSmsService('Up')
      }else{
        setSmsService('<span style="color:red;">Down</span>')
      }
        
            })
    
        })
       
  },[])
  

  
  return (
    <div class="basenave">
      
<div class="row">


 <div><span class="fa fa-whatsapp"> WhatsApp: 0703852178</span></div>
 <div><span class="fa fa-phone"> Telephone: 0703852178/0773367078</span></div>
 <div><span class="fa fa-envelope"> Email: kayasforyou@gmail.com</span></div>
<div><span class="fa fa-copyright"></span> Copyright 2024 KAYAS.</div>
<div>Sms service: <span dangerouslySetInnerHTML={{__html: smsService}}/></div>
<div>EgoBal {egoSmsAccBal}/{tradersTotalCredit} TTC</div>



</div>

    </div>

     
  );
}
//Array of emails

//Array of emails

export default App;



/*
<div style={{background:`url(${topNavPhotoBg})`,backgroundSize:"cover",padding:"10px",fontSize:"12px"}}>
   
   <div class="row">
    <div class="col-md-3"></div>
   <div class="col-md-6"><div style={{color:"white",textAlign:"center",fontSize:"15px"}}>{topPhotoMsg1}</div>

<div class="row" style={{fontFamily:"charm"}}><div style={{color:"white",textAlign:"center"}} class="col-3 col-md-3">
  <div>{topPhotoMsg2}</div><div style={{paddingTop:"20px"}}>{topPhotoMsg4}</div></div><div class="col-6 col-md-6" >
  <img style={{borderRadius:"500px"}} src={topPhoto} class="d-block w-100" alt="..."  /></div>
  <div style={{color:"white",textAlign:"center",paddingTop:""}} class="col-3 col-md-3"><div>{topPhotoMsg3}</div>
  <div style={{paddingTop:"20px"}}>{topPhotoMsg5}</div>
  </div>
  </div></div>

  <div class="col-md-3"></div>
   </div>

   </div>
  */
 