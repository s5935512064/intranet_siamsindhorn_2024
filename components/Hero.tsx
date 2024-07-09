"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const Hero: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div
        id="hero"
        className="w-full relative min-h-[50vh] py-10 flex flex-col  items-center justify-center "
      >
        <div className="w-full flex-1 relative flex justify-center items-center">
          <Image
            src={"/assets/hero.png"}
            alt="hero"
            sizes="100vw"
            width={0}
            height={0}
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="w-full h-full xl:-mt-[200px]"
          />
        </div>

        <div className="w-full hidden xl:flex items-center justify-end translate-y-6">
          <Link
            activeClass="active"
            to="mainci"
            spy={true}
            smooth={true}
            offset={-80}
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
    </>
  );
};

export default Hero;
