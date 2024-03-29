import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { MdAddShoppingCart } from "react-icons/md";

export const Header = () => {
  return (
    <div className="Header-delen">
      <div className="Container-header">
        <NavLink to="/" className="logo">
          <p> bmerketo</p>
        </NavLink>
        <nav className="main-navigation">
          <NavLink to="/" className="nav-links">
            HOME
          </NavLink>
          <NavLink to="/Contacts" className="nav-links">
            CONTACT
          </NavLink>
        </nav>
        <div className="login-header">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="search-input" />
          <NavLink to="/authleyout/Loginform/Loginformular" className="login-klick">
            Login
          </NavLink>
          <Dropdown>
            < MdAddShoppingCart className="shoppingcard" />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
