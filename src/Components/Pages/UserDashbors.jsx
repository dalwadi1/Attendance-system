import React from 'react'
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
