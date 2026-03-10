import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetCourses, useSubmitForm } from "@/hooks/useQueries";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
  const { data: courses } = useGetCourses();
  const {
    mutate: submitForm,
    isPending,
    isSuccess,
    isError,
    reset,
  } = useSubmitForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    courseInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(form);
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            data-ocid="contact.success_state"
            className="bg-card border border-accent/40 rounded-2xl p-12 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">
              You&rsquo;re In!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thanks for reaching out. Our team will contact you within 24 hours
              with next steps for your enrollment.
            </p>
            <Button
              onClick={() => {
                reset();
                setForm({
                  name: "",
                  email: "",
                  courseInterest: "",
                  message: "",
                });
              }}
              variant="outline"
              className="border-accent/40 text-accent hover:bg-accent/10"
            >
              Submit Another
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,oklch(0.78_0.2_195/0.06),transparent)]" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="font-mono text-sm tracking-widest uppercase mb-3 block"
              style={{ color: "oklch(var(--cyan))" }}
            >
              Ready to Begin?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Start Your{" "}
              <span
                style={{
                  color: "oklch(var(--cyan))",
                  textShadow: "0 0 20px oklch(var(--cyan) / 0.6)",
                }}
              >
                Journey
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Drop us a message and an enrollment advisor will reach out within
              24 hours. Tell us which program interests you most and we&rsquo;ll
              craft a personalized learning plan.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: "🎮", text: "Personalized curriculum guidance" },
                { icon: "🏆", text: "Flexible schedule options" },
                { icon: "💬", text: "Community of 10,000+ gamers" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name" className="text-sm font-semibold">
                  Full Name
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.name.input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="bg-background border-border focus:border-primary/60"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-sm font-semibold"
                >
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  data-ocid="contact.email.input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="bg-background border-border focus:border-primary/60"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-semibold">Course Interest</Label>
                <Select
                  value={form.courseInterest}
                  onValueChange={(v) =>
                    setForm((p) => ({ ...p, courseInterest: v }))
                  }
                >
                  <SelectTrigger
                    data-ocid="contact.course.select"
                    className="bg-background border-border focus:border-primary/60"
                  >
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {(courses && courses.length > 0
                      ? courses
                      : [
                          { id: 1n, title: "Game Design Fundamentals" },
                          { id: 2n, title: "Esports Strategy Mastery" },
                          { id: 3n, title: "Coding for Games with Unity" },
                          { id: 4n, title: "3D Art & Environment Design" },
                          { id: 5n, title: "Game Audio & Sound Design" },
                          { id: 6n, title: "Competitive Gaming Psychology" },
                        ]
                    ).map((c) => (
                      <SelectItem key={String(c.id)} value={c.title}>
                        {c.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-semibold"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.message.textarea"
                  placeholder="Tell us about your goals..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={4}
                  className="bg-background border-border focus:border-primary/60 resize-none"
                />
              </div>

              {isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again.
                </div>
              )}

              {isPending && (
                <div
                  data-ocid="contact.loading_state"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending your message...
                </div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                data-ocid="contact.submit_button"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold glow-primary hover:shadow-glow-primary transition-all"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message & Enroll"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
