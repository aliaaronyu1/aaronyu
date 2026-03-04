import { Link } from "wouter";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";
import { useBlogPosts } from "@/hooks/use-blog";
import { FadeIn } from "@/components/layout/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { data: posts, isLoading } = useBlogPosts();

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">Writing</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Thoughts on software engineering, web development, and system architecture.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-6">
        {isLoading ? (
          [1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-card/30">
              <Skeleton className="h-4 w-32 mb-4" />
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
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
                <div className="group block p-8 rounded-3xl border border-white/5 bg-card/30 hover:bg-card/80 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-primary mb-4 font-mono">
                    <Calendar className="w-4 h-4" />
                    {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Draft'}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.summary}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
