
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export function Beneficiaries(){
    const [status,setStatus]=useState('')
    let parameters=useParams()
    
    useEffect(()=>{
console.log(parameters)


    },[])
    return(
    <div style={{padding:"3px"}}>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
             <div style={{fontSize:"18px",fontWeight:"600",paddingBottom:"4px"}}>Donation for: {parameters.reason}</div>
             
                <div>
                <form method="post" id="depositForm">
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Donate any amount</div></div>

     <div class="mb-3">
     <div class="formInputLabel">Your name (optional)</div>
   <input type="text" class="form-control" autoComplete="off" name="name" ></input>
   <br></br> 
     <div class="formInputLabel">Contact to deposit from</div>
     <input type="text" class="form-control" autoComplete="off" name="contact"  ></input>
   <br></br>
  <div class="formInputLabel">Amount</div>
   <input type="text" class="form-control" autoComplete="off" name="amount" ></input>
    
     </div>
      <div class="status">{status}</div>
     <div onClick={
        ()=>{
        setStatus('Please wait.....')
        let form=document.getElementById("depositForm")
        let donor={}
             
        if(Array.from(form.name.value.trim()).length<1){
            donor.name='Anonymous'
            
        } else {
            donor.name=form.name.value.trim()

        }
        
        if(Array.from(form.contact.value.trim()).length<10 || Array.from(form.contact.value.trim()).length>10){
    
    setStatus('Enter contact of 10 digits')
    
    }else  if((parseInt(form.amount.value.trim())>0)==false){
    
    setStatus('Enter a valid amount')
        
        
        
        } 
        
        else  if(parseInt(form.amount.value.trim())<500){
    
            setStatus('Minimum amount to deposit is 500/=')
            
            
            
            }
        
        else if( Array.from(form.amount.value.trim()).includes(',')){
            setStatus('Enter an amount without commas')
    
        }
    
    else{
    
        setStatus('Initiating.......')
    let payLoad={
        name:donor.name,
        payerNo:parseInt(document.getElementById("depositForm").contact.value.trim()),
        amount:parseInt(document.getElementById("depositForm").amount.value.trim()),
        reason:parameters.reason.trim(),
        paymentReason:'donate'
               }
      
               
       fetch('/makePayment',{
           method:"post",
           headers:{'Content-type':'application/json'},
           body:JSON.stringify(payLoad) 
       }).then(res=>res.json()).then((resp)=>{
         window.location.href=resp.redirectUrl
       }
           
    
       )
     
     
    }
      } 

     } class="button1"><span class="fa fa-money"></span> Donate</div><p></p>
    
     </form>

                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
)
}
export default Beneficiaries