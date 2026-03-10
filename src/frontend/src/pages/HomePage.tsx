import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

const games = [
  {
    id: "chess",
    name: "Chess",
    logo: "/assets/generated/chess-logo-transparent.dim_200x200.png",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    logo: "/assets/generated/fortnite-logo-transparent.dim_200x200.png",
  },
  {
    id: "codm",
    name: "Call of Duty Mobile",
    logo: "/assets/generated/codm-logo-transparent.dim_200x200.png",
  },
  {
    id: "valorant",
    name: "Valorant",
    logo: "/assets/generated/valorant-logo-transparent.dim_200x200.png",
  },
  {
    id: "roblox",
    name: "Roblox",
    logo: "/assets/generated/roblox-logo-transparent.dim_200x200.png",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #0d1117 50%, #0a0f1a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay for esports feel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: "700",
          color: "#f0f0f0",
          marginBottom: "0.5rem",
          textAlign: "center",
          letterSpacing: "-0.02em",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            color: "#22c55e",
            textShadow:
              "0 0 20px rgba(34,197,94,0.7), 0 0 40px rgba(34,197,94,0.3)",
          }}
        >
          Levelup
        </span>{" "}
        Gaming Academy
      </h1>
      <p
        style={{
          fontSize: "1rem",
          color: "#9ca3af",
          marginBottom: "2.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        Choose a game to start training
      </p>

      {/* Frosted glass oval — dark glassmorphism */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "50%",
          padding: "3rem 4rem",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 0 40px rgba(34,197,94,0.15), 0 8px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={() =>
                navigate({ to: "/game/$gameId", params: { gameId: game.id } })
              }
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.8rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#6b7280", textDecoration: "underline" }}
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}

function GameCard({
  game,
  onClick,
}: { game: { id: string; name: string; logo: string }; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      data-ocid={`home.${game.id}.card`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "130px",
        height: "130px",
        background: hovered ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: hovered
          ? "1px solid rgba(34,197,94,0.7)"
          : "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px",
        boxShadow: hovered
          ? "0 0 24px rgba(34,197,94,0.6), 0 6px 20px rgba(0,0,0,0.4)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1)",
        padding: "0.75rem",
      }}
    >
      <img
        src={game.logo}
        alt={game.name}
        style={{
          width: "72px",
          height: "72px",
          objectFit: "contain",
          display: "block",
          margin: "0 auto",
        }}
      />
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "600",
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {game.name}
      </span>
    </button>
  );
}
