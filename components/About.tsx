"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/tenda.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });

  return (
    <div className="hero min-h-screen " id="about">
      <div className="hero-content flex-col xl:flex-row lg:gap-12">
        <Image
          src={bgImage}
          alt="Background Image"
          width={600}
          height={400}
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
              transition: "opacity 1s",
            }}
            className="flex justify-center text-[30px] font-viga font-bold  md:text-[40px]"
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
            className="text-center xl:text-justify font-plus-jakarta-sans font-semibold py-6 md:px-10 lg:px-24 xl:px-0 lg:text-center text-[16.1px] md:text-[21.4px] lg:text-[19.9px]"
          >
            Welcome to Cyber Academy, your gateway to an exciting and dynamic
            learning experience. We&apos;re not just a place to study,
            we&apos;re a vibrant community where knowledge knows no bounds. At
            Cyber Academy, you&apos;ll embark on a journey of exploration and
            innovation. Our program fosters collaboration, helping you build a
            diverse network of knowledge that goes beyond the classroom. We
            believe in the power of learning together, fostering new
            connections, and inspiring each other. Whether you&apos;re a
            seasoned learner or just starting your educational voyage, Cyber
            Academy is your partner in personal and professional growth. Join
            us, and together, let&apos;s embrace the limitless possibilities of
            knowledge and connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
