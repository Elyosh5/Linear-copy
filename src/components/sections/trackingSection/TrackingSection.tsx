"use client;";

import Image from "next/image";

const TrackingSection = () => {
  return (
    <section className="overflow-hidden TrackingSection">
      <div className="container">
        <div className="content">
          <div className="">
            <div className="">
              <div className="flex items-center gap-[8px] hover: group">
                <div className="bg-[#D4B144] w-[14px] h-[8px] rounded-[9999px]"></div>
                <span className="flex items-center gap-[5px]">
                  Task tracking and sprint planning{" "}
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
              <h1 className="text-[56px] font-[538]">
                Issue tracking you&apos;ll enjoy using
              </h1>
              <p className="text-[#8a8f98] text-[17px] mb-[30px] w-[374px] leading-[24.5px] tracking-[0]">
                <span className="text-white">
                  Optimized for speed and efficiency.
                </span>{" "}
                Create tasks in seconds, discuss issues in context, and breeze
                through your work in views tailored to you and your team.
              </p>
            </div>
            <div className="tracking-screenshot overflow-hidden relative flex flex-col items-center pointer-events-none justify-center before:block before:mt-[-4%] after:block after:mb-[-6%]  ">
              <Image
                alt="A screenshot of an issue board view in Linear showing three high-priority tasks"
                data-nosnippet="true"
                data-loaded="true"
                loading="lazy"
                width="3200"
                height="1620"
                decoding="async"
                data-nimg="1"
                className=" max-w-[1600px] h-auto block  max-md:w-[150vw] max-md:ml-[-20vw] max-md:max-w-[initial]"
                color="transparent"
                src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              />
            </div>
            <div className="flex ">
              <div className="flex flex-col lg:flex-row border-t-2 border-b-2 border-[hsla(0,0%,100%,.05)]  ">
                <div className="py-[50px] relative pr-[48px] after:absolute after:top-0 after:bottom-0 after:right-0 after:h-full after:w-[2px] after:bg-[hsla(0,0%,100%,.05)] transform-[translateX(calc(32px/2+2px/2px))]">
                  <div className="">
                    <h2 className="text-[21px] font-[510]">
                      Build momentum with Cycles
                    </h2>
                    <p className="text-[17px] mb-[30px]">
                      Create healthy routines and focus your team on what work
                      should happen next.
                    </p>
                  </div>
                  <div className="momentum ">
                    <div className="relative rounded-[18px] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,.07),transparent)] before:rounded-[inherit] before:p-[1px,1px] before:mask-[linear-gradient(#000,#000)content-box,linear-gradient(#000,#000)] ">
                      <div className="p-[16px_24px] rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,.08),hsla(0,0%,100%,.02),hsla(0,0%,100%,0)55%)] overflow-hidden relative before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,.17),transparent)] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded-[inherit] before:content-[''] before:p-[1px,1px] before:mask-[linear-gradient(#000,#000)content-box,linear-gradient(#000,#000)]">
                        <h3>Cycle 55</h3>
                        <div className="flex gap-[20px]">
                          <div className="flex gap-[8px] items-center">
                            <div className="bg-[#91959C] w-[6px] h-[6px] rounded-[1px]"></div>
                            <span>Scop</span>
                          </div>
                          <div className="flex gap-[8px] items-center">
                            <div className="bg-[#DEB949] w-[6px] h-[6px] rounded-[1px]"></div>
                            <span>Started</span>
                          </div>
                          <div className="flex gap-[8px] items-center">
                            <div className="bg-[#6771C5] w-[6px] h-[6px] rounded-[1px]"></div>
                            <span>Completed</span>
                          </div>
                        </div>
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="362"
                            height="181"
                            fill="none"
                            viewBox="0 0 362 181"
                          >
                            <path
                              stroke="#F2BE01"
                              strokeWidth="1.732"
                              d="M16.59 154.168l9.019-11.048A58.405 58.405 0 0157.91 123.1a58.305 58.305 0 008.413-2.592l17.132-6.73a102.814 102.814 0 0017.499-8.888 102.84 102.84 0 0143.359-15.335l23.815-2.738h4.729a46.985 46.985 0 0023.593-6.352 46.972 46.972 0 0112.523-5.03l29.221-7.085 39.65-15.208 6.398-1.637a139.053 139.053 0 0134.461-4.337h24.319"
                            ></path>
                            <path
                              stroke="#5E6AD2"
                              strokeDasharray="4.35 10.86"
                              strokeWidth="1.732"
                              d="M17.135 153.625l37.477-24.985 35.305-23.899 22.86-15.776a71.928 71.928 0 0134.713-12.467c20.962 0 41.521-5.753 59.438-16.632l3.024-1.835 39.65-26.072 7.891-5.534a139.046 139.046 0 0175.354-25.132l9.09-.293"
                            ></path>
                            <path
                              stroke="#525355"
                              stroke-linecap="round"
                              strokeWidth="1.732"
                              d="M17.135 78.65H26.1a133.08 133.08 0 0039.795-6.09l1.168-.367a123.893 123.893 0 0029.73-13.87v0a123.889 123.889 0 0158.543-19.267l7.007-.467a139.042 139.042 0 0035.617-7.13l6.56-2.236 29.873-5.974 37.345-13.028a139.078 139.078 0 0119.1-5.171l2.027-.397a139.04 139.04 0 0126.698-2.587h22.373"
                            ></path>
                            <path
                              stroke="#5E6AD2"
                              strokeWidth="1.732"
                              d="M16.59 153.625l21.527-7.304a102.646 102.646 0 0118.178-4.371 102.726 102.726 0 0031.887-10.16l10.423-5.323 11.671-5.627a91.076 91.076 0 0139.556-9.038 91.07 91.07 0 0028.272-4.499l39.451-12.882 44.972-20.288a139.05 139.05 0 0157.179-12.3h24.402"
                            ></path>
                            <path
                              stroke="#fff"
                              stroke-linecap="round"
                              strokeWidth="0.999"
                              d="M17.135 153.081v7.156"
                              opacity="0.1"
                            ></path>
                            <path
                              fill="#8A8F98"
                              d="M.276 175l2.864-7.903h1.2L7.24 175H6.153l-1.66-4.657a31.445 31.445 0 01-.366-1.103 117.05 117.05 0 01-.494-1.666h.197a56.284 56.284 0 01-.499 1.687c-.138.442-.253.803-.345 1.082L1.368 175H.276zm1.448-2.196v-.891h4.063v.891H1.724zm6.467 4.413v-8.147h.944v.949h.106a6.15 6.15 0 01.281-.397c.12-.163.294-.308.52-.435.227-.128.533-.191.918-.191a2.3 2.3 0 011.3.371c.378.247.673.599.885 1.055.216.457.324.999.324 1.629 0 .629-.106 1.174-.319 1.634-.212.459-.507.815-.885 1.066a2.28 2.28 0 01-1.3.376c-.375 0-.677-.063-.907-.191a1.71 1.71 0 01-.53-.44 5.684 5.684 0 01-.287-.414h-.074v3.135h-.976zm2.615-2.96c.371 0 .679-.099.923-.297a1.79 1.79 0 00.557-.801 3.14 3.14 0 00.19-1.119c0-.406-.061-.774-.185-1.103a1.725 1.725 0 00-.557-.78c-.247-.194-.557-.291-.928-.291-.36 0-.665.091-.912.275a1.645 1.645 0 00-.552.759 3.196 3.196 0 00-.186 1.14c0 .435.062.821.186 1.157.127.332.315.592.562.779.248.188.549.281.902.281zm3.884.743v-5.93h.944v.918h.064c.11-.305.304-.547.584-.727.279-.184.595-.276.949-.276.07 0 .154.002.25.005.098.004.176.007.233.011v.976a2.942 2.942 0 00-.573-.053c-.283 0-.536.06-.759.18a1.335 1.335 0 00-.525.483 1.32 1.32 0 00-.19.711V175h-.977zm6.803 0v-.743l2.631-2.837c.294-.319.536-.596.727-.833.194-.241.341-.469.44-.684.099-.216.148-.446.148-.69 0-.272-.065-.509-.196-.711a1.271 1.271 0 00-.53-.461 1.71 1.71 0 00-.753-.159c-.297 0-.556.06-.775.18a1.25 1.25 0 00-.509.515c-.12.219-.18.475-.18.769h-.987c0-.467.108-.877.324-1.231.219-.357.514-.633.885-.827a2.672 2.672 0 011.268-.297c.474 0 .893.099 1.257.297.365.194.65.458.86.79.208.332.313.707.313 1.125 0 .286-.054.565-.16.838-.102.268-.283.574-.54.917-.259.343-.623.762-1.093 1.257l-1.714 1.82v.063h3.64V175h-5.056zm6.468 0v-.743l2.63-2.837c.294-.319.536-.596.727-.833.194-.241.341-.469.44-.684.1-.216.149-.446.149-.69 0-.272-.066-.509-.197-.711a1.271 1.271 0 00-.53-.461 1.71 1.71 0 00-.753-.159c-.297 0-.555.06-.774.18-.22.12-.39.292-.51.515-.12.219-.18.475-.18.769h-.987c0-.467.108-.877.324-1.231.22-.357.514-.633.886-.827a2.672 2.672 0 011.267-.297c.474 0 .893.099 1.258.297.364.194.65.458.859.79.208.332.313.707.313 1.125 0 .286-.053.565-.16.838-.102.268-.282.574-.54.917-.259.343-.623.762-1.093 1.257l-1.713 1.82v.063h3.638V175H27.96zm300.583.412v-7.903h1.469l1.925 4.938c.046.12.097.27.154.451.06.177.122.369.186.578a24.224 24.224 0 01.35 1.193h-.223l.164-.551.186-.616c.067-.212.131-.41.191-.594.06-.183.113-.337.159-.461l1.899-4.938h1.469v7.903h-1.013v-4.487c0-.163.002-.349.005-.557l.011-.663c.007-.234.012-.471.016-.711.007-.241.012-.472.016-.695h.085c-.074.244-.154.495-.239.753-.081.255-.163.501-.244.738-.078.236-.152.454-.223.652-.07.194-.131.355-.18.483l-1.75 4.487h-.897l-1.777-4.487a13.03 13.03 0 01-.175-.472l-.223-.637-.244-.743a58.54 58.54 0 00-.259-.774h.095c.007.202.012.419.016.652.007.23.012.464.016.701a44.031 44.031 0 01.021 1.273v4.487h-.986zm11.209.138a2.43 2.43 0 01-1.024-.212 1.738 1.738 0 01-.727-.621c-.18-.272-.27-.603-.27-.992 0-.339.067-.615.201-.827.135-.212.313-.379.536-.499.226-.124.476-.215.748-.276.272-.06.546-.107.822-.143.354-.046.64-.081.859-.106.223-.025.388-.067.494-.127.109-.06.164-.163.164-.308v-.032c0-.244-.046-.451-.138-.62a.894.894 0 00-.408-.393c-.181-.092-.409-.138-.684-.138-.28 0-.52.045-.722.133a1.43 1.43 0 00-.764.732l-.938-.302c.152-.361.355-.642.61-.844.258-.205.542-.35.854-.435.314-.088.625-.132.933-.132.205 0 .433.024.684.074.255.049.501.145.738.286.237.142.431.35.583.626.152.276.228.644.228 1.104v3.914h-.955v-.806h-.063a1.588 1.588 0 01-.329.429 1.826 1.826 0 01-.578.366 2.188 2.188 0 01-.854.149zm.175-.854c.35 0 .645-.067.886-.202.244-.138.427-.316.551-.535.128-.22.191-.449.191-.69v-.817c-.039.046-.124.089-.254.128a4.492 4.492 0 01-.441.095c-.166.028-.327.053-.482.074l-.372.043c-.23.028-.443.078-.641.148a1.121 1.121 0 00-.478.297c-.117.131-.175.31-.175.536 0 .202.051.371.154.509a.991.991 0 00.43.308c.183.071.394.106.631.106zm4.112.716v-5.93h.944v.918h.064c.109-.305.304-.547.583-.727a1.69 1.69 0 01.95-.276c.07 0 .154.002.249.005.099.004.177.007.233.011v.976a2.931 2.931 0 00-.572-.053c-.283 0-.536.06-.759.18a1.331 1.331 0 00-.525.483 1.322 1.322 0 00-.191.711v3.702h-.976zm8.368 0v-6.63l.074.058a1.014 1.014 0 01-.355.35 2.262 2.262 0 01-.621.26 3.065 3.065 0 01-.812.101v-.849h.038a1.961 1.961 0 001.41-.573c.181-.18.313-.387.398-.62h.881v7.903h-1.013zm5.162.106c-.534 0-1.006-.094-1.416-.281a2.337 2.337 0 01-.96-.785 1.955 1.955 0 01-.345-1.14c0-.333.067-.641.202-.923.134-.287.318-.526.551-.716.237-.191.502-.313.796-.366v-.043a1.568 1.568 0 01-.923-.642 1.93 1.93 0 01-.339-1.119c0-.403.104-.762.312-1.077.213-.318.501-.567.865-.748a2.786 2.786 0 011.257-.275c.467 0 .882.092 1.247.275.367.181.656.43.864.748.212.315.318.674.318 1.077 0 .417-.114.79-.344 1.119a1.548 1.548 0 01-.907.642v.043c.286.053.546.175.779.366.237.19.425.429.563.716.138.282.206.59.206.923 0 .427-.116.808-.35 1.14a2.325 2.325 0 01-.96.785c-.41.187-.882.281-1.416.281zm0-.886c.347 0 .645-.056.897-.169.254-.117.45-.278.588-.483.142-.205.212-.447.212-.727 0-.29-.074-.546-.222-.769a1.527 1.527 0 00-.61-.525 1.864 1.864 0 00-.865-.196c-.329 0-.622.065-.88.196a1.526 1.526 0 00-.605.525 1.35 1.35 0 00-.223.769c0 .28.069.522.207.727.138.205.334.366.589.483.258.113.562.169.912.169zm0-3.723c.279 0 .525-.055.737-.165a1.248 1.248 0 00.695-1.161c0-.266-.06-.494-.18-.685a1.168 1.168 0 00-.499-.45 1.632 1.632 0 00-.753-.165c-.286 0-.539.055-.758.165a1.198 1.198 0 00-.504.45 1.285 1.285 0 00-.175.685c0 .261.06.493.18.695.12.198.29.353.509.466.219.11.469.165.748.165z"
                            ></path>
                            <path
                              stroke="#fff"
                              stroke-linecap="round"
                              strokeWidth="0.999"
                              d="M344.653 153.081v7.156"
                              opacity="0.1"
                            ></path>
                            <path
                              fill="#8A8F98"
                              d="M163.742 175.331l2.864-7.904h1.199l2.901 7.904h-1.087l-1.66-4.658a31.102 31.102 0 01-.366-1.103 100.8 100.8 0 01-.493-1.665h.196a52.512 52.512 0 01-.499 1.686c-.138.442-.253.803-.345 1.082l-1.617 4.658h-1.093zm1.448-2.196v-.891h4.063v.891h-4.063zm6.467 4.413V169.4h.944v.95h.107c.067-.106.16-.239.281-.398a1.61 1.61 0 01.519-.435c.227-.127.533-.191.918-.191.492 0 .925.124 1.3.372.378.247.673.599.885 1.055.216.456.324.999.324 1.628 0 .63-.106 1.174-.318 1.634-.212.46-.508.815-.886 1.066a2.282 2.282 0 01-1.3.377c-.374 0-.677-.064-.907-.191a1.75 1.75 0 01-.53-.44 5.742 5.742 0 01-.286-.414h-.075v3.135h-.976zm2.615-2.96c.372 0 .679-.099.923-.297.248-.198.433-.465.557-.801.127-.336.191-.709.191-1.119 0-.407-.062-.775-.186-1.103a1.716 1.716 0 00-.557-.78c-.247-.195-.556-.292-.928-.292-.36 0-.665.092-.912.276a1.64 1.64 0 00-.552.758 3.223 3.223 0 00-.185 1.141c0 .435.062.82.185 1.156.128.333.315.592.563.78.247.187.548.281.901.281zm3.884.743V169.4h.945v.918h.063c.11-.304.304-.546.584-.727.279-.183.595-.275.949-.275.071 0 .154.001.249.005.099.003.177.007.234.011v.976a2.121 2.121 0 00-.212-.032 2.954 2.954 0 00-.361-.022c-.283 0-.536.061-.759.181a1.335 1.335 0 00-.525.482 1.327 1.327 0 00-.191.711v3.703h-.976zm6.803 0v-.743l2.631-2.838c.294-.318.536-.596.727-.833.194-.24.341-.468.44-.684.099-.215.149-.445.149-.689 0-.273-.066-.509-.197-.711a1.266 1.266 0 00-.53-.462 1.708 1.708 0 00-.753-.159c-.297 0-.555.06-.775.181-.219.12-.389.291-.509.514-.12.219-.18.476-.18.769h-.987c0-.466.108-.877.324-1.23.219-.357.514-.633.886-.828a2.668 2.668 0 011.267-.297c.474 0 .893.099 1.257.297.365.195.651.458.86.791.208.332.313.707.313 1.124 0 .287-.053.566-.16.838-.102.269-.282.575-.541.918-.258.343-.622.762-1.092 1.257l-1.713 1.819v.064h3.638v.902h-5.055zm8.86.106c-.453 0-.856-.089-1.21-.266a2.29 2.29 0 01-.859-.742 2.603 2.603 0 01-.429-1.114h1.018c.081.347.244.636.488.87.247.23.578.345.992.345.403 0 .748-.119 1.034-.356.29-.237.513-.578.668-1.023.156-.446.234-.985.234-1.618h-.064a2.415 2.415 0 01-.509.562 2.353 2.353 0 01-.663.366 2.31 2.31 0 01-.774.127 2.41 2.41 0 01-1.247-.334 2.54 2.54 0 01-.907-.928 2.697 2.697 0 01-.334-1.347c0-.495.111-.944.334-1.348.226-.406.539-.728.939-.965.403-.24.877-.355 1.421-.345.326.004.651.067.976.191.329.12.628.322.897.605.272.279.49.659.652 1.14.163.481.244 1.086.244 1.814 0 .697-.067 1.316-.201 1.857-.131.541-.324.999-.579 1.374a2.578 2.578 0 01-.917.848 2.514 2.514 0 01-1.204.287zm.085-3.74a1.614 1.614 0 001.209-.525c.156-.166.278-.354.366-.562.088-.209.133-.43.133-.663 0-.301-.075-.582-.223-.844a1.776 1.776 0 00-.594-.636 1.544 1.544 0 00-.86-.244 1.59 1.59 0 00-.853.233 1.71 1.71 0 00-.6.632 1.802 1.802 0 00-.217.88c0 .322.07.614.212.875.141.262.334.471.578.626.248.152.53.228.849.228z"
                            ></path>
                            <path
                              stroke="#fff"
                              stroke-linecap="round"
                              strokeWidth="0.999"
                              d="M180.621 153v7.156"
                              opacity="0.1"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="py-[50px] pl-[48px]">
                    <div className="">
                      <h2 className="text-[21px] font-[510]">
                        Manage income work with Triage
                      </h2>
                      <p className="text-[17px] mb-[30px]">
                        Review and assign incoming bug reports, feature
                        requests, and other unplanned work.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="relative rounded-[18px] p-[8px] border-1 border-[hsla(0,0%,100%,.07)] ">
                        <div className="before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded-[inherit] before:p-[1px,1px] before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,.07),transparent)] ">
                          <div className="p-[16px_24px]  bg-[linear-gradient(134deg,hsla(0,0%,100%,.08),hsla(0,0%,100%,.02),hsla(0,0%,100%,0)55%] rounded-[10px] ">
                            <h3>Triage</h3>
                            <div className="z-0 relative bg-[hsla(0,0%,100%,.05)] border-1 border-[hsla(0,0%,100%,.1)] px-[15px] py-[10px] rounded-[8px] ">
                              <p>Users report unexpected rate limiting</p>
                              <div className="flex gap-[8px] items-center">
                                <Image
                                  src="https://webassets.linear.app/images/ornj730p/production/74717706c51f3c14ebe2851e0076def007ebafdd-1000x1000.png?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                  alt="Avatar of Paco"
                                  className="rounded-[50%] h-[18px] w-[18px]"
                                />
                                <span className="text-[#62666d]">tom</span>
                              </div>
                              <div className="z-100 absolute border-1 border-[hsla(0,0%,100%,.1)] bg-[hsla(0,0%,100%,.1)] rounded-[8px] p-[3px] top-[50%] left-[90px] backdrop-blur-[12px]">
                                <div className="flex gap-[8px] px-[8px] py-[4px] w-[170px] rounded-[6px] items-center text-[rgb(138,143,152)] hover:bg-[hsla(0,0%,100%,.1)] hover:text-white">
                                  <svg
                                    className=""
                                    color="currentColor"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    role="img"
                                    focusable="false"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1 10.75A4.25 4.25 0 0 0 5.25 15h1a.75.75 0 0 0 0-1.5h-1a2.75 2.75 0 0 1-2.75-2.75v-5.5A2.75 2.75 0 0 1 5.25 2.5h5.5a2.75 2.75 0 0 1 2.75 2.75v.997a.75.75 0 0 0 1.5 0V5.25A4.25 4.25 0 0 0 10.75 1h-5.5A4.25 4.25 0 0 0 1 5.25z"></path>
                                    <path d="M10.75 14.25a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2z"></path>
                                  </svg>
                                  <span>Accept</span>
                                </div>
                                <div className="flex gap-[8px] px-[8px] py-[4px] w-[170px] rounded-[6px] items-center text-[rgb(138,143,152)] hover:bg-[hsla(0,0%,100%,.1)]  hover:text-white">
                                  <svg
                                    className=""
                                    color="currentColor"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    role="img"
                                    focusable="false"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M12.2517 1C13.7705 1 15.0017 2.23122 15.0017 3.75V8.25C15.0017 9.76878 13.7705 11 12.2517 11H11.001L11.0017 12.25C11.0017 13.7688 9.77049 15 8.25171 15H3.75C2.23122 15 1 13.7688 1 12.25V7.75C1 6.23122 2.23122 5 3.75 5H5V3.75C5 2.23122 6.23122 1 7.75 1H12.2517ZM5 6.5H3.75C3.05964 6.5 2.5 7.05964 2.5 7.75V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H8.25171C8.94206 13.5 9.50171 12.9404 9.50171 12.25V12L9.501 9.5L9.50171 7.75C9.50171 7.05964 8.94206 6.5 8.25171 6.5H6.66217H5ZM12.2517 2.5H7.75C7.05964 2.5 6.5 3.05964 6.5 3.75V5H8.25171C9.77049 5 11.0017 6.23122 11.0017 7.75L11.001 9.5H12.2517C12.9421 9.5 13.5017 8.94036 13.5017 8.25V3.75C13.5017 3.05964 12.9421 2.5 12.2517 2.5Z"></path>
                                  </svg>
                                  <span>Mark as duplicate</span>
                                </div>
                                <div className="flex gap-[8px] px-[8px] py-[4px] w-[170px] rounded-[6px] items-center text-[rgb(138,143,152)] hover:bg-[hsla(0,0%,100%,.1)]  hover:text-white">
                                  <svg
                                    className=""
                                    color="currentColor"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    role="img"
                                    focusable="false"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1 11.25C1 13.3211 2.67893 15 4.75 15L5 15C5.41421 15 5.75 14.6642 5.75 14.25C5.75 13.8358 5.41421 13.5 5 13.5L4.75 13.5C3.50736 13.5 2.5 12.4926 2.5 11.25L2.5 4.75C2.5 3.50736 3.50736 2.5 4.75 2.5L11.25 2.5C12.4926 2.5 13.5 3.50736 13.5 4.75V5C13.5 5.41421 13.8358 5.75 14.25 5.75C14.6642 5.75 15 5.41421 15 5V4.75C15 2.67893 13.3211 1 11.25 1L4.75 1C2.67893 1 1 2.67893 1 4.75L1 11.25Z"></path>
                                    <path d="M9.53033 8.46967L11.5 10.4393L13.4697 8.46967C13.7626 8.17678 14.2374 8.17678 14.5303 8.46967C14.8232 8.76256 14.8232 9.23744 14.5303 9.53033L12.5607 11.5L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2374 14.8232 13.7626 14.8232 13.4697 14.5303L11.5 12.5607L9.53033 14.5303C9.23744 14.8232 8.76256 14.8232 8.46967 14.5303C8.17678 14.2374 8.17678 13.7626 8.46967 13.4697L10.4393 11.5L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967Z"></path>
                                  </svg>
                                  <span>Decline</span>
                                </div>
                              </div>
                            </div>
                            <div className="px-[15px] py-[10px]">
                              <p>RangeError: Index 0 out of range</p>
                              <div className="flex gap-[8px] items-center text-[rgb(138,143,152)]">
                                <Image
                                  src="https://webassets.linear.app/images/ornj730p/production/265a1c61a0335e4df0248ea38bf642ebb3693bda-2264x2256.jpg?w=72&amp;q=95&amp;auto=format&amp;dpr=2"
                                  alt="Avatar of Romain"
                                  className="rounded-[50%] h-[18px] w-[18px]"
                                />
                                <span className="text-[#62666d]">romain</span>
                              </div>
                            </div>
                            <div className="px-[15px] py-[10px]">
                              <p className="font-[17px]">
                                Pressing &quot;Enter&quot; quickly when logging
                                in via email generates multiple emails
                              </p>
                              <div className="flex gap-[8px] items-center text-[rgb(138,143,152)]">
                                <Image
                                  src="https://webassets.linear.app/images/ornj730p/production/4d081a7a9ee2575014ab150f2d74cc3e2266a937-300x300.jpg?w=72&q=95&auto=format&dpr=2"
                                  alt="Avatar of Tuomas"
                                  className="rounded-[50%] h-[18px] w-[18px]"
                                />
                                <span className="text-[#62666d]">tuomas</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-[32px]"
              style={{ gridTemplateAreas: "'a a a a a a b b b b b b'" }}
            >
              <div
                className="z-1 "
                style={{
                  gridColumn: `1 / span 6`,
                  gridRow: `1 / 1`,
                }}
              >
                <h2 className="text-[21px] ">Linear insights</h2>
                <p className="mb-[20px] mt-[10px]">
                  Take the guesswork out of product planning with realtime
                  analytics and reporting dashboards.
                </p>
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
              <div
                className="relative overflow-hidden insight-img after:absolute after:inset-0"
                style={{
                  gridColumn: `1 / -1`,
                  gridRow: `1 / 1`,
                }}
              >
                <Image
                  alt="A screenshot of a Cycle time chart"
                  data-nosnippet="true"
                  data-loaded="true"
                  loading="lazy"
                  width="1740"
                  height="930"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-none w-[150%] h-auto ml-[-15%] mb-[-25%]"
                  color="transparent"
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f9cf4c26-8956-4aa2-0ffb-26066dfbdf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                />
              </div>
            </div>
            <div className="m-[24px_0] bg-[hsla(0,0%,100%,.05)] h-[1px] w-full"></div>
            <div
              className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-[40px] "
              style={{ gridTemplateAreas: "'a a a b b b c c c d d d'" }}
            >
              <div className="" style={{ gridArea: "a" }}>
                <span className="flex items-center gap-[8px]">
                  <span>
                    <svg
                      className=""
                      color="#d0d6e0"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                      ></path>
                    </svg>
                  </span>
                  Tailored workflows
                </span>
                <span className="text-[#8a8f98] text-[0.875rem] ">
                  Track progress across custom issue flows for your team.
                </span>
              </div>
              <div className="" style={{ gridArea: "b" }}>
                <span className="flex items-center gap-[8px]">
                  <span>
                    <svg
                      className=""
                      color="#d0d6e0"
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.93213 2.21398C7.66484 1.90793 8.49512 1.93032 9.21389 2.28028L14.28 4.74739C15.2242 5.20709 15.2441 6.55895 14.3138 7.04673L9.2874 9.6826C8.48012 10.1058 7.51988 10.1058 6.7126 9.6826L1.68618 7.04673C0.75589 6.55895 0.775786 5.20709 1.71995 4.74739L6.78611 2.28028L6.93213 2.21398ZM8.55132 3.67054C8.24643 3.52213 7.89768 3.50303 7.58179 3.61428L7.44868 3.67054L2.83947 5.91363L7.41491 8.31243C7.7819 8.50486 8.2181 8.50486 8.58509 8.31243L13.1595 5.91363L8.55132 3.67054Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9045 10.0768C14.272 9.90435 14.7242 10.0333 14.9153 10.365C15.1063 10.6966 14.9634 11.1047 14.5959 11.2772L9.49912 13.6693C8.55934 14.1102 7.44077 14.1102 6.50099 13.6693L1.40417 11.2772L1.33776 11.2428C1.01976 11.0547 0.905685 10.676 1.08483 10.365C1.26402 10.054 1.67295 9.92085 2.02626 10.0477L2.0956 10.0768L7.19241 12.468L7.38675 12.5464C7.84801 12.7022 8.36492 12.6757 8.80769 12.468L13.9045 10.0768Z"
                      ></path>
                    </svg>
                  </span>
                  Custom views
                </span>
                <span className="text-[#8a8f98] text-[0.875rem] ">
                  Switch between list and board. Group issues with swimlanes.
                </span>
              </div>
              <div className="" style={{ gridArea: "c" }}>
                <span className="flex items-center gap-[8px]">
                  <span>
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                      ></path>
                    </svg>
                  </span>
                  Filters
                </span>
                <span className="text-[#8a8f98] text-[0.875rem] ">
                  Refine issue lists down to what’s most relevant to you.
                </span>
              </div>
              <div className="" style={{ gridArea: "d" }}>
                <span className="flex items-center gap-[8px]">
                  <span>
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.80596 1.18963C10 0.467371 9.5 1.97074 9.5 2.97299C9.5 3.97525 10.5 5.45947 11 5.97974C11.5 6.5 12 6.98199 12 6.98199C12.8575 7.87856 13 8.98398 13 9.98874V10.0159C13 12.7685 10.7614 15 8 15C5.23858 15 3 12.7685 3 10.0159C3 9 3.31522 8.48521 3.25 7.5C3.21077 6.90743 3 6.5 3 6C3 5.15486 4.34867 5.95895 5 6.5L6 7.45656V5.53023C6 4.11834 6.66687 2.78883 7.8 1.94169L8.80596 1.18963ZM8 13.9978C9.25 13.9978 10.5 13.5604 10.5 11.811C10.5 10.4429 9.48069 9.09715 8.63778 8.40117C8.35964 8.17151 8 8.38851 8 8.74969V10.4989C8 10.8601 7.63032 11.1027 7.30003 10.9582L6.19997 10.4771C5.86968 10.3327 5.49618 10.5754 5.51681 10.936C5.58908 12.1989 5.9719 13.9978 8 13.9978Z"
                      ></path>
                    </svg>
                  </span>
                  SLAs
                </span>
                <span className="text-[#8a8f98] text-[0.875rem] ">
                  Automatically apply deadlines to time-sensitive tasks.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
