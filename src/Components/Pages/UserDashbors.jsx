import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaHashtag, FaLaptop, FaTachometerAlt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiFileEditFill } from 'react-icons/ri'
import { SiGoogleforms } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Sidebar from "../Pages/Sidebar";
import Content from "../Pages/Content";

const UserDashbors = () => {
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />


                <Content />
            </div >
        </>
    )
}

export default UserDashbors
