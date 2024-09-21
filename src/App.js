import React,{useEffect,useState,Suspense,lazy} from 'react'
import {useCookies} from 'react-cookie'
import {KyuOpinionPolls,OpinionPoll1,AcholiStudentsUnionPoll} from './pages/VoterOpinionPolls/VoterOpinionPollsHome';
import {FollowingComp} from './pages/followers/FollowersHome'
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
import {TradingHome,TradingAccount} from './pages/trading/TradingHome';

import Updates from './pages/Updates';
import './App.css';
import  './index.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { setCookieOptionsObj,AppContext,user} from './Variables';

import { ToastAlert } from './pages/Functions';

import {NotFound} from './pages/Home';


import {RegisterCare, AttendeeRegisters, SmsNotificationsCare} from './pages/admin/Controls';



const Itemsele=React.lazy(()=>import('./pages/Home'));
// const NotFound=React.lazy(()=>import('./pages/Home'));
const LoginPage=React.lazy(()=>import('./pages/LoginPage'));
const RegistrationPage=React.lazy(()=>import('./pages/RegistrationPage'));
const FollowersHome=React.lazy(()=>import('./pages/followers/FollowersHome'));
const SendMessage=React.lazy(()=>import('./pages/SendMessage'));
const MarqueeNews=React.lazy(()=>import('./pages/admin/MarqueeNews'));
const UsedItems=React.lazy(()=>import('./pages/UsedItems'));
const Messager=React.lazy(()=>import('./pages/Messager'));
const SendFreeSms=React.lazy(()=>import('./pages/SendFreeSms'));
const AllArticles=React.lazy(()=>import('./pages/pubarticles/AllArticles'));
const CreateArticle=React.lazy(()=>import('./pages/pubarticles/CreateArticle'));
const AssessMyArticles=React.lazy(()=>import('./pages/pubarticles/AssessMyArticles'));
const MyArticles=React.lazy(()=>import('./pages/pubarticles/MyArticles'));
const PubArticleComp=React.lazy(()=>import('./pages/pubarticles/PubArticleComp'));
const ShareMyArticles=React.lazy(()=>import('./pages/pubarticles/ShareMyArticles'));



const AttendanceRegister=React.lazy(()=>import('./pages/attendanceregs/AttendanceRegister'));
const CreateAttendanceRegister=React.lazy(()=>import('./pages/attendanceregs/CreateAttendanceRegister'));
const MyRegisters=React.lazy(()=>import('./pages/attendanceregs/MyRegisters'));
const SendSms=React.lazy(()=>import('./pages/attendanceregs/SendSms'));
const EditRegister=React.lazy(()=>import('./pages/attendanceregs/EditRegister'));




const ControlsHome=React.lazy(()=>import('./pages/admin/ControlsHome'));

const Kayasers=React.lazy(()=>import('./pages/admin/Kayasers'));
const Requests=React.lazy(()=>import('./pages/admin/Requests'));
const ArticlesMonitor=React.lazy(()=>import('./pages/admin/ArticlesMonitor'));
const TradersCare=React.lazy(()=>import('./pages/admin/TradersCare'));
const KayaserCare=React.lazy(()=>import('./pages/admin/KayaserCare'));
//const RegisterCare=React.lazy(()=>import('./pages/admin/Controls'));
//const AttendeeRegisters=React.lazy(()=>import('./pages/admin/Controls'));
//const SmsNotificationsCare=React.lazy(()=>import('./pages/admin/Controls'));





