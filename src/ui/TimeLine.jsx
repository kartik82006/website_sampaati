import React from "react";

const Timeline = ({ items }) => {
  return (
    <section className="relative max-w-4xl mx-auto py-12 px-4">
      {/* Vertical line (hide on small screens) */}
      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative w-full mb-16 flex flex-col md:flex-row ${
              isLeft ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Block */}
            <div className="w-full md:w-1/2 px-4">
              <div className="p-6 rounded-lg shadow-md bg-[#0B101E] m-4 hover:border-2 hover:border-cyan-500 duration-300 ease-in-out">
                <h3 className="text-cyan-600 font-bold mb-2">{item.year}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>

            {/* Dot on central line (only on desktop) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-cyan-500 border-4 border-white rounded-full shadow-md z-10"></div>

            {/* Image Block */}
            <div className="w-full md:w-1/2 px-4">
              <div className="p-4 rounded-lg shadow-md bg-[#0B101E] hover:bg-[#1E293B] transition duration-500 ease-in-out transform hover:scale-105 m-2">
                <img src={item.image} alt="timeline" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Timeline;
