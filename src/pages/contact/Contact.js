import React, { useEffect } from 'react'
import contactImg from '../../img/contact.jpg';
import QuestionGroup from './Questions.contact';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='mt-16 '>

            <section className="bg-white lg:p-24">
                <div className="lg:grid lg:min-h-192 lg:grid-cols-12 lg:border-4 border-black">
                    <section className="relative flex h-40 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="Night"
                            src={contactImg}
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                    </section>

                    <main
                        className="flex justify-center items-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="w-full lg:max-w-3xl xl:w-full">
                            <div className="relative block">
                                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Contact Us ☎️
                                </h1>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                    We are very happy to receive your interest in us. So that we can best assist you, please fill out the form below. We will try to reply as soon as possible.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"

                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-2 focus-visible:border-blue-500 p-2"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-2 focus-visible:border-blue-500 p-2"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                    <textarea
                                        rows="4"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm border-2 focus-visible:border-blue-500 p-2 focus-visible:outline-none"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <button
                                        className='relative w-full text-red-500 p-2 px-8  overflow-hidden border-red-500 duration-200 hover:duration-200 hover:border-white border-2 group/item before:absolute before:h-full  before:bg-red-500 before:w-0 before:top-0 before:right-0 before:duration-200  hover:before:bg-red-500  hover:before:w-full hover:before:duration-200 hover:before:left-0 '
                                    >
                                        <span className='relative z-10 duration-200 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-200 '>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </section >


            <section className="bg-gray-900 text-white">
                <div className=" px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-12  lg:py-24 lg:px-24 sm:flex lg:flex flex-col items-center text-center">
                    <div className="max-w-6xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

                        <p className="mt-4 text-gray-300 text-justify">
                            For D-SUIT, we believe that what sets us apart is not just elegant clothing but also the perfect blend of art and beauty. Each of our products is not merely a piece of clothing but rather an artistic masterpiece crafted with passion and meticulous care by our design team.
                        </p>
                    </div>
                    <div className="max-w-6xl mt-8 w-full grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 ">
                        <div className="flex items-start gap-4 bg-gray-700 rounded-lg p-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <i className='fas fa-mobile-alt text-2xl h-5 w-5'></i>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">
                                    Products & order
                                </h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    (+1) 123-456-7890 available 24/7
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-gray-700 rounded-lg p-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <i className='fas fa-mobile-alt text-2xl h-5 w-5'></i>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">
                                    Info & enquiries
                                </h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    (+1) 123-456-7890 available 24/7
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-gray-700 rounded-lg p-4">
                            <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                                <i className='fas fa-map-marker-alt text-2xl h-5 w-5'></i>
                            </span>

                            <div>
                                <h2 className="text-lg font-bold">Store locator</h2>

                                <p className="mt-1 text-sm text-gray-300">
                                    Find our retail near you
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-6xl mt-8 w-full grid grid-cols-1 gap-4 md:mt-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-6xl mt-8 w-full grid grid-cols-1 gap-4 md:mt-16">
                        <QuestionGroup />
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Contact