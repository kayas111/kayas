import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { IsLoggedIn, ToastAlert } from "../Functions"
import QtoolNav from "./QtoolNav"
import queueimg from '../imgs/queueimg.jpg'

export function QtoolHome(){
    const [selectedOption, setSelectedOption] = useState('')
    const [cookies]=useCookies(['user'])
    const [status, setStatus]=useState('')
    let style={padding:"5px"}
    const [tellers, setTellers] = useState('')
    useEffect(()=>{
      fetch('/queuetooltellers').then(resp=>resp.json()).then(resp=>{
       let arrayOfTellers=resp

        if(arrayOfTellers.length===0){
            setStatus('No tellers available')
        }else{
            
            setTellers(arrayOfTellers.map(teller=>{return(
                <option value={teller.tellerNumber}>{teller.tellerNumber}. {teller.serviceType}</option>
              )}))
        }
      })
        
        },[])
    return(<div style={{padding:"5px"}} class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <QtoolNav/>
            <div class="pageLabel">Centenary bank queue</div>
            <div class="label1">Select service type and join the queue</div><p></p>
            <div ><img class="d-block w-100" src={queueimg} alt="img loading"></img></div>
            <p></p>
            <form method="post" id="joinQueueForm">
    <div class="formLabel">Join queue</div><p></p>
    <div class="mb-3">

<div>
<div style={{textAlign:"center"}} ><select
     
     onChange={(event)=>{
         setSelectedOption(event.target.value)
     }}
   >
     {/* <option value="">Select service type</option>
     <option value={1} >1. Cash deposit</option>
     <option value={2}>2. Fees payment</option>
     <option value={3}>3. Account openning</option> */}
      <option value="">Select service type</option>
  {tellers}
   </select></div>


</div>
       </div>
     <div style={{fontSize:"14px",textAlign:"center",color:"orange",fontWeight:"600"}} dangerouslySetInnerHTML={{__html:status}}/>
    

    <div style={{padding:"5px"}} class="row">
<div class="col-6" style={style}><div onClick={
     ()=>{
        
      if(IsLoggedIn(cookies)===true){
        
        if(Array.from(selectedOption.trim()).length<1){
 
            ToastAlert('toastAlert2','Select service type before joining a queue',5000)
            
            
            }
  
 else{
 
 
    setStatus('Joining queue........')
 let payLoad={method:'joinQueue',contact:cookies.user.contact,serviceType:parseInt(selectedOption.trim())}
 
    fetch('/queueMethods',{
     method:"post",
     headers:{'Content-type':'application/json'},
     body:JSON.stringify(payLoad) 
 }).then(res=>res.json()).then(resp=>{
  setStatus(resp.msg)
 })
 
 
 
 }
      }else{;}
     } 

    } class="button1"><span class="fa fa-plus"></span> Join queue</div>
</div>
<div class="col-6" style={style}><div onClick={
     ()=>{
        
      if(IsLoggedIn(cookies)===true){
            
        setStatus('Leaving queue........')
        let payLoad={method:'leaveQueue',contact:cookies.user.contact,serviceType:parseInt(selectedOption.trim())}
        
           fetch('/queueMethods',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(payLoad) 
        }).then(res=>res.json()).then(resp=>{
         setStatus(resp.msg)
        })
        
      }else{;}
     } 

    } class="button1"><span class="fa fa-minus"></span> Leave queue</div>
</div>

    </div>
    <div onClick={
     ()=>{
        
      if(IsLoggedIn(cookies)===true){

 
 
        setStatus('Checking your position........')



        let payLoad={method:'checkPosition',contact:cookies.user.contact}
        
           fetch('/queueMethods',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(payLoad) 
        }).then(res=>res.json()).then(resp=>{
         setStatus(resp.msg)
        })
        
        
        
        
      }else{;}
     } 

    } class="button1"><span class="fa fa-user"></span> Check your position in the queue</div>

    </form>
        </div>
        <div class="col-md-3"></div>

        </div>)
}

export default QtoolHome