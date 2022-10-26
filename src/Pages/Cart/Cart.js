import React from 'react';
import {  FaRecycle, FaReply } from 'react-icons/fa';
import AllItems from '../../components/CartBanner/AllItems';
import CartBanner from '../../components/CartBanner/CartBanner';
import SingleItem from '../../components/CartBanner/SingleItem';

const Cart = () => {
    return (
        <section className='container mx-auto px-6'>
            <CartBanner/>
            <AllItems/>
            <div className='flex justify-around'>
                <button><span><FaReply/></span> Continue Shopping</button>
                <button><span><FaRecycle/></span> Clear Shopping Cart</button>
            </div>
        </section>
    );
};

export default Cart;