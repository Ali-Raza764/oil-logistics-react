import Bkimage from '../assets/refinery.webp'
import { Product } from '../components'

const Home = () => {
  const gasolineItems = [
    {
      image: 'gasoline1.jpg',
      name: 'Regular Gasoline',
      price: 2.99
    },
    {
      image: 'gasoline2.jpg',
      name: 'Premium Gasoline',
      price: 3.49
    },
    {
      image: 'gasoline3.jpg',
      name: 'Diesel Fuel',
      price: 3.19
    },
    // Add more items as needed
  ];
  
  return (
    <div className="min-h-screen w-full">

    <div className="main-welcome relative h-[60vh] w-full">
        {/* Next.js Image Component */}
        <img
          src={Bkimage}
          alt="Oil Refineries"
          className="z-0 h-[60vh] w-full"
        />
        

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Welcome to our Oil Products Store
          </h1>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
              {/* Available Products Section */}
      <div className="flex-props-c flex-wrap gap-8 mt-8">
        {
          gasolineItems.map((item)=>(
            <Product key={item.name} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Home