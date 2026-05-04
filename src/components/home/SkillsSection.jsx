import React, { useState } from "react";
import FadeIn from "../shared/FadeIn";

const skillCategories = [
  {
    label: "Machine Shop",
    skills: [
      "Manual Lathe", "Manual Mill",
      "Oxy-Acetylene Welding", "Spot Welding", "Waterjet Cutting", "Laser Cutting", 
      "Finishing", "Band Saw", "Sheet Metal Forming", "Sand Casting", "3D-Printing",
    ],
  },
  {
    label: "FEA & Simulation",
    skills: [
      "Static Analysis", "Modal Analysis", "Fatigue Analysis",
      "Thermal Simulation", "Fluid-Structure Interaction",
    ],
  },
  {
    label: "CAD & Design",
    skills: [
      "SolidWorks", "FUSION360", "ETABS", "DFM / DFA",
    ],
  },
  {
    label: "Online & Digital Tools",
    skills: [
      "MATLAB", "FIJI", "Simulink", "Git / GitHub", "Linux / Bash",
    ],
  },
  {
    label: "Programming Languages",
    skills: [
      "Python", "C / C++", "MATLAB Scripting", "LaTeX", 
      "JavaScript", "HTML", "CSS",
    ],
  },
  {
    label: "CS Concepts",
    skills: [
      "Machine Learning", "Data Structures & Algorithms", "Finite Element Methods",
      "Signal Processing", "Embedded Systems", "Real-Time OS",
      "Computer Vision", "Optimization Theory", "Numerical Methods",
      "Control Theory", "Digital Logic",
    ],
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="pt-10 md:pt-14 pb-24 md:pb-36 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Capabilities
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light mb-16">
            Skills & Expertise
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Category Tabs */}
          <FadeIn className="md:col-span-3">
            <div className="flex flex-col gap-1">
              {skillCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  className={`text-left py-3 px-4 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border-l-2 ${
                    activeCategory === i
                      ? "border-foreground text-foreground bg-secondary/60"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Skills Grid */}
          <FadeIn className="md:col-span-9" delay={0.1}>
            <div className="flex flex-wrap gap-2 md:gap-3 min-h-[220px]">
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-foreground/15 font-mono text-[11px] tracking-wider text-foreground/80 hover:border-foreground/50 hover:text-foreground transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}