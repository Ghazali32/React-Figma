export function InfoText({heading,subHeading})
{
    return <div className="ml-5">
        <h1 className="font-bold text-lg">{heading}</h1>
        <h2 className="text-gray-400">{subHeading}</h2>
    </div>
}