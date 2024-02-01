import React, { useEffect, useState } from 'react'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [questsClick, setQuestsClick] = useState(null)
    const handleClickQuest = (index) => {
        setQuestsClick(index)
    }
    return (
        <div className='mt-16 '>
            <section className='w-full'>
                <div className='w-full p-24 pb-0'>
                    <div className='mx-auto p-24 rounded-3xl max-w-6xl  bg-gradient-to-br from-sky-500 to-indigo-500 text-white'>
                        <h1 className='text-6xl font-medium text-center uppercase underline mb-10'>Contact</h1>
                        <div className='flex flex-wrap '>
                            <div className='flex flex-col gap-4 pr-10  w-1/3'>
                                <div className='flex gap-4 pb-5 border-b border-white'>
                                    <i className='fas fa-mobile-alt text-2xl'></i>
                                    <div>
                                        <h5 className='text-2xl mb-2 underline'>Products & order</h5>
                                        <p className='text-base'>(+1) 123-456-7890 available 24/7</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-5 border-b border-white'>

                                    <i className='fas fa-mobile-alt text-2xl'></i>
                                    <div>
                                        <h5 className='text-2xl mb-2 underline'>Info & enquiries</h5>
                                        <p className='text-base'>(+1) 123-456-7890 available 24/7</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 pb-5 border-b border-white'>

                                    <i className='fas fa-map-marker-alt text-2xl'></i>
                                    <div>
                                        <h5 className='text-2xl mb-2 underline'>Store locator</h5>
                                        <p className='text-base00 '>Find our retail near you</p>
                                    </div>
                                </div>
                                <p className='font-medium text-lg'>Stay in touch</p>
                                <div className='flex gap-4'>
                                    <a href='#'>

                                        <i className='text-2xl fab fa-facebook-f'></i>
                                    </a>
                                    <a href='#'>

                                        <i className='text-2xl fab fa-instagram'></i>
                                    </a>
                                    <a href='#'>

                                        <i className='text-2xl fab fa-linkedin'></i>
                                    </a>
                                    <a href='#'>

                                        <i className='text-2xl fab fa-github'></i>
                                    </a>
                                </div>
                            </div>
                            <div className='w-2/3 min-w-52'>
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <label className='text-xl'>Name<sup> *</sup></label>
                                        <br />
                                        <input type='text' placeholder='Enter your name...'
                                            className='p-4 border-2 w-full text-black ' />
                                    </div>
                                    <div>
                                        <label className='text-xl'>Email<sup> *</sup></label>
                                        <br />
                                        <input type='email' placeholder='Enter your email...'
                                            className='p-4 border-2 w-full text-black ' />
                                    </div>
                                    <div>
                                        <label className='text-xl'>Comment or Message</label>
                                        <textarea placeholder='...'
                                            className='p-4 border-2 w-full text-black ' />
                                    </div>
                                    <button className='relative bg-white text-black p-4 px-8  overflow-hidden duration-500 hover:duration-500 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0'>
                                        <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                                            Send Message
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <div className='px-10 py-24'>
                    <div className='p-24 backdrop-blur-lg max-w-3xl m-auto flex flex-col gap-8 '>
                        <h2 className='text-center text-4xl font-medium text-gray-600'>Frequently Asked Questions</h2>
                        <p className='text-center text-black'>Frequently Asked Questions about Shopping at D-SUIT</p>
                        <div className='h-1 bg-black'></div>
                        <ul className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                            <li>
                                <h4 onClick={() => { handleClickQuest(0) }} className=' p-4 border cursor-pointer text-lg font-medium flex justify-between items-center'>
                                    What kind of products does D-SUIT offer?
                                    <div className={`${questsClick === 0 ? 'rotate-180' : ''} `}>
                                        <i className='fas fa-angle-up'></i>
                                    </div>
                                </h4>
                                <p className={`${questsClick === 0 ? '' : 'hidden'} border p-4`}>
                                    D-SUIT is a fashion retailer that specializes in providing high-quality clothing, accessories, and bags.
                                    Our product line includes a wide range of items such as jackets, dresses, jeans, vests, bags, and much more.</p>
                            </li>
                            <li>
                                <h4 onClick={() => { handleClickQuest(1) }} className=' p-4 border cursor-pointer text-lg font-medium flex justify-between items-center'>
                                    What materials are used in D-SUIT's clothing?
                                    <div className={`${questsClick === 1 ? 'rotate-180' : ''} `}>
                                        <i className='fas fa-angle-up'></i>
                                    </div>
                                </h4>
                                <p className={`${questsClick === 1 ? '' : 'hidden'} border p-4`}>
                                    We use a variety of materials in our clothing, including cotton, wool, polyester, and synthetic blends. We strive to provide our customers with comfortable and durable clothing that is also stylish and on-trend.</p>
                            </li>
                            <li>
                                <h4 onClick={() => { handleClickQuest(2) }} className=' p-4 border cursor-pointer text-lg font-medium flex justify-between items-center'>
                                    What is the return policy at D-SUIT?
                                    <div className={`${questsClick === 2 ? 'rotate-180' : ''} `}>
                                        <i className='fas fa-angle-up'></i>
                                    </div>
                                </h4>
                                <p className={`${questsClick === 2 ? '' : 'hidden'} border p-4`}>
                                    We offer a 30-day return policy on unworn and undamaged items. If you are not satisfied with your purchase, you can return it within 30 days of receiving the order for a full refund or exchange. Please refer to our Return Policy page for detailed instructions.</p>
                            </li>
                            <li>
                                <h4 onClick={() => { handleClickQuest(3) }} className=' p-4 border cursor-pointer text-lg font-medium flex justify-between items-center'>
                                    How much is shipping, and how long does it take?
                                    <div className={`${questsClick === 3 ? 'rotate-180' : ''} `}>
                                        <i className='fas fa-angle-up'></i>
                                    </div>
                                </h4>
                                <p className={`${questsClick === 3 ? '' : 'hidden'} border p-4`}>
                                    Shipping costs and times vary based on the destination and shipping method chosen. We offer standard and expedited shipping options, and shipping costs are calculated at checkout. Shipping times typically range from 3-14 business days depending on the location.</p>
                            </li>
                            <li>
                                <h4 onClick={() => { handleClickQuest(4) }} className=' p-4 border cursor-pointer text-lg font-medium flex justify-between items-center'>
                                    information secure when I shop at D-SUIT?
                                    <div className={`${questsClick === 4 ? 'rotate-180' : ''} `}>
                                        <i className='fas fa-angle-up'></i>
                                    </div>
                                </h4>
                                <p className={`${questsClick === 4 ? '' : 'hidden'} border p-4`}>
                                    Yes, we take your privacy very seriously and use SSL encryption to protect your personal information. We never share your information with third parties, and we are committed to providing a safe and secure shopping experience for our customers. You can read more about our Privacy Policy on our website.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Contact