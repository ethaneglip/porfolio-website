import { Link } from "react-router-dom";
import { pieces } from "../data/pieces";
import { usePageTitle } from "../hooks/usePageTitle";



export default function Music() {
  usePageTitle("Music");

  return (
    <>
        <div className="page-content">
            <h1>Music</h1>
            <p>
                Here is a catalog of my original compositions, arrangements, and
                orchestrations. Please contact me for more information or to request
                scores.
            </p>

            <div className="music-list">
                {pieces.map((piece) => (
                <Link to={`/music/${piece.slug}`} className="music-item" key={piece.slug}>
                    <h2>{piece.title}</h2>
                    <p className="meta">{piece.meta}</p>
                </Link>
                ))}
            </div>
        </div>

        <footer className="corner-footer">
            <a href="https://instagram.com/ethaneglip" target="_blank" rel="noreferrer">
            Instagram
            </a>
            <a href="https://youtube.com/@eeglip" target="_blank" rel="noreferrer">
            YouTube
            </a>
            <hr></hr>
            <p>&copy; 2026 Ethan Eglip</p>
      </footer>
    </>
    
  );
}