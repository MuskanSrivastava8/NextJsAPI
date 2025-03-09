async function getUserapi(id) {
  let data = await fetch(`http://localhost:3000/api/dbdata/${id}`);
  data = await data.json();
  return data;
}
export default async function Userapiid(props) {
  const propsres = await props;
  const params = await propsres.params;
  const idres = await params.userapiid;

  const users = await getUserapi(idres);

  return <>id detail
  {users.name}  {users.id}

  </>;
}
