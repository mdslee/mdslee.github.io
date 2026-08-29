import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group h-full flex flex-col border border-foreground/15 bg-background overflow-hidden transition-colors duration-300 hover:border-foreground/40"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={project.path}
        className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-square overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 justify-between p-3 md:p-4">
          <h3 className="font-heading text-sm md:text-base leading-snug">
            {project.title}
          </h3>
          <span className="inline-flex items-center gap-2 mt-3 font-mono text-[10px] tracking-widest uppercase text-foreground">
            View Project →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
