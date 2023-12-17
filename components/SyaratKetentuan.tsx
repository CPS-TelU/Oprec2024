"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const ContentSplit: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });
  return (
    <div
      className="flex flex-col justify-center items-center p-2 mt-3 md:"
      id="daftar"
    >
      <h1
        className="flex justify-center text-3xl font-viga font-regular mb-16 md:text lg:text"
        ref={ref}
        style={{
          color: "#231f20",
          opacity: inView ? 1 : 0,
          transition: "opacity 2.5s",
        }}
      >
        ❯ Requirement ❮
      </h1>
      <div
        ref={ref}
        style={{
          backgroundColor: "#ba2025",
          border: "1px solid #231f20",
          transform: inView ? "translateX(0)" : "translateX(-50%)",
          opacity: inView ? 1 : 0,
          transition: "transform 2s, opacity 1s",
        }}
        className="rounded-lg p-4 w-full max-w-xl text-white"
      >
        <div>
          <h2 className="text-lg font-viga font-regular mb-5 text-center">
            Terms and Conditions
          </h2>
          <ol className="list-decimal pl-4 ml-4 space-y-2 mx-auto font-plus-jakarta-sans font-semibold text-base leading-relaxed text-[14.5px]">
            <li className="">Believe in The One Almighty God</li>
            <li className="">An Active Student of Telkom University</li>
            <li className="">Student of FTE and FRI Batch 2021,2022, 2023</li>
            <li className="">Logic & Critical Thinking</li>
            <li className="">BASIC Programming is a plus</li>
            <li className="">Interested  in Software Development area</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentSplit;
