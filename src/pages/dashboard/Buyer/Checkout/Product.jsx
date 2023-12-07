import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = () => {
  return (
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
      <AiOutlineShoppingCart className="m-2 h-8 w-8 text-gray-500" />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">
          Nike Air Max Pro 8888 - Super Light
        </span>
        <span className="float-right text-gray-400">42EU - 8.5US</span>
        <p className="mt-auto text-lg font-bold">$238.99</p>
      </div>
    </div>
  );
};

export default Product;
