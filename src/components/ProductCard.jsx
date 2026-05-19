function ProductCard({ product }) {
  const { name, price, description } = product;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>${price}</strong></p>
    </div>
  );
}

export default ProductCard;