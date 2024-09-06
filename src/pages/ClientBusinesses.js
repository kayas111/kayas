import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, {useEffect,useState} from 'react'
import { BusinessClientAdComponent,SetKayasAndKayasUrlDetails,Items,ContactCapture } from './Home.js'
import isaac2 from './imgs/isaac2.jpg'
import kahu2 from './imgs/kahu2.jpg'
import client4img1 from './imgs/client4img1.jpg'
import client4img2 from './imgs/client4img2.jpg'
import client4img3 from './imgs/client4img3.jpg'
import client4img4 from './imgs/client4img4.jpg'
import client4img5 from './imgs/client4img5.jpg'
import client4img6 from './imgs/client4img6.jpg'
import client4img7 from './imgs/client4img7.jpg'
import client4img8 from './imgs/client4img8.jpg'
import client4img9 from './imgs/client4img9.jpg'
import client4img10 from './imgs/client4img10.jpg'
import client4img11 from './imgs/client4img11.jpg'
import client4img12 from './imgs/client4img12.jpg'
import client4img13 from './imgs/client4img13.jpg'
import client4img14 from './imgs/client4img14.jpg'
import client4img15 from './imgs/client4img15.jpg'
import client4img16 from './imgs/client4img16.jpg'
import client4img17 from './imgs/client4img17.jpg'
import client4img18 from './imgs/client4img18.jpg'
import client4img19 from './imgs/client4img19.jpg'
import client4img20 from './imgs/client4img20.jpg'
import client4img21 from './imgs/client4img21.jpg'
import client4img22 from './imgs/client4img22.jpg'
import client5img1 from './imgs/client5img1.jpg'
import client5img2 from './imgs/client5img2.jpg'
import client5img3 from './imgs/client5img3.jpg'
import client5img4 from './imgs/client5img4.jpg'
import client5img5 from './imgs/client5img5.jpg'
import client5img6 from './imgs/client5img6.jpg'
import client5img7 from './imgs/client5img7.jpg'
import client5img8 from './imgs/client5img8.jpg'
import client6img1 from './imgs/client6img1.jpg'
import client6img2 from './imgs/client6img2.jpg'
import client6img3 from './imgs/client6img3.jpg'
import client6img4 from './imgs/client6img4.jpg'
import client6img5 from './imgs/client6img5.jpg'
import client6img6 from './imgs/client6img6.jpg'
import client6img7 from './imgs/client6img7.jpg'
import client6img8 from './imgs/client6img8.jpg'
import client6img9 from './imgs/client6img9.jpg'
import client6img10 from './imgs/client6img10.jpg'
import client6img11 from './imgs/client6img11.jpg'
import client6img12 from './imgs/client6img12.jpg'
import client6img13 from './imgs/client6img13.jpg'
import client6img14 from './imgs/client6img14.jpg'
import client6img15 from './imgs/client6img15.jpg'
import client6img16 from './imgs/client6img16.jpg'
import client6img17 from './imgs/client6img17.jpg'
import client6img18 from './imgs/client6img18.jpg'
import client6img19 from './imgs/client6img19.jpg'
import client6img20 from './imgs/client6img20.jpg'
import client6img21 from './imgs/client6img21.jpg'
import client6img22 from './imgs/client6img22.jpg'
import client6img23 from './imgs/client6img23.jpg'
import client6img24 from './imgs/client6img24.jpg'
import client6img25 from './imgs/client6img25.jpg'
import client6img26 from './imgs/client6img26.jpg'
import client6img27 from './imgs/client6img27.jpg'
import client6img28 from './imgs/client6img28.jpg'
import client6img29 from './imgs/client6img29.jpg'
import client7img1 from './imgs/client7img1.jpg'
import client9img1 from './imgs/client9img1.jpg'
import client9img2 from './imgs/client9img2.jpg'
import client9img3 from './imgs/client9img3.jpg'
import client9img4 from './imgs/client9img4.jpg'
import client9img5 from './imgs/client9img5.jpg'
import client9img6 from './imgs/client9img6.jpg'
import client9img7 from './imgs/client9img7.jpg'
import client9img8 from './imgs/client9img8.jpg'
import client9img9 from './imgs/client9img9.jpg'
import client9img10 from './imgs/client9img10.jpg'
import client9img11 from './imgs/client9img11.jpg'
import client9img12 from './imgs/client9img12.jpg'
import client9img13 from './imgs/client9img13.jpg'
import client9img14 from './imgs/client9img14.jpg'
import client9img15 from './imgs/client9img15.jpg'
import client9img16 from './imgs/client9img16.jpg'
import client9img17 from './imgs/client9img17.jpg'
import client9img18 from './imgs/client9img18.jpg'
import client9img19 from './imgs/client9img19.jpg'
import client9img20 from './imgs/client9img20.jpg'
import client9img21 from './imgs/client9img21.jpg'
import client9img22 from './imgs/client9img22.jpg'
import client9img23 from './imgs/client9img23.jpg'
import client9img24 from './imgs/client9img24.jpg'
import client9img25 from './imgs/client9img25.jpg'
import client9img26 from './imgs/client9img26.jpg'
import client9img27 from './imgs/client9img27.jpg'
import client9img28 from './imgs/client9img28.jpg'
import client9img29 from './imgs/client9img29.jpg'
import client9img30 from './imgs/client9img30.jpg'
import client9img31 from './imgs/client9img31.jpg'
import client9img32 from './imgs/client9img32.jpg'
import client9img33 from './imgs/client9img33.jpg'
import client9img34 from './imgs/client9img34.jpg'
import client9img35 from './imgs/client9img35.jpg'
import client9img36 from './imgs/client9img36.jpg'
import client9img37 from './imgs/client9img37.jpg'
import client9img38 from './imgs/client9img38.jpg'
import client9img39 from './imgs/client9img39.jpg'
import client10img1 from './imgs/client10img1.jpeg'
import client10img2 from './imgs/client10img2.webp'
import client10img3 from './imgs/client10img3.jpeg'
import client10img4 from './imgs/client10img4.jpeg'
import client10img5 from './imgs/client10img5.jpeg'
import client10img6 from './imgs/client10img6.jpeg'
import client10img7 from './imgs/client10img7.jpeg'
import client10img8 from './imgs/client10img8.jpeg'
import client10img9 from './imgs/client10img9.jpeg'
import client10img10 from './imgs/client10img10.jpeg'
import client10img11 from './imgs/client10img11.jpeg'
import client10img12 from './imgs/client10img12.jpeg'
import client10img13 from './imgs/client10img13.jpeg'
import client10img14 from './imgs/client10img14.jpeg'
import client10img15 from './imgs/client10img15.jpeg'
import client11img1 from './imgs/client11img1.jpg'

