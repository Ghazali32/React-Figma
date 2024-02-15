export function SideButton({text,textColor})
{  
    return <button style={{
        color : textColor,
    }} className="border-gray-300  border-b-4 w-56 h-32 flex justify-center items-center hover:bg-gray-200"> 
            {text}
    </button>
}