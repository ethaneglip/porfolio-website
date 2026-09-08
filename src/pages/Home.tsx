import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Ethan Eglip");

  return (
    <>
      <div className="hero-image">
        <img src="/images/cover.jpg" alt="cover image" />
        <div className="hero-text">
          <h1>ETHAN EGLIP</h1>
          <p>composer / arranger / music director</p>
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