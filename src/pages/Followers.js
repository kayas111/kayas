
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getFormDataOnClick,getFormData,VerifyRegistrationAndPin,setKayaserVerificationStatus } from './Functions'

export function FollowingsNav(){
  let style={color:"white"}
  return (<div >
  <div style={{display:"flex",flexWrap:"wrap",borderRadius:"8px",padding:"3px"}}>
  
<div class="followingsNavItem"><a style={style} href="#howItWorks"><div class="button1 hovereffect">How it works</div></a></div>
<div class="followingsNavItem" ><a style={style} href="#followSomeone"><div  class="button1 hovereffect">Subscribe/Unsubscribe</div></a></div>
<div class="followingsNavItem"><a style={style} href="#categoriesSubscribedTo"><div  class="button1 hovereffect">Categories you've subscribed to</div></a></div>
<div class="followingsNavItem" ><a style={style} href="#displayYourCategories"><div  class="button1 hovereffect">Your categories</div></a></div>
<div class="followingsNavItem"><a style={style} href="#createCategory"><div class="button1 hovereffect">New category</div></a></div>

</div>


</div>)
}


export function FollowersHome(){
    let style={padding:"5px"}

    let [submitStatus,setSubmitStatus]=useState('')
    let [followCategory,setFollowCategory]=useState('')
    let [createFollowCategoryStatus,setCreateFollowCategoryStatus]=useState('')
    let [seeCategoriesStatus,setSeeCategoriesStatus]=useState(''),[categoriesSubscribedToStatus,setCategoriesSubscribedToStatus]=useState(''),[categoriesSubscribedTo,setCategoriesSubscribedTo]=useState('')
    let [followersCategories,setFollowersCategories]=useState('')
return(
    <div style={{padding:"4px"}}>
         <div class="label1">Subscribe and get urgent information even when you are offline</div><div class="label2">Whether your data is off/has expired or you are using a feature (button) phone, you will get updated. Don' t miss out on urgent information.</div>
       <p></p>
       <div class="row">
        <div class="col-md-6"><FollowingsNav/></div>
       </div>
            

       <p></p>

       <div class="row" >
        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form id="followSomeoneForm" method="post" >
      <div id="followSomeone" style={{paddingBottom:"8px"}}><div class="formLabel">Subscribe/Unsubscribe to someone's category</div></div>

       <div class="mb-3">

     <input type="text" class="form-control" autoComplete="off" name="contactToFollow" placeholder='Enter contact of the person'></input>
       <div style={{padding:"5px"}}><div style={{padding:"5px",background:"black",color:"orange",borderRadius:"5px"}}>{followCategory}</div></div>
     <input type="text" class="form-control" autoComplete="off" name="categoryId" onChange={(e)=>{
      
if(Array.from(document.getElementById('followSomeoneForm').contactToFollow.value.trim()).length<10 || Array.from(document.getElementById('followSomeoneForm').contactToFollow.value.trim()).length>10){
  setFollowCategory('Enter correct contact above of 10 digits')
  document.getElementById('followSomeoneForm').categoryId.value=''
}else{
  setFollowCategory('Searching.....')
  let payLoad={contact:parseInt(document.getElementById('followSomeoneForm').contactToFollow.value.trim()),categoryId:parseInt(document.getElementById('followSomeoneForm').categoryId.value.trim())}
  fetch('/followingsPostRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:"getFollowersCategory",args:payLoad}) 
}).then(res=>res.json()).then(resp=>{
  if(resp.length==0){
    setFollowCategory(resp.msg)
    document.getElementById('followSomeoneForm').categoryId.value=''
    
  }else{
let categoryDoc=resp[0]

setFollowCategory(categoryDoc.categoryName)
    



  }
})




}

      

     }} placeholder='Category ID of category to subscribe to'></input>
     <br></br> 
     <input type="text" class="form-control" autoComplete="off" name="contact" placeholder='Enter your contact e.g 0703852178'></input>
         
     <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:submitStatus}}/>
       <div style={{display:"flex"}}>
       <div style={{padding:"5px"}}>
       <div   onClick={()=>{
        let FormObject=getFormDataOnClick(document.getElementById('followSomeoneForm'))
        if(Array.from(FormObject.contactToFollow.trim()).length != 10){
          setSubmitStatus('<div style="color:red;">Enter 10 digits contact of the person</div>')

        } else
        if(Array.from(FormObject.categoryId.trim()).length<1){
          setSubmitStatus('<div style="color:red;">Enter ID of category</div>')

        } else
        if(Array.from(FormObject.contact.trim()).length!=10){
          setSubmitStatus('<div style="color:red;">Enter your contact of 10 digits</div>')

        } else
        if(Array.from(FormObject.pin.trim()).length!=5){
          setSubmitStatus('<div style="color:red;">Enter PIN of 5 digits</div>')

        }
        
        else{
          VerifyRegistrationAndPin(parseInt(FormObject.contact),FormObject.pin).then(resp=>{
            setKayaserVerificationStatus(resp,setSubmitStatus,()=>{
              let payLoad={contactToFollow:parseInt(FormObject.contactToFollow),categoryId:parseInt(FormObject.categoryId),follower:{name:resp.details.name,contact:resp.details.contact}}
              fetch('/followingsPostRequest',{
                method:"post",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({method:"subscribeToACategory",args:payLoad}) 
            }).then(res=>res.json()).then(resp=>{
            setSubmitStatus(resp.msg)
              
            })
  
            })
          })
      
        }



    


       }} class="btn btn-success btn-sm backgroundColorHovereffect"><span class="fa fa-plus"></span> Subscribe</div>
      
       </div>

       <div style={{padding:"5px"}}>
       <div   onClick={()=>{
        let FormObject=getFormDataOnClick(document.getElementById('followSomeoneForm'))
        if(Array.from(FormObject.contactToFollow.trim()).length != 10){
          setSubmitStatus('<div style="color:red;">Enter contact to follow of 10 digits</div>')

        } else
        if(Array.from(FormObject.categoryId.trim()).length<1){
          setSubmitStatus('<div style="color:red;">Enter ID of category</div>')

        } else
        if(Array.from(FormObject.contact.trim()).length!=10){
          setSubmitStatus('<div style="color:red;">Enter your contact of 10 digits</div>')

        } else
        if(Array.from(FormObject.pin.trim()).length!=5){
          setSubmitStatus('<div style="color:red;">Enter PIN of 5 digits</div>')

        }
        
        else{
          VerifyRegistrationAndPin(parseInt(FormObject.contact),FormObject.pin).then(resp=>{
            setKayaserVerificationStatus(resp,setSubmitStatus,()=>{
              let payLoad={contactToFollow:parseInt(FormObject.contactToFollow),categoryId:parseInt(FormObject.categoryId),follower:{name:resp.details.name,contact:resp.details.contact}}
              fetch('/followingsPostRequest',{
                method:"post",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({method:"unsubscribeFromACategory",args:payLoad}) 
            }).then(res=>res.json()).then(resp=>{
            setSubmitStatus(resp.msg)
              
            })
  
            })
          })
      
        }



    


       }} class="btn btn-danger btn-sm backgroundColorHovereffect"><span class="fa fa-minus"></span> Unsubscribe</div>
       
       </div>
       




       </div>
       
       <p></p>
      
       </form></div>
