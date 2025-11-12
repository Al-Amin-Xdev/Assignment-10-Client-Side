import React  from "react";
import Post from "./Post";
import { useLoaderData } from "react-router";
import useAuth from "../useAuth";



const Myposts = () => {

  const {user} = useAuth();

  const data = useLoaderData();
  
 
  // Filter crops where interest array contains the user's email
//   const matchedCrops = data.filter(crop => 
//   Array.isArray(crop.interest) && crop.interest.some(i => i.userEmail === data.email)
// );
const matchedCrops= data.filter(one=> one.ownerEmail === user.email)





  return (
    <div className="mt-5 grid grid-cols-1 gap-5">

     {
      matchedCrops.map(one=><Post key={one._id} one={one}></Post>)
     }
      
    </div>

  );
};

export default Myposts;
