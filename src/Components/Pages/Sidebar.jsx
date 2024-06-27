import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaHashtag, FaTachometerAlt } from 'react-icons/fa'
import { RiFileEditFill } from 'react-icons/ri'
import { SiGoogleforms } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginSuccess } from '../../Slice/userSlice';

const Sidebar = () => {
    const user = useSelector((state) => state.user.user);
    // const userId = useSelector((state) => state.user.user.data._id);
    // const userName = useSelector((state) => state.user.user.data.userName);
    return (
        <>
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-light navbar-light">
                    <Link to="/user-desh" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-primary" style={{ "display": 'flex' }}><FaHashtag /><span>Attendance System</span></h3>
                    </Link>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                            <div className="bg-success rounded-circle border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0"></h6>
                            <span>{user === null ? '' : user.user.userName}</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <Link to='/user-desh' className="nav-link" style={{ "display": 'flex' }}><FaTachometerAlt fontSize={20} className='mr-2' /><span>Dashboard</span></Link>
                        <Link to="/attendance" className=" nav-link mt-3" style={{ "display": 'flex' }}><RiFileEditFill fontSize={20} className='mr-2' /><span>Attendance</span></Link>
                        <Link to="/leave" className=" nav-link  mt-3" style={{ "display": 'flex' }}><SiGoogleforms fontSize={20} className='mr-2' /><span>My Leaves</span></Link>
                        <Link to="/calender" className=" nav-link  mt-3" style={{ "display": 'flex' }}><SlCalender fontSize={20} className='mr-2' /><span>calender</span></Link>
                        <Link to="/Setting" className=" nav-link  mt-3" style={{ "display": 'flex' }}><CiSettings fontSize={20} className='mr-2' /><span>Setting</span></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
