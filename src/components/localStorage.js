import React, { useEffect, useState } from 'react';

const ShoppingCart = () => {
    // State để lưu trữ danh sách card
    const [cartItems, setCartItems] = useState(()=>{
        const saved = localStorage.getItem("cartItems");
        const initialValue = JSON.parse(saved);
        return initialValue || "";

    });
    // 
    // Effect sẽ chạy mỗi khi danh sách card thay đổi
    useEffect(() => {
        // Lấy danh sách card từ localStorage khi component được render
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    // Effect sẽ chạy mỗi khi danh sách card thay đổi
    useEffect(() => {
        // Lưu danh sách card vào localStorage khi danh sách thay đổi
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Hàm để thêm một sản phẩm vào danh sách card
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Hàm để xóa một sản phẩm khỏi danh sách card
    const removeFromCart = (item) => {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCart);
    };

    return (
        <div className='mt-32'>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addToCart({ id: 1, name: 'Product 1' })}>
                Add Product 1 to Cart
            </button>
            {' '}
            <button onClick={() => addToCart({ id: 2, name: 'Product 2' })}>
                Add Product 2 to Cart
            </button>
        </div>
    );
};


export default ShoppingCart;
