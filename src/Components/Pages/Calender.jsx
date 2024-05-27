import React, { useState } from 'react';
import RCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the default styling
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import Header from './Header';

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
                    <Header />
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
