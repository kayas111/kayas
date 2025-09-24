
import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom"

export function AttendenceRegisterNav(){
  let style2={padding:"3px"}
    return(
  <div>
      <div style={{paddingTop:"8px",display:"flex",flexWrap:"wrap"}}>
       
      <div style={style2}>
        <Link to='/pages/attendanceregs/myregisters'>  <div class="button1">
     
     <span class="fa fa-list"></span> My registers
</div></Link>
     


</div>
      <div style={style2}>
      <Link to='/pages/attendanceregs/createattendanceregister'>
      <div class="button1" ><span ><span class="fa fa-plus"></span> New register</span></div>
      </Link>
       
       
       </div>


  

          

            
            
            
            
            
            </div>



  </div>
    )
  }
export function RegistrationHome(){
    return(
        <div>
            <div style={{color:"red",fontSize:"25px",textAlign:"center"}}>Kayas Attendance Registers</div>
            
            <AttendenceRegisterNav/>
   
        </div>
        )
}





     