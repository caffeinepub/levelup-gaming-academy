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

const packPrices: Record<string, string> = {
  beginner: "$10",
  advanced: "$15",
  pro: "$20",
};

const telegramLinks: Record<string, Record<string, string>> = {
  chess: {
    beginner: "https://t.me/LevelupGamingAcademy1_bot?start=chess_beginner",
    advanced: "https://t.me/LevelupGamingAcademy1_bot?start=chess_advanced",
    pro: "https://t.me/LevelupGamingAcademy1_bot?start=chess_pro",
  },
  valorant: {
    beginner: "https://t.me/LevelupGamingAcademy1_bot?start=valorant_beginner",
    advanced: "https://t.me/LevelupGamingAcademy1_bot?start=valorant_advanced",
    pro: "https://t.me/LevelupGamingAcademy1_bot?start=valorant_pro",
  },
  fortnite: {
    beginner: "https://t.me/LevelupGamingAcademy1_bot?start=fortnite_beginner",
    advanced: "https://t.me/LevelupGamingAcademy1_bot?start=fortnite_advanced",
    pro: "https://t.me/LevelupGamingAcademy1_bot?start=fortnite_pro",
  },
  roblox: {
    beginner: "https://t.me/LevelupGamingAcademy1_bot?start=roblox_beginner",
    advanced: "https://t.me/LevelupGamingAcademy1_bot?start=roblox_advanced",
    pro: "https://t.me/LevelupGamingAcademy1_bot?start=roblox_pro",
  },
  codm: {
    beginner: "https://t.me/LevelupGamingAcademy1_bot?start=codm_beginner",
    advanced: "https://t.me/LevelupGamingAcademy1_bot?start=codm_advanced",
    pro: "https://t.me/LevelupGamingAcademy1_bot?start=codm_pro",
  },
};

const proTournamentBenefits = [
  "Access to exclusive daily tournaments",
  "5 tournaments organized every day",
  "Entry fee between $2 and $10 depending on the tournament",
  "Cash prizes for winners",
  "Compete against other high-level trained players",
  "Improve competitive gameplay experience",
  "Access to Advanced Pack training content",
];

const beginnerBullets = [
  "Understanding basic game mechanics",
  "Learning controls and core gameplay systems",
  "Beginner aim or movement training depending on the game",
  "Map awareness and positioning basics",
  "Improving reaction time and decision making",
  "Introduction to strategies used by skilled players",
];

const beginnerGoal =
  "Build strong fundamentals so players can progress to advanced gameplay.";

const advancedBullets = [
  "Improving aim accuracy and movement mechanics",
  "Advanced positioning and map control",
  "Learning high-IQ plays and tactical decisions",
  "Understanding enemy prediction and strategy",
  "Game sense improvement for competitive matches",
  "Advanced techniques used by professional esports players",
];

const advancedGoal =
  "Help players play like competitive esports level players.";

