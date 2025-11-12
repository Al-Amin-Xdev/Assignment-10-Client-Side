import React from "react";
import HeroBar from "./HeroBar";
import LatestCrops from "./LatestCrops";
import Slider from "./Slider";
import HowItWorks from "./HowItWorks";
import BlogPost from "./BlogPost";
import SuccessStories from "./SuccessStories";
import TopFarmers from "./TopFarmers ";
import { useLoaderData } from "react-router";
import Loading from "./Loader";

const Home = () => {

  const NewProducts = useLoaderData();
  const firstSix = NewProducts.slice(0, 6);


  return (
    <div className="w-full mx-auto">

      <HeroBar></HeroBar>

      <div className="w-full mx-auto">
      <Slider></Slider>
      </div>

      <div className="felx flex-col">
        <center><h1 className="font-bold text-4xl bg-green-400 w-full py-3 rounded-md">Latest Crops</h1></center>

        <div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {
            firstSix.map(data=> <LatestCrops key={data._id} data={data}></LatestCrops>)
          }
        </div>
      </div>

      <HowItWorks></HowItWorks>
      <BlogPost></BlogPost>
      <SuccessStories></SuccessStories>
      <TopFarmers></TopFarmers>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
