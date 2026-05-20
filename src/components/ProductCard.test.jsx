import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";
import { BrowserRouter } from "react-router-dom";

const product = {
  id: 1,
  name: "Test Product",
  price: 100,
  description: "Test description",
  image:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
};

describe("ProductCard Component", () => {
  test("renders product name", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("renders product description", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  test("renders product price", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  test("renders product image", () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute(
      "src",
      product.image
    );
  });

  test("component renders successfully", async () => {
    render(
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Test Product")
    ).toBeInTheDocument();
  });
});