"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import Wrap from "./Wrap";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};
const goals = [
  {
    id: 1,
    desc: "Enhance internal organizational communication",
    scImg: "/assets/icon/communication_1264685.svg",
  },
  {
    id: 2,
    desc: "Reduce paper usage and increase sustainability in operations",
    scImg: "/assets/icon/file_2140670.svg",
  },
  {
    id: 3,
    desc: "Support employee learning and skill development",
    scImg: "/assets/icon/business_14163857.svg",
  },
  {
    id: 4,
    desc: "Improve understanding of organizational culture and structure",
    scImg: "/assets/icon/victory_1610669.svg",
  },
  {
    id: 5,
    desc: "Enhance access to internal services and corporate resources",
    scImg: "/assets/icon/customer-service_3322956.svg",
  },
];

const Overview: FC<Props> = (): JSX.Element => {
  return (
    <Wrap>
      <div
        id="overview"
        className="w-full relative flex flex-col gap-4 md:gap-7 py-16"
      >
        <p className="font-semibold text-[#a18b59]">INTRODUCTION</p>

        <div>
          <h1 className="text-lg md:text-xl font-semibold uppercase">
            Overview
          </h1>
          <p className="text-base md:text-lg">
            This project focuses on developing a comprehensive intranet web
            application for our company to improve internal communication,
            increase work efficiency, and promote organizational culture. The
            application will integrate various functions, ranging from news
            updates to document management and internal learning.
          </p>
        </div>

        <div>
          <h1 className="text-lg md:text-xl font-semibold uppercase">
            Challenges
          </h1>
          <ul className="list-outside list-disc pl-4 text-base md:text-lg">
            <li>
              Consolidating scattered information and services into a single
              platform
            </li>
            <li>
              Creating a user-friendly and efficient system for employees at all
              levels
            </li>
            <li>Maintaining the security of internal organizational data</li>
            <li>
              Promoting employee engagement and actual usage of the system
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg md:text-xl font-semibold uppercase">Goals</h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {goals.map((item, index) => (
              <div
                key={index}
                className="w-full h-full border md:aspect-square rounded-lg flex flex-col gap-2 items-center justify-center p-4 md:p-5"
              >
                <div className="size-16 md:size-20 relative">
                  <Image
                    src={item.scImg}
                    alt={`goal-${index + 1}`}
                    sizes="100vw"
                    width={0}
                    height={0}
                    style={{ objectFit: "contain", objectPosition: "center" }}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-center text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden col-span-3 w-full xl:flex items-center justify-between translate-y-12">
          <Link
            activeClass="active"
            to="mainci"
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
            to="mainfeature"
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

export default Overview;
