import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { ShoppingCart } from "./ShoppingCart";

vi.mock("./ItemCounterProduc", () => ({
  //ItemCounterProduc: (props: unknown) => (
  ItemCounterProduc: ({ quantity, productName }: unknown) => (
    <div
      data-testid="ItemCounter"
      data-quantity={quantity}
      data-product-name={productName}
    />
  ),
}));

describe("ShoppingCart", () => {
  test("should match snapshot", () => {
    const { container } = render(<ShoppingCart />);
    expect(container).toMatchSnapshot();
  });

  test("should render the correct number de ItemCounter components", () => {
    render(<ShoppingCart />);
    const itemCounters = screen.getAllByTestId("ItemCounter");
    console.log(itemCounters.length); //3, esto se debe a que itemsInCartArr tiene 3 items
  });
});
