import * as React from "react";
import { useState } from "react";

const BuilderPagination = () => {
  return (
    <div className="flex overflow-hidden relative flex-col gap-5 justify-between aspect-[5.31] max-w-[85px]">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-center aspect-square">
        <div className="shrink-0 h-4 rounded-full stroke-[1px]" />
      </div>
      <div className="flex relative flex-col justify-center aspect-square">
        <div className="shrink-0 h-4 rounded-full stroke-[1px]" />
      </div>
    </div>
  );
};

const BuilderPaginationRefine = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5; // Number of items per page

  // // Determine the range of items to display based on the current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // // Array of items to be paginated
  // const items = [
  //   {
  //     srcSet: "...", // Image source set
  //     label: "Header", // Header label
  //   },
  //   {
  //     srcSet: "...", // Image source set
  //     label: "Header", // Header label
  //   },
  //   {
  //     srcSet: "...", // Image source set
  //     label: "Header", // Header label
  //   },
  //   {
  //     srcSet: "...", // Image source set
  //     label: "Header", // Header label
  //   },
  //   {
  //     srcSet: "...", // Image source set
  //     label: "Header", // Header label
  //   },
  //   // Add more items as needed
  // ];

  // // Calculate the total number of pages
  // const totalPages = Math.ceil(items.length / itemsPerPage);

  // const handlePageChange = (page: React.SetStateAction<number>) => {
  //   setCurrentPage(page);
  // };

  // return (
  //   <div className="flex flex-wrap justify-center">
  //     {items.slice(startIndex, endIndex).map((item, index) => (
  //       <div
  //         key={index}
  //         className="flex overflow-hidden relative flex-col gap-5 justify-between aspect-[5.31] max-w-[85px]"
  //       >
  //         <img
  //           loading="lazy"
  //           srcSet={item.srcSet}
  //           className="object-cover absolute inset-0 size-full"
  //         />
  //         <header className="flex relative flex-col justify-center aspect-square">
  //           <div className="header" role="button" aria-label={item.label}></div>
  //         </header>
  //       </div>
  //     ))}
  //     <div className="pagination">
  //       {Array.from({ length: totalPages }, (_, index) => (
  //         <button
  //           key={index}
  //           className={`pagination-item ${
  //             currentPage === index + 1 ? "active" : ""
  //           }`}
  //           onClick={() => handlePageChange(index + 1)}
  //         >
  //           {index + 1}
  //         </button>
  //       ))}
  //     </div>
  //   </div>
  // );
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const getStyle = () => {
    if (count === 1) {
      return "style-for-first-click";
    } else if (count === 2) {
      return "style-for-second-click";
    } else if (count === 3) {
      return "style-for-third-click";
    } else {
      return "default-style";
    }
  };

  return (
    <form className="flex overflow-hidden relative flex-col gap-5 justify-between aspect-[5.31] max-w-[85px]">
      <a
        href="#"
        onClick={handleClick}
        className={getStyle()}
        aria-label="Clickable Image"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&"
          className="object-cover absolute inset-0 size-full"
        />
      </a>
      <header className="flex relative flex-col justify-center aspect-square">
        <div className="header" role="button" aria-label="Header"></div>
      </header>
      <header className="flex relative flex-col justify-center aspect-square">
        <div className="header" role="button" aria-label="Header"></div>
      </header>
    </form>
  );
};

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const arrow = direction === "left" ? "<<" : ">>";

  return (
    <button
      className="bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      onClick={onClick}
    >
      <img src={`/${arrow}.png`} alt={`${direction} arrow`} />
    </button>
  );
};

interface NumberDisplayProps {
  number: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
  return (
    <div className="flex justify-around items-center w-2/4">
      <span className="text-gray-800 text-xl font-semibold">{number}</span>
    </div>
  );
};

