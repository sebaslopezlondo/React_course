import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounterProduc } from "./ItemCounterProduc";

describe("ItemCounterProduc", () => {
  test("should render with default values", () => {
    const productName = "Xbox";
    const quantity = 1;
    render(<ItemCounterProduc productName={productName} quantity={quantity} />);

    expect(screen.getByText(productName)).toBeDefined();
    expect(screen.getByText(quantity)).toBeDefined();
  });
  /**
   * Disparar eventos
   */
  test("should increase count when ", () => {
    render(<ItemCounterProduc productName="Xbox" quantity={1} />);

    //const buttons = screen.getAllByRole("button"); //Me regresa todos los botones que encuentre
    // Como se el orden de los botones puedo hacer un destructuring
    const [buttonAdd] = screen.getAllByRole("button");
    console.log(`Add: ${buttonAdd.innerHTML}`);

    //fireEvent es para disparar eventos, el argumento es el element que quiero disparar
    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 is clicked", () => {
    render(<ItemCounterProduc productName="Xbox" quantity={5} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    console.log(`Substract: ${buttonSubstract.innerHTML}`);
    fireEvent.click(buttonSubstract);
    //Cantidad debe ser 4 ya que al disparar el evento se resta 1
    expect(screen.getByText("4")).toBeDefined();
  });

  test("should decrease count when -1 is clicked and quantity is 1", () => {
    render(<ItemCounterProduc productName="Xbox" quantity={1} />);

    const [, buttonSubstract] = screen.getAllByRole("button");
    console.log(`Substract: ${buttonSubstract.innerHTML}`);
    fireEvent.click(buttonSubstract);
    expect(screen.getByText("1")).toBeDefined();
  });

  test("should change to red when  count is 1", () => {
    const name = "Xbox";
    render(<ItemCounterProduc productName={name} quantity={1} />);
    const productName = screen.getByText(name);
    //console.log(productName.style.color); //red
    expect(productName.style.color).toBe("tomato");
  });

  test("should change to red when  count is more than 1", () => {
    const name = "Xbox";
    //quantity = 2: Debe ser turquoise según el componente
    render(<ItemCounterProduc productName={name} quantity={2} />);
    const productName = screen.getByText(name);
    //console.log(productName.style.color); //turquoise
    expect(productName.style.color).toBe("turquoise");
    //Si en el componente llegan a cambiar el color turquoise, el test falla
  });
});
