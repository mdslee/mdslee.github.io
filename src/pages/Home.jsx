import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const weldingImage = new URL("../assets/images/welding.jpeg", import.meta.url).href;

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
      <section className="relative min-h-screen flex flex-col md:flex-row">
        {/* Left half: header */}
        <div className="relative w-full md:w-1/2 min-h-[60vh] md:min-h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-32 pb-10">
          <div className="relative z-10 w-full max-w-xl mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center text-center">
              <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase mb-6">
                Engineering Portfolio
              </p>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#4d77bf]">
                Madison Lee
              </h1>

              <div className="h-12 flex items-center mt-6">
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
              </div>
            </div>

            <div className="w-full max-w-lg mx-auto mt-10">
              <img
                src={weldingImage}
                alt="Madison welding with an oxy-acetylene torch in a machine shop"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right half: intro */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-16 py-16 md:py-0">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-6">
              About
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-light leading-tight mb-6 text-[#4d77bf]">
              Humanoid Robots, Exoskeletons, and Prosthetics
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground font-light mb-8">
              Hello! I'm Madison, a student at Stanford University, majoring in Mechanical Engineering and minoring in Computer Science. As someone who loves the physical aspect of mechanical engineering and the control of computer science, I stand right in the middle of the interesection. I am passionate about robotics, controls, and mobility.
            </p>

            <h3 className="font-heading text-lg md:text-xl font-light mb-4">
              Campus Involvement
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                <span className="font-medium text-foreground">Undergraduate Research @ Biomechatronics Lab</span> under Professor Steve Collins
              </li>
              <li className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                <span className="font-medium text-foreground">Co-Lead @ Stanford Escape Room</span>: Design and build our very own in-house Escape Room!
              </li>
              <li className="text-sm md:text-base leading-relaxed text-muted-foreground font-light">
                <span className="font-medium text-foreground">Co-President @ Society of Undergraduate Mechanical Engineers (SUME)</span>: Creating a one-stop shop for mechanical engineers at Stanford; Stanford's branch of ASME.
              </li>
            </ul>

            <p className="text-sm md:text-base font-light text-muted-foreground">
              Check out my{" "}
              <Link
                to="/research"
                className="text-foreground border-b border-foreground/30 hover:text-muted-foreground hover:border-foreground/60 transition-colors duration-300"
              >
                research
              </Link>{" "}
              or my{" "}
              <Link
                to="/portfolio"
                className="text-foreground border-b border-foreground/30 hover:text-muted-foreground hover:border-foreground/60 transition-colors duration-300"
              >
                portfolio
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
