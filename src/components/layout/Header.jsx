import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, title: "Structural Analysis Framework", path: "/portfolio/project-1" },
  { id: 2, title: "Precision Manufacturing System", path: "/portfolio/project-2" },
  { id: 3, title: "Suspension Bridge Redesign", path: "/portfolio/project-3" },
  { id: 4, title: "Embedded Control Systems", path: "/portfolio/project-4" },
  { id: 5, title: "Composite Material Research", path: "/portfolio/project-5" },
];

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isPortfolioActive = location.pathname.startsWith("/portfolio");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-background/80 border-b border-foreground/10">
        <nav className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-center md:justify-between">

          <div className="hidden md:flex items-center gap-8 md:gap-12">
            <Link
              to="https://www.linkedin.com/in/madisonsuminlee/"
              target="_blank"
              rel="noreferrer"
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                isActive("/") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Linkedin
            </Link>

            <Link
              to="mailto:mdslee@stanford.edu"
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                isActive("/") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              mdslee [@] stanford [.] edu
            </Link>
            
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-12 w-full md:w-auto">
            <Link
              to="/"
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                isActive("/") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                isActive("/research") ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Research
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/portfolio"
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                  isPortfolioActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Portfolio
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="backdrop-blur-md bg-background/95 border-b border-foreground/10 overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {projects.map((project, index) => (
                  <Link
                    key={project.id}
                    to={project.path}
                    className="group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                    >
                      <p className="font-mono text-[10px] text-muted-foreground mb-2 tracking-widest">
                        Project No. {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="font-heading text-sm leading-snug group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
