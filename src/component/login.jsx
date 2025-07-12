import React, { useState } from "react";
import toast from "react-hot-toast";




const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handle = () => {
    setEmail(email);
    setPassword(password);
    const userDeatils = {
      Email: email,
      Password: password,
    };

    if (!email || !password) {
      toast.error("Please Fill all the details");
      return;
    }

    localStorage.setItem("useDetails", JSON.stringify(userDeatils));
    toast.success("User Login SuccessFully");
    navigate("/Home");
  };
  return (
    <form className=" w-full h-screen flex justify-center items-center">
      <div className=" p-10 shadow-2xl rounded-2xl h-[350px] w-lg  flex flex-col gap-5   shadow-blue-200 ">
        <h1 className=" text-3xl font-semibold text-blue-900 mb-4">
          Enter Your Details Here
        </h1>
        <input
          placeholder="Enter Your email Here"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="  rounded-md w-full p-2.5 shadow-blue-200 shadow-md  "
        />
        <input
          placeholder="Enter Your password Here"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="  rounded-md w-full p-2.5 shadow-blue-200 shadow-md  "
        />

        <button
          onClick={handle}
          className="  rounded-md w-full p-2 bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600 hover:border-2 hover:border-e-blue-600  shadow-blue-200 shadow-md hover:shadow-xl "
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
