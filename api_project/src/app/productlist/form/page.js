"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function ProductForm({ productDetail, updatePrductFunction }) {
  const [name, setName] = useState(productDetail.name);
  const [price, setPrice] = useState(productDetail.price);
  const [color, setColor] = useState(productDetail.color);
  const [company, setCompany] = useState(productDetail.company);
  const [catagory, setCatagory] = useState(productDetail.catagory);


  return (
    <>
      Update user
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
      <button
        onClick={async () => {
          await updatePrductFunction(name, price, color, catagory, company);
        }}
      >
        Update
      </button>
      <Link href={"/productlist"}>product list</Link>
    </>
  );
}
