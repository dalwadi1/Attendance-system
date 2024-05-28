import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { GiHamburgerMenu } from 'react-icons/gi'
import Header from './Header'
import { useSelector } from 'react-redux'

const Attendance = () => {

    const Record = useSelector((state) => state.user.user.Record);

    if (Record === undefined) {
        return "record not found"
    } else {

        const users = Record.date
        console.log(users);
    }



    // console.log(userReco rd);
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content">
                    <Header />
                    <div className="container-fluid pt-4 px-4">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Attendance lits</h6>
                            </div>
                            <div className="table-responsive">
                                <table className="table text-start align-middle table-bordered table-hover mb-0">
                                    <thead>
                                        <tr className="text-dark">
                                            <th scope="col">s.no</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Punch In</th>
                                            <th scope="col">Punch Out</th>
                                            <th scope="col">Production</th>
                                            <th scope="col">Brack</th>
                                            <th scope="col">OverTime</th>
                                        </tr>
                                    </thead>

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
