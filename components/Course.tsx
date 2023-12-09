"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const Course = () => {
  interface Module {
    title: string;
  }

  const modules = [
    {
      title: "Tugas Liburan"
    }
  ];
  const headers = [
    "Format: TugasLiburan_(NIM)_CAAS"
  ];
  return (
    <div className="container" id="course">
      <h1
        className="flex justify-center text-2xl font-viga font-bold mb-3 md:text-3xl"
        style={{ color: "#231f20" }}
      >
         ❯ Submit Your Task ❮
      </h1>
      <p
        className="flex justify-center text-[15px] md:text-[20px] lg:text-[23px] text-center font-viga font-regular mb-16 md:mb-20"
        style={{ color: "#ba2025" }}
      >
        *Please double-check your assignment before submitting.*
      </p>
      <div className="flex flex-wrap gap-10 items-center justify-center md:gap-14 lg:gap-20 lg:mx-10 xl:mx-20">
        {modules.map((module, index) => (
            <div
              className="flex flex-col items-center group relative"
              key={index}
            >
              <div className="flex justify-between border border-gray-400 w-80 h-52 p-4 rounded-md xl:w-96 xl:h-60">
                <div className="flex-grow self-center">
                  <h1
                    className="text-center mt-4 font-viga font-regular text-[24px]"
                    style={{ color: "#231f20" }}
                  >
                    {module.title}
                  </h1>
                  <h1
                    className="mb-4 text-center mt-4 font-plus-jakarta-sans font-semibold text-[18px]"
                    style={{
                      color: "#231f20",
                    }}
                  >
                    {headers[index]}
                  </h1>
                  <div className="border-t border-gray-400 mt-4 p-2">
                    <div className="text-center">
                      <button
                        className="mt-2 bg-red-500 p-2 text-white font-plus-jakarta-sans font-semibold hover:bg-gray-500 cursor-pointer p-2 rounded-full"
                        style={{ padding: "5px 25px" }}
                        onClick={() => window.open('https://github.com/Arcfoz/caweb', '_blank')}
                        // disabled={index < 1}
                      >
                        Submit Here
                        {/* {index <= 1 ? "Submit Closed" : "Submit Here"} */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
