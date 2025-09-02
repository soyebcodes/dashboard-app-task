import UsersClient from "./UserClient";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();
  return <UsersClient users={users} />;
}
