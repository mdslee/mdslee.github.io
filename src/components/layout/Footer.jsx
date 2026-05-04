import React from "react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-background/80 border-t border-foreground/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — All Rights Reserved
        </p>
        <div className="flex items-center gap-8 md:gap-12">
          <a
            href="mailto:mdslee@stanford.edu"
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            mdslee@stanford.edu
          </a>
          <a
            href="https://www.linkedin.com/in/madisonsuminlee/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}