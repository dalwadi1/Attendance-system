import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsSpeedometer2 } from 'react-icons/bs'
import { FaTableList } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdAccountCircle, MdGridOn } from 'react-icons/md'

const UserDashbors = () => {
    return (
        <>
            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)">
                    <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                </button>
            </div>

            <header className="navbar sticky-top bg-slate-700 flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white d-md-none" href="#">Company name</a>

                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                            Rutvik
                        </button>
                    </li>
                    <li className="nav-item text-nowrap">
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <GiHamburgerMenu />
                        </button>
                    </li>
                </ul>

                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input className="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </header>

            <div className="container-fluid ">
                <div className="row h-screen">
                    <div className="d-flex flex-column bg-slate-700 items-center xs:hidden" style={{ "width": "8rem" }}>
                        <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
                            <svg className="bi pe-none text-black" width="40" height="32">Company name</svg>
                            <span className="visually-hidden">Icon-only</span>
                        </a>
                        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center ">
                            <li className="nav-item">
                                <a href="#" className="nav-link py-3 border-bottom rounded-0" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                                    <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Home"><AiFillHome fontSize={20} /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
                                    <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard"><BsSpeedometer2 fontSize={20} /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
                                    <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Orders"><FaTableList fontSize={20} /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                                    <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Products"><MdGridOn fontSize={20} /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link py-3 border-bottom rounded-0" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
                                    <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Customers"><MdAccountCircle fontSize={20} /></svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown border-top w-20">
                            <a href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle"></img>
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>

                    <main className="col-md-10 col-lg-10 px-md-4 h-full">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
                                    This week
                                </button>
                            </div>
                        </div>
                        <h2>Section title</h2>
                        <div className="table-responsive small">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                        <th scope="col">Header</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default UserDashbors
