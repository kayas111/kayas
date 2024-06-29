import React, {useEffect,useState} from 'react'



 
export function ControlsNav(){
  const [attendeeRegistersNumb,setAttendeeRegistersNumb]=useState('')
  const [reqNumb,setReqNumb]=useState('')
  const [ordersNumb,setOrdersNumb]=useState('')
  const [monitoredOpinionsNumb,setMonitoredOpinionsNumb]=useState('')
  const [hookUpsNumb,setHookUpsNumb]=useState('')
  const [recomNumb,setRecomNumb]=useState('')
  const [tradersNumb,setTradersNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [monitoredArticlesNumb,setMonitoredArticlesNumb]=useState('')
  const [visits,setVisits]=useState('')
  const [status,setStatus]=useState('')
  const [tradingStatus,setTradingStatus]=useState('')
 
 
      useEffect(()=>{
    
 
          fetch('/collection_registers_registers').then(res=>res.json()).then(res=>{
            setAttendeeRegistersNumb(res.length)})

        fetch('/collection_monitoredopinions_number').then(res=>res.json()).then(res=>{
      
          setMonitoredOpinionsNumb(res.length)
        })
        fetch('/collection_hookups_number').then(res=>res.json()).then(res=>{
      
          setHookUpsNumb(res.length)
        })
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
  fetch('/collection_traders_number').then(res=>res.json()).then(res=>{
                      setTradersNumb(res.length)
                        })
                        fetch('/collection_multidocs_monitoredArticleOpinions').then(res=>res.json()).then(res=>{
                          setMonitoredArticlesNumb(res.length)
                            })

                            fetch('/getCurrentPushNotification').then(res=>res.json()).then(resp=>{
                             // document.getElementById('setPushNotificationForm').title.value=resp[0].notification.title
                             // document.getElementById('setPushNotificationForm').body.value =resp[0].notification.body
                     
                                })

      },[])    

return(
  <div style={{padding:"10px",background:"black",fontSize:"12px"}}>
  <a style={{color:"white",paddingRight:"9px",}} href="/pages/admin/orders"><span class="hovereffect">Orders {ordersNumb}  </span></a>       
  <a style={{color:"white",paddingRight:"9px",}} href="/pages/admin/requests"><span class="hovereffect">Requests {reqNumb}  </span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/recommendations"><span class="hovereffect"> Recommendations {recomNumb} </span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/kayasers"><span class="hovereffect"> Kayasers {kayasersNumb} </span></a> 
      <br></br>
      <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/clientsmonitor"><span class="hovereffect"> Monitored-Opinions{monitoredOpinionsNumb}</span></a> 
      <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/showhookups"><span class="hovereffect"> Hookups {hookUpsNumb}</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/attendeeregisters"><span class="hovereffect"> Registers {attendeeRegistersNumb}</span></a> <br></br>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/articlesmonitor"><span class="hovereffect">Monitored-Articles {monitoredArticlesNumb}</span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="#"><span class="hovereffect"> Visits {visits}</span></a>
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/controls"><span class="hovereffect">Controls</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/kayasercare"><span class="hovereffect">Kayas-Care</span></a><br></br> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/traderscare"><span class="hovereffect">Traders {tradersNumb}</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/attendanceregistercare"><span class="hovereffect">Register-Care</span></a> 
     <a  style={{color:"white",paddingRight:"9px"}} href="/pages/admin/smsnotificationscare"><span class="hovereffect">SMS-Notifications</span></a> 
     
     </div>
)



}

export function ControlsHome(){
    
  const [reqNumb,setReqNumb]=useState('')
  const [ordersNumb,setOrdersNumb]=useState('')
  const [hookUpsNumb,setHookUpsNumb]=useState('')
  const [recomNumb,setRecomNumb]=useState('')
  const [tradersNumb,setTradersNumb]=useState('')
  const [kayasersNumb,setKayasersNumb]=useState('')
  const [visits,setVisits]=useState('')
  const [dndStatus,setDndStatus]=useState('')
  const [status,setStatus]=useState('')
  const[addMessageeStatus,setAddMessageeStatus]=useState('')
  const [tradingStatus,setTradingStatus]=useState('')
  const [saveLinkStatus,setSaveLinkStatus]=useState('')
  const [mapFromCategoryStatus,setMapFromCategoryStatus]=useState('')
  const [deleteArticleStatus,setDeleteArticleStatus]=useState('')
  const [removeMessageeStatus,setRemoveMessageeStatus]=useState('')
  const [pushNotificationStatus,setPushNotificationStatus]=useState('')
  const [deleteAllBidsStatus,setDeleteAllBidsStatus]=useState('')
  const [setBiddingPriceStatus,setSetBiddingPriceStatus]=useState('')
  const [setBiddingHeadlineStatus,setSetBiddingHeadlineStatus]=useState('')
  const [setBiddingMessageStatus,setSetBiddingMessageStatus]=useState('')

  let classCols='col-md-3'
 
      useEffect(()=>{
        fetch('/collection_hookups_number').then(res=>res.json()).then(res=>{
      
          setHookUpsNumb(res.length)
        })
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
  fetch('/collection_traders_number').then(res=>res.json()).then(res=>{
                      setTradersNumb(res.length)
                        })
                     

      },[])    


  return(

    <div>
    
      <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Controls</div>
  
  <ControlsNav/>
  <div class='row'>
  <div class={classCols} style={{textAlign:"center",padding:"20px"}}> 
            
            
             <form method="post" id='saveLinkForm' >
             <div style={{paddingBottom:"8px"}}><div class="formLabel">Save links</div></div>
         <div class="mb-3">
         
         <input type="text" class="form-control" autoComplete="off" name="desc" placeholder='Enter description'   ></input>
         <br></br>
         <input type="text" class="form-control" autoComplete="off" name="linkUrl" placeholder='Enter link'  ></input>
       
           
         </div>
        
         
         <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:saveLinkStatus}}/>
         
         <div style={{borderRadius:"30px"}} onClick={()=>{
let desc=document.getElementById('saveLinkForm').desc.value.trim(),linkUrl=document.getElementById('saveLinkForm').linkUrl.value.trim()

        if(Array.from(linkUrl).length<1){
            setSaveLinkStatus('Enter a link......')
            
                      }
          
          else{
            setSaveLinkStatus('Saving......')

            if(Array.from(desc).length<1){
           desc='No description'
              
                        }else{}



            let payLoad={desc:desc,linkUrl:linkUrl}


            fetch('/saveLink',{method:"post",
            headers: { 'Content-type': 'application/json' },
          body:JSON.stringify(payLoad)
        }).then(resp=>resp.json()).then(resp=>{
          setSaveLinkStatus(resp.msg)
          document.getElementById('saveLinkForm').linkUrl.value=''


        })

          }
          }} class="btn btn-success">Save</div><p></p>
        
         </form>
             
             
         </div>
         
         
         


  <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>DELETE ARTICLE</div>
    <div  dangerouslySetInnerHTML={{__html:deleteArticleStatus}}/>
    <form  id="deleteArticleForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="articleId" placeholder='Enter Article ID' ></input>
     
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   setDeleteArticleStatus("deleting.................")
    
      fetch('/deleteArticle',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({articleId:parseInt(document.getElementById('deleteArticleForm').articleId.value)})}).then(res=>res.json()).then(resp=>{
   if(resp.presence===1){

    setDeleteArticleStatus("Successful")
    document.getElementById('deleteArticleForm').articleId.value=""
   }else{
    setDeleteArticleStatus("Article does not exist")

   }
     
    }) 
        
  
      }}>DELETE</span></div>
    </form></div>
    <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>DND ADD/REMOVE</div>
    <div  dangerouslySetInnerHTML={{__html:dndStatus}}/>
    <form  id="dndForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Enter contact' ></input>
     
    </div><div class='row'>

   <div class='col-6'> <span type="submit" class="btn btn-success" onClick={()=>{
   if(Array.from(document.getElementById('dndForm').contact.value).length<10||Array.from(document.getElementById('dndForm').contact.value).length>10){
    setDndStatus("Enter 10 digits contact ..........")
   }else{
    setDndStatus("Adding.................")
    fetch('/updateDndList',{method:"post",headers:{"Content-type":"application/json"},
   body:JSON.stringify({contact:parseInt(document.getElementById('dndForm').contact.value),action:'add'})}).then(res=>res.json()).then(resp=>{
     setDndStatus(resp[0])
     document.getElementById('dndForm').contact.value=""
   }) 
       
   }
  
      }}>ADD</span></div>
