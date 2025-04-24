import User from "./User";

function HomePage({ users }) {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {users
          .sort((u1, u2) => u1.name.last.localeCompare(u2.name.last))
          .map((u, index) => (
            <User key={index} user={u} i={index} />
          ))}
      </ul>
    </>
  );
}

export default HomePage;
