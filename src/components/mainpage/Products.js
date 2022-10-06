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
  }, [products , dispatch]);

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
        <h1>Product List</h1>

        {/* {ProductStatus === "Loading" ? <p>Loading ...</p>: null}
        {productError ? <p>{productError} </p>: null } */}

        <div className='grid grid-cols-3 gap-8 '>
            {
               products.map((item,index) => <div key={index} >
                    <img src={item.image} />
                    <h4>Title:{item.title}</h4>
                    <p>Price: {item.price}</p>
                </div>)
            }
        </div>
      </section>
    </>
  );
};

export default Products;
