import * as React from "react";

const Button = () => {
  return (
    <div className="flex justify-between gap-3.5 items-start max-md:max-w-full max-md:flex-wrap">
      <button
        type="button"
        className="text-white text-sm font-medium justify-center items-stretch bg-sky-600 aspect-[1.46] px-5 py-3 rounded-xl"
        onMouseEnter={(e: any) =>
          e.target.classList.add("hover:bg-sky-600", "hover:text-white")
        }
        onMouseLeave={(e: any) =>
          e.target.classList.remove("hover:bg-sky-600", "hover:text-white")
        }
      >
        조회
      </button>
      {/* <button
        type="button"
        className="text-zinc-800 text-sm font-medium justify-center items-stretch bg-slate-100 aspect-[1.5] px-5 py-3 rounded-xl"
        onMouseEnter={(e: any) =>
          e.target.classList.add("hover:bg-slate-100", "hover:text-zinc-800")
        }
        onMouseLeave={(e: any) =>
          e.target.classList.remove("hover:bg-slate-100", "hover:text-zinc-800")
        }
      >
        조회
      </button>
      <div className="justify-center items-stretch bg-slate-100 flex gap-5 p-3 rounded-xl">
        <label htmlFor="upload1" className="text-zinc-800 text-sm font-medium">
          업로드
        </label>
        <input
          type="file"
          id="upload1"
          className="aspect-[0.75] object-contain object-center w-3 overflow-hidden resize-none max-w-full self-start"
          aria-label="Upload 1"
          role="button"
        />
      </div>
      <div className="justify-center items-stretch bg-slate-100 flex gap-5 p-3 rounded-xl">
        <label htmlFor="upload2" className="text-zinc-800 text-sm font-medium">
          업로드
        </label>
        <input
          type="file"
          id="upload2"
          className="aspect-[0.75] object-contain object-center w-3 overflow-hidden resize-none max-w-full self-start"
          aria-label="Upload 2"
          role="button"
        />
      </div>
      <div className="justify-center items-stretch bg-sky-600 flex gap-5 p-3 rounded-xl">
        <label htmlFor="upload3" className="text-white text-sm font-medium">
          업로드
        </label>
        <input
          type="file"
          id="upload3"
          className="aspect-[0.75] object-contain object-center w-3 overflow-hidden resize-none max-w-full self-start"
          aria-label="Upload 3"
          role="button"
        />
      </div> */}
    </div>
  );
};
export default Button;