<div class='col-6'> <span type="submit" class="btn btn-success" onClick={()=>{
   if(Array.from(document.getElementById('dndForm').contact.value).length<10||Array.from(document.getElementById('dndForm').contact.value).length>10){
    setDndStatus("Enter 10 digits contact ..........")
   }else{
    setDndStatus("Removing.................")
    
    fetch('/updateDndList',{method:"post",headers:{"Content-type":"application/json"},
  body:JSON.stringify({contact:parseInt(document.getElementById('dndForm').contact.value),action:'remove'})}).then(res=>res.json()).then(resp=>{


    setDndStatus(resp[0])
  
  }) 
      

   }
  
      }}>REMOVE</span></div>
      </div>
    </form></div>
    <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>MAP FROM CATEGORY TO MESSAGER</div>
    <div  dangerouslySetInnerHTML={{__html:mapFromCategoryStatus}}/>
    <form  id="mapFromCategoryForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="category" placeholder='Enter Category Description' ></input>
     
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   setMapFromCategoryStatus("Maping.................")
    
      fetch('/mapFromCategoryToMessager',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({category:document.getElementById('mapFromCategoryForm').category.value})}).then(res=>res.json()).then(resp=>{
      setMapFromCategoryStatus(resp[0])
     
    }) 
        
  
      }}>MAP CATEGORY</span></div>
    </form></div>
    <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>REMOVE MESSAGEE FROM CONTACTS BASE</div>
    <div  dangerouslySetInnerHTML={{__html:removeMessageeStatus}}/>
    <form  id="removeMessageeForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="desc" placeholder='Description value' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' ></input>
     
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
  setRemoveMessageeStatus("Removing.................")
    
      fetch('/removeMessagee',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({desc:document.getElementById('removeMessageeForm').desc.value,
   contact:parseInt(document.getElementById('removeMessageeForm').contact.value)})}).then(res=>res.json()).then(resp=>{
     setRemoveMessageeStatus(resp[0])
     document.getElementById('removeMessageeForm').contact.value=""

     
    }) 
        
  
      }}>REMOVE MESSAGEE</span></div>
    </form></div>  
    <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>GET TRADE DETAILS</div>
    <div  dangerouslySetInnerHTML={{__html:tradingStatus}}/>
    <form  id="GetTradingDetails" action="">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  id="contact" placeholder='Contact' minLength={10} required></input>
   
  
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   
    setTradingStatus("Please wait ......")
    
         
         let url='/admin_getTradingDetails/'+document.getElementById("GetTradingDetails")[0].value
         fetch(url).then(res=>res.json()).then(res=>{
         if(res.length===1){
          setTradingStatus(res[0])
         }else{
          
          setTradingStatus(`Name: ${res[1].name}<div>Student No: ${res[1].stdNo}</div><div>Email: ${res[1].email}</div><div>Contact: ${res[1].contact}</div>`)
         }
  
                  })
  
  
      }}>GET DETAILS</span></div>
    </form></div>
    <div class={classCols} style={{padding:"5px"}}>
      <div class='row'>
      <div class="col-md-6"><div style={{padding:"10px"}}>
    <form method="post" action="/deleteAllOrders">
   
  
   <input type="hidden" class="form-control" autoComplete="off" name="subject" placeholder='Subject' ></input><br></br>
  
   <button type="submit" class="btn btn-success">Clear orders</button>
   </form></div></div>
  <div class="col-md-6"><div style={{padding:"10px"}}>
    <form method="post" action="/deleteAllRequests">
   
  
   <input type="hidden" class="form-control" autoComplete="off" name="subject" placeholder='Subject' ></input><br></br>
  
   <button type="submit" class="btn btn-success">Clear requests</button>
   </form></div></div>

      </div>
 
   
   
  
  
  </div>
  <div class={classCols} style={{padding:"20px"}}>
   <div style={{color:"red", fontSize:"15px"}}>DELETE DOCUMENTS</div>
    <form method="post" action="/deleteAllDocuments">
   
  
   <input type="text" class="form-control" autoComplete="off" name="collection" placeholder='Enter Collection Name' ></input><br></br>
  
   <button type="submit"  class="btn btn-success">Delete documents</button>
   </form></div>
   <div class={classCols} style={{padding:"20px"}}>
   <div style={{color:"red", fontSize:"15px"}}> RESET VISITS</div>
    <form method="post" action="/collection_controls_resetVisits">
   
  
   <input type="" class="form-control" autoComplete="off" name="value" placeholder='Enter value' ></input><br></br>
  
   <button type="submit" class="btn btn-success">Reset</button>
   </form></div>
   <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}> QUOTES</div>
    <form method="post" action="/collection_quotes_quote">
    <div class="mb-3">
  
    <textArea rows="4" type="text" class="form-control" name="quote" placeholder='Quote To Post' required></textArea>
  
   
  
    </div>
    <button type="submit" class="btn btn-success">Post</button>
    </form></div>

    <div class={classCols} style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>SET PUSH NOTIFICATION</div>
    <form id="setPushNotificationForm">
    <div class="mb-3">
    <textArea rows="1" type="text" class="form-control" name="title" placeholder='Title' ></textArea><br></br>
    <textArea rows="3" type="text" class="form-control" name="body" placeholder='Message'></textArea>
  
   
  
    </div>
    <div  dangerouslySetInnerHTML={{__html:pushNotificationStatus}}/>
   
