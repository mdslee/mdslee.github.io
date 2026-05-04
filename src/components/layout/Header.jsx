import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

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
            <Link
              to="/portfolio"
              className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 hover:text-foreground ${
                isPortfolioActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Portfolio
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
