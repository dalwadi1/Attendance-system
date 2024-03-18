import React from 'react'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
// import bgimg from './images/R2/image5.png'

const SignUp = () => {
    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Josefin Sans',
                        weights: [400, 700],
                    },
                ]}
            />
            <div className='h-screen bg-slate-500'>
                <div className='container flex justify-between sticky top-3 px-6 mx-auto lg:w-11/12'>
                    <div className='flex'>
                        <div className='md:w-12 w-7 rounded-full cursor-pointer'>
                            <Link to='/' ><img src="./images/R3/logo.png" alt="" /></Link>
                        </div>
                        {/* <h1 className='mt-2'>Attendance</h1>
                        <h1 className='mt-6 -ml-20'>System</h1> */}
                    </div>
                    <button><Link to='/SignUp'><MdOutlineManageAccounts className='md:text-4xl text-2xl' color='blue' /></Link></button>
                </div >

                <div className='-mt-12 h-screen flex justify-center items-center mx-auto container'>
                    <img src='./images/R2/signup.png' className='h-96 xs:hidden md:block' alt="" />
                    <form className='w-96'>
                        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                        <h1 className="xs:text-sm md:text-2xl  mb-3 fw-normal text-white text-center" style={{ fontFamily: 'Josefin Sans' }}>Create Account</h1>
                        <div className='container flex'>
                            <button className='bg-slate-600 xs:text-sm md:text-lg w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><FcGoogle fontSize={25} /> google</button>
                            <button className='bg-slate-600 xs:text-sm md:text-lg w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><BsFacebook fontSize={25} color='blue' /> facebook</button>
                        </div>
                        <h5 className='text-center text-white my-2 xs:text-sm md:text-lg' style={{ fontFamily: 'Josefin Sans' }}>OR</h5>
                        <div className="form-floating mt-4">
                            <input type="email" className="form-control text-white bg-transparent" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" style={{ fontFamily: 'Josefin Sans' }}>User Name</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="email" className="form-control text-white bg-transparent text-xl" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput" style={{ fontFamily: 'Josefin Sans' }}>Email address</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control text-white bg-transparent text-xl" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword" style={{ fontFamily: 'Josefin Sans' }}>Password</label>
                        </div>

                        <div className='text-center mt-5'>
                            <button className="bg-slate-700 md:text-lg md:w-96 rounded-full text-white xs:w-32 text-sm py-2 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }}>Sign up</button>
                        </div>
                        <h6 className='mt-2 xs:text-center xs:text-sm md:text-right md:text-lg'>Allready have an account?  <Link>Sign in</Link></h6>
                        {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
