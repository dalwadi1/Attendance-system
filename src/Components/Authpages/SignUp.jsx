import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import ExcelJS from "exceljs";
// import bgimg from './images/R2/image5.png'
const SignUp = () => {
    const webcamRef = useRef(null);
    const [userData, setUserData] = useState({
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
    };
    const [registrationComplete, setRegistrationComplete] = useState(false);

    useEffect(() => {
        const loadModels = async () => {
            await Promise.all([
                faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
                faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
                faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            ]);
        };

        loadModels();
    }, []);

    const SubmitData = async (e) => {
        e.preventDefault();

        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();
        console.log(detections);

        if (detections) {
            const faceDescriptor = detections.descriptor;
            const userfaceUrl = JSON.stringify(faceDescriptor)

            // Create a new workbook and worksheet
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Registraton');

            //Define headers for Excel columns
            worksheet.addRow(['userid', 'username', 'useremail', 'password', 'userfaceUrl']);

            // Add form data to Excel worksheet
            const { username, useremail, password } = userData;


            const generateUniqueId = () => {
                const randomNumber = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric string
                const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
                return `${randomNumber}${timestamp}`; // Combine random number and timestamp
            };

            const userid = generateUniqueId();

            worksheet.addRow([userid, username, useremail, password, userfaceUrl]);

            // Generate Excel file and download
            workbook.xlsx.writeBuffer().then((buffer) => {
                const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'formData.xlsx';
                a.click();
                URL.revokeObjectURL(url);
            });
            setRegistrationComplete(true);
        } else {
            alert('No face detected. Please try again.');
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
                        <Link to='/SignUp'><MdOutlineManageAccounts className='md:text-4xl xs:text-2xl' color='blue' /></Link>
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
                        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                        <h1 className="xs:text-sm md:text-2xl xs:text-center md:text-left mb-3 fw-normal text-white" style={{ fontFamily: 'Josefin Sans' }}>Enter details to Create Account</h1>
                        {/* <div className='container flex'>
                            <button className='bg-slate-600 xs:text-sm md:text-lg w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><FcGoogle fontSize={25} /> google</button>
                            <button className='bg-slate-600 xs:text-sm md:text-lg w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><BsFacebook fontSize={25} color='blue' /> facebook</button>
                        </div>
                        <h5 className='text-center text-white my-2 xs:text-sm md:text-lg' style={{ fontFamily: 'Josefin Sans' }}>OR</h5> */}
                        <div className="form-floating mt-4">
                            <input type="hidden" className="form-control text-white bg-transparent" id="floatingInput" />
                            <label>user id</label>
                        </div>
                        <div className="form-floating mt-4">
                            <input type="text" name='username' className="form-control text-white bg-transparent" id="floatingInput" onChange={handleData} placeholder="name@example.com" />
                            <label for="floatingInput" style={{ fontFamily: 'Josefin Sans' }}>User Name</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="email" name='useremail' className="form-control text-white bg-transparent text-xl" id="floatingInput" onChange={handleData} placeholder="name@example.com" />
                            <label for="floatingInput" style={{ fontFamily: 'Josefin Sans' }}>Email address</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control text-white bg-transparent text-xl" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword" style={{ fontFamily: 'Josefin Sans' }}>Enter  Password</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" name='password' className="form-control text-white bg-transparent text-xl" id="floatingPassword" onChange={handleData} placeholder="Password" />
                            <label for="floatingPassword" style={{ fontFamily: 'Josefin Sans' }}>Conform Password</label>
                        </div>

                        <h6 className='mt-5 xs:text-center xs:text-sm md:text-left md:text-lg'>Allready have an account?  <Link className='text-white'>Sign in</Link></h6>
                        <div className='text-center mt-2'>
                            <button className="bg-slate-700 md:text-lg md:w-96 rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }} >Sign up</button>
                        </div>
                        {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
