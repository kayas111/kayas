import React,{useEffect,useState,Suspense} from 'react'
//const ItemOnCredit =React.lazy(()=>import('./ItemOnCredit'))
import ItemOnCredit from './ItemOnCredit'
import { GetTradingDetails, IsLoggedIn } from '../Functions'
import {useCookies} from 'react-cookie'
import { bnplMaxCreditAmount } from '../../Variables'
export function BnplProductsAndServices(){
    const [cookies]=useCookies(['user'])
    const [bnplDebt,setBnplDebt]=useState('')
    const [bnplBal,setBnplBal]=useState('')
   
    let style={padding:"5px"}
    return (<div style={{padding:"3px"}}>
        <div class="pageLabel">Buy Now Pay Later Products and services</div><p></p>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div>Allow the service provider to verify you by clicking the complete transaction button</div><p></p>
         <div style={{display:"flex",flexWrap:"wrap",paddingBottom:"10px"}}>
            <div style={style}><div class="button1"
            onClick={()=>{
                if(IsLoggedIn(cookies)===true){
                    setBnplDebt('Please wait.....')
GetTradingDetails(cookies.user.contact).then(trader=>{


setBnplDebt(`Debt: ${trader.bnpl.debt}/=`)
setBnplBal(`Balance: ${bnplMaxCreditAmount-trader.bnpl.debt}/=`)

})



                }else{;}
            }}
            
            >Check balance</div></div> <div style={style}><div>{bnplDebt}</div></div><div style={style}><div>{bnplBal}</div></div>
            </div>   
        <ItemOnCredit label="Nalikka Hostel Restaurant" description="1 plate of any combination of food that you wish with either beans or gnuts." location="Located in Kikoni at Nalikka hostel." bill="3500" contact="0752217435"/>
        <div style={{textAlign:"center",padding:"20px",fontSize:"20px"}}>More restaurants will be considered soon....</div>
        </div>
        <div class="col-md-3"></div>
    </div>
   
    
    </div>)
}
export default BnplProductsAndServices