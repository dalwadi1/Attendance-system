import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Content = () => {
    return (
        <>
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
        </>
    )
}

export default Content
