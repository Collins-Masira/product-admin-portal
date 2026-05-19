import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // GET PRODUCTS
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // DELETE PRODUCT
  function handleDelete(id) {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // update UI instantly after delete
        setProducts((prev) =>
          prev.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        console.log("Error deleting product:", error);
      });
  }

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-wrapper">
            <ProductCard product={product} />

            <div style={{ marginTop: "10px" }}>
              <button
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View
              </button>

              <button
                onClick={() => handleDelete(product.id)}
                style={{
                  marginLeft: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;