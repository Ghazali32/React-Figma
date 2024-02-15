
export function Details({ heading, subHeading }) {
    return <div className="ml-5 border-4 border-gray-300 w-full">
        <div className="py-5 px-7">
            <h1 className="text-2xl font-medium">{heading}</h1>
        </div>
        <div className="px-7 pb-5">
            <h2>{subHeading}</h2>
        </div>
    </div>
}