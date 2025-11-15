"use client";

import Logo from "@/components/common/Logo";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="Header w-full border-b border-[rgb(28,29,29)] sticky top-0 z-9999 bg-black">
      <nav className="flex items-center h-full ">
        <div className="container flex h-[64px]">
          <div className="relative w-full">
            <ul className=" list-none flex items-center gap-[8px] min-h-[64px] ">
              <li className=" flex flex-[1_1] ">
                <span className="flex items-center h-[32px]">
                  <Logo />
                </span>
              </li>
              <li
                className={` flex flex-col gap-6  transition-[2s] rounded-[8px]  ${
                  isOpen ? "text-white bg-[#323232] " : "text-[#8A8F98] "
                } '`}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a
                  href="/features"
                  className="flex items-center tablet:text-[299px]  h-[32px] text-[14px] p-[0_12px] font-medium "
                >
                  Product
                </a>
                <div
                  className={`absolute top-[60px] z-[99] border border-[#2e2e2e] rounded-[10px] p-[6px] bg-black  ${
                    isOpen ? "flex" : "hidden"
                  }`}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="bg-[hsla(0,0%,100%,.05)] grid grid-cols-[40%_60%] gap-[40px]  p-[20px_30px] border-1 border-[#2e2e2e] rounded-[10px] ">
                    <div className="left relative flex flex-col  gap-[10px] pb-[20px]   after:border-l after:border-[hsla(0,0%,100%,.05)] after:absolute after:right-[0] after:inset-y-[-20] ">
                      <h4 className="text-[#62666D] text-[14px] ">
                        Core features
                      </h4>
                      <div className="hover:bg-[#2e2e2e] p-[10px] -ml-[10px] mr-[20px] rounded-[10px]">
                        <a href="plan">
                          <h3 className="text-[13px]">Plan</h3>
                          <p className="text-[12px]">
                            Set the product direction with projects and
                            initiatives
                          </p>
                        </a>
                      </div>
                      <div className="hover:bg-[#2e2e2e] p-[10px] -ml-[10px] mr-[20px] rounded-[10px]">
                        <a href="build">
                          <h3 className="text-[14px]">Build</h3>
                          <p className="text-[12px]">
                            Make progress with issue tracking and cycle planning
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className=" right">
                      <div className="">
                        <h4 className="text-[#8A8F98]">More</h4>
                        <div className="">
                          <h3>Customer requests</h3>
                          <p>Manage user feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  className=" items-center text-[#8A8F98] h-[32px] text-[14px] p-[0_12px] font-medium hidden lg:flex"
                  href=""
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  className=" items-center text-[#8A8F98] h-[32px] text-[14px] p-[0_12px] font-medium hidden lg:flex"
                  href=""
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className=" items-center text-[#8A8F98] h-[32px] text-[14px] p-[0_12px] font-medium hidden lg:flex"
                  href=""
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  className=" items-center text-[#8A8F98] h-[32px] text-[14px] p-[0_12px] font-medium hidden lg:flex"
                  href=""
                >
                  Now
                </a>
              </li>
              <li className="hover:bg-[#323232]   text-[#8A8F98] rounded-[8px]  hover:text-[red]">
                <a
                  className=" items-center h-[32px] text-[14px] p-[0_12px] font-medium hidden lg:flex"
                  href=""
                >
                  Contact
                </a>
              </li>
              <div className="buttons flex flex-[1_1]  justify-end gap-[8px] ">
                <li className="flex items-center text-[#8A8F98] h-[32px] text-[14px]">
                  <a
                    href="/login"
                    className="flex items-center w-full h-full p-[0px_12px] text-[#8A8F98] text-[14px]"
                  >
                    Log in
                  </a>
                </li>
                <li className="flex items-center text-[#8A8F98] h-[32px] text-[14px]  ">
                  <a
                    href="/signup"
                    className="flex items-center w-full h-full p-[0px_12px] rounded-[8px] bg-[#e6e6e6] text-[#08090a] shadow-[0px_8px_2px_0px_transparent,0px_5px_2px_0px_rgba(0,0,0,.01),0px_3px_2px_0px_rgba(0,0,0,.04),0px_1px_1px_0px_rgba(0,0,0,.07),0px_0px_1px_0px_rgba(0,0,0,.08)] "
                  >
                    Sign up
                  </a>
                </li>
              </div>
              <li className="ml-[calc(1*max(env(safe-area-inset-right),24px)+8]">
                {" "}
                <button className="h-[64px] aspect-[1] mr-[-24px] flex items-center justify-center lg:hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 7H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
