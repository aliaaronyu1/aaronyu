import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">Ali Aaron Yu.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-white/5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href} className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground text-muted-foreground z-10">
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-secondary rounded-full -z-10 border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? "text-foreground" : ""}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-panel border-t-0 border-b border-white/10 py-4 px-4 flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`p-3 rounded-lg flex items-center font-medium ${
                location === item.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