<div class='row'>
<div class='col-6 col-md-6'>
<div  class="btn btn-success" onClick={()=>{
  setPushNotificationStatus("Setting.................")
    
      fetch('/setPushNotification',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({title:document.getElementById('setPushNotificationForm').title.value,
   body:document.getElementById('setPushNotificationForm').body.value})}).then(res=>res.json()).then(resp=>{
    setPushNotificationStatus(resp[0])
   

     
    }) 
        
  
      }} >Set</div>
</div>
<div class='col-6 col-md-6 hovereffect'>
<div  class="btn btn-success" onClick={()=>{
 fetch('/sendPushNotifications').then(res=>res.json()).then(resp=>{
;
     
    }) 
        
  
      }} >Notify</div>
</div>
</div>

    </form></div>
    <div class='col-md-6' style={{padding:"20px"}}> 
    <div style={{color:"red", fontSize:"25px"}}>BIDS CONTROL</div>
<div class='row'>

<div class='col-md-4'>
<form id='deleteAllBidsForm'>
    
   <div dangerouslySetInnerHTML={{__html:deleteAllBidsStatus}}></div>
  
   <div  class="btn btn-success" onClick={()=>{
    setDeleteAllBidsStatus('Deleting bids.........')

fetch('/deleteAllBids').then(resp=>{
  setDeleteAllBidsStatus('successfull!')

})

   }}>Delete All Bids</div>
   </form>

   <div  style={{paddingTop:"10px",paddingBottom:"10px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>SET PRICE</div>
    <form id='setBiddingPriceForm'>
   
  
    <input type="text" class="form-control" autoComplete="off" name="price" placeholder='Enter price'></input><br></br>
   <div dangerouslySetInnerHTML={{__html:setBiddingPriceStatus}}></div>
    <div  class="btn btn-success" onClick={()=>{
setSetBiddingPriceStatus('Setting........')

fetch('/collection_controls_setBiddingPrice',{
  method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingPrice:parseInt(document.getElementById('setBiddingPriceForm').price.value)})
}).then(resp=>resp.json()).then(resp=>{
  setSetBiddingPriceStatus(resp[0])

})


    }} >Set price</div>
    </form></div>


</div>


<div class='col-md-8'>
<div style={{paddingBottom:"10px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>BIDDING HEADLINE</div>
    <form id='setBiddingHeadlineForm' >
    <div class="mb-3">
  
    <textArea rows="2" type="text" class="form-control" name="biddingHeadline" placeholder='Enter bidding Headline'></textArea>
  
    </div>
    <div dangerouslySetInnerHTML={{__html:setBiddingHeadlineStatus}}></div>
    <div class="btn btn-success" onClick={()=>{
setSetBiddingHeadlineStatus('Setting........')

fetch('/collection_controls_setBiddingHeadline',{
  method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingHeadline:document.getElementById('setBiddingHeadlineForm').biddingHeadline.value})
}).then(resp=>resp.json()).then(resp=>{
  setSetBiddingHeadlineStatus(resp[0])

})


    }} >Set Bidding Headline</div>
    </form></div>
  
    <div style={{padding:""}}>  
    <div style={{color:"red", fontSize:"15px"}}>BIDDING MESSAGE</div>
    <form id='setBiddingMessageForm' >
    <div class="mb-3">
  
    <textArea rows="3" type="text" class="form-control" name="biddingMsg" placeholder='Enter bidding Message'  required></textArea>
  
    </div>
    <div dangerouslySetInnerHTML={{__html:setBiddingMessageStatus}}></div>
    <div class="btn btn-success" onClick={()=>{
setSetBiddingMessageStatus('Setting........')

fetch('/collection_controls_biddingMsg',{
  method:'post', headers:{'content-type':'application/json'},body:JSON.stringify({biddingMessage:document.getElementById('setBiddingMessageForm').biddingMsg.value})
}).then(resp=>resp.json()).then(resp=>{
  setSetBiddingMessageStatus(resp[0])

})


    }} >Set Bidding Message</div>
    </form></div>





</div>






</div>
    
    </div>







  </div>
  
   
  
  
  
   
  
   
  
  
 

   
  
   
  
  
   
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>KAYAS URL</div>
    <form method="post" action="/collection_controls_kayasurl">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off" name="kayas" placeholder='Contact To Display'  required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="kayasurl" placeholder='Link To Visit' required></input>
  
   
  
    </div>
    <button type="submit" class="btn btn-success">Post</button>
    </form></div>
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>MESSAGE WISH</div>
    <form method="post" action="/collection_controls_wish">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off" name="refName" placeholder='To Who?'  required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="writersName" placeholder='Sender Name' required></input><br></br>
    <textArea rows="5" type="text" class="form-control" name="writersMsg" placeholder='Sender Message' required></textArea>
   
  
    </div>
    <button type="submit" class="btn btn-success">Post</button>
    </form></div>
  
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>TOP NAVIGATION QUOTES</div>
    <form method="post" action="/collection_controls_topNavQuote">
    <div class="mb-3">
  
    <textArea rows="3" type="text" class="form-control" name="topNavQuote" placeholder='Top Nav Quote 1'  required></textArea>
  
   
  
    </div>
    <button type="submit" class="btn btn-success">Post</button>
    </form></div>
  
    <div style={{padding:"20px"}}>  
    
    <form method="post" action="/collection_controls_topNavQuote2">
    <div class="mb-3">
  
    <textArea rows="3" type="text" class="form-control" name="topNavQuote2" placeholder='Top Nav Quote 2'  required></textArea>
  
   
  
    </div>
    <button type="submit" class="btn btn-success">Post</button>
    </form></div>
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>BROADCAST EMAIL</div>
    <form method="post" action="/broadcastEmail">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off" name="subject" placeholder='Subject'  required></input><br></br>
   
    <textArea rows="7" type="text" class="form-control" name="msg" placeholder=' Message' required></textArea>
   
  
    </div>
    <button type="submit" class="btn btn-success">Send</button>
    </form></div>
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>ADD WHATSAPP GROUP JOINING LINK</div>
    <ol>
      <li>Makerere University</li>
      <li>Kyambogo University</li>
      <li>Mubs</li>
      
    </ol>
    <form method="post" action="/link_to_whatsapp_group">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off" name="campusId" placeholder='Campus Id' maxLength={1} required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="groupName" placeholder='Group Name' required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="groupAdmin" placeholder='Group Admin contact' required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="description" placeholder='Description' required></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="link" placeholder='Enter the link' required></input><br></br>
   
   
   
  
    </div>
    <button type="submit" class="btn btn-success">Add</button>
    </form></div>
  
  
  
  
   
  
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"25px"}}>TOP PHOTO MSGS</div>
    <form method="post" action="/collection_controls_topPhotoMsgs">
    <div class="mb-3">
  
    <textArea rows="3" type="text" class="form-control" name="topPhotoMsg1" placeholder='Enter Message 1'  required></textArea><br></br>
    <textArea rows="3" type="text" class="form-control" name="topPhotoMsg2" placeholder='Enter Message 2'  required></textArea><br></br>
    <textArea rows="3" type="text" class="form-control" name="topPhotoMsg3" placeholder='Enter Message 3'  required></textArea><br></br>
    <textArea rows="3" type="text" class="form-control" name="topPhotoMsg4" placeholder='Enter Message 4'  required></textArea><br></br>
    <textArea rows="3" type="text" class="form-control" name="topPhotoMsg5" placeholder='Enter Message 5'  required></textArea><br></br>
  
    </div>
    <button type="submit" class="btn btn-success">Post Messages</button>
    </form></div>
  
    
    <div style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>RESET TRADING CODE</div>
    <form method="post" action="/admin_setTradingCode">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="tradingId" placeholder='Contact' maxLength={10} minLength={10} required></input><br></br>
    <input  type="text" class="form-control" autoComplete="off"  name="tradingCode" placeholder='Enter new trading code' minLength={4} maxLength={4} required></input>
  
   
  
    </div>
    <button type="submit" class="btn btn-success">RESET CODE</button>
    </form></div>
    <div style={{padding:"20px"}}>
   <div style={{color:"red", fontSize:"15px"}}> RESET ADMIN REGISTRATION CODE</div>
    <form method="post" action="/collection_controls_resetAdminRegCode">
   
  
   <input type="" class="form-control" autoComplete="off" name="adminRegCode" placeholder='Enter new admin Reg code' ></input><br></br>
  
   <button type="submit" class="btn btn-success">Reset</button>
   </form></div>
   <div style={{padding:"20px"}}>  
    
    <div  dangerouslySetInnerHTML={{__html:addMessageeStatus}}/>
    <form  id="addMessagee">
    <div style={{color:"green", textAlign:"center", fontWeight:"bold",fontSize:"15px"}}>Add contacts to Kayas messager</div>
    <div style={{color:"red",textAlign:"center", fontSize:"12px"}}>Supports top up</div>
    <div class="mb-3">
  
    <textArea rows="10" type="text" class="form-control" autoComplete="off"  name="messagees" placeholder='Enter array of messagees' ></textArea>
   
  
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   
    setAddMessageeStatus("Please wait ...")
      fetch('/addToMessagingQueueThroughAdmin',{method:"post",headers:{"Content-type":"application/json"},
    body:('['+document.getElementById('addMessagee').messagees.value+']')}).then(res=>res.json()).then(resp=>{
    
      if(resp.statusOk===0){
        setAddMessageeStatus(`<div style='color:red;'>${resp.messagees.length} invalid: ${resp.messagees} </div>`)
      }else{
        setAddMessageeStatus(`<div style='color:green;'>Successfully made comparisons in relation to category: ${resp.category}, hope it is the right category. </div>`)
      }
    }) 
        
  
      }}>ADD</span></div>
    </form></div>
    </div>
  );
}



