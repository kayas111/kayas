
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post } from '../Functions';
import {useCookies} from 'react-cookie'
import {LoginPage} from '../LoginPage'
export function CreateTicket(){
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
let [status,setStatus]=useState(''), ticketServiceFee=500


if(IsLoggedIn(cookies)==true){
    
    return(
    
        <div style={{padding:"5px"}}>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="label">Create tickets/service</div>
            <div class="description">Create tickets/service that people will pay for or buy</div>
    
            <div style={{textAlign:"center",paddingTop:"20px"}}><a href="/pages/payments/paymentshomepage">
                    <div class="button1">Back to menu</div></a></div>
    
    <p></p>
            <form  method="post" id="createTicketForm" action="#">
          
            <div class="formInputLabel">Create ticket/service ID (unique word or phrase to identify your tickets/service)</div>
          <input type="text" class="form-control" name='ticketId' autoComplete="off" /><p></p>
          <div class="formInputLabel">Number of tickets to be created</div>
          <input type="text" class="form-control" name='noOfTickets' autoComplete="off" /><p></p>
          
            <div class="formInputLabel">Amount to be paid for each ticket</div>
            <div style={{padding:"2px",color:"green",fontSize:"12px"}}>{ticketServiceFee} shs will  automatically be added as a service charge for every ticket</div>
          <input type="text"  name='amount' class="form-control" autoComplete="off" /><p></p>
          <div class="status">{status}</div>
    
          <div   class="button1"  onClick={()=>{
            
            let form=document.getElementById('createTicketForm'), 
            ticketId=form.ticketId.value.trim(), 
            amount = form.amount.value.trim(),
            noOfTickets = form.noOfTickets.value.trim()
if(Array.from(ticketId).length<1){

    
    ToastAlert('toastAlert2','Enter a ticket Id',3000)
}

else if(Array.from(ticketId).includes("'")){
    ToastAlert('toastAlert2',"Do not use apostrophes when creating a ticket ID",3000)
} 

else if(Array.from(noOfTickets).includes(',')){
    
    ToastAlert('toastAlert2','Enter number of tickets without commas',3000)
}  else if((noOfTickets>0)===false) {
    ToastAlert('toastAlert2','Enter number of tickets greater than 0',3000)  
}

else if(Array.from(amount).includes(',')){
    ToastAlert('toastAlert2','Enter an amount without commas',3000)
}  else if((amount>0)===false) {
    ToastAlert('toastAlert2','Enter an amount greater than 0',3000)  
}
else {
setStatus('Please wait......')
   let payLoad={
ticketId:ticketId,
amount:parseInt(amount)+ticketServiceFee,
noOfTickets:parseInt(noOfTickets),
ticketOwner:cookies.user.contact,
payments:[]

   }
 
   Post('/createTicket',payLoad).then(resp=>{
        setStatus(resp.msg)
    })
}
        
          }}>Create</div><p></p>
          
           </form>
    
           
        </div>
        <div class="col-md-3"></div>
    </div>
        </div>)
}else{
    return(<div>
        <LoginPage/>
    </div>)
}

}

export default CreateTicket