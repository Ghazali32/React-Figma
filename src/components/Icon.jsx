import logo from '../assets/logo.svg'
export function Icon()
{
    return <div className=" border-b-4 border-gray-300 w-56 h-40 flex justify-center items-center">
        <img className='hover:w-20' src={logo} alt="" />
    </div>
}