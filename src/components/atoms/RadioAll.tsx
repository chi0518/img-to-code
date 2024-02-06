import * as React from "react";

const BuilderRadio = () => {
  return (
    // <div className="flex gap-1 justify-center text-sm text-black whitespace-nowrap">
    //   <img
    //     loading="lazy"
    //     srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&"
    //     className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
    //   />
    //   <div className="grow">탈퇴</div>
    // </div>
    <div className="flex gap-3 text-sm text-black whitespace-nowrap">
      <div className="flex gap-1 justify-between px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&"
          className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
        />
        <div>탈퇴</div>
      </div>
      <div className="flex gap-1.5 justify-between px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&"
          className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
        />
        <div>정상</div>
      </div>
    </div>
  );
};

const BuilderRadioRefine = () => {
  //처음엔 이미지로 그대로 나왔다가 한번 질문 후 변경 함
  return (
    // <form>
    //   <header className="header">
    //     <div className="flex gap-1 justify-between px-5">
    //       <img
    //         loading="lazy"
    //         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&"
    //         className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
    //       />
    //       <a href="#" className="header-link" aria-label="탈퇴">
    //         탈퇴
    //       </a>
    //     </div>
    //   </header>
    //   <div className="flex gap-1.5 justify-between px-5">
    //     <img
    //       loading="lazy"
    //       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b603c7678197dab0dacdb2ebb6ea6d24c1091ba6013fc25bb24cd40a5276ca1?apiKey=debd433091574dfc8758a1d087d51978&"
    //       className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
    //     />
    //     <a href="#" className="status-link" aria-label="정상">
    //       정상
    //     </a>
    //   </div>
    // </form>
    <form>
      <header className="header">
        <div className="flex gap-1 justify-between px-5">
          <input
            type="radio"
            className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
          />
          <a href="#" className="header-link" aria-label="탈퇴">
            탈퇴
          </a>
        </div>
      </header>
      <div className="flex gap-1.5 justify-between px-5">
        <input
          type="radio"
          className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
        />
        <a href="#" className="status-link" aria-label="정상">
          정상
        </a>
      </div>
    </form>
  );
};

const BuilderGPTRadioRefine = () => {
  return (
    <div className="flex gap-3 text-sm text-black whitespace-nowrap">
      <div className="flex gap-1 justify-between px-5 items-center">
        <label className="cursor-pointer">
          <input type="radio" className="hidden" name="radioGroup" />
          <div className="my-auto rounded-full aspect-square stroke-[1px] w-[11px] bg-slate-100">
            {/* You can customize the radio button style based on your design */}
          </div>
        </label>
        <div>탈퇴</div>
      </div>
      <div className="flex gap-1.5 justify-between px-5 items-center">
        <label className="cursor-pointer">
          <input type="radio" className="hidden" name="radioGroup" />
          <div className="my-auto rounded-full aspect-square stroke-[1px] w-[11px] bg-slate-100">
            {/* You can customize the radio button style based on your design */}
          </div>
        </label>
        <div>정상</div>
      </div>
    </div>
  );
};
const AnimaRadio = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[4px] px-px py-0 relative">
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <div className="relative w-[13px] h-[13px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[6.5px] border border-solid border-[#98a2b3]" />
        <img
          className="absolute w-[7px] h-[8px] top-[2px] left-[2px]"
          alt="Check solid"
          src="check-solid-1.svg"
        />
      </div>
      <div className="relative w-[25px] mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
        탈퇴
      </div>
    </div>
  );
};
const AnimaRadioRefine = () => {
  return (
    <div className="inline-flex items-center justify-center gap-[4px] px-px py-0 relative">
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <input type="radio" className="radio-input" />
        <label className="radio-label">
          <img
            className="radio-image"
            alt="Check solid"
            src="check-solid-1.svg"
          />
        </label>
      </div>
      <div className="relative w-[25px] mt-[-1.00px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
        탈퇴
      </div>
    </div>
  );
};
const AnimaRadioGPTRefine = () => {
  return (
    <label className="inline-flex items-center justify-center gap-[4px] px-px py-0 relative cursor-pointer">
      <input type="radio" className="hidden" name="animaRadio" />
      <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
        <div className="relative w-[13px] h-[13px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[6.5px] border border-solid border-[#98a2b3] bg-slate-100">
          {/* You can customize the radio button style based on your design */}
        </div>
        <img
          className="absolute w-[7px] h-[8px] top-[2px] left-[2px]"
          alt="Check solid"
          src="check-solid-1.svg"
        />
      </div>
      <div className="relative w-[25px] mt-[-1.00px] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
        탈퇴
      </div>
    </label>
  );
};
export default [
  BuilderRadio,
  BuilderRadioRefine,
  BuilderGPTRadioRefine,
  AnimaRadio,
  AnimaRadioRefine,
  AnimaRadioGPTRefine,
];
