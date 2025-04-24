import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        HomePage
      </NavLink>
      <NavLink to="/favorites" end>
        Favoris
      </NavLink>
    </nav>
  );
}

export default Navbar;
