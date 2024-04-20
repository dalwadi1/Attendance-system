import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import axios from 'axios';
import GoogleFontLoader from 'react-google-font-loader';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const webcamRef = useRef(null);
    var img_desp
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Load face detection models before performing face detection
        const loadModels = async () => {
            await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        };

        loadModels();
    }, []);

    const handleLogin = async () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();
        // console.log(detections.descriptor);
        if (detections) {
            const sendData = {
                userData: detections,
            }
            const response = await axios.post('http://localhost:5000/sign-in', sendData);
            if (response.data.success) {
                setIsAuthenticated(true);
                console.log('sign in done');
                // Handle successful login (e.g., redirect to dashboard)    
            } else {
                // Handle unsuccessful login (e.g., display error message)
                console.log('Face not recognized');
            }
        } else {
            console.log('error to detaction');
        }
    };

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
                    {/* <form className='w-96' >
                        <h1 className='xs:text-lg md:text-3xl xs:text-center md:text-left'>Sign in</h1>
                        <h1 className="xs:text-sm md:text-2xl xs:text-center md:text-left mb-3 fw-normal text-white" style={{ fontFamily: 'Josefin Sans' }}>Enter details to Create Account</h1>
                       <div className="form-floating mt-2">
                            <input type="email" name='useremail' className="form-control text-white bg-transparent text-xl" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" style={{ fontFamily: 'Josefin Sans' }}>Email address</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control text-white bg-transparent text-xl" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword" style={{ fontFamily: 'Josefin Sans' }}>Enter  Password</label>
                        </div>

                        <h6 className='mt-5 xs:text-center xs:text-sm md:text-left md:text-lg'>Dont't have an account?  <Link className='text-white' to='/sign-up'>Sign up</Link></h6>
                        <div className='text-center mt-2'>
                            <button className="bg-slate-700 md:text-lg md:w-96 rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }}  >Sign in</button>
                        </div>

                    </form> */}
                    <button onClick={handleLogin}>capture</button>
                </div>
            </div>
        </>
    );
};

export default SignIn;
