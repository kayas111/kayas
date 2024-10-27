import foodImage from '../imgs/aluminiumfood.jpg'
import bnplImage1 from '../imgs/bnplImage1.jpg'
export function FoodDeliveryHome(){
    return (<div  style={{padding:"5px"}} class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="pageLabel">Food delivery service</div>
            <div style={{textAlign:"center",paddingBottom:"20px"}}>Get packed food delivered to you at a fee of 1,000/= in less than 10 minutes</div>
           
           <div class="row">
            <div class="col-3"></div>
            <div class="col-6"><img  style={{border:"1px solid orange",borderRadius:"5px",padding:"5px"}} src={foodImage} class=" d-block w-100" alt="..." /></div>
            <div class="col-3"></div>
           
           </div><p></p>
           
           
            <div style={{padding:"5px",border:"1px solid orange"}}>
            <div  style={{fontSize:"18px",textAlign:"center",fontWeight:"600",borderBottom:"1px solid black"}}>Nalikka Hostel restaurant - Kikoni</div>
            <p></p>
            <div class="row">
<div class="col-8">All foods plus beans or gnuts:</div>
<div class="col-4">3,000/=</div>
<div class="col-8">All foods plus beef:</div>
<div class="col-4">4,000/=</div>


            </div>
           
            

            
            </div>
<p></p><div>Make sure you are logged in.</div>
<a href="/pages/fooddelivery/requestfooddelivery"><div class="button1">Request delivery</div></a>

<div style={{fontSize:"20px",paddingTop:"18px"}}>Did you know?</div>
<div><img src={bnplImage1} class=" d-block w-100" alt="..." /></div>
        </div>
        <div class="col-md-3"></div>
        
    </div>)
}

export default FoodDeliveryHome