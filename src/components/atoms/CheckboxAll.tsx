import * as React from "react";

const BuilderCheckbox = () => {
  return (
    <div className="flex gap-1">
      <div className="flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f1316cdcbd6b19ccf25d4ca57cb2c1bb2ca3bb3abb1fe406bd73c483af8d12?apiKey=debd433091574dfc8758a1d087d51978&"
          className="w-full aspect-square"
        />
      </div>
      <div className="grow text-sm text-black">전체</div>
    </div>
  );
};

const BuilderCheckboxRefine = () => {
  //img 태그를 checkbox태그로 변경해줘
  return (
    <input
      type="checkbox"
      className="w-full aspect-square flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square"
      alt="Image description"
    />
  );
};
const BuilderGPTCheckboxRefine = () => {
  return (
    <label className="flex gap-1 items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden" // 숨겨진 체크박스
      />
      <div className="flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square overflow-hidden transition-colors">
        {/* 이미지를 대체할 아이콘 등 적절한 내용으로 교체 */}
        <svg
          className={`w-full aspect-square ${
            // 체크되었을 때의 스타일
            "text-white bg-blue-500"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </svg>
      </div>
      <div className="grow text-sm text-black">전체</div>
    </label>
  );
};
const AnimaCheckbox = () => {
  return (
    <div className="inline-flex items-center gap-[4px] relative">
      <img
        className="relative flex-[0_0_auto]"
        alt="Checkbox icon"
        src="checkbox-icon.svg"
      />
      <div className="relative w-[25px] mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
        전체
      </div>
    </div>
  );
};
const AnimaCheckboxRefine = () => {
  return (
    <div className="inline-flex items-center gap-[4px] relative">
      <input type="checkbox" className="checkbox-icon" />
      <div className="relative w-[25px] mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
        전체
      </div>
    </div>
  );
};
const AnimaCheckboxGPTRefine = () => {
  return <>이미진뎅?</>;
};
export default [
  BuilderCheckbox,
  BuilderCheckboxRefine,
  BuilderGPTCheckboxRefine,
  AnimaCheckbox,
  AnimaCheckboxRefine,
  AnimaCheckboxGPTRefine,
];
