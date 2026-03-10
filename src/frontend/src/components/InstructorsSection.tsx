import type { Instructor } from "@/backend.d";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetInstructors } from "@/hooks/useQueries";
import { motion } from "motion/react";

const FALLBACK_INSTRUCTORS: Instructor[] = [
  {
    id: 1n,
    name: "Alex 'AceFrame' Torres",
    title: "Lead Game Designer",
    bio: "Former lead designer at Riot Games with 12 years crafting competitive titles. Alex has shipped 4 AAA games and mentored 2,000+ students worldwide.",
  },
  {
    id: 2n,
    name: "Priya Nair",
    title: "Esports Performance Coach",
    bio: "Ex-Team Liquid analyst and certified sports psychologist. Priya specializes in turning mechanically gifted players into disciplined, consistent competitors.",
  },
  {
    id: 3n,
    name: "Marcus 'Code9' Chen",
    title: "Senior Unity Developer",
    bio: "10 years of indie and studio game development, published on Steam, Switch, and mobile. Marcus makes complex programming concepts feel natural and intuitive.",
  },
  {
    id: 4n,
    name: "Sofia Delacroix",
    title: "3D Art Director",
    bio: "Award-winning environment artist with credits at Naughty Dog and CD Projekt Red. Sofia's signature style blends photorealism with expressive artistry.",
  },
];

const AVATAR_COLORS = [
  "from-primary/80 to-primary/30",
  "from-cyan/80 to-cyan/30",
  "from-accent/80 to-accent/30",
  "from-pink-500/80 to-pink-500/30",
];

const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2", "sk-3"];

function InstructorCard({
  instructor,
  index,
}: { instructor: Instructor; index: number }) {
  const initials =
    instructor.name
      .split(" ")
      .filter((w) => w.match(/^[A-Z]/))
      .slice(0, 2)
      .map((w) => w[0])
      .join("") || instructor.name.slice(0, 2).toUpperCase();

  const gradientClass = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div
        className={`w-20 h-20 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4 ring-2 ring-border group-hover:ring-primary/40 transition-all`}
      >
        <span className="font-display text-xl font-black text-white">
          {initials}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold mb-1">{instructor.name}</h3>
      <p className="text-sm font-semibold text-primary mb-3">
        {instructor.title}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
        {instructor.bio}
      </p>
    </motion.div>
  );
}

export default function InstructorsSection() {
  const { data: instructors, isLoading } = useGetInstructors();
  const displayInstructors =
    instructors && instructors.length > 0 ? instructors : FALLBACK_INSTRUCTORS;

  return (
    <section id="instructors" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_60%,oklch(0.78_0.2_195/0.07),transparent)]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="font-mono text-sm tracking-widest uppercase mb-3 block"
            style={{ color: "oklch(var(--cyan))" }}
          >
            Learn From The Best
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Meet Your{" "}
            <span
              style={{
                color: "oklch(var(--cyan))",
                textShadow: "0 0 20px oklch(var(--cyan) / 0.6)",
              }}
            >
              Instructors
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Industry veterans, champion players, and award-winning creators
            &mdash; all here to accelerate your journey.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-72 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayInstructors.map((instructor, i) => (
              <InstructorCard
                key={String(instructor.id)}
                instructor={instructor}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
