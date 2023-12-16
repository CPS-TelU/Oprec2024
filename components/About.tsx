"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/pohon.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });

  return (
    <div className="hero min-h-screen " id="about">
      <div className="hero-content flex-col xl:flex-row lg:gap-12">
        <Image
          className="hidden xl:block"
          src={bgImage}
          alt="Background Image"
          width={500}
          height={300}
          loading="eager"
          priority={true}
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-20%)",

            transition: "transform 2s, opacity 1s",
          }}
        />
        <Image
          className="xl:hidden"
          src={bgImage}
          alt="Background Image"
          width={500}
          height={300}
          loading="eager"
          priority={true}
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1s",
          }}
        />
        <div
          style={{
            color: "#231f20",
          }}
        >
          <h1
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(-20%)",
              transition: "transform 2s, opacity 1s",
            }}
            className="hidden xl:flex justify-center text-[30px] font-viga font-bold  md:text-[40px]"
          >
            CYBER RECRUITMENT
          </h1>
          <h1
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 1s",
            }}
            className="flex justify-center text-[30px] font-viga font-bold  md:text-[40px] xl:hidden"
          >
            CYBER RECRUITMENT
          </h1>
          <p
            ref={ref}
            style={{
              transform: inView ? "translateY(0)" : "translateY(10%)",
              opacity: inView ? 1 : 0,
              transition: "transform 2s, opacity 1s",
            }}
            className="text-center xl:text-justify font-plus-jakarta-sans font-semibold py-6 md:px-10 lg:px-24 xl:px-0 lg:text-center text-[14.6px] md:text-[21.4px] lg:text-[19.9px]"
          >
            Welcome to Cyber Recruitment, where we're thrilled to invite you to
            be a part of an exciting and transformative journey. Cyber
            Recruitment is not just a selection process, it's an opportunity for
            you to showcase your skills and passion. As a participant, you will
            undergo a series of tests designed to identify individuals who will
            join us as valuable members of our dynamic team of assistants.
            Whether you're an experienced professional or a newcomer, Cyber
            Recruitment is your gateway to personal and professional growth.
            Join us, and let's embark on this journey together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
