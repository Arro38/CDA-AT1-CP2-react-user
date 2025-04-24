import User from "./User";

function FavoritePage({ users }) {
  return (
    <>
      <h1>Favorite</h1>
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

export default FavoritePage;
