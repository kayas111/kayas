import { useEffect,useState } from "react"

export function Beneficiaries(){
    const [beneficiaries, setBeneficiaries]=useState('')
    useEffect(()=>{


setBeneficiaries([{description:"Iteno Sandra, a student at Makerere University can not study in peace. She has a sister called Rebecca who went to hospital to give birth and during the C-section, things went bad and Rebecca was returned home mentally disabled. Sandra has been seen moving around campus, hostel to hostel, college to college soliciting for any amount of financial support for treatment to help her sister (Rebecca) to recovery from the brain disorder.",reason:'Inteno sandra'}].map((beneficiary)=>{
return(
    <div class="beneficiaryContainer1">
    <div class="beneficiaryContainer2">
        <div>{beneficiary.description}</div><p></p>
        <a href={`/pages/donations/donate/${beneficiary.reason}`}><button class="button1">Send contribution</button></a>
    </div></div>
)
}))
    },[])
    return(
    <div style={{padding:"3px"}}>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="pageLabel">Your help is needed with any contribution</div>
                <div>
                    {beneficiaries}
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
)
}
export default Beneficiaries