import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders product card", () => {
  const product = {
    name: "Test Product",
    price: 100,
    description: "Test description",
  };

  render(<ProductCard product={product} />);

  expect(screen.getByText("Test Product")).toBeInTheDocument();
});