import React from "react";
import Card from "./Card";
import Header from "./Header";
import { MdOutlineScience } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { GiPlantsAndAnimals } from "react-icons/gi";
import CTA from "./CTA";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className=" max-w-screen-xl px-5 mx-auto">
        <CTA />

        <div className=" max-w-3xl">
          <h1 className=" text-3xl my-10 font-semibold">Your progress</h1>
          <div>
            <div className=" my-5">
              <p className=" font-medium text-gray-500">Science</p>

              <div className="mt-4 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-1/4 h-2 bg-indigo-500 rounded-full"></div>
              </div>
            </div>
            <div className=" my-5">
              <p className=" font-medium text-gray-500">Mathematics</p>

              <div className="mt-4 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-2/3 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className=" my-5">
              <p className=" font-medium text-gray-500">Biology</p>

              <div className="mt-4 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-1/3 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-3xl my-10 font-semibold">Continue learning</h1>
          <div className=" grid-cols-1 gap-5 md:grid-cols-2 grid xl:grid-cols-3">
            <Card icon={<MdOutlineScience />} name=" Science of Chemistry" />
            <Card icon={<TbMathSymbols />} name=" Mathematics" />
            <Card icon={<GiPlantsAndAnimals />} name=" Biology" />
            <Card icon={<MdOutlineScience />} name=" Science of Chemistry" />
            <Card icon={<TbMathSymbols />} name=" Mathematics" />
            <Card icon={<GiPlantsAndAnimals />} name=" Biology" />
          </div>
        </div>
      </div>
      <div className=" my-40"></div>
    </>
  );
};

export default HomePage;
