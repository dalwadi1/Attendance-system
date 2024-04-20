import React from 'react'
import { MdOutlineManageAccounts } from "react-icons/md";
import GoogleFontLoader from 'react-google-font-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiArrowForward } from "react-icons/ti";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Josefin Sans',
                        weights: [400, 700],
                    },
                ]}
            />
            <div className='h-screen bg-slate-500'>
                {/* navbar */}
                <div className='container flex justify-between sticky top-3 px-20 mx-auto lg:w-11/12'>
                    <div className='flex items-center'>
                        <div className='md:w-11 w-6 rounded-full cursor-pointer flex'>
                            <Link to='/'><img src="./images/R3/logo1.png" alt="" /></Link>
                        </div>
                        <h1 className='lg:text-sm md:text-sm text-white xs:text-xs mt-4' style={{ fontFamily: 'Josefin Sans' }}>Dalwadi</h1>
                    </div>
                    <button>
                        <Link to='/Sign-up'><MdOutlineManageAccounts className='md:text-4xl xs:text-2xl' color='blue' /></Link>
                    </button>

                </div>
                <div className='px-6 mx-auto md:flex items-center -m-12 h-screen md:w-fit'>
                    <div className='h-auto md:block sm:max-w-96 md:max-w-96 xs:hidden'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="./images/R2/back.png" className='bg-transparent h-80 items-center' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="./images/R2/image2.png" className='bg-transparent ' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="./images/R2/image.png" className='bg-transparent ' alt="" /></SwiperSlide>

                        </Swiper>
                    </div>
                    <div className='md:hidden mb-32 mt-10 container mx-auto'>
                        {/* <img src="./images/R2/image5.png" alt="" />
                         */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            navigation={false}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src="./images/R2/back.png" className='bg-transparent h-56 items-center' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="./images/R2/image2.png" className='bg-transparent h-56 w-80' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="./images/R2/image.png" className='bg-transparent h-56 w-80' alt="" /></SwiperSlide>

                        </Swiper>
                    </div>

                    <div className='grow flex-col items-center justify-center  md:mt-0 xs:bg-slate-400 xs:py-7 px-3 rounded-t-3xl xs:-mt-32'>
                        <h1 className='lg:text-5xl md:text-2xl text-slate-700 font-extrabold text-center xs:text-xl' style={{ fontFamily: 'Josefin Sans' }}>Face Recoginition based <br /> attendance system...</h1>
                        <div className='md:mt-3 '>
                            <h6 className='flex text-sm'><TiArrowForward fontSize={23} />Utilizes Face API or similar technology to detect and recognize faces accurately.</h6>
                            <h6 className='flex text-sm'><TiArrowForward fontSize={23} />Automatically records attendance based on facial recognition data.</h6>
                            <h6 className='flex text-sm'><TiArrowForward fontSize={23} />Implements multi-factor authentication to enhance security and prevent unauthorized access.</h6>
                        </div>
                        <div className='md:mt-9 xs:mt-7 flex lg:justify-self-center xs:justify-center'>
                            <button className='xs:bg-gray-700 md:bg-slate-700 rounded-full shadow-2xl md:p-4 sx:p-2 p-2 xs:text-sm text-white hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}>Get's start</button>
                            <button className='xs:bg-gray-700 md:bg-slate-700 ml-4 rounded-full shadow-2xl md:p-4 sx:p-2 p-2 xs:text-sm text-white hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}>Take Attendance</button>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}

export default Home
