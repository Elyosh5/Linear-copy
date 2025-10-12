"use client";

const AiSection = () => {
  return (
    <section className="AiSection overflow-hidden  ">
      <div className="container">
        <div className="content">
          <div className="text">
            <div className="flex items-center gap-[8px] hover: group">
              <div className="bg-[#02B8CC] w-[14px] h-[8px] rounded-[9999px]"></div>
              <span className="flex items-center gap-[5px]">
                Artificial Intelligence
              </span>
              <svg
                className="transition-all ease-in duration-150 group-hover:fill-white group-hover:w-4 group-hover:h-4 group-hover:ml-[+4px]"
                color="gray"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="gray"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
              </svg>
            </div>
            <a className="] text-[56px] tracking-[-.0325em]  " href="">
              AI-assisted product development
            </a>
            <div className="">
              <p className="mb-[20px] mt-[10px]">
                <span>Linear for Agents.</span>Choose from a variety of AI
                agents and start delegating work, from code generation to other
                technical tasks.
              </p>
            </div>
            <a
              href=""
              className=" inline-flex text-[13px] rounded-[8px] p-[5px_10px] gap-[6px] items-center  border border-[#3e3e44] bg-[#28282c] hover:bg-[hsla(0,0%,100%,.15)] "
            >
              Learn more{" "}
              <svg
                className=""
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
                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
              </svg>
            </a>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <input
                  className="h-[54px] p-[0_20px] text-[17px] border-none bg-transparent w-full outline-none border-b-[1px] border-b-[#23252a] relative  after:"
                  type="text"
                  placeholder="Assign to..."
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
