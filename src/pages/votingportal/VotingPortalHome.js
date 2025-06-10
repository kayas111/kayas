import muklogo from '../imgs/muklogo.png'
import { IsLoggedIn } from '../Functions'
import { useCookies } from 'react-cookie'
export function VotingPortalHome(){
    const[cookies,setCookie,removeCookie]=useCookies(['user'])

return (
    <div style={{padding:"3px"}}>
<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
<div class="pageLabel">Makerere University Savings Students' Association</div>

<p></p>

<div class="row">
    <div class="col-6">
   <div style={{paddingLeft:"8px"}}> <img src={muklogo} class="d-block w-100" alt="..."  /></div>
    </div>
    <div style={{padding:"8px"}} class="col-6">
        <ul>
            <li>
            Make sure you are logged in before attempting to vote.
            </li>
            <li>Log in button is at the top right corner of your screen</li>
        </ul>
      <p></p>
<div onClick={()=>{
    if(IsLoggedIn(cookies)==true){

window.location.href="/pages/votingportal/cat1"
    }else{;}

}} class="btn btn-success">Start voting</div>

<p></p>

<div>Not registered? Click here:</div>
<a href="/pages/register"><div class="btn btn-warning">Register</div></a>
    </div>
</div>


    </div>
    <div class="col-md-3"></div>
    <div style={{paddingTop:"70px"}}></div>
</div>
    </div>
)


}

export default VotingPortalHome