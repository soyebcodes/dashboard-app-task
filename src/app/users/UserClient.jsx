"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

export default function UsersClient({ users }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const router = useRouter();

  const filtered = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // calcilate total page
  const totalPages = Math.ceil(filtered.length / perPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset to first page when searching
        }}
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
            {paginated.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-900 transition-colors cursor-pointer"
                onClick={() => router.push(`/users/${user.id}`)}
              >
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

      {/* pagination btn */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-3 py-1 rounded-lg bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700"
        >
          Prev
        </button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-3 py-1 rounded-lg bg-gray-800 text-white disabled:opacity-50 hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </section>
  );
}
