export function InnerDetails({ heading, subHeading }) {
    return <div className="">
        <div className="px-7 text-end text-lg">
            <h1 className=" font-medium">{heading}</h1>
        </div>
        <div className="text-end text-sm px-7 text-gray-400">
            <h2>{subHeading}</h2>
        </div>
    </div>
}