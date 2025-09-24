import {Link} from 'react-router-dom';
export function PaymentsNav(){
    let style={padding:"2px"}
    return(<div style={{display:"flex",flexWrap:"wrap",paddingTop:"10px"}}>
  
  <div style={style}>
    <Link to="/pages/payments/createticket"><div class="button1"><span class="fa fa-plus"></span>  Create tickets/services</div></Link>

    </div>
 <div style={style}>
 <Link to="/pages/payments/mytickets"><div class="button1"><span class="fa fa-user"></span>  My tickets/services</div></Link>
   </div>
<div style={style}>
    <Link to="/pages/payments/makepayment"><div class="button1"><span class="fa fa-money"></span> Pay for ticket/service</div></Link></div>
<div style={style}>
<Link to="/pages/payments/mypayments"><div class="button1"><span class="fa fa-list"></span> My payments</div></Link></div>
<div style={style}>
<Link to="/pages/payments/mytickets"><div class="button1"><span class="fa fa-check"></span>  Approve a payment</div></Link></div>


    </div>)
}