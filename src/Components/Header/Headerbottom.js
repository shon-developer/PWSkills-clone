import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { courseItems } from "../../Constants/Constant";
import { moreItems } from "../../Constants/Constant";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Headerbottom = () => {
  const [courseList, setCourseList] = useState(false);
  const [moreList, setMoreList] = useState(false);
  console.log(courseList);
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="hidden xxl:inline-flex justify-center items-center gap-16 font-poppins font-semibold text=gray-800">
          {/* course dropdown */}
          <div className="relative">
            <span onClick={() => setCourseList(!courseList)}>
              Courses
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </span>

            {courseList && (
              <div>
                <ul
                  className="absolute w-60 bg-white border-[1px] top-10 left-0 flex flex-col gap-1 
                z-50"
                >
                  {courseItems.map((items) => (
                    <li
                      key={items.id}
                      className="text-sm tracking-wide cursor-pointer font-poppins px-2 py-2"
                    >
                      {items.title}
                      <NavigateNextIcon />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {/* navlists*/}
          <span>PW Skills Lab</span>
          <span>Job Portal</span>
          <span>Experience Portal</span>
          <span>Become and Affiliate</span>
          <span>Hall of Fame</span>

          {/* more list*/}
          <div className="relative">
            <span>
              More
              <span onClick={() => setMoreList(!moreList)}>
                <KeyboardArrowDownIcon />
              </span>
            </span>
            {moreList && (
              <div>
                <ul className="absolute w-52 h-52 bg-white top-10 left-5 shadow-dropdownShadow flex flex-col gap-1 z-50 dropDownshadow">
                  {moreItems.map((e) => (
                    <li
                      key={e.id}
                      className="text-sm text-gray-500 cursor-pointer font-poppincs px-2 py-2"
                    >
                      {e.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerbottom;
