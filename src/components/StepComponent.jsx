import { useState } from "react";
import { Button } from "./Button";
import check from '../assets/check.svg'
export function StepComponent({ title, buttonText}) {
    
    const [complete,setComplete] = useState(false)
    return <div className=" p-3 flex flex-col ml-5 border-4 border-gray-300 w-96 hover:bg-slate-50">
        <div className="flex w-full px-2">
            <div className="flex items-center">
                <button onClick={()=>{
                    setComplete(!complete)
                }} className="border-2 border-gray-500 w-4 h-4 hover:bg-gray-200">
                    {complete? <img src={check}></img> : <div></div>}
                </button>
            </div>
            <div className="ml-8">
                <h1 className="font-medium text-lg">
                    {title}
                </h1>
            </div>
        </div>
        <div className="flex w-full justify-end mt-8">
            <Button onClick={()=>{
                    setComplete(!complete)
                }} text={buttonText}></Button>
        </div>
    </div>
}