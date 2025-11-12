import React, { useEffect, useState } from "react";
import useAxios from "../useAxios";
import useAuth from "../useAuth";
import Interested from "./Interested";

const Myinterests = () => {
  
  const [matched, setMatchedCrops] = useState([]);

  const axios = useAxios();
  const {user} = useAuth();

      useEffect(() => {
        axios.get('/allproducts')
          .then(result => {

        const arry = result.data;

        //Full object 
        const matchedCrops = arry.filter(crop =>
        Array.isArray(crop.interest) && crop.interest.some(i => i.userEmail === user.email)
        );
        setMatchedCrops(matchedCrops);
        
        })
        .catch(err => console.error(err));

      }, [axios]);



  return (
    <div className="grid grid-cols-1 gap-2  mt-10 md:grid-cols-3">
      {
        matched.map(one=> <Interested key={one._id} one={one}></Interested>)
      }
    </div>
  );
};

export default Myinterests;
