import React from 'react'
import { Link } from 'react-router-dom'

const BtnWhite = (props) => {
    return (
        <Link to={props.path} className='btn-white bg-indigo-500  px-5 py-3'><span className='text-white uppercase text-xl'>{props.title}</span></Link>
    )
}

export default BtnWhite