export function ShowHookUps(){

  let data=""
  
  const [hookUpsNumb,setHookUpsNumb]=useState('')
  const [hookUps,setHookUps]=useState('')
 
      useEffect(()=>{
        
           
      fetch('/collection_hookups_hookups').then(res=>res.json()).then(res=>{
        setHookUpsNumb(res.length)
                      res.forEach(hookup=>{
                      
                        data+="<div>"+hookup.name+"-"+hookup.campus+"-"+hookup.contact+"<div style='font-family:charm;'>"+hookup.msg+"</div></div><hr></hr>"
                      
                      })
                      
                      setHookUps(data);
                        })     

      },[])





  
  return(
    <div>
    <div style={{color:"red",fontSize:"25px",padding:"5px",textAlign:"center"}}>{hookUpsNumb} Hook Ups</div>
 <ControlsNav/>
     <div style={{padding:"10px"}}>
     
     <div style={{padding:"5px",textAlign:"center"}}><div dangerouslySetInnerHTML={{__html:hookUps}}/></div>

    </div>
  
  
    </div>
  )
  
  
  
  }
  

  
export function Kayasers(){
  let data=""
  
  const [kayasers,setKayasers]=useState('')
 
      useEffect(()=>{
      
                   fetch('/collection_kayasers_kayasers').then(res=>res.json()).then(res=>{
                      res.reverse()
                      res.forEach(kayaser=>{
                     
                        data+=`<div class='col-md-4'><div>${kayaser.name}</div><div>Tel: ${kayaser.contact}, std No. ${kayaser.stdNo}</div><div>Institution: ${kayaser.institution}</div><div>Email: ${kayaser.email}</div><hr></hr></div>`
                      
                      })
                      
                      setKayasers(data);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Kayasers</div>
  
       <ControlsNav/>
       <div style={{padding:"20px",fontSize:"15px"}}><div class='row' dangerouslySetInnerHTML={{__html:kayasers}}/></div>


  
  </div>
);
}


export function Orders(){
  let data=""

  const [orders,setOrders]=useState('')

 
    
 
      useEffect(()=>{
      
                        fetch('/collection_orders_orders').then(res=>res.json()).then(res=>{
                   
                          res.forEach(order=>{
                         
                            data+="<div>"+order.name+"-"+order.contact+'</div><div>'+order.msg+"</div><div>Trading ID: "+order.tradingId+"</div></div><hr></hr>"
                          
                          })
                          
                          setOrders(data);
                            })   
      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center",fontFamily:"charm"}}>Orders</div>
    <ControlsNav/>
       <div style={{textAlign:"center",padding:"20px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:orders}}/></div>


  
  </div>
);
}



export function Requests(){
  let data=""
 
  const [requests,setRequests]=useState('')
  const [requestManagementFormStatus,setRequestManagementFormStatus]=useState('')
 
      useEffect(()=>{
       
                   fetch('/collection_requests_requests').then(res=>res.json()).then(res=>{
                   
                      res.forEach(request=>{
                     
                        data+=`<div class='col-md-6' style='background-color:#E1E1E1;border:6px solid white;border-radius:12px;padding:10px;'> <div style='border-radius:10px;padding:3px;'><div>${request.name} - 0${request.contact}</div><div style='color:green;'>${request.serviceType}</div></div><div style='padding-top:5px;'>Recommender: 0${request.recommender}</div><div>ID: ${request._id}</div></div>`
                      
                      })
                      
                      setRequests(data);
                        })    

      },[])


return(

  <div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Requests</div>
    <ControlsNav/>
<div class="row">
  <div class="col-md-4">
  <div style={{padding:"30px"}}>  
    
    <form id="requestManagementForm" >
    <div style={{paddingBottom:"8px"}}><div class="formLabel">Request management</div></div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="requestId" placeholder='Enter request ID' ></input>
 
    </div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:requestManagementFormStatus}}/>
    <div style={{borderRadius:"18px"}} onClick={()=>{
      
      if(Array.from(document.getElementById('requestManagementForm').requestId.value).length<24||Array.from(document.getElementById('requestManagementForm').requestId.value).length>24){
        setRequestManagementFormStatus('<div style="color:red;">Enter correct ID</div>')
      }else{
        setRequestManagementFormStatus('Clearing......')
        fetch('/clearRequest',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({requestId:document.getElementById('requestManagementForm').requestId.value})
  }).then(res=>res.json()).then(res=>{
    setRequestManagementFormStatus(res[0])
    document.getElementById('requestManagementForm').requestId.value=""
    
  })
      }
      
      
      
  

    }}type="text" class="btn btn-success hovereffect">Clear request</div>
    </form>
    </div>
 

  </div>

  
  </div>      

 <div style={{padding:"20px",fontSize:"15px"}}><div class="row" dangerouslySetInnerHTML={{__html:requests}}/></div>


  
  </div>
);
}




export function Recommendations(){
  let data=""
  
  const [recommendation,setRecommendation]=useState('')
  const [getRecommendationStatus,setGetRecommendationStatus]=useState('')
     
return(

  <div>
    <div style={{fontSize:"20px",color:"red",textAlign:"center"}}>Recommendations</div>
    
       <ControlsNav/>
       
       <div style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"15px"}}>RECOMMENDATION DETAILS</div>
    
    <form id="getRecommendationForm" >
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter contact' ></input>
 
    </div>
    <div style={{fontSize:"15px"}}><div dangerouslySetInnerHTML={{__html:recommendation}}/></div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:getRecommendationStatus}}/>
    <div style={{borderRadius:"18px"}} onClick={()=>{
      
      if(Array.from(document.getElementById('getRecommendationForm').contact.value).length<10||Array.from(document.getElementById('getRecommendationForm').contact.value).length>10){
        setGetRecommendationStatus('<div style="color:red;">Enter 10 digits contact</div>')
      }else{
        setGetRecommendationStatus('Fetching......')
        fetch('/getRecommendationDetails',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({method:'getRecommender',contact:parseInt(document.getElementById('getRecommendationForm').contact.value)})
  }).then(res=>res.json()).then(resp=>{
  
if(resp.length===0){
  setGetRecommendationStatus('No data')
}else{

  setGetRecommendationStatus(`<div style='padding-bottom:20px;'><div>${resp[0].data.recommenderName}, ${resp[0].data.recommenderContact}</div><div>${resp[0].data.recommenderInstitution}</div></div>`)
}
    
  })
      }
      
      
      
  

    }}type="text" class="btn btn-success hovereffect">Get recommender</div>
    </form>
    </div>

  
  </div>
);
}


