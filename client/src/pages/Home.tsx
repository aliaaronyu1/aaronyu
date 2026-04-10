import { Link } from "wouter";
import { ArrowRight, Terminal, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-12 md:pt-24 gap-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto flex flex-col items-center gap-8">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-white/5 text-sm text-muted-foreground mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gradient">
            Hi, I'm Aaron Yu.<br />
            <span className="text-gradient-primary">Full Stack Engineer.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Welcome to my website. I am an early career engineer looking for work. I have
            experience in backend architecture and frontend engineering. I am passionate 
            about building scalable, secure, and user-friendly applications. Feel free to 
            explore my projects and blog posts to see what I've been working on.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-secondary/50 border-white/10 hover:bg-secondary hover:-translate-y-1 transition-all group">
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </FadeIn>
      </section>

      {/* Expertise Section */}
      <section className="w-full">
        <FadeIn delay={0.5}>
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing scalable, secure APIs and microservices using Node.js, Express, and PostgreSQL. Focus on performance and clean code.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Frontend Engineering</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building pixel-perfect, responsive interfaces with React, TypeScript, and Tailwind CSS. Obsessed with user experience.
              </p>
            </div>

            {/* <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">DevOps & Cloud</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploying and managing infrastructure on modern cloud platforms. CI/CD pipelines, Docker, and seamless integrations.
              </p>
            </div> */}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
