"use client";
import { useEffect, useState } from "react";

export default function Component(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (props.userData !== undefined) {
      setAge(props.userData.age),
        setName(props.userData.name),
        setId(props.userData.id);
    }
  }, []);
  const updateUser = async () => {
    let response = await fetch("http://localhost:3000/api/dbdata/" + props.id, {
      method: "PUT",
      body: JSON.stringify({ name, id, age }),
    });

  };

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
      <button onClick={updateUser}>Update user</button>
      {/* {btn && <UpdateComponent name={name} age={age} id={id} />} */}
    </>
  );
}
