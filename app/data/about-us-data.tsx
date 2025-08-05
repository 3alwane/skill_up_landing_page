import { BarChart2, CheckSquare2, Cloud } from "lucide-react";
import { FeatureSection2Card } from "../components/feature-section-2";

export const aboutUsFeatures: FeatureSection2Card[] = [
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Dynamic Learning Paths" },
    description: {
      text: "Adaptable course structures that cater to your pace and learning style, ensuring a relevant and effective educational experience.",
    },
    iconProperty: {
      icon: <Cloud size={45} aria-label="Dynamic Learning Paths Icon" />,
    },
    button: {
      text: "Explore Paths",
      className: "",
      urlLink: "#",
      variant: "link",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Interactive Tools & Resources" },
    description: {
      text: "Engage with hands-on exercises, live projects, and a wealth of resources to solidify your understanding and build practical skills.",
    },
    iconProperty: {
      iconBackgroundClassName: " bg-blue-50 dark:bg-blue-100",
      icon: (
        <CheckSquare2
          size={45}
          className="text-blue-500"
          aria-label="Interactive Tools & Resources Icon"
        />
      ),
    },
    button: {
      text: "Discover Tools",
      className: "hover:bg-blue-500 text-blue-500",
      urlLink: "#",
      variant: "link",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Progress Analytics" },
    description: {
      text: "Track your performance with detailed analytics, identify areas for improvement, and celebrate your milestones on the way to success.",
    },
    iconProperty: {
      iconBackgroundClassName: "bg-emerald-50 dark:bg-emerald-100",
      icon: (
        <BarChart2
          className="text-emerald-500"
          size={45}
          aria-label="Progress Analytics Icon"
        />
      ),
    },
    button: {
      text: "View Progress",
      className: "hover:bg-emerald-500 text-emerald-500",

      urlLink: "#",
      variant: "link",
    },
  },
];
