import { useState,useEffect } from "react"
import { GetTradingDetails, ToastAlert } from "../Functions"
import { useCookies } from "react-cookie"
export function SubmitStudentDetails(){
    const [cookies]=useCookies(['user'])
    const [status, setStatus]=useState('')


    return(<div  class="row" style={{padding:"3px"}}>

<div class="col-md-3"></div>
<div class="col-md-6">

<form method="post" id="submitStudentDetailsForm">
<div style={{paddingBottom:"8px"}}><div class="formLabel">Submit student details</div></div>
    <div class="mb-3">
    
 <div class="formInputLabel">Student number</div>
  <input type="text" class="form-control" autoComplete="off" name="studentNo" ></input><br></br>
<div class="formInputLabel">Course</div>
  <textarea rows={2} type="text" class="form-control" autoComplete="off" name="course" ></textarea>
       </div>
     <div style={{fontSize:"14px",textAlign:"center",color:"orange",fontWeight:"600"}} dangerouslySetInnerHTML={{__html:status}}/>
    <div onClick={
     ()=>{
 if(Array.from(document.getElementById("submitStudentDetailsForm").studentNo.value.trim()).length<10){

ToastAlert('toastAlert2','Enter a student number',3000)


} else if(Array.from(document.getElementById("submitStudentDetailsForm").course.value.trim()).length<7){

   ToastAlert('toastAlert2','Enter full course name',4000)
   
   }
   
else{
  setStatus('Please wait.......')
   let form=document.getElementById("submitStudentDetailsForm")
   GetTradingDetails(cookies.user.contact).then(traderDetails=>{
   let payLoad={method:'updateAsKayaser',argsObj:{contact:traderDetails.contact,fieldToUpdate:'addStudentDetails',studentNo:form.studentNo.value.trim(),course:form.course.value.trim()}}
    
   fetch('/updateTraderDetails',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(payLoad) 
}).then(res=>res.json()).then(resp=>{
    setStatus(resp.msg)
})
   })

   



}
     } 

    } class="button1"> Submit</div>
    
    <div style={{paddingTop:"5px"}}>
   <a href="/pages/bnpl/requestforcredit"> <div class="button1">Request for credit</div></a>
</div>
    <p></p>
   
    </form>
  
</div>
<div class="col-md-3"></div>
    </div>)
}

export default SubmitStudentDetails