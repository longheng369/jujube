import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container bg-green-400 py-6 px-9 flex justify-between fiexd top-0">
      <div className="text-3xl font-bold ml-4">JUJUBE</div>
      <ul className="flex gap-4">
        <Link to="/">
          <li className="bg-blue-600">Home</li>
        </Link>
        <Link to="business">
          <li className="bg-orange-600">Business</li>
        </Link>
        <Link to="history/all">
          <li className="bg-purple-500">History</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;