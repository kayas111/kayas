import { useState,useEffect } from 'react';
import { DebitTraderAccountBalance, GetTradingDetails, IsLoggedIn, Post, ToastAlert } from '../Functions';
import {useCookies} from 'react-cookie'
export function DeliveryServiceHome(){
    const [cookies]=useCookies(['user'])
    const [selection, setSelection] = useState('');
    const [status, setStatus] = useState('');
    const [options, setOptions] = useState([]);
    const [deliveryAgents, setDeliveryAgents] = useState('');
    let initialMessage="Select your choice here"
// let options=[{description:`${initialMessage}`,contact:703852178},{description:"Kayas restaurant @ 4,000/=",contact:755643774}]
    useEffect(()=>{
fetch('/getDeliveryAgents').then(res=>res.json()).then(resp=>{
    if(resp.length==0){
        options=[{description:`${initialMessage}`}]
    }else{
resp.forEach(option=>{
    options.push(option)
})
options.push({description:`${initialMessage}`})
options.reverse()

    }
})



    },[])
   

    return (
        <div style={{padding:"3px"}}>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="pageLabel">Initiate an order</div>
                    <div>Initiate an order, you will be called in less than 10 minutes and your order will be delivered.</div>
                    <div style={{textAlign:"center",paddingTop:"30px"}}>
                
                    <select id="selectTag" value={selection} onChange={(event) => {
    setSelection(event.target.value);
  }}>
    {
        options.map(option=>{
            return(
                <option value={option.description}>{option.description}</option>
            )
        })
    }
      
      </select>
      <p></p>
      <div style={{padding:"3px"}}>
<div style={{border:"1px solid orange",padding:"3px"}}>
    <div style={{fontSize:"18px"}}><p>{selection}</p></div>
    <div>
        <div>Inititing an order costs 50/= from your Kayas account. Deposit if your balance is low </div>
        <p></p><div class="status">{status}</div>
        <div class="button1"
    onClick={()=>{
        

if(IsLoggedIn(cookies)==true){

    
     if(selection==initialMessage || selection==''){
                
        setStatus('Make a selection first')
    }else{
        let serviceCost=50
        setStatus('Initiating.....')
    GetTradingDetails(cookies.user.contact).then(resp=>{
        let trader=resp
        if(trader.accBal<serviceCost){
          //  ToastAlert('toastAlert2','Low account balance, deposit to your Kayas account atleast 500/=',7000) 
            setStatus('Low account balance, deposit to your Kayas account atleast 500/=')
        }else{
            let payLoad=options.find((option)=>option.description===selection)
            payLoad.client=cookies.user.contact

          GetTradingDetails(payLoad.contact).then(resp=>{
            
                if(resp.deliveryService.isDeliveryAgent==false){
                    setStatus('Not allowed, select another delivery agent/order')
                }
                 else if(resp.deliveryService.isAvailable==false){
                    setStatus('Not available, try again in 15 minutess or select another delivery agent/order')
                }
                
                else{
                    Post('/initiateDelivery',payLoad).then(resp=>{
                
                        if(resp.success==true){
        DebitTraderAccountBalance(cookies.user.contact,serviceCost)
        setStatus(resp.msg)
                        }else{
                            setStatus('Error must have occured, contact Kayas 0703852178')
                        }
        
                    })
                }
            })
        }
    })
        
   
    }


   
}else{;}


    }}
    >Initiate order</div></div>
    
    
    </div>

      </div>
      
      </div>

                <p></p>
                <a href='/pages/deposit'><div class="button1">Deposit to Kayas account</div></a>
                
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
    )
}

export default DeliveryServiceHome