import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../Components/DashBoard";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Setting from "../Components/Setting";
import PrivateRoutes from "./PrivateRoutes";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/login" element={<Login />}></Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <DashBoard />
          </PrivateRoutes>
        }
      ></Route>
      <Route path="/dashboard/setting" element={
          <PrivateRoutes>
          <Setting />

      </PrivateRoutes>
      }></Route>
    </Routes>
  );
};

export default Routess;
