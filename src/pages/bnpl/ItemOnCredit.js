import { GetTradingDetails, IsLoggedIn} from "../Functions"
import React,{useState} from 'react'
import {useCookies} from 'react-cookie'
import { bnplMaxCreditAmount } from "../../Variables"
export function ItemOnCredit(props){
    
    const [cookies]=useCookies(['user'])
const [status,setStatus]=useState('')
    return(<div style={{padding:"5px"}}>

<div style={{boxShadow:"0px 0px 4px rgba(0, 0, 0, 0.685)",border:"2px solid white",padding:"5px"}}>
<div style={{fontSize:"20px",fontWeight:"600",textAlign:"center",borderBottom:"0.5px solid grey"}}>{props.label}
<div style={{fontSize:"13px",textAlign:"center",color:"orange"}}>Contact: {props.contact}</div>
</div>

<div style={{paddingBottom:"3px",paddingTop:"4px",textAlign:"center",fontSize:"15px"}}>{props.description}</div>

<div style={{fontSize:"12px",textAlign:"center"}}>{props.location}</div>
<div style={{fontSize:"20px",textAlign:"center",padding:"8px"}}> <span style={{color:"green",padding:"5px",fontWeight:"600"}}>{props.bill}/=</span></div>
<div style={{textAlign:"center",fontSize:"18px",color:"orange",fontWeight:"600"}}>{status}</div>
<div class="button1"
onClick={()=>{
 if(IsLoggedIn(cookies)===true){
    setStatus('Please wait........')
GetTradingDetails(cookies.user.contact).then(resp=>{
    let trader=resp
    if(trader.bnpl.isEligible===false){
        setStatus("You've not registered for Kayas services. Contact Kayas.")
    }else{
   setTimeout(()=>{
        if(window.confirm(`Complete the transaction to debit user with ${props.bill}/=`)===true){
let payLoad={name:cookies.user.name,contact:cookies.user.contact,bill:parseInt(props.bill),label:props.label,description:props.description}

if((parseInt(props.bill)+parseInt(trader.bnpl.debt))>bnplMaxCreditAmount){
    setStatus('Low account balance.')
}else{
fetch('/completeBnplTransaction',{
                method:"post",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(payLoad)
            }).then(resp=>resp.json()).then(status=>{
if(status.success===true){
setStatus('Successful')
                }else{
        setStatus('Not successful. Try again')
                }
            })
            
}
 }else{
            setStatus('Cancelled')
        }
    },1000)
    }
})


    
   
 }else{;}
    
}}
>Complete transaction
<div style={{color:"red"}}>To be completed by the restaurant owner only</div>
</div>
    
</div>
    </div>)
}

export default ItemOnCredit