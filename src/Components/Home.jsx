import React from "react";
import HeroBar from "./HeroBar";
import LatestCrops from "./LatestCrops";
import Slider from "./Slider";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="w-full mx-auto">

      <HeroBar></HeroBar>

      <div className="w-full mx-auto">
      <Slider></Slider>
      </div>

      <div className="felx flex-col">
        <center><h1 className="font-bold text-4xl bg-green-400 w-full py-3 rounded-md">Latest Crops</h1></center>

        <div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <LatestCrops></LatestCrops>
          <LatestCrops></LatestCrops>
          <LatestCrops></LatestCrops>
          <LatestCrops></LatestCrops>
          <LatestCrops></LatestCrops>
          <LatestCrops></LatestCrops>
        </div>
      </div>

      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
