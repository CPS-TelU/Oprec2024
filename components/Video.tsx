"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import RegistrationButton from "./ui/registration-button";
import Timer from "./Timer";
import bgImage from "@/public/Landing.png";
import Image from "next/image";
import { preload } from "react-dom";

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <div className="mt-5 md:mt-7">
      <div
        style={{
          width: "60%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden lg:block"
      >
         <Image
          src={bgImage}
          alt="Background Image"
          width={1000}
          height={1000}
          loading="eager"
          priority={true}
        />
      </div>
      <div
        style={{
          width: "89%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="hidden md:block lg:hidden"
      >
        <Image
          src={bgImage}
          alt="Background Image"
          width={1000}
          height={1000}
          loading="eager"
          priority={true}
        />
      </div>
      <div
        style={{
          width: "85%",
          margin: "2vh auto 0",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        className="md:hidden"
      >
        <Image
          src={bgImage}
          alt="Background Image"
          width={1000}
          height={1000}
          loading="eager"
          priority={true}
        />
      </div>

      <Timer/>

      <div className="flex flex-col items-center mt-5">
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
  );
};

export default Video;
