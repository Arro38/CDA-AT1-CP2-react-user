function User({ user }) {
  return (
    <li>
      {user.name.last} {user.name.first} - {user.phone}
      <span
        className="star"
        onClick={(e) => e.target.classList.toggle("active")}
      >
        &#9734;
      </span>
    </li>
  );
}

export default User;
