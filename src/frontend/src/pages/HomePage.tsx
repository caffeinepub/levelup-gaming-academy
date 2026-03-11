import { useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";

const games = [
  {
    id: "chess",
    name: "Chess",
    img: "/assets/uploads/chess-3.jpeg",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    img: "/assets/uploads/fortnight-5.jpeg",
  },
  {
    id: "codm",
    name: "Call of Duty Mobile",
    img: "/assets/uploads/codm-1.jpeg",
  },
  {
    id: "valorant",
    name: "Valorant",
    img: "/assets/uploads/valorant-1.jpg",
  },
  {
    id: "roblox",
    name: "Roblox",
    img: "/assets/uploads/roblox-4.jpeg",
  },
];

function useParticles(count: number) {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.floor((i * 137.5) % 100)}%`,
      left: `${Math.floor((i * 97.3 + 13) % 100)}%`,
      size: 3 + (i % 4),
      duration: `${8 + (i % 12)}s`,
      delay: `${-(i * 1.3) % 15}s`,
      opacity: 0.3 + (i % 4) * 0.1,
    }));
  }, [count]);
}

export default function HomePage() {
  const navigate = useNavigate();
  const particles = useParticles(15);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #050a14 0%, #010308 60%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Mona Sans', sans-serif",
      }}
    >
      {/* Glowing grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: `rgba(34,197,94,${p.opacity})`,
            boxShadow: `0 0 ${p.size * 3}px rgba(34,197,94,0.6)`,
            animation: `floatParticle ${p.duration} ${p.delay} ease-in-out infinite`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}

      {/* Description above title */}
      <p
        style={{
          fontSize: "0.95rem",
          color: "#9ca3af",
          marginBottom: "0.75rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          maxWidth: "560px",
          lineHeight: 1.6,
          animation: "fadeIn 1s ease forwards",
          letterSpacing: "0.01em",
        }}
      >
        LevelUp Gaming Academy is here to help you improve your gaming skills
        and become a better competitive player.
      </p>

      {/* Main title */}
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "#22c55e",
          marginBottom: "2.5rem",
          textAlign: "center",
          letterSpacing: "-0.03em",
          position: "relative",
          zIndex: 1,
          lineHeight: 1.1,
          animation:
            "fadeIn 1s ease forwards, glowPulse 3s ease-in-out infinite",
          fontFamily: "'Cabinet Grotesk', 'Mona Sans', sans-serif",
        }}
      >
        LevelUp Gaming Academy
      </h1>

      {/* Frosted glass oval */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: "50%",
          padding: "3rem 4rem",
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow:
            "0 0 60px rgba(34,197,94,0.12), 0 8px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          animation: "fadeIn 1.2s ease forwards",
        }}
      >
        {/* Subtitle above game icons */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "#9ca3af",
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.02em",
            animation: "fadeIn 1.5s ease forwards",
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
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              index={index}
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
          color: "#4b5563",
          fontSize: "0.8rem",
          position: "relative",
          zIndex: 1,
          letterSpacing: "0.01em",
        }}
      >
        © 2026 LevelUp Gaming Academy — Helping gamers level up their skills.
      </footer>
    </div>
  );
}

function GameCard({
  game,
  index,
  onClick,
}: {
  game: { id: string; name: string; img: string };
  index: number;
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
        width: "140px",
        height: "160px",
        overflow: "hidden",
        borderRadius: "16px",
        background: "rgba(0,0,0,0.6)",
        border: hovered
          ? "1px solid rgba(34,197,94,0.55)"
          : "1px solid rgba(255,255,255,0.12)",
        boxShadow: hovered
          ? "0 0 22px rgba(34,197,94,0.4), 0 8px 24px rgba(0,0,0,0.5)"
          : "0 4px 16px rgba(0,0,0,0.4)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        transform: hovered
          ? "scale(1.05) translateY(-3px)"
          : "scale(1) translateY(0)",
        padding: 0,
        position: "relative",
        animation: `slideUp 0.5s ease ${index * 0.1}s both`,
      }}
    >
      {/* Full-card image */}
      <img
        src={game.img}
        alt={game.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          padding: "8px",
        }}
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.25)",
          pointerEvents: "none",
        }}
      />

      {/* Game name at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          background: "rgba(0,0,0,0.65)",
          padding: "6px 8px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            display: "block",
            letterSpacing: "0.02em",
          }}
        >
          {game.name}
        </span>
      </div>
    </button>
  );
}
