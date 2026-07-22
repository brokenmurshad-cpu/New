export const personal = {
  firstName: "Muhammad",
  lastName: "Husnain",
  fullName: "Muhammad Husnain",
  role: "Full Stack Developer",
  roles: ["Full Stack Developer", "AI Engineer", "SaaS Builder", "Creative Developer"],
  location: "Dubai, UAE",
  locationLine: "based in Dubai, UAE",
  email: "Mhusnain027@outlook.com",
  phone: "+971 50 5677 023",
  whatsapp: "+971505677023",
  whatsappDigits: "971505677023",
  website: "www.personalportfolio.dev",
  heroSubtext:
    "I craft cinematic web products, AI-powered platforms, and scalable SaaS experiences for brands that care about detail, motion, and performance.",
  aboutTitle: "Programmer, Developer, Interface Craftsman/",
  aboutIntro:
    "With a passion for design, engineering, and AI systems, I take products from idea to launch — making sure every interaction feels intentional and every pixel earns its place.",
  aboutBody:
    "Creating great digital experiences is my primary focus. I blend full-stack architecture, motion design, and AI tooling so each project feels premium, fast, and memorable. When I'm not shipping product, I'm refining animation systems, exploring agent workflows, and building SaaS experiments.",
  availableText: "Available for Work & Freelance",
  yearsExperience: 4,
  cvUrl: "/cv-muhammad-husnain.pdf",
};

export const socials = {
  whatsapp: "971505677023",
  email: "Mhusnain027@outlook.com",
  github: "https://www.github.com/Mhusnain0027",
  linkedin:
    "https://www.linkedin.com/in/muhammad-husnain-4556233a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  twitter: "",
  instagram: "",
};

export const whatsappUrl = `https://wa.me/${socials.whatsapp}`;

export const nav = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const navbarLinks = nav.map((item) => ({
  label: item.label,
  url: item.href,
}));

export const navLinks = [
  { label: "About", url: "#about" },
  { label: "Work", url: "#projects" },
  { label: "Contact", url: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", url: socials.github },
  { label: "LinkedIn", url: socials.linkedin },
  { label: "WhatsApp", url: whatsappUrl },
  { label: "Email", url: `mailto:${socials.email}` },
];

export const Bio = {
  name: personal.fullName,
  role: personal.role,
  location: personal.location,
};

// Outer rotating ring text for the circular experience badge
export const badgeOuterWords = ["Developer", "Designer", "Freelancer", "Engineer", "Creator"];

// Two-line hero heading (rendered line by line)
export const heroHeading = ["MUHAMMAD", "HUSNAIN"];

export const services = [
  {
    index: "01",
    title: "Web Development",
    description:
      "I build custom-coded websites tailored to your brand — scalable, fast, accessible, and animated with intention to leave a lasting impression on every visitor.",
    tags: ["Modern Websites", "Motion & Animation", "Scalability"],
  },
  {
    index: "02",
    title: "AI Engineering",
    description:
      "I design AI-assisted products, agent workflows, and intelligent interfaces that feel seamless — turning complex models into usable, beautiful product experiences.",
    tags: ["AI Agents", "LLM Integration", "Automation"],
  },
  {
    index: "03",
    title: "SaaS Product Building",
    description:
      "From MVP to polished platform, I architect full-stack SaaS products with clean systems, delightful UX, and production-ready performance.",
    tags: ["Full Stack", "Dashboards", "Product Systems"],
  },
  {
    index: "04",
    title: "Performance & Optimization",
    description:
      "Your product deserves to load fast and feel effortless. I optimize rendering, bundle size, and interaction quality so every experience runs smoothly at scale.",
    tags: ["Core Web Vitals", "Animation Perf", "Speed"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer & AI Engineer",
    company: "Independent / Client Work",
    period: "2024 — Present",
    description:
      "Shipping end-to-end web products, AI-powered tools, and SaaS platforms with Next.js, modern backend systems, and cinematic frontend motion.",
  },
  {
    role: "Front-End Developer",
    company: "Product Team",
    period: "2023 — 2024",
    description:
      "Built responsive applications and internal dashboards. Created reusable component libraries and improved performance through better architecture and code-splitting.",
  },
  {
    role: "Junior Front-End Developer",
    company: "Digital Agency",
    period: "2022 — 2023",
    description:
      "Converted Figma designs into pixel-perfect, accessible interfaces and collaborated closely with designers to ship polished marketing sites on tight timelines.",
  },
];

export const stack = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend & AI",
    items: ["Node.js", "Express.js", "REST APIs", "OpenAI", "Agent Workflows"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "Vercel", "Gumloop"],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: "storefront",
    index: "01",
    title: "Aurora — Modern E-Commerce Storefront",
    description: "A fast, conversion-focused storefront with a custom cart flow and animated product grid.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    image: "/images/project-ecommerce.jpg",
    href: "#",
    github: "https://www.github.com/Mhusnain0027",
  },
  {
    id: "dashboard",
    index: "02",
    title: "Pulse — SaaS Analytics Dashboard",
    description: "A real-time analytics dashboard with animated charts and a fully themeable design system.",
    tags: ["React", "Tailwind CSS", "Recharts"],
    image: "/images/project-dashboard.jpg",
    href: "#",
    github: "https://www.github.com/Mhusnain0027",
  },
  {
    id: "agency",
    index: "03",
    title: "Northline — Creative Agency Site",
    description: "A bold agency landing experience with GSAP-driven scroll storytelling and case studies.",
    tags: ["Next.js", "GSAP", "Framer Motion"],
    image: "/images/project-agency.jpg",
    href: "#",
    github: "https://www.github.com/Mhusnain0027",
  },
  {
    id: "mobile",
    index: "04",
    title: "Loop — Habit Tracking App UI",
    description: "A clean, motion-rich mobile UI concept focused on delightful micro-interactions.",
    tags: ["React Native", "TypeScript", "Reanimated"],
    image: "/images/project-mobileapp.jpg",
    href: "#",
    github: "https://www.github.com/Mhusnain0027",
  },
  {
    id: "portfolio",
    index: "05",
    title: "Frame — Photography Portfolio",
    description: "An image-first portfolio template with a masonry gallery and buttery-smooth transitions.",
    tags: ["Next.js", "Lenis", "GSAP"],
    image: "/images/project-portfolio.jpg",
    href: "#",
    github: "https://www.github.com/Mhusnain0027",
  },
];

