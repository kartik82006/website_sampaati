"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";

export const Timeline = ({ data }) => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-white dark:bg-neutral-950 font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I've been working on Aceternity for the past 2 years. Here's a
          timeline of my journey.
        </p>
      </div>

      <div ref={lineRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Timeline marker */}
            <div className="sticky z-40 top-40 self-start max-w-xs lg:max-w-sm md:w-full flex flex-col md:flex-row items-center">
              <div className="h-10 w-10 absolute left-3 flex items-center justify-center rounded-full bg-white dark:bg-black">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Timeline content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full overflow-hidden">
              <h3 className="md:hidden text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </motion.div>
        ))}

        {/* Vertical timeline progress line */}
        <div
          style={{ height: `${lineHeight}px` }}
          className="absolute left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