export function ClientsMonitor(){
  const[opinions,setOpinions]=useState('')
  const[filteredOpinions,setFilteredOpinions]=useState('')
  const[deleteStatus,setDeleteStatus]=useState('')
  

let data=""
useEffect(()=>{
   

  fetch('/collection_monitoredopinions_opinions').then(res=>res.json()).then(res=>{
  
    res.reverse()
    res.forEach(opinion=>{
      
      data+="<div><span ><a style='color:black;' href='/pages/opinions/"+opinion.clientId+"'><span class='hovereffect'>"+opinion.clientId+"</span></a></span> "+opinion.name+" <span ><a style='color:black;' href='https://api.whatsapp.com/send?phone="+opinion.contact+"&text=Hello%20"+opinion.name+",%20we%20are%20Kayas.'><span class='hovereffect'>"+opinion.contact+"</span></a></span></div><div>"+opinion.msg+"</div><hr></hr>"
    
    })

    
    setOpinions(data);
      })
  
  },[])


  return(<div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>Opinions Monitor</div>
<ControlsNav/>
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6" style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>Enter Client ID to delete opinions</div>
   
    <form  id="opinionsDeleter">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="clientId" placeholder='Client ID' required></input>
   
  
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   
    setDeleteStatus("Deleting "+document.getElementById("opinionsDeleter").clientId.value+" opinions .......")
    
  fetch('/deleteClientOpinions',{
    method:"post",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({clientId:document.getElementById("opinionsDeleter").clientId.value})
  }).then(res=>res.json()).then(res=>{
  if(res.presence===1){
    setDeleteStatus("Succesful")
  }else{
    setDeleteStatus("Client doesnt exist")
  }
  
    
  })
  
      }}>Delete</span></div>
    </form></div>
    <div class="col-md-3"></div>
</div>
<div>
<div style={{textAlign:"center",padding:"20px",fontSize:"20px",color:"red"}}>{deleteStatus}</div>


<div style={{textAlign:"center",paddingLeft:"20px",paddingRight:"20px",fontSize:"15px",fontFamily:"charm"}}><div dangerouslySetInnerHTML={{__html:filteredOpinions}}/></div>
<div style={{textAlign:"center",padding:"20px",fontSize:"20px",color:"red"}}>All opinions</div>
<div style={{textAlign:"center",padding:"20px",fontSize:"15px",fontFamily:"charm"}}>
  <div dangerouslySetInnerHTML={{__html:opinions}}/></div>
</div>

  </div>)
}

