import { useState, useEffect } from "react";

const OilOrderProductCard = ({ order }) => {
  const { id, product, quantity, status } = order;

  return (
    <div className="border p-4 mb-4 flex-props-c flex-wrap w-[15rem]">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p>Order ID: {id}</p>
      <p>Quantity: {quantity}</p>
      <p>Status: {status}</p>
    </div>
  );
};

const Orders = () => {
  // Example data - replace with your real-time data fetching logic
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: { name: "Regular Gasoline" },
      quantity: 10,
      status: "Pending",
    },
    {
      id: 1,
      product: { name: "Regular Gasoline" },
      quantity: 10,
      status: "Pending",
    },
    {
      id: 1,
      product: { name: "Regular Gasoline" },
      quantity: 10,
      status: "Pending",
    },
    {
      id: 2,
      product: { name: "Premium Gasoline" },
      quantity: 5,
      status: "Arrived",
    },
    {
      id: 2,
      product: { name: "Premium Gasoline" },
      quantity: 5,
      status: "Arrived",
    },
    {
      id: 2,
      product: { name: "Premium Gasoline" },
      quantity: 5,
      status: "Arrived",
    },
    // Add more orders as needed
  ]);

  // Example data fetching logic using useEffect
  useEffect(() => {
    // Fetch real-time data and update orders state
    // For demonstration purposes, you can use a mock API call or WebSocket for real-time updates
    const fetchData = async () => {
      // Replace with your real data fetching logic
      // const response = await fetch("api/orders");
      // const data = await response.json();
      // setOrders(data);
    };

    // Call fetchData on component mount
    fetchData();
  }, []);

  const renderOrders = (orderList, title) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex-props-b flex-wrap">
        {orderList.map((order) => (
          <OilOrderProductCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const arrivedOrders = orders.filter((order) => order.status === "Arrived");
  const otherOrders = orders.filter(
    (order) => order.status !== "Pending" && order.status !== "Arrived"
  );

  return (
    <div className="min-h-screen p-10">
      <div className="mb-8 flex-props-c flex-wrap">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Real-Time Order Tracking
        </h1>
      </div>

      {renderOrders(pendingOrders, "Pending Orders")}
      {renderOrders(arrivedOrders, "Arrived Orders")}
      {renderOrders(otherOrders, "Other Orders")}
    </div>
  );
};

export default Orders;
