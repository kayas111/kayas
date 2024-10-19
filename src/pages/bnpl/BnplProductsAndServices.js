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
        <div class="blackBgOrangeColor">Products and services on credit</div><p></p>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
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
        <ItemOnCredit label="Nalikka Restaurant" description="1 plate of all foods and beans." location="Located in Nalikka hostel in Kikoni." bill="3000" contact="0703852178"/>
        <ItemOnCredit label="Good life chapati" description="2 chapats" location="Located in Mubs Nakawa, opposite to Ideal Diamond hostel" bill="2500" contact="0703852178"/>
        </div>
        <div class="col-md-3"></div>
    </div>
   
    
    </div>)
}
export default BnplProductsAndServices