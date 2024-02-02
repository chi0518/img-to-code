import * as React from "react";

const SideBar = () => {
  return (
    <div className="shadow-sm bg-white flex max-w-[200px] flex-col items-stretch pt-3">
      <div className="flex w-full flex-col items-stretch font-medium px-11">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/158bc0ba8488402cf55b82bfcbfbae10133a290719a04ee15b2785ee5ec1a1cf?apiKey=debd433091574dfc8758a1d087d51978&"
          className="aspect-[0.97] object-contain object-center w-[74px] overflow-hidden max-w-full mr-2.5 self-end"
        />
        <div className="text-zinc-800 text-sm mt-20">기업관리자</div>
        <div className="text-zinc-800 text-sm mt-7">홈(대시보드)</div>
        <div className="text-zinc-800 text-sm whitespace-nowrap ml-5 mt-6 self-start">
          모바일 보건센터
        </div>
      </div>
      <div className="bg-slate-100 flex w-full flex-col items-stretch mt-2.5 pl-16 pr-14 py-4">
        <div className="flex items-stretch justify-between gap-1.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/262b19c508bdf4e2ed3859be4835d78d333e7e3cdcd77ce5349c6f9d542350ef?apiKey=debd433091574dfc8758a1d087d51978&"
            className="aspect-[3.03] object-contain object-center w-[3px] stroke-[1px] stroke-sky-600 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-sky-600 text-sm font-medium grow whitespace-nowrap">
            프로그램 안내
          </div>
        </div>
        <div className="flex items-stretch justify-between gap-1.5 mt-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9f699d72990be6c8c915df8bda050fb045fa6855a8cabf7b260abd0a8858407?apiKey=debd433091574dfc8758a1d087d51978&"
            className="aspect-[3.03] object-contain object-center w-[3px] stroke-[1px] stroke-zinc-800 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-zinc-800 text-sm grow">공지사항</div>
        </div>
      </div>
      <div className="flex flex-col items-stretch text-sm text-zinc-800 whitespace-nowrap mt-2.5 px-11">
        <div className="self-center">서비스 안내</div>
        <div className="self-center mt-7">상담관리</div>
        <div className="mt-7">프로젝트 회원관리</div>
        <div className="ml-3 mt-7 self-start">통계</div>
      </div>
      <div className="items-stretch bg-blue-500 flex w-full justify-between gap-5 mt-[475px] pl-2 pr-3 py-1.5">
        <div className="text-white text-sm">로그아웃</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b56f4adfc035e5a37fea7475223df2d8ab65fa2e63b09abff01fec1eca8396bb?apiKey=debd433091574dfc8758a1d087d51978&"
          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
  );
};
export default SideBar;
