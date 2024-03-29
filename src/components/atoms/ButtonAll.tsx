import * as React from "react";
import { useState } from "react";

const BuilderButton = () => {
  return (
    <>
      <div className="flex flex-col gap-3.5 items-start px-5 text-sm font-medium whitespace-nowrap text-zinc-800">
        <div className="justify-center px-5 py-3 text-white bg-sky-600 rounded-xl aspect-[1.46]">
          조회
        </div>
        <div className="justify-center px-5 py-3 rounded-xl aspect-[1.5] bg-slate-100">
          조회
        </div>
        <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
          <div>업로드</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c4f68af744b26965fc67ab7c449e50804febc8883104faf71c60253831d989e?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </div>
        <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
          <div>업로드</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5972052981160cac134039525dadf19e1dcf142a6a91a7e3f6730a7824d5d99d?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </div>
        <div className="flex gap-5 justify-center p-3 text-white bg-sky-600 rounded-xl">
          <div>업로드</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/526fd84430772a40500e51307cd7a6ecb7a719380e6572eeb0e50a849f993e6b?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </div>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">형태 그대로 출력 잘됨</span>
      </span>
    </>
  );
};

const BuilderButtonRefine = () => {
  //조회라는 텍스트가 버튼이라는 것을 인지를 못함 버튼이라고 변경하니 그제야 퀄리티 코드가 먹힘 대량으로 선택하여 변경하니 원하는 대로 안됨 각개로 진행
  // return (
  //   // <div className="flex flex-col gap-3.5 items-start px-5 text-sm font-medium whitespace-nowrap text-zinc-800">
  //   //   <header className="justify-center px-5 py-3 text-white bg-sky-600 rounded-xl aspect-[1.46]">
  //   //     조회
  //   //   </header>
  //   //   <header className="justify-center px-5 py-3 rounded-xl aspect-[1.5] bg-slate-100">
  //   //     조회
  //   //   </header>
  //   //   <form>
  //   //     <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
  //   //       <label htmlFor="upload1">업로드</label>
  //   //       <input
  //   //         type="file"
  //   //         id="upload1"
  //   //         aria-label="upload1"
  //   //         aria-role="button"
  //   //       />
  //   //       <img
  //   //         loading="lazy"
  //   //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c4f68af744b26965fc67ab7c449e50804febc8883104faf71c60253831d989e?apiKey=debd433091574dfc8758a1d087d51978&"
  //   //         className="self-start w-3 aspect-[0.75]"
  //   //       />
  //   //     </div>
  //   //     <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
  //   //       <label htmlFor="upload2">업로드</label>
  //   //       <input
  //   //         type="file"
  //   //         id="upload2"
  //   //         aria-label="upload2"
  //   //         aria-role="button"
  //   //       />
  //   //       <img
  //   //         loading="lazy"
  //   //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/5972052981160cac134039525dadf19e1dcf142a6a91a7e3f6730a7824d5d99d?apiKey=debd433091574dfc8758a1d087d51978&"
  //   //         className="self-start w-3 aspect-[0.75]"
  //   //       />
  //   //     </div>
  //   //     <div className="flex gap-5 justify-center p-3 text-white bg-sky-600 rounded-xl">
  //   //       <label htmlFor="upload3">업로드</label>
  //   //       <input
  //   //         type="file"
  //   //         id="upload3"
  //   //         aria-label="upload3"
  //   //         aria-role="button"
  //   //       />
  //   //       <img
  //   //         loading="lazy"
  //   //         src="https://cdn.builder.io/api/v1/image/assets/TEMP/526fd84430772a40500e51307cd7a6ecb7a719380e6572eeb0e50a849f993e6b?apiKey=debd433091574dfc8758a1d087d51978&"
  //   //         className="self-start w-3 aspect-[0.75]"
  //   //       />
  //   //     </div>
  //   //   </form>
  //   // </div>
  //   // <form>
  //   //   <header
  //   //     className="header"
  //   //     style={{ background: "lightblue", padding: "10px" }}
  //   //   >
  //   //     Header
  //   //   </header>
  //   //   <main className="main" style={{ padding: "20px" }}>
  //   //     <section className="button-section">
  //   //       <button
  //   //         className="button"
  //   //         style={{
  //   //           background: "blue",
  //   //           color: "white",
  //   //           padding: "10px",
  //   //           marginRight: "10px",
  //   //         }}
  //   //       >
  //   //         버튼
  //   //       </button>
  //   //       <button
  //   //         className="button"
  //   //         style={{ background: "blue", color: "white", padding: "10px" }}
  //   //       >
  //   //         버튼
  //   //       </button>
  //   //     </section>
  //   //     <section className="upload-section" style={{ marginTop: "20px" }}>
  //   //       <div className="upload">
  //   //         <label htmlFor="upload-input" style={{ marginRight: "10px" }}>
  //   //           업로드
  //   //         </label>
  //   //         <input id="upload-input" type="file" aria-label="upload file" />
  //   //       </div>
  //   //       <div className="upload" style={{ marginTop: "10px" }}>
  //   //         <label htmlFor="upload-input" style={{ marginRight: "10px" }}>
  //   //           업로드
  //   //         </label>
  //   //         <input id="upload-input" type="file" aria-label="upload file" />
  //   //       </div>
  //   //       <div className="upload" style={{ marginTop: "10px" }}>
  //   //         <label htmlFor="upload-input" style={{ marginRight: "10px" }}>
  //   //           업로드
  //   //         </label>
  //   //         <input id="upload-input" type="file" aria-label="upload file" />
  //   //       </div>
  //   //     </section>
  //   //   </main>
  //   // </form>
  //
  // );
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "blue" : "gray",
    color: isHovered ? "white" : "black",
    justifyContent: "center",
    padding: "5px",
    borderRadius: "10px",
    aspectRatio: "1.46",
    cursor: "pointer",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div>
        <button
          className="bg-gray text-black"
          style={buttonStyle}
          aria-label="Button"
          aria-role="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          버튼
        </button>
      </div>
      <div>
        <button
          className="justify-center px-5 py-3 text-white bg-sky-600 rounded-xl aspect-[1.46]"
          aria-label="Button"
          aria-role="button"
        >
          버튼
        </button>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          변환 과정 또한 여러번의 프롬프팅 과정이 있었지만 우수
        </span>
      </span>
    </>
  );
};
const BuilderGPTButtonRefine = () => {
  return (
    <>
      <div className="flex flex-col gap-3.5 items-start px-5 text-sm font-medium whitespace-nowrap text-zinc-800">
        <button className="justify-center px-5 py-3 text-white bg-sky-600 rounded-xl aspect-[1.46]">
          조회
        </button>
        <button className="justify-center px-5 py-3 rounded-xl aspect-[1.5] bg-slate-100">
          조회
        </button>
        <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
          <button>업로드</button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c4f68af744b26965fc67ab7c449e50804febc8883104faf71c60253831d989e?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </div>
        <div className="flex gap-5 justify-center p-3 rounded-xl bg-slate-100">
          <button>업로드</button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5972052981160cac134039525dadf19e1dcf142a6a91a7e3f6730a7824d5d99d?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </div>
        <button className="flex gap-5 justify-center p-3 text-white bg-sky-600 rounded-xl">
          <div>업로드</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/526fd84430772a40500e51307cd7a6ecb7a719380e6572eeb0e50a849f993e6b?apiKey=debd433091574dfc8758a1d087d51978&"
            className="self-start w-3 aspect-[0.75]"
          />
        </button>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">가장 우수</span>
      </span>
    </>
  );
};
const AnimaButton = () => {
  return (
    <>
      <button
        className={`all-[unset] box-border flex w-[60px] h-[40px] items-center justify-center gap-[10px] px-[112px] py-[9px] relative bg-[#f2f4fa] rounded-[10px] overflow-hidden`}
      >
        <div className="relative w-fit ml-[-94.00px] mr-[-94.00px] [font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium text-[#333333] text-[13px] tracking-[0] leading-[normal]">
          버튼
        </div>
      </button>
      <div
        className={`flex w-[90px] h-[40px] items-center justify-center gap-[20px] px-0 py-[9px] relative bg-[#f2f4fa] rounded-[10px] overflow-hidden`}
      >
        <div className="relative w-[36px] [font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium text-[#333333] text-[13px] tracking-[0] leading-[normal]">
          업로드
        </div>
        <div className="relative w-[12px] h-[16px] bg-[url(/vector.png)] bg-[100%_100%]" />
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">버튼을 이해하고 변환하였음.</span>
      </span>
    </>
  );
};
const AnimaButtonRefine = () => {
  return (
    <>
      <button
        className={`all-[unset] box-border flex w-[60px] h-[40px] items-center justify-center gap-[10px] px-[112px] py-[9px] relative bg-[#f2f4fa] rounded-[10px] overflow-hidden`}
      >
        <div className="relative w-fit ml-[-94.00px] mr-[-94.00px] [font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium text-[#333333] text-[13px] tracking-[0] leading-[normal]">
          버튼
        </div>
      </button>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          출력물 자체는 나쁘지 않으나 불필요한 것들 또한 그대로 가져감
        </span>
      </span>
    </>
  );
};
const AnimaButtonGPTRefine = () => {
  return (
    <>
      <button
        className={`all-[unset] box-border flex w-full h-[40px] items-center justify-center gap-[10px] px-[112px] py-[9px] relative bg-[#f2f4fa] rounded-[10px] overflow-hidden transition-all duration-300 ease-in-out text-[#333333] hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
      >
        <div className="[font-family:'Noto_Sans_KR-Medium',Helvetica] font-medium text-[13px] tracking-[0] leading-[normal]">
          버튼
        </div>
      </button>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">hover 적용까지 완료</span>
      </span>
    </>
  );
};
const AnimaButtonReview = () => {
  return (
    <>
      <p className="text-sm">
        '조회'라는 텍스트에서 '버튼'으로 바꾸고 나니 이해도가 올라감
      </p>
      <p className="text-sm">
        이해도가 올라간 상태에서 스타일 적용 또한 유사하게 진행, hover와 같은
        부수적인건 원하는 형태로 적용되지 않음
      </p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">65점</span>
      </p>
    </>
  );
};
const BuilderButtonReview = () => {
  return (
    <>
      <p className="text-sm">폰트 사이즈, 컬러는 가장 유사하게 가져오나</p>
      <p className="text-sm">
        코드 퀄리티는 아쉬움. basic 코드로 GPT3.5 변환이 나쁘지 않았음
      </p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">70점</span>
      </p>
    </>
  );
};
export default [
  BuilderButton,
  BuilderButtonRefine,
  BuilderGPTButtonRefine,
  AnimaButton,
  AnimaButtonRefine,
  AnimaButtonGPTRefine,
  AnimaButtonReview,
  BuilderButtonReview,
];
