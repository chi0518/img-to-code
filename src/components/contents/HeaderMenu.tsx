import * as React from "react";

const HeaderMenu = () => {
  return (
    <header className="bg-slate-100 flex flex-col items-stretch pb-5 border-b-neutral-200 border-b border-solid">
      <div className="flex items-stretch justify-between gap-0 pr-6 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="z-10 flex items-stretch justify-between gap-0 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="z-10 flex w-full flex-col items-stretch mt-6 self-end max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1348px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <h1 className="text-zinc-800 text-4xl font-bold grow shrink basis-auto my-auto">
                EHP 관리자
              </h1>
              <div className="justify-between items-stretch flex gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <a
                    href="#"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center max-w-full"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/926ae00e6927def168f88312ce92b76a7db75faec51bc0d2794678ee374a5227?apiKey=debd433091574dfc8758a1d087d51978&"
                      alt="System Management"
                    />
                  </a>
                  <label
                    htmlFor="systemOps"
                    className="text-zinc-800 text-base font-medium whitespace-nowrap"
                  >
                    시스템 운영관리
                  </label>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                  <a
                    href="#"
                    className="aspect-square object-contain object-center w-[30px] overflow-hidden self-center max-w-full"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/194a23ebb4974026cf6a00425b150b6ff7f40686cf6de684ac95dc75fa9d097d?apiKey=debd433091574dfc8758a1d087d51978&"
                      alt="Service Management"
                    />
                  </a>
                  <label
                    htmlFor="serviceOps"
                    className="text-zinc-800 text-base font-medium whitespace-nowrap"
                  >
                    서비스 운영관리
                  </label>
                </div>
                <div className="justify-end items-stretch flex grow basis-[0%] flex-col pt-2">
                  <a
                    href="#"
                    className="aspect-[1.2] object-contain object-center w-[23px] stroke-[1.5px] stroke-zinc-800 overflow-hidden self-center max-w-full"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88590c455f08ec307ab49a0941e9243201b146bfa6ba4ee2de969449bebc04c?apiKey=debd433091574dfc8758a1d087d51978&"
                      alt="Service Management"
                    />
                  </a>
                  <label
                    htmlFor="serviceMgmt"
                    className="text-zinc-800 text-base font-medium whitespace-nowrap mt-2"
                  >
                    서비스 관리
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-300 min-h-[1px] w-full mt-6 max-md:max-w-full" />
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2805a8e6593b49647063ceeb5eca86ea80ba913e311503278a661df6e53c4fae?apiKey=debd433091574dfc8758a1d087d51978&"
          className="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
        />
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0c02e579752b7a54ef1246d9e035d511d4b154aaaf63595f7550437b22b49839?apiKey=debd433091574dfc8758a1d087d51978&"
        className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full mt-5 rounded-[50%] self-start"
      />
      <form>
        <div className="flex w-[919px] max-w-full items-stretch justify-between gap-5 text-zinc-800 mr-36 mt-3.5 self-end max-md:flex-wrap max-md:mr-2.5">
          <div className="flex items-stretch justify-between gap-5 text-lg font-medium mt-2.5 self-start max-md:max-w-full max-md:flex-wrap">
            <div className="">대시보드</div>
            <div className="grow shrink basis-auto">모바일 보건센터</div>
            <div className="">서비스 안내</div>
          </div>
          <div className="flex items-stretch justify-between gap-1">
            <a href="#" className="text-blue-500 text-lg font-medium grow">
              상담관리
            </a>
            <div className="flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%] self-start" />
            <div className="text-lg font-medium grow shrink basis-auto">
              프로젝트 회원관리
            </div>
            <div className="text-lg font-medium">통계</div>
          </div>
        </div>
      </form>
    </header>
  );
};
export default HeaderMenu;
