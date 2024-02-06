import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'

const Slide = ({ dataRender }) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,

    };
    return (
        <Slider {...settings}>
            {dataRender && dataRender.map((item, index) => {
                return (
                    <div key={item._id} >
                        <Link to={`/product/${item._id}`} className='relative group/item'>
                            <div >
                                <img src={item.img[0]} className='w-full aspect-square object-cover' />
                            </div>
                            <div className=' py-8 bottom-0 w-full  duration-200 text-white'>
                                <h2 className='text-xl font-bold uppercase mb-2 text-slate-200 overflow-hidden text-ellipsis text-nowrap'>{item.name}</h2>
                                <p className='font-medium pb-8 capitalize'>{item.type}</p>
                                <p className='text-2xl font-medium '>{item.price} <sup className='underline'>$</sup></p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </Slider>
    )
}

export default Slide