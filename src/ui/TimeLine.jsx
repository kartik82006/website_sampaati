import React from "react";

const Timeline = ({ items }) => {
  return (
    <section className="relative max-w-4xl mx-auto py-12 px-4">
      {/* Vertical line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        isLeft?{}:{}
        return (
          <div
            key={index}
            className={`relative w-full mb-10 flex `}
          >{/* Left or Right alignment based on index */}
            <div className={`w-full md:w-1/2 px-4 ${isLeft?"":"order-2"}` }>
              <div className=" p-6 rounded-lg shadow-md bg-[#0B101E]">
                <h3 className="text-cyan-600 font-bold mb-2">{item.year}</h3>
                <p className="text-white">{item.description}</p>
              </div>                                           
            </div>

            {/* Dot on line */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-500 border-4 border-white rounded-full shadow-md z-10"></div>

          <div className={`w-full md:w-1/2 px-4 ${isLeft?":order-2":""} `}>
              <div className=" p-6 rounded-lg shadow-md bg-[#0B101E] ">
                <img src={item.image} alt="image1" />
              </div>
            </div>

          </div>

          
        );
      })}
    </section>
  );
};

export default Timeline;
