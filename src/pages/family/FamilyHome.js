import React, {useEffect,useState} from 'react'
import {FamilyDetailsNav} from '../Home';
import family1 from '../imgs/family1.jpg'
import family2 from '../imgs/family2.jpg'


export function FamilyHome(){
 return(

  <div>
      <p></p>
  <div style={{fontSize:"30px",color:"red",textAlign:"center"}}>The Kayas Family</div><p></p>
  <FamilyDetailsNav/>
  <div style={{color:"grey",padding:"5px"}}>Register with Kayas with a registration fee. Recommend a child   and you will become the parent of that child. Go and see your family details and you will be able to see your child and see if he or she is registered or not and also be able to see your account balance. Once your child registers with Kayas, you receive 9,000/= on your account. You will keep receiving 9,000/= for every child that you recommend and successfully registers with Kayas. 
<p></p>Once your child also gets a child, the child of your child becomes your grand child and you receive 1,000/= on your account once your grand child registers with Kayas. This means for all your grand children, you will always receive 1,000/= on your account and therefore the more the children you have, the more your grand children will be and your account balance will be directly proportional to the number of memebers in your family lineage. 
<p></p><span style={{fontSize:"20px",fontWeight:"bold"}}>For any inquiries, whatsapp Kayas on 0703852178.</span>
  </div>
 <div class="row">

<div class=" col-md-6">  <img src={family1} class=" d-block w-100" alt="..."  /></div>
<div class=" col-md-6"> <div style={{color:"grey",padding:"4px"}}>Having a child is when a student is registered under your names. Every transaction that the student makes with Kayas will get you paid because you are the parent.<p></p>To add a child, tap the button below and you will be directed to a new page containing a Recommendation Form and use it to add a child <span><a  style={{color:"red",paddingRight:"9px"}} href="/pages/recommend"><span class="hovereffect2">  Add a Child <span class="fa fa-user"></span></span></a></span></div> </div>
<p></p>
<div class=" col-md-6">  <img src={family2} class=" d-block w-100" alt="..."  /></div>
<div class=" col-md-6"> <div style={{color:"grey",padding:"4px"}}>You can always see the students you have recommended to Kayas and also see whether they have registered with Kayas or not. <p></p>To see your children, tap the button below and you will be directed to a new page. You will need to enter your contact and pass code incase you registered with Kayas then you will see your children. <span><a  style={{color:"red",paddingRight:"9px"}} href="/pages/family/familydetails"><span class="hovereffect2">  See your children <span class="fa fa-users"></span></span></a></span></div> </div>
<p></p>


 </div>
 
  
   

  </div>
);
}


