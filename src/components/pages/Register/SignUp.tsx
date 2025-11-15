"use client";

const SignUp = () => {
  return (
    <div className=" Login">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[100vh]">
          <div className="w-[288px] flex flex-col items-center justify-center gap-[32px]">
            <div className="">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="currentColor"
                aria-label="Linear Logo"
                color="currentColor"
              >
                <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path>
              </svg>
            </div>
            <div className="">
              <h1 className="text-[20px] text-center">Create your workspace</h1>
            </div>
            <div className="flex w-[288px] flex-col items-center gap-[16px]">
              <button className="h-[48px]  text-[14px] rounded-[6px] w-full bg-[rgb(87,91,199)] hover:bg-[rgb(94,105,209)]">
                Continue with Google
              </button>
              <button className="h-[48px]  text-[14px] rounded-[6px] w-full hover:bg-[rgb(38,40,47)] border border-[rgb(44,46,51)]  bg-[rgb(30,32,37)]">
                Continue with email
              </button>
              <button className="h-[48px]  text-[14px] rounded-[6px] w-full hover:bg-[rgb(38,40,47)] border border-[rgb(44,46,51)]  bg-[rgb(30,32,37)]">
                Continue with SAML SSO
              </button>
            </div>
            <p className="text-[14px] text-center">
              By signng up, you agree to our{" "}
              <span className="inline-block group">
                <a
                  className="relative text-white group-hover:underline group-hover:underline-offset-[2.5px] decoration-[1.6px] decoration-[rgb(150,151,153)] "
                  href="terms"
                >
                  Terms of Service
                </a>
              </span>
              <span className="inline-block group">
                <a
                  className="relative text-white group-hover:underline group-hover:underline-offset-[2.5px] decoration-[1.6px] decoration-[rgb(150,151,153)] "
                  href="dpa"
                >
                  Data Processing Agreement
                </a>
              </span>
            </p>
            <p className="text-[14px] ">
              Already have an account?{" "}
              <span className="inline-block group">
                <a
                  className="relative text-white group-hover:underline group-hover:underline-offset-[2.5px] decoration-[1.6px] decoration-[rgb(150,151,153)] "
                  href="/login"
                >
                  Log in
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
