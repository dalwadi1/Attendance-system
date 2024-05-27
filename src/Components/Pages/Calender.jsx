import React, { useState } from 'react';
import RCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styling
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />


                {/* <Content /> */}
                <div className="content">
                    <nav className='flex items-center justify-between '>
                        <div className='lg:hidden'>
                            <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><GiHamburgerMenu /></button>

                            <div className="offcanvas offcanvas-start md:hidden" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    ...
                                </div>


                            </div>
                        </div>

                        <div className="navbar-nav align-items-center ms-auto ">
                            <div className="nav-item dropdown ">
                                <a href="#" className="nav-link dropdown-toggle items-center" data-bs-toggle="dropdown" style={{ "display": "flex" }}>
                                    <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                    <span className="d-none d-lg-inline-flex">John Doe</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">My Profile</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    <a href="#" className="dropdown-item">Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <RCalendar
                        onChange={onChange}
                        value={date}
                    />
                </div>

            </div >

        </>
    );
};

export default Calendar;
