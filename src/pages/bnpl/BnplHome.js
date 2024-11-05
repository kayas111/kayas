import { useEffect } from 'react'
import {useCookies} from 'react-cookie'
import { IsLoggedIn, ToastAlert } from '../Functions'
export function BnplHome(){
const [cookies]=useCookies(['user'])

let step={fontSize:"18px",fontWeight:"600"},stepContainer={border:"1px solid orange",padding:"3px"}
    return (<div style={{padding:"3px"}}>
        
        <div class="pageLabel">Buy Now Pay Later</div>
        <div class="row">
           <div class="col-md-3"></div>
           <div style={{textAlign:"center"}} class="col-md-6">
            <div class="label1" style={{textAlign:"center"}}>Get a product/service on credit and pay later at your convinience.</div><p></p>
            <div style={stepContainer}><div style={step}>Step 1 </div> Verify if you are a student by <a href="/pages/bnpl/verifyasstudent">clicking here</a>. If you are already verified, please proceed with other steps</div><p></p>
           <div style={stepContainer}><div style={step}>Step 2 </div> Select the "Get started" button at the bottom to see available services/products on credit.</div><p></p>
          <div style={stepContainer}><div style={step}>Step 3 </div>Go to where the product/service that you want to receive is located.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 4 </div>Let the product/service provider complete the transaction then you will be served.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 5 </div>The current credit limit is 1 plate (3,500 shs) which you are required to pay back after a maximum of one week from the time of receiving the credit service.</div><p></p>
           
           <div class="button1" style={{fontSize:"15px"}}
           
           onClick={()=>{
            
          if(IsLoggedIn(cookies)===true){
window.location.href="/pages/bnpl/productsandservices"
            }else{
                ;
            }
           }}
           >Get started</div>
           </div>
           <div class="col-md-3"></div>
        </div>
    </div>)
}

export default BnplHome