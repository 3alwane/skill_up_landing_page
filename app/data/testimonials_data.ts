import { Testimonial2Card } from "../components/testimonials";

export const testimonials: Testimonial2Card[] = [
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    name: { text: "Jack Andraka" },
    role: { text: "Digital Marketing" },
    company: { text: "TechCorp" },
    testimonial: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris tristique dolor vel molestie augue.",
    },
    avatar: {
      src: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    name: { text: "Jacob Barnett" },
    role: { text: "Graphic Design" },
    company: { text: "Creative Studio" },
    testimonial: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris tristique dolor vel molestie augue.",
    },
    avatar: {
      src: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  },
  {
    className: `dark:bg-dark-blue-card border-none dark:shadow-md`,

    name: { text: "Colin Carlson" },
    role: { text: "Web Development" },
    company: { text: "DevAgency" },
    testimonial: {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at est sed elit efficitur gravida. Mauris tristique dolor vel molestie augue.",
    },
    avatar: {
      src: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
];
