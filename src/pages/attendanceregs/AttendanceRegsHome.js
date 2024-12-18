
import React, {useEffect,useState} from 'react'







export function AttendenceRegisterNav(){
  let style2={padding:"3px"}
    return(
  <div>
      <div style={{paddingTop:"8px",display:"flex",flexWrap:"wrap"}}>
      <div style={style2}>
      <a href="/pages/attendanceregs/createattendanceregister">
        
        <div class="button1" ><span ><span class="fa fa-plus"></span> Create register</span></div>
       </a>
       
       </div>


   
      <div style={style2}>
        
        <a href="/pages/attendanceregs/myregisters">
        <div class="button1">
     
        <span class="fa fa-list"></span> My registers
</div>
</a>


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





     