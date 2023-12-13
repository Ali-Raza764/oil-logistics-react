import { Link } from "react-router-dom";
import Bkimage from "../assets/refinery.webp";

const Landing = () => {
  return (
    <div className="main-welcome relative h-screen  w-full">
      <img
        src={Bkimage}
        alt="Oil Refineries"
        className="z-0 h-screen w-full"
      />

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute inset-0 flex flex-col p-8 text-white">
        <h1 className="sm:text-[3rem] text-[2rem] font-bold text-left sm:w-[70vw]">
          Meeting Future Demand In A Sustainable Way
        </h1>
        <p className="about text-xl text-left sm:w-[70vw] my-4">
          We’re doing our part in that regard with greener practices that don’t
          harm the environment.
        </p>
        <Link to={'/login'}>
        
        <button className="bg-[#E7D70E] rounded-md hover:bg-blue-700 transition duration-300 w-max p-2 px-4 text-lg font-semibold text-black">
          - Log In
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
