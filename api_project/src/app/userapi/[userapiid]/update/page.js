import Component from "./component";
async function getUserapi(id) {
  let data = await fetch(`http://localhost:3000/api/dbdata/${id}`);
  data = await data.json();
  return data;
}
export default async function Update(props) {
  const propsres = await props.params;
  const propsresponse = await propsres;
  const idres = propsresponse.userapiid;

  const users = await getUserapi(idres);
  return (
    <>
      Update user
      <Component id={idres} userdata={users}/>
    </>
  );
}
