import * as React from "react";

const BuilderInput = () => {
  //   <input
  //   type="text"
  //   placeholder="검색어를 입력하여주세요."
  //   className="input text-gray-400 text-sm whitespace-nowrap bg-slate-100 max-w-[358px] justify-center pl-3 pr-16 py-2.5 rounded-xl items-start"
  //   aria-label="검색어 입력"
  // />
  return (
    <div className="justify-center items-start py-2.5 pr-16 pl-3 text-sm text-gray-400 whitespace-nowrap rounded-xl bg-slate-100 max-w-[358px]">
      검색어를 입력하여주세요.
    </div>
  );
};

const BuilderInputRefine = () => {
  return (
    // <div className="justify-center items-start py-2.5 pr-16 pl-3 text-sm text-gray-400 whitespace-nowrap rounded-xl bg-slate-100 max-w-[358px]">
    //   <input
    //     type="text"
    //     className="placeholder-gray-400"
    //     placeholder="검색어를 입력하여주세요."
    //   />
    // </div>
    //div는 사용하지 않고 div에 들어가 있는 css를 tailwind로 input에 적용해줘 2번 질문 끝에 코드 받음
    <header className="justify-center items-start py-2.5 pr-16 pl-3 text-sm text-gray-400 whitespace-nowrap rounded-xl bg-slate-100 max-w-[358px]">
      <div className="relative">
        <input
          type="text"
          className="w-full text-gray-400 border-none bg-transparent placeholder-gray-400 focus:outline-none"
          placeholder="검색어를 입력하여주세요."
        />
      </div>
    </header>
  );
};
const BuilderGPTInputRefine = () => {
  //3번 반복질문 했음
  //header가 자꾸 따라오고 div로만 변경해주고 div 빼고 input에 style적용해 달라는 말을 이해 못했음
  return (
    <input
      type="text"
      className="block w-full p-2 pl-8 text-sm text-gray-600 bg-gray-100 border-none focus:outline-none rounded-xl"
      placeholder="검색어를 입력하여주세요."
    />
  );
};
const AnimaInput = () => {
  return (
    <div className="relative w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
      <div className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
        검색어를 입력하여주세요.
      </div>
    </div>
  );
};
const AnimaInputRefine = () => {
  return (
    <div className="relative w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
      <input
        className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]"
        placeholder="검색어를 입력하여주세요."
      />
    </div>
  );
};
const AnimaInputGPTRefine = () => {
  return (
    <input
      type="text"
      placeholder="검색어를 입력하여주세요."
      className="block w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden p-2 pl-8 text-[13px] text-[#98a2b3] font-normal tracking-[0] leading-[normal] focus:outline-none"
    />
  );
};
export default [
  BuilderInput,
  BuilderInputRefine,
  BuilderGPTInputRefine,
  AnimaInput,
  AnimaInputRefine,
  AnimaInputGPTRefine,
];