export function ArticlesMonitor(){
  const[monitoredArticleOpinions,setMonitoredArticleOpinions]=useState('')
  let data=""
useEffect(()=>{
   

  fetch('/collection_multidocs_monitoredArticleOpinions').then(res=>res.json()).then(res=>{
 
    res.reverse()
    res.forEach(articleMonitorDoc=>{
        data+=`<div><div style='color:green;'>${articleMonitorDoc.headline1}</div><span ><a style='color:black;' href='/pages/pubarticles/article/${articleMonitorDoc.articleId}'><span class='hovereffect'>Article ${articleMonitorDoc.articleId},</span></a></span> written by ${articleMonitorDoc.author} <span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=${articleMonitorDoc.authorContact}&text=Hello%20${articleMonitorDoc.author},%20*this%20is%20Kayas*.%0A%0A A comment has been made on your article:%0A *%22${articleMonitorDoc.headline1}%22* %0A%0ATap this link below to see the comment that has been posted:%0Ahttps://kayas-mak.herokuapp.com/pages/pubarticles/article/${articleMonitorDoc.articleId}'><span class='hovereffect'>${articleMonitorDoc.authorContact}</span></a></span></div><div>Commenter: ${articleMonitorDoc.name} <span ><a style='color:black;' href='https://api.whatsapp.com/send?phone=${articleMonitorDoc.contact}&text=Hello%20${articleMonitorDoc.name},%20*this%20is%20Kayas*.'><span class='hovereffect'>${articleMonitorDoc.contact}</span></a></div><div style='font-family:charm;'>${articleMonitorDoc.msg}</div><hr></hr>`
    
    })

    setMonitoredArticleOpinions(data);
      })
  
  },[])



  return(<div>
    <div style={{color:"red",fontSize:"25px",textAlign:"center"}}>Articles monitor</div>
    <ControlsNav/>
    <div style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:monitoredArticleOpinions}}/>
   
   </div>)
}
export function SmsNotificationsCare(){
  let data=''
  const[pendingForSmsNotifications,setPendingForSmsNotifications]=useState('')
  const[SmsNotificationsRequestsNumb,setSmsNotificationsRequestsNumb]=useState('')
  const[subscriptionStatus,setSubscriptionStatus]=useState('')
  const[numbOfSmsSubscribers,setNumbOfSmsSubscribers]=useState('')
  useEffect(()=>{
  fetch('/pendingForSmsNotifications').then(resp=>resp.json()).then(resp=>{
   
    if(resp.length===0){
      setPendingForSmsNotifications(`<div>No pending SMS notification requests.</div>`)
      setSmsNotificationsRequestsNumb(resp.length)
    }else{
       resp.forEach(doc=>{
        data+=`<div  class='col-md-4'><div>Name: ${doc.name}</div><div>Contact:  ${doc.contact}</div><div>Recommender:  ${doc.recommender}</div><hr></hr></div>`
     
     })

     setPendingForSmsNotifications(data)
     setSmsNotificationsRequestsNumb(resp.length)
    }
    
  })
  fetch('/smsSubscribers').then(resp=>resp.json()).then(resp=>{
    setNumbOfSmsSubscribers(resp.length)
  })


  })
  return(
    <div>
      <div style={{color:"red",fontSzize:"12px",textAlign:"center"}}>SMS Notifications Care</div>
      <ControlsNav/>
      <div style={{color:"red",padding:"10px"}}>{SmsNotificationsRequestsNumb} requests, {numbOfSmsSubscribers} subscribers</div>
     <div class="row">
     <div class="col-md-6" style={{padding:"30px"}}>  
    <div style={{color:"green",fontWeight:"bold", fontSize:"20px"}}>SUBSCRIBE/TOP UP</div>
    <form id='SmsSubscriptionForm' >
    <div class="mb-3">
    <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='WhatsApp Subscribers Contact e.g 0703852178' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off" name="noOfSms" placeholder='Enter number of SMS' ></input>

    
     </div>
    <div style={{fontSize:"17px"}} dangerouslySetInnerHTML={{__html:subscriptionStatus}}/>
    <div class="row">
<div class="col-6 col-md-6">
<div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
 if(Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length<9 || Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length>10){
    setSubscriptionStatus('<div style="color:red;">Enter contact of atleast 9 digits.......</div>')

} else if(Array.from(document.getElementById('SmsSubscriptionForm').noOfSms.value).length<1){
  setSubscriptionStatus('<div style="color:red;">Enter number of SMS.......</div>')
}

else{
    setSubscriptionStatus('<div style="color:green;">Subscribing............</div>')

fetch('/subscriberequestforsmsnotifications',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({noOfSms:parseInt(document.getElementById('SmsSubscriptionForm').noOfSms.value),contact:parseInt(document.getElementById('SmsSubscriptionForm').contact.value)})
}).then(resp=>resp.json()).then(resp=>{
    setSubscriptionStatus(resp[0])
  document.getElementById('SmsSubscriptionForm').noOfSms.value=""
  document.getElementById('SmsSubscriptionForm').contact.value=""


})

}



    }}>Subscribe</div>

</div>
<div class="col-6 col-md-6">
<div style={{borderRadius:"18px"}} class="btn btn-success hovereffect" onClick={()=>{
 if(Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length<9 || Array.from(document.getElementById('SmsSubscriptionForm').contact.value).length>10){
    setSubscriptionStatus('<div style="color:red;">Enter contact of atleast 9 digits.......</div>')

} else if(Array.from(document.getElementById('SmsSubscriptionForm').noOfSms.value).length<1){
  setSubscriptionStatus('<div style="color:red;">Enter number of SMS.......</div>')
}

else{
    setSubscriptionStatus('<div style="color:green;">Topping up..........</div>')

fetch('/topupsmsnotifications',{
  method:"post",
  headers:{'content-type':'application/json'},
  body:JSON.stringify({noOfSms:parseInt(document.getElementById('SmsSubscriptionForm').noOfSms.value),contact:parseInt(document.getElementById('SmsSubscriptionForm').contact.value)})
}).then(resp=>resp.json()).then(resp=>{
    setSubscriptionStatus(resp[0])
  document.getElementById('SmsSubscriptionForm').noOfSms.value=""
  document.getElementById('SmsSubscriptionForm').contact.value=""


})

}



    }}>Top up</div>
</div>


    </div>
   



    </form>
   
    
    </div>
     </div>
     
     

    

      <div class='row' style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:pendingForSmsNotifications}}/>
    </div>
  )
}

export function KayaserCare(){
  const[careDeleteKayaserStatus,setCareDeleteKayaserStatus]=useState('')
  const[careRegDetailsStatus,setCareRegDetailsStatus]=useState('')
  const[careUpdateDetailsStatus,setCareUpdateDetailsStatus]=useState('')
  const[careUpdatePermissionTokenStatus,setCareUpdatePermissionTokenStatus]=useState('')
  return (<div>
    <ControlsNav/>
    <div class="row">
    
    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>GET REGISTRATION DETAILS</div>
    <div  dangerouslySetInnerHTML={{__html:careRegDetailsStatus}}/>
    <form id="getRegDetailsForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' ></input>
   
  
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   
  
      
if(Array.from(document.getElementById("getRegDetailsForm").contact.value).length<9||Array.from(document.getElementById("getRegDetailsForm").contact.value).length>10){
  setCareRegDetailsStatus("Enter correct contact")
}else{
  setCareRegDetailsStatus("Please wait ...")
  let url='/admin_getDetails/'+document.getElementById("getRegDetailsForm").contact.value
  fetch(url).then(res=>res.json()).then(res=>{
if(res.length===1){
    setCareRegDetailsStatus(res[0])
   }
   else{
    
    setCareRegDetailsStatus(`Name: ${res[1].name}<div>Institution: ${res[1].institution}</div><div>Email: ${res[1].email}</div><div>Contact: ${res[1].contact}</div>`)
   }

            })
}

         
  
  
      }}>GET DETAILS</span></div>
    </form></div>
    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>DELETE KAYASER</div>
    <div  dangerouslySetInnerHTML={{__html:careDeleteKayaserStatus}}/>
    <form id="deleteKayaserForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="contact" placeholder='Contact' minLength={10} required></input>
   
  
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
   
