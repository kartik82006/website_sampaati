import React from "react";
import Timeline from "./ui/TimeLine";
import { image } from "framer-motion/client";

const timelineData = [
  {
    year: "2019",
    description: "30 words is a simple, fast, and efficient way to create a word counter. It counts the number of words in a given text and returns the result. It is useful for writers, editors, and anyone who needs to keep track of word count.",
    image: "grp_pic1.jpg",
  },
  {
    year: "2020",
    description: "50 words is a simple, fast, and efficient way to create a word counter. It counts the number of words in a given text and returns the result. It is useful for writers, editors, and anyone who needs to keep track of word count.",
    image: "grp_pic2.jpeg",
  },
  {
    year: "2021",
    description: "60 words is a simple, fast, and efficient way to create a word counter. It counts the number of words in a given text and returns the result. It is useful for writers, editors, and anyone who needs to keep track of word count.",
    image: "grp_pic3.jpg",
  },
  {
    year: "2022",
    description: "65 words is a simple, fast, and efficient way to create a word counter. It counts the number of words in a given text and returns the result. It is useful for writers, editors, and anyone who needs to keep track of word count.",
    image: "grp_pic4.jpg",
  },
];

function TimelineDemo() {
  return (
    <div id="journey" className="min-h-screen bg-[#0F172B]">
      <h1 className="text-4xl font-bold text-center pt-10 text-cyan-600 bg-[#0F172B]">
        Sammpaati's Timeline
      </h1>
      <Timeline items={timelineData} />
    </div>
  );
}

export default TimelineDemo;
