import React from 'react'

const OrderTab = ({tab}) => {
    return (
        <div className={`${tab === 1 ? '' : 'hidden'} `}>
            <h3 className='text-xl mb-8'>Your order</h3>
        </div>
    )
}

export default OrderTab