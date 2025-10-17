"use client;";


const IconButton = () => {
  return (
    <div className="flex items-center justify-center w-[40px] h-[40px] border-2 border-[rgba(255,255,255,.05)] rounded-[100%] ">
      <svg
        className="w-[40px]"
        color="#9c9da1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#9c9da1"
        role="img"
        focusable="false"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
      </svg>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section className="ProductsSection ">
      <div className="container">
        <div className="content">
          <div className="product-text grid grid-cols-[12,minmax(0,1fr)] mb-[48px]">
            <h1 className="product-h1 text-[56px] font-bold leading-[1.1] grid-">
              Made for modern product teams
            </h1>
            <p className="text-[#8a8f98] text-balance self-end font-[510]">
              Linear is shaped by the practices and principles that distinguish
              world-class product teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.
              <button className="flex items-center gap-1.5 text-white">
                Make the switch{" "}
                <svg
                  className="page_chevronLink__2jbC0"
                  color="#f7f8f8"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#f7f8f8"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                </svg>
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="carousel ">
          <div
            className="grid  min-w-[fit-content] gap-[8px] before:min-w-[max(calc(calc((100vw-1024px)/2)-8px),calc(max(0px,24px)-8px))] before:block after:min-w-[max(calc(calc((100vw-1024px)/2)-8px),calc(max(0px,24px)-8px))] after:block"
            style={{ gridAutoFlow: "column" }}
          >
            <div className="snap-center">
              <div className="">
                <button className=" text-left aspect-[336/360] isolate bg-[#141516] rounded-[30px] justify-end h-[360px] transition-[background_.2s_ease-out] flex flex-col relative overflow-hidden snap-center">
                  <div
                    className="absolute top-0 flex w-full"
                    style={{
                      maskImage: "linear-gradient(#000 70%,transparent 90%)",
                    }}
                  >
                    <img
                      className="min-w-[336px]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      alt=""
                    />
                  </div>
                  <div className="flex p-[0_24px_32px] justify-between items-end">
                    <span className="text-[21px] font-semibold">
                      Purpose-built for product development
                    </span>
                    <IconButton />
                  </div>
                </button>
              </div>
            </div>
            <div className="snap-center">
              <div className="">
                <button className=" text-left aspect-[336/360] isolate bg-[#141516] rounded-[30px] justify-end h-[360px] transition-[background_.2s_ease-out] flex flex-col relative overflow-hidden snap-center">
                  <div
                    className="absolute top-0 flex w-full"
                    style={{
                      maskImage: "linear-gradient(#000 70%,transparent 90%)",
                    }}
                  >
                    <img
                      className="min-w-[336px]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      alt=""
                    />
                  </div>
                  <div className="flex p-[0_24px_32px] justify-between items-end">
                    <span className="text-[21px] font-semibold">
                      Designed to move fast
                    </span>
                    <IconButton />
                  </div>
                </button>
              </div>
            </div>
            <div className="snap-center">
              <div className="">
                <button className=" text-left aspect-[336/360] isolate bg-[#141516] rounded-[30px] justify-end h-[360px] transition-[background_.2s_ease-out] flex flex-col relative overflow-hidden snap-center">
                  <div
                    className="absolute top-0 flex w-full"
                    style={{
                      maskImage: "linear-gradient(#000 70%,transparent 90%)",
                    }}
                  >
                    <img
                      className="min-w-[336px]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      alt=""
                    />
                  </div>
                  <div className="flex p-[0_24px_32px] justify-between items-end">
                    <span className="text-[21px] font-semibold">
                      Crafted to perfection
                    </span>
                    <IconButton />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
