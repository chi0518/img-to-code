import * as React from "react";

const Title = () => {
  return (
    <div className="flex items-stretch gap-1 pl-20">
      <div className="text-sky-600 text-3xl font-bold grow whitespace-nowrap">
        프로그램 안내
      </div>
      <div className="flex w-3.5 shrink-0 h-3.5 flex-col rounded-[50%] self-start" />
    </div>
  );
};
export default Title;
