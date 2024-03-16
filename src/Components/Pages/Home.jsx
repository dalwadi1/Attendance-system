import React from 'react'
import { MdOutlineManageAccounts } from "react-icons/md";
import GoogleFontLoader from 'react-google-font-loader';
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
                <div className='container flex justify-between sticky top-3 px-6 mx-auto lg:w-11/12'>
                    <div className='flex'>
                        <div className='md:w-12 w-10 rounded-full cursor-pointer'>
                            <Link to='/'><img src="./images/R3/logo.png" alt="" /></Link>
                        </div>
                        {/* <h1 className='mt-2'>Attendance</h1>
                        <h1 className='mt-6 -ml-20'>System</h1> */}
                    </div>
                    <button>
                        <Link to='/SignUp'><MdOutlineManageAccounts className='md:text-4xl text-3xl' color='blue' /></Link>
                    </button>

                </div>
                <div className='px-6 container mx-auto flex items-center -m-12 h-screen md:w-11/12'>
                    <div className='sm:w-auto grow'>
                        <h1 className='lg:text-5xl sm:text-3xl text-slate-800 drop-shadow-2xl font-extrabold' style={{ fontFamily: 'Josefin Sans' }}>Face Recoginition based <br /> attendance system...</h1>
                        <h1 className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Nesciunt illum enim dolorum sequi voluptas dolore quaerat <br /> pariatur modi nemo consectetur!</h1>
                        <div className='mt-9 flex'>
                            <button className='md:bg-slate-700 rounded-full shadow-2xl p-2 text-white hover:bg-black  flex mx-0' style={{ fontFamily: 'Josefin Sans' }}>Get's start</button>
                            <button className='md:bg-slate-700 rounded-full shadow-2xl p-2 text-white hover:bg-black  flex mx-3' style={{ fontFamily: 'Josefin Sans' }}>Take Attendance</button>
                        </div>
                    </div>
                    <div className='h-auto sm:max-w-96 md:max-w-96 '>
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

                </div>
            </div >
        </>
    )
}

export default Home
