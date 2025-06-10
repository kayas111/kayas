import { useState,useEffect } from "react";
import { Candidates, HandleRadioButtonOnchangeEvent } from "./votingPortalFunctions";
import cand1img from '../imgs/user.jpg'
import {useCookies} from 'react-cookie'
import { IsLoggedIn } from "../Functions";
export function Cat1(){
    const [selectedOption, setSelectedOption] = useState("none. Select an option");
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    let category='President',candidate1={name:'Opio Isaac',img:cand1img},candidate2={name:'John Doe',img:cand1img}
    

    useEffect(()=>{
        if(IsLoggedIn(cookies)===true){
            
            console.log(cookies.user)
          
            
        }else{
          ;
        }
    },[])
    return (
    <div style={{padding:"3px"}}>
<div class="row">



<div class="col-md-3"></div>
        <div class="col-md-6">
            
           <div class="pageLabel">{category}</div>
           <div>{`You have selected ${selectedOption}`}</div><p></p>
<div class="radioCont1">
           
          
          <div class="radioCont2">
          <div class="row">
           <div class="col-6"><img src={cand1img} class="d-block w-50" alt="..."  /></div>
           <div  style={{paddingTop:"35px"}} class="col-6">

           <label className="flex items-center gap-2">
        <input
          type="radio"
          value={candidate1.name}
          checked={selectedOption === candidate1.name}
          onChange={(event) => {
            if(IsLoggedIn(cookies)===true){
                
                HandleRadioButtonOnchangeEvent(event,setSelectedOption,cookies.user,category,setCookie)
            }else{
              ;
            }
          
            
        }}
        />

         <span class="candidateName" >{candidate1.name}</span>
      </label>




      
           </div>
            </div>
          </div>
          
          
          </div>

          <div class="radioCont1">
           
          
           <div class="radioCont2">
           <div class="row">
            <div class="col-6"><img src={cand1img} class="d-block w-50" alt="..."  /></div>
            <div  style={{paddingTop:"35px"}} class="col-6">
 
            <label className="flex items-center gap-2">
         <input
           type="radio"
           value={candidate2.name}
           checked={selectedOption === candidate2.name}
           onChange={(event) => {
             if(IsLoggedIn(cookies)===true){
                 HandleRadioButtonOnchangeEvent(event,setSelectedOption,cookies.user,category,setCookie)
             }else{
               ;
             }
           
             
         }}
         />
 
          <span class="candidateName" >{candidate2.name}</span>
       </label>
 
 
 
 
       
            </div>
             </div>
           </div>
           
           
           </div>
 
            
        <p></p>
        <a href="/pages/votingportal/cat2"><div class="button1">Next page</div></a>



        </div>
        <div class="col-md-3"></div>




</div>
    </div>
)
}

export default Cat1