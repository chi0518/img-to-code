import * as React from "react";

const ToggleForm = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="bg-slate-100 flex items-stretch justify-between gap-3.5 px-10 py-px border-t-neutral-200 border-x-neutral-200 border-t border-solid border-r border-l max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="text-zinc-800 text-base font-bold bg-zinc-50 grow justify-center items-stretch px-8 py-4 max-md:px-5">
          케어챗봇
        </div>
        <div className="text-zinc-800 text-base grow my-auto">상담챗봇</div>
      </div>
      <div className="bg-zinc-50 flex w-full flex-col pl-10 pr-6 pb-6 border-b-neutral-200 border-x-neutral-200 border-r border-solid border-b border-l items-start max-md:max-w-full max-md:px-5">
        <div className="bg-blue-500 self-stretch z-10 shrink-0 h-0.5 max-md:max-w-full" />
        <div className="flex items-stretch justify-between gap-3 ml-7 mt-9 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-base font-medium">조회기간</div>
          <div className="bg-gray-400 w-px shrink-0 h-4 self-start" />
          <div className="items-stretch content-center flex-wrap flex gap-2.5">
            <div className="items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
              <div className="text-gray-400 text-xs">2023-12-12</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/645202855047faba475c579ab55faa2af8dad3b1ac3cb9747a1b979c9b500fdf?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-[0.87] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
            <div className="bg-gray-400 w-[7px] shrink-0 h-px my-auto" />
            <div className="items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
              <div className="text-gray-400 text-xs">2024-12-12</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29e05cc096d2ecc4d0dec4fd8c040dfd6ab4aefa1bda3a590d4a3f47a89b2d33?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-[0.87] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
          <div className="items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
            <div className="text-gray-400 text-sm">30일</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2e07d6aa04d4dde6c9b8603514c58a791d189904a97b52fff4bdf87c6e31458?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-4 ml-7 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-zinc-800 text-base font-medium grow my-auto">
            기업정보
          </div>
          <div className="justify-between items-stretch bg-gray-200 flex gap-5 pl-3.5 pr-5 rounded-xl">
            <div className="text-zinc-500 text-opacity-60 text-sm">
              에임메드
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65b7c0701b234411d833c8f34dfce0e5ec9ec75a6b6b8ac1649de0390f8fdc9e?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="justify-between items-stretch bg-slate-100 flex gap-5 pl-3 pr-5 rounded-xl">
            <div className="text-gray-400 text-sm">부서 전체</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c900af5cc18e234269630f7d5e03e49da6cc00dad0346a2749ea1213dfc80d?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-4 ml-7 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-base font-medium grow whitespace-nowrap my-auto">
            프로젝트 정보
          </div>
          <div className="justify-between items-stretch bg-slate-100 flex gap-5 pl-3.5 pr-9 rounded-xl max-md:pr-5">
            <div className="text-gray-400 text-sm">프로젝트 전체</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c900af5cc18e234269630f7d5e03e49da6cc00dad0346a2749ea1213dfc80d?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="justify-between items-stretch bg-slate-100 flex gap-5 pl-3.5 pr-9 rounded-xl max-md:pr-5">
            <div className="text-gray-400 text-sm">프로그램 전체</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c900af5cc18e234269630f7d5e03e49da6cc00dad0346a2749ea1213dfc80d?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
          <div className="justify-between items-stretch bg-slate-100 flex gap-5 pl-3.5 pr-9 rounded-xl max-md:pr-5">
            <div className="text-gray-400 text-sm">주차 전체</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8c900af5cc18e234269630f7d5e03e49da6cc00dad0346a2749ea1213dfc80d?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-[0.85] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        <div className="flex items-stretch gap-4 ml-7 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-base font-medium grow">
            회원정보
          </div>
          <div className="bg-gray-400 w-px shrink-0 h-[19px]" />
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-gray-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e6be30df7b206b37cbcd85ce732d20841eb28251f9610b29281af8e28389a2?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">전체</div>
          </div>
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border bg-sky-600 flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-sky-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c93527b78c60802d52634157315a999c7f0210ad44a7f45e0a1d44f97e67c420?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">정상</div>
          </div>
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border bg-sky-600 flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-sky-600">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c93527b78c60802d52634157315a999c7f0210ad44a7f45e0a1d44f97e67c420?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">탈퇴</div>
          </div>
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-gray-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e6be30df7b206b37cbcd85ce732d20841eb28251f9610b29281af8e28389a2?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">퇴사</div>
          </div>
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-gray-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e6be30df7b206b37cbcd85ce732d20841eb28251f9610b29281af8e28389a2?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">휴면</div>
          </div>
          <div className="items-stretch flex justify-between gap-1">
            <div className="items-center border flex aspect-square flex-col justify-center w-3.5 h-3.5 my-auto px-0.5 rounded-sm border-solid border-gray-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5f1316cdcbd6b19ccf25d4ca57cb2c1bb2ca3bb3abb1fe406bd73c483af8d12?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-black text-sm grow">로그아웃</div>
          </div>
        </div>
        <div className="flex items-stretch gap-4 mt-1.5 self-end">
          <div className="text-zinc-800 text-sm font-medium justify-center items-stretch bg-zinc-300 aspect-[1.5] px-5 py-3 rounded-md">
            조회
          </div>
          <div className="text-zinc-800 text-sm font-medium justify-center items-stretch bg-zinc-300 aspect-[1.77] px-5 py-3 rounded-md">
            초기화
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToggleForm;
