import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Product Admin Portal</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Add Product
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;