<p></p>

        </div>

        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form method="post" onSubmit={(e)=>{
        
        let FormObject=getFormData(e)
           
        VerifyRegistrationAndPin(FormObject.contact.trim(),FormObject.pin.trim()).then(resp=>{
setKayaserVerificationStatus(resp,setCategoriesSubscribedToStatus,()=>{
  let payLoad={contact:resp.details.contact}
               fetch('/followingsPostRequest',{
                    method:"post",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify({method:"getCategoriesSubscribedTo",args:payLoad}) 
                }).then(res=>res.json()).then(resp=>{
                  
  if(resp.length==0){
  setCategoriesSubscribedToStatus(`<div style='color:green;'><span style='color:red;'>You don't subscribe to any categories.</span></div>`)
  
  }else{
  setCategoriesSubscribedTo(resp.map(categoryDoc=>{
    return(
   <div onClick={()=>{
    //window.location.href=`/pages/following/${categoryDoc.contact}/${categoryDoc.categoryId}`
   }} style={{padding:"5px"}} class="col-md-4">
  
     <div class="followersCategory backgroundColorHovereffect">
      <div style={{padding:"10px"}}>
        <div style={{fontSize:"15px",color:"green"}}>{categoryDoc.categoryName}</div>
        <div style={{fontSize:"11px"}}>{categoryDoc.followers.length} followers, Category ID: {categoryDoc.categoryId}</div>
        <div style={{paddingTop:"5px"}}><span style={{background:"black",padding:"5px",borderRadius:"10px",color:"orange",fontSize:"11px"}}>You subscribe to this category</span></div>
      </div>
    </div>
   </div>
    
    )
  }))
  setCategoriesSubscribedToStatus(`<div style='color:green;'>Done, scroll down to see.</div>`)
  }
        })
  
  





})
        })



       }}>
    
      <div id="categoriesSubscribedTo" style={{paddingBottom:"8px"}}><div class="formLabel">See categories you've subscribed to
      
      </div>
      
      </div>

       <div class="mb-3">
     <input type="text" class="form-control" autoComplete="off" name="contact" required minLength={10} placeholder='Enter your contact e.g 0703852178'></input>
    <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:categoriesSubscribedToStatus}}/>
    
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect"> Display</button><p></p>
      
       </form></div>
       
