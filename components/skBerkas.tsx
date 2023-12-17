"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Skberkas = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAccordionClick = (id: number) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever the element comes into view
  });

  return (
    <div className="container h-96" id="skberkas">
      <h1
        className="flex justify-center text-3xl font-viga font-regular mb-4"
        ref={ref}
        style={{
          color: "#231f20",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(-20%)",
          transition: "transform 2s, opacity 2.5s",
        }}
      >
        ❯ Requirement ❮
      </h1>
      <div
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(15%)",
          opacity: inView ? 1 : 0,
          transition: "transform 2s, opacity 1s",
        }}
        className="flex h-full flex-row items-center"
      >
        <div
          className="w-1/2 justify-center items-center space-y-7 -mt-3 p-[19px] lg:space-y-10 lg:p-[40px]"
          style={{ backgroundColor: "ba2025" }}
        >
          <h2
            className="text-[21px] font-viga font-regular text-center"
            style={{ color: "#231f20" }}
          >
            Terms and Conditions
          </h2>
          <ol
            className="list-decimal ml-10 space-y-2 mx-auto text-base font-plus-jakarta-sans font-semibold leading-relaxed text-[19px] lg:text-[20px] lg:space-y-4"
            style={{ color: "#231f20" }}
          >
            <li className="">Believe in The One Almighty God</li>
            <li className="">An Active Student of Telkom University</li>
            <li className="">Student of FTE and FRI Batch 2021,2022, 2023</li>
            <li className="">Logic & Critical Thinking</li>
            <li className="">BASIC Programming IS PLUS</li>
            <li className="">Interest in Software Development area</li>
          </ol>
        </div>
        <div className="w-1/2 ">
          <div className="join join-vertical w-full">
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-1"
                onClick={() => handleAccordionClick(1)}
                checked={activeAccordion === 1}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                CV in ATS-Friendly Format
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Curriculum Vitae (CV) reflecting your educational background,
                  experience, and skills.<br />
                  <Link
                    href="https://drive.google.com/file/d/1zaVxmaSS8HRxb9tKd6Yw8Cv2sKUELHJR/view?usp=drivesdk"
                    target="_blank"
                  >
                    🔗Link Contoh CV ATS
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-2"
                onClick={() => handleAccordionClick(2)}
                checked={activeAccordion === 2}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Formal Photo 4x6 & Portfolio (if there is one, it&apos;s better)
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  If wearing a hijab, use a square scarf, and if not, tie your
                  hair neatly.<br />
                  <Link
                    href="https://drive.google.com/file/d/175IXyCm0MqK78dpRcuE8gFbvKOg06S6V/view?usp=drivesdk"
                    target="_blank"
                  >
                    🔗Link Contoh Formal Photo
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-2"
                onClick={() => handleAccordionClick(3)}
                checked={activeAccordion === 3}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                KSM & KHS
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  The latest semester transcript should include detailed course
                  grades as well as formal evidence of the student's academic
                  performance during the study period.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-3"
                onClick={() => handleAccordionClick(4)}
                checked={activeAccordion === 4}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Self Description
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Document containing a description of yourself, including
                  hobbies, interests, or other personal aspects you&apos;d like
                  to share.
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-4"
                onClick={() => handleAccordionClick(5)}
                checked={activeAccordion === 5}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Motivation Letter
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Your motivation for becoming an assistant.<br />
                  <Link
                    href="https://drive.google.com/file/d/1LynFik_Kq7a7fy-FJLHeaZTV9Atlct1b/view?usp=drivesdk"
                    target="_blank"
                  >
                    🔗Link Contoh Motivation Letter
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="collapse collapse-arrow join-item border border-base-300"
              style={{ backgroundColor: "#ba2025" }}
            >
              <input
                type="radio"
                name="my-accordion-5"
                onClick={() => handleAccordionClick(6)}
                checked={activeAccordion === 6}
              />
              <div
                className="collapse-title text-[17px] font-viga font-regular"
                style={{ color: "#f4f4f4" }}
              >
                Essay
              </div>
              <div
                className="collapse-content"
                style={{ backgroundColor: "#f4f4f4", color: "#231f20" }}
              >
                <p className="mt-5 font-plus-jakarta-sans font-semibold">
                  Essay on one of the following topics:
                </p>
                <ol className="list-decimal font-plus-jakarta-sans font-regular text-gray-900 text-2 mt-2 ml-4">
                  <li>Routing Protocol</li>
                  <li>Linux Environment</li>
                  <li>IoT Protocol and Connectivity</li>
                  <li>Cloud Computing</li>
                  <li>Software Development (Web/App)</li>
                  <li>AIoT (Artificial Intelligence IoT)</li>
                </ol>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skberkas;
