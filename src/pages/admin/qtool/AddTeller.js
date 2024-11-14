import { useEffect, useState } from "react"
import { ToastAlert } from "../../Functions"
import QtoolNav from "../../qtool/QtoolNav"
export function AddTeller(){
    const [status, setStatus]=useState('')
    const [tellers, setTellers]=useState('')
    
    useEffect(()=>{
        fetch('/queuetooltellers').then(resp=>resp.json()).then(resp=>{
            let arrayOfTellers=resp
     
             if(arrayOfTellers.length===0){
                 setStatus('No tellers available')
             }else{
                 
                 setTellers(arrayOfTellers.map(teller=>{return(
                    <div style={{padding:"5px"}}>
                         <div style={{border:'2px solid orange',padding:"5px"}}>
                       <div class="row"> <div class="col-6">{teller.tellerNumber}. {teller.serviceType}</div>
                       <div class="col-6"><div class="button1"
                       onClick={()=>{
                        
                        let payLoad={method:'deleteTeller',tellerNumber:teller.tellerNumber}
                        
                          if(window.confirm(`Delete Teller ${teller.tellerNumber}`)===true){
                            fetch('/queueMethods',{
                                method:"post",
                                headers:{'Content-type':'application/json'},
                                body:JSON.stringify(payLoad) 
                            }).then(res=>res.json()).then(resp=>{
                                
                             setTimeout((resp)=>{
                                window.alert(resp.msg)
                             },3000)
                             window.location.href=window.location.href
                            })
                          }else{;}


                       }}
                       >Delete Teller {teller.tellerNumber}</div></div></div>
                                            
                     </div>
                    </div>
                   )}))
             }
           })
    },[])
    return(<div style={{padding:"5px"}} class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <QtoolNav/>
            <div class="pageLabel">Add Teller</div>
        <p></p>
        
        <form method="post" id="createNewTellerForm">
     <div class="mb-3">
 
 <div class="formInputLabel">Type of service to be offered e.g cash deposit</div>
   <input type="text" class="form-control" autoComplete="off" name="serviceType" ></input>
   
  </div>
  <div style={{fontSize:"14px",textAlign:"center",color:"orange",fontWeight:"600"}} dangerouslySetInnerHTML={{__html:status}}/>
     <div onClick={
      ()=>{
  if(Array.from(document.getElementById("createNewTellerForm").serviceType.value.trim()).length<1)
        {
          ToastAlert('toastAlert2','Enter type of service to be offered',4000)
        }
       
else{
setStatus('Creating new Teller......')
    let payLoad={method:'createNewTeller',serviceType:document.getElementById("createNewTellerForm").serviceType.value.trim()}
       
       fetch('/queueMethods',{
        method:"post",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(payLoad) 
    }).then(res=>res.json()).then(resp=>{
     setStatus(resp.msg)
     setTimeout(()=>{
        window.location.href=window.location.href
     },1000)
    })
    
 
}
      } 

     } class="button1"> Add Teller</div><p></p>
    
     </form><p></p>
     <div style={{fontWeight:"600",textAlign:"center"}}>Available Tellers</div>
     
     <div>{tellers}</div>
        </div>
        <div class="col-md-3"></div>
    </div>)
} export default AddTeller