import { useEffect } from 'react'
import {useCookies} from 'react-cookie'
import { IsLoggedIn, ToastAlert } from '../Functions'
import { bnplMaxCreditAmount } from '../../Variables'
export function BnplHome(){
const [cookies]=useCookies(['user'])

let serviceDescription={textAlign:"left",color:"black"},
serviceLabel={fontSize:"18px",fontWeight:"600",textAlign:"left",color:"black"},
serviceContainer={border:"1px solid orange",padding:"3px",background:"orange",borderRadius:"2px"}
    return (<div style={{padding:"3px"}}>
        
        
        <div class="row">
           <div class="col-md-3"></div>
           <div style={{textAlign:"left"}} class="col-md-6">
           <div class="pageLabel">Buy Now Pay Later</div>


            <div>Get a product/service on credit and pay later at your convinience.</div>
            
           <div style={{display:"flex",flexWrap:"wrap",paddingTop:"5px"}}>
<div style={{padding:"5px"}}>
   <a href="/pages/bnpl/requestforcredit"> <div class="button1">Request for credit</div></a>
</div>

<div style={{padding:"5px"}}>
<a href="/pages/bnpl/approvecreditrequest"> <div class="button1">Approve credit request</div></a>
</div>

</div><p></p>
<a  href="/pages/bnpl/requestforcredit">
<div style={serviceContainer}><div style={serviceLabel}>Kayas restaurant </div> 
<ul>
    <li><div style={serviceDescription}>Get one plate of all foods and beans/peas </div></li>
    <li><div style={serviceDescription}>Located  along Kasubi Road, between Kikoni junction and Kann hostel. </div></li>
</ul>
   
     </div>
</a>
     
     
     <p></p>
           </div>
           <div class="col-md-3"></div>
        </div>
    </div>)
}

export default BnplHome