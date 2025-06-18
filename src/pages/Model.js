import { useState,useEffect } from 'react';



import {
    BarChart,      // Main container for the bar chart
    Bar,           // The actual bars
    XAxis,         // X-axis (horizontal)
    YAxis,         // Y-axis (vertical)
    CartesianGrid, // Optional background grid lines
    Tooltip,       // Hover tooltip
    Legend         // Chart legend
  } from 'recharts';
import { Post, ToastAlert } from './Functions';
   
export function Model(){
    
    let [prediction, setPrediction] = useState(null);
    let [fill, setFill] = useState("orange");
    let [valueME,setValueME]=useState(0)
    let [valueMet,setValueMet]=useState(0)
    let [valueCa,setValueCa]=useState(0)
    let [valueCP,setValueCP]=useState(0)
    let [valueP_Avail,setValueP_Avail]=useState(0)
    let [valueLys,setValueLys]=useState(0)
    let [total,setTotal]=useState(0)

    const data = [
        { nutrient: 'ME', value: valueME },
        { nutrient: 'Met', value: valueMet },
        { nutrient: 'Ca', value: valueCa },
        { nutrient: 'CP', value: valueCP },
        { nutrient: 'P_Avail', value: valueP_Avail },
        { nutrient: 'Lys', value: valueLys }
      ];
      const datas = [
        { nutrient: 'ME', value: 20 },
        { nutrient: 'Met', value: 9 },
        { nutrient: 'Ca', value: 32 },
        { nutrient: 'CP', value: 15 },
        { nutrient: 'P_Avail', value: 14 },
        { nutrient: 'Lys', value: 10 }
      ];

function PredictionAnimation(){
    let index =0,predictionAnimationId=setInterval(()=>{
        let nutrient=(data[index].nutrient)
        index=(index+1)%data.length
        
switch(nutrient){
case 'ME':{
    setValueME(100)
    setValueMet(0)
    setValueCa(0)
    setValueP_Avail(0)
    setValueLys(0)
    setValueCP(0)
    break;
}
case 'Met':{
    setValueME(0)
    setValueMet(100)
    setValueCa(0)
    setValueP_Avail(0)
    setValueLys(0)
    setValueCP(0)

    break;
}

case 'Ca':{
    setValueME(0)
    setValueMet(0)
    setValueCa(100)
    setValueP_Avail(0)
    setValueLys(0)
    setValueCP(0)
    break;
}
case 'CP':{
    setValueME(0)
    setValueMet(0)
    setValueCa(0)
    setValueP_Avail(0)
    setValueLys(0)
    setValueCP(100)
    break;
}
case 'P_Avail':{
    setValueME(0)
    setValueMet(0)
    setValueCa(0)
    setValueP_Avail(100)
    setValueLys(0)
    setValueCP(0)
    break;
}
case 'Lys':{
    
    setValueME(0)
    setValueMet(0)
    setValueCa(0)
    setValueP_Avail(0)
    setValueLys(100)
    setValueCP(0)
    break;
}

}


        },1000)

return predictionAnimationId
       


}
 let style={padding:"3px",width:"70px"}

useEffect(async ()=>{
   
       


    if (!window.tf) {
        console.error('TensorFlow.js not loaded');
        return;
      } else{
        const tf = window.tf;
        console.log('tensor')
        const model = await tf.loadLayersModel('/model/model.json');
        console.log('Model loaded');
      }
     

},[])



      const MyBarChart = () => (
        <BarChart width={300} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nutrient" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={fill} />
        </BarChart>
      );
    return(
    <div style={{padding:"3px"}}>
        
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <div class="label">Predict nutrients</div>
      
        <div class='description'>
    ME= Metabolizable energy,
    Met= Methionine,
    Ca= Calcium,
    CP= Crude protein,
    P_Avail= Phosphorus,
    Lys= Lysine
</div><p></p>
            <div style={{padding:"3px"}}>
            <div style={{padding:"3px",border:"2px solid orange"}}>
            <MyBarChart  />
            <div>
               
            </div>
            </div>
            </div>





<div style={{padding:"12px"}}>

<form id="modelForm">


<div style={{fontSize:"10px"}}>
1. MAIZE 2. SORGHUM 	3. WHEAT	4. BAJRA	5. SOYABEAN MEAL	6. RSM	7. FISH MEAL	8. SSM	9. FAT/OIL	10. LIME STONE/GRIT	11. DCP	12. SALT	13. LYS	14. BROKEN RICE	15. MGM	16. DORB	17. RICE POLISH	18. MBM	19. GNM	20. MET	21. VIT+TM
</div>

<div style={{padding:"3px", fontWeight:"600"}}><p></p>
Enter the ingredient proportions according to the Key above
<p></p>
</div>
<div style={{display:"flex",flexWrap:"wrap"}}>

<div  style={style}>
<div class="formInputLabel">1</div>
<input type="text" class="form-control"  autoComplete="off" name="1" />
</div>

<div  style={style}>
<div class="formInputLabel">2</div>
<input type="text" class="form-control" autoComplete="off" name="2" />
</div>

<div  style={style}>
<div class="formInputLabel">3</div>
<input type="text" class="form-control" autoComplete="off" name="3" />
</div>

<div  style={style}>
<div class="formInputLabel">4</div>
<input type="text" class="form-control" autoComplete="off" name="4" />
</div>

<div  style={style}>
<div class="formInputLabel">5</div>
<input type="text" class="form-control" autoComplete="off" name="5" />
</div>

<div  style={style}>
<div class="formInputLabel">6</div>
<input type="text" class="form-control" autoComplete="off" name="6" />
</div>

<div  style={style}>
<div class="formInputLabel">7</div>
<input type="text" class="form-control" autoComplete="off" name="7" />
</div>

<div  style={style}>
<div class="formInputLabel">8</div>
<input type="text" class="form-control" autoComplete="off" name="8" />
</div>

<div  style={style}>
<div class="formInputLabel">9</div>
<input type="text" class="form-control" autoComplete="off" name="9" />
</div>

<div  style={style}>
<div class="formInputLabel">10</div>
<input type="text" class="form-control" autoComplete="off" name="10" />
</div>

<div  style={style}>
<div class="formInputLabel">11</div>
<input type="text" class="form-control" autoComplete="off" name="11" />
</div>

<div  style={style}>
<div class="formInputLabel">12</div>
<input type="text" class="form-control" autoComplete="off" name="12" />
</div>

<div  style={style}>
<div class="formInputLabel">13</div>
<input type="text" class="form-control" autoComplete="off" name="13" />
</div>

<div  style={style}>
<div class="formInputLabel">14</div>
<input type="text" class="form-control" autoComplete="off" name="14" />
</div>

<div  style={style}>
<div class="formInputLabel">15</div>
<input type="text" class="form-control" autoComplete="off" name="15" />
</div>

<div  style={style}>
<div class="formInputLabel">16</div>
<input type="text" class="form-control" autoComplete="off" name="16" />
</div>

<div  style={style}>
<div class="formInputLabel">17</div>
<input type="text" class="form-control" autoComplete="off" name="17" />
</div>

<div  style={style}>
<div class="formInputLabel">18</div>
<input type="text" class="form-control" autoComplete="off" name="18" />
</div>

<div  style={style}>
<div class="formInputLabel">19</div>
<input type="text" class="form-control" autoComplete="off" name="19" />
</div>

<div  style={style}>
<div class="formInputLabel">20</div>
<input type="text" class="form-control" autoComplete="off" name="20" />
</div>

<div  style={style}>
<div class="formInputLabel">21</div>
<input type="text" class="form-control" autoComplete="off" name="21" />
</div>
<p></p>



</div>
</form>

<div style={{fontSize:"20px",fontWeight:"600"}}>Total: {total}%</div>
<div onClick={()=>{
          
          let form=document.getElementById('modelForm'),features=[]
          const inputs = form.querySelectorAll('input')
          
            inputs.forEach(input=>{
          
                      features.push(parseFloat(input.value))
                      
                  })
             
             setTotal(features.reduce((acc, val) => acc + val, 0));
          
          
          
                  if(features.includes(NaN)){
          ToastAlert('toastAlert2','Fill in all values correctly, there is an error',5000)
                  }else{
                      if(total>101){
                          ToastAlert('toastAlert2','Total of ingredient compositions should be less than 101%',3500)
                      }else{
                          
                   
                      window.location.href='#'
                      setValueME(50)
                      setValueMet(50)
                      setValueCa(50)
                      setValueP_Avail(50)
                      setValueLys(50)
                      setValueCP(50)
                      setFill('orange')
                      ToastAlert('toastAlert1','Predicting....',2000)
                     
          
                      features.push(100)
                        Post('/predictNutrients',{
                            features:features
                        }).then(resp=>{
                 console.log(resp)
                         
                         let factor =40
                            setValueLys(resp.Lysine*factor)
                            setValueME(resp.ME)
                            setValueMet(resp.Methionine*factor)
                            setValueCa(resp.Calcium*factor)
                            setValueP_Avail(resp.P_avail*factor)
                            setValueCP(resp.CP*factor)
                            setFill('green')
                            ToastAlert('toastAlert1','Successfull',2000)
                        })
            
                   
                      }
                   }
                  
          
                     }}class="button1">Predict</div>



</div>




</div>


           

            </div>
            <div class="col-md-3"></div>
      
        </div>
  )
}

export default Model