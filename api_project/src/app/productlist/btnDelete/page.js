"use client";
import { useRouter } from "next/navigation";
export function Btncomponent({ id }) {
    const router=useRouter()
  const btnclicked = async () => {
    let record = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "delete",
    });
    record = await record.json();
    if (record.success) {
      alert("product deleted");
      router.push("/productlist")
    }
  };
  return (
    <>
      <button onClick={btnclicked}>Delete</button>
    </>
  );
}
