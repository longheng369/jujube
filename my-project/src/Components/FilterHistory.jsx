// import React from "react";
import { useEffect, useState } from "react";
import data from "../data";
const FilterHistory = () => {
  const [filterNumber, setFilterNumber] = useState(600);
  const [DataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    const filterData = data.filter(
      (data) => data.price === parseInt(filterNumber)
    );
    setDataFilter(filterData);
  }, [filterNumber]);

  return (
    <div className="mt-[-3rem] w-9/12 m-auto">
      <input
        type="number"
        placeholder="Filter..."
        className="px-3 py-2 rounded-lg mt-2 mb-[0.4rem] font-bold border border-solid border-black "
        onChange={(e) => setFilterNumber(e.target.value)}
      />
      <section className="history">
        <div className="grid grid-cols-4 m-auto mt-4  ">
          <h2>Name</h2>
          <h2 className="text-center">Quantity</h2>
          <h2 className="text-center">Price</h2>
          <h2 className="text-center">Result</h2>
        </div>
      </section>
      <div className="scrolH">
        {DataFilter.map((m) => {
          return (
            <div
              className="grid grid-cols-4  m-auto mt-2 bg-blue-200 p-3 rounded-xl shadow-md"
              key={m.count}
            >
              <p>
                {m.count}- {m.name}
              </p>
              <p className="text-center">{m.quantity} Kg</p>
              <p className="text-center">{m.price}៛</p>
              <p className="font-bold text-center">
                {m.result.toLocaleString()}៛
              </p>
              <p className="text-[16px]">{m.date}</p>
              <p></p>
              <p></p>
              <p className="text-right text-sm relative text-[16px]">
                {m.time}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterHistory;
