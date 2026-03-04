import { useQuery } from "@tanstack/react-query";
import { api, buildUrl, type BlogPostsListResponse, type BlogPostResponse } from "@shared/routes";

function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useBlogPosts() {
  return useQuery({
    queryKey: [api.blogPosts.list.path],
    queryFn: async () => {
      const res = await fetch(api.blogPosts.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      const data = await res.json();
      return parseWithLogging<BlogPostsListResponse>(api.blogPosts.list.responses[200], data, "blogPosts.list");
    },
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: [api.blogPosts.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.blogPosts.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch blog post");
      const data = await res.json();
      return parseWithLogging<BlogPostResponse>(api.blogPosts.get.responses[200], data, "blogPosts.get");
    },
    enabled: !!slug,
  });
}
