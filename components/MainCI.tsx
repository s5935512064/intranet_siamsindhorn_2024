"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Wrap from "./Wrap";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const MainCI: FC<Props> = (): JSX.Element => {
  return (
    <Wrap>
      <div
        id="mainci"
        className="w-full relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7 py-16 "
      >
        <div className="flex flex-col lg:col-span-2 ">
          <p className="font-semibold">MAIN FONT</p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col justify-center items-start relative w-full min-h-[150px]">
              <p className="text-[#a18b59] font-semibold text-4xl md:text-5xl xl:text-6xl">
                Montserat
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <span className="font-bold">Bold</span>
                <span className="font-medium">| Medium</span>
                <span className="">| Regular</span>
              </p>
              <p className="text-8xl xl:text-9xl scale-150 absolute text-[#a18b59] font-bold opacity-45 right-[20%]">
                Aa
              </p>
            </div>

            <div className="flex flex-col justify-center items-start relative  w-full min-h-[150px]">
              <p className="text-[#a18b59] font-semibold text-4xl md:text-5xl xl:text-6xl">
                Noto Sans Thai
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <span className="font-bold">หนา</span>
                <span className="font-medium">| หนาปานกลาง</span>
                <span className="">| ปกติ</span>
              </p>
              <p className="text-8xl xl:text-9xl scale-[1.7] absolute text-[#a18b59] font-bold opacity-45 right-[20%] -translate-y-2">
                กขค
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">MAIN COLOUR</p>

          <div className="w-full grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 ">
              <div className="w-full aspect-square bg-[#a18b59] rounded-md flex items-end justify-center p-2 drop-shadow-sm">
                <p className="text-white">#a18b59</p>
              </div>

              <div className="w-full aspect-square bg-[#c2b17a] rounded-md flex items-end justify-center p-2 drop-shadow-sm ">
                <p className="text-white">#c2b17a</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full aspect-square bg-[#151514] rounded-md flex items-end justify-center p-2 drop-shadow-sm">
                <p className="text-white">#151514</p>
              </div>

              <div className="w-full aspect-square bg-[#423f3d] rounded-md flex items-end justify-center p-2 drop-shadow-sm">
                <p className="text-white">#423f3d</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full aspect-square bg-[#ffffff] rounded-md flex items-end justify-center p-2 drop-shadow-sm">
                <p className="text-[#151514]">#ffffff</p>
              </div>

              <div className="w-full aspect-square bg-[#f2f2f2] rounded-md flex items-end justify-center p-2 drop-shadow-sm">
                <p className="text-[#151514]">#f2f2f2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full hidden xl:flex items-center justify-between translate-y-12">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
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
            to="overview"
            spy={true}
            smooth={true}
            offset={0}
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

export default MainCI;
