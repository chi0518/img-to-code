import * as React from "react";

const BuilderInput = () => {
  //   <input
  //   type="text"
  //   placeholder="검색어를 입력하여주세요."
  //   className="input text-gray-400 text-sm whitespace-nowrap bg-slate-100 max-w-[358px] justify-center pl-3 pr-16 py-2.5 rounded-xl items-start"
  //   aria-label="검색어 입력"
  // />
  return (
    <>
      <div className="justify-center items-start py-2.5 pr-16 pl-3 text-sm text-gray-400 whitespace-nowrap rounded-xl bg-slate-100 max-w-[358px]">
        검색어를 입력하여주세요.
      </div>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        시안 그대로 스타일만 적용됨. 색상은 비슷한 색상으로 적용됨.
      </span>
    </>
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
    //div는 사용하지 않고 div에 들어가 있는 css를 tailwind로 input에 적용해줘
    //2번 질문 끝에 코드 받음
    <>
      <header className="justify-center items-start py-2.5 pr-16 pl-3 text-sm text-gray-400 whitespace-nowrap rounded-xl bg-slate-100 max-w-[358px]">
        <div className="relative">
          <input
            type="text"
            className="w-full text-gray-400 border-none bg-transparent placeholder-gray-400 focus:outline-none"
            placeholder="검색어를 입력하여주세요."
          />
        </div>
      </header>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          1. 원하는 태그로 변환은 되었지만 input에 스타일이 적용이 제대로 안됨
        </span>
        <span className="block">
          2. 2번째 질문에 원하는 형태는 나왔지만 스타일은 백그라운드로 적용됨
        </span>
      </span>
    </>
  );
};
const BuilderGPTInputRefine = () => {
  //3번 반복질문 했음
  //header가 자꾸 따라오고 div로만 변경해주고 div 빼고 input에 style적용해 달라는 말을 이해 못했음
  return (
    <>
      <input
        type="text"
        className="block w-full p-2 pl-8 text-sm text-gray-600 bg-gray-100 border-none focus:outline-none rounded-xl"
        placeholder="검색어를 입력하여주세요."
      />
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          1. input 태그에 스타일을 적용해 달라는 스크립트는 이해하기 어려워함
        </span>
        <span className="block">
          2. 3번째 질문에 원하는 형태는 나왔지만 여백 스타일이 추가로 더 생김
        </span>
      </span>
    </>
  );
};
const AnimaInput = () => {
  return (
    <>
      <div className="relative w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
        <div className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
          검색어를 입력하여주세요.
        </div>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          여백 스타일이 제대로 적용되지 않았지만 폰트 사이즈, 컬러, 높이는
          제대로 인지
        </span>
      </span>
    </>
  );
};
const AnimaInputRefine = () => {
  return (
    <>
      <div className="relative w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
        <input
          className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]"
          placeholder="검색어를 입력하여주세요."
        />
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          input에 이미지대로의 시안 적용이 제대로 안됨
        </span>
      </span>
    </>
  );
};
const AnimaInputGPTRefine = () => {
  return (
    <>
      <input
        type="text"
        placeholder="검색어를 입력하여주세요."
        className="block w-[358px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden p-2 pl-8 text-[13px] text-[#98a2b3] font-normal tracking-[0] leading-[normal] focus:outline-none"
      />
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          input에 이미지대로의 시안 적용이 제대로 안됨
        </span>
      </span>
    </>
  );
};

const AnimaInputReview = () => {
  return (
    <>
      <p className="text-sm">
        반응형 형태로 스타일이 적용되며, layout에 대한 인지가 좋음
      </p>
      <p className="text-sm">프롬프트에 이해도가 부족</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">80점</span>
      </p>
    </>
  );
};
const BuilderInputReview = () => {
  return (
    <>
      <p className="text-sm">
        컬러,사이즈 기준이 시안과 명확히 인지하지만 색상,여백은 센스 부족
      </p>
      <p className="text-sm">프롬프트에 이해도가 떨어짐</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">60점</span>
      </p>
    </>
  );
};

export default [
  BuilderInput,
  BuilderInputRefine,
  BuilderGPTInputRefine,
  AnimaInput,
  AnimaInputRefine,
  AnimaInputGPTRefine,
  AnimaInputReview,
  BuilderInputReview,
];
