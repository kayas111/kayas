import { useState } from 'react';
import { ToastAlert,Post } from '../../Functions';
import ControlsNav from "../Controls"
export function DeliveryServiceControls(){
const [status, setStatus] = useState('');
    
    

    return (
        <div>
            <ControlsNav/>
            <div style={{padding:"3px"}}>
            
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="pageLabel">Delivery service controls</div>
                    <form method="post" id="addDeliveryAgentForm">
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Add delivery agent</div></div>
      
       <div class="mb-3">
        <div class="formInputLabel">Description of service</div>
       <textarea rows="2" type="text" class="form-control" autoComplete="off" name="description" ></textarea>
     
     <br></br>
     <div class="formInputLabel">Contact of agent</div>
     <input rows="2" type="text" class="form-control" autoComplete="off" name="contact" ></input>
     
       </div>
       
       <div class="status">{status}</div>
       <div  onClick={
       
         ()=>{

  
          
            if(Array.from(document.getElementById("addDeliveryAgentForm").description.value).length<1){
                setStatus('Enter a description')
                          
                
                }  else 
                if(Array.from(document.getElementById("addDeliveryAgentForm").contact.value).length<9 || Array.from(document.getElementById("addDeliveryAgentForm").contact.value).length>10){
                    setStatus('Enter contact of 10 digits')
                              
                    
                    }
                else{ 
                    setStatus('Please wait......')
                    let form=document.getElementById("addDeliveryAgentForm")
let payLoad={description:form.description.value.trim(),contact:parseInt(form.contact.value.trim())}

Post('/addDeliveryAgent',payLoad).then(resp=>{
    if(resp.success==true){
        setStatus(resp.msg)
    }else{
        setStatus('Try again')
    }
})
                }
                       
            

         }
       } class="form-submit-btn button1">Add agent</div><p></p>
      
       </form>
                    </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        </div>
        
    )
}

export default DeliveryServiceControls