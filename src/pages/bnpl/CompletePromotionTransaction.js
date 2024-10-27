import { useEffect,useState } from "react"
import { GetTradingDetails, IsLoggedIn, ToastAlert } from "../Functions"
import { useCookies } from "react-cookie"
import bnplImage1 from '../imgs/bnplImage1.jpg'
export function CompletePromotionTransaction(){
const [cookies]=useCookies(['user'])
const[name, setName]=useState('Please wait......')
const[status, setStatus]=useState('')

useEffect(()=>{
    if(IsLoggedIn(cookies)===false){
        ToastAlert('toastAlert2','You are not logged in.',4000)
        window.alert('You are not logged in. Please log in.')
        window.location.href="/pages/bnpl/bnplpromotion"
      } else{


GetTradingDetails(cookies.user.contact).then(traderObj=>{
setName(traderObj.name)
})

fetch('/getTotalPromotionTokens').then(resp=>resp.json()).then(resp=>{
    console.log(resp)
})


      }



},[])





    return (<div style={{padding:"5px"}}>
        <div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
<div class="blackBgOrangeColor">Request for discount - Nalikka Restaurant</div>
<p></p>
<div style={{textAlign:"center", fontSize:"20px",padding:"5px"}}>Food promotion - 1,000/= discount</div>
<div style={{padding:"5px",border:"1px solid orange"}}>
<div style={{textAlign:"center",fontSize:"24px",fontWeight:"600"}}>{name}</div><p></p>
<div style={{textAlign:"center"}}>Show your phone to the restaturant owner to complete the transaction and get a discount of 1,000shs</div><p></p>
<div style={{color:"orange",fontSize:"18px",textAlign:"center",fontWeight:"600"}}>{status}</div>
<div class="button1"
onClick={()=>{
    setStatus('Please wait......')
    GetTradingDetails(cookies.user.contact).then(traderObj=>{
            
        if(traderObj.bnpl.isEligibe===false){
            setStatus("You've not registered for Kayas services. Contact Kayas.")  
        }else{
            fetch('/updateTraderDetails',{
                method:"post",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({method:'updateAsKayaser',argsObj:{traderContact:parseInt(cookies.user.contact),fieldToUpdate:'bnplPromotionTokens',updateValue:'notApplicable'}
          
                }) 
            }).then(res=>res.json()).then(resp=>{
                setStatus(resp.msg)  
            })

        }
        
        })
}}

>Complete transaction</div>
</div>


<div style={{paddingTop:"30px"}}>
<img src={bnplImage1} class=" d-block w-100" alt="..."/>
</div>

</div>
<div class="col-md-3"></div>

        </div>
    </div>)
}

export default CompletePromotionTransaction