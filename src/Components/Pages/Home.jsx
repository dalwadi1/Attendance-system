import React, { useEffect, useRef, useState } from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiArrowForward } from "react-icons/ti";
import 'swiper/css';
import 'swiper/css/pagination';
import * as faceapi from 'face-api.js';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Webcam from 'react-webcam';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';

function Signin(props) {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const webcamRef = useRef(null);
    var [userData, setUserData] = useState({
        username: '',
        useremail: '',
        password: '',

    });
    useEffect(() => {
        const loadModels = async () => {
            await Promise.all([
                await faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
                await faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                await faceapi.nets.faceExpressionNet.loadFromUri('/models'),
                await faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            ]);
        };
        loadModels()
    }, []);

    const handleLogin = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceExpressions().withFaceDescriptor()
        if (detections) {
            setLoading(true);
            try {
                const res = await axios.post('http://localhost:8000/sign-in', detections);

                if (res.data.success === true) {
                    toast.success(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    console.log(res.data.data);
                    navigate("/user-desh");

                } else {
                    toast.error(res.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    navigate("/sign-up");
                }

            }
            catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("error to detect", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        }
    };
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='md:mx-auto text-center'>

                    {loading ? (
                        <RotatingLines
                            visible={true}
                            height="96"
                            width="96"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                        />
                    ) : (
                        <>
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                screenshotFormat="image/jpeg"
                                width={400}
                                height={400}
                                videoConstraints={{ facingMode: 'user' }}
                            />
                            <button className="mt-5 items-center bg-slate-700 md:text-lg rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }} onClick={handleLogin}>Sign in</button>

                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}
const Home = () => {
    const [signin, setSignin] = useState(false);
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
            <Signin
                show={signin}
                onHide={() => setSignin(false)}
            />

            <div className='h-screen bg-slate-500'>
                {/* navbar */}
                <div className='container flex justify-between sticky top-0 px-20 mx-auto lg:w-11/12'>
                    <div className='flex items-center'>
                        <div className='md:w-11 w-6 rounded-full cursor-pointer flex'>
                            <Link to='/'><img src="./images/R3/logo1.png" alt="" /></Link>
                        </div>
                        <h1 className='lg:text-sm md:text-sm text-white xs:text-xs mt-4' style={{ fontFamily: 'Josefin Sans' }}>Dalwadi</h1>
                    </div>
                    <button className='bg-slate-700 rounded p-2 m-2 text-white' onClick={() => setSignin(true)}>
                        Signin
                    </button>
                </div>
                <div className='px-6 mx-auto md:flex items-center md:-m-12 h-full md:w-fit'>
                    <div className='h-auto md:block sm:max-w-96 md:max-w-96 xs:hidden'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
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
                            <button className='xs:bg-gray-700 md:bg-slate-700 rounded-full shadow-2xl md:p-4 sx:p-2 p-2 xs:text-sm text-white hover:bg-black' onClick={() => setSignin(true)} style={{ fontFamily: 'Josefin Sans' }}>Get's start</button>
                            <button className='xs:bg-gray-700 md:bg-slate-700 ml-4 rounded-full shadow-2xl md:p-4 sx:p-2 p-2 xs:text-sm text-white hover:bg-black' onClick={() => setSignin(true)} style={{ fontFamily: 'Josefin Sans' }}>Take Attendance</button>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}

export default Home
