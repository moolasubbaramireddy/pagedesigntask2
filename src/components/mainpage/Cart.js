import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'

const Cart = () => {

    const cartProducts = useSelector((state)=>state.cart.cartItems);
    console.log(cartProducts)
  return (
   
    <div>
         <Navbar />
    </div>
  )
}

export default Cart