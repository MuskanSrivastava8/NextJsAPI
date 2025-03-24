"use server";
import ProductForm from "../form/page";
export default async function AddProduct(props) {
  const params = await props.params;
  const productedit = params.productedit;
  const getProductDetail = async () => {
    let result = await fetch(
      `http://localhost:3000/api/products/${productedit}`
    );
    result = await result.json();
    return result;
  };
  async function updatePrductFunction(name, price, color, catagory, company) {
    "use server"; // mark function as a server action (fixes the error)
    let response = await fetch(
      `http://localhost:3000/api/products/${productedit}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, color, catagory, company }),
      }
    );
    let data = await response.json();
  
  }

  const resultRES = await getProductDetail();
  return (
    <ProductForm
      productDetail={resultRES.result}
      updatePrductFunction={updatePrductFunction}
    />
  );
}
