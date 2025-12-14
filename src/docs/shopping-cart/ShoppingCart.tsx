import { ItemCounterProduc } from "./ItemCounterProduc";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCartArr: ItemInCart[] = [
  { productName: "Play Station 5", quantity: 1 },
  { productName: "Xbox Series X", quantity: 1 },
  { productName: "Nintendo Switch", quantity: 1 },
];

/**
 * En el KEY nunca usar el index
 */
export function ShoppingCart() {
  return (
    <div>
      <h2>Carritoo de compras</h2>
      {itemsInCartArr.map(({ productName, quantity }) => (
        <ItemCounterProduc
          key={productName}
          quantity={quantity}
          productName={productName}
        />
      ))}
    </div>
  );
}
