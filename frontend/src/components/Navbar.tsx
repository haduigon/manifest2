import { NavLink } from "react-router-dom";
import classNames from 'classnames';

export const Navbar: React.FC = () => {
const linkClass = (
  { isActive } : { isActive: boolean }, 
) => classNames("navbar-item", {'has-background-grey-lighter': isActive});

  return (
    <nav
      className="navbar"
    >
      <NavLink className={linkClass} to="/">I dont know what is this page</NavLink>
      <NavLink to="/horo" className={linkClass}>Horo</NavLink>
      <NavLink to="/fb" className={linkClass}>FB</NavLink>
      <NavLink to="/pay" className={linkClass}>Pay</NavLink>
    </nav>
  )
}
