"use client";
import { useRef, useState } from "react";

const WorkflowSection = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400;
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400;
    }
  };
  return (
    <section className="overflow-x-hidden WorkflowSection">
      <div className="container">
        <div className="content">
          <div className="flex items-center gap-[8px] group/section">
            <div className="bg-[#B59AFF] w-[14px] h-[8px] rounded-[9999px]"></div>
            <span className="flex items-center gap-[5px]">
              Workflows and integrations{" "}
            </span>
            <svg
              className="transition-all ease-in duration-150 group-hover/section:fill-white group-hover/section:w-4 group-hover/section:h-4 group-hover/section:ml-[+4px]"
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
          <div className=" grid-root-2">
            <div
              className="flex flex-col items-center"
              style={{ gridArea: "a" }}
            >
              <h2 className="text-[56px]">Collaborate acroos tools and team</h2>
            </div>
            <div className="self-end " style={{ gridArea: "b" }}>
              <p
                style={{
                  color: "#8a8f98",
                }}
              >
                Expand the capabilities of the Linear system with a wide variety
                of integrations that keep everyone in your organization aligned
                and focused.
              </p>
            </div>
          </div>
          <div className="h-[48px] w-[1px] select-none min-w-[1px] min-h-[1px] mt-[calc(48,0)-1px]"></div>
          <div className="w-screen ml-[-50vw] mr-[-50vw] relative left-[50%] right-[50%]">
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className=""
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                overscrollBehaviorX: "contain",
                scrollSnapStop: "always",
                overflowX: "scroll",
                overflowY: "hidden",
              }}
            >
              <div className=" grid  grid-flow-col min-w-[fit-content] gap-[8px] before:min-w-[max(calc(calc((100vw-1024px)/2)-8px),calc(max(0px,24px)-8px))] after:min-w-[max(calc(calc((100vw-1024px)/2)-8px),calc(max(0px,24px)-8px))]">
                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth: "calc(100vw - 48px - 32px)",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b4ccc6c0-b86b-4e9c-04a9-2ea66fa48e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Customer Requests</h3>
                        <p className="font-semibold text-[#fff]">
                          Build what customers actually want
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" snap-center group/mask">
                  <button
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth:
                        "calc(100vw - (max(0px, 24px) + max(0px, 24px) + 32))",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/45d00e03-8783-4225-f7f7-e49e1042e000/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">
                          Powerful git workflow
                        </h3>
                        <p className="font-semibold text-[#fff]">
                          Automate pull requests and commit workflows
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z"></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth:
                        "calc(100vw - max(0px, 24px) - max(0px, 24px) - 32)",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/2b394a72-ba7c-40d7-8f93-3b837b296d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Customer Requests</h3>
                        <p className="font-semibold text-[#fff]">
                          Build what customers actually want
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>

                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth:
                        "calc(100vw - max(0px, 24px) - max(0px, 24px) - 32)",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/906ad833-45a5-4b19-e4de-153896e13e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Lunar Asks</h3>
                        <p className="font-semibold text-[#fff]">
                          Turn workshop requests into actionable issues
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth:
                        "calc(100vw - max(0px, 24px) - max(0px, 24px) - 32)",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e7273bb-e885-4715-4f2d-bc67fb4eb300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Lunar integrations</h3>
                        <p className="font-semibold text-[#fff]">
                          100+ ways to enhacne your Linear experience
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth:
                        "calc(100vw - max(0px, 24px) - max(0px, 24px) - 32)",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/71e8ff5e-2889-4b4d-e12c-d3bb8d817700/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Figma integrations</h3>
                        <p className="font-semibold text-[#fff]">
                          Bridge the gap between engineering and design
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" snap-center group/mask">
                  <a
                    href=""
                    style={{
                      textAlign: "left",
                      isolation: "isolate",
                      padding: "32px 24px",
                      background: "#0f1011",
                      transition:
                        "filter .2s ease-out, transform .16s cubic-bezier(.25,.46,.45,.94)",
                      borderRadius: "16px",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      display: "flex",
                      position: "relative",
                      overflow: "hidden",
                      aspectRatio: "336 / 469",
                      width: "336px",
                      maxWidth: "calc(100vw - (24px + 24px + 32px))",
                      border: "1px solid rgba(255,255,255,.05)",
                    }}
                    className="group-hover/mask:filter-[brightness(110%)]"
                  >
                    <div className="z-[-1] absolute  top-0 left-0 bottom-0 right-0">
                      <div className="relative flex justify-center workflow-section-image">
                        <img
                          alt=""
                          data-nosnippet="true"
                          data-loaded="true"
                          loading="lazy"
                          width="336"
                          height="469"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/a516badb-c0aa-4d0d-2ffa-965b529e1a00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                          color="transparent"
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-[24px]  justify-between min-w-0">
                      <div className="">
                        <h3 className="text-[#8a8f98]">Build for developers</h3>
                        <p className="font-semibold text-[#fff]">
                          Build you own add-ons with the Linear API
                        </p>
                      </div>
                      <div className="flex items-center justify-center text-[#8a8f98] border border-[#1c1c1f] rounded-[50%] p-[10px] group-hover/mask:color-[#f7f8f8] group-hover/mask:bg-[#232326] group-hover/mask:border-[#232326]">
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
                          <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="block h-[48px] mt-[calc(48,0)-1px] w-[1px] min-w-[1px] min-h-[1px] select-none"></div>
            <div className="flex items-center justify-center gap-[8px]">
              <button
                onClick={scrollLeft}
                className={`w-[40px] h-[40px] inline-flex items-center justify-center shrink-0 text-[#f7f8f8] rounded-[9999px] transition-all ${
                  atStart
                    ? "bg-[#1a1a1c] opacity-50 cursor-not-allowed"
                    : "bg-[#28282c] hover:bg-[#35353a] "
                }`}
              >
                <svg
                  className=""
                  color="#9c9da1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#9c9da1"
                >
                  <path d="M9.78 4.78a.75.75 0 0 0-1.06-1.06l-4 4a.75.75 0 0 0-.007 1.054l3.903 4a.75.75 0 0 0 1.073-1.048l-3.385-3.47L9.78 4.78Z"></path>
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className={`w-[40px] h-[40px] inline-flex items-center justify-center shrink-0 text-[#f7f8f8] rounded-[9999px] transition-all ${
                  atEnd
                    ? "bg-[#1a1a1c] opacity-50 cursor-not-allowed"
                    : "bg-[#28282c] hover:bg-[#35353a] "
                }`}
              >
                <svg
                  className=""
                  color="#9c9da1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#9c9da1"
                >
                  <path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
