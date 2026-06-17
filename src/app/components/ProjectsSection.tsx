import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brainalyze",
    category: "AI & Medical Imaging",
    year: "2025/2026",
    description:
      "Brain tumor classification and segmentation system using deep learning models including EfficientNet and U-Net++. The project assists in analyzing MRI images and supports medical diagnosis through automated image processing.",
    tech: ["Python", "Colab", "OpenCV", "Hugging Face API", "Firebase", "VS Code"],
    color: "#5B9BD5",
    highlight: true,
    url: "https://joudnaif-brainalyze.hf.space",
    screenshots: [
      "/images/Brainalyze1.png",
      "/images/Brainalyze3.png",
    ],
  },
  {
    id: 2,
    title: "Bakarman Awards Platform",
    category: "Full Stack Development",
    year: "2026",
    description:
      "A complete web and mobile platform developed for managing academic award applications. The system includes participant registration, document uploads, Firebase integration, and admin dashboard.",
    tech: ["Flutter", "Firebase Storage", "Firebase Hosting", "Dart"],
    color: "#2F6B8A",
    highlight: false,
    url: "https://bakarman.org",
    screenshots: [
      "/images/Bakarman1.png",
      "/images/Bakarman2.png",
    ],
  },
  {
    id: 3,
    title: "Research Publication",
    category: "Research",
    year: "2026",
    description:
      "Published research in medical image analysis focusing on brain tumor classification and segmentation using deep learning techniques. Contributed to model development, experimentation, and scientific writing.",
    tech: ["Deep Learning", "Research Methodology", "Image Processing", "Data Analysis", "Python"],
    color: "#A56B5C",
    highlight: false,
    url: "https://www.mdpi.com/2075-4418/16/11/1745",
    screenshots: [
      "images/Paper.png",
        ],
  },
  {
    id: 4,
    title: "Smart Refrigerator System",
    category: "IoT & Artificial Intelligence (Conceptual Design)",
    year: "C4B88A",
    description:
      "Designed a theoretical Smart Refrigerator System that integrates IoT, AI, and cloud technologies to automate food inventory tracking, predict expiration dates, and reduce household food waste. The project focused on system architecture, technology integration, and feasibility analysis rather than physical implementation.",
    tech: ["ESP32", "Jetson Nano", "YOLOv8", "Flutter", "AWS"],
    color: "#C4B88A",
    highlight: false,
    url: "images/IT481_paper.pdf",
    screenshots: [
      "/images/Fridge1.png",
      "/images/Fridge2.jpg",
    ],
  },
   {
    id: 5,
    title: "Depression Prediction System",
    category: "Artificial Intelligence & Machine Learning",
    year: "2024",
    description:
      "Developed a machine learning system to analyze factors associated with depression and predict outcomes using real-world datasets. The project involved data preprocessing, exploratory data analysis, feature engineering, model training, and performance evaluation to identify patterns and support data-driven insights.",
      tech: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib"
      ],
    color: "#6E8F7A",
    highlight: false,
    url: "https://github.com/joudnaif/IT326-project-depression",
    screenshots: [
      "/images/Dep1.png",
      "/images/Dep2.png",

    ],
  }
];

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "rgba(255,255,255,0.12)" }}>
        <div className="w-2 h-2 rounded-full bg-red-400/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <div className="w-2 h-2 rounded-full bg-green-400/70" />
        <div className="flex-1 mx-2 h-4 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>
      {children}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex(i => (i - 1 + project.screenshots.length) % project.screenshots.length);
  };
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex(i => (i + 1) % project.screenshots.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setImgIndex(0); }}
      className="rounded-3xl overflow-hidden relative"
      style={{
        background: project.highlight ? "var(--foreground)" : "var(--card)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 64px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "default",
      }}
    >
      {/* Folder tab bar */}
      <div className="relative h-14 flex items-end px-6" style={{ background: project.color }}>
        <div
          className="absolute top-0 left-6 w-16 h-4 rounded-t-lg"
          style={{ background: project.color, filter: "brightness(1.2)" }}
        />
        <div className="flex items-center justify-between w-full pb-2">
          <span
            className="text-white/80 uppercase tracking-widest"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em" }}
          >
            {project.category}
          </span>
          <span
            className="text-white/60"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem" }}
          >
            {project.year}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-7">
        <h3
          className="mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
            lineHeight: 1.25,
            color: project.highlight ? "white" : "var(--foreground)",
          }}
        >
          {project.title}
        </h3>
        <p
          className="mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            color: project.highlight ? "rgba(255,255,255,0.6)" : "var(--muted-foreground)",
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full"
              style={{
                background: project.highlight ? "rgba(255,255,255,0.1)" : "var(--background)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                color: project.highlight ? "rgba(255,255,255,0.75)" : "var(--muted-foreground)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshot overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col"
            style={{
              background: project.highlight
                ? "rgba(15,10,5,0.96)"
                : "rgba(28,18,8,0.95)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Top: label */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <span
                className="text-white/50 uppercase tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em" }}
              >
                Preview
              </span>
              {project.screenshots.length > 1 && (
                <div className="flex items-center gap-1">
                  {project.screenshots.map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all"
                      style={{
                        width: i === imgIndex ? "16px" : "5px",
                        height: "5px",
                        background: i === imgIndex ? project.color : "rgba(255,255,255,0.25)",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Screenshot in browser chrome */}
            <div className="flex-1 px-5 relative">
              <BrowserChrome>
                <div className="relative overflow-hidden" style={{ height: "160px" }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIndex}
                      src={project.screenshots[imgIndex]}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  {/* Prev/Next arrows */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImg}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
                      >
                        <ChevronLeft size={14} color="white" />
                      </button>
                      <button
                        onClick={nextImg}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
                      >
                        <ChevronRight size={14} color="white" />
                      </button>
                    </>
                  )}
                </div>
              </BrowserChrome>
            </div>

            {/* Bottom: title + visit button */}
            <div className="px-5 pt-4 pb-5 flex items-center justify-between">
              <div>
                <div
                  className="text-white"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", fontStyle: "italic" }}
                >
                  {project.title}
                </div>
                <div
                  className="text-white/40 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem" }}
                >
                  {project.category}
                </div>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-2 rounded-full px-4 py-2 transition-opacity hover:opacity-80"
                style={{
                  background: project.color,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                Visit
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-foreground/30" />
          <span
            className="text-foreground/50 tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em" }}
          >
            03 — Projects
          </span>
        </motion.div>

        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            className="text-foreground"
          >
            Things I've<br />
            <span style={{ fontStyle: "italic" }}>built.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden sm:flex items-center gap-2"
          >
            <div
              className="w-10 h-8 rounded-lg overflow-hidden"
              style={{ background: "linear-gradient(160deg, #7FC0E8 0%, #4E8FC4 100%)" }}
            >
              <div className="h-2 w-full" style={{ background: "linear-gradient(90deg, #A8D4F0, #7BBDE6)" }} />
            </div>
            <span className="text-foreground/40" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}>
              {projects.length} projects · hover to preview
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
