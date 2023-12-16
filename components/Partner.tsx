"use client";
import React from "react";
import Image from "next/image";
import styles from "./Partner.module.css";
import { useInView } from "react-intersection-observer";

const Partner = () => {
  const partners_list = [
    { src: "/partner/hmtt.png", href: "https://www.instagram.com/hmtt_telco/" },
    {
      src: "/partner/labrl.png",
      href: "https://www.instagram.com/rangkaianlistriklab/",
    },
    {
      src: "/partner/imv.png",
      href: "https://www.instagram.com/imv.laboratory/",
    },
    {
      src: "/partner/embun.png",
      href: "https://www.instagram.com/embununitel/",
    },
    {
      src: "/partner/Antenna.png",
      href: "https://www.instagram.com/antena.lab/",
    },
    {
      src: "/partner/elkom.jpg",
      href: "https://www.instagram.com/elkomlaboratory/",
    },
    {
      src: "/partner/daskom.png",
      href: "https://www.instagram.com/telu.daskom/",
    },//ga ada
    {
      src: "/partner/tekdig.jpg",
      href: "https://www.instagram.com/tekdig.telu/",
    },
    {
      src: "/partner/sko.png",
      href: "https://www.instagram.com/opticomm.laboratory/",
    },
    {
      src: "/partner/dastran.png",
      href: "https://www.instagram.com/dastranlaboratory/",
    },
    {
      src: "/partner/dsp.jpg",
      href: "https://www.instagram.com/dsp.laboratory/",
    },//ga ada
    { src: "/partner/mbc.png", 
      href: "https://www.instagram.com/mbclab/" 
    },
    {
      src: "/partner/adaptive.png",
      href: "https://www.instagram.com/adaptivenetlab/",
    },
    {
      src: "/partner/sea.png",
      href: "https://www.instagram.com/sea.laboratory/",
    },
    {
      src: "/partner/Nanosatellite.png",
      href: "https://www.instagram.com/isatellitesociety/",
    },//ga ada
    {
      src: "/partner/aicoms.png",
      href: "https://www.instagram.com/aicoms.telkomuniv/",
    },
    {
      src: "/partner/elektronika.jpg",
      href: "https://www.instagram.com/electronicslaboratory/",
    },
    { src: "/partner/upci.png", 
      href: "https://www.instagram.com/upcilab/" 
    },//ga ada
    {
      src: "/partner/mobcomm.png",
      href: "https://www.instagram.com/mobilecommlaboratory/",
    },//ga ada
  ];
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });
  return (
    <div className={styles.partnerArea} id="partner">
      <div className="container mx-auto sm:px-4">
        <h1
          ref={ref}
          style={{
            color: "#231f20",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(-20%)",
            transition: "transform 2s, opacity 2.5s",
          }}
          className="hidden lg:flex justify-center text-3xl font-viga font-regular mb-16"
        >
          ❯ Our Media Partner ❮
        </h1>
        <h1
          style={{
            color: "#231f20",
          }}
          className="flex justify-center text-3xl font-viga font-regular mb-16 lg:hidden"
        >
          ❯ Our Media Partner ❮
        </h1>

        {/* PARTNER SMALL SCREEN */}

        <div className="flex flex-wrap md:hidden">
          <div className="pr-4 pl-4">
            <div className={styles.partnerWrap}>
              <ul className={styles.partnerWrapUl}>
                {partners_list.map((item, index) => (
                  <li key={index} className={styles.partnerWrapUlLi}>
                    <a href={item.href}>
                      <Image
                        src={item.src}
                        alt={"partner"}
                        width={70}
                        height={70}
                        className={styles.partnerWrapUlLiImg}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PARTNER MD SCREEN */}

        <div className="hidden md:flex flex-wrap lg:hidden">
          <div className="w-full pr-4 pl-4">
            <div className={styles.partnerWrap}>
              <ul className={styles.partnerWrapUl}>
                {partners_list.map((item, index) => (
                  <li key={index} className={styles.partnerWrapUlLi}>
                    <a href={item.href}>
                      <Image
                        src={item.src}
                        alt={"partner"}
                        width={100}
                        height={100}
                        className={styles.partnerWrapUlLiImg}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PARTNER LARGE & ABOVE SCREEN */}

        <div
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(15%)",
            opacity: inView ? 1 : 0,
            transition: "transform 2s, opacity 1s",
          }}
          className="hidden lg:flex flex-wrap"
        >
          <div className="w-full pr-4 pl-4">
            <div className={styles.partnerWrap}>
              <ul className={styles.partnerWrapUl}>
                {partners_list.map((item, index) => (
                  <li key={index} className={styles.partnerWrapUlLi}>
                    <a href={item.href}>
                      <Image
                        src={item.src}
                        alt={"partner"}
                        width={110}
                        height={110}
                        className={styles.partnerWrapUlLiImg}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
