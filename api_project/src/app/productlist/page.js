import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
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
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.catagory}</td>
              <td>{item.company}</td>
              <td><Link href={"productlist/"+item._id}>Edit</Link></td>

            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
