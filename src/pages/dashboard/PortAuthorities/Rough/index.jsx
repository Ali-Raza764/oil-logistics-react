import React from "react";
import { FiFile, FiUpload } from "react-icons/fi";

const Rough = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Upload Files</h2>

      {/* File Upload Form */}
      <form action="#" method="post" encType="multipart/form-data">
        {/* 10 Input Fields in a Single Column */}
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex mb-2">
            <label
              htmlFor={`file${index + 1}`}
              className="block text-gray-700 font-bold mr-4"
            >
              <FiFile className="inline-block w-6 h-6 mr-2" />
              File {index + 1}
            </label>
            <input
              type="file"
              name={`file${index + 1}`}
              id={`file${index + 1}`}
              className="border rounded-md px-2 py-1 w-full"
            />
          </div>
        ))}

        {/* Comments */}
        <div className="mb-4">
          <label
            htmlFor="comments"
            className="block text-gray-700 font-bold mb-2"
          >
            <FiFile className="inline-block w-6 h-6 mr-2" />
            Comments
          </label>
          <textarea
            name="comments"
            id="comments"
            className="border rounded-md px-2 py-1 w-full"
            rows="4"
          />
        </div>

        {/* Submit Button in the Same Row */}
        <div className="flex">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            <FiUpload className="inline-block w-6 h-6 mr-2" />
            Upload Files
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rough;
