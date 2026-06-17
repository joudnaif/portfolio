import { motion } from "motion/react";

const skills = [
  { category: "Artificial Intelligence", items: ["ML", "DL", "Computer Vision", "Data Processing"] },
  { category: "Software Development", items: ["Flutter", "Firebase", "APIs", "Python"] },
  { category: "Tools", items: ["VS Code", "Xcode", "Github", "Android Studio"] },
  { category: "Research & Data", items: ["Scientific Research", "Data Analysis", "Academic Writing"] },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
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
            01 — About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              className="text-foreground mb-8"
            >
              Hi! I'm a passionate
              <span style={{ fontStyle: "italic" }}> problem solver</span> and technology enthusiast
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="space-y-4"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}
            >
              <p>
                I'm an Information Technology graduate interested in Internet of Things (IoT), AI, software development, and research. I enjoy exploring how different technologies connect together to create practical solutions that make a real impact.              </p>
              <p>
                My experience ranges from developing mobile and web applications to working on AI research projects and connected systems. I am a fast learner who enjoys stepping into new technical domains, acquiring new skills, and continuously expanding my knowledge.              </p>
              <p>
                I believe that technology evolves rapidly, and one of my greatest strengths is the ability to adapt, learn, and contribute across multiple disciplines.              </p>
            </motion.div>
          </div>

          {/* Right: Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="rounded-2xl p-5"
                style={{ background: "var(--card)" }}
              >
                <div
                  className="text-foreground/50 mb-3 tracking-widest uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", fontWeight: 500 }}
                >
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full text-foreground/80"
                      style={{
                        background: "var(--background)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
