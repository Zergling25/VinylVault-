import { Link, useParams } from "react-router-dom";

function AlbumDetailPage({ albums, addToCart }) {
  const { albumId } = useParams();
  const album = albums.find((item) => item.id === albumId);

  if (!album) return <main><h2>Album not found</h2><Link to="/">Back</Link></main>;

  return (
    <main>
      <Link to="/">Back to catalog</Link>
      <h1>{album.title}</h1>
      <img className="detail-image" src={album.image} alt={album.title} />
      <p>Artist: {album.artist}</p>
      <p>Genre: {album.genre}</p>
      <p>Price: ${album.price.toFixed(2)}</p>
      <p>Stock: {album.stock}</p>
      <p>{album.description}</p>
      <h2>Album details</h2>
      <p>Catalog number: {album.specs.catalogNumber}</p>
      <p>Pressing weight: {album.specs.weight}</p>
      <p>Speed: {album.specs.speed}</p>
      <p>Label: {album.specs.label}</p>
      <h2>Tracklist</h2>
      <ol>{album.tracklist.map((track) => <li key={track}>{track}</li>)}</ol>
      <button onClick={() => addToCart(album)}>Add to cart</button>
    </main>
  );
}

export default AlbumDetailPage;
