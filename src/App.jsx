import React from "react";
import Login from "./component/login";
import { Route, Routes } from "react-router-dom";
import  Home  from "./component/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

      {/* <Login /> */}
    </div>
  );
};

export default App;
