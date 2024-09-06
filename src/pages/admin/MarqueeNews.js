import { ToastAlert } from "../Functions"
import axios from 'axios'
import React, {useEffect,useState} from 'react';
import ControlsNav from "./Controls";
export function MarqueeNews(){
    const [marqueeNews,setMarqueeNews]=useState('')

    useEffect(()=>{
         
       fetch('/getMarqueeNews').then(resp=>resp.json()).then(resp=>{
     resp.reverse()
        setMarqueeNews(resp.map(marqueeNews=>{
            return(<div class="col-md-3"> 
                
            <div>
            
            <div class="row">
<div  class="col-8"><div style={{padding:"5px"}} >{marqueeNews.msg} </div></div>
<div class="col-4">  <div  style={{padding:"5px"}} class="button1"
             onClick={()=>{
                let payLoad={id:marqueeNews._id}
                
                ToastAlert('toastAlert1','Deleting.....',3000)
                axios.post('/deleteMarqueeNews',payLoad).then(resp=>{
                    ToastAlert('toastAlert1','Deleted',3000)
                })
             }}
             >Delete</div></div>
            </div>
           

            </div>
            
            
            
            </div>)
          }))
          



       })
        
        },[])
      
    return (
        <div>
            <ControlsNav/>
        <div style={{textAlign:"center",padding:"20px"}}> 
            
          
        <form method="post" id='postNewsMarqueeForm' >
            <div style={{paddingBottom:"8px"}}><div class="formLabel">Post news marquee</div></div>
        <div class="mb-3">
        
        <textarea rows="3"type="text" class="form-control" autoComplete="off" name="msg" placeholder='Enter message'   ></textarea>
        <br></br>
       
      
          
        </div>
       
        
            
        <div onClick={()=>{
let msg=document.getElementById('postNewsMarqueeForm').msg.value.trim()

       if(Array.from(msg).length<1){
        
           ToastAlert('toastAlert2','Enter message',2000)
           
                     }
         
         else{
          ToastAlert('toastAlert1','Please wait.....',3000)
        let payLoad={msg:msg}
axios.post('/postNewsMarquee',payLoad).then(resp=>{
      
      document.getElementById('postNewsMarqueeForm').msg.value=''
      ToastAlert('toastAlert1','Successful',3000)

    })
        

         }
         }} class="button1">Post marquee</div><p></p>
       
        </form>
            
            
        </div>
               
        <div class="row" style={{paddingRight:"10px",paddingLeft:"10px"}}>{marqueeNews}</div>

  </div>
    
    
    )
}

export default MarqueeNews