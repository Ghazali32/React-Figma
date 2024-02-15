import steps from '../assets/steps.svg'
export function StepBar() {
    return <div className="bg-white w-full h-20 border-b-4 border-gray-300 p-4 flex justify-between">
        <div className="flex w-full items-center ml-4 justify-between">
            <h1 className="font-bold text-xl">Choose your new site</h1>
            <div className='flex items-center mr-6'>
                <img className='h-6' src={steps} alt="" />
            </div>
        </div>
    </div>
}