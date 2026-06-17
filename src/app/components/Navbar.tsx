import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(237, 231, 218, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,18,8,0.08)" : "none",
      }}
    >
      <a
        href="#"
        className="text-foreground/80 hover:text-foreground transition-colors"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", fontStyle: "italic" }}
      >
        JB.
      </a>

      <div className="flex items-center gap-8">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="text-foreground/60 hover:text-foreground transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", fontWeight: 400 }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
