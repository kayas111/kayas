
import { useState,useEffect } from "react";
import { setCookieOptionsObj } from "../../Variables";
export async function HandleRadioButtonOnchangeEvent(event,setFunction,vote,category,setCookie){
  console.log(vote)
  let value=event.target.value
 setFunction(value)

 vote[category]=value
 setCookie("user", vote, setCookieOptionsObj)

console.log(vote)



}

export function Candidates(props){
    const [selectedOption, setSelectedOption] = useState('');
    const [listOfCandidates,setListOfCandidates]=useState('')
useEffect(()=>{


   
  setListOfCandidates(props.listOfCandidates.map((candidateObj)=>{
    return(
        <div>
<div>{candidateObj.name}</div>

<label className="flex items-center gap-2">
    <input
      type="radio"
      value={candidateObj.name}
      checked={selectedOption == `${candidateObj.name}` }
      onChange={(e) => {
        
        console.log(candidateObj.name)
        setSelectedOption(e.target.value)}
    }
    />
   {props.name}
  </label>



        </div>
    )
  }))

},[])

    return(
        <div>

            <div>
            {selectedOption}
            {listOfCandidates}
            </div>
            

         


        </div>
    )
}