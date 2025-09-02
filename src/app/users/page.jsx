async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Responsive table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="border border-gray-700 p-2">Name</th>
              <th className="border border-gray-700 p-2">Email</th>
              <th className="border border-gray-700 p-2">Phone</th>
              <th className="border border-gray-700 p-2">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-900 transition-colors">
                <td className="border border-gray-700 p-2 font-medium">
                  {user.name}
                </td>
                <td className="border border-gray-700 p-2">{user.email}</td>
                <td className="border border-gray-700 p-2">{user.phone}</td>
                <td className="border border-gray-700 p-2">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
