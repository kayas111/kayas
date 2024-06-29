import React, {useEffect,useState} from 'react'
import {ThemeWrap} from './Home';
import Brocode from './Brocode';
import kahu1 from './imgs/kahu1.jpg'; 
import bhazi from './imgs/bhazi.jpg'; 
import wobu1 from './imgs/wobu1.jpg';
import holiday from './imgs/holiday.jpg';
export function Quotes(){

  const [quotes,setQuotes]=useState('')
  const [refName,setRefName]=useState('')
  const [writersMsg,setWritersMsg]=useState('')
  const [writersName,setWritersName]=useState('')

  useEffect(()=>{
 
let data=""
  fetch('/collection_quotes_quotes').then(res=>res.json()).then(res=>{
   res.reverse()
    res.forEach(quote=>{
   
      data+='<div>'+quote.quote+"</div><hr></hr>"
  
    })
   setQuotes(data)
      })

      fetch('/collection_controls').then(res=>res.json()).then(res=>{
        setWritersName(res[0].writersName)
        setWritersMsg(res[0].writersMsg)
        setRefName(res[0].refName)
      })


  
  },[])



//<ThemeWrap img={t14}headline="" date="Friday 8th July, 2022" msg=""/>

return(

  <div>
    
    <div style={{padding:"5px",color:"red",background:"white"}}><span style={{fontSize:"50px"}}>D</span><span style={{fontSize:"30px"}}>ear, </span><span style={{fontSize:"30px"}}>{refName}</span></div>
    <div style={{fontSize:"20px",color:"grey",textAlign:"center",fontFamily:"charm",fonyWeight:"bold"}}>As you read the quotes below this photo, quote yourself too<p></p></div>
    <ThemeWrap img={holiday}headline={writersName} date="Through Kayas" msg={writersMsg}/>
    
 <div style={{textAlign:"center",padding:"30px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:quotes}}/></div>
<Brocode/>


 </div>
);}





export default Quotes