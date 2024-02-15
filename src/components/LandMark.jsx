 import airport from '../assets/airport.svg'
 import highway from '../assets/highway.svg'
import { InnerDetails } from './InnerDetails'


 export function LandMark(){
   return <div className="p-4 ml-5 border-4 border-gray-300 w-full">
        <div className="flex mt-2 flex-col">
            <div>
                <h1 className='font-medium text-2xl'>Landmarks</h1>
            </div>
            <div className='flex flex-col'>
            <div className='mt-2 p-1 border-b-2 flex justify-between'>
                <img  src={airport}/>
                <InnerDetails heading={'100 km'} subHeading={'Airport 1'} ></InnerDetails>
            </div>
            <div className='mt-2 p-1 border-b-2 flex justify-between'>
                <img  src={airport}/>
                <InnerDetails heading={'25 km'} subHeading={'Green which terminal'} ></InnerDetails>
            </div>
            <div className='mt-2 p-1 border-b-2 flex justify-between'>
                <img  src={highway}/>
                <InnerDetails heading={'100 km'} subHeading={'Highway number 5'} ></InnerDetails>
            </div>
            </div>
            
        </div>
    </div>
 }