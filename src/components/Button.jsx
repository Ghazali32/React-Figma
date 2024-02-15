
export function Button({text , onClick})
{
    return <button onClick={onClick} className="bg-[#4375FB] px-5 py-2 text-white hover:bg-blue-500">
        {text}
    </button>
}