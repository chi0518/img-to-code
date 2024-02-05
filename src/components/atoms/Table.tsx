import * as React from "react";
import SelectAll from "./SelectAll";

interface TableProps {
  tag: string;
}

const SelectArray = SelectAll;
const getTargetArray = (tag: string) => {
  switch (tag) {
    case "Select":
      return SelectArray;
    default:
      return [];
  }
};

const Table = ({ tag }: TableProps) => {
  const targetArray = getTargetArray(tag);

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
              <td className="py-3 px-4">
                {targetArray[0] ? targetArray[0]() : ""}
              </td>
              <td className="py-3 px-4">
                {targetArray[1] ? targetArray[1]() : ""}
              </td>
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
              <td className="py-3 px-4">
                {targetArray[2] ? targetArray[2]() : ""}
              </td>
              <td className="py-3 px-4">
                {targetArray[3] ? targetArray[3]() : ""}
              </td>
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
              <td className="py-3 px-4">
                {targetArray[4] ? targetArray[4]() : ""}
              </td>
              <td className="py-3 px-4">
                {targetArray[5] ? targetArray[5]() : ""}
              </td>
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
