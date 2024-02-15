import bell from '../assets/bell.svg'
import { Button } from "./Button";

export function NavBar()
{
    return <div className=" w-full h-20 border-b-4 border-gray-300 p-4 flex justify-between">
        <Button text={'Complete profile'}></Button>
        <div className='flex items-center'><img className='h-5' src={bell} alt="" /></div>
        
    </div>
}