export function App() {

 

  
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
  setUserName('Logged in')
  setLoginButtonText('Log out')
}

    fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
      setReqNumb(res.length)
        })

    
    fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
      setKayasersNumb(res.length)
        })

    
    
    fetch('/getAllArticles').then(res=>res.json()).then(res=>{
      setArticlesNumb(res.length)
      })
      
 

   
  },[])

   return (


<div>



    <BrowserRouter >
  <Suspense fallback={
  <div class="SuspenseContainer">
      <div><span style={{fontSize:"8px"}} class="spinner-border" role="status"></span></div>
   <div>Kayas</div> 
    </div>
}> 
<div class="navigation"> 
       
       <nav  class="navbar-expand-sm navbar-light bg-black" >
    <div class="container-fluid">
     <div  class="row">
       <div class="col-12" style={{textAlign:"center"}}>
     <div class='row'>
<div style={{color:"grey",textAlign:"left",fontSize:"7px",opacity:"0.6"}} class='col-3 col-md-5'>{reqNumb}</div>
<div class='col-6 col-md-2'><img src={logo} class="d-block w-100" alt="..."  /></div>
<div style={{color:"grey",textAlign:"right",fontSize:"7px",opacity:"0.6"}} class='col-3 col-md-5'>{kayasersNumb}
</div>
</div>
     </div>
      
       </div>
       </div>
  </nav>
    
  
 <div style={{paddingLeft:"5px"}} class ="bg-dark">
 <div class="row" style={{color:"orange",padding:"6px"}}>
 <div class="col-6 col-sm-6 col-md-10" >
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<button  style={{color:"orange",fontSize:"15px"}} class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span> Menu
</button> 

<div  class="navbar-collapse justify-content-md-right collapse navB" id="navbarsExample08" >

 <ul  class="navbar-nav" style={{display:"flex",flexWrap:"wrap"}}>
 <li class="nav-item">
   <a class="hovereffect nav-link" href="/pages/about"><span class="hovereffect">Services by Kayas</span></a>
   </li>
 <li class="nav-item">
   <a class="hovereffect nav-link" href="/pages/pubarticles/allarticles"><span class="hovereffect">Trending stories ({articlesNumb})  </span></a>
   </li>
  
   <li class="nav-item">
   <a class="hovereffect nav-link"  href="/pages/pubarticles/createarticle"><span class="hovereffect">Create Article</span></a>
   </li>
   <li class="nav-item">
<a class="hovereffect nav-link" href="/pages/register"><span class="hovereffect">Register </span></a>
   </li>
   <li class="nav-item">
   <a class="hovereffect nav-link" href="/pages/attendanceregs/createattendanceregister"><span class="hovereffect">Bulk SMS</span></a>
   </li>
 
   <li class="nav-item">
   <a  class="hovereffect nav-link" href="/advertise/items/0703852178"><span class="hovereffect">Brand new items</span></a>
   </li>
 
   <li class="nav-item">
<a class="hovereffect nav-link" href="/pages/usedItems"><span class="hovereffect">Used items</span></a> 


   </li>
   
   <li class="nav-item">
<a class="hovereffect nav-link" href="/pages/followershome"><span class="hovereffect">Offline notification system</span></a> 


   </li>

   
 


   <li class="nav-item">
<a class="hovereffect nav-link" href="/pages/clientbusinesses/0703852178"><span class="hovereffect">More</span></a>
   </li>
  
 
  
   <li class="nav-item">
   <a class="hovereffect nav-link"  href="#" onClick={()=>{
 if(cookies.user===undefined){
   ToastAlert('toastAlert2','You are not logged in',3000)
   
   
   } else {
   window.location.href=`/pages/accountdetails`
   ToastAlert('toastAlert1','Openning account....',3000)
   
   } 
   

   
   }} ><span class="hovereffect">Account</span></a>
   </li>
  
   <li class="nav-item">
   <a class="hovereffect nav-link"  href="#"><span class="hovereffect">Loans</span></a> 
   </li>
   <li class="nav-item active">
   <a class="hovereffect nav-link" href="/pages/message"><span class="hovereffect">Send message</span></a>
   </li>
   <li class="nav-item">
   <a class="hovereffect nav-link" href="/pages/brocode"><span class="hovereffect">Who is Kayas?</span></a> 
   </li>

  
 
   <li class="nav-item">
   <a class="hovereffect nav-link" href="/pages/quotes"><span class="hovereffect">Quotes</span></a>
   </li>

   <li class="nav-item">
<a class="hovereffect nav-link" href="#"><span class="hovereffect">Links</span></a> 
</li>

 
   
 </ul>


</div>
</nav>
</div>
 
<div style={{textAlign:"right",paddingTop:"10px"}}  class="col-6 col-sm-6 col-md-2">
  
  <div style={{paddingRight:"10px"}} onClick={()=> {if(cookies.user===undefined){
    
     window.location.href='/pages/login'
    
    
    
    }else{
     removeCookie("user",setCookieOptionsObj)
     window.location.href="/pages/login"
     ToastAlert('toastAlert1','Logged out',3000)
    }}
    
    }>{loginButtonText}</div>
 




</div>

</div>


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
      
           
      <Route path="/pages/attendanceregs/:registrar/:id" component={AttendanceRegister}/>
      <Route path="/pages/attendanceregs/myregisters" component={ MyRegisters }/>
      <Route path="/pages/sendsmsattendanceregs/:registrarContact/:registerId" exact component={ SendSms }/>
      <Route path="/pages/attendanceregs/createattendanceregister" component={CreateAttendanceRegister}/>
      <Route path="/pages/editattendanceregs/:registrarContact/:registerId" component={ EditRegister }/>
      <Route path="/pages/pubarticles/article/:id" component={PubArticleComp}/>
      <Route path="/pages/pubarticles/createarticle" component={CreateArticle}/>
      <Route path="/pages/pubarticles/allarticles" component={AllArticles}/>
      <Route path="/pages/pubarticles/myarticles" component={MyArticles}/>
      <Route path="/pages/pubarticles/sharemyarticles/:articleAuthorContact" exact component={ShareMyArticles}/>
      <Route path="/pages/pubarticles/assessmyarticles" component={AssessMyArticles}/>
   
      
      <Route path="/pages/voteropinionpolls/kyu" exact component={KyuOpinionPolls}/>
      <Route path="/pages/voteropinionpolls/opinionpoll1" exact component={OpinionPoll1}/>
      <Route path="/pages/voteropinionpolls/acholistudentsunion" exact component={AcholiStudentsUnionPoll}/>
      
      <Route path="/pages/brocode" component={Brocode}/>
      <Route path="/pages/clientbusinesses/:recommender" exact component={ClientBusinesses}/>
      <Route path="/pages/clientbusinesses" exact component={ClientBusinesses}/>
     
      <Route path="/pages/login" exact component={LoginPage}/>
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
            
      <Route path="/pages/admin/controls" component={ControlsHome}/>
      <Route path="/pages/admin/marqueenews" exact component={MarqueeNews}/>
      
      <Route path="/pages/admin/requests" component={Requests}/>
      
      <Route path="/pages/admin/kayasers" component={Kayasers}/>
      <Route path="/pages/admin/attendeeregisters" component={ AttendeeRegisters }/>
      <Route path="/pages/admin/smsnotificationscare" component={ SmsNotificationsCare }/>
      <Route path="/pages/sendfreesms/:sponsor" exact component={ SendFreeSms }/>
      
      <Route path="/pages/admin/traderscare" component={ TradersCare }/>
      <Route path="/pages/admin/kayasercare" component={ KayaserCare }/>
      <Route path="/pages/admin/attendanceregistercare" component={ RegisterCare }/>
      <Route path="/pages/admin/articlesmonitor" component={ArticlesMonitor}/>
      
      
      <Route path="/pages/register" component={RegistrationPage}/>
      <Route path="/pages/useditems" component={UsedItems}/>
      
      
      
      <Route path="/pages/message" exact component={SendMessage}/>
      <Route path="/pages/message/throughrecommender/:recommender" component={SendMessage}/>
      
      <Route path="/pages/messager" component={Messager}/>
      
      <Route path="/pages/devs" component={Devs}/>
      
      <Route path="/pages/followershome" exact component={FollowersHome}/>
      <Route path="/pages/following/:contact/:categoryId" exact component={FollowingComp}/>
      <Route path="/" exact component={NotFound}/>
      </Switch>
     
      
      
      </Suspense>

   
    <Basenavele />
    
 
  
  
    </BrowserRouter>
    </div>
  );
  
}


export function Basenavele(){ 
  
  const [egoSmsAccBal,setEgoSmsAccBal]=useState('')
  const [tradersTotalCredit,setTradersTotalCredit]=useState('')
  const [smsService,setSmsService]=useState('loading......')
  useEffect(()=>{
    let tradersBal=0,egoBal=0;
    fetch('/egoSmsAccBal').then(res=>res.json()).then(async (res)=>{
      egoBal=res.Balance;
      setEgoSmsAccBal(parseInt(res.Balance))
      fetch('/tradersTotalCredit').then(res=>res.json()).then(res=>{
      tradersBal=res.tradersTotalCredit
          setTradersTotalCredit(parseInt(res.tradersTotalCredit))
    
      if(parseInt(egoBal) > parseInt(tradersBal)){
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
<div>EgoBal {egoSmsAccBal}/{tradersTotalCredit} TTC</div>
<div>Sms service <span dangerouslySetInnerHTML={{__html: smsService}}/></div>




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
 