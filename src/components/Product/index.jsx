// import Image from "next/image";
import { Link } from "react-router-dom";
import productIcon from "../../assets/product.png";

const Product = ({ item: { name, price } }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg">
      <Link to={`/user/productdetails/${name}`}>
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/428x268"
        />
        <div className="mt-4">
          <p className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {name}
          </p>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
