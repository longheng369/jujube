import React from "react";
import { Link } from "react-router-dom";
const AllFilter = () => {
  return (
    <div className="flex gap-4 mt-4">
      <Link
        to="all"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg font-bold"
      >
        All
      </Link>

      <Link
        to="filter_history"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg font-bold"
      >
        Filter
      </Link>
    </div>
  );
};

export default AllFilter;
