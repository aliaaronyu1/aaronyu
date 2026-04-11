import { ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { useProjects } from "@/hooks/use-projects";
import { FadeIn } from "@/components/layout/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="py-8">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">Featured Work</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          A selection of robust applications and tools I've engineered.
        </p>
      </FadeIn>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-card/50 p-4 h-[400px] flex flex-col">
              <Skeleton className="h-[200px] w-full rounded-xl mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex gap-2 mt-auto">
                <Skeleton className="h-8 w-16 rounded-full" />
                <Skeleton className="h-8 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : projects?.length === 0 ? (
        <FadeIn delay={0.2}>
          <div className="text-center py-24 bg-card/30 rounded-2xl border border-white/5">
            <p className="text-muted-foreground">Check back soon for updated projects.</p>
          </div>
        </FadeIn>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects?.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * index}>
              <div className="group rounded-2xl border border-white/5 bg-card/30 hover:bg-card/80 transition-all duration-500 overflow-hidden flex flex-col h-full hover:border-primary/30">
                {project.imageUrl && (
                  <div className="w-full h-64 overflow-hidden relative border-b border-white/5">
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-auto">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer">
                        <Button className="rounded-full shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all">
                          Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="rounded-full bg-transparent border-white/10 hover:bg-white/5 transition-all">
                          Source <LuGithub className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
