import React, {useEffect,useState} from 'react'
import { ConvertFileToBase64,ReadFileAsArrayBuffer } from '../Functions';
import {Itemsele,Alert,Alert2,FreeRegistrationForm} from '../Home';
import user from '../imgs/user.jpg'
import hookup1 from '../imgs/hookup1.jpg'
import hookup2 from '../imgs/hookup2.jpg'
import { Anchor } from '../Home';


export function HookUpHome(){
  
      
 

return(

  <div>
      
   
        
<HookUpNav/>
       <div style={{color:"grey",padding:"5px"}}>
        
       <div class="row"> 
       <div class="col-md-3"></div>
     <div class="col-md-6">  Connect with a friend basing on similar hobbies, your required qualities, religious interests, etc from various universities. It's called hooking up!
       
       <p></p>Write about yourself for example your hobbies, likes and dislikes, how best you can be defined, how you love to spend your leisure times, etc and it will be seen by many who scroll through your description looking for a match of interest.
       <p></p></div>


<div class="col-md-3"></div>
<div class="col-md-3"></div>
       <div style={{paddingBottom:"20px"}}class="col-md-6"> 
       
              <img src={hookup1} class=" d-block w-100" alt="Loading an image here...."  />
       
</div>
<div class="col-md-3"></div>





</div>

       </div>
       
    
  </div>
);
}

