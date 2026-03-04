import { z } from 'zod';
import { insertProjectSchema, projects, insertBlogPostSchema, blogPosts, insertMessageSchema, messages } from './schema';

export { insertProjectSchema, insertBlogPostSchema, insertMessageSchema };

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects' as const,
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
  },
  blogPosts: {
    list: {
      method: 'GET' as const,
      path: '/api/blog' as const,
      responses: {
        200: z.array(z.custom<typeof blogPosts.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/blog/:slug' as const,
      responses: {
        200: z.custom<typeof blogPosts.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
  },
  messages: {
    create: {
      method: 'POST' as const,
      path: '/api/messages' as const,
      input: insertMessageSchema,
      responses: {
        201: z.custom<typeof messages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ProjectsListResponse = z.infer<typeof api.projects.list.responses[200]>;
export type BlogPostsListResponse = z.infer<typeof api.blogPosts.list.responses[200]>;
export type BlogPostResponse = z.infer<typeof api.blogPosts.get.responses[200]>;
export type MessageInput = z.infer<typeof api.messages.create.input>;
export type MessageResponse = z.infer<typeof api.messages.create.responses[201]>;
