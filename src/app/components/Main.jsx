import React from "react";
import Image from "next/image";

// import Wave from "../../../public/Wave.svg";
import HowItWorks from "../../../public/HowItWorks.svg";
import ToDoSection from "./ToDoSection";

export default function Main() {
  return (
    <div className="flex justify-center w-full h-full text-white px-20 pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold">Check your financial health</h1>
        <p className="mt-4 font-thin text-xl max-w-sm text-center">
          Use WeathoMeter to get a free report card for your finances- within
          minutes!{" "}
        </p>
        <button className="w-52 h-12 text-xl font-semibold mt-6 rounded-full shadow-md shadow-[#074553] bg-[#FB7306] hover:bg-[#d46102]">
          Get Started
        </button>

        {/* HERO SECTION */}
        <div className="flex w-full justify-around items-center px-20 mt-10">
          {/* LEFT TEXT */}
          <div className="flex flex-col space-y-8 -mt-32">
            <div className="flex items-center space-x-2">
              <Image src={"/check.svg"} width={32} height={32} alt="check-mark"/>
              <p className="decoration-white underline underline-offset-[14px] text-xl font-semibold">
                Expected Retirement Age
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={"/check.svg"} width={32} height={32} alt="check-mark"/>
              <p className="decoration-white underline underline-offset-[14px] text-xl font-semibold">
                Identify Mistakes
              </p>
            </div>
          </div>

          {/* PHONE */}
          <Image
            src={"/Phone.svg"}
            width={525}
            height={515}
            className="ml-44"
          />

          {/* RIGHT TEXT */}
          <div className="flex flex-col space-y-8 -mt-32">
            <div className="flex items-center space-x-2">
              <Image src={"/check.svg"} width={32} height={32} alt="check-mark"/>
              <p className="decoration-white underline underline-offset-[14px] text-xl font-semibold">
                Personalized Road Map
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={"/check.svg"} width={32} height={32} alt="check-mark"/>
              <p className="decoration-white underline underline-offset-[14px] text-xl font-semibold">
                Tips To Improve
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div
          id="wavy-bg"
          className="w-full bg-cover bg-no-repeat h-screen -mt-52"
        >
          <div className="flex w-full justify-center mt-64">
            <div className="">
              <h1 className="text-5xl font-semibold text-center">
                How it works?
              </h1>
              <div className="flex flex-col items-center ml-40 -mt-4 w-[70%] h-[40px]">
                <Image src={HowItWorks} className="-mt-14" alt="how-it-works-steps"/>
                <div className="flex justify-between -mt-36 h-full w-[105%] px-6">
                  <p className="max-w-[120px] text-sm pl-4">Answer few questions</p>
                  <p className="max-w-[120px] text-sm">
                    Register using phone and OTP
                  </p>
                  <p className="max-w-[132px] text-sm text-center">
                    Get report and personal roadmap
                  </p>
                </div> 
                <button className="w-52 p-2 h-12 text-xl font-semibold mt-20 rounded-full shadow-md shadow-[#074553] bg-[#FB7306] hover:bg-[#d46102]">
          Get Started
        </button>
              </div>
            </div>
            
          </div>
        </div>
        <ToDoSection/>
      </div>
    </div>
  );
}
