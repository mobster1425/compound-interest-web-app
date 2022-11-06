import React from "react";

const Principalamount=(props)=>{

return(
    <>
    <div className="flex flex-row justify-center mt-8">
        <b><p className="text-red-700 mr-6">Principal amount</p></b>
        <span className=" text-red-600   ">$</span>
<input className="bg-red-100 text-red-700 border border-solid border-red-600 rounded-sm" min={10} max={10000000} type={'number'} name={'amount'} value={props.principal} onChange={props.onPrincipalchange}/>


</div>
<div className="flex flex-row justify-center mt-8 mb-8">
<b><p className="text-red-700 mr-6">Rate of Interest</p></b>
       
<input className="bg-red-100 text-red-700 border border-solid border-red-600 rounded-sm" min={1} max={50} type={'number'} name={'amount'} value={props.Rate} onChange={props.onRatechange}/>


<span className=" text-red-600   ">%</span>
</div>

<div className="flex flex-row justify-center">
<b><p className="text-red-700 mr-6"> Time Period in Years</p></b>
        
<input className="bg-red-100 border text-red-700 border-solid border-red-600 rounded-sm" min={1} max={30} type={'number'} name={'amount'} value={props.Time} onChange={props.onTimechange} />


<span className=" text-red-600   ">YR</span>
</div>
         
       <div className="flex flex-row justify-center mt-8">
        <b className="text-red-700 mr-6">Compounding frequency</b>
        <div className="rounded-md">
            <select className="text-red-700 bg-red-100" value={props.y} onChange={props.ondropchangehandler} >
                <option value='Yearly'><b>Yearly</b></option>
                 <option value='Quarterly'><b>Quarterly</b></option>    
                <option value='HalfYear'><b>HalfYear</b></option>
            </select>
        </div>
       </div>

    </>
)

}

export default Principalamount;