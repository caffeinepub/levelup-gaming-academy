import { Zap } from "lucide-react";
import { SiDiscord, SiTwitch, SiX, SiYoutube } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Instructors", href: "#instructors" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: SiDiscord, label: "Discord", href: "#" },
  { icon: SiX, label: "X / Twitter", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
  { icon: SiTwitch, label: "Twitch", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border bg-background/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-primary">Level</span>up Gaming Academy
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The world&rsquo;s most immersive gaming education platform. From
              casual to competitive — we build champions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Platform
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Programs
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Game Design",
                "Esports Strategy",
                "Game Programming",
                "3D Art & Design",
                "Sound Design",
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#courses"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Levelup Gaming Academy. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
