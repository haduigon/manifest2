import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar"
    >
      <NavLink to="/" className="navbar-item">I dont know what is this page</NavLink>
      <NavLink to="/horo" className="navbar-item">Horo</NavLink>
    </nav>
  )
}
