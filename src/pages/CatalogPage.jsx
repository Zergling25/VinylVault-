import { useState } from "react";
import AlbumCard from "../components/AlbumCard";

function CatalogPage({ albums, addToCart }) {
  const [genre, setGenre] = useState("All");
  const genres = ["All", "Jazz", "Electronic", "Rock", "Classical"];
  const shownAlbums = genre === "All" ? albums : albums.filter((album) => album.genre === genre);

  return (
    <main>
      <h1>VinylVault Record Store</h1>
      <p>Browse our records.</p>
      <h2>Filter by genre</h2>
      {genres.map((item) => (
        <button key={item} onClick={() => setGenre(item)}>
          {item}
        </button>
      ))}
      <div className="album-grid">
        {shownAlbums.map((album) => (
          <AlbumCard key={album.id} album={album} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}

export default CatalogPage;
