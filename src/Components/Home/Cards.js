import React from "react";
import { cardContents } from "../../Constants/Constant";
import CardItems from "./CardItems";

const Cards = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full py-12 flex flex-col justify-center items-center gap-6  ">
          <h1 className="text-[#5a4bda] text-3xl lg:text-5xl font-semibold">
            Community Programs
          </h1>
          <p className="text-gray-500 font-poppins text-sm md:text-lg">
            Open to all pro-live classes on Youtube for free.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-14">
          {cardContents.map((item) => (
            <CardItems
              key={item.id}
              image={item.image}
              title={item.title}
              teacher={item.teacher}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
