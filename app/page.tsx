import VideoPlayer from "@/components/Videoplayer";
import About from "@/components/About";
import Course from "@/components/Course";
import SdanK from "@/components/SyaratKetentuan";
import Berkas from "@/components/Berkas";
import Footer from "@/components/Footer";
import NavHome from "@/components/navbarHome";
import React from "react";
import Partner from "@/components/Partner";
import Skberkas from "@/components/skBerkas";
import Videoplayer from "@/components/Videoplayer";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-50">
        <NavHome />
      </div>
      <div className="mb-16 md:mb-32 lg:mb-9">
        <Videoplayer />
      </div>
      <div className="mb-12 md:mb-7">
        <About />
      </div>
      {/* <div className="mb-20 md:mb-32 lg:mb-32">
        <Course />
      </div> */}
      <div className=" md:hidden">
        <SdanK />
      </div>
      <div className=" md:hidden">
        <Berkas />
      </div>
      <div className="hidden md:block md:mb-36">
        <Skberkas />
      </div>
      <div className="mb-32 mt-32">
        <Partner />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
