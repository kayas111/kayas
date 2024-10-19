
import { useEffect, useState } from "react"
import ControlsNav from "../Controls"
import BnplNav from "./bnplNav"
import { ToastAlert } from "../../Functions"

export function ClearBnplDebt(){
    const [amountPreview,setAmountPreview]=useState('')
useEffect(()=>{


},[])


    return (<div>

<ControlsNav/>
        <div  style={{padding:"3px"}}>
        
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6" >
                    <BnplNav/>
                    
            
                    <div style={{padding:"5px"}}>
    
<p></p>
         <form method="post" id="clearBnplDebtForm" action="#">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Clear BNPL debt</div></div>
      
       <div class="mb-3">
        <div class="formInputLabel">Contact</div>
       <input rows="1" type="text" class="form-control" autoComplete="off" name="contact" ></input><br></br>
       <div class="formInputLabel">New amount: {amountPreview}</div>
       <input onChange={()=>{
        setAmountPreview(parseInt(document.getElementById("clearBnplDebtForm").amount.value.trim()))
       }} rows="1" type="text" class="form-control" autoComplete="off" name="amount" ></input>  
       </div>
       <div  onClick={
       
         ()=>{

let contact=document.getElementById("clearBnplDebtForm").contact.value.trim(),amount=document.getElementById("clearBnplDebtForm").amount.value.trim()
, payLoad={method:"updateAsAdmin",argsObj:{contact:parseInt(contact),amount:parseInt(amount),fieldToUpdate:'bnplDebt'}}
            fetch('/updateTraderDetails',{
                method:"post",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(payLoad)
            }).then(resp=>{
                
                return resp.json()}).then(resp=>{
                    ToastAlert('toastAlert1',`${resp.msg}`,3000)
                })
          
        

         }
       } class="form-submit-btn button1">Update</div><p></p>
      
       </form>
       </div>
     
                   
                    
                    </div>
                <div class="col-md-3"></div>
            </div>
        
        
        </div>

    
    </div>)
}
export default ClearBnplDebt