import BuoButton from "../Button/BuoButton";
import SocialLink from "./SocialLink";
export default function () {
    return (
        <div className="mt-auto">
            <div className="bg-[#1b1b1b]">
                <div className="gap-y-4 whitespace-nowrap py-28 myContainer flex text-white items-center flex-col lg:flex-row justify-between bg-[#1b1b1b]">
                    <div className="myContainer lg:order-1">
                        <h1 className="text-white text-6xl font-bold tracking-tighter">Let's talk?</h1>
                    </div>
                    <ul className="flex gap-3  lg:order-0">
                        <li><SocialLink name="twitter" href="/" /></li>
                        <li><SocialLink name="facebook" href="/" /></li>
                        <li><SocialLink name="instagram" href="/" /></li>
                    </ul>
                    <div className="py-7  lg:order-2">
                        <BuoButton href="/#">
                            Make an enquiry
                        </BuoButton>
                    </div>
                </div>
            </div>
            <div className="bg-[#161616]">
                <div className="px-8 myContainer text-center text-white flex items-center flex-row justify-around py-10 bg-[#161616]">
                    <div className="cursor-pointer hover:text-primary-default lg:text-xl">
                        <h2 className="text-bold lg:text-xl">Berlin.</h2>
                        <div className="lg:text-xl">+21 30 310 0010</div>
                    </div>
                    <div className="cursor-pointer hover:text-primary-default">
                        <div className="lg:text-xl text-bold">Melbourne.</div>
                        <div className="lg:text-xl ">+21 201 161 0011</div>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className=" myContainer flex lg:flex-row flex-col justify-between text-white py-8 text-xs">
                    <div className="font-light text-center order-2 pt-3">2018 © Gentium, All rights reserved.</div>
                    <div className=" gap-10 justify-center flex text-center cursor-pointer lg:order-2">
                        <div className="hover:text-primary-default hover:underline underline-offset-4">Term of use</div>
                        <div className="hover:text-primary-default hover:underline underline-offset-4">Privacy Policy</div>
                        <div className="hover:text-primary-default hover:underline underline-offset-4">Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    )
}