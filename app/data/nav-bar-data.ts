import { MenuItem } from "../components/nav-bar";

export const menu = [
  { title: "About Us", url: "#about-us" },
  { title: "How It Works", url: "#howitworks" },
  { title: "Courses", url: "#courses" },
  { title: "Testimonials", url: "#testimonials" },
  { title: "Contact", url: "#contact" },
] as const;

// Derived from copyNav, keeps structure and full type safety
export const navMainMenu: MenuItem[] = menu.map((item) => ({
  title: item.title,
  url: item.url,
}));
