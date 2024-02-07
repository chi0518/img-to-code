import * as React from "react";

const BuilderTextarea = () => {
  return (
    <>
      <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
        <header>내용을 입력하여주세요.</header>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d41e9976cef7c5d865ad112d78df117f45531597420b9289f123df8e72c19?apiKey=debd433091574dfc8758a1d087d51978&"
          className="self-end mt-28 aspect-[1.37] w-[11px]"
        />
      </form>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          형태에 대한 이해도가 부족. 이미지 자체로 출력됨
        </span>
      </span>
    </>
  );
};

const BuilderTextareaRefine = () => {
  return (
    // <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
    //   <header>내용을 입력하여주세요.</header>
    //   <textarea
    //     style={{
    //       backgroundImage:
    //         "url(https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d41e9976cef7c5d865ad112d78df117f45531597420b9289f123df8e72c19?apiKey=debd433091574dfc8758a1d087d51978&)",
    //       backgroundSize: "contain",
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "center",
    //       marginTop: "28%",
    //       width: "11px",
    //       // styles applied to the textarea
    //       outline: "none",
    //       border: "none",
    //       padding: "12px",
    //       borderRadius: "4px",
    //     }}
    //     // text as a placeholder
    //     placeholder="내용을 입력하여주세요."
    //   ></textarea>
    // </form>
    <>
      <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
        <header>내용을 입력하여주세요.</header>
        <textarea
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d41e9976cef7c5d865ad112d78df117f45531597420b9289f123df8e72c19?apiKey=debd433091574dfc8758a1d087d51978&)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginTop: "28%",
            width: "11px",
            outline: "none",
            border: "none",
            padding: "12px",
            borderRadius: "4px",
          }}
          placeholder="내용을 입력하여주세요."
        ></textarea>
      </form>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">프롬프팅 변환 과정의 미흡함</span>
      </span>
    </>
  );
};
const BuilderGPTTextareaRefine = () => {
  return (
    <>
      {/* <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
        <label className="relative"> */}
      <div className="relative">
        <textarea
          placeholder="내용을 입력하여주세요."
          className="pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px] focus:outline-none focus:border-blue-500 resize-none"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d41e9976cef7c5d865ad112d78df117f45531597420b9289f123df8e72c19?apiKey=debd433091574dfc8758a1d087d51978&"
          className="absolute bottom-3 right-3 aspect-[1.37] w-[11px]"
        />
      </div>
      {/* </label>
      </form> */}
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          형태에 대한 이해도가 있음. 커스텀을 추가로 해야함
        </span>
      </span>
    </>
  );
};
const AnimaTextarea = () => {
  return (
    <>
      <div className="relative w-[358px] h-[150px] bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]">
        <img
          className="absolute w-[12px] h-[9px] top-[139px] left-[344px]"
          alt="Line"
          src="line.png"
        />
        <div className="absolute top-[10px] left-[14px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
          내용을 입력하여주세요.
        </div>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">
          형태에 대한 이해도는 낮으나, 형태 자체는 그대로 변환
        </span>
      </span>
    </>
  );
};
const AnimaTextareaRefine = () => {
  return (
    // <div className="relative w-[358px] h-[150px] bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]">
    <>
      <textarea
        className=" w-[358px] h-[150px] top-0 left-0 bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]"
        placeholder="내용을 입력하여주세요."
      />
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">img to code 변환은 제대로 이뤄짐</span>
      </span>
    </>
    //    <div className="absolute top-[10px] left-[14px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
    //     내용을 입력하여주세요.
    //   </div>
    //  </div>
  );
};
const AnimaTextareaGPTRefine = () => {
  //제일 베스트 굿
  return (
    <>
      <div className="relative w-[358px] h-[150px] bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]">
        <label className="relative">
          <textarea
            placeholder="내용을 입력하여주세요."
            className="w-[100%] h-[100%] p-[10px] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal] bg-white rounded-[5px] border-none outline-none resize-none"
          />
          <img
            className="absolute w-[12px] h-[9px] bottom-[5px] right-[14px]"
            alt="Line"
            src="line.png"
          />
        </label>
      </div>
      <span className="text-xs p-0.5 w-full block mt-4">
        <span className="block">가장 유사하게 변환</span>
      </span>
    </>
  );
};
const AnimaTextareaReview = () => {
  return (
    <>
      <p className="text-sm">'텍스트박스'에 대한 이해도가 없음</p>
      <p className="text-sm">코드 변환기능도 낮았음</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">40점</span>
      </p>
    </>
  );
};
const BuilderTextareaReview = () => {
  return (
    <>
      <p className="text-sm">'텍스트박스'에 대한 이해도가 낮았으나</p>
      <p className="text-sm">가장 유사하게 변환 과정을 거침</p>
      <p className="text-sm font-medium">
        정확도 : <span className="text-red-700">70점</span>
      </p>
    </>
  );
};

export default [
  BuilderTextarea,
  BuilderTextareaRefine,
  BuilderGPTTextareaRefine,
  AnimaTextarea,
  AnimaTextareaRefine,
  AnimaTextareaGPTRefine,
  AnimaTextareaReview,
  BuilderTextareaReview,
];
