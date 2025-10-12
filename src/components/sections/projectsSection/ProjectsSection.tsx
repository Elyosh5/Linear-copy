"use client";

import { useState } from "react";
import CollaborativeDesk from "./svgs/CollaborateSvg";
import FeedbackSvg from "./svgs/FeedbackSvg";
import TextSvg from "./svgs/TextSvg";

const Collaborative = () => {
  return (
    <svg
      className="bg-[rgba(34,54,32,0.5)] p-[7px] rounded-[8px] "
      width="36"
      height="36"
      viewBox="0 0 16 16"
      fill="currentColor"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      color="rgba(104, 204, 88, 1)"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5627 9.57636L12.75 9.69796L13.7032 10.3553C14.461 10.8779 14.9339 11.7171 14.9936 12.6286L15 12.825V13.1248C15 14.1111 14.2385 14.9196 13.2714 14.9944L13.1248 15H7.87519C6.88887 15 6.0804 14.2385 6.00564 13.2714L6 13.1248V12.825C6 11.9044 6.42236 11.0386 7.13885 10.472L7.29684 10.3553L8.25 9.69796C9.54299 8.80627 11.2335 8.76574 12.5627 9.57636ZM7.56266 7.57636L7.75 7.69796L8.67249 8.33269C8.35326 8.45808 8.04396 8.61758 7.75 8.81119L6.34989 9.73331C5.50723 10.2883 5 11.2297 5 12.2387V12.8112C5 12.8747 5.00271 12.9377 5.00802 12.9998L2.87519 13C1.88887 13 1.0804 12.2385 1.00564 11.2714L1 11.1248V10.825C1 9.90435 1.42236 9.03865 2.13885 8.47203L2.29684 8.35528L3.25 7.69796C4.54299 6.80627 6.23353 6.76574 7.56266 7.57636ZM10.5 3C11.8807 3 13 4.11929 13 5.5C13 6.88071 11.8807 8 10.5 8C9.11929 8 8 6.88071 8 5.5C8 4.11929 9.11929 3 10.5 3ZM5.5 1C6.88071 1 8 2.11929 8 3.5C8 4.88071 6.88071 6 5.5 6C4.11929 6 3 4.88071 3 3.5C3 2.11929 4.11929 1 5.5 1Z"
      ></path>
    </svg>
  );
};

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const contentData = [
    {
      logo: <Collaborative />,
      h2: (
        <span className="text-[1.0625rem] font-[510] leading-[1.4]">
          <span className=" relative border  border-[rgba(44,144,28,1)] bg-[rgba(104,204,88,0.2)] rounded-[4px_1px_1px_4px] px-[2px]  mx-[-2px]">
            Collaborate on{" "}
          </span>
          <span className="mr-[4px] select-none pointer-events-none relative before:absolute before:w-[2px] before:bg-[rgba(44,144,28,1)] before:rounded-[9999px]  before:inset-[-1px_auto_-1px_0]">
            <span className="absolute  top-[-14px] left-0 ">
              <span className="block select-none pointer-events-none rounded-bl-[0] bg-[rgba(44,144,28,1)] p-[0_4px] h-[14px] text-[10px] rounded-[2px] leading-3.5 before:absolute before:content-[''] before:bg-[transparent] before:bottom-[-4px] before:left-[2px]  before:h-[4px] before:w-[2px] before:shadow-[0_-2px_0_0_rgba(44,144,28,1)] before:rounded-tl-[2px] ">
                zoe
              </span>
            </span>
          </span>
          ideas
        </span>
      ),
      p: (
        <span className="text-[#8a8f98]">
          Write down product ideas and work together on feature specs in
          realtime, multiplayer project{" "}
          <span className="relative before:content-[''] before:absolute before:inset-[-1px_auto_-1px_0] before:w-[2px] before:bg-[rgba(94,106,210,1)] before:rounded-[9999px]">
            <span className="block absolute top-[-14px] left-0">
              <span className="block rounded-[2px] rounded-bl-[0] text-[10px] leading-[14px] h-[14px] select-none bg-[rgba(94,106,210,1)] p-[0_4px] text-center whitespace-nowrap text-[#fff] before:content-[''] before:absolute before:bg-[transparent] before:bottom-[-4px] before:left-[2px] before:h-[4px] before:w-[2px] before:rounded-tl-[2px] before:shadow-[0_-2px_0_0_rgba(94,106,210,1)] ">
                quinn
              </span>
            </span>
          </span>{" "}
          documents. Add <span className="text-[#62666d]">**</span> style{" "}
          <span className="text-[#62666d]">**</span> and{" "}
          <span className="text-[#62666d]">##</span>structure with rich-text
          formatting options.
        </span>
      ),
      desk: <CollaborativeDesk />,
    },
    {
      logo: <FeedbackSvg />,
      h2: (
        <span className="text-[1.0625rem] font-[510] leading-[1.4]">
          Collect feedback
        </span>
      ),
      p: (
        <span className="text-[#8a8f98]">
          Discuss ideas directly in context and refine your project
          specifications{" "}
          <span className="relative overflow-visible px-[2px] mx-[-2px] bg-[#897844] text-[#fff] border-b border-b-[#c2a955]">
            with inline comments.
            <div className="absolute  flex flex-col  top-[calc(100%+4px)] right-0 text-[#f7f8f8] bg-[#232326] border border-[#34343a] rounded-[6px] min-w-[227px] shadow-[0px_4px_24px_rgba(0,0,0,.2)]">
              <div className="flex flex-col p-[12px] gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <div className="">
                    <img
                      src="https://webassets.linear.app/images/ornj730p/production/835fa19a98f9cd22cfb8da73cc921aa1027edeb6-2048x2048.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                      width="16"
                      height="16"
                      alt="Avatar of Julian"
                      className="rounded-[50%]"
                    />
                  </div>
                  <span className="">julian</span>
                  <span className="text-[#62666d]">just now</span>
                  <div className="flex gap-[8px] ml-auto">
                    <button type="button" className="">
                      <svg
                        className=""
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#9c9da1"
                      >
                        <path d="M3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
                      </svg>
                    </button>
                    <button type="button" className="">
                      <svg
                        className=""
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#9c9da1"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#9c9da1"
                      >
                        <path d="M4.2996 7.23968C4.01775 6.93614 3.5432 6.91857 3.23966 7.20042C2.93613 7.48227 2.91856 7.95682 3.20041 8.26035L6.45041 11.7603C6.7612 12.095 7.29647 12.0766 7.58346 11.7212L12.8335 5.22127C13.0937 4.89904 13.0435 4.42683 12.7213 4.16657C12.399 3.9063 11.9268 3.95654 11.6665 4.27877L6.96051 10.1053L4.2996 7.23968Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <span>sounds like a good idea!</span>
              </div>
              <div className="h-[1px] bg-[#34343a] w-full"></div>
              <div className="flex  items-center p-[12px] gap-[8px]">
                <div className="">
                  <img
                    src="https://webassets.linear.app/images/ornj730p/production/33f99f8b8fa79df7781b3db5cb14173849043518-2616x2616.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                    width="14"
                    height="14"
                    alt="Avatar of Gavin"
                    className="rounded-[50%]"
                  />
                </div>
                <span className="text-[#62666d] text-[0.8125rem]">
                  Reply...
                </span>
              </div>
            </div>
          </span>
        </span>
      ),
      desk: <CollaborativeDesk />,
    },
    {
      logo: <TextSvg />,
      h2: (
        <span className="text-[1.0625rem] font-[510] leading-[1.4]">
          Convert text to issues
        </span>
      ),
      p: (
        <span className="text-[#8a8f98] text-[15px]">
          Seamlessly move between ideation and execution.
        </span>
      ),
      ul: (
        <div className="grid grid-cols-1">
          <ul className="ul">
            <li className="li-blurt-out text-[#8a8f98]">
              <span className="mr-2">•</span>Implement contextual memory
            </li>

            <li className="li-blurt-out text-[#8a8f98]">
              <span className="mr-2">•</span>Better bias filtering algorithms
            </li>

            <li className="li-blurt-out text-[#8a8f98]">
              <span className="mr-2">•</span>Upgrade model section logic
            </li>
          </ul>
          <ul className="ul">
            <li className=" li-blurt-in text-[#8a8f98] inline-flex items-center gap-[5px] bg-[#28282c] rounded-[6px] px-[6px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#9c9da1"
                xmlns="http://www.w3.org/2000/svg"
                className=""
                role="img"
                focusable="false"
                aria-hidden="true"
                color="#9c9da1"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9408 8.91622L12.9576 8.65753C12.9855 8.44385 13 8.22509 13 8.00195C13 7.77881 12.9855 7.56006 12.9576 7.34638L14.9408 7.08769C14.9799 7.38692 15 7.69208 15 8.00195C15 8.31182 14.9799 8.61699 14.9408 8.91622ZM14.4688 5.32244C14.2328 4.75336 13.9239 4.22215 13.5538 3.74046L11.968 4.95912C12.2328 5.30381 12.4533 5.68315 12.6214 6.08855L14.4688 5.32244ZM12.2615 2.44816L11.0428 4.034C10.6981 3.76912 10.3188 3.54868 9.91341 3.38057L10.6795 1.53312C11.2486 1.76911 11.7798 2.078 12.2615 2.44816ZM8.91426 1.06112L8.65557 3.04432C8.4419 3.01645 8.22314 3.00195 8 3.00195C7.77686 3.00195 7.5581 3.01645 7.34443 3.04432L7.08574 1.06112C7.38496 1.02209 7.69013 1.00195 8 1.00195C8.30987 1.00195 8.61504 1.02209 8.91426 1.06112ZM5.32049 1.53312L6.08659 3.38057C5.68119 3.54868 5.30185 3.76912 4.95716 4.034L3.73851 2.44816C4.22019 2.078 4.7514 1.76911 5.32049 1.53312ZM2.4462 3.74046L4.03204 4.95912C3.76716 5.30381 3.54673 5.68315 3.37862 6.08855L1.53116 5.32244C1.76715 4.75336 2.07605 4.22215 2.4462 3.74046ZM1.05917 7.08769C1.02013 7.38692 1 7.69208 1 8.00195C1 8.31182 1.02013 8.61699 1.05917 8.91622L3.04237 8.65753C3.01449 8.44385 3 8.22509 3 8.00195C3 7.77881 3.01449 7.56006 3.04237 7.34638L1.05917 7.08769ZM1.53116 10.6815L3.37862 9.91536C3.54673 10.3208 3.76716 10.7001 4.03204 11.0448L2.4462 12.2634C2.07605 11.7818 1.76715 11.2506 1.53116 10.6815ZM3.73851 13.5557L4.95716 11.9699C5.30185 12.2348 5.68119 12.4552 6.08659 12.6233L5.32049 14.4708C4.7514 14.2348 4.22019 13.9259 3.73851 13.5557ZM7.08574 14.9428L7.34443 12.9596C7.5581 12.9875 7.77686 13.002 8 13.002C8.22314 13.002 8.4419 12.9875 8.65557 12.9596L8.91427 14.9428C8.61504 14.9818 8.30987 15.002 8 15.002C7.69013 15.002 7.38496 14.9818 7.08574 14.9428ZM10.6795 14.4708L9.91341 12.6233C10.3188 12.4552 10.6981 12.2348 11.0428 11.9699L12.2615 13.5557C11.7798 13.9259 11.2486 14.2348 10.6795 14.4708ZM13.5538 12.2634L11.968 11.0448C12.2328 10.7001 12.4533 10.3208 12.6214 9.91536L14.4688 10.6815C14.2328 11.2506 13.924 11.7818 13.5538 12.2634Z"
                  fill="#949698"
                ></path>
              </svg>
              <span>ENG-231</span>
              <span>Implement contextual memory</span>
            </li>
            <li className="li-blurt-in text-[#8a8f98] inline-flex items-center gap-[5px] bg-[#28282c] rounded-[6px] px-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#9c9da1"
                viewBox="0 0 16 16"
                className=""
                role="img"
                focusable="false"
                aria-hidden="true"
                color="#9c9da1"
              >
                <g fill="#F2C94C" opacity=".9">
                  <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10Z"></path>
                  <path d="M11.571 8A3.571 3.571 0 0 1 8 11.571V4.43A3.572 3.572 0 0 1 11.57 8Z"></path>
                </g>
              </svg>

              <span>ENG-233</span>
              <span>Upgrade model selection logic</span>
            </li>
            <li className="li-blurt-in text-[#8a8f98] inline-flex items-center gap-[5px] bg-[#28282c] rounded-[6px] px-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#9c9da1"
                viewBox="0 0 16 16"
                className=""
                role="img"
                focusable="false"
                aria-hidden="true"
                color="#9c9da1"
              >
                <g fill="#F2C94C" opacity=".9">
                  <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-2A5 5 0 1 1 8 3a5 5 0 0 1 0 10Z"></path>
                  <path d="M11.571 8A3.571 3.571 0 0 1 8 11.571V4.43A3.572 3.572 0 0 1 11.57 8Z"></path>
                </g>
              </svg>
              <span>ENG-232</span>
              <span>Better bias filtering algorithms</span>
            </li>
          </ul>
        </div>
      ),
      desk: <CollaborativeDesk />,
    },
  ];
  console.log(index);

  return (
    <section className="ProjectsSection  overflow-x-hidden">
      <div className="container">
        <div className="content   ">
          <div className="">
            <a href="/plan">
              <div className="flex items-center gap-[8px]  hover: group ">
                <div className="bg-[rgb(104,204,88)] w-[14px] h-[8px] rounded-full"></div>
                <span>Project and long-term planning</span>
                <svg
                  className="transition-all ease-in duration-150 group-hover:fill-white group-hover:w-5 h-5 group-hover:ml-[+5px] "
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="gray"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  color="gray"
                >
                  <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                </svg>
              </div>
            </a>
            <h2 className="text-[56px] font-semibold hidden lg:inline">
              Set the product direction
            </h2>
            <p className="text-[#8a8f98] w-[350px] text-[19px] leading-[24.5px] font-[510] pt-[20px]">
              <span className="text-white">
                Align your team around a unified product timeline.
              </span>{" "}
              Plan, manage, and track all product initiatives with Linear’s
              visual planning tools.
            </p>
          </div>
          <div className="plan-image flex flex-col justify-center items-center h-auto relative top-[-110px] opacity-50">
            <img
              className=" max-w-[1600px]  "
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt=""
            />
          </div>

          <div className="grid  grid-rows-2 lg:grid-cols-2 border-t-2 border-t-[hsla(0,0%,100%,.05)] border-b-[1px] border-b-[hsla(0,0%,100%,.05)] py-[50px] relative ">
            <div className="pr-[50px]">
              <div className="flex flex-col gap-10">
                <div className="">
                  <h2 className="text-[21px]">Manage projects end-to-end</h2>
                  <p className="text-[17px]">
                    Consolidate specs, milestones, tasks, and other
                    documentation in one centralized location.
                  </p>
                </div>
                <div className="mask-bottom ">
                  <div className="flex flex-col gap-[16px] ">
                    <h2>Project Overview</h2>
                    <div className="flex items-center flex-nowrap">
                      <div className="min-w-[108px]">Properties</div>
                      <div className="flex gap-[20px]">
                        <div className="flex items-center gap-[5px] flex-row">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#F2C94C"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.7519 6.0284L8.25194 4.57006C8.1741 4.52466 8.08705 4.50195 8 4.50195V11.3442C8.08705 11.3442 8.1741 11.3215 8.25194 11.2761L10.7519 9.81781C10.9055 9.7282 11 9.56375 11 9.38592V6.46029C11 6.28245 10.9055 6.118 10.7519 6.0284Z"></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.75581 1.21343C8.28876 0.931461 7.71124 0.93146 7.24419 1.21343L2.74419 3.93024C2.28337 4.20846 2 4.71907 2 5.27123V10.7327C2 11.2848 2.28337 11.7954 2.74419 12.0737L7.24419 14.7905C7.71124 15.0724 8.28876 15.0724 8.75581 14.7905L13.2558 12.0737C13.7166 11.7954 14 11.2848 14 10.7327V5.27123C14 4.71907 13.7166 4.20846 13.2558 3.93024L8.75581 1.21343ZM12.5 5.27123L8 2.55442L3.5 5.27123L3.5 10.7327L8 13.4495L12.5 10.7327L12.5 5.27123Z"
                            ></path>
                          </svg>
                          <span>In Progress</span>
                        </div>
                        <div className="flex items-center gap-[5px]">
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
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5 13.5V15H3.5V13.5H12.5ZM13.5 12.5V3.5C13.5 2.94771 13.0523 2.5 12.5 2.5H3.5C2.94771 2.5 2.5 2.94772 2.5 3.5V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5V15L3.24414 14.9873C2.06772 14.8677 1.13227 13.9323 1.0127 12.7559L1 12.5V3.5C1 2.20566 1.98361 1.14082 3.24414 1.0127L3.5 1H12.5L12.7559 1.0127C14.0164 1.14082 15 2.20566 15 3.5V12.5L14.9873 12.7559C14.8677 13.9323 13.9323 14.8677 12.7559 14.9873L12.5 15V13.5C13.0523 13.5 13.5 13.0523 13.5 12.5Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6Z"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.405 12H4.59566C4.18761 12 3.88127 11.6641 4.0449 11.307C4.40693 10.5169 5.38905 9.33333 8.02449 9.33333C10.673 9.33333 11.6222 10.5286 11.9603 11.3187C12.1123 11.6738 11.8066 12 11.405 12Z"
                            ></path>
                          </svg>
                          <span>ENG</span>
                        </div>
                        <div className="">
                          <div className="flex">
                            <div className="radial-mask ">
                              <img
                                src="https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                width="18"
                                height="18"
                                alt="Avatar of Karri"
                                className="rounded-[50%] object-cover"
                              />
                            </div>
                            <div className="">
                              <div className="radial-mask ml-[-5px] ">
                                <img
                                  src="https://webassets.linear.app/images/ornj730p/production/74717706c51f3c14ebe2851e0076def007ebafdd-1000x1000.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                  width="18"
                                  height="18"
                                  alt="Avatar of Paco"
                                  className="rounded-[50%] object-cover"
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="radial-mask ml-[-5px] ">
                                <img
                                  src="https://webassets.linear.app/images/ornj730p/production/e71a8d13b2d26a3a53303810550d00b23cb87ce5-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                  width="18"
                                  height="18"
                                  alt="Avatar of Erin"
                                  className="rounded-[50%] object-cover"
                                />
                              </div>
                            </div>
                            <div className="">
                              <div className="ml-[-5px] ">
                                <img
                                  src="https://webassets.linear.app/images/ornj730p/production/f45112e8aeed10023708772eb88872fa97b4291c-200x200.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                  width="18"
                                  height="18"
                                  alt="Avatar of Raissa"
                                  className="rounded-[50%] object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center  ">
                      <div className="min-w-[108px]">Resources</div>
                      <div className="flex gap-[4px]">
                        <div className="flex items-center gap-[4px] bg-[#232326] py-[1px] px-[5px] rounded-[6px]">
                          <svg
                            className="color-override"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="img"
                            focusable="false"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.33334 15C5.95218 15 6.54567 14.7541 6.98326 14.3166C7.42085 13.879 7.66668 13.2855 7.66668 12.6666V10.3333H5.33334C4.7145 10.3333 4.12101 10.5791 3.68342 11.0167C3.24583 11.4543 3 12.0478 3 12.6666C3 13.2855 3.24583 13.879 3.68342 14.3166C4.12101 14.7541 4.7145 15 5.33334 15Z"
                              fill="#0ACF83"
                            ></path>
                            <path
                              d="M3 8.00004C3 7.3812 3.24583 6.78771 3.68342 6.35012C4.12101 5.91254 4.7145 5.6667 5.33334 5.6667H7.66668V10.3333H5.33334C4.7145 10.3333 4.12101 10.0875 3.68342 9.64996C3.24583 9.21238 3 8.61888 3 8.00004Z"
                              fill="#A259FF"
                            ></path>
                            <path
                              d="M3 3.33334C3 2.71481 3.24558 2.1216 3.68277 1.68406C4.11997 1.24653 4.71299 1.00048 5.33152 1H7.66486V5.66668L5.33334 5.6667C4.7145 5.6667 4.12101 5.42085 3.68342 4.98326C3.24583 4.54567 3 3.95218 3 3.33334Z"
                              fill="#F24E1E"
                            ></path>
                            <path
                              d="M7.66681 1H10.0001C10.619 1 11.2125 1.24583 11.6501 1.68342C12.0877 2.12101 12.3335 2.7145 12.3335 3.33334C12.3335 3.95218 12.0877 4.54567 11.6501 4.98326C11.2125 5.42085 10.619 5.66668 10.0001 5.66668L7.66668 5.6667L7.66681 1Z"
                              fill="#FF7262"
                            ></path>
                            <path
                              d="M12.3335 8.00004C12.3335 8.61888 12.0877 9.21238 11.6501 9.64996C11.2125 10.0875 10.619 10.3334 10.0001 10.3334C9.38131 10.3334 8.78781 10.0875 8.35023 9.64996C7.91264 9.21238 7.66681 8.61888 7.66681 8.00004C7.66681 7.3812 7.91264 6.78771 8.35023 6.35012C8.78781 5.91254 9.38131 5.66668 10.0001 5.66668C10.619 5.66668 11.2125 5.91254 11.6501 6.35012C12.0877 6.78771 12.3335 7.3812 12.3335 8.00004Z"
                              fill="#1ABCFE"
                            ></path>
                          </svg>
                          <span>Exploration</span>
                        </div>
                        <div className="flex items-center gap-[4px] bg-[#232326] py-[1px] px-[5px] rounded-[6px]">
                          <svg
                            className=""
                            color="#68CC58"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#68CC58"
                            role="img"
                            focusable="false"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <svg>
                              <path d="M14.2994 14.0165C14.918 13.8192 15.1804 13.0923 14.8677 12.5151L8.9336 1.56073C8.52859 0.813089 7.47141 0.813091 7.0664 1.56073L1.1323 12.5151C0.819613 13.0923 1.08197 13.8192 1.70057 14.0165C1.8343 14.0592 1.9683 14.1004 2.10257 14.1403C5.96173 15.2866 10.0383 15.2866 13.8974 14.1403C14.0317 14.1004 14.1657 14.0592 14.2994 14.0165ZM10.467 7.80774C10.2381 8.15661 9.95257 8.54009 9.56836 8.81897C9.56836 8.81897 8.51122 7.81904 8.06836 7.81901C7.56836 7.81897 6.06836 8.81901 6.06836 8.81901C6.06836 8.81901 5.70485 8.36728 5.44099 7.97759L8 3.25367L10.467 7.80774Z"></path>
                            </svg>
                          </svg>
                          <span>User interviews</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start ">
                      <div className="min-w-[108px]">Milestones</div>
                      <div className="">
                        <div className="flex flex-col gap-[10px]">
                          <div className="flex items-center gap-[4px]">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="#5E6AD2"
                              aria-hidden="true"
                            >
                              <path
                                d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                fill="var(--color-brand-bg)"
                                stroke-width="2"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span>
                              Design Reviews
                              <span className="text-[#8a8f98] ml-[6px]">
                                100%
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-[4px]">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="#5E6AD2"
                              aria-hidden="true"
                            >
                              <path
                                d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                fill="var(--color-brand-bg)"
                                stroke-width="2"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span>
                              Internal Alpha
                              <span className="text-[#8a8f98] ml-[6px]">
                                100% of 10
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-[4px]">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                                fill="none"
                                stroke="#F2C94C"
                                stroke-width="2"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span>
                              Ga
                              <span className="text-[#8a8f98] ml-[6px]">
                                25% of 53
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-[48px]">
              <div className="flex flex-col">
                <div className="">
                  <h2>Project updates</h2>
                  <p>
                    Communicate progress and project health with built-in
                    project updates.
                  </p>
                </div>
                <div className="relative notification-mask overflow-hidden">
                  <div className="bg-[rgba(40,40,40,.3)] aspect-[432/320]  p-[16px] rounded-[16px] w-[500px] h-fit ">
                    <div className="perspective-[2000px] perspective-origin-[50%]  transition-[smooth]">
                      <div className="notification flex flex-col gap-[10px] border-[1px] border-[hsla(0,0%,100%,.2)] p-[16px] rounded-[16px] bg-[rgba(40,40,40)] w-full absolute z-150 transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(180px)translateX(calc(10%-3%))translateY(20%)]  preserve-3d  hover:transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(180px)translateX(calc(10%-3%))translateY(1%)] transition-[10s] ">
                        <div className="flex items-center gap-[8px] ">
                          <svg
                            fill="#68cc58"
                            color="#68cc58"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="img"
                            focusable="false"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rounded-[50%] bg-[rgba(104,204,88,0.25)] "
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.6807 5.7029C12.9925 5.97566 13.0241 6.44948 12.7513 6.76121L9.71942 10.2263C9.56569 10.402 9.33892 10.4961 9.10596 10.4808C8.873 10.4656 8.66044 10.3427 8.53094 10.1485L6.76432 7.49855L4.37742 10.2263C4.10466 10.5381 3.63083 10.5696 3.31911 10.2969C3.00739 10.0241 2.97581 9.55028 3.24857 9.23856L6.28056 5.77356C6.43429 5.59788 6.66106 5.50379 6.89401 5.51905C7.12696 5.53432 7.33952 5.65718 7.46902 5.85142L9.23562 8.50133L11.6224 5.77347C11.8952 5.46174 12.369 5.43015 12.6807 5.7029Z"
                            ></path>
                          </svg>
                          <span className="text-[#68cc58]">On track</span>
                        </div>
                        <h3>We are ready to launch next Thursday</h3>
                        <span className="text-[#62666d]">Sep 8</span>
                      </div>
                      <div className="notification flex flex-col gap-[10px] border-[1px] border-[hsla(0,0%,100%,.2)] p-[16px] rounded-[16px] bg-[rgba(40,40,40)] w-full absolute z-100 transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(0px)translateX(10%)translateY(21%)] hover:transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(0px)translateX(10%)translateY(-1%)]">
                        <div className="flex items-center gap-[8px]">
                          <svg
                            fill="#f2994a"
                            color="#f2994a"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="img"
                            focusable="false"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rounded-[50%] bg-[rgba(242,153,74,0.25)]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.62562 3.8314C9.85957 3.7977 10.0957 3.87627 10.2628 4.04341L12.5728 6.35341C12.8657 6.6463 12.8657 7.12117 12.5728 7.41407C12.28 7.70696 11.8051 7.70696 11.5122 7.41407L9.91096 5.81284L6.92594 11.2854C6.81276 11.4929 6.60838 11.6349 6.37442 11.6686C6.14047 11.7023 5.90433 11.6237 5.73719 11.4566L3.42719 9.14657C3.1343 8.85367 3.1343 8.3788 3.42719 8.08591C3.72008 7.79301 4.19496 7.79301 4.48785 8.08591L6.08908 9.68714L9.0741 4.2146C9.18728 4.00709 9.39166 3.86509 9.62562 3.8314Z"
                            ></path>
                          </svg>
                          <span className="text-[#f2994a]">At risk</span>
                        </div>
                        <h3>Progress slowed down last week because…</h3>
                        <span className="text-[#62666d]">Oct 27</span>
                      </div>
                      <div className="notification flex flex-col gap-[10px] border-[1px] border-[hsla(0,0%,100%,.3)] p-[16px] rounded-[16px]  bg-[rgb(40,40,40,.2)]  w-full absolute z-0 transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(0px)translateX(3%)translateY(-20%)] hover:transform-[skewY(-4deg)rotateX(-14deg)rotateY(20deg)translateZ(0px)translateX(3%)translateY(-40%)]">
                        <div className="flex items-center gap-[8px]">
                          <svg
                            fill="#c52828"
                            color="#c52828"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            role="img"
                            focusable="false"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="rounded-[50%] bg-[rgba(197,40,40,0.25)]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.6807 10.297C12.9925 10.0242 13.0241 9.5504 12.7513 9.23866L9.71942 5.77356C9.56569 5.59786 9.33892 5.50377 9.10596 5.51903C8.873 5.53429 8.66044 5.65716 8.53094 5.8514L6.76432 8.50133L4.37742 5.77354C4.10466 5.46182 3.63083 5.43024 3.31911 5.703C3.00739 5.97577 2.97581 6.44959 3.24857 6.76132L6.28056 10.2263C6.43429 10.402 6.66106 10.4961 6.89401 10.4808C7.12696 10.4656 7.33952 10.3427 7.46902 10.1485L9.23562 7.49855L11.6224 10.2264C11.8952 10.5381 12.369 10.5697 12.6807 10.297Z"
                            ></path>
                          </svg>
                          <span className="text-[#c52828]">Off track</span>
                        </div>
                        <h3>
                          Unexpected roadblocks forced us to take a different…
                        </h3>
                        <span className="text-[#62666d]">Oct 27</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[hsla(0,0%,100%,.1)] transform -translate-x-1/2"></div>
          </div>
          <div className="grid-root  py-[60px]">
            <div className="plan-text pt-[60px]">
              <h3 className="text-2xl mb-[20px] font-[510] tracking-[-0.012em]">
                Ideate and specify what to build next
              </h3>
              <div className="flex flex-col gap-[10px] transition-all">
                <button
                  className={`flex items-center gap-[10px] ${
                    index === 0 ? "text-[#f7f8f8]" : "text-[#62666d]"
                  } `}
                  onClick={() => setIndex(0)}
                >
                  <div
                    className={` w-1 h-[24px] rounded-[9999px] ${
                      index === 0 ? "bg-[#68cc58]" : "bg-[#232326]"
                    }`}
                  ></div>
                  Collaborative documents
                </button>
                <button
                  className={`flex items-center gap-[10px] ${
                    index === 1 ? "text-[#f7f8f8]" : "text-[#62666d]"
                  } `}
                  onClick={() => setIndex(1)}
                >
                  <div
                    className={` w-1 h-[24px] rounded-[9999px] ${
                      index === 1 ? "bg-[#68cc58]" : "bg-[#232326]"
                    }`}
                  ></div>
                  Inline comments
                </button>
                <button
                  className={`flex items-center gap-[10px] ${
                    index === 2 ? "text-[#f7f8f8]" : "text-[#62666d]"
                  } `}
                  onClick={() => setIndex(2)}
                >
                  <div
                    className={` w-1 h-[24px] rounded-[9999px] ${
                      index === 2 ? "bg-[#68cc58]" : "bg-[#232326]"
                    }`}
                  ></div>
                  Text-to-issue commands
                </button>
              </div>
            </div>
            <div className="plan-box pl-[60px]">
              <div className="border p-[10px] border-[RGB(21,22,22)] rounded-[8px] w-[540px] ">
                <div className="border border-[rgb(34,38,42)] w-[516px] h-[474px] overflow-hidden rounded-[6px]">
                  <div className="relative border-b border-[rgb(34,38,42)] max-h-[40px]">
                    <svg viewBox="0 12 500 30" className="ml-[-10px]">
                      <g opacity="0.4">
                        <path
                          fill="#62666D"
                          fill-rule="evenodd"
                          d="M26.412 20.35v5.463c0 .74.566 1.349 1.288 1.418l.137.007H33.3v4.512a1.9 1.9 0 01-1.9 1.9h-7.6a1.9 1.9 0 01-1.9-1.9v-9.5c0-1.05.85-1.9 1.9-1.9h2.612zm1.188 0l5.7 5.729h-4.75a.95.95 0 01-.95-.95V20.35z"
                          clip-rule="evenodd"
                        ></path>
                        <path
                          fill="#FEFFFE"
                          d="M46.792 31.645c-.672 0-1.255-.105-1.749-.314-.49-.213-.874-.516-1.152-.91-.277-.394-.432-.863-.464-1.405h1.363c.028.325.135.597.32.814.184.213.422.372.711.476.293.104.615.157.965.157.382 0 .723-.06 1.025-.181.301-.12.539-.29.712-.507.172-.22.259-.478.259-.771 0-.266-.076-.483-.23-.652a1.71 1.71 0 00-.614-.416 5.91 5.91 0 00-.869-.295l-1.055-.29c-.724-.193-1.295-.48-1.713-.862-.414-.386-.62-.89-.62-1.514 0-.518.138-.97.415-1.357a2.727 2.727 0 011.134-.898 3.91 3.91 0 011.622-.326c.611 0 1.15.109 1.616.326.467.213.834.507 1.104.88.27.37.41.794.422 1.273h-1.315a1.293 1.293 0 00-.579-.965c-.333-.23-.757-.344-1.272-.344-.366 0-.685.058-.959.175-.27.113-.478.27-.627.47a1.156 1.156 0 00-.217.694c0 .213.05.396.15.549.105.148.24.275.405.38.165.1.342.184.53.253.19.068.372.126.55.175l.868.235c.285.072.578.169.88.29.301.12.58.279.838.476.261.193.47.434.627.723.161.286.242.631.242 1.038 0 .502-.131.952-.392 1.35-.262.394-.64.706-1.134.935-.495.225-1.094.338-1.797.338zm4.842 2.376v-9.263h1.273v1.098h.108c.077-.141.185-.304.326-.489a1.85 1.85 0 01.603-.482c.257-.14.595-.211 1.013-.211.543 0 1.025.136 1.447.41.426.273.762.67 1.007 1.188.245.518.368 1.144.368 1.875 0 .724-.12 1.347-.362 1.87-.241.518-.575.918-1 1.2a2.616 2.616 0 01-1.46.416c-.406 0-.738-.069-.995-.205a1.998 1.998 0 01-.61-.489 3.39 3.39 0 01-.337-.488h-.078v3.57h-1.303zm3.04-3.504c.39 0 .715-.104.976-.314.266-.209.465-.492.597-.85.133-.362.2-.768.2-1.218 0-.446-.067-.846-.2-1.2a1.87 1.87 0 00-.59-.838c-.258-.205-.586-.308-.984-.308-.382 0-.703.099-.964.296-.258.193-.455.466-.591.82-.133.35-.2.76-.2 1.23s.067.884.2 1.242c.136.358.335.638.597.839.265.2.584.301.958.301zm4.57.983v-6.742h1.303V31.5h-1.303zm.658-7.78a.832.832 0 01-.585-.228.73.73 0 01-.242-.549c0-.217.08-.402.242-.555a.832.832 0 01.585-.229.81.81 0 01.579.23.729.729 0 01.247.554.723.723 0 01-.247.549.81.81 0 01-.58.229zm5.246 7.919c-.647 0-1.206-.15-1.676-.447a2.936 2.936 0 01-1.086-1.23c-.25-.522-.374-1.121-.374-1.797 0-.687.129-1.292.386-1.815.258-.527.62-.937 1.086-1.23.47-.297 1.02-.446 1.652-.446.514 0 .97.094 1.369.283a2.408 2.408 0 011.417 1.984h-1.278a1.576 1.576 0 00-.266-.585 1.333 1.333 0 00-.494-.422 1.587 1.587 0 00-.73-.157c-.362 0-.68.097-.953.29-.273.189-.486.46-.639.814-.153.354-.23.772-.23 1.254 0 .486.075.91.224 1.272.149.362.36.642.633.839.278.193.6.29.965.29.253 0 .48-.047.681-.14.206-.092.378-.225.52-.398.14-.176.236-.388.288-.633h1.279a2.493 2.493 0 01-.428 1.17 2.466 2.466 0 01-.953.808c-.398.197-.862.296-1.393.296zm7.116 0c-.66 0-1.23-.143-1.713-.428a2.826 2.826 0 01-1.11-1.206c-.257-.523-.385-1.132-.385-1.828 0-.691.126-1.3.38-1.827a2.956 2.956 0 011.079-1.23c.462-.297 1.007-.446 1.634-.446.382 0 .752.062 1.11.187.358.124.68.321.965.59.285.27.51.62.675 1.05.169.43.253.949.253 1.556v.47h-5.36v-.983h4.685l-.61.326c0-.414-.064-.78-.192-1.098a1.619 1.619 0 00-.573-.741c-.253-.181-.569-.272-.947-.272s-.701.09-.97.271c-.27.181-.475.42-.616.718-.14.298-.21.623-.21.977v.67c0 .462.08.854.24 1.175.161.322.384.567.67.736.29.169.625.253 1.007.253.249 0 .474-.036.675-.108a1.388 1.388 0 00.868-.862l1.243.235c-.1.361-.278.679-.53.952a2.577 2.577 0 01-.96.64 3.587 3.587 0 01-1.308.223zm8.906-4.137V31.5h-1.302v-8.985h1.284v3.353h.09a1.94 1.94 0 01.718-.869c.326-.217.75-.325 1.273-.325.462 0 .866.094 1.212.283.35.19.621.473.814.85.193.378.29.849.29 1.412V31.5h-1.315v-4.125c0-.498-.129-.884-.386-1.157-.253-.274-.607-.41-1.061-.41-.31 0-.587.068-.833.204a1.454 1.454 0 00-.572.573c-.141.25-.212.555-.212.917zm8.111 4.143c-.43 0-.818-.079-1.164-.235a1.936 1.936 0 01-.82-.7c-.2-.306-.301-.677-.301-1.116 0-.382.072-.693.217-.934.149-.245.348-.44.597-.585.249-.145.526-.253.832-.326.31-.072.623-.128.94-.169.407-.044.734-.082.984-.114.249-.032.43-.083.542-.151.117-.072.175-.187.175-.344v-.03c0-.257-.048-.474-.145-.651a.903.903 0 00-.428-.41 1.598 1.598 0 00-.705-.139 1.93 1.93 0 00-.754.133 1.536 1.536 0 00-.814.802l-1.23-.284c.145-.41.358-.74.639-.989.285-.253.611-.438.977-.554.37-.117.756-.175 1.158-.175.269 0 .555.032.856.096.301.06.587.175.856.344.27.165.487.402.651.712.17.31.254.71.254 1.2V31.5h-1.279v-.923h-.048c-.084.165-.21.33-.38.495a2.006 2.006 0 01-.651.41 2.54 2.54 0 01-.959.163zm.277-1.05c.366 0 .678-.07.935-.21.258-.145.455-.334.591-.567.137-.234.205-.48.205-.742V28.2a.74.74 0 01-.271.127c-.129.04-.28.074-.452.103-.17.028-.334.054-.495.078l-.404.048a3.435 3.435 0 00-.693.17c-.21.071-.378.18-.507.325-.125.14-.187.327-.187.56 0 .326.12.571.362.736.241.165.547.248.916.248zm4.819.905v-6.742h1.26v1.08h.072c.125-.362.342-.648.652-.857.313-.213.667-.32 1.061-.32.08 0 .177.005.29.013.112.004.2.01.265.018v1.254a3.352 3.352 0 00-.687-.072c-.31 0-.588.066-.833.199a1.472 1.472 0 00-.573.536 1.48 1.48 0 00-.205.784V31.5h-1.302zm10.716-6.742L102.65 31.5h-1.411l-2.442-6.742h1.411l1.707 5.198h.072l1.707-5.198h1.399zm3.907 6.88c-.659 0-1.23-.142-1.712-.428a2.823 2.823 0 01-1.11-1.206c-.257-.522-.386-1.131-.386-1.827 0-.691.127-1.3.38-1.827a2.955 2.955 0 011.079-1.23c.463-.297 1.007-.446 1.635-.446.381 0 .751.062 1.109.187.358.124.68.321.965.59.285.27.511.62.675 1.05.169.43.254.949.254 1.556v.47h-5.361v-.983h4.685l-.609.326a2.9 2.9 0 00-.193-1.098 1.61 1.61 0 00-.573-.741c-.253-.181-.568-.272-.946-.272s-.702.09-.971.271c-.27.181-.475.42-.615.718a2.252 2.252 0 00-.211.977v.67c0 .462.08.854.241 1.175.161.322.384.567.669.736.29.169.625.253 1.007.253.249 0 .475-.036.676-.108a1.383 1.383 0 00.868-.862l1.242.235c-.1.361-.277.679-.53.952a2.583 2.583 0 01-.959.64 3.588 3.588 0 01-1.309.223zm9.377-5.228l-1.188.206a1.457 1.457 0 00-.241-.429 1.144 1.144 0 00-.428-.343c-.177-.089-.404-.133-.682-.133-.369 0-.679.084-.928.253-.245.165-.368.376-.368.633a.69.69 0 00.247.55c.169.14.438.252.808.337l1.074.241c.615.14 1.075.362 1.381.663.305.302.458.688.458 1.158 0 .406-.117.768-.35 1.086-.233.313-.557.56-.971.741-.414.177-.892.266-1.435.266-.502 0-.945-.073-1.327-.217a2.292 2.292 0 01-.928-.634 2.149 2.149 0 01-.465-1.013l1.261-.193c.08.33.243.58.488.748.249.169.571.253.965.253.43 0 .774-.09 1.031-.271.257-.18.386-.4.386-.657a.689.689 0 00-.235-.537c-.157-.14-.396-.25-.718-.326l-1.133-.253c-.636-.145-1.104-.372-1.405-.681-.298-.314-.447-.708-.447-1.182 0-.398.111-.748.332-1.05a2.18 2.18 0 01.923-.699 3.384 3.384 0 011.344-.253c.487 0 .903.072 1.249.217.349.145.631.348.844.609.217.257.37.56.458.91zm4.716-1.652v1.056h-3.673v-1.056h3.673zm-2.696-1.604h1.309v6.368c0 .205.028.374.084.507a.619.619 0 00.266.295c.12.06.275.09.464.09a2.263 2.263 0 00.458-.048l.248 1.086a3.077 3.077 0 01-.905.139c-.39 0-.73-.075-1.019-.224a1.642 1.642 0 01-.669-.627 1.859 1.859 0 01-.236-.953v-6.633zm6.983 8.485c-.659 0-1.23-.143-1.712-.428a2.829 2.829 0 01-1.11-1.206c-.257-.523-.386-1.132-.386-1.828 0-.691.127-1.3.38-1.827a2.958 2.958 0 011.08-1.23c.462-.297 1.007-.446 1.634-.446.382 0 .752.062 1.109.187.358.124.68.321.965.59.286.27.511.62.676 1.05.169.43.253.949.253 1.556v.47h-5.361v-.983h4.686l-.61.326c0-.414-.064-.78-.192-1.098a1.624 1.624 0 00-.573-.741c-.254-.181-.569-.272-.947-.272s-.702.09-.971.271c-.269.181-.474.42-.615.718a2.252 2.252 0 00-.211.977v.67c0 .462.08.854.241 1.175.161.322.384.567.669.736.29.169.626.253 1.007.253.25 0 .475-.036.676-.108.205-.073.382-.181.531-.326a1.39 1.39 0 00.337-.537l1.242.236c-.1.361-.277.679-.53.952a2.575 2.575 0 01-.959.64 3.588 3.588 0 01-1.309.223zm4.336-.139v-6.742h1.261v1.08h.072a1.66 1.66 0 01.651-.857c.314-.213.668-.32 1.061-.32.081 0 .177.005.29.013.113.004.201.01.265.018v1.254a3.35 3.35 0 00-.687-.072c-.31 0-.587.066-.832.199a1.463 1.463 0 00-.573.536 1.478 1.478 0 00-.205.784V31.5h-1.303z"
                        ></path>
                        <path
                          fill="#949698"
                          d="M144.629 29.429a.525.525 0 00.742.742l2.8-2.8a.524.524 0 00.005-.737l-2.732-2.8a.525.525 0 10-.752.733l2.37 2.429-2.433 2.433z"
                        ></path>
                        <path
                          fill="#FEFFFE"
                          d="M157.983 31.5v-8.985h3.208c.696 0 1.272.128 1.731.386a2.48 2.48 0 011.031 1.043c.229.438.344.933.344 1.483a3.19 3.19 0 01-.344 1.49 2.517 2.517 0 01-1.037 1.043c-.459.253-1.035.38-1.731.38h-2.201v-1.146h2.068c.447 0 .806-.076 1.08-.229.277-.152.48-.362.609-.627.128-.27.193-.573.193-.91 0-.342-.065-.644-.193-.905a1.38 1.38 0 00-.609-.621c-.278-.149-.639-.223-1.086-.223h-1.706V31.5h-1.357zm7.803 0v-6.742h1.26v1.08h.073c.124-.362.342-.648.651-.857.314-.213.667-.32 1.061-.32.081 0 .177.005.29.013.112.004.201.01.265.018v1.254a3.363 3.363 0 00-.687-.072c-.31 0-.587.066-.832.199a1.463 1.463 0 00-.573.536 1.478 1.478 0 00-.205.784V31.5h-1.303zm7.339.139c-.631 0-1.182-.145-1.652-.434a2.93 2.93 0 01-1.098-1.219c-.257-.522-.386-1.13-.386-1.82 0-.7.129-1.311.386-1.834a2.923 2.923 0 011.098-1.224c.47-.29 1.021-.434 1.652-.434.635 0 1.188.145 1.658.434.471.29.836.697 1.098 1.224.261.523.392 1.134.392 1.833 0 .692-.131 1.299-.392 1.821a2.937 2.937 0 01-1.098 1.218c-.47.29-1.023.435-1.658.435zm0-1.104c.418 0 .76-.108 1.025-.326.269-.217.468-.504.597-.862a3.4 3.4 0 00.199-1.182c0-.434-.066-.832-.199-1.194a1.91 1.91 0 00-.597-.868c-.265-.217-.607-.326-1.025-.326-.41 0-.75.109-1.019.326a1.974 1.974 0 00-.597.868c-.133.362-.199.76-.199 1.194 0 .426.066.82.199 1.182.133.358.332.645.597.862.269.218.609.326 1.019.326zm4.613-5.777h1.303v7.182c.004.45-.077.83-.242 1.14-.16.31-.4.543-.717.7-.318.16-.71.24-1.176.24h-.265v-1.127h.211c.313 0 .538-.082.675-.247.137-.165.207-.402.211-.712v-7.176zm.645-1.037a.832.832 0 01-.585-.23.733.733 0 01-.241-.548.74.74 0 01.241-.555.832.832 0 01.585-.229c.225 0 .418.076.579.23a.728.728 0 01.247.554.722.722 0 01-.247.549.811.811 0 01-.579.229zm5.331 7.918c-.659 0-1.23-.143-1.712-.428a2.823 2.823 0 01-1.11-1.206c-.257-.523-.386-1.132-.386-1.828 0-.691.127-1.3.38-1.827a2.955 2.955 0 011.079-1.23c.463-.297 1.007-.446 1.635-.446.381 0 .751.062 1.109.187.358.124.68.321.965.59.285.27.511.62.675 1.05.169.43.254.949.254 1.556v.47h-5.361v-.983h4.685l-.609.326a2.9 2.9 0 00-.193-1.098 1.61 1.61 0 00-.573-.741c-.253-.181-.569-.272-.946-.272-.378 0-.702.09-.971.271-.27.181-.475.42-.615.718a2.252 2.252 0 00-.211.977v.67c0 .462.08.854.241 1.175.161.322.384.567.669.736.29.169.625.253 1.007.253.249 0 .475-.036.676-.108a1.383 1.383 0 00.868-.862l1.242.235c-.1.361-.277.679-.531.952a2.57 2.57 0 01-.958.64 3.588 3.588 0 01-1.309.223zm7.164 0c-.647 0-1.206-.15-1.676-.447a2.931 2.931 0 01-1.086-1.23c-.249-.522-.374-1.121-.374-1.797 0-.687.129-1.292.386-1.815a2.943 2.943 0 011.086-1.23c.47-.297 1.021-.446 1.652-.446.515 0 .971.094 1.369.283a2.407 2.407 0 011.417 1.984h-1.278a1.584 1.584 0 00-.266-.585 1.327 1.327 0 00-.494-.422 1.587 1.587 0 00-.73-.157c-.362 0-.679.097-.953.29-.273.189-.486.46-.639.814-.153.354-.229.772-.229 1.254 0 .486.074.91.223 1.272.149.362.36.642.633.839.278.193.599.29.965.29.253 0 .481-.047.682-.14.205-.092.377-.225.518-.398a1.51 1.51 0 00.29-.633h1.278a2.495 2.495 0 01-.428 1.17 2.466 2.466 0 01-.953.808c-.398.197-.862.296-1.393.296zm7.351-6.88v1.055h-3.672v-1.056h3.672zm-2.696-1.605h1.309v6.368c0 .205.028.374.084.507a.619.619 0 00.266.295c.12.06.275.09.464.09a2.263 2.263 0 00.458-.048l.248 1.086a3.077 3.077 0 01-.905.139c-.39 0-.73-.075-1.019-.224a1.648 1.648 0 01-.669-.627 1.859 1.859 0 01-.236-.953v-6.633zm12.465 3.256l-1.188.206a1.48 1.48 0 00-.241-.429 1.152 1.152 0 00-.428-.343c-.177-.089-.404-.133-.682-.133-.37 0-.679.084-.928.253-.246.165-.368.376-.368.633a.69.69 0 00.247.55c.169.14.438.252.808.337l1.073.241c.616.14 1.076.362 1.381.663.306.302.459.688.459 1.158 0 .406-.117.768-.35 1.086-.233.313-.557.56-.971.741-.414.177-.892.266-1.435.266-.503 0-.945-.073-1.327-.217a2.285 2.285 0 01-.928-.634 2.14 2.14 0 01-.465-1.013l1.261-.193c.08.33.243.58.488.748.249.169.571.253.965.253.43 0 .774-.09 1.031-.271.257-.18.386-.4.386-.657a.689.689 0 00-.235-.537c-.157-.14-.396-.25-.718-.326l-1.134-.253c-.635-.145-1.103-.372-1.405-.681-.297-.314-.446-.708-.446-1.182 0-.398.111-.748.332-1.05.225-.301.533-.534.922-.699a3.389 3.389 0 011.345-.253c.487 0 .903.072 1.248.217.35.145.632.348.845.609.217.257.37.56.458.91zm1.58 7.61v-9.262h1.272v1.098h.109c.076-.141.185-.304.326-.489a1.84 1.84 0 01.603-.482c.257-.14.595-.211 1.013-.211.542 0 1.025.136 1.447.41.426.273.762.67 1.007 1.188.245.518.368 1.144.368 1.875 0 .724-.121 1.347-.362 1.87-.241.518-.575.918-1.001 1.2a2.616 2.616 0 01-1.459.416c-.406 0-.738-.069-.995-.205a1.98 1.98 0 01-.609-.489 3.346 3.346 0 01-.338-.488h-.079v3.57h-1.302zm3.039-3.503c.39 0 .716-.104.977-.314.265-.209.464-.492.597-.85.133-.362.199-.768.199-1.218 0-.446-.066-.846-.199-1.2a1.875 1.875 0 00-.591-.838c-.257-.205-.585-.308-.983-.308-.382 0-.703.099-.965.296-.257.193-.454.466-.591.82-.132.35-.199.76-.199 1.23s.067.884.199 1.242c.137.358.336.638.597.839.266.2.585.301.959.301zm7.472 1.122c-.66 0-1.23-.143-1.713-.428a2.827 2.827 0 01-1.109-1.206c-.258-.523-.386-1.132-.386-1.828 0-.691.126-1.3.38-1.827a2.955 2.955 0 011.079-1.23c.462-.297 1.007-.446 1.634-.446.382 0 .752.062 1.11.187.358.124.679.321.965.59.285.27.51.62.675 1.05.169.43.253.949.253 1.556v.47h-5.361v-.983h4.686l-.609.326c0-.414-.065-.78-.193-1.098a1.624 1.624 0 00-.573-.741c-.253-.181-.569-.272-.947-.272s-.701.09-.971.271c-.269.181-.474.42-.615.718-.14.298-.211.623-.211.977v.67c0 .462.081.854.241 1.175.161.322.384.567.67.736a1.96 1.96 0 001.007.253c.249 0 .474-.036.675-.108.205-.073.382-.181.531-.326.149-.145.261-.323.338-.537l1.242.236a2.288 2.288 0 01-.531.952 2.575 2.575 0 01-.959.64 3.586 3.586 0 01-1.308.223zm7.164 0c-.648 0-1.206-.15-1.677-.447a2.936 2.936 0 01-1.085-1.23c-.249-.522-.374-1.121-.374-1.797 0-.687.129-1.292.386-1.815a2.941 2.941 0 011.085-1.23c.471-.297 1.021-.446 1.653-.446.514 0 .971.094 1.369.283a2.421 2.421 0 011.417 1.984h-1.279a1.566 1.566 0 00-.265-.585 1.338 1.338 0 00-.495-.422 1.585 1.585 0 00-.729-.157c-.362 0-.68.097-.953.29-.273.189-.486.46-.639.814-.153.354-.229.772-.229 1.254 0 .486.074.91.223 1.272.148.362.36.642.633.839.277.193.599.29.965.29.253 0 .48-.047.681-.14a1.4 1.4 0 00.519-.398c.14-.176.237-.388.289-.633h1.279a2.496 2.496 0 01-.429 1.17 2.462 2.462 0 01-.952.808c-.398.197-.863.296-1.393.296zm9.256-5.229l-1.188.206a1.457 1.457 0 00-.241-.429 1.152 1.152 0 00-.428-.343c-.177-.089-.404-.133-.682-.133-.369 0-.679.084-.928.253-.245.165-.368.376-.368.633a.69.69 0 00.247.55c.169.14.438.252.808.337l1.074.241c.615.14 1.075.362 1.381.663.305.302.458.688.458 1.158 0 .406-.117.768-.35 1.086-.233.313-.557.56-.971.741-.414.177-.892.266-1.435.266-.503 0-.945-.073-1.327-.217a2.285 2.285 0 01-.928-.634 2.14 2.14 0 01-.465-1.013l1.261-.193c.08.33.243.58.488.748.249.169.571.253.965.253.43 0 .774-.09 1.031-.271.257-.18.386-.4.386-.657a.689.689 0 00-.235-.537c-.157-.14-.396-.25-.718-.326l-1.133-.253c-.636-.145-1.104-.372-1.405-.681-.298-.314-.447-.708-.447-1.182 0-.398.111-.748.332-1.05a2.18 2.18 0 01.923-.699 3.384 3.384 0 011.344-.253c.487 0 .903.072 1.249.217.349.145.631.348.844.609.217.257.37.56.458.91z"
                        ></path>
                        <path
                          fill="#57595A"
                          d="M252.25 25.575a1.425 1.425 0 110 2.85 1.425 1.425 0 010-2.85zm4.75 0a1.425 1.425 0 110 2.85 1.425 1.425 0 010-2.85zm4.75 0a1.425 1.425 0 110 2.85 1.425 1.425 0 010-2.85z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="">
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 60 250 250" // Add viewBox to contain your path coordinates
                      fillRule="evenodd"
                      fill="white"
                      className="absolute top-[50%]"
                    >
                      <path
                        fill="rgb(255, 255, 255)"
                        stroke="white"
                        opacity="0.5"
                        d="M19 232.5h7m-7 8h7m-7 8h7m-7 8h7"
                      />
                    </svg>
                    <div className="py-[60px] px-[90]">
                      <div className="flex flex-col gap-[10px]">
                        <div className="mb-[10px]">
                          {contentData[index].logo}
                        </div>
                        <div className="">{contentData[index].h2}</div>
                        <div className="">{contentData[index].p}</div>
                        <div className="">{contentData[index].ul}</div>
                        <div className="">{contentData[index].desk}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] mb-[48px] bg-[hsla(0,0%,100%,.05)] lg"></div>
          <div className="grid-root ">
            <div
              className="grid-root-1  flex flex-col gap-[10px]"
              style={{ gridArea: "a" }}
            >
              <div className="flex gap-[5px] items-center">
                <svg
                  className=""
                  color="#d0d6e0
