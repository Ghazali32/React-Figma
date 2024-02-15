import { Button } from "./Button";
import location from '../assets/location.svg'
import frames from '../assets/frames.svg'
import amount from '../assets/amount.svg'
import opportunity from '../assets/opportunity.svg'
import { InfoText } from "./InfoText";

export function InfoComponent() {
    return <div className="ml-9 border-gray-300 border-4 flex flex-col w-11/12">
        <div className="flex justify-between">
            <div className="mt-3 p-3 ml-6">
                <h1 className="font-bold text-3xl">
                    Theme Park Site
                </h1>
            </div>
            <div className="mt-3 p-3 ml-6">
                <Button text={'Complete'}></Button>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="mt-3 p-3 ml-6 flex">
                <div>
                    <img src={location} alt="" />
                </div>
                <div className="ml-3">
                    <h1 className="text-gray-400">
                        Address of the site
                    </h1>
                </div>
            </div>
            <button className="mr-2 px-5 border-2 border-[#4375FB]">
                <div className="flex">
                    <h1 className="text-[#4375FB]">Site visit</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#4375FB]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </button>
        </div>
        <div className="mt-1 ml-9 flex justify-between w-11/12">
           <div> <img src={frames} alt="" /></div>
           <div className="mt-3">
            <img src={amount} alt="" />
           </div>
        </div>
        <div className="mt-1 ml-9 ">
            <img src={opportunity}/>
        </div>
        <div className="mt-7 ml-4 flex">
            <InfoText heading={'200 Acres'} subHeading={'Area'}></InfoText>
            <InfoText heading={'5 Lakh'} subHeading={'Starting price'}></InfoText>
            <InfoText heading={'10 days'} subHeading={'Remaining days'}></InfoText>
            <InfoText heading={'2.5 Years'} subHeading={'Next check'}></InfoText>
        </div>
    </div>
}