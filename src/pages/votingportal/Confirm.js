import {useCookies} from 'react-cookie'
import { IsLoggedIn } from "../Functions";
import { useEffect,useState } from 'react';
export function Confirm(){
    const [cookies,setCookie,removeCookie]=useCookies(['user'])
    const[selection,setSelection]=useState('')
let cont1={padding:"3px"},cont2={padding:"3px"}
    useEffect(()=>{

if(IsLoggedIn(cookies)==true){

let voteObj=Object(cookies.user),data=''

let voteObjKeys=Object.keys(cookies.user)
console.log(cookies.user)

voteObjKeys.forEach(key=>{
    if(key=='role' || key=='name' || key=='contact'){
        ;
       
    }else{
        
        data+=`<div class="selectionProperty">${key}:${voteObj[key]}</div>`
    }
})

setSelection(data)


}else{
;
}


    },[])

    return (
        <div style={{padding:"3px"}}>
<div class="row">
<div class="col-md-3"></div>
<div class="col-md-6">
    <div class="pageLabel">Confirm your selection before submitting your vote</div><p></p>
    <div>
    <div style={{padding:"3px",border:"1px solid orange"}}dangerouslySetInnerHTML={{ __html: selection }} />
    </div>
    <div class="row">
<p></p>
<div style={cont1} class="col-6">
    <div class="button1" 
    onClick={()=>{
        window.alert('Thank you for voting')
        window.location.href='/pages/votingportal/votingPortalHome'
    }}
    
    >Submit</div>
</div>
<div style={cont1} class="col-6">
    <a href="/pages/votingportal/cat1"><div class="button1">Start a fresh</div></a>
</div>

    </div>
</div>
<div class="col-md-3"></div>

</div>
        </div>
    )
}

export default Confirm