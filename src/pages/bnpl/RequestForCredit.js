import { useState } from 'react'
import {useCookies} from 'react-cookie'
import { IsLoggedIn, ToastAlert } from "../Functions"

export function RequestForCredit(){
    let step={fontSize:"18px",fontWeight:"600",textAlign:"center"},stepContainer={border:"1px solid orange",padding:"3px"}
    const [status,setStatus]=useState('')
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    return(<div style={{padding:"5px"}}>
         <div class="row">
<div class="col-md-3"></div>
<div class="col-md-6" style={{textAlign:"center",paddingTop:"30px",paddingBottom:"35px"}}>
<p></p>
<div >Go to where the service point is located with your student ID or  <br></br>photcopy of your admission and click "Request for credit"</div>
           <p></p> 

<div>
    <div>{status}</div>
    <div class="button1" style={{padding:"10px"}}

onClick={()=>{
setStatus('Please wait.......')
    
    if(IsLoggedIn(cookies)===true){;
    
   let payLoad=cookies.user
   fetch('/requestForCredit',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(payLoad)
}).then(resp=>{
    
    return resp.json()}).then(resp=>{
        if(resp.studentDetailsPresent==0){
            ToastAlert('toastAlert2',"Submit your student number and course to prove you are a student",8000)
            setStatus('')
        }else{
            ToastAlert("toastAlert1",`${resp.msg}`,6000)
            setStatus('')
        }
    })
    
    }else{

       ;
    }
}}
>Request for credit</div></div>
<p></p>
<div>
    
    <a href="/pages/bnpl/submitstudentdetails">
    <div class="button1" style={{padding:"10px"}}

>Submit student number</div>
    </a>

</div>

            </div><p></p>







<div class="col-md-3"></div>


        </div>
    </div>)
}

export default RequestForCredit