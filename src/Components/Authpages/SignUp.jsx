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
                        <div className='md:w-12 w-10 rounded-full cursor-pointer'>
                            <Link to='/' ><img src="./images/R3/logo.png" alt="" /></Link>
                        </div>
                        {/* <h1 className='mt-2'>Attendance</h1>
                        <h1 className='mt-6 -ml-20'>System</h1> */}
                    </div>
                    <button><Link to='/SignUp'><MdOutlineManageAccounts className='md:text-4xl text-3xl' color='blue' /></Link></button>
                </div >

                <div className='-mt-12 h-screen flex justify-center items-center mx-auto container mr-14'>
                    <img src='./images/signup.png' className='h-96' alt="" />
                    <form className='w-96'>
                        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                        <h1 className="h4 mb-3 fw-normal text-white text-center" style={{ fontFamily: 'Josefin Sans' }}>Create Account</h1>
                        <div className='container flex'>
                            <button className='bg-slate-600 w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><FcGoogle fontSize={25} /> google</button>
                            <button className='bg-slate-600 w-48 rounded-full p-1 mx-3 text-right space-x-10 text-white flex items-center hover:bg-black' style={{ fontFamily: 'Josefin Sans' }}><BsFacebook fontSize={25} color='blue' /> facebook</button>
                        </div>
                        <h5 className='text-center text-white my-2' style={{ fontFamily: 'Josefin Sans' }}>OR</h5>
                        <div className="form-floating mt-2">
                            <input type="email" className="form-control text-white bg-transparent text-xl" id="floatingInput" placeholder="name@example.com" />
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


                        <button className="bg-slate-700 rounded-full text-white w-100 py-2 mt-5 hover:bg-black" type="submit" style={{ fontFamily: 'Josefin Sans' }}>Sign up</button>
                        <h6 className='text-right mt-2 '>Allready have an account?  <Link>Sign in</Link></h6>
                        {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
