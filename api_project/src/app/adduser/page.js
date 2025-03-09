"use client";
import { useState } from "react";
export default  function Adduser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const addUserFunction =async ()=>{
    let response = await fetch("http://localhost:3000/api/dbdata",{
    method:"Post",
    body:JSON.stringify({name, id, age})
    })
    let data = await response.json();
    console.log(data)
  }
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
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age "
      />
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter id "
      />
      <button onClick={addUserFunction}>Add new user</button>
    </>
  );
}
