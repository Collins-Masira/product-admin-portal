import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // GET SINGLE PRODUCT
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
      });
  }, [id]);

  // PATCH UPDATE PRODUCT
  function handleUpdate() {
    const updatedProduct = {
      name,
      price: Number(price),
      description,
    };

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setEditMode(false);
      });
  }

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Loading product...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>

      {editMode ? (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br /><br />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <br /><br />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br /><br />

          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>

          <button onClick={() => setEditMode(true)}>
            Edit Product
          </button>

          <button onClick={() => navigate("/products")}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;