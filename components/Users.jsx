"use client";

import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((u) => (
          <Link href={`/users/${u.id}`} key={u.id}>
        <li
          className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
            >
          <div>
            <h5 className="font-bold">
              {u.id} {u.first_name} {u.last_name}
            </h5>
            <p className="text-slate-100">Email: {u.email}</p>
          </div>
            <img src={u.avatar} alt="avatar" className="rounded-full w-20" />
        </li>
        </Link>
      ))}
    </ul>
  )
}