export function CreateHookupProfile(){
const [status,setStatus]=useState('')
const [hookupStatus,setHookupStatus]=useState('')


const [profileImg, setProfileImg] = useState();
    function handleChange(e) {
      console.log(e.target);
        console.log(e.target.files[0]);
        console.log(URL)
        
    }


return(<div>

<HookUpNav/>

<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
<div style={{padding:"20px"}}>  
    
    <form action="/saveHookupProfile" method="post" enctype="multipart/form-data" id="createHookupProfileForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Write about your self</div></div>
    <div class="mb-3">
      <div><img class="d-block w-100" src={profileImg} /></div>
    <div>Choose an image file</div>
    <input type="file" class="form-control" onChange={()=>{
      setProfileImg(URL.createObjectURL(document.getElementById("createHookupProfileForm").img.files[0]))
    }} autoComplete="off" placeholder="Choose a profile image" name="img"></input>
  <br></br>
  <textArea rows="7"type="text"class="form-control" autoComplete="off" name="msg" placeholder='Describe yourself, hobbies, likes or dislikes, etc in not more than 50 words and in not less than 20 words' ></textArea>
  <br></br>
  <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Your WhatsApp Contact e.g 0703852178'></input>
  <br></br>
  
  
    <input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter your PIN e.g 12345' ></input>
    </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:status}}/>
    
    <div style={{borderRadius:"18px"}} type="text" class="btn btn-success hovereffect" onClick={ async (event)=>{
      //console.log(URL.createObjectURL(document.getElementById("createHookupProfileForm").img.files[0]))
     // setFile(URL.createObjectURL(document.getElementById("createHookupProfileForm").img.files[0]))
   
/*
     let file=document.getElementById("createHookupProfileForm").img.files[0]
    
 
     let convertedFile=await ReadFileAsArrayBuffer(file).then(resp=>{
       return resp
      })
     
      let sizeOfChunkInBytes=8000,noOfChunks, arrayBuffer=convertedFile.result
     
      noOfChunks=arrayBuffer.byteLength/sizeOfChunkInBytes
     
      let uint8Array=new Uint8Array(arrayBuffer)
     console.log(`${arrayBuffer.byteLength} bytes`)
      console.log(`${noOfChunks} chunks` )
     
      console.log(uint8Array)
     
     for(let chunk=0;chunk<noOfChunks+1;chunk++){
       let Chunk=uint8Array.slice(chunk*sizeOfChunkInBytes,(chunk+1)*sizeOfChunkInBytes)
     console.log(Chunk)


       fetch('/saveHookupProfile',{ 
         method:"post",
         headers:{'Content-type':'application/octet-stream'},
         body:Chunk
       }).then(res=>res.json()).then(resp=>{
         window.location.href='/hookups'
       })
          
     
     }
     
     */





  if(Array.from(document.getElementById("createHookupProfileForm").msg.value.trim()).length<10||Array.from(document.getElementById("createHookupProfileForm").msg.value.trim()).length>600){
  
    setStatus(`<span style='color:red;'>Please write about yourself with aleast more than 10 words and not more than 300 words ......</span>`)
  }
else if(Array.from(document.getElementById("createHookupProfileForm").contact.value).length<10||Array.from(document.getElementById("createHookupProfileForm").contact.value).length>10){

  setStatus(`<span style='color:red;'>Please enter a correct contact......</span>`)
}
else  if(Array.from(document.getElementById("createHookupProfileForm").pin.value).length<5||Array.from(document.getElementById("createHookupProfileForm").pin.value).length>5){

  setStatus(`<span style='color:red;'>Please enter 5 digits as the PIN......</span>`)
}
else{
  
 setStatus("<div style='color:green;'>Creating your profile, <span style='color:red;'>please wait ......</span></div>") 
 

 fetch('/verifyUser',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({
contact:document.getElementById("createHookupProfileForm").contact.value,
pin:document.getElementById("createHookupProfileForm").pin.value,
     }) 
 }).then(res=>res.json()).then(async (resp)=>{
    
     if(resp.registered===false){
     
         setStatus("<div style='color:red;'>You are not registered with Kayas, please scroll down and register with Kayas then begin writing articles</div>")
     }
      else{
         if(resp.registered===true&&resp.pin===false){
        
             setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
 
         }else{
         // URL.createObjectURL(e.target.files[0]);
       //   document.getElementById("createHookupProfileForm").submit()   
       
       
         setStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please wait ......</div>`)
       
        
        



 //console.log(new Uint8Array(convertedFile.result))

 let data={
  name:resp.details.name,
  campus:resp.details.institution,
  contact:resp.details.contact,
  msg:document.getElementById("createHookupProfileForm").msg.value.trim(),
  imgObj:{img:'hey'}
  
}





/*
  fetch('/saveHookupProfile',{
    method:"post",
    headers:{'Content-type':'application/octet-stream'},
    body:convertedFile.result
  }).then(res=>res.json()).then(resp=>{
    window.location.href='/hookups'
  })
     
    */





 



 

}
         
       
     }
    
 }
     

 )
}



   }}><span class="fa fa-envelope"></span> Submit.</div>



   
    </form></div>
  

</div>
<div class="col-md-3"></div>

</div>
  

</div>)
}




export function HookupProfiles(){

 
  const [hookUpsNumb,setHookUpsNumb]=useState('')
  const [sample,setsample]=useState('')
  const [HookupProfiles,setHookupProfiles]=useState('')
 
      useEffect(()=>{
        
           
      fetch('/collection_hookups_hookups').then(res=>res.json()).then(res=>{

        res.reverse()
      console.log(res)
      setsample(res[0].imgObj.img)
        setHookupProfiles(res.map((hookUpProfileObj)=>{
            return (<div>
              <div>{hookUpProfileObj.name}</div>
              <div><img class='d-block w=100' src={hookUpProfileObj.imgObj.img}/></div>
              
            </div>)
          }))









                        })     

      },[])


      



  return(
   <div>
    
    <HookUpNav/>
     <div style={{padding:"10px"}}>
     <div>{HookupProfiles}</div>


    </div>
   </div>
  )
}




export function HookUpNav(){
  const [hookupNumb,setHookupNumb]=useState('')

  useEffect(()=>{
 
let data=""
  fetch('/collection_hookups_number').then(res=>res.json()).then(res=>{
    setHookupNumb(res.length)
  })
  
    })
 
  return(
    <div>
    
    <div style={{color:"red",textAlign:"center",paddingBottom:"15px"}}>
      <span style={{fontSize:"23px"}}>{hookupNumb} hookups available</span>
      </div>

      <div class="row" style={{}}>
        <div class="col-6 " style={{textAlign:"center"}}> <a href="#"> <span  style={{color:"green", borderRadius:"15px",border:"1px solid green",padding:"5px"}}> <span class="hovereffect"> <span class="fa fa-eye"></span> View hookups</span></span></a> </div>
        <div class="col-6 " style={{textAlign:"center"}}> <a href="/pages/hookup/createprofile"> <span  style={{color:"green",borderRadius:"15px",border:"1px solid green",padding:"5px"}}> <span class="hovereffect"> <span class="fa fa-edit"></span> Describe yourself</span></span></a> </div>
      </div>
      <p></p>
     </div>

  )
}

export default HookUpHome