import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { ToastAlert } from "../Functions"
import QtoolNav from "./QtoolNav"
import tellerimg from '../imgs/tellerimg.jpg'

export function RequestForClient(){
    const [selectedOption, setSelectedOption] = useState('')
    const [tellers, setTellers] = useState('')

 const [cookies]=useCookies(['user'])
    const [status, setStatus]=useState('')
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
            <div class="pageLabel">Centenary bank teller</div>
            <div class="label1">Select your teller and request for a client</div><p></p>
            <div ><img class="d-block w-100" src={tellerimg} alt="img loading"></img></div>
            <p></p>
            <form method="post" id="joinQueueForm">
    <div class="formLabel">Request for client</div><p></p>
    <div class="mb-3">

<div>
<div style={{textAlign:"center"}} ><select
     
     onChange={(event)=>{
         setSelectedOption(event.target.value)
     }}
   >
     <option value="">Select your teller</option>
     {/* <option value={1} >Teller 1</option>
     <option value={2}>Teller 2</option>
     <option value={3}>Teller 3</option> */}
     {tellers}
  
   </select></div>


</div>
       </div>
     <div style={{fontSize:"14px",textAlign:"center",color:"orange",fontWeight:"600"}} dangerouslySetInnerHTML={{__html:status}}/>
    

    <div onClick={
     ()=>{
        
     
      if(Array.from(selectedOption.trim()).length<1){
 
        ToastAlert('toastAlert2','Select your teller',3000)
        
        
        }else{
          
 
      setStatus('Requesting.......')
      let payLoad={method:'requestForClient',serviceType:parseInt(selectedOption)}
     
         fetch('/queueMethods',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(payLoad) 
      }).then(res=>res.json()).then(resp=>{
       setStatus(resp.msg)
      })
      
      
      
        }
 
      
    
     } 

    } class="button1"><span class="fa fa-user"></span> Request for client</div>

    </form>
        </div>
        <div class="col-md-3"></div>

        </div>)
}

export default RequestForClient