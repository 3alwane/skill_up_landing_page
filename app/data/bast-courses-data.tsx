import {
  BookOpen,
  Briefcase,
  Clock,
  Lightbulb,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import { PostsCardBlogPostsSection3 } from "../components/blog-posts";

export const bestCoursesData: PostsCardBlogPostsSection3[] = [
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Frontend Development Bootcamp", className: "" },
    description: {
      text: "Master HTML, CSS, JavaScript, and modern frameworks like React in a project-driven learning environment.",
      className: "text-gray-500",
    },
    image: {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=240&fit=crop&crop=center",
      alt: "Frontend Development Bootcamp",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "25",
        label: "Modules",
        icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "6",
        label: "Live Projects",
        icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "Discover Program",
      urlLink: "#",
      className: "text-rose-500 hover:text-white hover:bg-rose-500",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Intro to Data Science with Python" },
    description: {
      text: "Dive into data analysis, visualization, and machine learning using Python libraries like Pandas, NumPy, and Scikit-learn.",
    },

    image: {
      src: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?w=400&h=240&fit=crop&crop=center",
      alt: "Data Science with Python",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "40",
        label: "Hours",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "4",
        label: "Capstone Projects",
        icon: <Lightbulb className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "Explore Curriculum",
      urlLink: "#",
      className: "text-blue-500 hover:text-white hover:bg-blue-500",
    },
  },

  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "UX/UI Design Fundamentals" },
    description: {
      text: "Learn to craft user-friendly and visually appealing digital experiences using Figma, design systems, and usability principles.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?w=400&h=240&fit=crop&crop=center",
      alt: "UX/UI Design Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "30",
        label: "Modules",
        icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "3",
        label: "Design Sprints",
        icon: <User className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "View Details",
      urlLink: "#",

      className: "text-green-500 hover:text-white hover:bg-green-500",
    },
  },

  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Ethical Hacking & Cybersecurity" },
    description: {
      text: "Understand cybersecurity fundamentals, penetration testing, and how to safeguard networks in real-world environments.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&h=240&fit=crop&crop=center",
      alt: "Cybersecurity Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "45",
        label: "Hours",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "6",
        label: "Certifications",
        icon: <Shield className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "Learn More",
      urlLink: "#",
      className: "text-purple-500 hover:text-white hover:bg-purple-500",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Sustainable Tech & Innovation" },
    description: {
      text: "Explore how technology can drive sustainability with real-world examples in renewable energy, circular design, and green coding.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007?w=400&h=240&fit=crop&crop=center",
      alt: "Sustainable Tech Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "20",
        label: "Modules",
        icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "4",
        label: "Impact Cases",
        icon: <BookOpen className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "Explore",
      urlLink: "#",
      className: "text-teal-500 hover:text-white hover:bg-teal-500",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    title: { text: "Excel for Analysts & Consultants" },
    description: {
      text: "Unlock the full power of Excel for data analysis, automation, dashboards, and client-ready reporting.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1604758571514-49b1ac668d60?w=400&h=240&fit=crop&crop=center",
      alt: "Excel Analysis Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "50",
        label: "Hours",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "12",
        label: "Practice Exercises",
        icon: <Lightbulb className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "View Course",
      urlLink: "#",
      className: "text-orange-500 hover:text-white hover:bg-orange-500",
    },
  },
];