<p></p>

        </div>
<div  style={{padding:"20px"}}>
<div class="row">{categoriesSubscribedTo}</div>
</div>
        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form method="post" onSubmit={(e)=>{
        setCreateFollowCategoryStatus('Please wait.....')
        let FormObject=getFormData(e)
        
    
        fetch('/verifyUser',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  contact:FormObject.contact.trim(),
  pin:FormObject.pin.trim(),
          }) 
      }).then(res=>res.json()).then((resp)=>{
         
          
          if(resp.registered==false){
            setCreateFollowCategoryStatus("<div style='color:red;'>You are not registered with Kayas, please register.</div>")
          }
           else{
              if(resp.registered==true&&resp.pin==false){
                setCreateFollowCategoryStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
      
              }else{
                setCreateFollowCategoryStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient as we create your category.....</div>`)
  
let payLoad={name:resp.details.name,contact:resp.details.contact,categoryName:FormObject.categoryName.trim()}

                fetch('/followingsPostRequest',{
                  method:"post",
                  headers:{'Content-type':'application/json'},
                  body:JSON.stringify({method:"createFollowersCategory",args:payLoad}) 
              }).then(res=>res.json()).then(resp=>{
                window.location.href=`/pages/following/${resp.contact}/${resp.categoryId}`
              })



                
              }
              
            
          }
         
      }
          
  
      )
      


       }}>
      <div id="createCategory" style={{paddingBottom:"8px"}}><div class="formLabel">Create new category
      <div style={{color:"white",fontSize:"10px"}}>People who follow this category will get notified when you post to this category.</div>
      </div>
      
      </div>

       <div class="mb-3">
   
     <input type="text" class="form-control" autoComplete="off" name="categoryName" required placeholder='Enter category name e.g My clients'></input>
     <br></br> 
     <input type="text" class="form-control" autoComplete="off" name="contact" required placeholder='Enter your contact e.g 0703852178'></input>
      
     
     <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:createFollowCategoryStatus}}/>
    
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect"> Create</button><p></p>
      
       </form></div>
<p></p>

        </div>
        <div class="col-md-6">

            
       <div style={{padding:"5px"}}>  
      <form method="post" onSubmit={(e)=>{
        setSeeCategoriesStatus('Please wait.....')
        let FormObject=getFormData(e)
           
        fetch('/verifyUser',{
          method:"post",
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({
  contact:FormObject.contact.trim(),
  pin:FormObject.pin.trim(),
          }) 
      }).then(res=>res.json()).then((resp)=>{
         
          
          if(resp.registered==false){
            setSeeCategoriesStatus("<div style='color:red;'>You are not registered with Kayas, please register.</div>")
          }
           else{
              if(resp.registered==true&&resp.pin==false){
                setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> your <span style='color:red;'>PIN is incorrect,</span> please try again......</div>`)
      
              }else{
                setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>${resp.details.name},</span> please be patient as we retrieve your categories.....</div>`)
  
let payLoad={contact:resp.details.contact}
             fetch('/followingsPostRequest',{
                  method:"post",
                  headers:{'Content-type':'application/json'},
                  body:JSON.stringify({method:"getFollowersCategories",args:payLoad}) 
              }).then(res=>res.json()).then(resp=>{
if(resp.length==0){

  setSeeCategoriesStatus(`<div style='color:green;'><span style='color:red;'>You don't have any categories. Please create some.</span></div>`)

}else{
setFollowersCategories(resp.map(categoryDoc=>{
  return(
 <div onClick={()=>{
  window.location.href=`/pages/following/${categoryDoc.contact}/${categoryDoc.categoryId}`
 }} style={{padding:"5px"}} class="col-md-4">

   <div class="followersCategory backgroundColorHovereffect">
    <div style={{padding:"10px"}}>
      <div style={{fontSize:"15px",color:"green"}}>{categoryDoc.categoryName}</div>
      <div style={{fontSize:"11px"}}>{categoryDoc.followers.length} followers, Category ID: {categoryDoc.categoryId}</div>
      
    </div>
  </div>
 </div>
  
  )
}))
setSeeCategoriesStatus(`<div style='color:green;'>Done, scroll down to see.</div>`)
}
              })


              }
              
            
          }
         
      }
          
  
      )
      


       }}>
      <div id="displayYourCategories" style={{paddingBottom:"8px"}}><div class="formLabel">See your categories
      
      </div>
      
      </div>

       <div class="mb-3">
     <input type="text" class="form-control" autoComplete="off" name="contact" required minLength={10} placeholder='Enter your contact e.g 0703852178'></input>
    <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
    
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:seeCategoriesStatus}}/>
    
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect"> Display</button><p></p>
      
       </form></div>
       
