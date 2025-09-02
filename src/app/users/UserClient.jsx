"use client";
import { useState, useMemo } from "react";

export default function UsersClient({ users }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name or email..."
        className="mb-4 w-full sm:w-80 px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Responsive table */}
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
            {filtered.map((user) => (
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
    </section>
  );
}
