import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import axios from 'axios';
import GoogleFontLoader from 'react-google-font-loader';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const SignIn = () => {
    var navigate = useNavigate()
    const webcamRef = useRef(null);
    useEffect(() => {
        const loadModels = async () => {
            await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            await faceapi.nets.faceExpressionNet.loadFromUri('/models');
            await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        };

        loadModels();
    }, []);

    

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
            <div className="modal-dialog modal-dialog-centered">
                <div className='h-screen w-full bg-slate-500'>
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
                            <button className="mt-5 text-center bg-slate-700 md:text-lg md:w-96 rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }} onClick={handleLogin}>Sign in</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SignIn;
