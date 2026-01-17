import { defineConfig } from '@prosophia/lab-techy';

export default defineConfig({
  site: {
    name: "Cybernetic",
    tagline: "Pushing the boundaries of technology",
  },
  theme: {
    primaryColor: "#6366f1",
    accentColor: "#22d3ee",
    fonts: {
      heading: "Space Grotesk",
      body: "Inter",
    },
    darkMode: true,
  },
  features: {
    publications: true,
    team: true,
    news: true,
    gallery: true,
    blog: true,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Team", href: "/team" },
    { label: "Publications", href: "/publications" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
});
