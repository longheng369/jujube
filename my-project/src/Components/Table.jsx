import React, { useEffect, useRef, useState } from "react";
const Table = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(1);
  const [member, setMember] = useState([]);
  const [quantityH, setQuantityH] = useState(0);
  const [resultH, setResultH] = useState(0);
  const submit = () => {
    const quantityAndPrice = quantity * price;
    setResult(quantityAndPrice);
    const addMemeber = { name, quantity, price, result, count };
    const updateMember = [...member, addMemeber];
    setMember(updateMember);
    setCount(count + 1);
    setQuantityH(quantityH + parseInt(quantity));
    setResultH(resultH + parseInt(result));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [member]);

  useEffect(() => {
    const quantityAndPrice = quantity * price;
    setResult(quantityAndPrice);
  }, [quantity, price]);

  return (
    <div className="mt-6 bg-[#EEE7DA] rounded-md p-6">
      <div className=" bg-blue-300 w-11/12 m-auto justify-center items-center p-6 gap-4 wraper-table rounded-lg">
        <div>
          <h1 className="label-name">Name</h1>
          <input
            ref={inputRef}
            placeholder="Name"
            type="text"
            className="input-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h1 className="label-quantity">Quantity</h1>
          <input
            placeholder="Number"
            type="number"
            className="input-quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <h1 className="label-price">Price</h1>
          <input
            placeholder="Number"
            type="number"
            className="input-price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <h1 className="label-result">Result</h1>
          <p className="result font-bold text-gray-600">{`${result.toLocaleString()} ៛`}</p>
        </div>
      </div>
      <button className="btn font-bold text-xl" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default Table;
