import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import UserAccount from './UserAccount';
import decorCanva from '../../img/geometric.png';
import logo from '../../img/TIENDAT-MGZ-logo1.png';
import config from '../../config';

export const MyAccount = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [haveAccount, setHaveAccount] = useState(false);
    const [login, setlogin] = useState({ email: '', password: null })
    const [loading, setLoading] = useState(false)
    const [hasUserLogin, setHasUserLogin] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || ''
    })
    // =====login=========
    const [emailLogin, setEmailLogin] = useState('')
    const [passLogin, setPassLogin] = useState('')


    // =====REGISTER=======
    const [fullName, setFullName] = useState('')
    const [phoneNum, setPhoneNum] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // validate
    const [validFullName, setValidFullName] = useState(false)
    const [validPhoneNum, setValidPhoneNum] = useState(false)
    const [validEmail, setValidEmail] = useState([false, ''])
    const [validPassword, setValidPassword] = useState([false, ''])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function isValidPassword(password) {
        // kiểm tra độ dài password
        return password.length >= 6 ? true : false
    }
    function isValidEmail(email) {
        // kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    console.log("hasUserLogin", !!hasUserLogin)
    const handleClickLogin = () => {

        const userData = { email: emailLogin, password: passLogin }
        console.log(userData)
        setLoading(true)
        axios.post(`${config.BASE_URL}/user/login`, userData)
            .then((res) => {
                console.log('user available')
                localStorage.setItem('user', JSON.stringify(res.data))
                setHasUserLogin(res.data)
                setLoading(false)
            })
            .catch((e) => {
                alert("Lỗi! Vui lòng kiểm tra lại user")
                console.log(e)
                setLoading(false)
            })

    }
    const handleClickSignUp = () => {
        let checkRegister = [!!fullName, !!phoneNum, !!email, !!password]
        if (checkRegister.includes(false)) {
            if (!fullName) {
                setValidFullName(true)
            }
            if (!phoneNum) {
                setValidPhoneNum(true)
            }
            if (!email) {
                setValidEmail([true, 'Email cannot be blank!'])
            }
            if (!password) {
                setValidPassword([true, 'Password cannot be blank!'])
            }
            return
        }
        setLoading(true)
        const userData = { fullName, phoneNum, email, password }
        axios.post(`${config.BASE_URL}/user/register`, userData)
            .then(() => {
                alert('them thanh cong')
                setLoading(false)
                setlogin({ email: email, password: password })
                setHaveAccount(true)
            })
            .catch(e => {
                alert("Lỗi! Vui lòng kiểm tra lại")
                console.log(e)
                setLoading(false)
            })
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (!!hasUserLogin ?
                <UserAccount /> :
                (
                    <div className='mt-16 text-black '>
                        {/* {haveAccount ? (
                            <div className='backdrop-blur-xl p-24'>
                                <h1 className="text-6xl font-medium text-center uppercase underline mb-10">login</h1>
                                <form className='flex flex-col gap-4'>
                                    <div>
                                        <label className='text-xl'>Email<span className='text-rose-500'>*</span></label>
                                        <br />
                                        <input
                                            type='email'
                                            placeholder='Enter your email...'
                                            onChange={(e) => { setEmailLogin(e.target.value) }}
                                            className='p-4 border-2 border-black w-full text-black' />
                                    </div>
                                    <div>
                                        <label className='text-xl'>Password<span className='text-rose-500'>*</span></label>
                                        <div className='relative'>
                                            <input
                                                type={!showPassword ? 'password' : 'text'}
                                                value={login.password}
                                                placeholder='Enter your password...'
                                                onChange={(e) => { setPassLogin(e.target.value) }}
                                                className='p-4 pr-12 border-2 border-black w-full text-black' />
                                            <span onClick={() => { setShowPassword(!showPassword) }} className={`${!showPassword ? 'hidden' : ''} absolute top-4 right-4`}>
                                                <i className="text-black fa-solid fa-eye"></i>
                                            </span>
                                            <span onClick={() => { setShowPassword(!showPassword) }} className={`${showPassword ? 'hidden' : ''} absolute top-4 right-4`}>
                                                <i className="text-black fa-solid fa-eye-slash"></i>
                                            </span>
                                        </div>

                                    </div>
                                    <div
                                        onClick={handleClickLogin}
                                        className='p-4 hover:bg-indigo-500 hover:duration-200 duration-200 border-2 border-black capitalize text-xl'>
                                        login
                                    </div>
                                </form>

                                <h3 className='font-medium text-2xl text-center capitalize my-4'>or</h3>

                                <div className='flex flex-col'>
                                    <button className='flex justify-center gap-4 p-4 hover:bg-indigo-500 hover:duration-200 duration-200 border-2 border-black capitalize text-xl '>
                                        <img src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0" alt="Google logo" className='w-8' />
                                        <span>Login with Google</span>
                                    </button>
                                </div>
                                <div className='flex gap-12 justify-between my-4'>
                                    <div onClick={() => { setHaveAccount(false) }} className='hover:underline cursor-pointer'>Don't have an account?</div>
                                    <div className='hover:underline cursor-pointer'>Lost your password?</div>
                                </div>
                            </div>
                        ) : ( */}
                        <section className="bg-white lg:p-24">
                            <div className="lg:grid lg:min-h-192 lg:grid-cols-12  lg:border-4 border-black border-solid overflow-hidden">
                                <aside className={`relative block h-16 ${haveAccount ? 'lg:order-last' : ''} lg:col-span-5 lg:h-full  xl:col-span-6`}>
                                    <img
                                        alt="Pattern"
                                        src={decorCanva}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </aside>

                                <main className="flex  justify-center  px-8 py-8 sm:px-12 lg:col-span-7 lg:p-24 xl:col-span-6">
                                    {haveAccount ?
                                        <div className="w-full">
                                            <img src={logo} alt='logo' className='h-16 rounded-full' />
                                            <h1 className="mt-6 flex gap-4 items-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Login</h1>
                                            <p className="mt-4 leading-relaxed text-gray-500">Wellcome back with us!</p>
                                            <div className="mt-8 grid grid-cols-6 gap-6">
                                                <div className="col-span-6">
                                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">Email</label>

                                                    <input
                                                        type='email'
                                                        placeholder='Enter your email...'
                                                        onChange={(e) => { setEmailLogin(e.target.value) }}
                                                        className={`focus-visible:border-blue-500 mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2  `}
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">Password</label>
                                                    <div className='relative'>

                                                        <input
                                                            type={!showPassword ? 'password' : 'text'}
                                                            value={login.password}
                                                            placeholder='Enter your password...'
                                                            onChange={(e) => { setPassLogin(e.target.value) }}
                                                            className={`focus-visible:border-blue-500 mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2  `}
                                                        />
                                                        <span onClick={() => { setShowPassword(!showPassword) }} className={`${!showPassword ? 'hidden' : ''} absolute top-3 right-3`}>
                                                            <i className="text-black fa-solid fa-eye"></i>
                                                        </span>
                                                        <span onClick={() => { setShowPassword(!showPassword) }} className={`${showPassword ? 'hidden' : ''} absolute top-3 right-3`}>
                                                            <i className="text-black fa-solid fa-eye-slash"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-span-6">
                                                    <button
                                                        onClick={handleClickLogin}
                                                        className='relative w-full text-red-500 p-2 px-8  overflow-hidden border-red-500 duration-200 hover:duration-200 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-red-500 before:w-0 before:top-0 before:right-0 before:duration-200  hover:before:bg-red-500  hover:before:w-full hover:before:duration-200 hover:before:left-0 '
                                                    >
                                                        <span className='relative z-10 duration-200 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-200 '>login</span>
                                                    </button>

                                                </div>
                                                <div className="col-span-6 sm:flex sm:items-center  sm:gap-4 text-center">
                                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">Don't have an account?{' '}
                                                        <span onClick={() => { setHaveAccount(false) }} className="text-gray-700  underline">Sign up</span>
                                                        {/* <a href="#" className="text-gray-700 underline">Log in</a>. */}
                                                    </p>
                                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">or</p>
                                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">Forgot password?{' '}
                                                        <span className="text-gray-700  underline"> reset</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div className="w-full">
                                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Welcome to D-SUIT 👋</h1>
                                            <p className="mt-4 leading-relaxed text-gray-500">Join us to get the best services and offers we have for you!</p>
                                            <div className="mt-8 grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                                    <input
                                                        type='text'
                                                        placeholder='Full Name . . .'
                                                        onChange={(e) => {
                                                            setFullName(e.target.value)
                                                        }}
                                                        onBlur={() => {
                                                            !!fullName ? setValidFullName(false) : setValidFullName(true)
                                                        }}
                                                        className={`${validFullName ? 'border-red-500 focus-visible:border-red-500' : 'border-gray-200 focus-visible:border-blue-500'} mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2  `}
                                                    />
                                                    <div className='text-xs text-red-500 mt-1' >{validFullName ? 'Fullname cannot be blank!' : ''}</div>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                                    <input
                                                        type='number'
                                                        placeholder='Phone Number . . .'
                                                        onChange={(e) => {
                                                            setPhoneNum(e.target.value)
                                                        }}
                                                        onBlur={() => {
                                                            !!phoneNum ? setValidPhoneNum(false) : setValidPhoneNum(true)
                                                        }}
                                                        className={`${validPhoneNum ? 'border-red-500 focus-visible:border-red-500' : 'border-gray-200 focus-visible:border-blue-500'} mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2  `}
                                                    />
                                                    <div className='text-xs text-red-500 mt-1' >{validPhoneNum ? 'Phone number can not be left blank!' : ''}</div>
                                                </div>

                                                <div className="col-span-6">
                                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                                    <input
                                                        type='email'
                                                        placeholder='Email . . .'
                                                        onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }}
                                                        onBlur={() => {
                                                            !!email ?
                                                                (isValidEmail(email) ?
                                                                    setValidEmail([false, '']) :
                                                                    setValidEmail([true, 'Email invalidate !'])) :
                                                                setValidEmail([true, 'Email cannot be blank!'])
                                                        }}
                                                        className={`${validEmail[1] ? 'border-red-500 focus-visible:border-red-500' : 'border-gray-200 focus-visible:border-blue-500'} mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2  `}

                                                    />
                                                    <div className='text-xs text-red-500 mt-1' >{validEmail[1]}</div>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                                                    <div className='relative'>
                                                        <input
                                                            type={!showPassword ? 'password' : 'text'}
                                                            placeholder='Password . . .'
                                                            onChange={(e) => {
                                                                setPassword(e.target.value)
                                                            }}
                                                            onBlur={() => {
                                                                !!password ?
                                                                    (isValidPassword(password) ?
                                                                        setValidPassword(false, '') :
                                                                        setValidPassword([true, 'Password at least 6 characters!'])) :
                                                                    setValidPassword([true, 'Password cannot be blank!'])
                                                            }}
                                                            className={`${validPassword[1] ? 'border-red-500 focus-visible:border-red-500' : 'border-gray-200 focus-visible:border-blue-500'} mt-1 w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm p-2 border-2`}

                                                        />
                                                        <span onClick={() => { setShowPassword(!showPassword) }} className={`${!showPassword ? 'hidden' : ''} absolute top-3 right-3`}>
                                                            <i className="text-gray-300 fa-solid fa-eye"></i>
                                                        </span>
                                                        <span onClick={() => { setShowPassword(!showPassword) }} className={`${showPassword ? 'hidden' : ''} absolute top-3 right-3`}>
                                                            <i className="text-gray-300 fa-solid fa-eye-slash"></i>
                                                        </span>
                                                    </div>
                                                    <div className='text-xs text-red-500 mt-1' >
                                                        {validPassword[1]}
                                                    </div>
                                                </div>

                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">Password Confirmation</label>

                                                    <input
                                                        type="password"
                                                        id="PasswordConfirmation"
                                                        name="password_confirmation"
                                                        className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2 border-2 focus-visible:border-blue-500`}
                                                    />
                                                </div>
                                                <div className="col-span-6">
                                                    <button
                                                        onClick={handleClickSignUp}
                                                        className='relative w-full text-red-500 p-2 px-8  overflow-hidden border-red-500 duration-200 hover:duration-200 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-red-500 before:w-0 before:top-0 before:right-0 before:duration-200  hover:before:bg-red-500  hover:before:w-full hover:before:duration-200 hover:before:left-0 '
                                                    >
                                                        <span className='relative z-10 duration-200 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-200 '>Create an account</span>
                                                    </button>
                                                </div>
                                                <div className="col-span-6">
                                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">Already have an account?{' '}
                                                        <span onClick={() => { setHaveAccount(true) }} className="text-gray-700  underline">Log in</span>
                                                        {/* <a href="#" className="text-gray-700 underline">Log in</a>. */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </main>
                            </div>
                        </section>
                        {/* )} */}

                    </div >

                ))}
        </>
    );
};
