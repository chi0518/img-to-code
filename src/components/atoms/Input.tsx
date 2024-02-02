import * as React from "react";

const Input = () => {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하여주세요."
      className="input text-gray-400 text-sm whitespace-nowrap bg-slate-100 max-w-[358px] justify-center pl-3 pr-16 py-2.5 rounded-xl items-start"
      aria-label="검색어 입력"
    />
  );
};
export default Input;
