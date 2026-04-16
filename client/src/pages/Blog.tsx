import { Link } from "wouter";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";
import { useBlogPosts } from "@/hooks/use-blog";
import { FadeIn } from "@/components/layout/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">Writing</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Thoughts on software engineering, web development, and system architecture.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {isLoading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/5 bg-card/30 flex flex-col md:flex-row gap-6">
              <Skeleton className="w-full md:w-48 h-48 md:h-32 rounded-2xl shrink-0" />
              <div className="flex-1">
                <Skeleton className="h-4 w-32 mb-4" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))
        ) : posts?.length === 0 ? (
          <FadeIn delay={0.2}>
            <div className="text-center py-24 bg-card/30 rounded-2xl border border-white/5">
              <p className="text-muted-foreground">No posts published yet. Check back soon.</p>
            </div>
          </FadeIn>
        ) : (
          posts?.map((post, index) => (
            <FadeIn key={post.id} delay={0.1 * index}>
              <Link href={`/blog/${post.slug}`}>
                <div className="group block p-6 md:p-8 rounded-3xl border border-white/5 bg-card/30 hover:bg-card/80 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
                    
                    {/* Image Preview - Optional */}
                    {post.imageUrl && (
                      <div className="w-full md:w-48 lg:w-56 h-48 md:h-auto aspect-video md:aspect-square shrink-0 overflow-hidden rounded-2xl border border-white/5">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-sm text-primary mb-3 font-mono">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Draft'}
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                        {post.summary}
                      </p>
                      
                      <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-auto">
                        Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))
        )}
      </div>
    </div>
  );
}
