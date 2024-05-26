
import React, { useEffect } from 'react';
import $ from 'jquery';
// import 'path-to-your-css-file/styles.css'; // Adjust the path to your CSS file

const MyComponent = () => {
    useEffect(() => {
        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        // Sidebar Toggler
        $('.sidebar-toggler').click(function () {
            $('.sidebar, .content').toggleClass('open');
            return false;
        });

        // Other jQuery code...

        // Initialize charts if needed
        // e.g., new Chart(ctx, { ... });

        // Cleanup function to remove event listeners on component unmount
        return () => {
            $(window).off('scroll');
            $('.back-to-top').off('click');
            $('.sidebar-toggler').off('click');
        };
    }, []);

};

export default MyComponent;
