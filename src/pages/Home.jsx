import Bkimage from "../assets/refinery.webp";
import { Product } from "../components";

const Home = () => {
  const gasolineItems = [
    {
      image: "gasoline1.jpg",
      name: "Regular Gasoline",
      price: 2.99,
    },
    {
      image: "gasoline2.jpg",
      name: "Premium Gasoline",
      price: 3.49,
    },
    {
      image: "gasoline3.jpg",
      name: "Diesel Fuel",
      price: 3.19,
    },
    // Add more items as needed
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="main-welcome relative sm:h-[65vh] h-[69vh] w-full">
        <img
          src={Bkimage}
          alt="Oil Refineries"
          className="z-0 sm:h-[65vh] h-[69vh] w-full"
        />

        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="absolute inset-0 flex flex-col p-8 text-white">
          <h1 className="sm:text-[3rem] text-[2rem] font-bold text-left sm:w-[70vw]">
            Meeting Future Demand In A Sustainable Way
          </h1>
          <p className="about text-xl text-left sm:w-[70vw] my-4">
            We’re doing our part in that regard with greener practices that
            don’t harm the environment.
          </p>
          <button className="bg-[#E7D70E] rounded-md hover:bg-blue-700 transition duration-300 w-max p-2 px-4 text-lg font-semibold text-black">
            - Shop Now
          </button>
        </div>
      </div>

      <div className="flex flex-col  mt-2">
        <h2 className="text-2xl font-bold p-8 ">Popular Products</h2>
        <div className="flex-props-c flex-wrap gap-8">
          {gasolineItems.map((item) => (
            <Product key={item.name} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
