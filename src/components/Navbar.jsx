import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Product Admin</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;