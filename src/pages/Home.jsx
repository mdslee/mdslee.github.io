import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/shared/FadeIn";
import { Link } from "react-router-dom";
import SkillsSection from "../components/home/SkillsSection";

const homeBG = new URL("../assets/images/ME102/homeBG.png", import.meta.url).href;

const disciplines = [
  "Mechanical Engineering",
  "Robotics",
  "Mechatronics",
  "Controls & Systems Engineering",
  "Computer Science",
];

export default function Home() {
  const [currentDiscipline, setCurrentDiscipline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiscipline((prev) => (prev + 1) % disciplines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeBG}
            alt="Macro photograph of steel bridge joint showcasing engineering precision and material strength"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase mb-6"
            >
              Engineering Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-9xl font-light tracking-tight"
            >
              Madison Lee
            </motion.h1>

            <motion.a
              href="mailto:mdslee@stanford.edu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase mt-6 hover:text-foreground transition-colors duration-300"
            >
              mdslee[@]stanford[.]edu
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-12 flex items-center mt-2"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentDiscipline}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase"
                >
                  {disciplines[currentDiscipline]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-foreground/50"
          >
            <svg
              width="14"
              height="44"
              viewBox="0 0 14 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M7 1V40" stroke="currentColor" strokeWidth="1" />
              <path d="M3 36L7 40L11 36" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="pt-24 md:pt-36 pb-10 md:pb-14 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <FadeIn>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-6">
                About
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-light leading-tight">
                Humanoid Robots, Exoskeletons, and Prosthetics
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="pt-2 md:pt-12">
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light mb-6">

                Hi! I'm Madison, a sophomore at Stanford University, majoring in Mechanical Engineering and minoring in Computer Science. As someone who loves the physical aspect of mechanical engineering and the freedom of computer science, I stand right in the middle of the interesection.
                I am passionate about humanoid robots, specifically controls and system design.

                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light mb-8">
                At Stanford, I am an undergraduate researcher in the Biomechatronics Lab, where I work with exoskeletons and prosthetics to improve human mobility and develop prosthetic devices. As a part of Stanford Escape Room, I design and build the physical components of the escape room aand design puzzles. Preprofessionally, I am the acting President of the Society of Undergraduate Mechanical Engineers (SUME), Stanford's branch of ASME.
                </p>
                <Link
                  to="/portfolio"
                  className="font-mono text-[11px] tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-300 border-b border-foreground/30 pb-1"
                >
                  View Portfolio →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <SkillsSection />

      
    </div>
  );
}