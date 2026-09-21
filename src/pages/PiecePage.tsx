import { useParams, Link, Navigate } from "react-router-dom";
import { pieces } from "../data/pieces";
import { usePageTitle } from "../hooks/usePageTitle";

export default function PiecePage() {
  const { slug } = useParams();
  const piece = pieces.find((p) => p.slug === slug);

  usePageTitle(piece ? `${piece.title}` : "Music");

  if (!piece) return <Navigate to="/music" replace />;

  return (
    <div className="page-content" style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <h1>{piece.title}</h1>
        <h2>{piece.meta}</h2>

        <p><br /></p>

        <div className="piece-media">
          <div className="score-links">
            <a href={piece.scoreSrc} target="_blank" rel="noreferrer">
              <img src="/images/pdf-icn.svg" alt="PDF icon" style={{ filter: "invert(100%)" }} />
              <span>View the score</span>
            </a>
          </div>

          <div className="divider" />

          {piece.movements ? (
            <div className="movements">
              {piece.movements.map((m) => (
                <div className="movement" key={m.title}>
                  <h3>{m.title}</h3>
                  <audio controls src={m.audioSrc} />
                </div>
              ))}
            </div>
          ) : (
            <audio controls src={piece.audioSrc} />
          )}
        </div>

        <p><br /></p>
        <h3>Program Notes</h3>

        {piece.programNotes.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}

        {piece.premiereNote && (
          <>
            <p><br /></p>
            <p dangerouslySetInnerHTML={{ __html: piece.premiereNote }} />
          </>
        )}

        <p><br /></p>
        <p>Email me for more information or purchasing.</p>
      </div>

      <Link to="/music" className="back-link">
        <span className="arrow">←</span>
        <span>Back to music</span>
      </Link>
    </div>
  );
}