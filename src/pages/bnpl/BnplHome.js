export function BnplHome(){
let step={fontSize:"18px",fontWeight:"600"},stepContainer={border:"1px solid orange",padding:"3px"}
    return (<div style={{padding:"3px"}}>
        
        <div class="blackBgOrangeColor ">Buy Now Pay Later</div>
        <div class="row">
           <div class="col-md-3"></div>
           <div style={{textAlign:"center"}} class="col-md-6">
            <div class="label1" style={{textAlign:"center"}}>Get a product/service on credit and pay later at your convinience.</div><p></p>
           <div style={stepContainer}>
            <div style={step}>Step 1 </div>
            Register with a fee of 4,000 shs by contacting 0703852178 on WhatsApp.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 2 </div> Select the "Get started" button at the bottom.</div><p></p>
          <div style={stepContainer}><div style={step}>Step 3 </div>Go to where the product/service that you want to receive is located.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 4 </div>Let the product/service provider complete the transaction then you will be served.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 5 </div>The current credit limit is 7,000 shs which you are required to pay back after a maximum of one week after receiving the credit service.</div><p></p>
           <a href="/pages/bnpl/productsandservices"><div class="button1" style={{fontSize:"15px"}}>Get started</div></a>
           </div>
           <div class="col-md-3"></div>
        </div>
    </div>)
}

export default BnplHome