import BuoButton from "../../../Button/BuoButton";

export default function Hero() {
    return (
        <div>
            <div className="md:flex-col border-2 w-20 border-primary-default"></div>
            <p className="text-white lg:text-8xl font-bold tracking-tighter text-6xl py-10" >We're a digital agency.</p>
            <BuoButton href="#smth"><span>Getting Started</span></BuoButton>
        </div >
    )
}