import client11img3 from './imgs/client11img3.jpg'
import client11img4 from './imgs/client11img4.jpg'
import client11img5 from './imgs/client11img5.jpg'
import client11img6 from './imgs/client11img6.jpg'
import client11img7 from './imgs/client11img7.jpg'
import client11img8 from './imgs/client11img8.jpg'
import client11img9 from './imgs/client11img9.jpg'
import client11img10 from './imgs/client11img10.jpg'
import client11img11 from './imgs/client11img11.jpg'
import client11img12 from './imgs/client11img12.jpg'
import client11img13 from './imgs/client11img13.jpg'
import client11img14 from './imgs/client11img14.jpg'
import client11img15 from './imgs/client11img15.jpg'
import client11img16 from './imgs/client11img16.jpg'
import client11img17 from './imgs/client11img17.jpg'
import client11img18 from './imgs/client11img18.jpg'
import client11img19 from './imgs/client11img19.jpg'
import client11img20 from './imgs/client11img20.jpg'
import client11img21 from './imgs/client11img21.jpg'
import client11img22 from './imgs/client11img22.jpg'
import client11img23 from './imgs/client11img23.jpg'
import client12img1 from './imgs/client12img1.jpg'
import client12img2 from './imgs/client12img2.jpg'
import client12img3 from './imgs/client12img3.jpg'
import client12img4 from './imgs/client12img4.jpg'
import client12img5 from './imgs/client12img5.jpg'
import client12img6 from './imgs/client12img6.jpg'
import client12img7 from './imgs/client12img7.jpg'
import client12img8 from './imgs/client12img8.jpg'
import client12img9 from './imgs/client12img9.jpg'
import client12img10 from './imgs/client12img10.jpg'
import client12img11 from './imgs/client12img11.jpg'





  export function Client1(){
 return(<div>
<BusinessClientAdComponent businessName="Don't sleep hungry loans" id='client1'/>
<div style={{padding:"5px"}}>
<div style={{color:"green",fontSize:"15px"}}>5,000/= interest per 2 months</div>
    The maximum loan amount is 20,000/= at a fixed interest of 5,000/= per 2 months.
    <p></p>The maximum advisable/recommended time for staying with the loan is one month, after which you are penalized for defaulting/delaying to pay back.<p></p>
    You get a suspension from receiving a loan when you default/delay paying back. The suspension is equal to the period you spend defaulting the loan. For example if you do not pay within one month after you have received the loan, time is counted from when the month elapsed till when you pay back. That time elapsed is equal to your suspension period.<p></p>
    This means you can not get a loan during your suspension period. 

<div style={{paddingTop:"30px"}} class="row">
<div class="col-6 col-md-3"> <img src={isaac2} class="d-block w-100" alt="..."  /></div>
<div class="col-6 col-md-3">Nothing hurts and is most challenging just like sleeping hungry! Do not think twice or thrice, come save your self! #Isaac</div>
<p></p><div class="col-6 col-md-3"><img src={kahu2} class="d-block w-100" alt="..."  /></div>
<div class="col-6 col-md-3"> Do not think twice or thrice literally means do not think more than once! Come save your self! #Charles</div>

</div>
   
    
    </div>
    <ClientBusinesses/>
    </div>)
}
export function Client2(){
    return(<div>
   <BusinessClientAdComponent businessName="Briefs about hostels for Campus" id='client2'/>
   <div style={{padding:"5px",textAlign:"justify"}}>
   <div style={{color:"red",fontSize:"25px"}}>How much are hostels?</div>
       This is a common question amongst vaccists currently who are joining campus. Below is I, by names of Isaac Opio a.k.a Kayas, a student at Makerere University as well. I have stayed in hostel and I will be giving a brief about hostel on a very small note.<p></p>

   
   <div style={{paddingTop:"30px"}} class="row">
   <div class="col-6 col-md-3"> <img src={isaac2} class="d-block w-100" alt="..."  /></div>
   <div class="col-6 col-md-3">I am Isaac Opio, a student at Makerere University and I will be offering you a hostel tour session.<p></p>Let's keep it Kayas</div>
  
   </div>
   <p></p>The only answer that answers the question 'How much are hostels at campus?' is; hostels can cost from as low as 500,000 shillings per semester to as high as 2 million shillings per semester. A semester is usually 4 months and this means the amount you choose to pay is for 4 months staying in hostel. The fee caters for both power and electricity bills inclusive.
       <p></p>Why hostels differ in prices is because they also differ in the quality and number of services they offer. Majority of us imagine a hostel room as just a basic plain room and that's all, which is very correct. How about you think of a room that has a wardrope for you to organize your clothes? How about you think of a room that has a persoanlized/private balcony outside that you could use for your cooking conviniences and any other issues? How about a room that is really extremely spacious than the ordinary room you had in mind? How about a room that has another room with a bathroom and toilet inside such that you do not have to use external wash rooms?  <span style={{color:"red"}}>That is why hostel prices differ!</span>
       <p></p>Most hostels are doubles which means you stay two people in the room and each one pays the hostel fee individually. <span style={{color:"red"}}>There is no cost sharing in hostels</span>
       <p></p>Some hostels offer single rooms; these are rooms that only one person stays in. Staying in a room alone definitely offers you more personal privacy and this also affects the price you would pay for it. It is definitely a little more than that paid for staying in a double room.
       <p></p><div style={{color:"red",fontSize:"25px"}}>Hostel tour sessions!</div>
       I do offer hostel tour sessions to those joining especially Makerere University because it is where I reside and am more reliable incase of anything. For those joining MUBS I do have to make an appointment and make a 15 minutes travel for anything.
       <p></p>The purpose of the hostel tour is to walk you around various hostels in Makerere such that you have a look at various rooms and hostel looks so that you are able to make a choice according to your interests. The tour session is at a <span style={{color:"red"}}>cost of 30,000 shillings per student. To make an appointment or more inquiries, use the yellow "Send message" button at the top to submit your message and you will be contacted.</span> 
       <p></p>Booking of hostels is already on going and majority of them were being booked by the continuing students and also those that got admitted on government. <span style={{color:"red"}}>The advice is; if you want to be able to make a selection too before the rooms that you may wish for are taken, please schedule an appointment and make your tour as well. Use the yellow "Send message" button at the top to send a message and you will only be contacted by Kayas.</span> 
       
       </div>
       <ClientBusinesses/>
          </div>)
   }
   export function Client3(){
    return(<div>
   <BusinessClientAdComponent businessName="Makerere year 1 students needing hostels" id='client3'/>
   <div style={{padding:"5px",textAlign:"justify"}}>
   <div style={{color:"red",fontSize:"20px"}}>Read carefully!</div>
     Incase you need to secure your appointment, <span style={{color:"red"}}>use the yellow "Send message" button above to send your message.</span><p></p>
     This informmation is to those who got admitted to Makerere Univeristy and do not want to stay in the halls of residence and opt for a hostel. Below is Isaac, a student at Makerere university who offers hostel tour sessions where he tours you around various hostels so that you can have a look at the hostles, their rooms and evaluate the kind of services and quality they offer for you. 
   
   <div style={{paddingTop:"30px"}} class="row">
   <div class="col-6 col-md-3"> <img src={isaac2} class="d-block w-100" alt="..."  /></div>
   <div class="col-6 col-md-3">The hostel tour session is at a <span style={{color:"red"}}>fee of 30,000/= per person</span> and this involves walking around the various available hostels and inquiring for the rooms left.</div>
 </div>
      <p></p>
   Booking of hostels is already on going and majority of them were being booked by the continuing students and also those that got admitted on government. <span style={{color:"red"}}>The advice is; if you want to be able to make a selection too before the rooms that you may wish for are taken, please schedule an appointment and make your tour as well. Use the yellow "Send message" button at the top to send a message and you will only be contacted by Kayas.</span> 
       </div>
       <ClientBusinesses/>
       </div>)
   }  

   export function Client4(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    return(<div>
   <BusinessClientAdComponent businessName="Dress your arm-Kayas watches" id='client4'/>
 <div class="itemse">
       <div>
        
       </div>
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
           
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img1} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img2} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img3} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img4} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img5} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img9} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img11} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img12} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img13} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img14} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img16} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img17} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img18} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img19} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img20} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img21} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Rolex" des="Nice for both men and women" price="150,000/=" img={client4img22} url={kayasurl} contact={kayas} /></div>
            
            
            </div>
           
        </div>
        <ClientBusinesses/>
       </div>)
   }  

   export function Client5(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    return(<div>
   <BusinessClientAdComponent businessName="Affordable Laptops. Brand new & used" id='client5'/>
 <div class="itemse">
       <div>
        
       </div>
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
           
            <div class={v}><Items id="Hp elite book 840g2" des="core i5,5th gen,4GB ram,500GB HDD" price="950,000/=" img={client5img1} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Dell latitude 3340" des="core i5,4th gen,4GB ram,500GB HDD" price="900,000/=" img={client5img4} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Hp elite book 840g2" des="core i5,5th gen,8GB ram,256GB SSD" price="1,130,000/=" img={client5img2} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Dell latitude 3340" des="core i3,4th gen,4GB ram,500GB HDD" price="850,000/=" img={client5img5} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Hp elite book 840g3" des="core i7,6th gen,8GB ram,256GB SSD and 500GB SSD" price="1,200,000/=" img={client5img3} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Lenovo thinkpad" des="Intel celeron, 4GG ram, 500GB HDD" price="800,000/=" img={client5img7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Dell latitude" des="Intel celeron,4th gen,4GB ram,500GB HDD" price="800,000/=" img={client5img6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="hp" des="core i5,6th gen,8GB ram,256GB SSD" price="800,000/=" img={client5img8} url={kayasurl} contact={kayas} /></div>
            </div>
           
        </div>
   <ClientBusinesses/>
       </div>)
   }  


   export function Client6(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    return(<div>
   <BusinessClientAdComponent businessName="Ladies' bags-Don't miss out" id='client6'/>
 <div class="itemse">
       <div>
        
       </div>
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img23} url={kayasurl} contact={kayas} /></div>
           
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img1} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img25} url={kayasurl} contact={kayas} /></div>
         
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img2} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img3} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img24} url={kayasurl} contact={kayas} /></div>
           
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img4} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img5} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img26} url={kayasurl} contact={kayas} /></div>
            

            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img9} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img27} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img28} url={kayasurl} contact={kayas} /></div>
          
           
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img11} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img12} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img13} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img14} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img29} url={kayasurl} contact={kayas} /></div>
         
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="65,000/=" img={client6img15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="65,000/=" img={client6img16} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="70,000/=" img={client6img17} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="55,000/=" img={client6img18} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="55,000/=" img={client6img19} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="55,000/=" img={client6img20} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="55,000/=" img={client6img21} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="ladies' bag" des="Look nice and beautiful with it" price="35,000/=" img={client6img22} url={kayasurl} contact={kayas} /></div>

           
            </div>
                   </div>
   <ClientBusinesses/>
       </div>)
   }  

   export function Client7(){
    return(<div>
   <BusinessClientAdComponent businessName="Anything you need? We deliver!" id='client7'/>
   <div style={{padding:"5px",textAlign:"justify"}}>
   <div style={{color:"green",fontSize:"20px"}}>We find it and deliver to you.</div>    
    Let us know of what you need/your shopping list and we have it handled for you. Use the yellow button at the top to send the list of items you want to shop!
      
   <div style={{paddingTop:"30px"}} class="row">
   <div class="col-7 col-md-3"> <img src={client7img1} class="d-block w-100" alt="..."  /></div>
   <div style={{textAlign:"left"}} class="col-12 col-md-3"><ul>
    <li>Any item delivered to your location.</li>
    <li>Send any item to any location.</li>
    <li>Use the yellow button at the top to send your message/order</li>
   
    </ul></div>


   
   </div>
      
       
       </div><p></p>
       <ClientBusinesses/>
       </div>)
   }

 export function Client8(){
    return(<div>
   <BusinessClientAdComponent businessName="Creating your bank account for campus!" id='client8'/>
   <div style={{padding:"5px",textAlign:"justify"}}>
   <div style={{color:"green",fontSize:"20px"}}>Requirements:</div>    
   As Kayas we go ahead to extend our services for you to create a student's account even without physically posessing your national ID.<p></p>Our service only requires a fee of either 10,000/= for digitized accounts i.e. without the physical ATM card or 25,000/= with an ATM card given to you instanly. Below are the requirements;
      
   <div style={{paddingTop:"30px"}} class="row">
   <div style={{textAlign:"left"}} class="col-12 col-md-3"><ul>
    <li>A NIRA verification/confirmation letter posessing your NIN.</li>
    <li>Copy of your school ID</li>
    <li>2 passport size photos.</li>
    <li>Use the yellow button at the top to send us a message to get started. We will contact you.</li>
    <li style={{color:"red"}}>You will also be taught to use an ATM/Banking system incase you do not know.</li>
   
    </ul></div>


   
   </div>
      
       
       </div><p></p>
       <ClientBusinesses/>
       </div>)
   }

   export function Client9(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    return(<div>
   <BusinessClientAdComponent businessName="Just at 40,000/= Grab your self two or three of these!" id='client9'/>
 <div class="itemse">
       <div>
        
       </div>
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img11} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img1} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img2} url={kayasurl} contact={kayas} /></div>
             <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img5} url={kayasurl} contact={kayas} /></div>
             <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="35,000/=" img={client9img20} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="35,000/=" img={client9img21} url={kayasurl} contact={kayas} /></div>
           
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img7} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img22} url={kayasurl} contact={kayas} /></div>
            
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img9} url={kayasurl} contact={kayas} /></div>
          <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="39,000/=" img={client9img12} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img13} url={kayasurl} contact={kayas} /></div>
          
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img14} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img16} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img17} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img18} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img19} url={kayasurl} contact={kayas} /></div>
           <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img23} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img24} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img25} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img26} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img27} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img28} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img29} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img30} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img31} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img32} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="39,000/=" img={client9img33} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img34} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img35} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img36} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img37} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="40,000/=" img={client9img38} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="38,000/=" img={client9img39} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="36,000/=" img={client9img3} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Foot wear" des="Durable and comfortable" price="37,000/=" img={client9img4} url={kayasurl} contact={kayas} /></div>
           
        </div>
           
        </div>
   <ClientBusinesses/>
       </div>)
   }  

   export function Client10(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    return(<div>
   <BusinessClientAdComponent businessName="Beautiful and fluffy for your bed!" id='client10'/>
 <div class="itemse">
       <div>
        
       </div>
       <div style={{ color:"red", fontWeight:"bold",textAlign:"center"}}><marquee>All orders should be made through the website but not through any other contact. Tap the green button below any item to send a message to Kayas</marquee></div>
            <div class="row">
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img1} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img7} url={kayasurl} contact={kayas} /></div>
            
            
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img8} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img15} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img2} url={kayasurl} contact={kayas} /></div>
           
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img3} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img4} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img5} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img6} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img9} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img10} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img11} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img12} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img13} url={kayasurl} contact={kayas} /></div>
            <div class={v}><Items id="Cushion for your bed or seat" des="Attractive, beautiful and comfortable for your bed or seat" price="30,000/=" img={client10img14} url={kayasurl} contact={kayas} /></div>
         
        </div>
           
        </div>
   <ClientBusinesses/>
       </div>)
   }  

   export function Client11(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    function Activity(props){
return(<div style={{paddingTop:"50px",padding:"15px"}} >
  <div class="row" style={{border:"1px solid grey",borderRadius:"10px",padding:"5px"}}>
  <div class='col-md-3'></div>
 <div stlyle={{padding:"5px"}} class='col-md-6'>
  <div style={{textAlign:"center",fontSize:"20px"}}>{props.activity}</div>
  <div style={{textAlign:"",fontSize:"11px",color:"red"}}>All these activities, transport to and fro, breakfast, goat roasting, sleeping tents and everything cost 55,000/=</div>
  <div style={{textAlign:""}}>{props.activityDescription}</div><p></p>
  <div class='row'>
<div ><ContactCapture recommender={recommender} buttonLabel="Join team to go" reason="Kasenge 2 days camp" class='btn btn-success' style={{borderRadius:"20px"}}/></div>
<div  style={{borderBottom:"1px solid grey",padding:"5px",paddingTop:"5px"}}><span >2 days, 1 night at 55,000/= </span></div>

  </div>
  
<div>{props.code}</div></div>
  <div class='col-md-3'></div>
  </div>

</div>)
    }
    return(<div>
   <BusinessClientAdComponent businessName="University students' deal!" id='client11'/>
<div style={{padding:"5px"}}>

  <div style={{textAlign:"center",color:"green",fontSize:"25px"}}>Forest Resort Beach Kasenge
  <div style={{color:"red",fontSize:"15px"}}><span>Join us for 2 days & 1 night @ 55,000/= on 7th October, 2023</span></div>
  </div>
  <p></p><p></p>
  <Activity recommender={recommender} activity="Zip Lining" activityDescription="Swing over water and gain the exciting experience. Have a feel of what it means" code={
 <div>
   <p></p>
   <img src={client11img19} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>

<Activity recommender={recommender} activity="Boat ride" activityDescription="Sail over the waters in a team of your collegues in turns" code={
 <div>
   <p></p>
   <img src={client11img21} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>


<Activity recommender={recommender} activity="Camping tents" activityDescription="Have tents that you can stay in individually or as a couple" code={
 <div>
   <p></p>
   <img src={client11img3} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img4} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img15} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>
<Activity recommender={recommender} activity="Forest trekking" activityDescription="Traverse through the exciting forests from all levels of altitudes" code={
 <div>
   <p></p>
   <img src={client11img5} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img1} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img7} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img18} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img8} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img9} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img12} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img14} class=" d-block w-100" alt="..." /><p></p>
   
   <img src={client11img16} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img17} class=" d-block w-100" alt="..." /><p></p>
   
   
  </div>
}/>

