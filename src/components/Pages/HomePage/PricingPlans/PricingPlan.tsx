import "./PricingPlan.scss"

export default function PricingPlans(props: {
    title: string,
    underline: string,
    price: string,
    per: string,
    services?: { name: string }[]
}) {

    return (
        <div className="pricingplan text-center p-10 w-full">
            <div className="text-white text-3xl text-bold text-left px-5 py-4 ">{props.title}</div>
            <div className="mx-5 -mt-3 border-primary-default my-4 border w-10">{props.underline}</div>
            <div className="text-white text-4xl ">{props.price}</div>
            <div className="text-white text-lg font-thin ">{props.per}</div>
            <div className="text-white py-3 text-opacity-50">{(props.services || []).map(service => <div key={service.name}>{service.name}</div>)}</div>
            {/* <div className="text-white mx-5 flex py-2 justify-center">
                <BuoButton href="/#">
                    Choose Plane
                </BuoButton>
            </div> */}
        </div>
    )
}