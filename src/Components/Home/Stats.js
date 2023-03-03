import React from "react";
import StatsItems from "./StatsItems";
import { statsConstant } from "../../Constants/Constant";

const Stats = () => {
  return (
    <div className="w-full py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#5a4bda] text-2xl md:text-3xl lg:text-5xl font-semibold">
            "Pure Hardwork, No shortcuts!"
          </h1>
          <div className="h-[3px] w-[150px] mt-4 bg-orange-400"></div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          {statsConstant.map((item) => (
            <StatsItems
              key={item.id}
              title={item.title}
              image={item.image}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
