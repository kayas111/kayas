import { useEffect, useState } from "react"
import { ToastAlert } from "../Functions"

export function FoodDeliveryRequests(){
    const [deliveryRequests,setDeliveryRequests]=useState('Loading requests......')
    let initialTotalDeliveries=0,newtotalDeliveries=0
    async function FetchDeliveries(){
    
    await  fetch('/fooddeliveryrequests').then(resp=>resp.json()).then(async (arrayOfDeliveryRequests)=>{
        newtotalDeliveries=arrayOfDeliveryRequests.length
                      
                if(newtotalDeliveries>initialTotalDeliveries){
                    ToastAlert('toastAlert1','New deliveries available',10000)
                    initialTotalDeliveries=newtotalDeliveries
                     
                    
                }else{;}
                    
                if(arrayOfDeliveryRequests.length===0){
                    setDeliveryRequests('No requests yet.')
                    ToastAlert('toastAlert2','No requests yet',4000)
                }else{
                    arrayOfDeliveryRequests.reverse()
                    let counter=arrayOfDeliveryRequests.length
                setDeliveryRequests(arrayOfDeliveryRequests.map(deliveryRequest=>{
                    counter--
                    return(
                        <div style={{padding:"5px"}}>
                <div style={{border:"1px solid orange",padding:"5px"}}>
                <div style={{fontWeight:"600",fontSize:"17px",borderBottom:"1px solid grey"}}>{counter+1}. {deliveryRequest.name} - 0{deliveryRequest.contact}</div>
                <div>Location: {deliveryRequest.location}</div>
                <div>Room: {deliveryRequest.room}</div>
                <div>Description: {deliveryRequest.desc}</div>
                
                
                </div>
                        </div>
                    )
                }))
               


                setInterval(()=>{
FetchDeliveries()
                },50000)
                }


                })
    }
    useEffect(()=>{

            FetchDeliveries()
         

    },[])
    return(<div style={{padding:"5px"}} class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <div class="pageLabel">Delivery requests</div><p></p>
<div>{deliveryRequests}</div>

        </div>
        <div class="col-md-3"></div>
    </div>)
}

export default FoodDeliveryRequests