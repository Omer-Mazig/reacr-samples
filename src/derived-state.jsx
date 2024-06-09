import React, { useState } from "react";

// this example will show how NOT use derived state
export default function DerivedState() {
  const [users, setUsers] = useState([
    { id: "1", name: "John", age: 20 },
    { id: "2", name: "Jane", age: 21 },
    { id: "3", name: "Joe", age: 22 },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(users[0].id);

  // Derived State 👇
  const selectedUser = users.find((user) => user.id === selectedUserId);

  function handleSelectUserId(userId) {
    setSelectedUserId(userId);
  }

  function incrementAge(userId) {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            age: user.age + 1,
          };
        }
        return user;
      })
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            <span>
              Name: {user.name} | Age: {user.age}
            </span>
            <button onClick={() => incrementAge(user.id)}>Increment age</button>
            <button onClick={() => handleSelectUserId(user.id)}>
              Select user
            </button>
          </li>
        ))}
      </ul>
      <h2>Selected User</h2>
      <p>Name: {selectedUser.name}</p>
      <p>Age: {selectedUser.age}</p>
    </div>
  );
}
