"use client";

const WorkflowSection = () => {
  return (
    <section className="WorkflowSection">
      <div className="container">
        <div className="content">
          <div className="grid-root">
            <div
              className="flex flex-col items-center"
              style={{ gridArea: "a" }}
            >
              <div className="flex items-center gap-[8px] hover: group">
                <div className="bg-[#859AFF] w-[14px] h-[8px] rounded-[9999px]"></div>
                <span className="flex items-center gap-[5px]">
                  Workflows and integrations{" "}
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
              <h2 className="text-[56px]">Collaborate acroos tools and team</h2>
            </div>
            <div className="" style={{ gridArea: "b" }}>
              <p>
                Expand the capabilities of the Linear system with a wide variety
                of integrations that keep everyone in your organization aligned
                and focused.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
