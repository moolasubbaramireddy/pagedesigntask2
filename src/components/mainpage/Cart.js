import React, { useEffect } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import {
  addToCart,
  removeFormCart,
  decrementCartItems,
  clearCart,
  getTotals,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const grangTotal = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartProducts]);

  //console.log(cartProducts)

  const content =
    cartProducts.length > 0
      ? cartProducts.map((item, index) => (
          <tr className="row" key={index}>
            <td className="py-4 px-6 font-medium text-gray-900  blackspace-nowrap dark:text-black">
              {index + 1}
            </td>
            <td className="text-left">{item.title}</td>
            <td>{item.price}</td>
            <td>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="border-2 p-2 mx-2 border-green-500 rounded-lg"
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => dispatch(decrementCartItems(item))}
                className="border-2 p-2 mx-2 border-red-500 rounded-lg"
              >
                -
              </button>
            </td>
            <td>{item.quantity * item.price}</td>
            <td>
              <button
                className="text-red-700 text-2xl	"
                onClick={() => dispatch(removeFormCart(item))}
              >
                <AiTwotoneDelete />
              </button>
            </td>
          </tr>
        ))
      : null;
  return (
    <div>
      <Navbar />
      <section className="overflow-x-auto relative   ">
        <h1 className="text-center uppercase font-bold">cart items</h1>
        {cartProducts.length > 0 ? (
          <div>
            {" "}
            <table className="w-full  text-sm text-center text-gray-100 dark:text-gray-900">
              <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                <th className="py-3 px-6">S No</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Quantity</th>
                <th className="py-3 px-6">Total Amount</th>
                <th className="py-3 px-6">Delete</th>
              </thead>
              <tbody>{content}</tbody>
            </table>
            <div className="flex justify-around mt-4">
              <div>
                <Link to="/products">
                  <button className="text-white bg-cyan-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
                    Continue Shopping
                  </button>{" "}
                </Link>
              </div>
              <div>
                <button
                  onClick={() => dispatch(clearCart())}
                  className=" text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                >
                  Clear Cart
                </button>
              </div>
              <div>
                <h3 className="my-2 font-semibold">
                  Grand Total: {grangTotal.toFixed(2)}
                </h3>
                <button className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                  Proceed To CheckOut
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="uppercase text-center font-bold m-4 p-4 rounded-lg bg-cyan-200 border w-12/12	">
            No items in the cart{" "}
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