if(Array.from(document.getElementById("deleteKayaserForm").contact.value).length<9||Array.from(document.getElementById("deleteKayaserForm").contact.value).length>10){
  setCareDeleteKayaserStatus("Enter correct contact.........")
}else{
  setCareDeleteKayaserStatus("Please wait ......")
  let url='/admin_deleteKayaser/'+document.getElementById("deleteKayaserForm").contact.value
  fetch(url).then(res=>res.json()).then(res=>{

    setCareDeleteKayaserStatus(res[0])
    document.getElementById("deleteKayaserForm").contact.value=''
            })
}

         
  
  
      }}>DELETE KAYASER</span></div>
    </form></div>

    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>UPDATE REGISTRATION DETAILS</div>
    <div style={{fontSize:"9px",color:"grey"}}>name,stdNo,email,contact,pin,institution</div>
    <form id="updateDetailsForm" action="/admin_setPin">
    <div class="mb-3">
      <input  type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Enter name of  Field to update'></input><br></br>
    <input  type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Enter Value to update with'></input>
   
  
    </div>
    <div  dangerouslySetInnerHTML={{__html:careUpdateDetailsStatus}}/>

    <div type="submit" class="btn btn-success"onClick={()=>{
      setCareUpdateDetailsStatus("Updating ........")
            
         fetch('/admin_updateDetails',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
  fieldToUpdate:document.getElementById("updateDetailsForm").fieldToUpdate.value,
  fieldValue:document.getElementById("updateDetailsForm").fieldValue.value,
          }) 
      }).then(res=>res.json()).then(res=>{
        if(res.presence===0){
          setCareUpdateDetailsStatus("Doesn't exist as a Kayaser")
        }else{
if(res.fieldPresent===0){
  setCareUpdateDetailsStatus("Field is not valid")
}else {
  if(res.success===1){
  setCareUpdateDetailsStatus("successfull")
}else{

  setCareUpdateDetailsStatus("Is already up to date")
}
   }   }

        })
  
  
      }}>Update</div>
    </form></div>
    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>UPDATE PERMISSION TOKEN</div>
    <div style={{fontSize:"9px",color:"grey"}}>editArticle,createArticle,createAttendanceRegister</div>
    <form id="updatePermissionTokenForm" >
    <div class="mb-3">
      <input  type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Enter permission type to grant'></input><br></br>
    <input  type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Enter Value to update with'></input>
   
  
    </div>
    <div  dangerouslySetInnerHTML={{__html:careUpdatePermissionTokenStatus}}/>

    <div type="submit" class="btn btn-success"onClick={()=>{
if(Array.from(document.getElementById("getRegDetailsForm").contact.value).length<9||Array.from(document.getElementById("getRegDetailsForm").contact.value).length>10){
  setCareUpdatePermissionTokenStatus("Enter atleast 9 digits of the contact.....")
}else{
  fetch('/verifyUser',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
    contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
pin:'11111'
    }) 
}).then(res=>res.json()).then((resp)=>{
    if(resp.registered===false){
      setCareUpdatePermissionTokenStatus("<div style='color:green;'><span style='color:red;'>Not registered with Kayas!</div>")
   

    }
     else{
      
   
  setCareUpdatePermissionTokenStatus("Updating ........")
            
  fetch('/admin_updatePermissionToken',{
   method:"post",
   headers:{'Content-type':'application/json'},
   body:JSON.stringify({
contact:parseInt(document.getElementById("getRegDetailsForm").contact.value),
fieldToUpdate:document.getElementById("updatePermissionTokenForm").fieldToUpdate.value,
fieldValue:document.getElementById("updatePermissionTokenForm").fieldValue.value,
   }) 
}).then(res=>res.json()).then(res=>{
  setCareUpdatePermissionTokenStatus(res[0])
 })


      
       }
   
}
    

)  


  
}

     
  
      }}>Update token</div>
    </form></div>

    </div>
     
    </div>)
}

export function RegisterCare(){

  const[registerDetailsStatus,setRegisterDetailsStatus]=useState('')
  const[updateRegisterDetailsStatus,setUpdateRegisterDetailsStatus]=useState('')
  const [mapAttendanceRegisterToMessagerStatus,setMapAttendanceRegisterToMessagerStatus]=useState('')


 
  return (<div>
    <ControlsNav/>
    <div class="row">
    
    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>GET REGISTER DETAILS</div>
    <div  dangerouslySetInnerHTML={{__html:registerDetailsStatus}}/>
    <form id="getAttendanceRegDetailsForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="registrarContact" placeholder='Registrar contact'></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="registerId" placeholder='Register ID'></input>
       </div>
   
<div class="row">
<div class="col-6 col-md-6"> <span type="submit" class="btn btn-success" onClick={()=>{
    setRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/getAttendanceRegDetails',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value)})
    }).then(res=>res.json()).then(resp=>{
   
if(resp.length===0){
  setRegisterDetailsStatus('<div style="color:red;">Register does not exist!</div>')

}else{
setRegisterDetailsStatus(`<div><div>Title: ${resp[0].registerTitle}</div><div>Contacts: ${resp[0].attendees.length}</div><div>Created by: ${resp[0].name}</div></div>`)
}

    })

         
  
  
      }}>GET</span></div>

<div class="col-6 col-md-6"> <span type="submit" class="btn btn-success" onClick={()=>{
    setRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/closeopenAttendanceReg',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value)})
    }).then(res=>res.json()).then(resp=>{
      setRegisterDetailsStatus(resp[0])

    })

         
  
  
      }}>CLOSE/OPEN</span></div>


</div>

    </form></div>

    <div class="col-md-3" style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>MAP ATTENDANCE REGISTER TO MESSAGER</div>
    <div  dangerouslySetInnerHTML={{__html:mapAttendanceRegisterToMessagerStatus}}/>
    <form  id="mapAttendanceRegisterForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="attendanceRegisterAdminContact" placeholder='Register Admin Contact' ></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="attendanceRegisterId" placeholder='Register Id' ></input>
     
    </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
  setMapAttendanceRegisterToMessagerStatus("Mapping.................")
    
      fetch('/mapAttendanceRegisterToMessager',{method:"post",headers:{"Content-type":"application/json"},
    body:JSON.stringify({registerAdminContact:parseInt(document.getElementById('mapAttendanceRegisterForm').attendanceRegisterAdminContact.value),
    registerId:parseInt(document.getElementById('mapAttendanceRegisterForm').attendanceRegisterId.value)})}).then(res=>res.json()).then(resp=>{
      setMapAttendanceRegisterToMessagerStatus(resp[0])
     
    }) 
        
  
      }}>MAP REGISTER</span></div>
    </form></div>  

    <div class="col-md-3"style={{padding:"20px"}}>  
    <div style={{color:"red", fontSize:"15px"}}>EDIT REGISTER</div>
    <div style={{fontSize:"9px",color:"grey"}}>registerTitle,name,contact,permissionToAddContactTokens,smsUnitCost</div>
    <div  dangerouslySetInnerHTML={{__html:updateRegisterDetailsStatus}}/>
    <form id="updateAttendanceRegDetailsForm">
    <div class="mb-3">
  
    <input type="text" class="form-control" autoComplete="off"  name="fieldToUpdate" placeholder='Field to update'></input><br></br>
    <input type="text" class="form-control" autoComplete="off"  name="fieldValue" placeholder='Field value'></input>
       </div>
   <div> <span type="submit" class="btn btn-success" onClick={()=>{
  setUpdateRegisterDetailsStatus('<div style="color:green;">Please wait.........</div>')
    fetch('/updateAttendanceRegDetails',{
      method:"post",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({registrarContact:parseInt(document.getElementById('getAttendanceRegDetailsForm').registrarContact.value),registerId:parseInt(document.getElementById('getAttendanceRegDetailsForm').registerId.value),fieldToUpdate:document.getElementById('updateAttendanceRegDetailsForm').fieldToUpdate.value,fieldValue:document.getElementById('updateAttendanceRegDetailsForm').fieldValue.value})
    }).then(res=>res.json()).then(resp=>{
   
      setUpdateRegisterDetailsStatus(resp[0])

    })

         
  
  
      }}>UPDATE</span></div>
    </form></div>

    </div>
     
    </div>)
}

