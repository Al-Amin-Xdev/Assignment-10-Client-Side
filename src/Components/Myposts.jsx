import React, { useEffect, useState } from "react";
import useAxios from "../useAxios";
import useAuth from "../useAuth";
import Post from "./Post";

const Myposts = () => {

  const [post, setPost]= useState([]);

  const {user} = useAuth();

  const axios = useAxios();


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/allproducts");
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [axios]); 
 

  const posts = post.filter(one=> one.ownerEmail == user.email);
  console.log(posts);
 


  return (
    <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3">

     {
      posts.map(allpost=> <Post key={allpost._id} allpost={allpost}></Post>)
     }
      
    </div>

  );
};

export default Myposts;
