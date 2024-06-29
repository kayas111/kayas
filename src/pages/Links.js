import React, {useEffect,useState} from 'react'
export function Links(){
let [noOfValidLinks,setNoOfValidLinks]=useState(''),arrayOfValidLinks=[],validLinkNumber=0
let [validLinks,setValidLinks]=useState(<div>
    <div style={{color:"green",fontSize:"20px",textAlign:"center",paddingTop:"40px",paddingBottom:"40px"}}>Please wait......</div>
</div>)



 useEffect(()=>{
    fetch('/getLinks').then(resp=>resp.json()).then(resp=>{
        let arrayOfLinks=resp

        arrayOfLinks.forEach(linkObj=>{
if(linkObj.isValid==true){
    validLinkNumber++
    linkObj.validLinkNumber=validLinkNumber
    arrayOfValidLinks.push(linkObj)

}else{
;
}
 })
 setNoOfValidLinks(arrayOfValidLinks.length)

setValidLinks(arrayOfValidLinks.reverse().map((linkObj)=>{
return(<div class='col-md-6' style={{padding:"10px"}}>
<div style={{padding:"5px",border:"1px solid grey",borderRadius:"5px"}} >
<div style={{fontSize:"18px",paddingBottom:"5px"}}>{linkObj.validLinkNumber}. {linkObj.desc}</div>
<div class="row">
    
<div class="col-6"><a href={linkObj.linkUrl}><span style={{padding:"4px",borderRadius:"6px",fontSize:"12px",background:"green",color:"white"}}><span class='hovereffect'>Visit link</span></span></a></div>
<div class="col-6"><span style={{padding:"4px",borderRadius:"6px",color:"maroon",fontSize:"12px",background:"maroon",color:"white"}} onClick={()=>{
    window.alert('Thank you for reporting')
}}><span class="hovereffect">Report invalid link</span></span></div>



</div>

</div></div>)
}))


    })
 },[])




    return(<div style={{padding:"3px"}}>
<div style={{textAlign:"center",fontSize:"20px",color:"red",paddingBottom:"10px"}}>{noOfValidLinks} Links</div>
<div style={{textAlign:"center",fontSize:"13px",color:"red",paddingBottom:"10px"}}>Keep visiting for more links</div>
<div class="row">
{validLinks}
</div>

    </div>)
}


export default Links