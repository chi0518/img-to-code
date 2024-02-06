import * as React from "react";

const BuilderTextarea = () => {
  return (
    <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
      <header>내용을 입력하여주세요.</header>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c3d41e9976cef7c5d865ad112d78df117f45531597420b9289f123df8e72c19?apiKey=debd433091574dfc8758a1d087d51978&"
        className="self-end mt-28 aspect-[1.37] w-[11px]"
      />
    </form>
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
  );
};
const BuilderGPTTextareaRefine = () => {
  return (
    // <form className="flex flex-col pt-4 pl-3.5 text-sm text-gray-400 bg-white rounded-md border border-gray-400 border-solid max-w-[358px]">
    //   <label className="relative">
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
    //   </label>
    // </form>
  );
};
const AnimaTextarea = () => {
  return (
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
  );
};
const AnimaTextareaRefine = () => {
  return (
    // <div className="relative w-[358px] h-[150px] bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]">
    <textarea
      className=" w-[358px] h-[150px] top-0 left-0 bg-white rounded-[5px] overflow-hidden border border-solid border-[#98a2b3]"
      placeholder="내용을 입력하여주세요."
    />
    //    <div className="absolute top-[10px] left-[14px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#98a2b3] text-[13px] tracking-[0] leading-[normal]">
    //     내용을 입력하여주세요.
    //   </div>
    //  </div>
  );
};
const AnimaTextareaGPTRefine = () => {
  //제일 베스트 굿
  return (
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
  );
};
export default [
  BuilderTextarea,
  BuilderTextareaRefine,
  BuilderGPTTextareaRefine,
  AnimaTextarea,
  AnimaTextareaRefine,
  AnimaTextareaGPTRefine,
];
