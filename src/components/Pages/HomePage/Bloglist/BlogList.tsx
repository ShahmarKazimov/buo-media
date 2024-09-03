import { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Blog.scss"

export default class PauseOnHover extends Component {
    render() {
        let settings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 300,
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 2500,
                    settings: {
                        slidesToShow: 4,
                        infinite: true,

                    }
                },
                {
                    breakpoint: 1800,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,

                    }
                },

            ]
        };
        return (
            <div>
                <div className="p-20 whitespace-nowrap space-y-3">
                    <h1 className="text-center text-5xl text-bold ">Latest News.</h1>
                    <p className="text-center text-primary-default text-bold tracking-tighter">CHECK OUT SOME OF OUR THINKING</p>
                </div>
                <Link to="/blog">
                    <div className="pb-16 overflow-x-hidden">
                        <Slider {...settings}>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/1.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>CAREERS</h1>
                                    <p className=" text-center text-bold text-2xl">Winning tactics for a new digital agency</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/2.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>OPINION/NEWS</h1>
                                    <p className=" text-center text-bold text-2xl">How i improved my digital in one day</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/3.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>DESIGN/UX</h1>
                                    <p className=" text-center text-bold text-2xl">How to make your product stand out</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/4.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>MARKETING</h1>
                                    <p className=" text-center text-bold text-2xl">Choose from meeting speak,client feedback</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/5.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>OPINION/NEWS</h1>
                                    <p className=" text-center text-bold text-2xl">How i improved my digital in one day</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                            <div className="group">
                                <div className="overflow-hidden mx-5" >
                                    <img src="./images/7.jpg" className="group-hover:scale-105 grayscale group-hover:grayscale-0 duration-500 w-full h-full" />
                                </div>
                                <div className="group-hover:bottom-36 duration-300 text-center relative pr-4 bottom-24 text-white">
                                    <h1>DESIGN/UI</h1>
                                    <p className=" text-center text-bold text-2xl">How i improved my digital in one day</p>
                                    <p className="text-4xl text-bold invisible group-hover:visible">→</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Link>
            </div>
        );
    }
}


