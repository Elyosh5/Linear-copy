"use client";
import UnderTheHoodSvg from "./UnderTheHoodSvg";

const UnderTheHoodSection = () => {
  return (
    <section className="relative UnderTheHoodSection">
      <div className="container">
        <div className="UnderTheHoodSection-grid-module">
          <div className="" style={{ gridArea: "a" }}>
            <div className="flex items-center gap-[8px] group/sectionTitle cursor-pointer">
              <div className="bg-[#000000] w-[14px] h-[8px] rounded-[9999px] border border-[#62666d]"></div>
              <span className="flex items-center gap-[5px]">
                Under the hood
              </span>
              <svg
                className="transition-all duration-150 ease-in group-hover/sectionTitle:fill-white group-hover/sectionTitle:w-4 group-hover/sectionTitle:h-4 group-hover/sectionTitle:ml-1"
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
            <div className="h-[16px] w-[1px]"></div>
            <h2 className="text-[56px]  tracking-[-.0325em]  leading-[1.1]">
              Build on strong foundations
            </h2>
            <div className="h-[24px] w-[1px] "></div>
            <p>
              Linear is so simple to use, it’s easy to overlook the wealth of
              complex technologies packed under the hood that keep Linear
              robust, safe, and blazing fast.
            </p>
          </div>
          <div className="" style={{ gridArea: "b" }}>
            <div className="h-[16px] w-[1px]"></div>
            <div className="bg-[rgba(255,255,255,.05)] w-full h-[1px]"></div>
            <div className="h-[24px] w-[1px]"></div>
            <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-[40px_48px]">
              <div className="contents">
                <dt>Linear Sync Engine</dt>
                <dd className="text-[#8a8f98] text-[14px] ">
                  Built with a high-performance architecture and an obsessive
                  focus on speed.
                </dd>
              </div>
              <div className=" contents">
                <div className="">
                  <div className="flex  items-center gap-[8px] group/sectionTitle">
                    <span className="flex items-center gap-[5px]">
                      Enterprise-ready security
                    </span>
                    <svg
                      className="transition-all ease-in duration-150 group-hover/sectionTitle:fill-white group-hover/sectionTitle:w-4 group-hover/sectionTitle:h-4 group-hover/sectionTitle:ml-[+4px]"
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
                </div>
                <dd className="text-[#8a8f98] text-[14px] ">
                  Best-in-class security practices keep your work safe and
                  secure at every layer.
                </dd>
              </div>
              <div className="contents">
                <dt>Engineered for scale</dt>
                <dd className="text-[#8a8f98] text-[14px] ">
                  Built for teams of all sizes. From early-stage startups to
                  global enterprises.
                </dd>
              </div>
            </dl>
          </div>
          <div className="" style={{ gridArea: "c" }}>
            <div className="h-[40px] w-[1px] block mt-[calc(40px,0px)]"></div>
            <div className="bg-[rgba(255,255,255,.05)] w-full h-[1px]"></div>
            <div
              className="grid justify-around gap-[8px] grid-cols-[repeat(5,auto)] grid-rows-[1,auto]"
              style={{ gridArea: "unset" }}
            >
              <div className="pt-[32px]">
                <img
                  alt=""
                  data-nosnippet="true"
                  data-loaded="true"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="Image-module__CYTY7q__root"
                  color="transparent"
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/cc904d39-7051-4326-66a3-a8bee9623b00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                />
                <div className="flex gap-[8px] items-center">
                  <span className="text-[#62666d]">SOC 2</span>
                  <svg
                    width="18"
                    height="18"
                    fill="#62666d"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill="#62666d"
                      d="M7.351 1.553a1 1 0 0 1 1.297 0l1.248 1.063a1 1 0 0 0 .57.236l1.634.13a1 1 0 0 1 .917.918l.13 1.634a1 1 0 0 0 .236.57l1.064 1.247a1 1 0 0 1 0 1.298l-1.064 1.248a.999.999 0 0 0-.235.569l-.13 1.634a1 1 0 0 1-.918.918l-1.635.13a1 1 0 0 0-.569.236l-1.248 1.063a1 1 0 0 1-1.297 0l-1.248-1.063a1 1 0 0 0-.57-.236l-1.634-.13a1 1 0 0 1-.917-.918l-.13-1.634a1 1 0 0 0-.236-.57L1.552 8.65a1 1 0 0 1 0-1.298l1.064-1.248a1 1 0 0 0 .236-.569l.13-1.634a1 1 0 0 1 .917-.917l1.635-.13a1 1 0 0 0 .569-.237l1.248-1.063v-.001Z"
                    ></path>
                    <path
                      stroke="#08090a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m5.75 8 1.5 1.5 3-3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,.05)] self-stretch w-[1px]"></div>
              <div className="pt-[32px]">
                <img
                  alt=""
                  data-nosnippet="true"
                  data-loaded="true"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="Image-module__CYTY7q__root"
                  color="transparent"
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/7c88d201-223f-4cd5-ed1b-6bca858be900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                />
                <div className="flex gap-[8px] items-center">
                  <span className="text-[#62666d]">GDPR</span>
                  <svg
                    width="18"
                    height="18"
                    fill="#62666d"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill="#62666d"
                      d="M7.351 1.553a1 1 0 0 1 1.297 0l1.248 1.063a1 1 0 0 0 .57.236l1.634.13a1 1 0 0 1 .917.918l.13 1.634a1 1 0 0 0 .236.57l1.064 1.247a1 1 0 0 1 0 1.298l-1.064 1.248a.999.999 0 0 0-.235.569l-.13 1.634a1 1 0 0 1-.918.918l-1.635.13a1 1 0 0 0-.569.236l-1.248 1.063a1 1 0 0 1-1.297 0l-1.248-1.063a1 1 0 0 0-.57-.236l-1.634-.13a1 1 0 0 1-.917-.918l-.13-1.634a1 1 0 0 0-.236-.57L1.552 8.65a1 1 0 0 1 0-1.298l1.064-1.248a1 1 0 0 0 .236-.569l.13-1.634a1 1 0 0 1 .917-.917l1.635-.13a1 1 0 0 0 .569-.237l1.248-1.063v-.001Z"
                    ></path>
                    <path
                      stroke="#08090a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m5.75 8 1.5 1.5 3-3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,.05)] self-stretch w-[1px]"></div>

              <div className="pt-[32px]">
                <img
                  alt=""
                  data-nosnippet="true"
                  data-loaded="true"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  className="Image-module__CYTY7q__root"
                  color="transparent"
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/3bda4af5-963c-466b-7577-b8b8ec178e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                />
                <div className="flex gap-[8px] items-center">
                  <span className="text-[#62666d]">HIPPA</span>
                  <svg
                    width="18"
                    height="18"
                    fill="#62666d"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      fill="#62666d"
                      d="M7.351 1.553a1 1 0 0 1 1.297 0l1.248 1.063a1 1 0 0 0 .57.236l1.634.13a1 1 0 0 1 .917.918l.13 1.634a1 1 0 0 0 .236.57l1.064 1.247a1 1 0 0 1 0 1.298l-1.064 1.248a.999.999 0 0 0-.235.569l-.13 1.634a1 1 0 0 1-.918.918l-1.635.13a1 1 0 0 0-.569.236l-1.248 1.063a1 1 0 0 1-1.297 0l-1.248-1.063a1 1 0 0 0-.57-.236l-1.634-.13a1 1 0 0 1-.917-.918l-.13-1.634a1 1 0 0 0-.236-.57L1.552 8.65a1 1 0 0 1 0-1.298l1.064-1.248a1 1 0 0 0 .236-.569l.13-1.634a1 1 0 0 1 .917-.917l1.635-.13a1 1 0 0 0 .569-.237l1.248-1.063v-.001Z"
                    ></path>
                    <path
                      stroke="#08090a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="m5.75 8 1.5 1.5 3-3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden max-[920]:hidden">
            <UnderTheHoodSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderTheHoodSection;
