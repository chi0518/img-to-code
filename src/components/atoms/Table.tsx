import * as React from "react";

interface ChatTextProps {
  text: string;
}

const Table = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left"></th>
              <th className="py-3 px-4 text-left">Builder.io</th>
              <th className="py-3 px-4 text-left">Anima</th>
              {/* <th className="py-3 px-4 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">Basic</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4"></td>
              {/* <td className="py-3 px-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Edit
                </a>
              </td> */}
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">Quality</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4"></td>
              {/* <td className="py-3 px-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Edit
                </a>
              </td> */}
            </tr>
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4">Basic + Chat GPT3.5</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4"></td>
              {/* <td className="py-3 px-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  Edit
                </a>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
