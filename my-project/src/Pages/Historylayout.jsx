import React from "react";
import { Outlet, Link } from "react-router-dom";
import AllFilter from "../Components/AllFilter";

const Historylayout = () => {
  return (
    <div>
      <AllFilter/>
      <Outlet />
    </div>
  );
};

export default Historylayout;