<p></p>

        </div>

<div><div style={{padding:"10px"}} class="row">{followersCategories}</div></div>


        
        <div class="col-md-6">

        <div style={style}>
        <div style={{background:"orange",padding:"5px",borderRadius:"10px"}}>
            <div id="howItWorks"></div>
        <div style={{fontWeight:"bold",fontSize:"17px",textAlign:"center"}}>How it works.</div>
Many times, you could have missed out on urgent/important information from people who regularly share information just because you had turned off your data or your data had expired or because you are using a feature (button) phone.
          <p></p>
          With Kayas, you will be able to receive an immediate SMS notification about the urgent information. The information will be sent directly to your simcard even when you are using a feature (button) phone or your data is off or when your data has expired. <p></p>
          The information immeidately arrives to your phone when the person you follow has posted the information to the category that you wish to receive updates from. You need to subscribe to a category of your choice in order to receive updates concerning that category of information. 
       
       </div>

        </div>

        </div>
        
        
        <div class="col-md-6">

        <div style={style}>
        <div style={{background:"orange",padding:"5px",borderRadius:"10px"}}>
            
        <div style={{fontWeight:"bold",fontSize:"17px",textAlign:"center"}}>How get updates of a given category of information.</div>
<div><ol>
            <li>Get the contact of the person who regularly posts the category of information that you are interested in.</li>
            <li>Ask the person to identify for you the "Category ID" of the category of information that you want to get updates about. The category ID allows you to subscribe to the category of information you are interested in from the person.</li>
            <li>Use the person's contact and the "Category ID" to subscribe. Fill the form labelled "Subscribe/Unsubscribe to someone's category" at the top to subscribe.</li>
            <li><span style={{color:"red"}}>Make sure you credit your Kayas account before attempting to subscribe.</span></li>
            <li>The cost of notification messages is 50 shs for each notification of which 10 shs is deducted as a service fee for each notification.<span style={{color:"red"}}> To get notifications, make sure you have credited your Kayas account. To credit your account, WhatsApp Kayas on 0703852178.</span></li>
            </ol></div>
       
       </div>

        </div>

        </div>
        </div>
    </div>
)
}


