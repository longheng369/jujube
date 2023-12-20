import React from "react";
import data from "../data";
const All = () => {
  return (
    <div>
      <section className="history">
        <div className="grid grid-cols-4 m-auto mt-4 w-9/12 gap-6 shadow-lg p-4 rounded-lg">
          <h2 className="text-center p-2 rounded-lg bg-blue-400">Name</h2>
          <h2 className="text-center p-2 rounded-lg bg-red-400">Quantity</h2>
          <h2 className="text-center p-2 rounded-lg bg-yellow-400">Price</h2>
          <h2 className="text-center p-2 rounded-lg bg-orange-400">Result</h2>
        </div>
      </section>
      <div className="scrol-wraper">
        <div className="scrol">
          {data.map((m) => {
            return (
              <div
                className="grid grid-cols-4 mt-2  bg-blue-200 p-3 rounded-xl shadow-md"
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
    </div>
  );
};

export default All;
