import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import Navbar from "../navbar/Navbar";

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const ProductStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);

  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    if(ProductStatus === "idle")
    {dispatch(fetchProducts());}
  }, [ProductStatus , dispatch]);

  if(products === undefined){
   return <div> loading...</div>
 }
 else if (products===productError){
    return <div>{productError}</div>
 }
  return (
    <>
      <Navbar />
      <section>
        <div className=" m-2 p-2 uppercase font-bold underline text-center">
          <h1>Product's List</h1>
        </div>

        {/* {ProductStatus === "Loading" ? <p>Loading ...</p>: null}
        {productError ? <p>{productError} </p>: null } */}

        <div className='grid grid-cols-4 gap-8 justify-items-center  '>
            {
               products.map((item,index) => <div className="border-2 rounded-lg border-indigo-700 py-4 px-4" key={index} >
                    <img className="h-40 w-40 border-2 rounded-lg border-blue-200 p-2 " src={item.image} alt={`img`} />
                    <h4 className="flex"> <p className="font-medium px-1"> Title : </p>{item.title.substr(0,15)}</h4>
                    <p className="flex"> <h2 className="font-medium px-1">Price: </h2> {item.price}</p>
                    <button className="border-2 rounded-full hover:border-sky-900 md:border-teal-200 font-normal font-semibold bg-sky-300  ">ADD TO CART</button>
                </div>)
            }
        </div>
      </section>
    </>
  );
};

export default Products;
