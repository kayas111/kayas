import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { IsLoggedIn, ToastAlert } from "../Functions"
import bnplImage1 from '../imgs/bnplImage1.jpg'
export function RequestFoodDelivery(){
    const [cookies]=useCookies(['user'])
    const [status, setStatus]=useState('')
    useEffect(()=>{
        if(IsLoggedIn(cookies)===false){
            window.alert('Please log in first.')
            window.location.href='/pages/fooddelivery/fooddeliveryhome'
        }else{
;
        }
    },[])
    return (
        <div style={{padding:"5px"}} class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
<div class="pageLabel">Request for delivery</div>
<p></p>
    <form method="post" id="requestFoodDeliveryForm">
    
     <div class="mb-3">
     <div class="formInputLabel">What food do you want?</div>
     <textarea rows={2} type="text" class="form-control" autoComplete="off" name="desc"  ></textarea>
   <br></br>
   <div class="formInputLabel">Your location or hostel of residence</div>
   <textArea rows={2} type="text" class="form-control" autoComplete="off" name="location"  ></textArea>
   <br></br><div class="formInputLabel">Room number</div>
   <input type="text" class="form-control" autoComplete="off" name="room" ></input><br></br>
   <div style={{color:"red"}}>Deliveries stop at 7:00 PM</div>
        </div>
      <div style={{fontSize:"17px",textAlign:"center",color:"orange",fontWeight:"600"}} dangerouslySetInnerHTML={{__html:status}}/>
     <div onClick={
      ()=>{
  if(Array.from(document.getElementById("requestFoodDeliveryForm").desc.value).length<2){

ToastAlert('toastAlert2','Describe what food you want',4000)

} else if(Array.from(document.getElementById("requestFoodDeliveryForm").location.value).length<2){

    ToastAlert('toastAlert2','Fill in your location',3000)
    
    }
    else if(Array.from(document.getElementById("requestFoodDeliveryForm").room.value).length<1){

        ToastAlert('toastAlert2','Fill in the room number or type no room number',5000)
        
        }
else{



if(window.confirm("You will be charged 1,000/= as a delivery fee, tap 'OK' to proceed.")===true){
    setStatus('Sending request........')
    let form=document.getElementById("requestFoodDeliveryForm"), payLoad={name:cookies.user.name,contact:cookies.user.contact,desc:form.desc.value.trim(),location:form.location.value.trim(),room:form.room.value.trim()}
    
     fetch('/requestFoodDelivery',{
         method:"post",
         headers:{'Content-type':'application/json'},
         body:JSON.stringify(payLoad) 
     }).then(res=>res.json()).then(resp=>{
      setStatus(resp.msg)
     })
}else{
    setStatus('You cancelled the request.')
}


 
}
      } 

     } class="form-submit-btn backgroundColorHovereffect"><span class="fa fa-envelope"></span> Request</div><p></p>
    
     </form>


     <div style={{fontSize:"20px",paddingTop:"18px"}}>Did you know?</div>
<div><img src={bnplImage1} class=" d-block w-100" alt="..." /></div>



            </div>
            <div class="col-md-3"></div>
        </div>
    )
}

export default RequestFoodDelivery