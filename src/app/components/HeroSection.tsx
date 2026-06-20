import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 md:pt-16 pb-24">      {/* Scattered desktop icons — hidden on mobile to avoid overlap */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="absolute top-[12%] left-[6%] flex flex-col items-center gap-1"
        >
          <div className="w-12 h-10 rounded-lg" style={{ background: "linear-gradient(160deg, #7FC0E8 0%, #4E8FC4 100%)", boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.15), 0 2px 8px rgba(91,155,213,0.3)" }}>
            <div className="h-2.5 w-full rounded-t-lg" style={{ background: "linear-gradient(90deg, #A8D4F0, #7BBDE6)" }} />
          </div>
          <span className="text-[10px] text-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>it_projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute top-[18%] right-[8%] flex flex-col items-center gap-1"
        >
          <div className="w-12 h-10 rounded-lg" style={{ background: "linear-gradient(160deg, #7FC0E8 0%, #4E8FC4 100%)", boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.15), 0 2px 8px rgba(91,155,213,0.3)" }}>
            <div className="h-2.5 w-full rounded-t-lg" style={{ background: "linear-gradient(90deg, #A8D4F0, #7BBDE6)" }} />
          </div>
          <span className="text-[10px] text-foreground/60" style={{ fontFamily: "'DM Sans', sans-serif" }}>resume.pdf</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          animate={{ opacity: 1, rotate: -6 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="absolute top-[62%] left-[5%]"
        >
          <div className="bg-foreground/90 text-primary-foreground rounded-xl px-3 py-2 shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="text-[9px] text-white/60 mb-0.5">2026 Edition</div>
            <div className="text-[11px] text-white font-medium">IT Graduate</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 4 }}
          animate={{ opacity: 1, rotate: 4 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute top-[60%] right-[6%]"
        >
          <div className="bg-primary rounded-xl px-3 py-2 shadow-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className="text-[10px] text-white/80 mb-1">Skills</div>
            <div className="flex flex-col gap-0.5">
              {["Artificial Intelligence", "Software Development", "Python"].map(s => (
                <div key={s} className="text-[9px] text-white flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/70 flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero text */}
      <div className="relative text-center z-10 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-foreground/60 mb-2 tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em" }}
        >
          Welcome to my
        </motion.p>

        {/* Giant Portfolio word with folder behind it */}
        <div className="relative inline-block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[40%] z-0"
            style={{ width: "min(340px, 60vw)", height: "min(220px, 38vw)" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                background: "linear-gradient(160deg, #7FC0E8 0%, #4E8FC4 100%)",
                boxShadow: "inset 0 -6px 0 rgba(0,0,0,0.18), 0 12px 40px rgba(91,155,213,0.35)",
                position: "relative",
              }}
            >
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "28%",
                background: "linear-gradient(90deg, #A8D4F0, #7BBDE6)",
                borderRadius: "18px 18px 0 0",
                clipPath: "polygon(0 0, 30% 0, 38% 100%, 0 100%)",
              }} />
              <div style={{
                position: "absolute",
                bottom: "12px",
                right: "16px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
              }}>2025</div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-foreground select-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: "clamp(3.8rem, 13vw, 14rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              fontStyle: "italic",
            }}
          >
            Portfolio
          </motion.h1>
        </div>

        {/* Name and title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10"
        >
          <div
            className="text-foreground"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
          >
            Joud Bakarman
          </div>
          <div
            className="text-foreground/55 mt-1"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.85rem, 2vw, 1rem)", letterSpacing: "0.08em" }}
          >
            IT Graduate · NIoT Track
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-foreground text-primary-foreground rounded-full px-7 py-3 hover:bg-foreground/80 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-foreground/25 text-foreground rounded-full px-7 py-3 hover:bg-foreground/8 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="text-foreground/40 tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}
        >
          Scroll
        </div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
