import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 backdrop-blur-sm py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-gradient">Aaron Yu.</span>
          <p className="text-sm text-muted-foreground">Building exceptional digital experiences.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/aliaaronyu1" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/aarong-yu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
            <Twitter className="w-4 h-4" />
          </a> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Aaron Yu. All rights reserved.
      </div>
    </footer>
  );
}
