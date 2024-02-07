import * as React from "react";
import SelectAll from "./SelectAll";
import InputAll from "./InputAll";
import CheckboxAll from "./CheckboxAll";
import RadioAll from "./RadioAll";
import PaginationAll from "./PaginationAll";
import TextareaAll from "./TextareaAll";
import ButtonAll from "./ButtonAll";
import CalendarAll from "./CalendarAll";

interface TableProps {
  tag: string;
}

const SelectArray = SelectAll;
const InputArray = InputAll;
const CheckboxArray = CheckboxAll;
const RadioArray = RadioAll;
const TextareaArray = TextareaAll;
const ButtonArray = ButtonAll;
const PaginationArray = PaginationAll;
// const CalendarArray = CalendarAll;

const getTargetArray = (tag: string) => {
  switch (tag) {
    case "Input":
      return InputArray;
    case "Select":
      return SelectArray;
    case "Checkbox":
      return CheckboxArray;
    case "Radio":
      return RadioArray;
    case "Textarea":
      return TextareaArray;
    case "Button":
      return ButtonArray;
    case "Pagination":
      return PaginationArray;
    // case "Calendar":
    //   return CalendarArray;
    default:
      return [];
  }
};

const Table = ({ tag }: TableProps) => {
  const targetArray = getTargetArray(tag);

  return (
    <div className="flex items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-t-2 border-t-[#3C82F6]">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-center bg-[#fafafa]"></th>
              <th className="py-3 px-4 text-center bg-[#fafafa]">Builder.io</th>
              <th className="py-3 px-4 text-center bg-[#fafafa]">Anima</th>
              {/* <th className="py-3 px-4 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            <tr className="border-b border border-blue-gray-200">
              <td className="py-3 border px-4 text-center bg-[#fafafa]">
                Basic
              </td>
              <td className="py-3 border px-4">
                {targetArray[0] ? targetArray[0]() : ""}
              </td>
              <td className="py-3 border px-4">
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
            <tr className="border-b border border-blue-gray-200">
              <td className="py-3 border px-4 text-center bg-[#fafafa]">
                Quality
              </td>
              <td className="py-3 border px-4">
                {targetArray[1] ? targetArray[1]() : ""}
              </td>
              <td className="py-3 border px-4">
                {targetArray[4] ? targetArray[4]() : ""}
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
            <tr className="border-b border border-blue-gray-200">
              <td className="py-3 border px-4 text-center bg-[#fafafa]">
                Basic + Chat GPT3.5
              </td>
              <td className="py-3 border px-4">
                {targetArray[2] ? targetArray[2]() : ""}
              </td>
              <td className="py-3 border px-4">
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
            <tr className="border-b border border-blue-gray-200">
              <td className="py-3 border px-4 text-center bg-[#fafafa]">
                Review
              </td>
              <td className="py-3 border px-4">
                {targetArray[6] ? targetArray[6]() : ""}
              </td>
              <td className="py-3 border px-4">
                {targetArray[7] ? targetArray[7]() : ""}
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
