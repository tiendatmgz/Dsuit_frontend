import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import UserAccount from './UserAccount';
// import Login from './account/Login';

export const MyAccount = () => {
    // const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [haveAccount, setHaveAccount] = useState(true);
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
        axios.post('http://localhost:4321/user/login', userData)
            .then((res) => {
                console.log('user available')
                localStorage.setItem('user', JSON.stringify(res.data))
                setLoading(false)
            })
            .catch((e) => {
                alert("Lỗi! Vui lòng kiểm tra lại user")
                console.log(e)
                setLoading(false)
            })

    }
    const handleClickRegister = () => {
        let checkRegister = [!!fullName, !!phoneNum, !!email, !!password]
        if (checkRegister.includes(false)) {
            if (!fullName) {
                setValidFullName(true)
            }
            if (!phoneNum) {
                setValidPhoneNum(true)
            }
            if (!email) {
                setValidEmail([true, 'Email không được để trống!'])
            }
            if (!password) {
                setValidPassword([true, 'Password không được để trống!'])
            }
            return
        }
        setLoading(true)
        const userData = { fullName, phoneNum, email, password }
        axios.post('http://localhost:4321/user/register', userData)
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
                    <div className='mt-16 p-24 text-black bg-[url(https://i.pinimg.com/564x/03/90/fd/0390fd80a363694f30303cf68edd3813.jpg)] bg-repeat-x bg-fixed'>
                        <div className='flex justify-center items-center  '>
                            {haveAccount ? (
                                <div className='backdrop-blur-xl p-24'>
                                    <h1 class="text-6xl font-medium text-center uppercase underline mb-10">login</h1>
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
                                                    <i class="text-black fa-solid fa-eye"></i>
                                                </span>
                                                <span onClick={() => { setShowPassword(!showPassword) }} className={`${showPassword ? 'hidden' : ''} absolute top-4 right-4`}>
                                                    <i class="text-black fa-solid fa-eye-slash"></i>
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
                            ) : (
                                <div className='backdrop-blur-xl p-24 '>
                                    <h1 class="text-6xl font-medium text-center uppercase underline mb-10">Register</h1>
                                    <form className='flex flex-col gap-4'>
                                        <div className='flex gap-8'>
                                            <div>
                                                <label className='text-xl'>Full name<span className='text-rose-500'>*</span></label>
                                                <br />
                                                <input
                                                    type='text'
                                                    placeholder='Enter your full name...'
                                                    onChange={(e) => {
                                                        setFullName(e.target.value)
                                                    }}
                                                    onBlur={() => {
                                                        !!fullName ? setValidFullName(false) : setValidFullName(true)
                                                    }}
                                                    className='p-4 border-2 border-black w-full text-black' />
                                                <br />
                                                <div className='text-xs text-red-500 mt-1' >{validFullName ? 'Fullname không được để trống!' : ''}</div>
                                            </div>
                                            <div>
                                                <label className='text-xl'>Phone number<span className='text-rose-500'>*</span></label>
                                                <br />
                                                <input
                                                    type='number'
                                                    placeholder='Enter your phone number...'
                                                    onChange={(e) => {
                                                        setPhoneNum(e.target.value)
                                                    }}
                                                    onBlur={() => {
                                                        !!phoneNum ? setValidPhoneNum(false) : setValidPhoneNum(true)
                                                    }}
                                                    className='p-4 border-2 border-black w-full text-black' />
                                                <br />
                                                <div className='text-xs text-red-500 mt-1' >{validPhoneNum ? 'Phone number không được để trống!' : ''}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className='text-xl'>Email<span className='text-rose-500'>*</span></label>
                                            <br />
                                            <input
                                                type='email'
                                                placeholder='Enter your email...'
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                onBlur={() => {
                                                    !!email ?
                                                        (isValidEmail(email) ?
                                                            setValidEmail([false, '']) :
                                                            setValidEmail([true, 'Email không đúng định dạng!'])) :
                                                        setValidEmail([true, 'Email không được để trống!'])
                                                }}
                                                className='p-4 border-2 border-black w-full text-black' />
                                            <br />
                                            <div className='text-xs text-red-500 mt-1' >
                                                {validEmail[1]}
                                            </div>
                                        </div>
                                        <div>
                                            <label className='text-xl'>Password<span className='text-rose-500'>*</span></label>
                                            <div className='relative'>
                                                <input
                                                    type={!showPassword ? 'password' : 'text'}
                                                    placeholder='Enter your password...'
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                        console.log(password.length)
                                                    }}
                                                    onBlur={() => {
                                                        !!password ?
                                                            (isValidPassword(password) ?
                                                                setValidPassword(false, '') :
                                                                setValidPassword([true, 'Độ dài mật khẩu tối thiểu là phải từ 6 ký tự!'])) :
                                                            setValidPassword([true, 'Password không được để trống!'])
                                                    }}
                                                    className='p-4 pr-12 border-2 border-black w-full text-black' />
                                                <span onClick={() => { setShowPassword(!showPassword) }} className={`${!showPassword ? 'hidden' : ''} absolute top-4 right-4`}>
                                                    <i class="text-black fa-solid fa-eye"></i>
                                                </span>
                                                <span onClick={() => { setShowPassword(!showPassword) }} className={`${showPassword ? 'hidden' : ''} absolute top-4 right-4`}>
                                                    <i class="text-black fa-solid fa-eye-slash"></i>
                                                </span>
                                            </div>
                                            <div className='text-xs text-red-500 mt-1' >
                                                {validPassword[1]}
                                            </div>

                                        </div>
                                        <div
                                            onClick={handleClickRegister}
                                            className='p-4 hover:bg-indigo-500 hover:duration-200 duration-200 border-2 border-black capitalize text-xl'>Register</div>
                                    </form>
                                    <h3 className='font-medium text-2xl text-center capitalize my-4'>or</h3>
                                    <div className='flex flex-col'>
                                        <button className='flex justify-center gap-4 p-4 hover:bg-indigo-500 hover:duration-200 duration-200 border-2 border-black capitalize text-xl '>
                                            <img src="https://th.bing.com/th/id/R.96c1a6566397efcf7de758fd2a6f116a?rik=LwK4OM1JQPW06A&pid=ImgRaw&r=0" alt="Google logo" className='w-8' />
                                            <span >Register with Google</span>
                                        </button>
                                    </div>
                                    <div className='flex justify-between my-4 gap-12'>
                                        <div onClick={() => { setHaveAccount(true) }} className='hover:underline cursor-pointer'>Have an account?</div>
                                        <div className='hover:underline cursor-pointer'>Lost your password?</div>
                                    </div>
                                </div>
                            )}
                        </div >
                    </div >
                ))}
        </>
    );
};
