import { PaymentsNav } from "./PaymentsNav"

export function PaymentsHomepage(){
    return(
    
    <div style={{padding:"5px"}}>
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="pageLabel">Tickets & Payments</div>
        <div class="pageDescription">Create tickets/services or pay for them online.</div><p></p>
<PaymentsNav/>
<div style={{paddingBottom:"200px"}}></div>
    </div>
    <div class="col-md-3"></div>
</div>
    </div>)
}

export default PaymentsHomepage