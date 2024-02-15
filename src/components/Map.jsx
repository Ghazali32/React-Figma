import map from '../assets/map.svg'

export function Map() {
    return <div className="p-4 ml-5 border-4 border-gray-300 w-full">
        <div className="flex ml-2 mt-2 flex-col">
            <div>
                <h1 className='font-medium text-2xl'>Map</h1>
            </div>
            <div className='flex flex-col py-3'>
                <img className='w-11/12' src={map} alt="" />
            </div>
            <div className='w-full flex justify-end'>
                <div className="flex">
                <button className="mr-2 px-5 py-3 border-2 border-[#4375FB]">
                <div className="flex">
                    <h1 className="text-[#4375FB]">Schedule a call</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#4375FB]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </button>
                </div>
            </div>

        </div>
    </div>
}