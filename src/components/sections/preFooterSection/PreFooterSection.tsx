"use client";

const PreFooterSection = () => {
  return (
    <div className="PreFooterSection py-[92px]">
      <div className="container">
        <div className="preFooterContent ">
          <div
            className=""
            style={{
              gridArea: "a",
            }}
          >
            <h3
              className="text-[2.5rem] "
              style={{
                textWrap: "balance",
              }}
            >
              <span>Plan the present. Build the future.</span>
            </h3>
          </div>
          <div
            className="flex gap-[8px] items-center justify-end"
            style={{
              gridArea: "b",
            }}
          >
            <button className="bg-[rgba(255,255,255,.15)] border-[.5px] border-[#3e3e44] rounded-[10px] h-[40px] p-[0_16px]">
              Contact sales
            </button>
            <button className="bg-white border-[.5px] text-black rounded-[10px] h-[40px] p-[0_16px]">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooterSection;
