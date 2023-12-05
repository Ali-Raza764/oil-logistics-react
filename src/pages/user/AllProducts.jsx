import { Product } from ".././../components";

const AllProducts = () => {
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
    <div className="flex-props-c flex-wrap gap-8 w-full p-4">
          {gasolineItems.map((item) => (
            <Product key={item.name} item={item} />
          ))}
        </div>
  );
};

export default AllProducts;
