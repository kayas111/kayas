export function BnplPromotion(){
    let step={fontSize:"18px",fontWeight:"600",textAlign:"center"},stepContainer={border:"1px solid orange",padding:"3px"}
    return(<div style={{padding:"5px"}}>
         <div class="row">
<div class="col-md-3"></div>
<div class="col-md-6" style={{textAlign:"center"}}>

<div class="blackBgOrangeColor">Food promotion - BNPL</div>
<div class="label1">Get any food of your choice from Nalikka Hostel restaurant at a discount of 1,000/=</div>

<p></p>
<div style={stepContainer}>
            <div style={step}>Step 1 </div>
            Register with a fee of 4,000 shs by contacting 0703852178 on WhatsApp. If you already registered for the food services with Kayas, no need to register again.</div><p></p>
<div style={stepContainer}>
            <div style={step}>Step 2 </div>
            Make sure you have an account with Kayas and you are logged in. Kayas 0703852178</div><p></p>
            <div style={stepContainer}>
            <div style={step}>Step 3 </div>
            Go to Nalikka restaurant and click the get started button at the bottom and a food promotion page will appear.</div><p></p>
            <div style={stepContainer}>
            <div style={step}>Step 4 </div>
            Show that page to the restaturant person to complete the transaction. Once successful, you will be given a discount of 1,000/= on any meal.</div><p></p>
            <div style={stepContainer}>
<div style={step}>Step 5 </div>
            You only have a maximum of 2 discounts everyday.
            </div> </div><p></p>

<a href="/pages/bnpl/completepromotiontransaction"><div class="button1">Get started</div></a>






<div class="col-md-3"></div>


        </div>
    </div>)
}

export default BnplPromotion