import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaTachometerAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiFileEditFill } from 'react-icons/ri'
import { SiGoogleforms } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("islogedin")
        navigate('/')

    }
    return (
        <>
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
                                    <h6 className="mb-0">{user === null ? '' : user.user.userName}</h6>
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

                <div className="navbar-nav align-items-center ms-auto ">
                    <div className="nav-item dropdown ">
                        <a href="#" className="nav-link dropdown-toggle items-center" data-bs-toggle="dropdown" style={{ "display": "flex" }}>
                            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                            <span className="d-none d-lg-inline-flex">{user === null ? '' : user.user.userName}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a onClick={logout} className="dropdown-item cursor-pointer">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
