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
    <form className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]">
      <header>기업 선택</header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cc9d4b4de96cd032b22f47b443a84083c2cc6add3a0042e66d0a6cdb908dbb1?apiKey=debd433091574dfc8758a1d087d51978&"
        className="w-3 aspect-[0.85]"
        alt="company logo"
      />
    </form>
  );
};

const BuilderSelectRefine = () => {
  return (
    <select
      className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]"
      name="headersms"
    >
      <option value="value1">기업 선택</option>
      <option value="value2">Option 1</option>
      <option value="value3">Option 2</option>
    </select>
  );
};
const BuilderGPTSelectRefine = () => {
  return (
    <form className="flex gap-5 justify-between px-3 py-2 text-sm text-gray-400 rounded-xl bg-slate-100 max-w-[187px]">
      <header>기업 선택</header>
      <select className="w-3 aspect-[0.85]">
        <option value="company1">Company 1</option>
        <option value="company2">Company 2</option>
        <option value="company3">Company 3</option>
        {/* Add more options as needed */}
      </select>
    </form>
  );
};

//anima default
const AnimaSelect = (): JSX.Element => {
  return (
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
  );
};
const AnimaSelectRefine = (): JSX.Element => {
  return (
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
  );
};

const AnimaSelectGPTRefine = (): JSX.Element => {
  return (
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
  );
};

export default [
  BuilderSelect,
  BuilderSelectRefine,
  BuilderGPTSelectRefine,
  AnimaSelect,
  AnimaSelectRefine,
  AnimaSelectGPTRefine,
];
