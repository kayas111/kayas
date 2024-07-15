
import React, {useEffect,useState} from 'react'







export function AttendenceRegisterNav(){
  let style2={padding:"3px"}
    return(
  <div>
      <div style={{paddingTop:"8px",display:"flex",flexWrap:"wrap"}}>
      <div style={style2}><div class="button1" onClick={()=>{
              window.location.href=`/pages/attendanceregs/createattendanceregister`
            }}><span class="hovereffect"><span class="fa fa-plus"></span> New register</span></div></div>
   
      <div style={style2}><div class="button1" onClick={()=>{
              window.location.href=`/pages/attendanceregs/createattendanceregister/#myregisters`
            }}>
     
<span class="hovereffect"> Your registers</span>
</div></div>

          

            
            
            
            
            
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





     