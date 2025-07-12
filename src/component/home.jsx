import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Home = () => {
  const handle = () => {
    localStorage.removeItem("useDetails");
    toast.success("User Logged Out");
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center mt-4  ">
<div className=" flex flex-col gap-3 ">
  
    <h1 className=" text-3xl font-semibold text-blue-500">
      Welcome To The Home Page
    </h1>
      <NavLink to={"/"}>
        <button
          onClick={handle}
          className="  rounded-md w-[100px] p-2 bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600 hover:border-2 hover:border-e-blue-600  shadow-blue-200 shadow-md hover:shadow-xl "
        >
          Logout
        </button>
      </NavLink>
</div>
      
    </div>
  );
};

export default Home;
