import {
  UserPlus,
  BookOpenCheck,
  MailCheck,
  GraduationCap,
} from "lucide-react";
import { FeatureSection3Card } from "../components/feature-section-3";

export const howItWoksItems: FeatureSection3Card[] = [
  {
    title: { text: "Sign Up" },
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    description: {
      text: "Create your free account in seconds—no hassle, just learning. Gain immediate access to a growing library of high-quality tech content.",
    },
    iconProperty: {
      icon: <UserPlus size={28} aria-label="Sign Up Icon" />,
    },
    button: {
      text: "Get Started",
      urlLink: "#",
      className: "hidden",
    },
  },
  {
    title: { text: "Choose Your Course" },
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    description: {
      text: "Explore top-rated tech courses and pick what suits your goals. From beginner to advanced, we have something for everyone.",
    },
    iconProperty: {
      iconBackgroundClassName: "bg-red-50",
      icon: (
        <BookOpenCheck
          className="text-red-500"
          size={28}
          aria-label="Choose Course Icon"
        />
      ),
    },
    button: {
      text: "Browse Courses",
      className: "hidden",
      urlLink: "#",
    },
  },
  {
    title: { text: "Confirm & Access" },
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    description: {
      text: "Receive a confirmation email with instant access to your dashboard. Easily manage your profile, track progress, and get started right away.",
    },
    iconProperty: {
      iconBackgroundClassName: "bg-teal-50",
      icon: (
        <MailCheck
          className="text-teal-700"
          size={28}
          aria-label="Confirm Email Icon"
        />
      ),
    },
    button: {
      text: "Check Email",
      className: "hidden",
      urlLink: "#",
    },
  },
  {
    title: { text: "Start Learning" },
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    description: {
      text: "Dive into expert-led lessons and real-world projects at your own pace. Build practical skills and earn certificates to showcase your growth.",
    },
    iconProperty: {
      iconBackgroundClassName: "bg-orange-50",
      icon: (
        <GraduationCap
          className="text-orange-600"
          size={28}
          aria-label="Start Learning Icon"
        />
      ),
    },
    button: {
      text: "Start Now",
      className: "hidden",
      urlLink: "#",
    },
  },
];
