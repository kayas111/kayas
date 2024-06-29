import React, {useEffect,useState} from 'react'
import {Itemsele,FamilyDetailsNav} from '../Home';




export function FamilyDetails(){
        const [status,setStatus]=useState('')
       const [name,setName]=useState('')
       const [parent,setParent]=useState('')
       const [registrationPromoBalance,setRegistrationPromoBalance]=useState('')
       const [children,setChildren]=useState('')

   
       
       
    


return(

  <div >
      <p></p>
  <div style={{fontSize:"30px",color:"red",textAlign:"center"}}>Your Family Details.</div><p></p>
  <FamilyDetailsNavs/>
    <p></p>
    <div style={{textAlign:"center",color:"grey",padding:"3px"}}>To view your details i.e. your parent and children, fill in the Form below: <br></br></div>
       <p></p>
    <div style={{color:"green",padding:"8px",textAlign:"center"}}>
    Name: {name}<br></br>
    Parent: {parent}<br></br>
    Your balance: {registrationPromoBalance}<br></br>
  <div style={{textAlign:"left",padding:"10px",fontSize:"15px",fontFamily:"charm",textAlign:"center"}}><div dangerouslySetInnerHTML={{__html:children}}/></div> 

    </div>

  
      
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
            setParent(res[0])
            setRegistrationPromoBalance(res[1].registrationPromoBalance)
            setStatus("Successful. Please go up and see your children. Take not of children who havent registered  because you will be missing out on earning from their transactions.")

      setChildren('<div style="font-size:20px;font-weight:bold;">Your Children Are '+res[2].length+'</div><p></p>'+data)
}else{


       setName(res[0])
       setParent(res[0])
      setChildren(res[0])
      setStatus(res[0])

      
}



            
                })


    }} style={{borderRadius:"18px"}} class="btn btn-success hovereffect"> Get Details</span> <p></p> <div style={{fontSize:"12px",color:"green",textAlign:"left"}}>To add a child, you need to use the Recommendation Form found below the Registration Form</div><a href="https://kayas-mak.herokuapp.com/pages/services"><span style={{borderRadius:"18px"}} class="btn btn-success hovereffect"> Add Child/Recommend</span></a></div>
    </form></div>
       
        </div>
      
  <Itemsele />

  </div>
);
}





export default FamilyDetails