<Activity recommender={recommender} activity="Goat roasting" activityDescription="Full/whole goat roasting moments in teams. Come learn to roast or come to eat" code={
 <div>
   <p></p>
   <img src={client11img10} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>

<Activity recommender={recommender} activity="Night Fire camps" activityDescription="Story telling and happy moments during the night fire camps" code={
 <div>
   <p></p>
   <img src={client11img13} class=" d-block w-100" alt="..." /><p></p>
   <img src={client11img6} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>

<Activity recommender={recommender} activity="Personal/private moments" activityDescription="Have private time sessions as well to think out about personal matters." code={
 <div>
   <p></p>
   <img src={client11img11} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>
<Activity recommender={recommender} activity="Deejay music sessions" activityDescription="Enjoy camp fires along side deejay mixing with the latest trending songs" code={
 <div>
   <p></p>
     
   <img src={client11img20} class=" d-block w-100" alt="..." /><p></p>
   

   
  </div>
}/>

<Activity recommender={recommender} activity="Transport to and from the venue" activityDescription="Transport is also part of the 55,000/= that you pay and you will be picked and travel together with all other students going for the fun camp. You will also be brought back using the same costers" code={
 <div>
   <p></p>
   <img src={client11img22} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>

<Activity recommender={recommender} activity="Discounts for the trip" activityDescription="This trip also has a discount offer where you could actually pay 30,000/= to go. Tap the green button labelled join team to go to get started on the discount offer" code={
 <div>
   <p></p>
   <img src={client11img23} class=" d-block w-100" alt="..." /><p></p>
   
  </div>
}/>
</div>
   <ClientBusinesses/>
       </div>)
   }  

   export function Client12(){
    let componentParams=useParams()
   let recommender=componentParams.recommender
  const [kayasurl,setKayasurl]=useState('')
   const [kayas,setKayas]=useState('Please wait....')
  useEffect(async ()=>{
   let result=await SetKayasAndKayasUrlDetails(recommender)
   
   setKayasurl(result.kayasurl)
   setKayas(await fetch('/collection_controls').then(res=>res.json()).then(resp=>{
  return resp[0].kayas 
    }))
  
  
  },[])
    let v= "col-6 col-sm-6 col-md-3 bod";
    function Activity(props){
return(<div style={{paddingTop:"50px",padding:"15px"}} >
  <div class="row" style={{border:"1px solid grey",borderRadius:"10px",padding:"5px"}}>
  <div class='col-md-3'></div>
 <div stlyle={{padding:"5px"}} class='col-md-6'>
  <div style={{textAlign:"center",fontSize:"20px"}}>{props.activity}</div>
  <div style={{textAlign:"",fontSize:"11px",color:"red",textAlign:"center"}}>Free transport to and fro for students every Saturday</div>
  <div style={{textAlign:"center"}}>{props.activityDescription}</div><p></p>
  <div class='row'>
<div ><ContactCapture recommender={recommender} buttonLabel="Book transport/inquire" reason="Bluemoon lounge" class='btn btn-success btn-sm' style={{borderRadius:"20px"}}/></div>
<div  style={{borderBottom:"1px solid grey",padding:"5px",paddingTop:"5px"}}><span > </span></div>

  </div>
  
<div>{props.code}</div></div>
  <div class='col-md-3'></div>
  </div>

</div>)
    }
    return(<div>
   <BusinessClientAdComponent businessName="Bluemoon students' Lounge" id='client12'/>
<div style={{padding:"5px"}}>

  <div style={{textAlign:"center",color:"green",fontSize:"25px"}}>Bluemoon Students' Lounge
  <div style={{color:"red",fontSize:"15px"}}><span>Free transport to and from the venue for every Staturday</span></div>
  </div>
  <p></p><p></p>
  



<Activity recommender={recommender} activity="Photos of the venue" activityDescription="Beautiful spacious venue to favour all categories of people." code={
 <div>
   <p></p>
   <img src={client12img1} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img2} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img3} class=" d-block w-100" alt="..." /><p></p>
   

   
  </div>
}/>



<Activity recommender={recommender} activity="Drinks" activityDescription="Students are offered affordable drinks. Water, beers, soda all available. Beers at a cost of 6,000/= per bottle" code={
 <div>
   <p></p>
   <img src={client12img9} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img4} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img6} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img10} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img5} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img8} class=" d-block w-100" alt="..." /><p></p>
   <img src={client12img7} class=" d-block w-100" alt="..." /><p></p>
   
   
   
   
   
  </div>
}/>


