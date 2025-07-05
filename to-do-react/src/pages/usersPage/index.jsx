import { useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Jasur",
      lastName: "Umirov",
      location: "https://www.google.com/maps",
      gender: "male",
      age: 19,
    },
    {
      id: 2,
      firstName: "Alisher",
      lastName: "Sobirov",
      location: "https://www.google.com/maps",
      gender: "male",
      age: 22,
    },
  ]);

  function deleteUser(userId) {
    const sUsers = users.filter((user) => user.id !== userId);
    setUsers(sUsers);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      id: Date.now(),
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      location: event.target.location.value,
      gender: event.target.gender.value,
      age: event.target.age.value,
    };

    setUsers([...users, user]);
    event.target.reset()
  }

  return (
    <>
      <div className="m-auto">
        <h1 className="text-center text-4xl text-emerald-900">Users</h1>
        <form onSubmit={handleSubmit} className="grid gap-2 w-2xl m-auto mt-6">
          <input
            className="rounded py-1 px-2 bg-slate-400"
            type="text"
            placeholder="name"
            name="firstName"
            required
          />
          <input
            className="rounded py-1 px-2 bg-slate-400"
            type="text"
            placeholder="surname"
            name="lastName"
            required
          />
          <input
            className="rounded py-1 px-2 bg-slate-400"
            type="text"
            placeholder="location"
            name="location"
            required
          />
          <select
            className="rounded py-1 px-2 bg-slate-400"
            name="gender"
            id=""
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <input
            className="rounded py-1 px-2 bg-slate-400"
            type="number"
            placeholder="age"
            name="age"
            required
          />
          <button className="rounded py-1 px-5 bg-black text-white">Add</button>
        </form>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="m-auto w-2xl border mt-7 p-3 bg-green-500 rounded"
            >
              <p className="p-1">Name:{user.firstName}</p>
              <p className="p-1">Surname:{user.lastName}</p>
              <p className="p-1">Location:{user.location}</p>
              <p className="p-1">Gender:{user.gender}</p>
              <p className="p-1">Age:{user.age}</p>
              <button
                onClick={() => deleteUser(user.id)}
                className="border rounded bg-red-400 mt-1"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UsersPage;
