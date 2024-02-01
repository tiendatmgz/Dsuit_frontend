import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../../config'
const ChangePassTab = ({ tab }) => {
    const [loading, setLoading] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validOldPassword, setValidOldPassword] = useState([false, ''])
    const [validNewPassword, setValidNewPassword] = useState([false, ''])
    const [validConfirmPassword, setValidConfirmPassword] = useState([false, ''])
    const userData = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()

    const handleClickResetPassword = () => {
        const checValidList = [!!validOldPassword, !!newPassword, !!confirmPassword]
        // debugger
        if (checValidList.includes(false)) {
            if (oldPassword === '') {
                setValidOldPassword([true, 'không được để trống!'])
            }
            if (newPassword === '') {
                setValidNewPassword([true, 'không được để trống!'])
            }
            if (confirmPassword === '') {
                setValidConfirmPassword([true, 'không được để trống!'])
            }
            return
        } else if (confirmPassword !== newPassword) {
            setValidOldPassword([false, ''])
            setValidNewPassword([false, ''])
            setValidConfirmPassword([true, 'Xác nhận mật khẩu không khớp!'])
            return
        } else if (newPassword.length < 6 || confirmPassword.length < 6) {
            if (newPassword.length < 6) {
                setValidNewPassword([true, 'tối thiểu 6 kí tự!'])
            }
            if (confirmPassword.length < 6) {
                setValidConfirmPassword([true, 'tối thiểu 6 kí tự!'])
            }
            return
        }
        setLoading(false)
        const id = userData._id
        const password = userData.password
        const dataChange = {
            id: userData._id,
            password: newPassword
        }
        // console.log(dataChange)
        axios.post(`${config.BASE_URL}/user/profile/password`, dataChange)
            .then(() => {
                alert('doi mat khau thanh cong')
                const newUserData = Object.assign(userData, { password: newPassword })
                localStorage.setItem('user', JSON.stringify(newUserData))
                // navigate('/')
                setLoading(false)
                setValidOldPassword([false, ''])
                setValidNewPassword([false, ''])
                setValidConfirmPassword([false, ''])
            })
            .catch((e) => {
                alert("Lỗi! Vui lòng kiểm tra lại ")
                console.log(e)
                setLoading(false)
            })
        // console.log('cuminnn')
    }
    return (
        <div className={`${tab === 2 ? '' : 'hidden'} `}>
            <h3 className='text-xl mb-8'>Change password</h3>
            <div className='flex flex-col gap-8 w-full'>
                <div>
                    <label className=''>OLD PASSWORD:<span className='text-rose-500'>*</span></label>
                    <br />
                    <input
                        type='password'
                        placeholder='Enter your password...'
                        onChange={(e) => setOldPassword(e.target.value)}
                        onBlur={() => {
                            !!oldPassword ?
                                (oldPassword === userData.password ?
                                    setValidOldPassword([false, '']) :
                                    setValidOldPassword([true, 'Mật khẩu cũ không đúng!'])
                                ) :
                                setValidOldPassword([true, 'không được để trống!'])
                        }}
                        className='p-2 border-2 border-black w-full text-black' />
                    <div className='text-xs text-red-500 mt-1' >{validOldPassword[1]}</div>

                </div>
                <div>
                    <label className=''>NEW PASSWORD:<span className='text-rose-500'>*</span></label>
                    <br />
                    <input
                        type='password'
                        placeholder='Enter new password...'
                        onChange={(e) => setNewPassword(e.target.value)}
                        onBlur={() => {
                            !!newPassword ?
                                (confirmPassword.length >= 6 ?
                                    setValidNewPassword([false, '']) :
                                    setValidNewPassword([true, 'tối thiểu 6 kí tự!'])
                                ) :
                                setValidNewPassword([true, 'không được để trống!'])
                        }}
                        className='p-2 border-2 border-black w-full text-black' />
                    <div className='text-xs text-red-500 mt-1' >{validNewPassword[1]}</div>
                </div>
                <div>
                    <label className=''>CONFIRM PASSWORD:<span className='text-rose-500'>*</span></label>
                    <br />
                    <input
                        type='password'
                        placeholder='Enter confirm password...'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => {
                            !!confirmPassword ?
                                (confirmPassword.length >= 6 ?
                                    setValidConfirmPassword([false, '']) :
                                    setValidConfirmPassword([true, 'tối thiểu 6 kí tự!'])
                                ) :
                                setValidConfirmPassword([true, 'không được để trống!'])
                        }}
                        className='p-2 border-2 border-black w-full text-black' />
                    <div className='text-xs text-red-500 mt-1' >{validConfirmPassword[1]}</div>
                </div>
                <div
                    onClick={handleClickResetPassword}
                    className='relative bg-white text-black p-4 px-8  overflow-hidden border-black duration-500 hover:duration-500 hover:border-white  border-2 group/item before:absolute before:h-full  before:bg-blue-500 before:w-0 before:top-0 before:right-0 before:duration-500  hover:before:bg-indigo-500  hover:before:w-full hover:before:duration-500 hover:before:left-0'>
                    <span className='relative z-10 duration-500 text-xl flex items-center justify-center gap-1 font-bold group-hover/item:text-white group-hover/item:duration-500 '>
                        RESET PASSWORD
                    </span>

                </div>
            </div>
        </div >
    )
}

export default ChangePassTab