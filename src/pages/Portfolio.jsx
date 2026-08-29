import React from "react";
import ProjectCard from "../components/portfolio/ProjectCard";
import { projects } from "../lib/projectsData";

const skillCategories = [
  {
    label: "Machining & Fabrication",
    skills: [
      "Manual Lathe", "Manual Mill", "Waterjet Cutting", "Laser Cutting",
      "Oxy-Acetylene Welding", "Spot Welding", "Sand Casting",
    ],
  },
  {
    label: "CAD & Rapid Prototyping",
    skills: ["SolidWorks", "Fusion 360", "3D Printing"],
  },
  {
    label: "Analysis",
    skills: ["Static (Linear) Analysis", "Buckling Analysis", "FEA (Fusion 360)"],
  },
  {
    label: "Programming & Scripting",
    skills: ["Python", "C++", "MATLAB"],
  },
];

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-sm tracking-[0.3em] text-muted-foreground uppercase mb-6">
      {children}
    </p>
  );
}

export default function Portfolio() {
  return (
    <div className="px-4 md:px-8 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="font-heading text-6xl md:text-7xl font-bold mb-3 text-[#4d77bf]">
            Engineering Portfolio
          </h1>
          <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
            Selected Works
          </p>
        </div>

        {/* Skills */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Skills & Expertise</SectionLabel>
          <div>
            {skillCategories.map((cat) => (
              <p key={cat.label} className="text-sm leading-snug font-light">
                <span className="text-foreground">{cat.label}:</span>{" "}
                <span className="text-muted-foreground">{cat.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-8 md:mt-10">
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
