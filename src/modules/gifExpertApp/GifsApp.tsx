import { mockGifs } from "./mock/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      <div className="search-container">
        <h1>GifsApp</h1>
        <span>Descubre y comparte tus mejores gifs</span>
        <input type="text" placeholder="Buscar gifs" />
        <button>Buscar</button>
      </div>

      {/* Busquedar previas */}
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>Naruto</li>
          <li>Dragon Ball</li>
        </ul>
      </div>

      {/* Gifs */}
      <div className="gifs-container">
        {mockGifs.map((gif) => (
          <div className="gif-card" key={gif.id}>
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} ({"5MB"})
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
