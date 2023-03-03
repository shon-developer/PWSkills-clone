import React from "react";
import { s1, s2, s3, s4, s5, s6 } from "../../img/img";

const StatsTwo = () => {
  return (
    <div className="w-full bg-gray-200 py-12">
      <div className="w-full bg-gray-200">
        <div className="flex flex-col justify-center items-center pb-24">
          <h1 className="text-[#5A4DBA] text-2xl md:text-3xl lg:text-5xl font-semibold px-2">
            Our Acheiver's Work With
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-12 pb-20">
          <img className="w-[150px] h-[45px]" src={s1} alt="img" />
          <img className="w-[150px] h-[45px]" src={s2} alt="img" />
          <img className="w-[150px] h-[45px]" src={s3} alt="img" />
          <img className="w-[150px] h-[45px]" src={s4} alt="img" />
          <img className="w-[150px] h-[45px]" src={s5} alt="img" />
          <img className="w-[150px] h-[45px]" src={s6} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default StatsTwo;
