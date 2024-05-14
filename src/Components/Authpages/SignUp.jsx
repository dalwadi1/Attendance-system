import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const SignUp = () => {
    const webcamRef = useRef(null);
    var [userData, setUserData] = useState({
        username: '',
        useremail: '',
        password: '',

    });

    const handleData = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
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

    const SubmitData = async (e) => {
        e.preventDefault();

        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceExpressions().withFaceDescriptor()

        if (detections) {
            const sendData = {
                userData: userData,
                userfaceUrl: detections
            }
            // console.log(faceDescriptor);
            const res = await axios.post('http://localhost:5000/sign-up', sendData)

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
            }
        } else {
            toast.error('No face detected. Please try again.', {
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
        };
    }
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

                <div className='-mt-12 h-screen md:flex justify-center items-center mx-auto container'>
                    <div className='rounded-full mr-10'>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={400}
                            height={400}
                            videoConstraints={{ facingMode: 'user' }}
                        />
                    </div>
                    <form className='w-96' onSubmit={SubmitData}>
                        <h1 className='xs:text-lg md:text-3xl xs:text-center md:text-left'>Sign Up</h1>
                        <h1 className="xs:text-sm md:text-2xl xs:text-center md:text-left mb-3 fw-normal text-white" style={{ fontFamily: 'Josefin Sans' }}>Enter details to Create Account</h1>
                        <div className="form-floating mt-4">
                            <input type="text" name='username' className="form-control text-white bg-transparent" id="floatingInput" onChange={handleData} placeholder="name@example.com" />
                            <label style={{ fontFamily: 'Josefin Sans' }}>User Name</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="email" name='useremail' className="form-control text-white bg-transparent text-xl" onChange={handleData} placeholder="name@example.com" />
                            <label style={{ fontFamily: 'Josefin Sans' }}>Email address</label>
                        </div>

                        <h6 className='mt-5 xs:text-center xs:text-sm md:text-left md:text-lg'>Allready have an account?  <Link className='text-white' to='/sign-in'>Sign in</Link></h6>
                        <div className='text-center mt-2'>
                            <button className="bg-slate-700 md:text-lg md:w-96 rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }} >Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp