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
        
              
      // Just the information of interested person
        // let matched = [];

        // arry.forEach(crop => {
        //   if (crop.interest && crop.interest.length > 0) {
        //       const filtered = crop.interest.filter(i => i.userEmail === user.email);
        //       matched = matched.concat(filtered);
        //     }
        //   });

        //   setInterest(matched); 
        })
        .catch(err => console.error(err));

      }, []);

 console.log(matched);



  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      {
        matched.map(one=> <Interested key={one._id} one={one}></Interested>)
      }
    </div>
  );
};

export default Myinterests;
