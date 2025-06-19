export function PaymentsHomepage(){
    return(
    
    <div style={{padding:"5px"}}>
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="label">Tickets & Payments</div>
        <div class="description">Create tickets/services or pay for them online.</div><p></p>


<div class="divContainer1">
<div class="divContainer1">
    <a href="/pages/payments/createticket"><div class="divContainer1Inner"><span class="fa fa-plus"></span>  Create tickets/services</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/mytickets"><div class="divContainer1Inner"><span class="fa fa-user"></span>  My tickets/services</div></a>
</div>
    <a href="/pages/payments/makepayment"><div class="divContainer1Inner"><span class="fa fa-money"></span> Pay for ticket/service</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/mypayments"><div class="divContainer1Inner"><span class="fa fa-list"></span> My payments</div></a>
</div>

<div class="divContainer1">
    <a href="/pages/payments/mytickets"><div class="divContainer1Inner"><span class="fa fa-check"></span>  Approve a payment</div></a>
</div>
<div style={{paddingBottom:"200px"}}></div>



    </div>
    <div class="col-md-3"></div>
</div>
    </div>)
}

export default PaymentsHomepage