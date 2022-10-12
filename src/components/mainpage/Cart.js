import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar'

const Cart = () => {

    const cartProducts = useSelector((state)=>state.cart.cartItems);
    console.log(cartProducts)

    const content = cartProducts.length >0 ? cartProducts.map((item,index)=> <tr className= "" key={index}>
      <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" >{item.id}</td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.quantity * item.price}</td>


    </tr>) : null
  return (
   
    <div>
         <Navbar />
         <section className="overflow-x-auto relative shadow-md ">
            <h1 className='text-center uppercase font-bold'>cart items</h1>
            {
              cartProducts.length >0 ? <table className="w-full text-sm text-left text-gray-100 dark:text-gray-900">
              <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <th  className="py-3 px-6">S No</th>
                <th  className="py-3 px-6">Title</th>
                <th  className="py-3 px-6">Price</th>
                <th  className="py-3 px-6">Quantity</th>
                <th  className="py-3 px-6">Total Amount</th>

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