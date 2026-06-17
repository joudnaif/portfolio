import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "Joud.nbk@gmail.com", href: "mailto:Joud.nbk@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/joudnaif", href: "github.com/joudnaif" },
  { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/Joudbakarman", href: "https://www.linkedin.com/in/Joudbakarman" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px bg-foreground/30" />
          <span
            className="text-foreground/50 tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em" }}
          >
            04 — Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              className="text-foreground mb-6"
            >
              Let's build something
              <span style={{ fontStyle: "italic", color: "var(--primary)" }}> together.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}
            >
              Open to coop, full-time roles, internships, and collaboration projects. I'd love to connect!
            </motion.p>
          </div>

          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-center justify-between rounded-2xl p-5 group"
                style={{ background: "var(--card)", transition: "background 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--foreground)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--card)")}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--primary)" }}
                  >
                    <link.icon size={16} color="white" />
                  </div>
                  <div>
                    <div
                      className="text-foreground/50 group-hover:text-white/50 transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-foreground group-hover:text-white transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
                    >
                      {link.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-foreground/30 group-hover:text-white/50 transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span
            className="text-foreground/40"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem" }}
          >
            © 2026 Joud Bakarman · IT Graduate
          </span>
          <span
            className="text-foreground/30"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "0.9rem" }}
          >
            Built with curiosity.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
