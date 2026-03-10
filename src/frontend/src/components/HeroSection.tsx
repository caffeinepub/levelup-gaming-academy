import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Star } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-gaming-bg.dim_1920x1080.jpg')",
        }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.65_0.28_295/0.15),transparent)]" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.65 0.28 295 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.28 295 / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating decorative blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-[5%] w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-[8%] w-56 h-56 rounded-full bg-cyan/10 blur-3xl pointer-events-none"
        style={{ color: "oklch(var(--cyan))" }}
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-accent/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-mono text-primary mb-6"
        >
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>#1 Gaming Education Platform</span>
          <Star className="w-3.5 h-3.5 fill-current" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="block text-foreground">Level Up</span>
          <span className="block text-primary text-glow-primary">
            Your Game
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Master game design, conquer esports strategy, and build the next great
          game — all with world-class instructors and hands-on curriculum.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            data-ocid="hero.courses.primary_button"
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-base px-8 py-6 glow-primary hover:shadow-glow-primary transition-all duration-300 group"
          >
            <a href="#courses" className="flex items-center gap-2">
              Browse Courses
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.enroll.primary_button"
            className="border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan font-bold text-base px-8 py-6 transition-all duration-300 group"
            style={{ color: "oklch(var(--cyan))" }}
          >
            <a href="#contact" className="flex items-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              Get Started Free
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "10K+", label: "Students Enrolled" },
            { value: "50+", label: "Expert Courses" },
            { value: "98%", label: "Completion Rate" },
            { value: "200+", label: "Industry Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-black text-primary text-glow-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
