import { useState } from 'react';
import BuoButton from '../../Button/BuoButton';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div>
            <div className="bg-black relative">
            <div>
                    <div className="opacity-20 h-full w-full absolute pointer-events-none bg-cover " style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/007/067/602/small/businessman-shows-outstretched-hand-with-social-icon-on-virtual-screen-contact-us-free-photo.jpg")' }}></div >
                </div>

                <div className=" myContainer pb-20 pt-44">
                    <div className="border-2 w-20 border-primary-default"></div>
                    <p className="py-8 text-white md:text-5xl font-bold tracking-tighter text-4xl" >Contact Us</p>
                    <div className="text-white text-bold flex space-x-4 ">
                        <a className="text-primary-default" href="/#">HOME</a>
                        <p className="font-normal text-gray-500">/</p>
                        <p>OUR THINKING.</p>
                    </div>
                </div>
            </div>
            <div className="myContainer">
                <div className="pt-48 flex flex-col lg:flex-row gap-10 ">
                    <div className="p-10 text-white bg-black flex-grow">
                        <h1 className="text-2xl">CONTACT DETAILS</h1>
                        <h1 className="py-5 text-4xl text-bold text-primary-default">Our Contacts</h1>
                        <div>
                            <p>Give us a call or drop by anytime, we endeavour to <br /> answer all enquiries within 24 hours on business days.<br />We will be happy to answer you questions.</p><br />
                            <div className="flex space-x-1">
                                <p className="text-4xl grayscale">🌍</p>
                                <div>
                                    <h1 className="text-bold text-xl text-primary-default">OUR ADDRESS : </h1>
                                    <p>Binaqadi,Baku,Azerbaijan</p>
                                </div>
                            </div><br />
                            <div className="flex space-x-1">
                                <p className="text-4xl grayscale">📧</p>
                                <div>
                                    <h1 className="text-bold text-xl text-primary-default">OUR MAILBOX : </h1>
                                    <p>shahmar.kazimoff@gmail.com</p>
                                </div>
                            </div><br />
                            <div className="flex space-x-1">
                                <p className="text-4xl grayscale">📞</p>
                                <div>
                                    <h1 className="text-bold text-xl text-primary-default">OUR PHONES :</h1>
                                    <p>+994-427-19-87</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div>
                            <form className='space-y-6 border-2 flex flex-col p-10'>
                                <p className="text-2xl text-gray-500">* GET IN TOUCH</p>
                                <h1 className="text-4xl text-bold">READY TO GET STARTED?</h1><br />
                                <div>
                                    <label htmlFor='name'>
                                        <input
                                            className='border-2 w-full p-2'
                                            placeholder="Your Name *"
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor='email'>
                                        <input
                                            className='border-2 w-full p-2'
                                            placeholder="Your Email *"
                                            type="text"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor='message'>
                                        <textarea
                                            className='border-2 w-full p-2'
                                            placeholder="Message..."
                                            id="message"
                                            value={message}
                                            rows={5}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                    </label>
                                </div>

                                <div className='m-auto group'>
                                    <BuoButton href="/#" >
                                        <span className='text-black text-bold group-hover:text-white'>Send Message </span>
                                    </BuoButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="map-left-content">
                    <iframe className='w-full h-[450px]' src="https://maps.google.com/maps?q=adil memmedov 11&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}


