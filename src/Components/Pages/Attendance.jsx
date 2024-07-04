import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { GiHamburgerMenu } from 'react-icons/gi'
import Header from './Header'
import axios from 'axios'

const Attendance = () => {
    const [attendanc, setAttendance] = useState([]);
    const token = localStorage.getItem('token')

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.post('http://localhost:8000/getUserAttendance', { token });
                setAttendance(response.data.users);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers()

    }, []);
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
                                    <tbody>
                                        {
                                            attendanc === null ? ' ' : attendanc.map((e, i) => {
                                                return (
                                                    <tr key={e._id}>
                                                        <td>{i}</td>
                                                        <td>{e.date.slice(8, 10) + '/' + e.date.slice(5, 7) + '/' + e.date.slice(0, 4)}</td>
                                                        <td>{e.punchIn}</td>
                                                        <td>{e.punchOut}</td>
                                                        <td>9 hours</td>
                                                        <td>1 hours</td>
                                                    </tr>
                                                )
                                            })
                                        }
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
