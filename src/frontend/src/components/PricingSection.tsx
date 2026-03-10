import type { PricingPlan } from "@/backend.d";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetPricingPlans } from "@/hooks/useQueries";
import { Check, Zap } from "lucide-react";
import { motion } from "motion/react";

const SKELETON_KEYS = ["sk-0", "sk-1", "sk-2"];

const FALLBACK_PLANS: PricingPlan[] = [
  {
    id: 1n,
    name: "Starter",
    price: 0n,
    billingPeriod: "month",
    isPopular: false,
    features: [
      "Access to 5 free courses",
      "Community forum access",
      "Monthly live Q&A",
      "Course completion certificates",
    ],
  },
  {
    id: 2n,
    name: "Pro",
    price: 39n,
    billingPeriod: "month",
    isPopular: true,
    features: [
      "Unlimited course access",
      "Live cohort sessions (weekly)",
      "1-on-1 instructor office hours",
      "Project portfolio reviews",
      "Discord Pro community",
      "Course completion certificates",
    ],
  },
  {
    id: 3n,
    name: "Elite",
    price: 99n,
    billingPeriod: "month",
    isPopular: false,
    features: [
      "Everything in Pro",
      "Weekly private coaching sessions",
      "Job placement assistance",
      "Exclusive industry mentorship",
      "Tournament entry sponsorship",
      "Early access to new courses",
    ],
  },
];

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const isPopular = plan.isPopular;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300 ${
        isPopular
          ? "bg-primary/10 border-primary/60 shadow-glow-primary scale-105"
          : "bg-card border-border hover:border-primary/30"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold font-mono uppercase tracking-wider">
            <Zap className="w-3 h-3 fill-current" /> Most Popular
          </span>
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
        <div className="flex items-end gap-1 mt-3">
          <span className="font-display text-4xl font-black">
            {Number(plan.price) === 0 ? "Free" : `$${Number(plan.price)}`}
          </span>
          {Number(plan.price) > 0 && (
            <span className="text-muted-foreground mb-1.5">
              /{plan.billingPeriod}
            </span>
          )}
        </div>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 shrink-0 ${
                isPopular ? "text-primary" : "text-accent"
              }`}
            />
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        data-ocid={`pricing.plan.button.${index + 1}`}
        className={`w-full font-bold transition-all ${
          isPopular
            ? "bg-primary hover:bg-primary/80 text-primary-foreground glow-primary"
            : "bg-muted hover:bg-muted/80 text-foreground"
        }`}
      >
        <a href="#contact">
          {Number(plan.price) === 0 ? "Start Free" : "Get Started"}
        </a>
      </Button>
    </motion.div>
  );
}

export default function PricingSection() {
  const { data: plans, isLoading } = useGetPricingPlans();
  const displayPlans = plans && plans.length > 0 ? plans : FALLBACK_PLANS;

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,oklch(0.65_0.28_295/0.08),transparent)]" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-widest uppercase mb-3 block">
            Choose Your Plan
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
            Simple, Transparent{" "}
            <span className="text-primary text-glow-primary">Pricing</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no long-term
            contracts &mdash; just results.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SKELETON_KEYS.map((k) => (
              <Skeleton key={k} className="h-96 rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {displayPlans.map((plan, i) => (
              <PricingCard key={String(plan.id)} plan={plan} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
