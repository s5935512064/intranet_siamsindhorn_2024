"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";
import Wrap from "./Wrap";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const Timeline: FC<Props> = (): JSX.Element => {
  return (
    <Wrap>
      <div id="timeline" className="w-full relative flex flex-col gap-7 py-16">
        <p className="font-semibold text-[#a18b59] uppercase">
          Project Management Timeline
        </p>

        <div className="w-full relative ">
          <Image
            src={"/assets/timeline.png"}
            alt="feature"
            sizes="100vw"
            width={0}
            height={0}
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="w-full h-full xl:scale-90 "
          />
        </div>
      </div>
    </Wrap>
  );
};

export default Timeline;
