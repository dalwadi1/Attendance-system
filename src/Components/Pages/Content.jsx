import React, { useEffect, useRef, useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaTachometerAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiFileEditFill } from 'react-icons/ri'
import { SiGoogleforms } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { Bounce, toast } from 'react-toastify'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

function Attendance(props) {

    const navigate = useNavigate()

    const webcamRef = useRef(null);

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

    const [loading, setLoading] = useState(false);
    const punchin = async () => {
        setLoading(true);

        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceExpressions().withFaceDescriptor()
        if (detections) {
            try {
                const res = await axios.post('http://localhost:8000/punchin', detections);

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
                    navigate("/user-desh");
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
    const punchOut = async () => {
        setLoading(true);
        const imageSrc = webcamRef.current.getScreenshot();
        const image = await faceapi.fetchImage(imageSrc);
        const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceExpressions().withFaceDescriptor()
        if (detections) {
            try {
                const res = await axios.post('http://localhost:8000/punchout', detections);

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
    }
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
                        <button className="mt-5 items-center btn btn-outline-success md:text-lg rounded-full xs:w-32 text-sm py-2" type="submit" style={{ fontFamily: 'Josefin Sans' }} onClick={punchin}>Punch in</button>
                        <button className="mt-5 items-center btn btn-outline-danger ml-2 md:text-lg rounded-full xs:w-32 text-sm py-2" type="submit" style={{ fontFamily: 'Josefin Sans' }} onClick={punchOut}>Punch Out</button>

                    </>
                )}
            </Modal.Body>
        </Modal>
    );
}
const Content = () => {

    const user = useSelector((state) => state.user.user);

    console.log(user);

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        navigate('/')

    }
    const [AttendanceIn, setAttendanceIn] = useState(false);
    return (
        <>
            <div className="content">
                <nav className='flex items-center justify-between '>
                    <div className='lg:hidden'>
                        <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><GiHamburgerMenu fontSize={20} /></button>

                        <div className="offcanvas offcanvas-start md:hidden items-center" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ "width": "50%" }}>
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="position-relative">
                                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                        <div className="bg-success rounded-circle border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0 text-black"></h6>
                                        <span>Admin</span>
                                    </div>
                                </div>
                                <div className="navbar-nav w-100">
                                    <Link to='/user-desh' className="nav-link" style={{ "display": 'flex' }}><FaTachometerAlt fontSize={20} className='mr-2' /><span>Dashboard</span></Link>
                                    <Link to="/attendance" className=" nav-link   mt-3" style={{ "display": 'flex' }}><RiFileEditFill fontSize={20} className='mr-2' /><span>Attendance</span></Link>
                                    <Link to="/leave" className=" nav-link  mt-3" style={{ "display": 'flex' }}><SiGoogleforms fontSize={20} className='mr-2' /><span>My Leaves</span></Link>
                                    <Link to="/calender" className=" nav-link  mt-3" style={{ "display": 'flex' }}><SlCalender fontSize={20} className='mr-2' /><span>calender</span></Link>
                                    <Link to="/Setting" className=" nav-link  mt-3" style={{ "display": 'flex' }}><CiSettings fontSize={20} className='mr-2' /><span>Setting</span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <button className='btn btn-outline-success btn-sm m-1' onClick={() => setAttendanceIn(true)}>Take Attendance</button>
                    <Attendance
                        show={AttendanceIn}
                        onHide={() => setAttendanceIn(false)}
                    />
                    {/* <button className='btn btn-outline-danger btn-sm m-1' onClick={() => setAttendanceOut(true)}>Punch out</button>
                    <PunchOut
                        show={AttendanceOut}
                        onHide={() => setAttendanceOut(false)}
                    /> */}

                    <div className="navbar-nav align-items-center ms-auto ">
                        <div className="nav-item dropdown ">
                            <a href="#" className="nav-link dropdown-toggle items-center" data-bs-toggle="dropdown" style={{ "display": "flex" }}>
                                <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                <span className="d-none d-lg-inline-flex">{user === null ? ' ' : user.userName}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="#" className="dropdown-item">My Profile</a>
                                <a href="#" className="dropdown-item">Settings</a>
                                <a onClick={logout} className="dropdown-item cursor-pointer">Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>


                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-md-6 col-xl-8">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <h6 className="mb-0">Weekly Working Hours</h6>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-0">Jhon Doe</h6>
                                            <small>15 minutes ago</small>
                                        </div>
                                        <span>Short message goes here...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-4">
                            <div className="h-100 bg-light rounded p-4">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h6 className="mb-0">Time Sheet</h6>
                                    <a href="">Show All</a>
                                </div>
                                <div className="d-flex mb-2">
                                    <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                                    <button type="button" className="btn btn-primary ms-2">Add</button>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" defaultChecked />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span><del>Short task goes here...</del></span>
                                            <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center border-bottom py-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center pt-2">
                                    <input className="form-check-input m-0" type="checkbox" />
                                    <div className="w-100 ms-3">
                                        <div className="d-flex w-100 align-items-center justify-content-between">
                                            <span>Short task goes here...</span>
                                            <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid pt-4 px-4">
                    <div className="bg-light text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Recent Salse</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-dark">
                                        <th scope="col">s.No</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>01 Jan 2045</td>
                                        <td>INV-0123</td>
                                        <td>Jhon Doe</td>
                                        <td>$123</td>
                                        <td>Paid</td>
                                        <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
