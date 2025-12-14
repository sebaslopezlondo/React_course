/**
 * Este archivo es conocido como un test suite
 * Debe contener como mínimo un test o este fallará
 */

import { test, expect, describe } from "vitest";
import { add, multiply, substract } from "./math.helper";

test("should add two positive numbers", () => {
  //1. Arrange
  const a = 1;
  const b = 1;

  //2. Act
  const result = add(a, b);

  //3. Assert
  /*
    if (result !== 2) {
      throw new Error('1 + 1 should be 2');
    }*/

  // Esto reemplaza el código anterior
  expect(result).toBe(2);
});

/**
 * describe: Sirve para agrupar y organizar casos de prueba relacionados
 */
describe("add", () => {
  test("", () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
});

describe("substract", () => {
  test("", () => {
    const result = substract(1, 1);
    expect(result).toBe(0);
  });
});

describe("multiply", () => {
  test("", () => {
    const result = multiply(2, 2);
    expect(result).toBe(2 * 2);
  });
});