const BuilderGPTPaginationRefine = () => {
  //gpt4
  return (
    <div className="flex bg-gray-200">
      <div className="flex justify-center items-center w-1/4">
        <ArrowButton direction="left" onClick={() => console.log("Go Left")} />
      </div>
      <NumberDisplay number={1} />
      <NumberDisplay number={2} />
      <NumberDisplay number={3} />
      <div className="flex justify-center items-center w-1/4">
        <ArrowButton
          direction="right"
          onClick={() => console.log("Go Right")}
        />
      </div>
    </div>
  );
};
const AnimaPagination = () => {
  return (
    <div className="relative w-[85px] h-[17px]">
      <div className="flex w-[16px] h-[16px] items-start gap-[10px] absolute top-px left-[69px]">
        <div className="relative w-[16px] h-[16px] rounded-[8px] border border-solid border-[#e9e9e9] rotate-180" />
        <img
          className="absolute w-[10px] h-[10px] top-[3px] left-[3px]"
          alt="Angles left solid"
          src="angles-left-solid-3.svg"
        />
      </div>
      <div className="absolute w-[10px] -top-px left-[54px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        3
      </div>
      <img
        className="absolute w-[8px] h-px top-[16px] left-[38px] object-cover"
        alt="Line"
        src="line-12.svg"
      />
      <div className="absolute w-[10px] -top-px left-[39px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        2
      </div>
      <div className="absolute w-[10px] -top-px left-[24px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        1
      </div>
      <div className="flex w-[16px] h-[16px] items-start gap-[10px] absolute top-px left-0">
        <div className="relative w-[16px] h-[16px] rounded-[8px] border border-solid border-[#e9e9e9]" />
        <img
          className="absolute w-[10px] h-[10px] top-[3px] left-[3px]"
          alt="Angles left solid"
          src="angles-left-solid-2.svg"
        />
      </div>
    </div>
  );
};
const AnimaPaginationRefine = () => {
  return (
    <div className="relative w-[85px] h-[17px]">
      <div className="flex w-[16px] h-[16px] items-start gap-[10px] absolute top-px left-[69px]">
        <div className="relative w-[16px] h-[16px] rounded-[8px] border border-solid border-[#e9e9e9] rotate-180">
          <a className="number" href="#">
            1
          </a>
        </div>
        <img
          className="absolute w-[10px] h-[10px] top-[3px] left-[3px]"
          alt="Angles left solid"
          src="angles-left-solid-3.svg"
        />
      </div>
      <div className="absolute w-[10px] -top-px left-[54px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        <a className="number" href="#">
          2
        </a>
      </div>
      <img
        className="absolute w-[8px] h-px top-[16px] left-[38px] object-cover"
        alt="Line"
        src="line-12.svg"
      />
      <div className="absolute w-[10px] -top-px left-[39px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        <a className="number" href="#">
          3
        </a>
      </div>
      <div className="absolute w-[10px] -top-px left-[24px] [font-family:'Noto_Sans_KR-Regular',Helvetica] font-normal text-[#676767] text-[12px] tracking-[0] leading-[normal]">
        <a className="number" href="#">
          4
        </a>
      </div>
      <div className="flex w-[16px] h-[16px] items-start gap-[10px] absolute top-px left-0">
        <div className="relative w-[16px] h-[16px] rounded-[8px] border border-solid border-[#e9e9e9]">
          <a className="number" href="#">
            5
          </a>
        </div>
        <img
          className="absolute w-[10px] h-[10px] top-[3px] left-[3px]"
          alt="Angles left solid"
          src="angles-left-solid-2.svg"
        />
      </div>
    </div>
  );
};
const AnimaPaginationGPTRefine = () => {
  //3.5인데 명확하게 한번더 이야기 해줘야함 추론하지 못함
  //클릭이 가능하게 a태그들로 변경해줘

  return (
    <div className="relative flex items-center gap-4">
      <a
        href="#"
        className="relative w-4 h-4 rounded-full border border-solid border-[#e9e9e9] transform rotate-180 block"
      >
        <img
          className="absolute w-2 h-2 top-1 left-1"
          alt="Angles left solid"
          src="angles-left-solid-3.svg"
        />
      </a>
      <a href="#" className="text-[#676767] text-12 font-normal">
        3
      </a>
      <div className="h-[12px] w-px bg-gray-300" />
      <a href="#" className="text-[#676767] text-12 font-normal">
        2
      </a>
      <div className="h-[12px] w-px bg-gray-300" />
      <a href="#" className="text-[#676767] text-12 font-normal">
        1
      </a>
      <a
        href="#"
        className="relative w-4 h-4 rounded-full border border-solid border-[#e9e9e9] block"
      >
        <img
          className="absolute w-2 h-2 top-1 left-1"
          alt="Angles left solid"
          src="angles-left-solid-2.svg"
        />
      </a>
    </div>
  );
};
export default [
  BuilderPagination,
  BuilderPaginationRefine,
  BuilderGPTPaginationRefine,
  AnimaPagination,
  AnimaPaginationRefine,
  AnimaPaginationGPTRefine,
];
