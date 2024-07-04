import React from 'react'
import Sidebar from './Sidebar'
import { GiHamburgerMenu } from 'react-icons/gi'
import Header from './Header'
import { useSelector } from 'react-redux'

const Leave = () => {

    const user = useSelector((state) => state.user.user);
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content">
                    <Header />


                    {/* header */}

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">leave</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body ">
                                    <section class="page-header section-sm d-flex align-items-center justify-content-sm-around w-100">
                                        <div className='d-flex flex-column align-items-center w-25'>
                                            <div className='mb-3'>

                                                <img className="rounded-circle" src="img/user.jpg" alt="" style={{ "width": "80px", "height": "80px" }} />
                                            </div>
                                            <h6 className="mb-0">{user === null ? '' : user.user.userName}</h6>
                                        </div>
                                        <form className="w-50 mx-auto" >
                                            <div className="form-floating">
                                                <input type="date" className="form-control"
                                                    placeholder="Enter User Name" name="username" />
                                                <label >start date</label>
                                            </div>
                                            <div className="form-floating mt-3">
                                                <input type="date" className="form-control"
                                                    placeholder="Enter Email" name="email" />
                                                <label >end date</label>
                                            </div>
                                            <div className="form-floating mt-3">
                                                <textarea className="form-control mt-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                <label >Reasone for leave</label>

                                            </div>
                                            <button className="btn btn-primary w-100 py-2 mt-5"
                                                type="submit">Send Request</button>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid pt-4 px-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4 ">
                                <h6 className="mb-0">MyLeaves lits</h6>
                                <button className='btn btn-primary' type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Leaves Requast</button>
                            </div>
                            <div className="table-responsive">
                                <table className="table text-start align-middle table-bordered table-hover mb-0">
                                    <thead>
                                        <tr className="text-dark">
                                            <th scope="col">Applay Date</th>
                                            <th scope="col">From Date</th>
                                            <th scope="col">To Date</th>
                                            <th scope="col">Half Day</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
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
            </div>
        </>
    )
}

export default Leave
