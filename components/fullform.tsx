"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/LogoBlack.png";

const Fullform = () => {
  setTimeout(() => {
    window.location.href = "/";
  }, 9000); // delay 9 sec
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-red-100 to-white-300">
      <div className="w-full mb-20">
        <Image
          src={Logo}
          alt="CPS"
          width={200}
          height={200}
          className="mx-auto w-20 mb-4 animate-bounce sm:w-32 sm:mb-8 md:w-40 md:mb-10 lg:w-44 lg:mb-12"
        />
        <div className="overflow-hidden">
          <p
            className="animate-marquee underline underline-offset-8 font-viga font-regular text-[30px] sm:text-[50.5px]  md:text-[55px] lg:text-[65px]"
            style={{ color: "#231f20" }}
          >
            REGISTRATION ARE CLOSED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fullform;