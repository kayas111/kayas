import React, {useEffect,useState} from 'react'

 
export function Orders(){
  let data=""
  const [reqNumb,setReqNumb]=useState('')
  const [orders,setOrders]=useState('')
  const [ordersNumb,setOrdersNumb]=useState('')
  const [recomNumb,setRecomNumb]=useState('')
  const [tradersNumb,setTradersNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [visits,setVisits]=useState('')
  const [status,setStatus]=useState('')
 
    
 
      useEffect(()=>{
        fetch('/collection_controls').then(res=>res.json()).then(res=>{
      
          setVisits(res[0].noOfVisits)
        })
        fetch('/collection_requests_number').then(res=>res.json()).then(res=>{
          setReqNumb(res.length)
            })
            fetch('/collection_orders_number').then(res=>res.json()).then(res=>{
              setOrdersNumb(res.length)
                })
            fetch('/collection_recommendations_number').then(res=>res.json()).then(res=>{
              setRecomNumb(res.length)
                })
      fetch('/collection_kayasers_number').then(res=>res.json()).then(res=>{
                  setKayasersNumb(res.length)
                    })
  fetch('/collection_orders_orders').then(res=>res.json()).then(res=>{
                      setTradersNumb(res.length)
                        })
                        fetch('/collection_orders_orders').then(res=>res.json()).then(res=>{
                   
                          res.forEach(order=>{
                         
                            data+="<div>"+order.name+"-"+order.contact+'</div><div>'+order.msg+"</div><div>Trading ID: "+order.tradingId+"</div></div><hr></hr>"
                          
                          })
                          
                          setOrders(data);
                            })   
      },[])


return(

  <div>
    <div style={{fontSize:"30px",color:"red",textAlign:"center",fontFamily:"charm"}}>Orders</div>
    <div style={{padding:"10px",background:"black",textAlign:"center",fontSize:"10px"}}>
      <a style={{color:"white",paddingRight:"9px",}} href="https://kayas-mak.herokuapp.com/pages/orders"><span class="hovereffect">ORDERS {ordersNumb}  </span></a>       <a style={{color:"white",paddingRight:"9px",}} href="https://kayas-mak.herokuapp.com/pages/admin/requests"><span class="hovereffect">REQUESTS {reqNumb}  </span></a>
         <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/recommendations"><span class="hovereffect"> RECOMMENDATIONS {recomNumb} </span></a>
         <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/kayasers"><span class="hovereffect"> KAYASERS {kayasersNumb} </span></a> 
          <br></br>
         <a  style={{color:"white",paddingRight:"9px"}} href="#"><span class="hovereffect"> TRADERS {tradersNumb}</span></a> <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/controls"><span class="hovereffect"> VISITS {visits}</span></a>
         <a  style={{color:"white",paddingRight:"9px"}} href="https://kayas-mak.herokuapp.com/pages/admin/controls"><span class="hovereffect">CONTROLS</span></a> 
         </div>
       <div style={{textAlign:"center",padding:"20px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:orders}}/></div>


  
  </div>
);
}





export default Orders