
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails } from '../Functions';
import {LoginPage} from '../LoginPage'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {useCookies} from 'react-cookie'

export function ApprovePayment(){
    const [cookies]=useCookies(['user'])
    let [ticketId,setTicketId]=useState('')
    let [status,setStatus]=useState('')
   let params=useParams()
    
    useEffect(()=>{
        
    Post('/getTicketDetails',{ticketId:params.ticketId}).then(resp=>{
        
       if(resp.length==0){
setTicketId( <div style={{paddingTop:"70px",paddingBottom:"70px"}}>
<div class="divContainer1">
<div class="divContainer1Inner">

    <div style={{textAlign:"center"}}>This ticket does not exist</div>
    
</div>
</div>

</div>)

       }else{
    
        setTicketId( <div style={{paddingTop:"10px",paddingBottom:"30px"}}>
        
       <div id="ticketId" style={{textAlign:"center", background:"orange",padding:"3px",color:"black",fontSize:"15px"}}>{resp[0].ticketId}</div>
            <p></p>
      
        <input type="text" id="paymentSecretCode" class="form-control" placeholder='Enter payment secret code' autoComplete='off' />
       
        </div>)

       }
    })
    },[])

 if(IsLoggedIn(cookies)==true){

        return(
        
        <div style={{padding:"5px"}}>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="label">Approve a payment</div>
            <div class="description">Verify whether a ticket was paid for</div>
    
          <div>{ticketId}</div>
  
 <div class="status">{status}</div>
    <div style={{textAlign:"center"}}>
        <div class="btn btn-success btn-sm"
                    onClick={()=>{
                        
                        let paymentSecretCode=document.getElementById("paymentSecretCode").value.trim()
                        if(Array.from(paymentSecretCode).length<1){
                            ToastAlert('toastAlert2','Enter a payment secret code to verify',3000)
                        }else{
                            setStatus('Please wait........')
let payLoad={ticketId:document.getElementById('ticketId').innerText.trim(),paymentSecretCode:paymentSecretCode}

Post('/approveticketpayment',payLoad).then(resp=>{
  
    setStatus(resp.msg)
})
                        }
                    }}
                    
                    >Verify & approve</div>
                    </div>
   
    <div style={{textAlign:"center",paddingTop:"20px"}}><a href="/pages/payments/paymentshomepage">
                    <div class="btn btn-success btn-sm">Back to menu</div></a></div>
    
        </div>
        <div class="col-md-3"></div>
    </div>
        </div>)

 }else{
return (
    <div>
        <LoginPage/>
    </div>
)
 }





}

export default ApprovePayment