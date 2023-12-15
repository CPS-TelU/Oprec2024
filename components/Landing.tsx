"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/Landing.png";
import { useInView } from "react-intersection-observer";
import Timer from "./Timer";
import RegistrationButton from "./ui/registration-button";

const Landing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });

  return (
    <div className="hero min-h-screen">
      <div
        className="hero-content flex-col"
      >
        <Image
          src={bgImage}
          alt="Background Image"
          width={1000}
          height={1000}
          loading="eager"
          priority={true}
          style={{borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",}}
        />
        {/* <div
          style={{
            color: "#231f20",
          }}
        >
          <h1 className="flex justify-center text-[30px] font-viga font-bold  md:text-[70px]">
            CYBER RECRUITMENT
          </h1>
        </div> */}
        <Timer />

        <div className="flex flex-col items-center -mt-3">
          <p
            className="font-regular text-center font-viga text-lg md:text-2xl lg:text-2xl"
            style={{ color: "#231f20" }}
          >
            What are you still waiting for?
          </p>
          <p
            className="font-regular text-center font-viga text-lg mb-5 md:text-2xl lg:text-2xl lg:mt-1"
            style={{ color: "#231f20" }}
          >
            Start Your Journey Now!
          </p>
          <div className="mt-5 md:scale-125 lg:scale-150 lg:mt-8">
            <RegistrationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
