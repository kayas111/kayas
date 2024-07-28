import React, {useEffect,useState} from 'react'
import ControlsNav from './Controls'
export function Kayasers(){
  let data=""
  
  const [kayasers,setKayasers]=useState('')
 
      useEffect(()=>{
      
                   fetch('/collection_kayasers_kayasers').then(res=>res.json()).then(res=>{
                      res.reverse()
                      res.forEach(kayaser=>{
                     
                        data+=`<div class='col-md-4'><div>${kayaser.name}</div><div>Tel: ${kayaser.contact}, std No. ${kayaser.stdNo}</div><div>Institution: ${kayaser.institution}</div><div>Email: ${kayaser.email}</div><hr></hr></div>`
                      
                      })
                      
                      setKayasers(data);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Kayasers</div>
  
       <ControlsNav/>
       <div style={{padding:"20px",fontSize:"15px"}}><div class='row' dangerouslySetInnerHTML={{__html:kayasers}}/></div>


  
  </div>
);
}
export default Kayasers