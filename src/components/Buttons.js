import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return <>
  <Link to='/login'><button className='font-medium px-4 py-1 text-emerald-500 rounded-md border-solid border-2 border-emerald-500'>
    LOG IN
  </button></Link>
  <button className='px-4 py-1 ml-2 text-white bg-emerald-500 font-medium  rounded-md border-solid border-2 border-emerald-500'>
    CART
  </button>
  </>
}

export default Buttons