import Link from "next/link";

async function getUserapi() {
  let data = await fetch("http://localhost:3000/api/dbdata");
  data = await data.json();
  return data;
}
export default async function Userapi() {
  const users = await getUserapi();
  return (
    <>
      userList
      {users.map((item) => (
        <li>
          <Link href={`userapi/${item.id}`}>{item.id}{item.name}</Link>
          <span><Link href={`userapi/${item.id}/update`}>Edits</Link></span>
        </li>
      ))}
    </>
  );
}
