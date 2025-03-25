import Link from "next/link";
import { Btncomponent } from "./btnDelete/page";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {cache:"no-cache"});
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
export default async function ProductList() {
  const product = await getProducts();

  return (
    <>
      <div>Product List</div>
      <table border={"1"}>
        <thead>
          <tr>
            <td>NAMEs</td>
            <td>PRICE</td>
            <td>COLOR</td>
            <td>CATAGORY</td>
            <td>COMPANY</td>
            <td>EDIT</td>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.catagory}</td>
              <td>{item.company}</td>
              <td>
                <Link href={"productlist/" + item._id}>Edit</Link>
              </td>
              <td key={item._id} >
                <Btncomponent id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
