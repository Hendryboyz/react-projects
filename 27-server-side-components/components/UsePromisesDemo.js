"use client";
import {use, useState} from "react";

export default function UsePromiseDemo({userPromise}) {
  const users = use(userPromise);
  const [count, setCount] = useState(0)
  return (
    <div className='rsc'>
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      <div>
        <button onClick={() => setCount(count + 1)}>
          + 1
        </button>
        <p>Count: {count}</p>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}