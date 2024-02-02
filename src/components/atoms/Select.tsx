import * as React from "react";

const Select = () => {
  return (
    <div className="justify-between items-stretch bg-gray-200 flex max-w-[187px] gap-5 px-3 rounded-xl">
      <header className="text-zinc-500 text-opacity-60 text-sm">
        에임메드
      </header>
      <select
        disabled
        className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  );
};
export default Select;
