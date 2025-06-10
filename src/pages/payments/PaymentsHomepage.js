export function PaymentsHomepage(){
    return(
    
    <div style={{padding:"5px"}}>
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
        <div class="label">Payments</div>
        <div class="description">Pay for services, tickets and many more online.</div><p></p>


<div class="divContainer1">
    <a href="/pages/payments/makepayment"><div class="divContainer1Inner"><span class="fa fa-money"></span>  Make a payment</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/mypayments"><div class="divContainer1Inner"><span class="fa fa-list"></span> My payments</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/createticket"><div class="divContainer1Inner"><span class="fa fa-plus"></span>  Create a ticket/service</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/mytickets"><div class="divContainer1Inner"><span class="fa fa-user"></span>  My tickets/services</div></a>
</div>
<div class="divContainer1">
    <a href="/pages/payments/mytickets"><div class="divContainer1Inner"><span class="r"></span>  Approve a payment</div></a>
</div>




    </div>
    <div class="col-md-3"></div>
</div>
    </div>)
}

export default PaymentsHomepage