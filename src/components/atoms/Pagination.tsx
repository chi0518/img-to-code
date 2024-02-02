import * as React from "react";

const Pagination = () => {
  return (
    <div className="flex-col overflow-hidden relative flex aspect-[5.31] max-w-[85px] items-stretch justify-between gap-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83faf67203a8809edc268075b9b7b79b4cd994df5550e25a09c2170609ed0981?apiKey=debd433091574dfc8758a1d087d51978&"
        className="absolute h-full w-full object-cover object-center inset-0"
        alt=""
      />
      <div className="relative items-stretch flex aspect-square flex-col justify-center">
        <span
          className="border-b-[1px] flex shrink-0 h-4 flex-col rounded-[50%]"
          role="button"
          aria-label="Group 1"
          // onClick={() => }
        ></span>
      </div>
      <div className="relative items-stretch flex aspect-square flex-col justify-center">
        <span
          className="border-b-[1px] flex shrink-0 h-4 flex-col rounded-[50%]"
          role="button"
          aria-label="Group 2"
          // onClick={() => handleClick(2)}
        ></span>
      </div>
    </div>
  );
};
export default Pagination;
