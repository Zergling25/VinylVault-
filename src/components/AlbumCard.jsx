import { Link } from "react-router-dom";

function AlbumCard({ album, addToCart }) {
  return (
    <div className="album">
      <Link to={`/album/${album.id}`}>
        <img src={album.image} alt={album.title} />
        <h3>{album.title}</h3>
      </Link>
      <p>{album.artist}</p>
      <p>{album.genre}</p>
      <p>${album.price.toFixed(2)}</p>
      <button onClick={() => addToCart(album)}>Add to cart</button>
    </div>
  );
}

export default AlbumCard;
