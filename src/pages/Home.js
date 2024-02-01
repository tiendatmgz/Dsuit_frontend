import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import bannerBg from '../img/banner.png'
import Loading from '../components/Loading';
import Slide from '../components/Slide';
import Btn from '../components/Btn';

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [customerAnimation, setCustomerAnimation] = useState(false)
    const [commitAnimation, setCommitAnimation] = useState(false)
    const [aboutUsAnimation, setAboutUsAnimation] = useState(false)
    const [newArrival, setNewArrival] = useState([])
    const location = window.location.href;
    const aboutUsRef = useRef(null)
    const commitRef = useRef(null)
    const customerRef = useRef(null)
    
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    //scroll to about us
    if (location.split('/').includes('#aboutus')) {
        const aboutElement = document.querySelector('#aboutus');
        if (aboutElement) {
            aboutElement.scrollIntoView();
        }
    }

    // commit Animation
    useEffect(() => {
        const handleScroll = (e) => {
            if (commitRef.current) {
                const commitElement = commitRef.current.getBoundingClientRect().y;
                if (commitElement <= window.screen.height - 200) {
                    setCommitAnimation(true);
                    e.preventDefault()
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [commitAnimation]);

    // about Us Animation
    useEffect(() => {
        const handleScroll = (e) => {
            if (aboutUsRef.current) {
                const aboutUsElement = aboutUsRef.current.getBoundingClientRect().y;
                if (aboutUsElement <= window.screen.height - 200) {
                    setAboutUsAnimation(true);
                    console.log(commitAnimation)
                    e.preventDefault()
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [aboutUsAnimation]);

    // customer Animation
    useEffect(() => {
        const handleScroll = (e) => {
            if (customerRef.current) {
                const customerElement = customerRef.current.getBoundingClientRect().y;
                if (customerElement <= window.screen.height - 200) {
                    setCustomerAnimation(true);
                    e.preventDefault()
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [customerAnimation]);

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:4321/product/newArrival')
            .then(function (res) {
                setLoading(false)
                setNewArrival(res.data.data);
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            })
    }, [])


    return loading ? <Loading /> : (
        <div>
            <section className='banner mt-16'>
                <div className='w-full h-screen relative bg-black '>
                    <img src={bannerBg} alt='banner' className='w-full h-full object-cover opacity-50' />
                    <div className='absolute top-0 flex flex-col h-full w-1/2 justify-center gap-12 left-1/4  '>
                        <h1 className='text-outline bg-gradient-to-br from-lime-500 to-emerald-500  text-8xl font-bold '>Elevate Your Style with D-SUIT</h1>
                        <p className='uppercase font-medium text-xl text-lime-400'>offers haute couture and accessories</p>
                        <div className='flex gap-4'>
                            <Btn title={'MEN'} to={'/men'} />
                            <Btn title={'WOMEN'} to={'/women'} />
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gradient-to-r from-sky-500 to-indigo-500'>
                    <div className='capitalize font-bold text-sm flex justify-center '>
                        <div className='flex justify-evenly items-center w-2/4 py-8 my-16 border-y-4 border-dotted border-white'>
                            <span className='text-lg text-white'>Social media:</span>
                            <a href='#' className='flex gap-4 items-center'>
                                <i className="text-white fa-brands fa-facebook fa-xl"></i>
                                <span className='text-white'>facebook</span>
                            </a>
                            <a href='#' className='flex gap-4 items-center'>
                                <i className="text-white fa-brands fa-instagram fa-xl"></i>
                                <span className='text-white'>instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* slide */}
            <section className='p-24 bg-gradient-to-r from-sky-500 to-indigo-500' >
                <div className='flex flex-col gap-4 w-full p-24'>
                    <div className='flex justify-between py-4'>
                        <Link to='/new-arrival' className='hover:underline hover:decoration-white'><h4 className='text-3xl font-medium text-white uppercase'>New Arrivals</h4></Link>
                    </div>
                    <div>
                        <Slide dataRender={newArrival} />
                    </div>
                </div>
            </section>

            {/* about */}
            <section id='aboutus' className='px-24 pt-24'>
                <div className='about-us flex justify-center  text-white p-24'>
                    <div ref={aboutUsRef} className={`${aboutUsAnimation ? 'opacity-1 translate-x-0 duration-1000' : 'opacity-0 translate-x-96 duration-1000'} flex  justify-center items-start p-24 gap-8 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500`}>
                        <img src='https://i.pinimg.com/564x/c7/3c/53/c73c538c970374d9120396b84dab0705.jpg' className='w-5/12 rounded-3xl' />
                        <div className=' flex flex-col gap-5'>
                            <p className='text-4xl font-medium'>ABOUT US</p>
                            <h2 className='text-6xl text-slate-200'>Discover D-SUIT - Your Ultimate Fashion Destination</h2>
                            <p className='text-lg'>At D-SUIT, we aim to provide you with the latest and greatest in fashion. From chic jackets to stunning dresses and trendy accessories, our collections cater to all your fashion needs. We strive to offer high-quality products that reflect the latest trends in the industry, allowing you to express your unique style.</p>
                        </div>
                    </div>
                </div>
                <div className='why-choose p-24 backdrop-blur-xl'>
                    <div className='text-center'>
                        <h2 className='text-6xl mb-5 uppercase '>Why Choose D-SUIT?</h2>
                        <p className='text-gray-500'>At D-SUIT, we focus on quality, style, and affordability. We offer a wide range of products that cater to different fashion preferences, ensuring that you find the perfect item to suit your style. Our commitment to quality and affordability means that you can enjoy the latest trends without breaking the bank.</p>
                    </div>
                    <div className='flex  pt-16'>
                        <div className='flex flex-col gap-2 pr-14'>
                            <h6 className='text-4xl'>01.</h6>
                            <h4 className='text-2xl'>Stylish and Comfortable Jackets</h4>
                            <p className='text-gray-500'>Our jackets are designed to keep you warm and stylish during the colder months, while ensuring maximum comfort and durability.</p>
                            <div className='relative h-1 w-full bg-gray-300 my-10'></div>
                            <h6 className='text-4xl'>02.</h6>
                            <h4 className='text-2xl'>Trendy Dresses for All Occasions</h4>
                            <p className='text-gray-500'>Our dresses are the perfect choice for any occasion, from formal events to casual outings. With a variety of styles and designs, you’re sure to find the perfect dress to suit your style.</p>
                        </div>
                        <div className='flex flex-col gap-2 pl-14'>
                            <h6 className='text-4xl'>03.</h6>
                            <h4 className='text-2xl'>Trendy and Functional Accessories</h4>
                            <p className='text-gray-500'>From stylish bags to trendy jewelry, our accessories complement your outfit and add that extra touch of glamour and sophistication to your look.</p>
                            <div className='relative h-1 w-full bg-gray-300 my-10'></div>
                            <h6 className='text-4xl'>04.</h6>
                            <h4 className='text-2xl'>Affordable Fashion</h4>
                            <p className='text-gray-500'>At D-SUIT, we believe that fashion should be accessible to everyone. That’s why we offer high-quality products at affordable prices, allowing you to stay on-trend without breaking the bank</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* commit */}
            <section>
                <div className=' flex justify-center w-full px-24'>
                    <div className='flex justify-between items-center w-full p-24  '>
                        <div ref={commitRef} className={`${commitAnimation ? 'opacity-1 translate-x-0 duration-1000' : 'opacity-0 translate-x-96 duration-1000'} w-full flex gap-8 text-end rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 p-24`}>
                            <div className='text-white flex flex-col  gap-5'>
                                <p className='text-4xl font-medium'>COMMIT</p>
                                <h2 className='text-6xl text-slate-200'> Building a sustainable future</h2>
                                <p className='text-lg'>At D-SUIT, we are committed to sustainability and ethical practices. We believe in responsible manufacturing, ensuring that all our products are made in an environmentally friendly and socially responsible way. Our commitment to sustainability means that you can enjoy fashion with a clear conscience.</p>
                            </div>
                            <img src='https://i.pinimg.com/564x/4b/a3/a1/4ba3a19f71ef8f58d85737d3f7f260f5.jpg' alt='img' className='aspect-square object-cover rounded-3xl  w-5/12' />
                        </div>
                    </div>
                </div>
            </section>

            {/* customer  */}
            <section>
                <div className=' flex justify-center w-full px-24 pb-24'>
                    <div className='flex flex-col justify-between items-center p-24 backdrop-blur-xl'>
                        <h2 className='text-black font-medium text-4xl'>Our Customers speak for us</h2>

                        <div ref={customerRef} id='customer-container' className={`${customerAnimation ? 'opacity-1 translate-y-0 duration-1000' : 'opacity-0 translate-y-96 duration-1000'} grid grid-cols-4 gap-12 my-12`}>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-100 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-sky-500 to-indigo-500 hover:shadow-2xl`}>
                                <img src='https://i.pinimg.com/564x/22/73/15/22731510633e26da89180e4b3c57d40e.jpg' alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl text-slate-200'>Customer A</span>
                                <p className='italic text-white'><sup className="fa-solid fa-quote-left text-2xl"></sup> I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock. <sub class="fa-solid fa-quote-right text-2xl"></sub></p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-200 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-sky-500 to-indigo-500 hover:shadow-2xl`}>
                                <img src='https://i.pinimg.com/564x/22/73/15/22731510633e26da89180e4b3c57d40e.jpg' alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl text-slate-200'>Customer A</span>
                                <p className='italic text-white'><sup className="fa-solid fa-quote-left text-2xl"></sup> I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock. <sub class="fa-solid fa-quote-right text-2xl"></sub></p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-300 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-sky-500 to-indigo-500 hover:shadow-2xl`}>
                                <img src='https://i.pinimg.com/564x/22/73/15/22731510633e26da89180e4b3c57d40e.jpg' alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl text-slate-200'>Customer A</span>
                                <p className='italic text-white'><sup className="fa-solid fa-quote-left text-2xl"></sup> I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock. <sub class="fa-solid fa-quote-right text-2xl"></sub></p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-500 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-sky-500 to-indigo-500 hover:shadow-2xl`}>
                                <img src='https://i.pinimg.com/564x/22/73/15/22731510633e26da89180e4b3c57d40e.jpg' alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl text-slate-200'>Customer A</span>
                                <p className='italic text-white'><sup className="fa-solid fa-quote-left text-2xl"></sup> I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock. <sub class="fa-solid fa-quote-right text-2xl"></sub></p>
                            </div>

                        </div>
                        <p className='text-black'>4.8 average rating from 1814 reviews</p>
                    </div>
                </div>
            </section>
            <section></section>
        </div>
    )
}

export default Home