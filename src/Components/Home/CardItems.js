import React from "react";

const CardItems = ({ id, image, title, teacher, status }) => {
  return (
    <div className="shadow-cardShadow rounded-lg flex flex-col ml-12 md:ml-0 items-start jusitfy-start w-[80%] lg:w-full py-6">
      <div className="flex item-center justify-center  px-2">
        <img className="w-[90%] pt-4 pb-1" src={image} alt="card" />
      </div>
      <div className="px-6">
        <h2 className="text-[#5a4bda] text-2xl font-roboto font-semibold pb-8">
          {title}
        </h2>
        <p className="text-md text-gray-700 font-poppins">{teacher}</p>
        <h2 className="font-roboto font-semibold text-lg text-gray-800 py-2 pb-4">
          {status}
        </h2>
      </div>
    </div>
  );
};

export default CardItems;
