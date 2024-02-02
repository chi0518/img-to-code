import * as React from "react";
import { useState } from "react";

const Radio = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    // <div className="flex max-w-[226px] items-stretch justify-between gap-5 px-5">
    //   <div className="text-zinc-800 text-2xl font-medium">Radio</div>
    //   <div className="flex items-stretch gap-3 self-start">
    //     <div className="justify-between items-stretch flex gap-1 px-px">
    //       <input type="radio" />
    //       <a href="#" className="text-black text-sm">
    //         탈퇴
    //       </a>
    //     </div>
    //     <div className="items-stretch flex justify-between gap-1.5">
    //       <input type="radio" />
    //       <a href="#" className="text-black text-sm">
    //         정상
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="flex max-w-[226px] items-stretch justify-between gap-5 px-5">
      <div className="text-zinc-800 text-2xl font-medium">Radio</div>
      <div className="flex items-stretch gap-3 self-start">
        <div
          className={`justify-between items-stretch flex gap-1 px-px ${
            isChecked ? "bg-white border border-gray-500" : "bg-gray-500"
          }`}
        >
          <input type="radio" onClick={handleRadioClick} checked={isChecked} />
          <a href="#" className="text-black text-sm">
            탈퇴
          </a>
        </div>
        <div
          className={`items-stretch flex justify-between gap-1.5 ${
            isChecked ? "bg-blue-500" : "bg-white border border-gray-500"
          }`}
        >
          <input type="radio" onClick={handleRadioClick} checked={!isChecked} />
          <a href="#" className="text-black text-sm">
            정상
          </a>
        </div>
      </div>
    </div>
  );
};
export default Radio;
