

import React,{useEffect,useState,useContext,createContext, useReducer} from 'react'
import {useCookies} from 'react-cookie'
import {KyuOpinionPolls,OpinionPoll1,AcholiStudentsUnionPoll} from './pages/VoterOpinionPolls/VoterOpinionPollsHome';
import {Itemsele,NotFound,RegistrationPage,RecommendationForm,MessageForm,OrderForm,AdminRegistrationPage,HookupRegistrationPage, Messager, SendFreeSms} from './pages/Home';
import { AllArticles, CreateArticle,AssessMyArticles, MyArticles, PubArticleComp,ShareMyArticles, PubArticleCompHome } from './pages/pubarticles/PubArticleHome';
import { AttendanceRegisterComp,CreateAttendanceRegister, EditRegister, MyRegisters } from './pages/attendanceregs/AttendanceRegsHome';

import {FollowersHome,FollowingComp} from './pages/Followers'
import About from './pages/About';
import { VerifyRegistrationAndPin } from './pages/Functions';
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
import { setCookieOptionsObj,AppContext,user} from './Variables';
import { ToastAlert } from './pages/Functions';

export function App() {
  const [hookupNumb,setHookupNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [cookies,setCookie,removeCookie]=useCookies(['user'])
  const [articlesNumb,setArticlesNumb]=useState('')
  const [userName,setUserName]=useState('')
  const [loginButtonText,setLoginButtonText]=useState('')

  const [reqNumb,setReqNumb]=useState('')
  
useEffect(()=>{
  if(cookies.user===undefined){
    setUserName('Not logged in')
    setLoginButtonText('Log in')
  }else{
  setUserName(cookies.user.name)
  setLoginButtonText('Log out')
}

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
      
  //  window.addEventListener('visibilitychange',()=>{
  //   setTimeout(()=>{
  //     removeCookie("user",setCookieOptionsObj)
  //   },8000)
    
  //   ToastAlert('toastAlert2','Leaving page',3000)
  //  })

   
  },[])

   return (
    <BrowserRouter >
    <div>
    <AppContext.Provider id="App"  value={{user:cookies.user}}>
<div class="navigation"> 
       
        <nav  class="navbar-expand-sm navbar-light bg-black" >
     <div class="container-fluid">
      <div  class="row">
        <div class="col-12" style={{textAlign:"center"}}>
      <div class='row'>
<div style={{color:"grey",textAlign:"left",fontSize:"7px",opacity:"0.6"}} class='col-4 col-md-5'>{reqNumb}</div>
<div class='col-4 col-md-2'><img src={logo} class="d-block w-100" alt="..."  /></div>
<div style={{color:"grey",textAlign:"right",fontSize:"7px",opacity:"0.6"}} class='col-4 col-md-5'>{kayasersNumb}
</div>
</div>
      </div>
       <div style={{textAlign:"center",paddingBottom:"5px",fontSize:"11px",color:"white"}}>Always Keep It Kayas</div>
        </div>
        </div>
   </nav>
     
   
  <div style={{paddingLeft:"5px"}} class ="bg-dark">
  <div class="row" style={{color:"orange",padding:"6px"}}><div class="col-9">{userName}</div><div style={{textAlign:"center"}} class="col-3" onClick={()=>{
if(cookies.user===undefined){
  let contact=window.prompt('Enter your contact'),pin;
if(contact===null){;}else{
pin=window.prompt('Enter your PIN')
if(pin===null){;}else{

  VerifyRegistrationAndPin(contact.trim(),pin.trim()).then(resp=>{

if(resp.registered===false){
  ToastAlert('toastAlert2','Not registered. Tap menu to register',3000)
}else

    if(resp.pin===false){
      
      ToastAlert('toastAlert2','Incorrect PIN',3000)
    }else{
      let user={name:resp.details.name,contact:resp.details.contact,role:'user'}
      setCookie('user',user,setCookieOptionsObj)
    ToastAlert('toastAlert1','Logged in',3000)

    }
  })

  
}
}




}else{
  removeCookie("user",setCookieOptionsObj)
  ToastAlert('toastAlert1','Logged out',3000)
}



}}>{loginButtonText}</div></div>
  <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">

<button  style={{color:"yellow"}} class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span> Menu
</button> 

<div class="navbar-collapse justify-content-md-left collapse" id="navbarsExample08" >
  <ul style={{display:"flex",flexWrap:"wrap"}} class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" href="/pages/pubarticles/allarticles"><span class="hovereffect">Trending stories ({articlesNumb})  </span></a>
    </li>
   
    <li class="nav-item">
    <a class="nav-link"  href="/pages/pubarticles/createarticle"><span class="hovereffect">Create Article</span></a>
    </li>
    <li class="nav-item">
<a class="nav-link" href="/pages/register"><span class="hovereffect">Register </span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/pages/attendanceregs/createattendanceregister"><span class="hovereffect">Bulk SMS/Fast phone calls</span></a>
    </li>
  <li class="nav-item active">
    <a class="nav-link" href="/pages/message"><span class="hovereffect">Send message</span></a>
    </li>
    <li class="nav-item">
    <a  class="nav-link" href="/advertise/items/0703852178"><span class="hovereffect">Buy items</span></a>
    </li>
  
   
    
    <li class="nav-item">
<a class="nav-link" href="/pages/followershome"><span class="hovereffect">Get urgent information when offline</span></a> 


    </li>


    <li class="nav-item">



    </li>


    <li class="nav-item">
<a class="nav-link" href="/pages/clientbusinesses/0703852178"><span class="hovereffect">More</span></a>
    </li>
   
  
   
    <li class="nav-item">
    <a class="nav-link"  href="#" onClick={()=>{
  if(cookies.user===undefined){
    ToastAlert('toastAlert2','You are not logged in',3000)
    
    
    } else {
    window.location.href=`/pages/accountdetails`
    ToastAlert('toastAlert1','Openning account....',3000)
    
    } 
    

    
    }} ><span class="hovereffect">Account</span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/pages/about"><span class="hovereffect">About</span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link"  href="/advertise/client1/0703852178"><span class="hovereffect">Loans</span></a> 
    </li>
    <li class="nav-item">
    <a class="nav-link" href="/pages/brocode"><span class="hovereffect">Who is Kayas?</span></a> 
    </li>

   
  
    <li class="nav-item">
    <a class="nav-link" href="/pages/quotes"><span class="hovereffect">Quotes</span></a>
    </li>
   

    
    <li class="nav-item">
<a class="nav-link" href="/pages/hookup/hookuphome"><span class="hovereffect">{hookupNumb} Hookups</span></a>

    </li>
    <li class="nav-item">
<a class="nav-link" href="#"><span class="hovereffect">Links</span></a> 
</li>

  
    
  </ul>
</div>
</nav>

  </div>

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
      <Route path="/pages/accountdetails" exact component={TradingAccount}/>
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
    </AppContext.Provider>
 </div>
  
  
    </BrowserRouter>
    
  );
  
}



export function Basenavele(){ 
  
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
 