import { motion } from "motion/react";

const courses = [
  "Data Mining",
  "Artificial Intelligence",
  "Web Applications Engineering",
  "Wireless & Mobile Computing",
  "Practical Software Engineering",
  "Cloud Computing",
  "Big Data Principles",
  "IT Entrepreneurship & Innovation",
];

const achievements = [
  { label: "GPA", value: "4.77/5.0" },
  { label: "Projects", value: "6+" },
  { label: "Research Published", value: "1" },
];

export function EducationSection() {
  return (
    <section id="education" className="py-32 px-6">
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
            02 — Education
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main degree card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-3xl p-8 relative overflow-hidden"
            style={{ background: "var(--foreground)" }}
          >
            {/* Decorative folder tab */}
            <div
              className="absolute top-0 left-8 w-20 h-5 rounded-b-none rounded-t-xl"
              style={{ background: "var(--primary)" }}
            />

            <div className="mt-6">
              <div
                className="text-white/50 mb-2 tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}
              >
                Bachelor of
              </div>
              <h3
                className="text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.2 }}
              >
                Information Technology
              </h3>
              <div
                className="mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "var(--primary)",
                  fontWeight: 500,
                }}
              >
                Track: Networks and Internet of Things (NIoT)
              </div>

              <div
                className="text-white/70 mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}
              >
                King Saud University
              </div>
              <div
                className="text-white/40"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem" }}
              >
                2021 – 2026
              </div>

              {/* Stats row */}
              <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
                {achievements.map(a => (
                  <div key={a.label}>
                    <div
                      className="text-white"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem" }}
                    >
                      {a.value}
                    </div>
                    <div
                      className="text-white/40"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}
                    >
                      {a.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Relevant courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-2 rounded-3xl p-8"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-foreground/50 mb-6 tracking-widest uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}
            >
              Relevant Courses
            </div>
            <div className="flex flex-col gap-3">
              {courses.map((course, i) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span
                    className="text-foreground/80"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
                  >
                    {course}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
