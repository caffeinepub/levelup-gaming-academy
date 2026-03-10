import type { Testimonial } from "@/backend.d";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetTestimonials } from "@/hooks/useQueries";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1n,
    studentName: "Jordan K.",
    quote:
      "Levelup completely changed my trajectory. Within three months I went from casual player to junior game designer at a mid-size studio. The curriculum is shockingly practical.",
    courseTaken: "Game Design Fundamentals",
  },
  {
    id: 2n,
    studentName: "Aisha M.",
    quote:
      "The esports strategy course broke down concepts I&apos;d never seen explained so clearly anywhere online. My ranked win rate jumped 18% in the first month.",
    courseTaken: "Esports Strategy Mastery",
  },
  {
    id: 3n,
    studentName: "Leo R.",
    quote:
      "Marcus is a phenomenal teacher. I came in with zero programming experience and shipped my first Steam demo after 14 weeks. The community here is incredible too.",
    courseTaken: "Coding for Games with Unity",
  },
  {
    id: 4n,
    studentName: "Yuki T.",
    quote:
      "Sofia's 3D art course rivals paid university programs at a fraction of the cost. My portfolio now gets consistent callback from studios I always dreamed of working at.",
    courseTaken: "3D Art & Environment Design",
  },
  {
    id: 5n,
    studentName: "Chris V.",
    quote:
      "The mental game coaching was a total revelation. I qualified for my first regional tournament within six weeks of applying the performance frameworks.",
    courseTaken: "Competitive Gaming Psychology",
  },
  {
    id: 6n,
    studentName: "Natasha B.",
    quote:
      "From sound design principles to FMOD integration &mdash; the audio course covered everything. My game's soundtrack just won Best Audio at an indie showcase!",
    courseTaken: "Game Audio & Sound Design",
  },
];

const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2", "sk-3", "sk-4", "sk-5"];

const BORDER_GLOWS = [
  "hover:border-primary/50 hover:shadow-[0_0_20px_oklch(0.65_0.28_295/0.2)]",
  "hover:border-cyan/50 hover:shadow-[0_0_20px_oklch(0.78_0.2_195/0.2)]",
  "hover:border-accent/50 hover:shadow-[0_0_20px_oklch(0.82_0.24_145/0.2)]",
];

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  const borderClass = BORDER_GLOWS[index % BORDER_GLOWS.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`bg-card border border-border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 ${borderClass}`}
    >
      <Quote className="w-8 h-8 text-primary/40" />
      <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="pt-3 border-t border-border">
        <div className="font-display font-bold text-sm">
          {testimonial.studentName}
        </div>
        <div className="text-xs text-muted-foreground mt-0.5">
          {testimonial.courseTaken}
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useGetTestimonials();
  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : FALLBACK_TESTIMONIALS;

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,oklch(0.82_0.24_145/0.05),transparent)]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent tracking-widest uppercase mb-3 block">
            Player Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            What Our{" "}
            <span
              className="text-accent"
              style={{ textShadow: "0 0 20px oklch(var(--accent) / 0.6)" }}
            >
              Students Say
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Thousands of students have leveled up their skills and careers.
            Here&rsquo;s what they have to say.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-52 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((t, i) => (
              <TestimonialCard key={String(t.id)} testimonial={t} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
