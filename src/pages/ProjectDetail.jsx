import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/shared/FadeIn";
import { projects } from "../lib/projectsData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const projectIndex = parseInt(projectId.replace("project-", "")) - 1;
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-sm text-muted-foreground">Project not found</p>
      </div>
    );
  }

  const number = String(projectIndex + 1).padStart(2, "0");

  return (
    <div>
      {/* Hero image */}
      <section className="relative h-[38vh] min-h-[220px] max-h-[460px] md:h-[40vh] md:max-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 pb-8 md:pb-10">
          <div className="max-w-screen-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3"
            >
              Project No. {number} — {project.category}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-heading text-3xl md:text-5xl lg:text-7xl font-light"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <FadeIn>
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
                  Overview
                </p>
                <h2 className="font-heading text-2xl md:text-3xl font-light">
                  Project Description
                </h2>
              </FadeIn>
            </div>
            <div className="md:col-span-8">
              <FadeIn delay={0.1}>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                  {project.details.overview}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {[
        {
          eyebrow: "Phase 01",
          title: "Ideation & planning",
          body: project.details.ideationPlanning,
          imageLabel: "Image — ideation & planning",
          bgClass: "",
        },
        {
          eyebrow: "Phase 02",
          title: "Prototyping",
          body: project.details.prototyping,
          imageLabel: "Image — prototyping",
          bgClass: "bg-secondary/30",
        },
        {
          eyebrow: "Phase 03",
          title: "Final results & impact",
          body: project.details.finalResults,
          imageLabel: "Image — results & impact",
          bgClass: "",
        },
      ].map((phase) => (
        <section
          key={phase.title}
          className={`py-16 md:py-24 px-6 md:px-12 ${phase.bgClass}`}
        >
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-4">
                <FadeIn>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
                    {phase.eyebrow}
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl font-light">
                    {phase.title}
                  </h2>
                </FadeIn>
              </div>
              <div className="md:col-span-8">
                <FadeIn delay={0.1}>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                    {phase.body}
                  </p>
                </FadeIn>
              </div>
            </div>
            <FadeIn delay={0.15}>
              <div className="mt-12 md:mt-16 w-full min-h-[200px] md:min-h-[320px] bg-secondary/40 border border-dashed border-foreground/15 flex items-center justify-center p-8">
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase text-center">
                  {phase.imageLabel}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Back navigation */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link
            to="/portfolio"
            className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            ← Back to Portfolio
          </Link>
          {projectIndex < projects.length - 1 && (
            <Link
              to={projects[projectIndex + 1].path}
              className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Next Project →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}