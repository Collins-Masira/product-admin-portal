import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

function Products() {
  const { products, setProducts, loading, error } = useProducts();

  const navigate = useNavigate();

  // DELETE PRODUCT
  function handleDelete(id) {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        console.log("Error deleting product:", error);
      });
  }

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>;
  }

  if (error) {
    return <h2 style={{ padding: "20px", color: "red" }}>{error}</h2>;
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
                View Details
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