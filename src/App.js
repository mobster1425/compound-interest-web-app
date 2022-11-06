import React,{useState} from 'react';
import './App.css';
import Principalamount from './Principalamount';
import Chartbar from './Chartbar';
import PreviousMap from 'postcss/lib/previous-map';
 function App() {

  const [p,newp]=useState(10);
  const [R,newR]=useState(1);
  const [T,newT]=useState(1);
  const [year,newyear]=useState('Quarterly');
  //const [ci,newci]=useState();
  const dropdownchangehandler=(event)=>{
  newyear(event.target.value);
  }
  
  
  const principalchange=(event)=>{
      newp(event.target.value);
  }
  const ratechange=(event)=>{
      newR(event.target.value);
  }
  
  const Timechange=(event)=>{
      newT(event.target.value);
  }
  

let CI;


//console.log(props.year)

if(year==='Yearly'){
//console.log(2+2)

CI=Math.round(p*Math.pow((1+R/100),T)-p);
//newci(CI);
//console.log(CI);


}
else if(year==='Quarterly'){
//console.log(3*3);
CI=Math.round(p*Math.pow((1+R/4/100),4*T)-p);

}
else if(year==='HalfYear'){
//console.log(8*8);
CI=Math.round(p*Math.pow((1+R/2/100),2*T)-p);

}

let Totalamount=+p+CI;

let bar='0%';
 //   bar=Math.round((CI*100)/100) + '';
    console.log(bar);
bar=(CI/100)*100+'%'




  return (
    < >
    
    <div className='flex flex-row justify-center text-red-600 mt-8'>
     <b> Mob Compound Interest Calculator</b>
    </div>
    <Principalamount
Rate={R}
principal={p}
Time={T}
y={year}
    onPrincipalchange={principalchange}
    onRatechange={ratechange}
    onTimechange={Timechange}
    ondropchangehandler={dropdownchangehandler}
    />
    <div className='flex flex-row justify-center mt-8'>
<b className='text-red-700 mr-6'>Principal amount</b>
<b className='text-red-700'>${p}</b>
    </div>
    <div className='flex flex-row justify-center mt-8'>
    <b className='text-red-700 mr-6'>Total Interest</b>
<b className='text-red-700'>${CI}</b>
    </div>
    <div className='flex flex-row justify-center mt-8'>
    <b className='text-red-700 mr-6'>Total amount</b>
<b className='text-red-700'>${Totalamount}</b>
    </div>
    <div className="flex flex-col justify-end items-center ml-96 bg-red-300  rounded-lg overflow-hidden border border-red-700  h-48 w-20 mt-6">
        <div className="bg-red-700 flex flex-col w-20  transition-all ease-out duration-500" style={{height:bar}}>

        </div>
        </div>


    </>
  )
}

export default App;