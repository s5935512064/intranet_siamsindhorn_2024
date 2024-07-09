"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Wrap from "./Wrap";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  exit: { opacity: 0, x: 0, y: 0 },
};

type Props = {};

const MainFeature: FC<Props> = (): JSX.Element => {
  return (
    <Wrap>
      <div
        id="mainfeature"
        className="w-full relative flex flex-col gap-7 py-16"
      >
        <p className="font-semibold text-[#a18b59] uppercase">main feature</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          <div className="md:row-start-1">
            <Image
              src={"/assets/main-feature-03.png"}
              alt="feature-03"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full "
            />
          </div>

          <div className="row-start-1 md:col-start-2 col-span-2 w-full relative">
            <Image
              src={"/assets/main-feature.png"}
              alt="feature"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full scale-90 "
            />
          </div>

          <div className="row-start-2 md:row-start-1">
            <Image
              src={"/assets/main-feature-02.png"}
              alt="feature-02"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full "
            />
          </div>
        </div>

        <div className="col-span-3 w-full hidden xl:flex items-center justify-between translate-y-12">
          <Link
            activeClass="active"
            to="overview"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            className="flex items-center gap-1 uppercase group cursor-pointer hover:bg-[#f2f2f2] px-5 py-2 rounded-full duration-200 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-5 shrink-0 animate-bounce duration-200 transition-all "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
            PREV SLIDE
          </Link>

          <Link
            activeClass="active"
            to="feature_1"
            spy={true}
            smooth={true}
            offset={50}
            duration={300}
            className="flex items-center gap-1 uppercase group cursor-pointer hover:bg-[#f2f2f2] px-5 py-2 rounded-full duration-200 "
          >
            NEXT SLIDE{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-5 shrink-0 animate-bounce duration-200 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Wrap>
  );
};

export default MainFeature;
