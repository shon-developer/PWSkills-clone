import React from "react";

const StatsItems = ({ id, image, title, count }) => {
  return (
    <div className="w-full flex flex-col items-center py-14 gap-6 statsdiv">
      <img src={image} alt="books" />
      <p className="text-4xl text-gray-800 font-roboto font-semibold statsp">
        {count}
      </p>
      <h2 className="text-gray-500 text-3xl font-semibold font-roboto tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default StatsItems;
