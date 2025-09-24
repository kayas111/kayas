
import React, {useEffect,useState} from 'react'
import { ToastAlert,IsLoggedIn, Post, GetTradingDetails } from '../Functions';
import {LoginPage} from '../LoginPage'
import {useCookies} from 'react-cookie'
import { PaymentsNav } from './PaymentsNav';

export function MyPayments(){
    const [cookies]=useCookies(['user'])
    let [myPayments,setMyPayments]=useState('')
    
 

 if(IsLoggedIn(cookies)==true){
    Post('/getMyPayments',{contact:cookies.user.contact}).then(resp=>{
        
        if(resp.length==0){
            setMyPayments(
                <div style={{paddingTop:"70px",paddingBottom:"150px"}}>
                    <div class="divContainer1">
                    <div class="divContainer1Inner">

                        <div style={{textAlign:"center"}}>You havent made any payments</div>
                        
                    </div>
                </div>
               
                </div>
            )
        }else{
let paymentDetails=resp.reverse()

          setMyPayments( paymentDetails.map((paymentDetail)=>(
            <div class="divContainer1">
<div class="divContainer1Inner">
<div style={{fontSize:"15px",fontWeight:"600"}}>Ticket ID: {paymentDetail.ticketId} </div>
<div>Payment secret code: {paymentDetail.paymentSecretCode}</div>
<div>Amount paid: {paymentDetail.amount} shs</div>

<div><span style={{background:"green",borderRadius:"2px",padding:"3px",color:"white"}}>{paymentDetail.paymentApproved==true?"Served":"Not served"}</span></div>


</div>

            </div>
           )))



        }
    })
        return(
        
        <div style={{padding:"5px"}}>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="pageLabel">My payments</div>
            <div class="pageDescription">A list of all your payments both served and not served</div>
            
       <PaymentsNav/>
    
            <p></p>
    
          
    <div>{myPayments}</div>
    
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

export default MyPayments