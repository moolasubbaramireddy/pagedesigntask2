import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import Navbar from "../navbar/Navbar";
import { addToCart } from '../redux/cartSlice'

const Products = () => {
  const products = useSelector((state) => state.products.items);
  const ProductStatus = useSelector((state) => state.products.status);
  const productError = useSelector((state) => state.products.error);

  //console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ProductStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [ProductStatus, dispatch]);

  if (products === undefined) {
    return <div> loading...</div>;
  } else if (products === productError) {
    return <div>{productError}</div>;
  }

  const addProductToCart = (product) => {
    //console.log(product)
    dispatch(addToCart(product));
    
  };

  return (
    <>
      <Navbar />
      <section>
        <div className=" m-2 p-2 uppercase font-bold underline text-center">
          <h1>Product's List</h1>
        </div>

        <div className="grid grid-cols-4 gap-8 justify-items-center  ">
          {products.map((item, index) => (
            <div
              className="border-2 rounded-lg border-indigo-700 py-4 px-4"
              key={index}
            >
              <img
                className="h-40 w-40 border-2 rounded-lg border-blue-200 p-2 "
                src={item.image}
                alt={`img`}
              />
              <h4 className="flex">
                <p className="font-medium px-1"> Title : </p>
                {item.title.substr(0, 15)}
              </h4>
              <p className="flex">
                <p className="font-medium px-1">Price: </p> {item.price}
              </p>

              <button
                onClick={() => addProductToCart(item)}
                className="p-1 rounded-lg  font-semibold bg-orange-500 "
              >
                ADD TO CART
                {/* <span><BiCart/></span>   */}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
