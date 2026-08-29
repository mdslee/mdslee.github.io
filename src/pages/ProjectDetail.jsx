import React from "react";
import { useParams, Link } from "react-router-dom";
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

  return (
    <div>
      {/* Top navigation */}
      <section className="pt-24 md:pt-28 pb-8 px-6 md:px-12">
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

      {/* Header */}
      <section className="pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="font-heading text-6xl md:text-7xl font-light mb-4">
                {project.title}
              </h1>
              <p className="text-sm md:text-base font-light text-muted-foreground">
                <span className="text-foreground">Skills:</span> {project.details.tools}
              </p>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.detailImage || project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {project.posterImage && (
        <section className="pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <img
              src={project.posterImage}
              alt="Research poster"
              className="w-full border border-foreground/10"
            />
          </div>
        </section>
      )}

      {project.slides?.length > 0 ? (
        <section className="pb-16 md:pb-24 px-6 md:px-12">
          <div className={`flex flex-col ${project.slidesGap || "gap-6"} max-w-3xl mx-auto`}>
            {project.slides.map((slide, i) =>
              typeof slide === "string" ? (
                <img
                  key={i}
                  src={slide}
                  alt={`Slide ${i + 1}`}
                  className="w-full border border-foreground/10"
                />
              ) : (
                <video
                  key={i}
                  controls
                  className={`w-full aspect-[16/9] object-contain bg-black ${
                    project.slidesGap === "gap-0" ? "mt-10 md:mt-14" : ""
                  }`}
                  src={slide.src}
                />
              )
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Overview */}
          <section className="py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid md:grid-cols-12 gap-12 md:gap-16">
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
                    Overview
                  </p>
                  <h2 className="font-heading text-2xl md:text-3xl font-light">
                    Project Description
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                    {project.details.overview}
                  </p>
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
                    <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
                      {phase.eyebrow}
                    </p>
                    <h2 className="font-heading text-2xl md:text-3xl font-light">
                      {phase.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                      {phase.body}
                    </p>
                  </div>
                </div>
                <div className="mt-12 md:mt-16 w-full min-h-[200px] md:min-h-[320px] bg-secondary/40 border border-dashed border-foreground/15 flex items-center justify-center p-8">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase text-center">
                    {phase.imageLabel}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {project.reportSlides?.length > 0 && (
        <section className="pt-20 md:pt-28 pb-16 md:pb-24 px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-8">
              {project.reportLabel || "Detailed Report"}
            </p>
            <div className="flex flex-col gap-6">
              {project.reportSlides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Report page ${i + 1}`}
                  className="w-full border border-foreground/10"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {project.pdfs?.length > 0 && (
        <section className="py-8">
          <div className="flex flex-col gap-8">
            {project.pdfs.map((pdf, i) => (
              <iframe
                key={i}
                src={pdf.href}
                title={pdf.label}
                className="w-full h-screen border-0"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
