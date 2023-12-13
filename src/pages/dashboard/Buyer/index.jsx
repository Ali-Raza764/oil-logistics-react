import { Product } from "../../../components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Oil Market Trends",
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Premium Oil Prices",
      data: [200, 300, 400, 450], // Replace with your actual data
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Regular Oil Prices",
      data: [300, 400, 500, 550], // Replace with your actual data
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

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
    <div className="min-h-screen w-full p-6">
      <div className="w-full flex-props-b">
        <div className="w-full mb-8 flex flex-col items-start h-full">
          <h1 className="text-3xl font-bold">Buy Premium Oil Products</h1>
          <p className="text-lg text-gray-600">
            Explore the latest trends in the oil market and choose from our
            premium selection.
          </p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="w-full">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
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
