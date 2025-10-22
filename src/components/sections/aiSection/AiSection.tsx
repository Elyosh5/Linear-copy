"use client";

import { useState } from "react";

const AiSection = () => {
  const [selected, setSelected] = useState<number>(1);
  return (
    <section className="overflow-hidden AiSection ">
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
          <div className="w-[1px] min-w-[1px] h-[1px] min-h-[1px] mt-[calc(72px-1px)]"></div>

          <div className="w-[1px] min-w-[1px] h-[1px] min-h-[1px] mt-[calc(32px-1px)]"></div>
          <div className="flex justify-center min-w-0">
            <div className="relative w-full max-w-[720px]  perspective-[900px]">
              <div
                className="transform-[translateY(0%)rotateX(30deg)scale(1.15)]  origin-top   will-change-transform border border-[#3e3e44] rounded-[8px] w-full absolute top-[0] bottom-[0] left-[0] right-[0] "
                style={{
                  boxShadow:
                    "inset 0 1.503px 5.261px rgba(255, 255, 255, .04), inset 0 -.752px .752px rgba(255, 255, 255, .1)",
                  background:
                    "linear-gradient(rgba(255, 255, 255, .1) 40%, rgba(8, 9, 10, .1) 100%)",
                }}
              >
                <div className="">
                  <input
                    name="assign-to"
                    className="h-[54px] p-[0_20px] text-[17px] border-none bg-transparent w-full outline-none border-b-[1px] border-b-[#23252a] relative "
                    type="text"
                    placeholder="Assign to..."
                    tabIndex={-1}
                  />
                </div>
              </div>
              <div className="mt-[48px] transform-[rotateX(30deg)translateY(3%)scale(1.29)]">
                <div className="relative ">
                  <div
                    onClick={() => setSelected(1)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 1
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 1
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Cursor"
                        data-nosnippet="true"
                        data-loaded="true"
                        loading="lazy"
                        width="18"
                        height="18"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-[50%] text-[transparent]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5560210c-dce4-4c9d-8ab3-980ecae0d700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Cursor</span>
                      <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                        Agent
                      </div>
                    </div>
                    <img
                      alt="Profile picture of Cursor"
                      data-nosnippet="true"
                      data-loaded="true"
                      loading="lazy"
                      width="18"
                      height="18"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-[50%] text-[transparent]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5560210c-dce4-4c9d-8ab3-980ecae0d700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Cursor</span>
                    <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                      Agent
                    </div>
                    {selected === 1 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="relative ">
                  <div
                    onClick={() => setSelected(2)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 2
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 2
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Devin"
                        data-nosnippet="true"
                        data-loaded="true"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="text-[transparent] rounded-[50%]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/30ea5408-c74f-4118-7c64-0adb3e982200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Devin</span>
                      <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                        Agent
                      </div>
                    </div>
                    <img
                      alt="Profile picture of Devin"
                      data-nosnippet="true"
                      data-loaded="true"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="text-[transparent] rounded-[50%]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/30ea5408-c74f-4118-7c64-0adb3e982200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Devin</span>
                    <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                      Agent
                    </div>
                    {selected === 2 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="relative ">
                  <div
                    onClick={() => setSelected(3)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 3
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 3
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Sentry"
                        data-nosnippet="true"
                        data-loaded="true"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="text-[transparent] rounded-[50%]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/34f65592-f2ed-4c97-3608-0ca06cbd1d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Sentry</span>
                      <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                        Agent
                      </div>
                    </div>
                    <img
                      alt="Profile picture of Sentry"
                      data-nosnippet="true"
                      data-loaded="true"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="text-[transparent] rounded-[50%]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/34f65592-f2ed-4c97-3608-0ca06cbd1d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Sentry</span>
                    <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                      Agent
                    </div>
                    {selected === 3 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="relative ">
                  <div
                    onClick={() => setSelected(4)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 4
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 4
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Leela"
                        data-nosnippet="true"
                        data-loaded="true"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="text-[transparent] rounded-[50%]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b187d837-efb9-471a-2527-cf897b9fb900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Leela</span>
                    </div>
                    <img
                      alt="Profile picture of Leela"
                      data-nosnippet="true"
                      data-loaded="true"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="text-[transparent] rounded-[50%]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b187d837-efb9-471a-2527-cf897b9fb900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Leela</span>

                    {selected === 4 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="relative ">
                  <div
                    onClick={() => setSelected(5)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 5
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 5
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Codegen"
                        data-nosnippet="true"
                        data-loaded="true"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="text-[transparent] rounded-[50%]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/671bb228-851f-4000-c4fd-04426e3c0600/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Codegen</span>
                      <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                        Agent
                      </div>
                    </div>
                    <img
                      alt="Profile picture of Codegen"
                      data-nosnippet="true"
                      data-loaded="true"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="text-[transparent] rounded-[50%]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/671bb228-851f-4000-c4fd-04426e3c0600/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Codegen</span>
                    <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                      Agent
                    </div>
                    {selected === 5 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="relative ">
                  <div
                    onClick={() => setSelected(6)}
                    className={`
                       relavive h-[48] rounded-[6px] flex items-center gap-[12px] px-[24px]
                      ${
                        selected === 6
                          ? " bg-gradient-to-b from-[#343434] to-[#2d2d2d] transform-[scale(1.07)]"
                          : ""
                      }
                    `}
                    style={{
                      boxShadow:
                        selected === 6
                          ? "inset 0 -2.75px 4.75px rgba(255, 255, 255, .14), inset 0 -.752px .752px rgba(255, 255, 255, .1), 0 54px 73px 3px rgba(0, 0, 0, .5)"
                          : "",
                    }}
                  >
                    <div className="flex opacity-[.08] blur-[1px] items-center gap-[12px] absolute top-[21px] left-[24px] right-[24px] transform-[rotateX(20deg)]">
                      <img
                        alt="Profile picture of Codegen"
                        data-nosnippet="true"
                        data-loaded="true"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="text-[transparent] rounded-[50%]"
                        src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f6242d9a-5171-4978-5519-b9eab8123b00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                      />
                      <span>Codegen</span>
                      <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                        Agent
                      </div>
                    </div>
                    <img
                      alt="Profile picture of Codegen"
                      data-nosnippet="true"
                      data-loaded="true"
                      width="16"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      className="text-[transparent] rounded-[50%]"
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f6242d9a-5171-4978-5519-b9eab8123b00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    />
                    <span>Conor</span>
                    <div className="bg-[#1c1c1f] text-[#8a8f98] text-[10px]">
                      Agent
                    </div>
                    {selected === 6 ? (
                      <svg
                        className="ml-auto"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        color="9c9da1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.6722 3.27047C15.0901 3.6482 15.1112 4.28103 14.7195 4.68394L6.94174 12.6839C6.74966 12.8815 6.48271 12.9955 6.2019 12.9999C5.9211 13.0042 5.65047 12.8986 5.45189 12.7071L1.30374 8.70711C0.898753 8.31659 0.898753 7.68342 1.30374 7.2929C1.70873 6.90237 2.36534 6.90237 2.77033 7.2929L6.16115 10.5626L13.2064 3.31606C13.5981 2.91315 14.2544 2.89274 14.6722 3.27047Z"></path>
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
