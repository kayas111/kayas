import foodImage from '../imgs/aluminiumfood.jpg'
import bnplImage1 from '../imgs/bnplImage1.jpg'
export function FoodDeliveryHome(){
    return (<div  style={{padding:"5px"}} class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="pageLabel">Food/snacks delivery service - only around Kikoni</div>
            <div style={{paddingBottom:"10px"}}>Get snacks or packed food delivered to you in less than 10 minutes at a delivery fee of 500/= or 1,000/= respectively.</div>
            <div style={{color:"red",fontSize:"11px",paddingTop:"5px"}}>Supported hostels: Nalikka, Dreamworld, Akwata Empola, Waveny, Garden courts, Muhika, Edith Hetty's, Apex, Charks, Annex, Lynn, Kare, Biira</div><p></p>
           <div class="row">
            <div class="col-2"></div>
            <div class="col-8"><img  style={{borderRadius:"5px",padding:"10px",boxShadow:"0px 0px 10px grey",background:"white"}} src={foodImage} class=" d-block w-100" alt="..." />
            
            </div>
            <div class="col-2"></div>
           
           </div>           
           <div style={{fontSize:"20px",textAlign:"center",paddingTop:"25px",fontWeight:"600"}}>Available restaurants/canteens</div>
           <div style={{fontSize:"",paddingBottom:"10px",textAlign:"center",color:"orange"}}>More restaurants will be added soon</div>
           <div style={{padding:"5px",border:"2px solid orange"}}>

<div  style={{fontSize:"15px",fontWeight:"600",borderBottom:"1px solid black"}}>Shalom foods
<div style={{color:"red",fontSize:"11px"}}>Delivery fee: 1000/=</div>
</div>

<div style={{paddingTop:"10px"}}class="row">
<div class="col-8">Rice, chips and gravy</div><div class="col-4">4,000/=</div>



</div>




</div>
<p></p>
           
           
            <div style={{padding:"5px",border:"2px solid orange"}}>

            <div  style={{fontSize:"15px",fontWeight:"600",borderBottom:"1px solid black"}}>Nalikka Hostel restaurant - Kikoni
            <div style={{color:"red",fontSize:"11px"}}>Delivery fee: 1000/=</div>
            </div>
         
            <div style={{paddingTop:"10px"}}class="row">
<div class="col-8">All foods plus beans or gnuts:</div>
<div class="col-4">3,000/=</div>
<div class="col-8">All foods plus small beef:</div><div class="col-4">4,000/=</div>
<div class="col-8">All foods plus cow peas:</div><div class="col-4">3,500/=</div>
<div class="col-8">2 chapatis and beans (Kikomando)</div><div class="col-4">2,000/=</div>


            </div>
           
            

            
            </div>
            <p></p>
            <div style={{padding:"5px",border:"2px solid orange"}}>
            <div  style={{fontSize:"15px",fontWeight:"600",borderBottom:"1px solid black"}}>Akwata hostel snacks canteen
            <div style={{color:"red",fontSize:"11px"}}>Delivery fee: 500/=</div>
            </div>
         
            <div style={{paddingTop:"10px"}}class="row">
<div class="col-8">Rolex:</div>
<div class="col-4">2,000/=</div>
<div class="col-8">Sausage:</div><div class="col-4">5,00/= each</div>
<div class="col-8">Vegetable samosas:</div><div class="col-4">500/= each</div>
<div class="col-8">Chapati</div><div class="col-4">1,000/= each</div>
<div class="col-8">Kebab</div><div class="col-4">1,000/= each</div>


            </div>
           
            

            
            </div>

            <p></p>
            <div style={{padding:"5px",border:"2px solid orange"}}>
            <div  style={{fontSize:"15px",fontWeight:"600",borderBottom:"1px solid black"}}>Kayas shop
            <div style={{color:"red",fontSize:"11px"}}>Delivery fee: 500/=</div>
            </div>
         
            <div style={{paddingTop:"10px"}}class="row">
<div class="col-8">Noodles</div><div class="col-4">1,000/=</div>
<div class="col-8">Jesa milk:</div><div class="col-4">2,000/=</div>
<div class="col-8">Small Hema water:</div><div class="col-4">500/=</div>
<div class="col-8">Big Hema water:</div><div class="col-4">1000/=</div>
<div class="col-8">Juice</div><div class="col-4">1,000/= or 2,000/=</div>
<div class="col-8">Small soda</div><div class="col-4">1,000/=</div>
<div class="col-8">Buns</div><div class="col-4">5,00/= each</div>
<div class="col-8">Lato milk</div><div class="col-4">5,00/= each</div>
<div class="col-8">Half Kg of Sugar</div><div class="col-4">2,500/=</div>
<div class="col-8">Peas samosas</div><div class="col-4">5,00/= each</div>
<div class="col-8">Rice samosas</div><div class="col-4">5,00/= each</div>
<div class="col-8">Buns</div><div class="col-4">5,00/= each</div>
<div class="col-8">More products are available</div>


            </div>
           
            

            
            </div>


<p></p><div>Make sure you are logged in.</div>
<a href="/pages/fooddelivery/requestfooddelivery"><div class="button1">Request delivery</div></a>

<div style={{fontSize:"20px",paddingTop:"10px"}}>Did you know?</div>
<div><img src={bnplImage1} class=" d-block w-100" alt="..." /></div>
        </div>
        <div class="col-md-3"></div>
        
    </div>)
}

export default FoodDeliveryHome