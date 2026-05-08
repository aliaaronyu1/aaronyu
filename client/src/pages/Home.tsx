import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";

export default function Home() {
  return (
    <div className="pt-12 md:pt-24 pb-24">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto flex flex-col gap-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/80 border border-border text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            Currently building: Center
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gradient">
            Hi, I'm Aaron Yu.<br />
            <span className="text-gradient-primary">Full Stack Engineer.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="w-full max-w-3xl space-y-5 text-left text-base md:text-lg leading-relaxed text-muted-foreground border-l border-border pl-5">
            <p className="text-foreground/90">
              Welcome to my website. I’m a full-stack engineer who likes working in messy environments where things aren’t fully figured out yet.
            </p>
            <p>
              I’ve mostly worked in startup settings. I’m used to owning features end to end, whether that’s backend logic, database design or figuring out the user experience on the front end. A lot of the job ends up being making tradeoff decisions and just getting things to move forward without getting immersed in the details.
            </p>
            <div className="space-y-2">
              <p className="section-kicker">
                Side projects
              </p>
              <p>
                Outside of work, I spend time building side projects. Lately I’ve been focused on a journaling app called Center. Center explores how AI can guide users through journaling reflections without giving suggestions and advice immediately but asking questions instead.{" "}
                <a
                  href="https://aaronyu.onrender.com/blog/exploring-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/90 hover:decoration-primary/80"
                >
                  Read more about Center
                </a>
                .
              </p>
            </div>
            <p>
              I’m drawn to teams that value being smart, thoughtful and having high ownership, even when things are moving fast.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 mt-1">
          <Link href="/projects">
            <Button size="lg" className="rounded-md px-8 h-12 text-base shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 transition-all">
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="rounded-md px-8 h-12 text-base bg-secondary/50 border-border hover:bg-secondary hover:-translate-y-0.5 transition-all group">
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col items-center sm:items-start gap-3 pt-5">
            <p className="section-kicker">
              Stack I use often
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 max-w-xl">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-secondary/40 px-3 py-1 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
