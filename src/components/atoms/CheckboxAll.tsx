import * as React from "react";

const BuilderCheckbox = () => {
  return (
    <>
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
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          형태에 대한 이해도가 부족. 이미지 자체로 출력됨
        </span>
      </span>
    </>
  );
};

const BuilderCheckboxRefine = () => {
  //img 태그를 checkbox태그로 변경해줘
  // return (
  //   <input
  //     type="checkbox"
  //     className="w-full aspect-square flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square"
  //     alt="Image description"
  //   />
  // );
  //질문을 다시 바꿔서 하니 좀 더 명확하게 나옴
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <form className="flex gap-1">
        <div className="header">
          <header className="header">
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets/TEMP/e5f1316cdcbd6b19ccf25d4ca57cb2c1bb2ca3bb3abb1fe406bd73c483af8d12?apiKey=debd433091574dfc8758a1d087d51978&)",
                  width: "100%",
                  aspectRatio: 1,
                }}
              />
            </label>
          </header>
        </div>
        <div className="grow text-sm text-black">전체</div>
      </form>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          스타일이 아닌 기본적인 태그 형태로의 프롬프팅은 제대로 인지하여 출력됨
        </span>
        <span className="block">단 스타일은 많이 제외됨</span>
      </span>
    </>
  );
};
const BuilderGPTCheckboxRefine = () => {
  return (
    // <label className="flex gap-1 items-center cursor-pointer">
    //   <input
    //     type="checkbox"
    //     className="hidden" // 숨겨진 체크박스
    //   />
    //   <div className="flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square overflow-hidden transition-colors">
    //     {/* 이미지를 대체할 아이콘 등 적절한 내용으로 교체 */}
    //     <svg
    //       className={`w-full aspect-square ${
    //         // 체크되었을 때의 스타일
    //         "text-white bg-blue-500"
    //       }`}
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         className="w-full h-full"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M5 13l4 4L19 7"
    //         />
    //       </svg>
    //     </svg>
    //   </div>
    //   <div className="grow text-sm text-black">전체</div>
    // </label>
    <>
      <label className="flex gap-1 items-center">
        <input
          type="checkbox"
          // className="hidden"
          // You can add any additional props or styles here
        />
        <div className="flex justify-center items-center px-0.5 my-auto w-3.5 h-3.5 rounded-sm border border-gray-400 border-solid aspect-square bg-slate-100">
          {/* You can customize the checkbox style based on your design */}
        </div>
        <div className="grow text-sm text-black">전체</div>
      </label>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          커스텀이 가능한 형태로 코드를 맞춰서 출력해줌 (ex: hidden class)
        </span>
      </span>
    </>
  );
};
const AnimaCheckbox = () => {
  return (
    <>
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
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">이해도 부족, 이미지 그대로 출력</span>
      </span>
    </>
  );
};
const AnimaCheckboxRefine = () => {
  return (
    <>
      <div className="inline-flex items-center gap-[4px] relative">
        <input type="checkbox" className="checkbox-icon" />
        <div className="relative w-[25px] mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
          전체
        </div>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">체크박스만 미흡, 마크업은 무난한 형태</span>
      </span>
    </>
  );
};
const AnimaCheckboxGPTRefine = () => {
  return (
    <>
      <div className="inline-flex items-center gap-[4px] relative">
        <label className="cursor-pointer">
          <input type="checkbox" />
          <div className="relative flex-[0_0_auto] w-[25px] mt-[-1.00px] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
            전체
          </div>
        </label>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">커스텀 가능한 형태로 출력</span>
      </span>
    </>
  );
};
const AnimaCheckboxReview = () => {
  return (
    <>
      <p className="text-sm">'체크박스'라는 형태의 이해도는 낮으나</p>
      <p className="text-sm">프롬프트에 대한 수행 과정을 높게 삼</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">70점</span>
      </p>
    </>
  );
};
const BuilderCheckboxReview = () => {
  return (
    <>
      <p className="text-sm">스타일 적용과 마크업 형태가 무난함</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">70점</span>
      </p>
    </>
  );
};

export default [
  BuilderCheckbox,
  BuilderCheckboxRefine,
  BuilderGPTCheckboxRefine,
  AnimaCheckbox,
  AnimaCheckboxRefine,
  AnimaCheckboxGPTRefine,
  AnimaCheckboxReview,
  BuilderCheckboxReview,
];
