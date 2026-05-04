import React from "react";
import { motion } from "framer-motion";
import FadeIn from "../components/shared/FadeIn";

const researchHeroBg = new URL("../assets/images/Research/header.png", import.meta.url).href;

const publications = [
  {
    title: "Slow walking limits the benefits of knee-ankle exoskeleton assistance for people with and without stroke",
    journal: "Journal of NeuroEngineering",
    year: "2026",
    abstract: "Martin, R. M., Punamiya, R., Tankink, T., Lee, M. S., Lansberg, M. G, Collins, S. H.",
  },
  {
    title: "Amputees and non-amputees adapt similarly to split-belt treadmill assistance",
    journal: "Journal of Biomechanics",
    year: "2026",
    abstract: "Zerbe, A. C., Lee, M. S., Collins, S. H. ",
  },
];

// This creates a new array with the name bolded
const updatedPublications = publications.map(pub => {
  return {
    ...pub,
    abstract: pub.abstract.replace("Lee, M. S.", "**Lee, M. S.**")
  };
});

console.log(updatedPublications);

const researchAreas = [
  {
    title: "Metabolic and Energy Consumption",
    description: "Understanding the metabolic and energy consumption of stroke patients, amputees, and healthy individuals in prosthetic devices and exoskeletons.",
  },
  {
    title: "Heat Regulation",
    description: "Developing a cooling liner for prosthetics to regulate body temperature and improve comfort.",
  },
  {
    title: "Computational Mechanics",
    description: "Writing efficient numerical methods to analyze the mechanics of exoskeletons and prosthetics.",
  },
];

export default function Research() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={researchHeroBg}
            alt="Research laboratory with precision instruments and optical measurement equipment in a clean engineering environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 pb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4"
          >
            Exoskeletons, Prosthetics, and Biomechatronics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light"
          >
            Stanford Biomechatronics Lab -- Undergraduate Researcher
          </motion.h1>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Focus Areas
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-16">
              Areas of Investigation
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {researchAreas.map((area, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="border-t border-foreground/10 pt-8">
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl mb-4">{area.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground font-light">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-4">
              {/* Publications */}
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-16">
              Publications / In Review
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {publications.map((pub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t border-foreground/10 py-10 md:py-12">
                  <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                    <div className="md:col-span-1">
                      <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                        {pub.year}
                      </p>
                    </div>
                    <div className="md:col-span-5">
                      <h3 className="font-heading text-lg md:text-xl leading-snug">
                        {pub.title}
                      </h3>
                      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-2">
                        {pub.journal}
                      </p>
                    </div>
                    <div className="md:col-span-6">
                      <p className="text-sm leading-relaxed text-muted-foreground font-light">
                        {pub.abstract}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
