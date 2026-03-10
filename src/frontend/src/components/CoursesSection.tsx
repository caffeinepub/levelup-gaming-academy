import type { Course } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCourses } from "@/hooks/useQueries";
import { ArrowRight, BarChart2, Clock } from "lucide-react";
import { motion } from "motion/react";

const FALLBACK_COURSES: Course[] = [
  {
    id: 1n,
    title: "Game Design Fundamentals",
    category: "Game Design",
    level: "Beginner",
    duration: "8 weeks",
    description:
      "Master the art and science of game design — from mechanics and systems thinking to narrative loops and player psychology.",
  },
  {
    id: 2n,
    title: "Esports Strategy Mastery",
    category: "Esports",
    level: "Intermediate",
    duration: "6 weeks",
    description:
      "Break down professional meta, draft theory, team coordination and in-game decision-making used by top-tier esports pros.",
  },
  {
    id: 3n,
    title: "Coding for Games with Unity",
    category: "Programming",
    level: "Beginner",
    duration: "12 weeks",
    description:
      "Learn C# and Unity from scratch to build your first real, polished 3D game — and publish it to major platforms.",
  },
  {
    id: 4n,
    title: "3D Art & Environment Design",
    category: "Art & Design",
    level: "Intermediate",
    duration: "10 weeks",
    description:
      "Create stunning game-ready 3D assets, environments and characters using Blender and industry-standard workflows.",
  },
  {
    id: 5n,
    title: "Game Audio & Sound Design",
    category: "Audio",
    level: "Beginner",
    duration: "5 weeks",
    description:
      "Compose adaptive soundscapes, design iconic SFX, and implement audio systems that elevate player immersion.",
  },
  {
    id: 6n,
    title: "Competitive Gaming Psychology",
    category: "Esports",
    level: "Advanced",
    duration: "4 weeks",
    description:
      "Train your mental game: focus under pressure, tilt recovery, peak performance mindset and performance analytics.",
  },
];

const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4", "sk-5"];

const categoryColors: Record<string, string> = {
  "Game Design": "text-primary border-primary/40 bg-primary/10",
  Esports: "border-cyan/40 bg-cyan/10",
  Programming: "text-accent border-accent/40 bg-accent/10",
  "Art & Design": "border-pink-400/40 bg-pink-400/10 text-pink-400",
  Audio: "border-yellow-400/40 bg-yellow-400/10 text-yellow-400",
};

const levelColors: Record<string, string> = {
  Beginner: "text-accent",
  Intermediate: "text-primary",
  Advanced: "text-cyan",
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const categoryClass =
    categoryColors[course.category] ??
    "text-primary border-primary/40 bg-primary/10";
  const levelClass = levelColors[course.level] ?? "text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      data-ocid={`courses.item.${index + 1}`}
      className="group relative bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/50 hover:glow-primary transition-all duration-300 cursor-pointer"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between gap-2">
        <Badge
          variant="outline"
          className={`text-xs font-mono font-semibold px-2.5 py-0.5 ${categoryClass}`}
        >
          {course.category}
        </Badge>
        <div
          className={`flex items-center gap-1 text-xs font-semibold ${levelClass}`}
        >
          <BarChart2 className="w-3.5 h-3.5" />
          {course.level}
        </div>
      </div>

      <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">
        {course.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
        {course.description}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-border">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {course.duration}
        </div>
        <Button
          size="sm"
          data-ocid={`courses.enroll.button.${index + 1}`}
          className="bg-primary/15 hover:bg-primary/30 text-primary border border-primary/30 hover:border-primary/60 text-xs font-semibold transition-all group/btn"
        >
          Enroll
          <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const { data: courses, isLoading } = useGetCourses();
  const displayCourses =
    courses && courses.length > 0 ? courses : FALLBACK_COURSES;

  return (
    <section id="courses" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,oklch(0.65_0.28_295/0.07),transparent)]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase mb-3 block">
            What You&apos;ll Learn
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Courses &amp;{" "}
            <span className="text-primary text-glow-primary">Programs</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            From beginner to pro &mdash; choose your path and level up with
            industry-leading curriculum crafted by gaming experts.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-64 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayCourses.map((course, i) => (
              <CourseCard key={String(course.id)} course={course} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
