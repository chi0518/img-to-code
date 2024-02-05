import * as React from "react";

const BuilderCheckbox = () => {
  return (
    <div className="flex gap-1 justify-center text-sm text-black whitespace-nowrap">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87a285878e820fe49da581e36df4ac8c0d04d555bd6d3ee028cfb5e8e1fc24ee?apiKey=debd433091574dfc8758a1d087d51978&"
        className="my-auto rounded-full aspect-square stroke-[1px] w-[11px]"
      />
      <div className="grow">탈퇴</div>
    </div>
  );
};

const BuilderCheckboxRefine = () => {
  return <></>;
};
const BuilderGPTCheckboxRefine = () => {
  return <></>;
};
const AnimaCheckbox = () => {
  return <></>;
};
const AnimaCheckboxRefine = () => {
  return <></>;
};
const AnimaCheckboxGPTRefine = () => {
  return <></>;
};
export default [
  BuilderCheckbox,
  BuilderCheckboxRefine,
  BuilderGPTCheckboxRefine,
  AnimaCheckbox,
  AnimaCheckboxRefine,
  AnimaCheckboxGPTRefine,
];
