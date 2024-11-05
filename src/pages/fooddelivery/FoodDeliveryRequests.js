import { useEffect, useState } from "react"
import { ToastAlert } from "../Functions"

export function FoodDeliveryRequests(){
    const [status,setStatus]=useState('')
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
                <div style={{fontWeight:"600",fontSize:"17px",borderBottom:"1px solid grey"}}>{counter+1}. {deliveryRequest.origin}</div>
                <div>Description: {deliveryRequest.desc}</div>
                <div>Deliver to: {deliveryRequest.location}</div>
                <div>Room: {deliveryRequest.room}</div>
                <div>Name: {deliveryRequest.name}</div>
                <div>Contact: 0{deliveryRequest.contact}</div>
                
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
            <form method="post" id="turnOnFoodDeliveryForm">
    <div class="mb-3">
    <div class="formInputLabel">Response message if service is off</div>
    <textarea rows={3} type="text" class="form-control" autoComplete="off" name="notice"  ></textarea>
 
       </div>
    <div style={{padding:"3px",color:"orange",fontWeight:"600"}}>{status}</div>
    
   <div style={{display:"flex",flexWrap:"wrap"}}>
   <div style={{padding:"5px"}}><div class="button1"
    onClick={()=>{
        let payLoad={task:'turnFoodDeliveryServiceOnOff'}
        fetch('/getControls').then(res=>res.json()).then(resp=>{
           let controlsDoc=resp[0]
           if(controlsDoc.foodDeliveryControls.deliveryServiceIsOn===true){
setStatus('Turning off.....')
           }else{
            setStatus('Turning on.....')
           }
    fetch('/updateControls',{
            method:"post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(payLoad) 
        }).then(res=>res.json()).then(resp=>{
            setStatus(resp.msg)
        })


        })
    }}
    >Turn food delivery service on/off</div>
   </div>
   <div style={{padding:"5px"}}>
    <div onClick={
     ()=>{
 if(Array.from(document.getElementById("turnOnFoodDeliveryForm").notice.value.trim()).length<2){
ToastAlert('toastAlert2','Type a comment',4000)
} 
else{
    
    let form=document.getElementById("turnOnFoodDeliveryForm"), payLoad={task:'updateFoodDeliveryServiceNotice',notice:form.notice.value.trim()}
   

setStatus('Setting new notice.....')
    fetch('/updateControls',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(payLoad) 
    }).then(res=>res.json()).then(resp=>{
        
setStatus(resp.msg)
    })



}
     } 

    } class="button1"><span class="fa fa-save"></span> Set message</div>
    </div>
    </div>
    
    <p></p>
   
    </form><p></p>


<div style={{fontSize:"20px",padding:"8px",textAlign:"center",fontWeight:"600"}}>Delivery requests</div>

<div>{deliveryRequests}</div>

        </div>
        <div class="col-md-3"></div>
    </div>)
}

export default FoodDeliveryRequests