export function FollowingComp(){
  let {contact,categoryId}=useParams(),payLoad={contact:parseInt(contact),categoryId:parseInt(categoryId)}
let [categoryName,setCategoryName]=useState(''),[followerDoc,setFollowersDoc]=useState({}),
[noOfFollowers,setNoOfFollowers]=useState(''),[updateFollowersStatus,setUpdateFollowersStatus]=useState('')
const[charLength,setCharLength]=useState('0'),maxCharLength=132

useEffect(()=>{

  fetch('/followingsPostRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:"getFollowersCategory",args:payLoad}) 
}).then(res=>res.json()).then(resp=>{
  if(resp.length==0){
    setCategoryName('This category does not exit.')
    setNoOfFollowers('No')
  }else{
let categoryDoc=resp[0]

    setCategoryName(categoryDoc.categoryName)
    setNoOfFollowers(categoryDoc.followers.length)



  }
})



},[])

  return(<div style={{padding:"3px"}}>
    
<div style={{background:"#dfdfdf"}} class="row">
  <div class="col-md-3"></div>
  <div style={{background:"white"}} class="col-md-6">
  <div style={{color:"red",fontSize:"20px"}}>{categoryName}</div>
    <div style={{fontSize:"11px",color:"grey",paddingBottom:"5px"}}>{noOfFollowers} followers, Category ID: {categoryId}</div>
<FollowingsNav/>
<p></p>
       <div style={{padding:"5px"}}>  
       <form id="updateFollowersForm" method="post" onSubmit={(e)=>{
        
        let FormObject=getFormData(e)
        VerifyRegistrationAndPin(contact,FormObject.pin).then(resp=>{
       setKayaserVerificationStatus(resp,setUpdateFollowersStatus,()=>{
        setUpdateFollowersStatus('Please wait...........')
        payLoad.msg=FormObject.msg.trim()
if(Array.from(payLoad.msg).length>maxCharLength){
  setUpdateFollowersStatus(`<div style="color:red;">Message is longer than ${maxCharLength} characters, please reduce</div>`)
}else{
  fetch('/followingsPostRequest',{
    method:"post",
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({method:"updateFollowers",args:payLoad}) 
  }).then(res=>res.json()).then(resp=>{
    setUpdateFollowersStatus(resp.msg)
  })
  
}

})}
       
       )}}>
       <div style={{paddingBottom:"8px"}}><div class="formLabel">Update your followers ({noOfFollowers}) </div></div>
       
       <div class="mb-3">
       <div style={{fontSize:"12px",paddingTop:"5px",paddingBottom:"5px"}}>Maximum message length = <span style={{color:"red",fontSize:"15px"}}>{maxCharLength}</span> characters.<br></br>You've typed <span style={{color:"red",fontSize:"15px"}}>{charLength}</span> characters.</div>
       <textArea type="text" class="form-control" autoComplete="off" name="msg" required minLength={3} rows="6" placeholder='Type message here' onChange={()=>{
  setCharLength(Array.from(document.getElementById("updateFollowersForm").msg.value.trim()).length)
}}></textArea>
       <br></br>
       <input type="text" class="form-control" autoComplete="off" name="pin" required minLength={5} placeholder='Enter your PIN e.g. 12345 (5 digits)'></input>
       
       </div>
       <div  style={{padding:"5px"}} dangerouslySetInnerHTML={{__html:updateFollowersStatus}}/>
       
       <button  type="submit"  class="btn btn-sm btn-success backgroundColorHovereffect">Update followers</button><p></p>
       
       </form></div>
       
       <p></p>
       
        </div>
       
  <div class="col-md-3"></div>
</div>
<p></p>


<FollowersHome/>


  </div>)
}





export default FollowersHome