export function FamilyDetails(){
       const [status,setStatus]=useState('')
      const [name,setName]=useState('')
      const [parent,setParent]=useState('')
      const [registrationPromoBalance,setRegistrationPromoBalance]=useState('')
      const [children,setChildren]=useState('')

  
return(

 <div >
     <p></p>
 <div style={{fontSize:"30px",color:"red",textAlign:"center"}}>Your Family Details</div><p></p>
 <FamilyDetailsNav/>
   <p></p>
   <div style={{textAlign:"center",color:"grey",padding:"3px"}}>To view your details i.e. your parent and children, fill in the Form below: <br></br></div>
      <p></p>
   
  
     
      <div class="row" style={{padding:"5px"}}>  
      <div style={{padding:"30px"}}>  
   <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>GET YOUR FAMILY DETAILS</div>
  
   
   <br></br><form method="post" id="form"action="">
   <div class="mb-3">
 
   <input type="text" class="form-control" autoComplete="off"  id="contact" placeholder='Your WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
 <br></br>

 
 
   <input type="text" class="form-control" autoComplete="off" id="pin" placeholder='Enter Your PIN' maxLength={5} minLength={5} required></input>
   </div>
   <div style={{color:"red"}}>{status}</div>
   <div><span type="submit" 
onClick={()=>{
 setStatus("Please wait .......")
      let data="" 
      let url='/collection_recommendations_familyDetails/'+document.getElementById("contact").value+'/'+document.getElementById("pin").value
      fetch(url).then(res=>res.json()).then(res=>{
if(res.length===3){

     

      res[2].forEach(child=>{
  
             data+='<div>'+child+"</div><hr></hr>"
           
           })
      


           setName(res[1].name)
           setRegistrationPromoBalance(res[1].registrationPromoBalance)
           setParent(res[0])
           setStatus("Done. Please go down and see your children. Take note of children who haven't registered and ask them to also register because you will be missing out on earning from their transactions.")

     setChildren('<div style="font-size:20px;font-weight:bold;">Your Children Are '+res[2].length+'</div><p></p>'+data)
}else{


      setName(res[0])
      setParent(res[0])
     setChildren(res[0])
     setRegistrationPromoBalance(res[0])
     setStatus(res[0])

     
}



           
               })


   }} style={{borderRadius:"18px"}} class="btn btn-success hovereffect"> Get Details</span> <p></p> <div style={{fontSize:"12px",color:"green",textAlign:"left"}}>To add a child, you need to use a Recommendation Form. Tap here below:</div><a href="/pages/recommend"><span style={{borderRadius:"18px"}} class="btn btn-success hovereffect"> Add Child/Recommend</span></a></div>
   </form></div>
      
       </div>
       <div style={{color:"green",padding:"8px",textAlign:"center"}}>
   Name: {name}<br></br>
   Parent: {parent}<br></br>
   Your balance: {registrationPromoBalance}<br></br>
 <div style={{textAlign:"left",padding:"10px",fontSize:"15px",fontFamily:"charm",textAlign:"center"}}><div dangerouslySetInnerHTML={{__html:children}}/></div> 

   </div>
     
 

 </div>
);
}

export function FamilyGroup(){
   const[status,setStatus]=useState('')

  
return(

 <div >
     <p></p>
 <div style={{fontSize:"25px",color:"red",textAlign:"center",padding:"3px"}}>Kayas Family WhatsApp Group</div><p></p>
 <FamilyDetailsNav/>
  
   
     
  
     
      <div class="row" style={{padding:"5px"}}>  
      <div class="col-md-3" style={{color:"grey"}}><p></p>The Kayas Family WhatsApp group is a group that unites all registered Kayasers who have interest in family trading and it offers a platfrom for consultation, quick updates as well as united guidance from other family members.</div>
     <div class="col-md-6"> <div style={{padding:"30px"}}>  
   <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>JOIN WHATSAPP GROUP</div>
  
   
   <br></br><form method="post" action="/joinFamilyGroup">
   <div class="mb-3">
 
   <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Your WhatsApp Contact e.g 0703852178' maxLength={10} minLength={10} required></input>
 <br></br>

 
 
   <input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter Your PIN' maxLength={5} minLength={5} required></input>
   </div>
   
   <div class="row">

   <div class="col-6" ><div style={{color:"red"}}>{status}</div>
       <button onClick={

       ()=>{
              setStatus("Please wait ......... Incase it takes longer, then your device has a poor network connection.")
       }
   } type="submit" style={{borderRadius:"18px"}} class="btn btn-success hovereffect"><span class="fa fa-whatsapp"></span> Continue</button></div>
  <div class="col-6"  style={{padding:"6px"}}><a href="https://kayas-mak.herokuapp.com/pages/services" ><label style={{color:"green"}}><span class="hovereffect"><span class="fa fa-user"></span> REGISTER</span></label></a></div>
   
   
   </div>
 
   
   <div style={{fontSize:"12px",color:"green",textAlign:"left"}}>Thank you for Keeping It Kayas. Always Keep it Kayas</div>
   </form></div></div>
      
       </div>
     
 <KyuTopStories/>

 </div>
);
}










export default FamilyHome



