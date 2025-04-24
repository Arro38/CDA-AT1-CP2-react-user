import User from "./User";

function HomePage({ users, setUsers }) {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {users
          .sort((u1, u2) => u1.name.last.localeCompare(u2.name.last))
          .map((u, index) => (
            <User
              key={index}
              user={u}
              i={index}
              users={users}
              setUsers={setUsers}
            />
          ))}
      </ul>
      <button onClick={() => setUsers([])}>Reset User</button>
    </>
  );
}

export default HomePage;
