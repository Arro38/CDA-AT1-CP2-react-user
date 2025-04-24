function User({ user, users, setUsers }) {
  function toggleFavorite() {
    const i = users.findIndex((u) => u.id.value == user.id.value);
    let copy = [...users];
    copy[i].favorite = !copy[i].favorite;
    setUsers(copy);
  }

  return (
    <li>
      {user.name.last} {user.name.first} - {user.phone}
      <span
        className={user.favorite ? "star active" : "star"}
        onClick={(e) => toggleFavorite()}
      >
        &#9734;
      </span>
    </li>
  );
}

export default User;
