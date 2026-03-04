import { useRoute } from "wouter";
import { format } from "date-fns";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useBlogPost } from "@/hooks/use-blog";
import { FadeIn } from "@/components/layout/FadeIn";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  
  const { data: post, isLoading } = useBlogPost(slug);

  if (isLoading) {
    return (
      <div className="py-12 max-w-3xl mx-auto">
        <Skeleton className="h-4 w-24 mb-8" />
        <Skeleton className="h-12 w-full mb-6" />
        <Skeleton className="h-4 w-48 mb-12" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full mt-8" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-primary hover:underline">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 max-w-3xl mx-auto">
      <FadeIn>
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to all posts
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center gap-3 text-muted-foreground font-mono text-sm mb-12 pb-12 border-b border-white/10">
          <Calendar className="w-4 h-4 text-primary" />
          {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Draft'}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
          {/* Note: In a real app, you'd use a markdown parser here if content is markdown */}
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </div>
      </FadeIn>
    </article>
  );
}
