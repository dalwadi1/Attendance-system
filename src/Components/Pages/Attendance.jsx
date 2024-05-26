import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { GiHamburgerMenu } from 'react-icons/gi'

const Attendance = () => {
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
                    <div className="container-fluid pt-4 px-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Attendance lits</h6>
                            </div>
                            <div className="table-responsive">
                                <table className="table text-start align-middle table-bordered table-hover mb-0">
                                    <thead>
                                        <tr className="text-dark">
                                            <th scope="col"><input className="form-check-input" type="checkbox" /></th>
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
                                            <td><input className="form-check-input" type="checkbox" /></td>
                                            <td>01 Jan 2045</td>
                                            <td>INV-0123</td>
                                            <td>Jhon Doe</td>
                                            <td>$123</td>
                                            <td>Paid</td>
                                            <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input" type="checkbox" /></td>
                                            <td>01 Jan 2045</td>
                                            <td>INV-0123</td>
                                            <td>Jhon Doe</td>
                                            <td>$123</td>
                                            <td>Paid</td>
                                            <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input" type="checkbox" /></td>
                                            <td>01 Jan 2045</td>
                                            <td>INV-0123</td>
                                            <td>Jhon Doe</td>
                                            <td>$123</td>
                                            <td>Paid</td>
                                            <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input" type="checkbox" /></td>
                                            <td>01 Jan 2045</td>
                                            <td>INV-0123</td>
                                            <td>Jhon Doe</td>
                                            <td>$123</td>
                                            <td>Paid</td>
                                            <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input" type="checkbox" /></td>
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

            </div >

        </>
    )
}

export default Attendance
