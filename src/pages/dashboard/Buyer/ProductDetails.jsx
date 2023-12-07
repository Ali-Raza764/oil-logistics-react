import React from "react";
import { FaStar, FaHeart, FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-11 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Oelos
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="w-4 h-4 text-[#2f2fb1da]" />
                ))}
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 space-x-2">
                <FaHeart className="text-gray-500" />
                <FaShoppingCart className="text-gray-500" />
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <FaChevronDown className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button className="flex ml-auto text-xl text-black font-semibold bg-[#e7d90ee7] border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded"
              onClick={()=>navigate(`/checkout/${name}`)}>
                Buy
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
