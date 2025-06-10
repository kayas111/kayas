
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails } from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'

export function MakePayment(){
    const [cookies]=useCookies(['user'])
    let [ticket,setTicket]=useState('')
    let [ticketDetails,setTicketDetails]=useState('')
    let [searchStatus,setSearchStatus]=useState('')
    let [payStatus,setPayStatus]=useState('')
    let [searchSuccessful,setSearchSuccessful]=useState(false)
    let paymentDetails={}
  

 if(IsLoggedIn(cookies)==true){

        return(
        
        <div style={{padding:"5px"}}>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="label">Make payment</div>
            <div class="description">Pay for a service or ticket. Enter the ID, search and pay</div><p></p>
    
            <form  method="post" id="makePaymentForm" action="#">
          
            <div class="formInputLabel">Enter ticket/service ID (name of ticket) and search for it</div>
          <input type="text" name='ticketId' class="form-control" autoComplete="off" /><p></p>
          
          
          
    
    
    <div class="status">{searchStatus}</div>
    
          <div  class="button1"
          
          onClick={()=>{
            let form=document.getElementById('makePaymentForm'),ticketId=form.ticketId.value.trim()
            
            if(Array.from(ticketId).length<1){
    
        
                ToastAlert('toastAlert2','Enter a ticket Id',3000)
            } else{
                setSearchStatus('Please wait...')
            Post('/getTicketDetails',{ticketId:ticketId}).then(resp=>{
                
                if(resp.length==0){
                    setSearchStatus('Ticket/service ID does not exist')
                }else{
                    setSearchStatus('')
    let ticketDetails=resp
    setTicketDetails(resp[0])
    setTicket(ticketDetails.map((ticket)=>(
    <div>
    
    <div>
    <div style={{fontSize:"20px",fontWeight:"600"}}>{ticket.ticketId}</div>
    <div style={{fontSize:"14px"}}>Amount: {ticket.amount +' shs'}</div>
    <div style={{fontSize:"14px"}}>Tickets left: {ticket.noOfTickets - ticket.payments.length}</div>
    <div style={{fontSize:"14px"}}>Contact: 0{ticket.ticketOwner}</div>
    </div>
    
    </div>
    )))
    setSearchSuccessful(true)
    
                }
    
    
            })
            }
            
           
    
    
    
          }}
          >Search</div>
                            
                 <div style={{paddingTop:"10px",paddingBottom:"3px"}}> {ticket} </div>
    <p></p>
    <div class="formInputLabel">Create a payment secret code or word (You will be asked for this secret to confirm your payment)</div>
                 <input type="text" name='paymentSecretCode' class="form-control" autoComplete="off" /><p></p>
    <div class="status">{payStatus}</div>
           <div   class=" button1"
           onClick={()=>{
         
                
            let form=document.getElementById('makePaymentForm'),paymentSecretCode=form.paymentSecretCode.value.trim()
            if(searchSuccessful===false){
                ToastAlert('toastAlert2','Search before making a payment',3000)
            }else{
    setPayStatus('Please wait......')
    paymentDetails.ticketId=ticketDetails.ticketId
    paymentDetails.amount=ticketDetails.amount
    paymentDetails.name=cookies.user.name
    paymentDetails.paymentApproved=false
    paymentDetails.paymentSettled=false
    paymentDetails.contact=cookies.user.contact
    if(Array.from(paymentSecretCode).length<3){
        ToastAlert('toastAlert2','Create a payment secret code of atleast 3 characters',4000)
    }else{
        paymentDetails.paymentSecretCode=paymentSecretCode
        
        GetTradingDetails(cookies.user.contact).then(traderDetails=>{
            
            // if(traderDetails.accBal<paymentDetails.amount){
    
            //     setPayStatus('Kayas account balance is low. Tap menu and deposit to your Kayas account')
            // }else{
    
            //     setPayStatus('Paying........')
            //     Post('/payForTicket',paymentDetails).then(resp=>{
            //         setPayStatus(resp.msg)
            //     })
    
            // }
            setPayStatus('Paying........')
            Post('/payForTicket',paymentDetails).then(resp=>{
                setPayStatus(resp.msg)
            })


        })
    }
            }
           
            
           }}
           
           >Pay now</div><p></p>
          
           </form>
    
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

export default MakePayment