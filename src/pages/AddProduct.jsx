import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      description,
    };

    setLoading(true);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);

        // clear form
        setName("");
        setPrice("");
        setDescription("");

        // go to products page
        navigate("/products");
      })
      .catch((error) => {
        console.log("Error adding product:", error);
        setLoading(false);
      });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;