const packs = [
  {
    id: "beginner",
    name: "Beginner Pack",
    bullets: beginnerBullets,
    goal: beginnerGoal,
    popular: false,
  },
  {
    id: "advanced",
    name: "Advanced Pack",
    bullets: advancedBullets,
    goal: advancedGoal,
    popular: false,
  },
  {
    id: "pro",
    name: "Pro Pack",
    bullets: [] as string[],
    goal: "",
    popular: true,
  },
];

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
        fontFamily: "'Mona Sans', sans-serif",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none",
        }}
      />
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
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 0 20px rgba(34,197,94,0.4)",
            marginBottom: "0.4rem",
            fontFamily: "'Cabinet Grotesk', 'Mona Sans', sans-serif",
            letterSpacing: "-0.02em",
            animation: "fadeIn 0.7s ease forwards",
          }}
        >
          {gameName}
        </h1>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.95rem",
            marginBottom: "2.5rem",
            animation: "fadeIn 0.9s ease forwards",
          }}
        >
          Choose your training pack
        </p>

        {/* Pack cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {packs.map((pack, index) => (
            <PackCard
              key={pack.id}
              pack={pack}
              index={index}
              telegramUrl={
                telegramLinks[gameId]?.[pack.id] ??
                "https://t.me/LevelupGamingAcademy1_bot"
              }
            />
          ))}
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: "4rem",
            textAlign: "center",
            color: "#4b5563",
            fontSize: "0.8rem",
            letterSpacing: "0.01em",
          }}
        >
          © 2026 LevelUp Gaming Academy — Helping gamers level up their skills.
        </footer>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "0.45rem",
      }}
    >
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.55rem",
            fontSize: "0.82rem",
            color: "#d1d5db",
            lineHeight: 1.5,
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 6px rgba(34,197,94,0.7)",
              flexShrink: 0,
              marginTop: "0.3rem",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function PackCard({
  pack,
  index,
  telegramUrl,
}: {
  pack: {
    id: string;
    name: string;
    bullets: string[];
    goal: string;
    popular: boolean;
  };
  index: number;
  telegramUrl: string;
}) {
  const [hovered, setHovered] = useState(false);
  const price = packPrices[pack.id];

  return (
    <div
      data-ocid={`game.${pack.id}.card`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 240px",
        background: hovered ? "rgba(34,197,94,0.09)" : "rgba(255,255,255,0.06)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: pack.popular
          ? "2px solid rgba(34,197,94,0.6)"
          : hovered
            ? "1px solid rgba(34,197,94,0.5)"
            : "1px solid rgba(34,197,94,0.2)",
        boxShadow: hovered
          ? "0 0 24px rgba(34,197,94,0.35), 0 8px 28px rgba(0,0,0,0.5)"
          : pack.popular
            ? "0 0 16px rgba(34,197,94,0.18), 0 4px 16px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.4)",
        borderRadius: "14px",
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        position: "relative",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        animation: `slideUp 0.5s ease ${index * 0.1 + 0.2}s both`,
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
            fontSize: "0.68rem",
            fontWeight: 700,
            padding: "3px 12px",
            borderRadius: "999px",
            whiteSpace: "nowrap",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            boxShadow: "0 0 10px rgba(34,197,94,0.5)",
          }}
        >
          Most Popular
        </span>
      )}

      <h2
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#ffffff",
          margin: 0,
          letterSpacing: "-0.01em",
          fontFamily: "'Cabinet Grotesk', 'Mona Sans', sans-serif",
        }}
      >
        {pack.name}
      </h2>

      {/* Beginner / Advanced bullet layout */}
      {pack.id !== "pro" && pack.bullets.length > 0 && (
        <>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#22c55e",
              margin: 0,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Training includes:
          </p>
          <BulletList items={pack.bullets} />
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#22c55e",
              margin: "0.25rem 0 0",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Goal:
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: "#d1d5db",
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {pack.goal}
          </p>
        </>
      )}

      {/* Pro Player Benefits */}
      {pack.id === "pro" && (
        <div
          style={{
            paddingTop: "0.25rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#22c55e",
              margin: "0 0 0.6rem 0",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Pro Player Benefits
          </p>
          <BulletList items={proTournamentBenefits} />
        </div>
      )}

      {/* Telegram button */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid={`game.${pack.id}.primary_button`}
        style={{
          display: "block",
          textAlign: "center",
          backgroundColor: "#22c55e",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "1rem",
          padding: "0.7rem 1rem",
          borderRadius: "8px",
          boxShadow: "0 0 14px rgba(34,197,94,0.45)",
          marginTop: "0.5rem",
          letterSpacing: "0.02em",
          textDecoration: "none",
          transition: "background 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#16a34a";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 0 20px rgba(34,197,94,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            "#22c55e";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow =
            "0 0 14px rgba(34,197,94,0.45)";
        }}
      >
        Price — {price}
      </a>
    </div>
  );
}
