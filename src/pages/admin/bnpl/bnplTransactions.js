
import { useEffect, useState } from "react"
import ControlsNav from "../Controls"
import BnplNav from "./bnplNav"

export function BnplTransactions(){
const [bnplTransactions,setBnplTransactions]=useState('')

useEffect(()=>{
fetch('/bnplTransactions').then(resp=>resp.json()).then(arrayOfTrasactions=>{
if(arrayOfTrasactions.length===0){
    setBnplTransactions('No transactions')  
}else{
    arrayOfTrasactions.reverse()
let counter =arrayOfTrasactions.length
    setBnplTransactions(arrayOfTrasactions.map(bnplTransaction=>{
        bnplTransaction.counter=counter--
        return (<div style={{padding:"3px"}}>
            <div style={{border:"1px solid orange",padding:"3px"}}>
            <div class="row">
            <div class="col-8" style={{fontSize:"18px",fontWeight:"600"}}>{bnplTransaction.counter}. {bnplTransaction.name}</div>
            <div class="col-4">0{bnplTransaction.contact}</div>
            </div>   
           
           <div>Description: {bnplTransaction.description}</div>
           <div style={{fontSize:"18px"}}>Bill: {bnplTransaction.price}</div>
           <div>Credit offered by: {bnplTransaction.creditOfferedBy}</div>
            </div>
           
        </div>)
    }))
}

   
})



},[])


    return (<div>

<ControlsNav/>
        <div  style={{padding:"3px"}}>
        
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" style={{background:"white",padding:"10px"}}>
                <div class="blackBgOrangeColor">BNPL Transactions</div>
                <BnplNav/>
                    <p></p>
                    
                    <div>{bnplTransactions}</div></div>
                <div class="col-md-3"></div>
            </div>
        
        
        </div>

    
    </div>)
}


export default BnplTransactions