import * as React from "react";

const SearchForm = () => {
  return (
    <div className="flex flex-col items-stretch">
      <header className="flex items-stretch gap-2 self-end">
        <button
          className="text-zinc-800 text-sm font-medium justify-center items-stretch bg-zinc-300 aspect-[1.5] px-5 py-3 rounded-xl"
          aria-label="조회"
        >
          조회
        </button>
        <button
          className="text-zinc-800 text-sm font-medium justify-center items-stretch bg-zinc-300 aspect-[1.77] px-5 py-3 rounded-xl"
          aria-label="초기화"
        >
          초기화
        </button>
      </header>
      <section className="shadow-sm bg-white flex w-full flex-col pl-10 pr-20 py-6 rounded-xl items-start max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-800 text-base font-medium grow my-auto">
            조회기간
          </div>
          <div className="items-stretch content-center flex-wrap flex gap-2.5 pr-16 max-md:pr-5">
            <div className="items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
              <div className="text-gray-400 text-xs">2023-12-12</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3383ed1c717d71f786aa89ae45a87bef4a08a25add4464e108332708b9c72f?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-[0.87] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
                alt="Image 1"
              />
            </div>
            <div className="bg-gray-400 w-[7px] shrink-0 h-px my-auto" />
            <div className="items-stretch bg-slate-100 flex justify-between gap-5 px-3 rounded-xl">
              <div className="text-gray-400 text-xs">2024-12-12</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/994a6b8d7be5403771df96ee5a6a4dcb6c72709e9e194ecb51e3d84d715ea23a?apiKey=debd433091574dfc8758a1d087d51978&"
                className="aspect-[0.87] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full my-auto"
                alt="Image 2"
              />
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex gap-0 mt-5">
          <div className="text-zinc-800 text-base font-medium self-stretch grow">
            노출여부
          </div>
          <div className="items-stretch self-stretch flex gap-1.5 my-auto">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8331a0615327b3a3bd4b3aa40cf289b21422ca6862a2fd39fcf01cb407bf5880?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-square object-contain object-center w-[11px] stroke-[1px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
              alt="Image 3"
            />
            <div className="text-black text-sm">전체</div>
          </div>
          <div className="justify-center items-stretch self-stretch flex gap-1 my-auto px-px">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-square object-contain object-center w-[11px] stroke-[1px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
              alt="Image 4"
            />
            <div className="text-black text-sm">N</div>
          </div>
          <div className="justify-center items-stretch self-stretch flex gap-1 my-auto px-px">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9b0924e288d5d6d0c5f2e9671c5e4c53ae1f1306cbbc48322b4e956123c2fe2?apiKey=debd433091574dfc8758a1d087d51978&"
              className="aspect-square object-contain object-center w-[11px] stroke-[1px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
              alt="Image 5"
            />
            <div className="text-black text-sm">Y</div>
          </div>
        </div>
        <form className="justify-center items-center flex w-[456px] max-w-full gap-3.5 mt-5 px-1 max-md:flex-wrap">
          <label
            className="text-zinc-800 text-base font-medium self-stretch my-auto"
            htmlFor="searchInput"
          >
            검색어
          </label>
          <div className="bg-gray-400 self-stretch w-px shrink-0 h-2.5 my-auto" />
          <input
            type="text"
            className="text-gray-400 text-sm whitespace-nowrap bg-slate-100 self-stretch grow justify-center pl-3 pr-16 py-2.5 rounded-xl items-start max-md:pr-5"
            id="searchInput"
            placeholder="검색어를 입력하여주세요."
            aria-label="검색어를 입력하여주세요."
          />
        </form>
      </section>
    </div>
  );
};
export default SearchForm;
