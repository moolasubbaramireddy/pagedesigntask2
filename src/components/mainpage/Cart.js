import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'
import { removeFormCart } from '../redux/cartSlice';

const Cart = () => {

    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const dispatch = useDispatch();
    //console.log(cartProducts)

    const content = cartProducts.length >0 ? cartProducts.map((item,index)=> <tr className= "" key={index}>
      <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-black" >{index+1}</td>
      <td className='text-left'>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <button className='border-2 p-1 mx-2 border-green-500'>+</button>
        {item.quantity}
        <button className='border-2 p-1 mx-2 border-red-500'>-</button>
        </td>
      <td>{item.quantity * item.price}</td>
      <td>
        <button onClick={ ()=> dispatch(removeFormCart(item))}><AiTwotoneDelete /></button>
      </td>


    </tr>) : null
  return (
   
    <div>
         <Navbar />
         <section className="overflow-x-auto relative shadow-md ">
            <h1 className='text-center uppercase font-bold'>cart items</h1>
            {
              cartProducts.length >0 ? <table className="w-full text-sm text-center text-gray-100 dark:text-gray-900">
              <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <th  className="py-3 px-6">S No</th>
                <th  className="py-3 px-6 text-left">Title</th>
                <th  className="py-3 px-6">Price</th>
                <th  className="py-3 px-6">Quantity</th>
                <th  className="py-3 px-6">Total Amount</th>
                <th  className="py-3 px-6">#</th>


              </thead>
              <tbody>
                {content}
              </tbody>
            </table> : <div className='uppercase text-center font-bold m-4 p-4'>No items in the cart  </div>
            }
         </section>
    </div>
  )
}

export default Cart