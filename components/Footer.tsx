"use client";
import React, { useEffect, useRef, useState, FC } from "react";
import Image from "next/image";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {};

const Footer: FC<Props> = (): JSX.Element => {
  return (
    <>
      <footer className="min-h-[150px] flex items-end w-full bg-[#a18b59] px-10 py-10  md:px-24">
        <p className="text-white">
          Project Collaboration by{" "}
          <span className="text-white font-medium">HR</span> &{" "}
          <span className="text-white font-medium">MKT</span> &{" "}
          <span className="text-white font-medium">IT</span>.
        </p>
      </footer>
    </>
  );
};

export default Footer;