export function TradersCare(){
  const[updateTraderDetailsFormStatus,setUpdateTraderDetailsFormStatus]=useState('')
  const[setTraderNoticeStatus,setSetTraderNoticeStatus]=useState('')
  const[traders,setTraders]=useState('')
  const[traderNotice,setTraderNotice]=useState('')
  let data='';
  useEffect(()=>{
    fetch(`/collection_controls`).then(res=>res.json()).then(res=>{
     
      document.getElementById("setTraderNoticeForm").msg.value=res[0].traderNotice
  
    })
    fetch(`/collection_traders_number`).then(res=>res.json()).then(res=>{
     
 res.reverse()
    res.forEach(trader=>{
                     
      data+=`<div class='col-md-4'><div>Name: ${trader.name}</div><div>Contact: 0${trader.contact}</div><div>Acc bal: ${trader.accBal}</div><div>Visits: ${trader.pagesVisitsNo}</div><div>Institution: ${trader.institution}</div><hr></hr></div>`
    
    })
    
   setTraders(data);
  
    })
    
  })
  return(<div>
  <div style={{fontSize:"20px",color:"red",textAlign:"center"}}>Traders Care</div>
  
  <ControlsNav/>
  <div class="row">
    <div class="col-md-6">
    <div style={{padding:"5px"}}> 
    
      <form id="updateTraderDetailsForm" >
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Update Trader details</div></div>
      <div style={{fontSize:"12px"}}>accBal,sendSmsTokens,createAttendanceRegisterTokens</div>
    <div class="mb-3">
<input type="text" class="form-control" autoComplete="off" name="contact" placeholder="Enter trader's contact" ></input><br></br>
<input type="text" class="form-control" autoComplete="off" name="fieldToUpdate" placeholder="Enter field to update" ></input><br></br>
<input type="text" class="form-control" autoComplete="off" name="updateValue" placeholder='Enter update value'></input>
 
    </div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:updateTraderDetailsFormStatus}}/>
    <div class="row">
<div class="col-6 col-md-6">  <div style={{borderRadius:"18px",fontSize:"12px"}} 
onClick={()=>{
      
      if(Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length<10||Array.from(document.getElementById('updateTraderDetailsForm').contact.value).length>10){
        setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter contact of 10 digits</div>')
      } else if(Array.from(document.getElementById('updateTraderDetailsForm').fieldToUpdate.value).length<1){
        setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter field to update!</div>')
      } else if(Array.from(document.getElementById('updateTraderDetailsForm').updateValue.value).length<1){
        setUpdateTraderDetailsFormStatus('<div style="color:red;">Enter an update value!</div>')
      }
      else{
        setUpdateTraderDetailsFormStatus('Updating ........')
        fetch('/updateTraderDetails',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({method:'updateAsAdmin',argsObj:{traderContact:parseInt(document.getElementById('updateTraderDetailsForm').contact.value),fieldToUpdate:document.getElementById('updateTraderDetailsForm').fieldToUpdate.value,updateValue:parseInt(document.getElementById('updateTraderDetailsForm').updateValue.value)}
  
          }) 
      }).then(res=>res.json()).then((resp)=>{
        setUpdateTraderDetailsFormStatus(resp[0])
         
      }
          
  
      )  



      }
      

    }}type="text" class="btn btn-success hovereffect">Update</div></div>


    </div>
  

    </form>
    </div>
    </div>
    <div class="col-md-6">
    <div style={{padding:"5px"}}> 
    

      <form id="setTraderNoticeForm" >
      <div style={{paddingBottom:"8px"}}><div class="formLabel">Set trader notice</div></div>
    <div class="mb-3">
<textArea type="text" class="form-control" autoComplete="off" name="msg" placeholder='Enter message' ></textArea>

 
    </div>
    <div style={{fontSize:"15px"}} dangerouslySetInnerHTML={{__html:setTraderNoticeStatus}}/>
    <div class="row">

<div class="col-6 col-md-6"><div style={{borderRadius:"18px",fontSize:"12px"}} class="btn btn-success hovereffect" 
onClick={()=>{
      
  if(Array.from(document.getElementById('setTraderNoticeForm').msg.value).length<1){
    setSetTraderNoticeStatus('<div style="color:red;">Enter a message</div>')
  }
  else{

    setSetTraderNoticeStatus('Setting............')
    fetch('/setTraderNotice',{
      method:"post",
      headers:{'Content-type':'application/json'},
      body:JSON.stringify({
msg:document.getElementById("setTraderNoticeForm").msg.value,

      }) 
  }).then(res=>res.json()).then((resp)=>{
    setSetTraderNoticeStatus(resp[0])
  
   
  
     
     
  }
      

  )  



  }
  

}}

>Set notice</div></div>

    </div>
  

    </form>
    </div>
    </div>
  </div>
 
  <div style={{fontSize:"15px",padding:"5px",paddingTop:"40px"}} class='row' dangerouslySetInnerHTML={{__html:traders}}/>
  </div>)
}



export function AttendeeRegisters(){
  let data=''
  const [attendeeRegisters,setAttendeeRegisters]=useState('')
  const [attendeeRegistersNumb,setAttendeeRegistersNumb]=useState('')
 
 
  useEffect(()=>{
    fetch('/collection_registers_registers').then(res=>res.json()).then(res=>{
      setAttendeeRegistersNumb(res.length)
if(res.length===0){
  setAttendeeRegisters("no registers")
}else{
 res.reverse()
  res.forEach(registerDoc=>{
    data+=`<div class='col-sm-6 col-md-4'><div><a  style='color:black;' href='/pages/attendanceregs/${registerDoc.contact}/${registerDoc.registerId}'><span class="hoverEffectUnderline"><div  style='padding-bottom:10px;'><div style='color:green;font-size:18px;font-weight:bold;'>${registerDoc.registerTitle}</div><div style='font-size:12px;color:red;'>${registerDoc.institution} student wrote this. Tap to read details.</div><div style='font-size:12px;color:grey;'>Register ${registerDoc.registerId}, written by: ${registerDoc.name} ${registerDoc.contact}</div><div style='color:grey;'><span style='color:red;'>${registerDoc.attendees.length}</span> contacts</div></div> </span></a></div><hr></hr></div>`
})
setAttendeeRegisters(data)
}
      
    })})

  return(<div>
    <div style={{fontSize:"25px",color:"red",textAlign:"center"}}>{attendeeRegistersNumb} Attendee Registers</div>
    <ControlsNav/>
    <div style={{padding:"5px"}} class="row"  dangerouslySetInnerHTML={{__html:attendeeRegisters}}/>
    </div>)
}


export default ControlsNav