import React from "react";
import { Timeline } from "./ui/TimeLine";

/*
    Fix the import path casing issue by ensuring the import matches the actual file name.
    If your file is named 'TimeLine.jsx', keep the import as is.
    If your file is named 'timeline.jsx', change the import to:
*/
export default function timelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/templates/startup-1.webp"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-2.webp"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-3.webp"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
          />
        </div>
      ),
    },
    {
      title: "2023",
      content: <p className="text-sm text-neutral-700">Cool stuff happened.</p>,
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
