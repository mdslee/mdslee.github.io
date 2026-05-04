import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../shared/FadeIn";

export default function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <motion.article
        className="group h-full flex flex-col border border-foreground/15 bg-background overflow-hidden transition-colors duration-300 hover:border-foreground/40"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-square overflow-hidden shrink-0">
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="flex flex-col flex-1 p-6 md:p-8 min-h-[240px]">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              Project No. {number}
            </p>
            <h3 className="font-heading text-xl md:text-2xl leading-snug mb-2 group-hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
              {project.category}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground font-light line-clamp-5 flex-1">
              {project.description}
            </p>
            
            
            
          </div>
        
      </motion.article>
    </FadeIn>
  );
}


/*
<Link to={project.path} className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          <div className="relative aspect-square overflow-hidden shrink-0">
            <motion.img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="flex flex-col flex-1 p-6 md:p-8 min-h-[240px]">
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-3">
              Project No. {number}
            </p>
            <h3 className="font-heading text-xl md:text-2xl leading-snug mb-2 group-hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
              {project.category}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground font-light line-clamp-5 flex-1">
              {project.description}
            </p>
            
            
            <span className="inline-flex items-center gap-2 mt-6 font-mono text-[11px] tracking-widest uppercase text-foreground group-hover:text-muted-foreground transition-colors">
              View Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </Link>
*/
