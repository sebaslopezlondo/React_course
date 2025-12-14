import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { InitWithReact } from "./InitWithReact";

describe("InitWithReact", () => {
  test("should render name and lastName", () => {
    //const component = render(<InitWithReact />);
    //console.log(component);
    //console.log(component.container);

    /**
     * container: Contiene el HTML generado por mi componente
     * Pero solo va actualizar cuando llamamos la función render
     * Mas que suficiente para evaluar un estado inicial
     */

    const { container } = render(<InitWithReact />);
    console.log(container.innerHTML);

    /*
     * Screen es mas amigable para poder trabajar el resultado de la renderización de mi componente
     * Permite actualizarse basado en los cambios y la dispara
     */
    screen.debug(); //Me permite ver el HTML generado por mi componente

    const hOne = container.querySelector("h1"); //Me regresa el primer h1 que encuentre
    console.log("------querySelector------", hOne?.innerHTML); //Me regresa el contenido de mi h1
    expect(hOne?.innerHTML).toBe("Sebas Lopez"); //Espero que el contenido de mi h1 sea Sebas Lopez
    //toBe: Para datos primitivos

    //toContain: Para datos complejos, un string muy largo, que contenga parte de un texto
    expect(hOne?.innerHTML).toContain("Lopez");

    /*const headingRol = screen.getByRole("heading", { level: 1 }); //Me regresa el primer h1 que encuentre
    expect(headingRol.innerHTML).toBe("Sebas Lopez");*/

    const headingRol = screen.getByTestId("first-name-title");
    console.log("------getByTestId------", headingRol.innerHTML);
    expect(headingRol.innerHTML).toBe("Sebas Lopez");

    /**
     * Snapshot: Imagen (fotografía) del componente renderizado
     * Normalmente es usado cuando se quiere verificar que la estructura física
     * del componente creado es exactamente igual a la usada previamente
     * Se recomienda usar snapshots para componentes que no van a volver a ser cambiados en su estructura
     * Si hay cambios se deben actualizar en los test con u
     */
  });

  test("should match snapshot", () => {
    const { container } = render(<InitWithReact />);
    expect(container).toMatchSnapshot();
  });
});
