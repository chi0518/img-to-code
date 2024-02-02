import * as React from "react";

const Toggle = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-stretch">
      <header className="bg-slate-100 flex items-stretch justify-between gap-3.5 px-10 py-px border-t-neutral-200 border-x-neutral-200 border-t border-solid border-r border-l max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="text-zinc-800 text-base font-bold bg-zinc-50 grow justify-center items-stretch px-8 py-4 max-md:px-5">
          케어챗봇
        </div>
        <button
          className="text-zinc-800 text-base grow my-auto"
          onClick={handleMenuToggle}
        >
          상담챗봇
        </button>
      </header>
      {isMenuOpen && (
        <div className="bg-blue-500 z-10 w-[114px] shrink-0 h-0.5 ml-10 max-md:ml-2.5" />
      )}
    </div>
    //일반
    //   <div className="flex flex-col items-stretch">
    //   <div className="bg-slate-100 flex items-stretch justify-between gap-3.5 px-10 py-px border-t-neutral-200 border-x-neutral-200 border-t border-solid border-r border-l max-md:max-w-full max-md:flex-wrap max-md:px-5">
    //     <div className="text-zinc-800 text-base font-bold bg-zinc-50 grow justify-center items-stretch px-8 py-4 max-md:px-5">
    //       케어챗봇
    //     </div>
    //     <div className="text-zinc-800 text-base grow my-auto">상담챗봇</div>
    //   </div>
    //   <div className="bg-blue-500 z-10 w-[114px] shrink-0 h-0.5 ml-10 max-md:ml-2.5" />
    // </div>
  );
};
export default Toggle;
