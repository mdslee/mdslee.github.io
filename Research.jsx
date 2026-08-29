import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const session2025 = new URL("../assets/images/Research/25 session.jpeg", import.meta.url).href;
const poster2025 = new URL("../assets/images/Research/2025-poster.png", import.meta.url).href;
const barsPoster = new URL("../assets/images/Research/2025-poster.png", import.meta.url).href;
const session2026 = new URL("../assets/images/Research/26 session.jpeg", import.meta.url).href;
const poster2026 = new URL("../assets/images/Research/2026-poster.png", import.meta.url).href;

const experience = [
  {
    lab: "Manak Lab",
    institution: "University of Iowa",
    professor: "Professor John Manak",
    focus: "Neurodegeneration in Drosophila",
    years: "2022–2022",
  },
  {
    lab: "Biomechatronics Lab",
    institution: "Stanford University",
    professor: "Professor Steve Collins",
    focus: "Prosthetics and exoskeletons",
    years: "2024–Present",
  },
  {
    lab: "ARM Lab",
    institution: "Stanford University",
    professor: "Professor Monroe Kennedy",
    focus: "Manipulation and prediction",
    years: "2026–Present",
  },
];

const publications = [
  {
    title: "Slow walking limits the benefits of knee-ankle exoskeleton assistance for people with and without stroke",
    journal: "Journal of NeuroEngineering",
    year: "2026",
    authors: ["Martin, R. M.", "Punamiya, R.", "Tankink, T.", "Lee, M. S.", "Lansberg, M. G", "Collins, S. H."],
  },
  {
    title: "Amputees and non-amputees adapt similarly to split-belt treadmill assistance",
    journal: "Journal of Biomechanics",
    year: "2026",
    authors: ["Zerbe, A. C.", "Lee, M. S.", "Collins, S. H."],
  },
];

const posterSessions = [
  {
    title: "2025 SURI Poster Session",
    images: [
      { src: session2025, alt: "2025 SURI Poster Session" },
      { src: poster2025, alt: "2025 SURI research poster", contain: true, expandable: true },
    ],
  },
  {
    title: "Bay Area Robotics Symposium (BARS)",
    images: [
      { src: barsPoster, alt: "Bay Area Robotics Symposium research poster", contain: true, expandable: true },
    ],
  },
  {
    title: "2026 SURI Poster Session",
    images: [
      { src: session2026, alt: "2026 SURI Poster Session" },
      { src: poster2026, alt: "2026 SURI research poster", contain: true, expandable: true },
    ],
  },
];

const currentProjects = [
  {
    title: "Thermoregulating Cooling Liner",
    description: "Designing a cooling liner for prosthetic sockets to regulate skin temperature and improve comfort during extended wear.",
  },
  {
    title: "Vision-Guided Exoskeleton Control",
    description: "Using computer vision to detect objects and terrain features in real time to predict and adapt exoskeleton movement accordingly.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
      {children}
    </p>
  );
}

export default function Research() {
  const [expandedImage, setExpandedImage] = useState(null);

  return (
    <div className="px-4 md:px-8 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-3 text-[#4d77bf]">Research</h1>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Stanford Biomechatronics Lab
          </p>
        </div>

        {/* Experience */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Experience</SectionLabel>
          <div>
            {experience.map((exp, i) => (
              <div key={i} className="flex items-baseline justify-between gap-4">
                <p className="text-sm leading-snug font-light text-foreground/90">
                  {exp.lab} @ {exp.institution} — {exp.professor}: {exp.focus}
                </p>
                <span className="text-sm tracking-wide text-muted-foreground font-light shrink-0">
                  {exp.years}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Interests</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 font-light">
            I'm interested in biomechanics and controls, and in the space where hardware and
            software meet to solve real problems in human movement. I am currently an
            undergraduate researcher in the Biomechatronics Lab under Professor Steve Collins,
            where I've been for almost two years working on exoskeletons and prosthetics for
            stroke patients and amputees.
          </p>
        </section>

        {/* Publications */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Publications</SectionLabel>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div key={i} className="border-t border-foreground/10 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-heading text-2xl md:text-3xl leading-snug">{pub.title}</h3>
                  <span className="font-mono text-sm tracking-widest text-muted-foreground shrink-0">
                    {pub.year}
                  </span>
                </div>
                <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase mt-2">
                  {pub.journal}
                </p>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light mt-2">
                  {pub.authors.map((author, j) => (
                    <React.Fragment key={j}>
                      {author === "Lee, M. S." ? (
                        <strong className="font-medium text-foreground">{author}</strong>
                      ) : (
                        author
                      )}
                      {j < pub.authors.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Projects */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Current Projects</SectionLabel>
          <div className="space-y-6">
            {currentProjects.map((project, i) => (
              <div key={i} className="border-t border-foreground/10 pt-6 flex gap-4">
                <span className="font-mono text-sm tracking-widest text-muted-foreground shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl leading-snug mb-1">{project.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conferences and Posters */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Conferences and Posters</SectionLabel>
          <div className="space-y-10">
            {posterSessions.map((session, i) => (
              <div key={i}>
                <h3 className="font-heading text-xl md:text-2xl font-light mb-4">
                  {session.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {session.images.map((img, j) =>
                    img.expandable ? (
                      <motion.div
                        key={j}
                        className="aspect-[4/3] overflow-hidden bg-secondary/30 cursor-pointer"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setExpandedImage(img)}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className={`w-full h-full ${img.contain ? "object-contain" : "object-cover"}`}
                        />
                      </motion.div>
                    ) : (
                      <div key={j} className="aspect-[4/3] overflow-hidden bg-secondary/30">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className={`w-full h-full ${img.contain ? "object-contain" : "object-cover"}`}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={() => setExpandedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={expandedImage.src}
              alt={expandedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
