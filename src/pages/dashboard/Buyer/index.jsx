import { Product } from "../../../components";

const Buyer = () => {
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

export default Buyer;
