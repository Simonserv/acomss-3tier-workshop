/**
 * listings.ts: YOUR CATALOG (you edit this file in Session 1)
 *
 * Each { ... } block below is one card in your catalog. Change the values,
 * add a block, or delete one. Put matching pictures in public/images/ and set
 * image_url to "/images/your-file-name.png".
 *
 * Before Session 2, the catalog shows these listings directly. In Session 2 you
 * copy them into your database from the /setup page, and from then on the
 * catalog reads from the database.
 *
 * Fields:
 *   - slug:         short name used in the page address (lowercase-with-dashes)
 *   - category:     CONSULTING | WEB_DEV | CUSTOM_SOFTWARE
 *   - inquiry_type: DEMO | QUOTE | INQUIRE  (decides which contact form shows)
 *   - image_url:    "/images/" + a file name in public/images/ (lowercase, exact)
 *
 * Editing tips (so the file keeps working):
 *   - Change only the words between the double quotes " ".
 *   - Keep the quotes, the comma at the end of each line, and the + that joins
 *     long text across lines.
 *   - Apostrophes are fine ("We're open"). For a quote inside your text, use
 *     single quotes ("Our 'quick start' plan").
 *   - Every slug must be different. When you copy a block to add a listing,
 *     change its slug first. Two listings with the same slug open the same page.
 *   - Red error screen after saving? You probably deleted a quote or a comma.
 *     Press Ctrl+Z (Cmd+Z on Mac), save, and it comes back.
 */

export type ListingCategory = "CONSULTING" | "WEB_DEV" | "CUSTOM_SOFTWARE";

export type InquiryType = "DEMO" | "QUOTE" | "INQUIRE";

export interface Listing {
  /** Stable slug used in the detail page URL. */
  slug: string;
  title: string;
  category: ListingCategory;
  description: string;
  inquiry_type: InquiryType;
  /** Site-relative path under /images/ (file must exist in public/images/). */
  image_url: string;
}

export const listings: Listing[] = [
  {
    slug: "fullstack-web-development",
    title: "Full-Stack Web Development (React & Next.js)",
    category: "WEB_DEV",
    description:
      "Master modern full-stack web development from TypeScript and React to " +
      "Next.js, API development, and PostgreSQL. Build portfolio-ready web apps " +
      "with live pair-programming and code reviews.",
    inquiry_type: "DEMO",
    image_url: "/images/course-web-dev.svg",
  },
  {
    slug: "python-mastery-and-cs-fundamentals",
    title: "Python Mastery & CS Fundamentals",
    category: "CUSTOM_SOFTWARE",
    description:
      "Accelerate your programming fundamentals with Python. Covers object-oriented " +
      "programming, data structures, algorithms, debugging, automation scripts, " +
      "and problem solving for school or career.",
    inquiry_type: "INQUIRE",
    image_url: "/images/course-python.svg",
  },
  {
    slug: "backend-systems-go-and-rust",
    title: "Backend Systems Engineering (Go & Rust)",
    category: "CUSTOM_SOFTWARE",
    description:
      "Deep dive into high-concurrency systems, microservices, thread safety, " +
      "memory management, and distributed systems architecture using Go and Rust. " +
      "Tailored for intermediate and advanced developers.",
    inquiry_type: "QUOTE",
    image_url: "/images/course-backend.svg",
  },
  {
    slug: "technical-interview-and-leetcode-prep",
    title: "SWE Technical Interview & LeetCode Coaching",
    category: "CONSULTING",
    description:
      "Ace your software engineering interviews. Intensive mock interviews, " +
      "algorithmic problem-solving patterns (graphs, dynamic programming, trees), " +
      "Big-O analysis, and personalized feedback.",
    inquiry_type: "DEMO",
    image_url: "/images/course-interview.svg",
  },
  {
    slug: "code-review-and-capstone-mentorship",
    title: "1-on-1 Code Review & Capstone Mentorship",
    category: "CONSULTING",
    description:
      "Stuck on your university capstone project, personal repository, or work codebase? " +
      "Get dedicated line-by-line code review, architecture refactoring, and " +
      "pair-programming sessions with an experienced software engineer.",
    inquiry_type: "INQUIRE",
    image_url: "/images/course-mentorship.svg",
  },
  {
    slug: "modern-frontend-ui-ux-design",
    title: "Modern Frontend UI/UX & Tailwind CSS",
    category: "WEB_DEV",
    description:
      "Learn how to build sleek, accessible, responsive user interfaces using " +
      "modern CSS, Tailwind, Framer Motion, and design systems. Turn Figma designs " +
      "into clean, production-grade frontend code.",
    inquiry_type: "QUOTE",
    image_url: "/images/course-frontend.svg",
  },
];
