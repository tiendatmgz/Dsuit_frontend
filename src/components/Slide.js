import React from 'react'
import Slider from 'react-slick'

const Slide = ({ dataRender }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    return (
        <Slider {...settings}>
            {dataRender && dataRender.map((item, index) => {
                return (
                    <div key={item._id} className=''>
                        <div className=''>
                            <a href={`/product/${item._id}`} className='relative group/item'>
                                <div >
                                    <img src={item.img[0]} className='w-full aspect-square object-cover' />
                                </div>
                                <div className='bg-white p-4 absolute bottom-0 w-full opacity-0 group-hover/item:opacity-100 duration-200'>
                                    <h2 className='text-xl font-bold uppercase mb-2 border-b border-gray-400 text-gray-600 overflow-hidden text-ellipsis text-nowrap'>{item.name}</h2>
                                    <p className='font-medium text-gray-500 capitalize'>{item.type}</p>
                                    <p className='text-xl text-right font-medium text-red-500'>{item.price} $</p>
                                </div>
                            </a>
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default Slide