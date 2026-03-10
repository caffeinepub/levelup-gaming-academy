import { useNavigate, useParams } from "@tanstack/react-router";
import { useState } from "react";

const games = [
  { id: "chess", name: "Chess" },
  { id: "fortnite", name: "Fortnite" },
  { id: "codm", name: "Call of Duty Mobile" },
  { id: "valorant", name: "Valorant" },
  { id: "roblox", name: "Roblox" },
];

const gameBackgrounds: Record<string, string> = {
  chess: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
  fortnite: "linear-gradient(135deg, #0d0221 0%, #1a0533 50%, #0d1a33 100%)",
  codm: "linear-gradient(135deg, #0a0f0a 0%, #0f1f0f 50%, #1a1000 100%)",
  valorant: "linear-gradient(135deg, #1a0008 0%, #2d0012 50%, #1a0a00 100%)",
  roblox: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",
};

const packs = [
  {
    id: "beginner",
    name: "Beginner Pack",
    description:
      "We will help you improve your skills from the basics and build a strong foundation.",
    popular: false,
    ocid: "game.beginner.button",
  },
  {
    id: "advanced",
    name: "Advanced Pack",
    description:
      "We will help you improve your movement, aim skills, and high IQ gameplay strategies.",
    popular: false,
    ocid: "game.advanced.button",
  },
  {
    id: "pro",
    name: "Pro Pack",
    description:
      "We will help you master aim, movement, and high IQ level plays to compete at a professional level.",
    popular: true,
    ocid: "game.pro.button",
  },
];

const TELEGRAM_BOT = "https://t.me/LevelupAcadem_ybot";

export default function GamePage() {
  const { gameId } = useParams({ from: "/game/$gameId" });
  const navigate = useNavigate();

  const game = games.find((g) => g.id === gameId);
  const gameName = game?.name ?? gameId;
  const bg =
    gameBackgrounds[gameId] ??
    "linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
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
            "linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Back button */}
        <button
          type="button"
          data-ocid="game.back.button"
          onClick={() => navigate({ to: "/" })}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#22c55e",
            fontSize: "0.95rem",
            fontWeight: "500",
            padding: "0.25rem 0",
            marginBottom: "2rem",
          }}
        >
          ← Back
        </button>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "700",
            color: "#ffffff",
            textShadow: "0 0 20px rgba(34,197,94,0.4)",
            marginBottom: "0.4rem",
          }}
        >
          {gameName}
        </h1>
        <p
          style={{
            color: "#d1d5db",
            fontSize: "1rem",
            marginBottom: "2rem",
          }}
        >
          Choose your training pack
        </p>

        {/* Pack cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          {packs.map((pack) => (
            <PackCard key={pack.id} pack={pack} />
          ))}
        </div>

        {/* Tournament note */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem 1.5rem",
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: "12px",
            textAlign: "center",
            color: "#86efac",
            fontSize: "0.95rem",
            fontWeight: "500",
            boxShadow: "0 0 16px rgba(34,197,94,0.1)",
          }}
        >
          🏆 We organize a tournament every month where players can participate
          and win cash prizes.
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "4rem",
            textAlign: "center",
            color: "#6b7280",
            fontSize: "0.8rem",
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
    </div>
  );
}

function PackCard({
  pack,
}: {
  pack: {
    id: string;
    name: string;
    description: string;
    popular: boolean;
    ocid: string;
  };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`game.${pack.id}.card`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 220px",
        background: hovered ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: pack.popular
          ? "2px solid rgba(34,197,94,0.7)"
          : hovered
            ? "1px solid rgba(34,197,94,0.6)"
            : "1px solid rgba(255,255,255,0.12)",
        boxShadow: hovered
          ? "0 0 28px rgba(34,197,94,0.5), 0 6px 24px rgba(0,0,0,0.5)"
          : pack.popular
            ? "0 0 20px rgba(34,197,94,0.2), 0 2px 12px rgba(0,0,0,0.4)"
            : "0 2px 12px rgba(0,0,0,0.4)",
        borderRadius: "14px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        position: "relative",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
      }}
    >
      {pack.popular && (
        <span
          style={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#22c55e",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: "700",
            padding: "3px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            letterSpacing: "0.05em",
          }}
        >
          Most Popular
        </span>
      )}
      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#ffffff",
          margin: 0,
        }}
      >
        {pack.name}
      </h2>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#d1d5db",
          lineHeight: 1.5,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {pack.description}
      </p>
      <a
        data-ocid={pack.ocid}
        href={TELEGRAM_BOT}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#22c55e",
          color: "#ffffff",
          fontWeight: "600",
          fontSize: "0.9rem",
          padding: "0.65rem 1rem",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 0 16px rgba(34,197,94,0.55)",
          transition: "box-shadow 0.2s ease, background-color 0.15s ease",
          marginTop: "0.5rem",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "#16a34a";
          el.style.boxShadow = "0 0 24px rgba(34,197,94,0.8)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "#22c55e";
          el.style.boxShadow = "0 0 16px rgba(34,197,94,0.55)";
        }}
      >
        Start on Telegram
      </a>
    </div>
  );
}
