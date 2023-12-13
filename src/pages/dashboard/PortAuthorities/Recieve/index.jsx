import { FiFile, FiUpload } from "react-icons/fi";

const Recieve = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100">load Port</th>
            <th className="py-2 px-4 bg-gray-100">Bill of Lading</th>
            <th className="py-2 px-4 bg-gray-100">Shipping Manifest</th>
            <th className="py-2 px-4 bg-gray-100">Customs Documentation</th>
            <th className="py-2 px-4 bg-gray-100">Export Declaration</th>
            <th className="py-2 px-4 bg-gray-100">Quantity</th>
            <th className="py-2 px-4 bg-gray-100">Product</th>
            <th className="py-2 px-4 bg-gray-100">Shipping Company</th>
            <th className="py-2 px-4 bg-gray-100">Email Date</th>
            <th className="py-2 px-4 bg-gray-100">Vessel Information</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with your actual data */}
          <tr>
            <td className="py-2 px-4">Row 1, Col 1</td>
            <td className="py-2 px-4">Row 1, Col 2</td>
            <td className="py-2 px-4">Row 1, Col 3</td>
            <td className="py-2 px-4">Row 1, Col 4</td>
            <td className="py-2 px-4">Row 1, Col 5</td>
            <td className="py-2 px-4">Row 1, Col 6</td>
            <td className="py-2 px-4">Row 1, Col 7</td>
            <td className="py-2 px-4">Row 1, Col 8</td>
            <td className="py-2 px-4">Row 1, Col 9</td>
            <td className="py-2 px-4">Row 1, Col 10</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Recieve;
