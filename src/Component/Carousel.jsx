import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Carousel = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/SVWnbkk/robin-mikalsen-x5-Ih-Miu-H7-Gw-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/YTm41f4/pexels-w-w-299285-889839.jpg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/KLfX4P1/pexels-steve-1606591.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/1qzVLHr/pexels-steve-1573434.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/3mCfZG5/pexels-suzyhazelwood-1762973.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/J7w1N3D/pexels-steve-1532704.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/Df48dTv/pexels-steve-1183992.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/FX4D2Ng/pexels-eberhardgross-2086361.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.ibb.co.com/NyY37Ly/debabrata-dash-zp-PEpyrac-unsplash.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;