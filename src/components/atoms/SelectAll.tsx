import * as React from "react";

const BuilderSelect = () => {
  function CompanySelection() {
    return (
      <form>
        <header className="header">기업 선택</header>
        <div className="image-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc9d4b4de96cd032b22f47b443a84083c2cc6add3a0042e66d0a6cdb908dbb1?apiKey=debd433091574dfc8758a1d087d51978&"
            className="company-logo"
            alt="Company Logo"
          />
        </div>
      </form>
    );
  }
  return (
    <>
      <form className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]">
        <header>기업 선택</header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc9d4b4de96cd032b22f47b443a84083c2cc6add3a0042e66d0a6cdb908dbb1?apiKey=debd433091574dfc8758a1d087d51978&"
          className="w-3 aspect-[0.85]"
          alt="company logo"
        />
      </form>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        시안 그대로 스타일만 적용됨. 색상은 비슷한 색상으로 적용됨.
      </span>
    </>
  );
};

const BuilderSelectRefine = () => {
  return (
    <>
      <select
        className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]"
        name="headersms"
      >
        <option value="value1">기업 선택</option>
        <option value="value2">Option 1</option>
        <option value="value3">Option 2</option>
      </select>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        시안와 가장 유사하게 변환되며, 원하는 태그 형태로 스타일을 적용하여 변환
      </span>
    </>
  );
};

const BuilderGPTSelectRefine = () => {
  return (
    <>
      <form className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]">
        <header>기업 선택</header>
        <select className="w-3 aspect-[0.85]">
          <option value="company1">Company 1</option>
          <option value="company2">Company 2</option>
          <option value="company3">Company 3</option>
          {/* Add more options as needed */}
        </select>
      </form>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        기준이 되는 코드에서 변환을 하려하니 인지를 제대로 못함
      </span>
    </>
  );
};

//anima default
const AnimaSelect = (): JSX.Element => {
  // <div className="relative w-[187px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
  //   <div className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
  //     기업 선택
  //   </div>
  //   <img
  //     className="absolute w-[12px] h-[14px] top-[9px] left-[164px]"
  //     alt="Angle down solid"
  //     src="angle-down-solid-1.svg"
  //   />
  // </div>
  return (
    <>
      <div className="relative w-[187px] h-[30px] bg-black rounded-[10px] overflow-hidden">
        <div className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
          기업 선택
        </div>
        <img
          className="absolute w-[12px] h-[14px] top-[9px] left-[164px]"
          alt="Angle down solid"
          src="angle-down-solid-1.svg"
        />
      </div>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        마크업 형태는 무난하지만 스타일을 제대로 인지못함
      </span>
    </>
  );
};
const AnimaSelectRefine = (): JSX.Element => {
  return (
    <>
      <select className="relative w-[187px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
        <option className="absolute top-[4px] left-[12px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
          기업 선택
        </option>
        {/* <option value="value4">
        <img
          className="absolute w-[12px] h-[14px] top-[9px] left-[164px]"
          alt="Angle down solid"
          src="angle-down-solid-1.svg"
        />
      </option> */}
      </select>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        코드 변환과정에서 누락이 발생
      </span>
    </>
  );
};

const AnimaSelectGPTRefine = (): JSX.Element => {
  return (
    <>
      <div className="relative w-[187px] h-[30px] bg-[#f2f4fa] rounded-[10px] overflow-hidden">
        <select className="w-full h-full p-2 appearance-none outline-none border-none bg-transparent">
          <option value="company1">기업 1</option>
          <option value="company2">기업 2</option>
          <option value="company3">기업 3</option>
          {/* 필요에 따라 더 많은 옵션을 추가하세요 */}
        </select>
        <img
          className="absolute w-[12px] h-[14px] top-[9px] left-[164px]"
          alt="아래로 향하는 화살표"
          src="angle-down-solid-1.svg"
        />
      </div>
      <span className="text-xs text-red-950 p-0.5 w-full block mt-4">
        스타일은 아쉽지만 응용되어 보편적으로 쓰는 코드로 변환됨
      </span>
    </>
  );
};

const AnimaSelectReview = () => {
  return (
    <>
      <p className="text-sm">반응형 형태, 유사한 스타일 적용</p>
      <p className="text-sm">프롬프트에 이해도가 좋았음</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">80점</span>
      </p>
    </>
  );
};
const BuilderSelectReview = () => {
  return (
    <>
      <p className="text-sm">
        스타일과 기능 모든면에서 출력이 제대로 이뤄지지않음
      </p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">50점</span>
      </p>
    </>
  );
};

export default [
  BuilderSelect,
  BuilderSelectRefine,
  BuilderGPTSelectRefine,
  AnimaSelect,
  AnimaSelectRefine,
  AnimaSelectGPTRefine,
  AnimaSelectReview,
  BuilderSelectReview,
];
