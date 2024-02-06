import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Loading from '../components/Loading';
import Slide from '../components/Slide';
import Btn from '../components/Btn';
import config from '../config';
import bg from '../img/bg.png';
import aboutImg from '../img/about.jpg';
import commitImg from '../img/commit.jpg';
import customerImg from '../img/customer.jpg';
import { DotGroup, CicleGroup } from '../components/Decor';

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
    const new_arrival_URL = config.BASE_URL + '/product/newArrival'

    useEffect(() => {
        if (location.split('/').includes('#aboutus')) {
            const aboutElement = document.querySelector('#aboutus');
            if (aboutElement) {
                aboutElement.scrollIntoView();
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])


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
                    // console.log(commitAnimation)
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
                if (customerElement <= window.screen.height) {
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
        axios.get(new_arrival_URL)
            .then(function (res) {
                setLoading(false)
                setNewArrival(res.data.data);
                console.log('https://dark-duck-fatigues.cyclic.app/product/newArrival')
                console.log(res.data.data)
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            })
    }, [])


    return (
        <div className='overflow-hidden '>



            <section class="bg-gray-50">
                <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div class="mx-auto max-w-xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Understand User Flow.
                            <strong class="font-extrabold text-red-700 sm:block"> Increase Conversion. </strong>
                        </h1>

                        <p class="mt-4 sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div class="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </a>

                            <a
                                class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <section className='mt-16  flex  bg-white bg-gradient-to-r from-slate-50 to-slate-300 h-[600px] '>
                <div className='w-1/2 h-full flex'>
                    <div className='flex items-center justify-center'>
                        <p className='-rotate-90 text-red-700 decoration-red-500 text-6xl font-bold '>D-SUIT</p>
                    </div>
                    <div className='flex flex-col justify-center gap-8'>
                        <h1 className=' text-black  text-6xl font-bold '>Elevate Your Style </h1>
                        <p className='uppercase font-medium text-xl text-black '>Fashion and accessories</p>
                        <div className='flex gap-4'>
                            <Btn title={'MEN'} to={'/men'} />
                            <Btn title={'WOMEN'} to={'/women'} />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center h-full relative '>
                    <div className=' relative '>
                        <img className='h-full' src={bg} alt='bg' />
                        <div className='h-2 w-56 shadow-2xl shadow-black bg-red-500 absolute right-0  top-20'></div>
                        <div className='h-2 w-56 shadow-2xl shadow-black bg-red-500 absolute left-0 bottom-20'></div>
                        <div className='h-96 w-2 shadow-2xl shadow-black bg-red-500 absolute right-0  top-20'></div>
                        <div className='h-96 w-2 shadow-2xl shadow-black bg-red-500 absolute left-0 bottom-20'></div>
                    </div>
                    <div className='absolute    top-1/4 left-0'>
                        <DotGroup />
                    </div>
                    <div className='absolute    bottom-1/4 right-14'>
                        <DotGroup />
                    </div>
                </div>
            </section>

            {/* slide */}

            <section className='p-24 bg-black' >
                <div className='flex flex-col gap-4 w-full p-24'>
                    <div className='flex justify-between py-4'>
                        <Link to='/new-arrival' className='hover:underline hover:decoration-white'>
                            <h4 className='text-3xl  font-medium text-white uppercase'>New Arrivals</h4>
                        </Link>
                    </div>

                    <div>
                        {loading ?
                            <Loading /> :
                            <Slide dataRender={newArrival} />
                        }
                    </div>
                </div>
            </section>

            {/* about */}
            <section id='aboutus'>
                <div className='about-us flex justify-center  text-white p-48'>
                    <div
                        ref={aboutUsRef}
                        className={`${aboutUsAnimation ? 'opacity-1 translate-x-0 duration-1000' : 'opacity-0 translate-x-96 duration-1000'} relative grid grid-cols-2  justify-center items-start p-24 gap-8 `}
                    >
                        <img src={aboutImg} className='w-full ' alt="about" />
                        <div className='relative p-10 h-full w-full z-10'>
                            <div className='text-black'>
                                <p className='text-4xl font-black pb-4'>ABOUT US</p>
                                <h2 className='text-2xl pb-16'>Discover D-SUIT - Your Ultimate Fashion Destination</h2>
                                <div className='text-lg'>
                                    <p className='indent-8 text-justify'>
                                        Welcome to dsuit - where fashion becomes an icon of style and innovation. At D-SUIT, we're not just a fashion brand; we're a story of beauty crafted from passion and dedication.
                                    </p>
                                    <br />
                                    <p className='indent-8 text-justify'>
                                        We are committed to providing a unique fashion experience and continually strive to create fashion masterpieces that elevate your beauty and personal style. The design team at dsuit is not just artisans of products; they are creative artists infusing every stitch, each material, and every design detail with a touch of artistry and precision.
                                    </p>
                                    <br />
                                    <p className='indent-8 text-justify'>
                                        Dsuit is more than just a shopping destination; it's a home for ideas and the desire to express oneself through clothing. Join us in experiencing a space of sophistication, where quality and style intersect, creating special moments for every individual. At dsuit, you're not just buying fashion; you're discovering the uniqueness and elegance that defines you.
                                    </p>
                                </div>
                            </div>
                            <div className='absolute h-2 w-2/3 bg-red-500 top-0 left-0'></div>
                            <div className='absolute h-2 w-2/3 bg-red-500 bottom-0 right-0'></div>
                            <div className='absolute h-1/2 w-2 bg-red-500 top-0 left-0'></div>
                            <div className='absolute h-1/2 w-2 bg-red-500 bottom-0 right-0'></div>
                        </div>
                        <div className='absolute bottom-0 left-0'>
                            <DotGroup />
                        </div>
                        <div className='absolute top-0 right-0'>
                            <DotGroup />
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE D-SUIT */}
                <div className='why-choose p-48 backdrop-blur-xl text-white bg-red-600 relative overflow-hidden'>
                    <div className='relative z-10'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-6xl mb-5 uppercase font-black'>Why Choose D-SUIT?</h2>
                            <p className='text-xl w-1/2 text-justify'>At D-SUIT, we focus on quality, style, and affordability. We offer a wide range of products that cater to different fashion preferences, ensuring that you find the perfect item to suit your style. Our commitment to quality and affordability means that you can enjoy the latest trends without breaking the bank.</p>
                        </div>
                        <div className='flex  p-24 text-center'>
                            <div className='flex flex-col gap-2 pr-14'>
                                <h6 className='text-4xl font-bold'>01.</h6>
                                <h4 className='text-2xl'>Stylish and Comfortable Jackets</h4>
                                <p className='text-justify text-lg pt-10'>Our jackets are designed to keep you warm and stylish during the colder months, while ensuring maximum comfort and durability.</p>
                                <div className='relative h-1 w-full bg-gray-300 my-10'></div>
                                <h6 className='text-4xl font-bold'>02.</h6>
                                <h4 className='text-2xl'>Trendy Dresses for All Occasions</h4>
                                <p className='text-justify text-lg pt-10'>Our dresses are the perfect choice for any occasion, from formal events to casual outings. With a variety of styles and designs, you’re sure to find the perfect dress to suit your style.</p>
                            </div>
                            <div className='flex flex-col gap-2 pl-14'>
                                <h6 className='text-4xl font-bold'>03.</h6>
                                <h4 className='text-2xl'>Trendy and Functional Accessories</h4>
                                <p className='text-justify text-lg pt-10'>From stylish bags to trendy jewelry, our accessories complement your outfit and add that extra touch of glamour and sophistication to your look.</p>
                                <div className='relative h-1 w-full bg-gray-300 my-10'></div>
                                <h6 className='text-4xl font-bold'>04.</h6>
                                <h4 className='text-2xl'>Affordable Fashion</h4>
                                <p className='text-justify text-lg pt-10'>At D-SUIT, we believe that fashion should be accessible to everyone. That’s why we offer high-quality products at affordable prices, allowing you to stay on-trend without breaking the bank</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-screen aspect-square	bg-red-700  absolute rounded-full -top-96 -left-96'></div>
                    {/* <div className='absolute w-full h-full left-0 flex top-20 justify-center'>
                        <CicleGroup />
                    </div> */}
                </div>
            </section>

            {/* commit */}
            <section>
                <div className='about-us flex justify-center  text-white p-48'>
                    <div
                        ref={commitRef}
                        className={`${commitAnimation ? 'opacity-1 translate-x-0 duration-1000' : 'opacity-0 translate-x-96 duration-1000'} relative grid grid-cols-2  justify-center items-start p-24 gap-8 `}
                    >
                        <div className='relative p-10 h-full w-full z-10'>
                            <div className='text-black'>
                                <p className='text-4xl font-black pb-4'>COMMIT</p>
                                <h2 className='text-2xl pb-16'>Building a sustainable future</h2>
                                <div className='text-lg'>
                                    <p className='indent-8 text-justify'>
                                        Proudly embracing the mission to make a mark in the world of fashion, we commit to perfection and creativity. Each dsuit product is not just a blend of exquisite materials and unique design but also the love and passion of our fashion artist team.
                                    </p>
                                    <br />
                                    <p className='indent-8 text-justify'>
                                        We don't just create clothing; we craft fashion stories. With passion and dedication, we strive to provide customers with the highest peak of fashion experience.
                                    </p>
                                    <br />
                                    <p className='indent-8 text-justify'>
                                        Let's COMMIT together to the fashion journey with dsuit - where we elevate style and personal icons. Your fashion world begins here, where quality and class meet creativity and passion. Together, we are pioneers, and COMMIT is the promise for excellence in every detail.
                                    </p>
                                </div>
                            </div>
                            <div className='absolute h-2 w-2/3 bg-red-500 top-0 left-0'></div>
                            <div className='absolute h-2 w-2/3 bg-red-500 bottom-0 right-0'></div>
                            <div className='absolute h-1/2 w-2 bg-red-500 top-0 left-0'></div>
                            <div className='absolute h-1/2 w-2 bg-red-500 bottom-0 right-0'></div>
                        </div>
                        <img src={commitImg} className='w-full ' alt='commit' />
                        <div className='absolute bottom-0 left-0'>
                            <DotGroup />
                        </div>
                        <div className='absolute top-0 right-0'>
                            <DotGroup />
                        </div>
                    </div>
                </div>
            </section>

            {/* customer  */}
            <section>
                <div className=' flex justify-center w-full px-24 pb-24'>
                    <div className='flex flex-col justify-between items-center p-24 backdrop-blur-xl text-black'>
                        <h2 className=' font-medium text-4xl'>Our Customers speak for us</h2>
                        <div ref={customerRef} id='customer-container' className={`${customerAnimation ? 'opacity-1 translate-y-0 duration-1000' : 'opacity-0 translate-y-96 duration-1000'} grid grid-cols-4 gap-12 my-12`}>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-100 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-red-500 to-rose-800`}>
                                <img src={customerImg} alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl font-bold text-white'>Customer A</span>
                                <p className='italic text-lg text-white'>
                                    <sup className="fa-solid fa-quote-left text-2xl pr-2"></sup>
                                    I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock.
                                    <sub className="fa-solid fa-quote-right text-2xl pl-2"></sub>
                                </p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-200 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-red-500 to-rose-800`}>
                                <img src={customerImg} alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl font-bold text-white'>Customer A</span>
                                <p className='italic text-lg text-white'>
                                    <sup className="fa-solid fa-quote-left text-2xl pr-2"></sup>
                                    I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock.
                                    <sub className="fa-solid fa-quote-right text-2xl pl-2"></sub>
                                </p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-300 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-red-500 to-rose-800`}>
                                <img src={customerImg} alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl font-bold text-white'>Customer A</span>
                                <p className='italic text-lg text-white'>
                                    <sup className="fa-solid fa-quote-left text-2xl pr-2"></sup>
                                    I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock.
                                    <sub className="fa-solid fa-quote-right text-2xl pl-2"></sub>
                                </p>
                            </div>
                            <div className={`${customerAnimation ? 'opacity-1  duration-1000 ' : 'opacity-0 duration-1000 '} delay-500 flex flex-col items-center justify-center gap-8 rounded-md p-6  shadow-lg  bg-gradient-to-br from-red-500 to-rose-800`}>
                                <img src={customerImg} alt='avatar' className='h-36 aspect-square rounded-full shadow-lg' />
                                <span className='text-3xl font-bold text-white'>Customer A</span>
                                <p className='italic text-lg text-white'>
                                    <sup className="fa-solid fa-quote-left text-2xl pr-2"></sup>
                                    I'm always impressed with the selection of accessories at D-SUIT. They always have the latest trends in stock.
                                    <sub className="fa-solid fa-quote-right text-2xl pl-2"></sub>
                                </p>
                            </div>
                        </div>
                        <p>4.8 average rating from 1814 reviews</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home