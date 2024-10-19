export function BnplHome(){
let step={fontSize:"18px",fontWeight:"600"},stepContainer={boxShadow:"0px 0px 3px grey",padding:"3px"}
    return (<div style={{padding:"3px"}}>
        
        <div class="blackBgOrangeColor ">Buy Now Pay Later</div>
        <div class="row">
           <div class="col-md-3"></div>
           <div style={{textAlign:"center"}} class="col-md-6">
            <div class="label1" style={{textAlign:"center"}}>Get a product/service on credit and pay later at your convinience.</div><p></p>
           <div style={stepContainer}>
            <div style={step}>Step 1 </div>
            Register with a fee of 5,000 shs by contacting 0703852178 on WhatsApp.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 2 </div> Select the "Get started" button at the bottom.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 3 </div>Look for the product/service you are interested in and find out where it is located.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 4 </div>Go to where the product/service is located.</div><p></p>
           <div style={stepContainer}><div style={step}>Step 5 </div>Let the product/service provider complete the transaction then you will be served.</div><p></p>
           <a href="/pages/bnpl/productsandservices"><div class="button1" style={{fontSize:"20px"}}>Get started</div></a>
           </div>
           <div class="col-md-3"></div>
        </div>
    </div>)
}

export default BnplHome