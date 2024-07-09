"use client";
import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  subTitle,
  children,
}: {
  subTitle: string | React.ReactNode;
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.95, 1.0] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      className=" flex items-center justify-center relative p-2  "
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 xl:py-30 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <Header
            translate={translate}
            titleComponent={titleComponent}
            subTitle={subTitle}
          />
        </div>

        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent, subTitle }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div mx-auto text-center flex flex-col gap-4"
    >
      {titleComponent}
      <p className="text-xl md:text-2xl xl:text-3xl text-center">{subTitle}</p>
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl -mt-5 mx-auto  w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl transition-all duration-200"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
