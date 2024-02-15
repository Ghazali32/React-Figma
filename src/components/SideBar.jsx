import { Icon } from "./Icon";
import logo from '../assets/logo.svg'
import { SideButton } from "./SideButton";
export function SideBar() {
    return <div className="fixed bg-white flex flex-col w-56 h-screen shadow-md border-r-4 border-gray-300">
        <Icon></Icon>
        <SideButton text={'Cart'} textColor={'gray'}></SideButton>
        <button style={{
            color: "black",
        }} className=" border-gray-300 font-medium border-b-4 w-56 h-32 flex justify-center items-center ">
            Market
        </button>
        <SideButton text={'Settings'} textColor={'gray'}></SideButton>
        <SideButton text={'logout'} textColor={'gray'}></SideButton>
    </div>
}