"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#d0d6e0
"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.4145 8.3381C7.68162 7.8873 8.31838 7.8873 8.5855 8.3381L11.896 13.925C12.2589 14.5374 11.6035 15.2506 10.9879 14.9132L8.10753 13.3343C8.04032 13.2975 7.95967 13.2975 7.89247 13.3343L5.0121 14.9132C4.39652 15.2506 3.74112 14.5374 4.10401 13.925L7.4145 8.3381Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 8.96927 2.75037 9.87822 3.18945 10.668L3.38867 10.999L3.42773 11.0654C3.60231 11.4033 3.4953 11.825 3.16992 12.0371C2.84468 12.249 2.41642 12.1766 2.17773 11.8809L2.13281 11.8184L2.00195 11.6104C1.36597 10.5558 1 9.31963 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.40749 14.5834 10.7198 13.8672 11.8184L13.8223 11.8809C13.5836 12.1766 13.1553 12.249 12.8301 12.0371C12.4831 11.8109 12.3851 11.346 12.6113 10.999L12.8105 10.668C13.2496 9.87822 13.5 8.96927 13.5 8Z"
                  ></path>
                </svg>
                <h4>Initiatives</h4>
              </div>
              <p>Coordinate strategic product efforts.</p>
            </div>
            <div
              className="grid-root-2 flex flex-col gap-[10px]"
              style={{ gridArea: "b" }}
            >
              <div className="flex gap-[5px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#d0d6e0"
                  viewBox="0 0 16 16"
                  className=""
                  color="#d0d6e0"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="m11.927 13.232-1.354.78c-.937.54-1.406.811-1.904.917a3.22 3.22 0 0 1-1.338 0c-.498-.106-.967-.376-1.904-.917l-1.354-.78c-.937-.541-1.406-.811-1.747-1.19a3.212 3.212 0 0 1-.669-1.157C1.5 10.401 1.5 9.861 1.5 8.78V7.22c0-1.082 0-1.622.157-2.106.14-.429.368-.823.67-1.157.34-.379.809-.649 1.746-1.19l1.354-.78c.937-.54 1.406-.811 1.904-.917a3.22 3.22 0 0 1 1.338 0c.498.106.967.376 1.904.917l1.354.78c.937.541 1.406.811 1.747 1.19.301.334.53.728.669 1.157.157.484.157 1.024.157 2.106v1.56c0 1.082 0 1.622-.157 2.106-.14.429-.368.823-.67 1.157-.34.379-.809.649-1.746 1.19Zm-5.751-.52c.542.313.862.492 1.075.598V9.853a2.25 2.25 0 0 0-1.224-2.002l-3.02-1.51c-.005.217-.007.5-.007.878v1.56c0 1.183.017 1.438.084 1.642.074.229.196.439.356.617.144.16.358.303 1.383.894l1.353.78Zm2.575.597c.212-.105.532-.284 1.073-.596l1.353-.78c1.026-.592 1.239-.735 1.383-.895.16-.178.282-.389.356-.617.066-.204.084-.459.084-1.642V7.22c0-.378-.002-.661-.006-.878l-3 1.5-.007.003a2.25 2.25 0 0 0-1.236 2.009v3.456Zm3.757-8.402c-.15-.144-.42-.316-1.33-.841l-1.354-.78c-1.025-.592-1.256-.705-1.467-.75a1.72 1.72 0 0 0-.714 0c-.211.045-.442.158-1.467.75l-1.353.78c-.91.525-1.18.697-1.33.84L6.677 6.5l.026.013.29.145a2.25 2.25 0 0 0 2.013 0l.308-.154.009-.004 3.184-1.592Z"></path>
                </svg>
                <h4>Cross-team projects</h4>
              </div>
              <p>Collaborate across teams and departments.</p>
            </div>
            <div
              className="grid-root-3 flex flex-col gap-[10px]"
              style={{ gridArea: "c" }}
            >
              <div className="flex gap-[5px] items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#d0d6e0"
                  aria-hidden="true"
                  color="#d0d6e0"
                  className=""
                >
                  <path
                    d="M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z"
                    fill="var(--color-text-primary)"
                    stroke-width="2"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h4>Milestones</h4>
              </div>
              <p>Break projects down into concrete phases.</p>
            </div>
            <div
              className="grid-root-4 flex flex-col gap-[10px]"
              style={{ gridArea: "d" }}
            >
              <div className="flex gap-[5px] items-center">
                <svg
                  className=""
                  color="#d0d6e0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="#d0d6e0"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 9C3.55228 9 4 9.44772 4 10V13C4 13.5523 3.55228 14 3 14H2C1.44772 14 1 13.5523 1 13V10C1 9.44772 1.44772 9 2 9H3ZM14 6C14.5523 6 15 6.44772 15 7V13C15 13.5523 14.5523 14 14 14H13C12.4477 14 12 13.5523 12 13V7C12 6.44772 12.4477 6 13 6H14ZM8.5 2C9.05229 2 9.5 2.44772 9.5 3V13C9.5 13.5523 9.05229 14 8.5 14H7.5C6.94772 14 6.5 13.5523 6.5 13V3C6.5 2.44772 6.94772 2 7.5 2H8.5Z"
                  ></path>
                </svg>
                <h4>Progress insights</h4>
              </div>
              <p>Track scope, velocity, and progress over time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
