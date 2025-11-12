import React, { useEffect, useState } from "react";
import useAxios from "../useAxios";
import useAuth from "../useAuth";
import Post from "./Post";

const Myposts = () => {

 
  const [matched, setMatchedCrops] = useState([]);
  const {user} = useAuth();
  const axios = useAxios();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/allproducts");
        const arry = response.data;

        // Get the data and the buyers info 
         const matchedCrops = arry.filter(crop =>
        Array.isArray(crop.interest) && crop.interest.some(i => i.userEmail !== user.email)
        );
        
        setMatchedCrops(matchedCrops);


      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [axios]); 

  console.log(matched);

  return (
    <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3">

     {
      matched.map(allpost=> <Post key={allpost._id} allpost={allpost}></Post>)
     }
      
    </div>

  );
};

export default Myposts;
