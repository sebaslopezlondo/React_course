import { useState } from "react";

interface Props {
  productName: string;
  quantity?: number;
}

/**
 * Formas de pasar props a un componente
 */
export function ItemCounterProduc({ productName, quantity = 1 }: Props) {
  /**
   * Hooks
   * Siempre van al inicio
   * Siempre van a ser funciones
   */

  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    console.log("Hola mundo test desde ItemCounterProduc");
    setCount(count + 1);
  };

  const handleSubstract = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <div
      style={{
        gap: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: count === 1 ? "tomato" : "turquoise" }}>
        {productName}
      </h3>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </div>
  );
}
