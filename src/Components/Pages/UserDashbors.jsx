import React, { useEffect } from 'react'
import Sidebar from "../Pages/Sidebar";
import Content from "../Pages/Content";
import { Navigate, useNavigate } from 'react-router-dom';

const UserDashbors = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const islogedin = localStorage.getItem("token")

        if (!islogedin) {
            navigate("/")
        }

    }, [])
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