export type Testimonial = {
  initial: string;
  name: string;
  title: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initial: "A",
    name: "Ayaan Malik",
    title: "Founder, Startup Co.",
    quote:
      "Muhammad delivered a product that felt premium from day one — sharp UI, smooth motion, and a technical foundation ready to scale.",
  },
  {
    initial: "S",
    name: "Sara Khan",
    title: "Product Manager",
    quote:
      "Rare mix of engineering depth and design taste. Communication was clear, timelines were respected, and the final experience exceeded expectations.",
  },
  {
    initial: "R",
    name: "Ryan Cole",
    title: "CEO, Agency",
    quote:
      "The interactions and polish elevated our entire brand presence. Clients immediately noticed the difference in quality.",
  },
  {
    initial: "L",
    name: "Lina Faris",
    title: "Marketing Lead",
    quote:
      "Fast, reliable, and detail-obsessed. The portfolio-level craftsmanship showed up in every screen we shipped together.",
  },
];

export const marqueeWords = [
  "Full Stack Developer",
  "AI Engineer",
  "SaaS Builder",
  "Creative Developer",
  "Available For Work",
];

export const ANIMATION_CONFIG = {
  ease: {
    smooth: "power3.out",
    luxury: "power4.out",
    soft: "power2.inOut",
  },
  duration: {
    fast: 0.45,
    base: 0.8,
    slow: 1.2,
    cinematic: 1.6,
  },
  transitionScribble: {
    durationIn: 0.8,
    durationOut: 1.5,
    scale: 1.15,
    strokeWidthStart: "2%",
    strokeWidthMax: "42%",
  },
};

export const seo = {
  title: "Muhammad Husnain | Full Stack Developer, AI Engineer & SaaS Builder",
  description:
    "Premium portfolio of Muhammad Husnain — Full Stack Developer, AI Engineer, and SaaS Builder based in Dubai, UAE. Cinematic interfaces, scalable products, and high-performance web experiences.",
  url: "https://www.personalportfolio.dev",
  keywords: [
    "Muhammad Husnain",
    "Full Stack Developer",
    "AI Engineer",
    "SaaS Builder",
    "Dubai Developer",
    "Next.js Portfolio",
    "GSAP Developer",
  ],
};
