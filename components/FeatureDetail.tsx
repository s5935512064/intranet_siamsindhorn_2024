"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { ContainerScroll } from "@/components/ui";
import Wrap from "./Wrap";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  data: {
    id: number;
    feature_id: string;
    imgSrc: string;
    title_one: string;
    title_two: string;
    subtitle: string;
    next: string;
    prev: string;
  };
};

const FeatureDetail: FC<Props> = ({ data }): JSX.Element => {
  return (
    <Wrap>
      <div
        id={data.feature_id}
        className="flex flex-col overflow-hidden w-full py-16"
      >
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold dark:text-white">
                {data.title_one}
                <br />
                <span className="text-4xl md:text-[4rem]  xl:text-[6rem] font-bold mt-1 leading-none ">
                  {data.title_two}
                </span>
              </h1>
            </>
          }
          subTitle={data.subtitle}
        >
          <div className="w-full h-full rounded-2xl">
            <Image
              src={data.imgSrc}
              alt="hero"
              sizes="100vw"
              height={720}
              width={1400}
              className=" object-cover h-full object-center "
              draggable={false}
            />
          </div>
        </ContainerScroll>

        <div className="w-full hidden xl:flex items-center justify-between translate-y-12">
          <Link
            activeClass="active"
            to={data.prev}
            spy={true}
            smooth={true}
            offset={50}
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
            to={data.next}
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

export default FeatureDetail;
