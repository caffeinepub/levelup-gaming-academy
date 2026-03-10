import { useNavigate } from "@tanstack/react-router";
import type React from "react";
import { useState } from "react";

function ChessIcon() {
  return (
    <svg
      role="img"
      aria-label="Chess"
      viewBox="0 0 64 64"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="52" width="24" height="5" rx="2" fill="#ffffff" />
      <rect x="24" y="44" width="16" height="8" rx="1" fill="#ffffff" />
      <path d="M26 44 Q26 30 32 24 Q38 30 38 44Z" fill="#ffffff" />
      <circle cx="32" cy="14" r="5" fill="#ffffff" />
      <rect x="29" y="19" width="6" height="6" fill="#ffffff" />
    </svg>
  );
}

function FortniteIcon() {
  return (
    <svg
      role="img"
      aria-label="Fortnite"
      viewBox="0 0 64 64"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="32,6 42,22 58,22 46,34 50,52 32,42 14,52 18,34 6,22 22,22"
        fill="#c084fc"
        stroke="#a855f7"
        strokeWidth="1.5"
      />
      <polygon
        points="32,16 38,26 48,26 40,33 43,44 32,38 21,44 24,33 16,26 26,26"
        fill="#7c3aed"
      />
    </svg>
  );
}

function CodmIcon() {
  return (
    <svg
      role="img"
      aria-label="Call of Duty Mobile"
      viewBox="0 0 64 64"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#f97316"
        strokeWidth="2.5"
        fill="none"
      />
      <line
        x1="32"
        y1="10"
        x2="32"
        y2="20"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="44"
        x2="32"
        y2="54"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="32"
        x2="20"
        y2="32"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="32"
        x2="54"
        y2="32"
        stroke="#f97316"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="4" fill="#f97316" />
    </svg>
  );
}

function ValorantIcon() {
  return (
    <svg
      role="img"
      aria-label="Valorant"
      viewBox="0 0 64 64"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 14 L32 52 L44 28 L24 28 L20 14 Z" fill="#ff4655" />
      <path d="M32 52 L54 14 L40 14 L32 35 Z" fill="#ffffff" />
    </svg>
  );
}

function RobloxIcon() {
  return (
    <svg
      role="img"
      aria-label="Roblox"
      viewBox="0 0 64 64"
      width="56"
      height="56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="12" width="40" height="40" rx="6" fill="#e2231a" />
      <rect x="22" y="22" width="12" height="12" rx="2" fill="#ffffff" />
      <rect x="30" y="30" width="12" height="12" rx="2" fill="#ffffff" />
    </svg>
  );
}

const games = [
  { id: "chess", name: "Chess", Icon: ChessIcon },
  { id: "fortnite", name: "Fortnite", Icon: FortniteIcon },
  { id: "codm", name: "Call of Duty Mobile", Icon: CodmIcon },
  { id: "valorant", name: "Valorant", Icon: ValorantIcon },
  { id: "roblox", name: "Roblox", Icon: RobloxIcon },
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
      {/* Grid overlay */}
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

      {/* Description above title */}
      <p
        style={{
          fontSize: "0.9rem",
          color: "#9ca3af",
          marginBottom: "0.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          maxWidth: "480px",
        }}
      >
        LevelUp Gaming Academy is here to help you improve your gaming skills.
      </p>

      {/* Main title */}
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: "700",
          color: "#f0f0f0",
          marginBottom: "2.5rem",
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
          LevelUp
        </span>{" "}
        Gaming Academy
      </h1>

      {/* Frosted glass oval */}
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {/* Subtitle above game icons */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "#9ca3af",
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.01em",
          }}
        >
          For further assistance please select your game.
        </p>

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
}: {
  game: { id: string; name: string; Icon: () => React.ReactElement };
  onClick: () => void;
}) {
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
        background: hovered ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: hovered
          ? "1px solid rgba(34,197,94,0.45)"
          : "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px",
        boxShadow: hovered
          ? "0 0 16px rgba(34,197,94,0.3), 0 6px 20px rgba(0,0,0,0.4)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "scale(1.05) translateY(-2px)" : "scale(1)",
        padding: "0.75rem",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <game.Icon />
      </div>
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