<Activity recommender={recommender} activity="Transport" activityDescription="Students are transported as a team. Get safe transport as a student free of charge to and from the venue" code={
 <div>
   <p></p>
   
   <img src={client12img11} class="d-block w-100" alt="..." /><p></p>
   <img src={client11img22} class="d-block w-100" alt="..." /><p></p>
   
   
   
   
  </div>
}/>
<Activity recommender={recommender} activity="How to book transport" activityDescription="Click any of the green buttons, enter your contact and you are done. You will be contacted there after" code={
 <div>
   <p></p>
   
   
   
   
   
  </div>
}/>

</div>
   <ClientBusinesses/>
       </div>)
   }  





   export function ClientBusinesses(props){
    let componentParams=useParams()
    //<div class={v}><ClientBusinessAnchor id='client12'  businessName="Bluemoon students' lounge. Free transportation for students" description1="See photos of place here" description2="Enjoyment is usually periodic" recommender={componentParams.recommender}/></div> 
   // <div class={v}><ClientBusinessAnchor id='client8'  businessName="Open your bank account for campus" description1="Secure and instanly faster" description2="As Kayas, we serve you, we deliver!" recommender={componentParams.recommender}/></div>  
//<div class={v}><ClientBusinessAnchor id='client1'  businessName="Don't sleep hungry loans" description1="Acquire soft loan at fixed interest of 5,000/=" description2="Maximum 20,000 UGX per person" recommender={componentParams.recommender}/></div>  
   
//<div class={v}><ClientBusinessAnchor id='client2'  businessName="Brief on hostels" description1="A brief about differences in hostel prices" description2="Tour session fee 30,000 UGX per person" recommender={componentParams.recommender}/></div> 
//<div class={v}><ClientBusinessAnchor id='client3'  businessName="Makerere freshers/year one students opting for hostels" description1="An opportunity for you to see hostels first!" description2="Tour session fee 30,000 UGX per person" recommender={componentParams.recommender}/></div> 

   let v="col-md-4"
  return(<div class='row' style={{padding:"5px"}}>
        <div class="blackBgOrangeColor">More services</div>
      <div class={v}><ClientBusinessAnchor id='client5'  businessName="Laptops-nice Brand new and cheaper 2nd hand (used)" description1="Perfectly working and in good looking condition" description2="700,000 UGX-4,000,000 UGX" recommender={componentParams.recommender}/></div> 
      <div class={v}><ClientBusinessAnchor id='client6'  businessName="Ladies' bags" description1="Look nice and beautiful in them" description2="Extremely affordable and necessary" recommender={componentParams.recommender}/></div>  
      <div class={v}><ClientBusinessAnchor id='client9'  businessName="Foot wear at 40,000/= Grab your self two or three of these!" description1="Durable and comfortable to wear" description2="Smartness is key" recommender={componentParams.recommender}/></div>  
      
     
      <div class={v}><ClientBusinessAnchor id='client10'  businessName="Fluffy pillows-attractive, beautiful for your bed or seat!" description1="Elegant cushions" description2="Beauty attracts beauty" recommender={componentParams.recommender}/></div>  
      
    </div>)
}
export function ClientBusinessAnchor(props){

    return(<div style={{padding:"3px",borderRadius:"2px",background:"white",border:'0px solid green' }}> 
    <div style={{color:"black",border:"0.5px solid orange",padding:"3px"}} onClick={()=>{
      window.location.href=`/advertise/${props.id}/${props.recommender}`
    }}>
    <span class="hoverEffectUnderline">
    <div style={{color:"black",fontSize:"15px",fontWeight:"600"}}>{props.businessName}</div>
      <div style={{color:"grey",fontSize:"12px"}}>{props.description1}</div>
      <div style={{fontSize:"12px",color:"grey"}}>{props.description2}</div>

    </span>
    </div>
    </div>)


  }



export default ClientBusinesses