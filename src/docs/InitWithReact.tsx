/**
 * Es mas efectivo declarar en este lugar las variables que nunca cambian o funciones que no tienen nada que ver con el estado
 * Ya que React vuelve a ejecutar el componente constantemente detectando cambios
 */

const name = "Sebas";
const lastName = "Lopez";
export function InitWithReact() {
  /*
   * {} Lo que se encuentra entre estas llaves es la conexión entre el template (HTML) y el JS
   * Lo que va en { } son expresiones de JS
   * Ejemplo si pongo { 1 + 1 } me va a mostrar 2
   */

  const favoriteGames = [
    "God of War",
    "The Witcher 3",
    "The Last of Us",
    "Horizon Zero Dawn",
    "Red Dead Redemption 2",
  ];

  /*
   * Los valores booleanos no generan valores en el template
   * Ejemplo si pongo { true } me va a mostrar vacío
   */

  const isActive = true;

  /**
   * Esto es JSX, NO HTML
   * Las propiedades CSS se escriben con camelCase siempre que estemos en el template
   */

  //data-testid: No es muy recomendable ya que se pueden eliminar fácilmente y generar problemas
  return (
    <div>
      <h1>
        {name} {lastName}
      </h1>
      <h1 data-testid="first-name-title">
        {name} {lastName}
      </h1>
      <h2
        style={{
          backgroundColor: "tomato",
        }}
      >
        Favorite Games
      </h2>
      <ul>
        {favoriteGames.map((game) => (
          <li>{game}</li>
        ))}
      </ul>

      <p>
        Es un boolean: <b>{isActive}</b>
      </p>
    </div>
  );
}
