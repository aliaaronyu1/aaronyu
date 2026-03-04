import { db } from "../server/db";
import { projects, blogPosts } from "../shared/schema";

async function seed() {
  console.log("Seeding database...");
  const existingProjects = await db.select().from(projects);
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Stripe"],
        link: "https://github.com/aliaaron/ecommerce",
      },
      {
        title: "Task Management App",
        description: "A collaborative task management tool with real-time updates using WebSockets.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Socket.io"],
        link: "https://github.com/aliaaron/task-manager",
      },
      {
        title: "Personal Blog Engine",
        description: "A custom Markdown-based blog engine with SEO optimization and RSS feed generation.",
        technologies: ["React", "Vite", "Express", "Drizzle ORM"],
        link: "https://github.com/aliaaron/blog-engine",
      }
    ]);
    console.log("Projects seeded");
  } else {
    console.log("Projects already seeded");
  }

  const existingPosts = await db.select().from(blogPosts);
  if (existingPosts.length === 0) {
    await db.insert(blogPosts).values([
      {
        title: "Building Scalable APIs with Express and Drizzle",
        slug: "building-scalable-apis",
        summary: "Learn how to structure your Express applications for scale using Drizzle ORM and Zod for validation.",
        content: "When building full-stack applications, the backend architecture plays a crucial role in the long-term maintainability of the project. In this post, we'll explore how to combine Express.js, Drizzle ORM, and Zod to create a robust API...\n\n(More content here...)",
      },
      {
        title: "Why I Love React and Vite",
        slug: "why-i-love-react-vite",
        summary: "A deep dive into why Vite has become my go-to tool for modern React development.",
        content: "Gone are the days of waiting minutes for Webpack to bundle your React application. Vite has revolutionized the frontend development experience with its insanely fast HMR and optimized build process...\n\n(More content here...)",
      }
    ]);
    console.log("Blog posts seeded");
  } else {
    console.log("Blog posts already seeded");
  }
  
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
