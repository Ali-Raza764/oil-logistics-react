import {
  FiLoader,
  FiAnchor,
  FiCalendar,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";

const PortAuthorities = () => {
  return (
    <div className="w-full mx-auto">
      <table className="w-full bg-white border border-gray-300 divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100">Load Port</th>
            <th className="py-2 px-4 bg-gray-100">Discharge Port</th>
            <th className="py-2 px-4 bg-gray-100">Laycan</th>
            <th className="py-2 px-4 bg-gray-100">Quantity</th>
            <th className="py-2 px-4 bg-gray-100">Product</th>
            <th className="py-2 px-4 bg-gray-100">Shipping Company</th>
            <th className="py-2 px-4 bg-gray-100">Email Date</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index}>
              <td className="py-2 px-4">Row {index + 1}, Col 1</td>
              <td className="py-2 px-4">Row {index + 1}, Col 2</td>
              <td className="py-2 px-4">Row {index + 1}, Col 3</td>
              <td className="py-2 px-4">Row {index + 1}, Col 4</td>
              <td className="py-2 px-4">Row {index + 1}, Col 5</td>
              <td className="py-2 px-4">Row {index + 1}, Col 6</td>
              <td className="py-2 px-4">Row {index + 1}, Col 7</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortAuthorities;
