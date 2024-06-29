import React, {useEffect,useState} from 'react'

 
export function Kayasers(){
  let data=""
  const [reqNumb,setReqNumb]=useState('')
  const [recomNumb,setRecomNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [kayasers,setKayasers]=useState('')
 
      useEffect(()=>{
        fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
          setReqNumb(res.length)
            })
            fetch('/collection_recommendations_number').then(res=>res.json()).then(res=>{
              setRecomNumb(res.length)
                })
                fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
                  setKayasersNumb(res.length)
                    })
                   fetch('/collection_kayasers_kayasers').then(res=>res.json()).then(res=>{
                      
                      res.forEach(kayaser=>{
                     
                        data+='<div>'+kayaser.contact+"-"+kayaser.name+"-"+kayaser.stdNo+"<div>"+kayaser.email+"</div></div><hr></hr>"
                      
                      })
                      
                      setKayasers(data);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"30px",color:"red",textAlign:"center",fontFamily:"charm"}}>Kayasers</div>
    <div style={{padding:"10px",background:"black",fontSize:"10px"}}>
       <a style={{color:"white",paddingRight:"9px",}} href="https://kayas-mak.herokuapp.com/pages/admin/requests"><span class="hovereffect">REQUESTS {reqNumb}</span></a>
       <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/recommendations"><span class="hovereffect">RECOMMENDATIONS {recomNumb}</span></a>
       <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/kayasers"><span class="hovereffect">KAYASERS {kayasersNumb}</span></a> 
      
       <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/controls"><span class="hovereffect">CONTROLS</span></a> 
       </div>
       
       <div style={{textAlign:"center",padding:"20px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:kayasers}}/></div>


  
  </div>
);
}




export default Kayasers