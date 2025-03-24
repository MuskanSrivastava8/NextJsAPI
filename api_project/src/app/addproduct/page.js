"use client";
import { useState } from "react";
export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [company, setCompany] = useState("");
  const [catagory, setCatagory] = useState("");

  const addPrductFunction = async () => {
    let result = await fetch("http://localhost:3000/api/products", {
      method: "Post",
      body: JSON.stringify({ name, price, color, company, catagory }),
    });
    result= await result.json();
    if(result.success){
        alert("new Product added now")
    }
  };
  return (
    <>
      Add user
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name "
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price "
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color "
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter company "
      />
      <input
        type="text"
        value={catagory}
        onChange={(e) => setCatagory(e.target.value)}
        placeholder="Enter catagory "
      />
      <button onClick={addPrductFunction}>Add Product</button>
    </>
  );
}
