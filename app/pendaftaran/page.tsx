"use client";
import React from "react";
import Form from "@/components/formulir";
import NavForm from "@/components/navbarform";
import Fullform from "@/components/fullform";

const page = () => {
  return (
    <>
      {/* <div className="sticky top-0 z-50">
        <NavForm />
      </div>
      <div className="-mt-[30px] md:-mt-[20px] lg:mt-[30px]">
        <Form />
      </div> */}
      <Fullform/>
    </>
  );
};

export default page;
