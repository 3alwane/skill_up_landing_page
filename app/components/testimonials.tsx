"use client";

import React from "react";

import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// New Interfaces for Testimonial
export interface Testimonial2Card {
  name: { text?: string; className?: string };
  role: { text?: string; className?: string };
  company?: { text?: string; className?: string };
  testimonial: {
    text?: string;
    className?: string;
    truncateLimit?: number;
  };
  avatar: {
    src?: string;
    className?: string;
  };

  className?: string;
}

interface Testimonial2SectionProps {
  sectionId?: string;
  testimonialBadge?: { text?: string; className?: string };
  title?: { text?: string; className?: string };
  description?: { text?: string; className?: string };
  testimonialsArray?: Testimonial2Card[];
  truncateLimit?: number;
  className?: string;
}

// Function to truncate a string
const truncateString = (str: string | undefined, num: number | undefined) => {
  if (!str || !num) {
    return str;
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

// Sample testimonials data
const testimonials: Testimonial2Card[] = [
  {
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

// Testimonial Card Component
function TestimonialCardComponent({
  name,
  role,
  company,
  testimonial,
  avatar,
  className,
}: Testimonial2Card) {
  const { text: userName = "", className: userClassName = "" } = name || {};
  const { text: userRole = "", className: roleClassName = "" } = role || {};
  const { text: companyName = "", className: companyClassName = "" } =
    company || {};
  const {
    text: testimonialText = "",
    className: testimonialClassName = "",
    truncateLimit,
  } = testimonial || {};
  const { src: avatarSrc = "", className: avatarClassName = "" } = avatar || {};

  const truncatedTestimonialLimit = truncateLimit ?? 150;
  const truncatedTestimonial = truncateString(
    testimonialText,
    truncatedTestimonialLimit
  );

  return (
    <Card
      className={`h-auto p-7 flex flex-col shadow-sm border rounded-xl
        transition-shadow ${className}`}
    >
      <CardHeader className="p-0 pb-4">
        <div className="flex flex-col gap-3">
          <Avatar className={`h-24 w-24 ${avatarClassName}`}>
            <AvatarImage src={avatarSrc} alt={userName} />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {generateAvatarFallback(userName)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 mt-3">
            <h3 className={`font-semibold text-2xl ${userClassName}`}>
              {userName}
            </h3>
            <p className={`text-sm opacity-60 ${roleClassName}`}>
              {userRole}
              {companyName && (
                <span className={`${companyClassName}`}> at {companyName}</span>
              )}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 pb-4 flex-1 mt-5">
        <div className="relative">
          <Quote className="absolute -top-2 -left-1 h-5 w-5 text-primary/20" />
          <p
            className={`opacity-50 leading-relaxed pl-5 w-[90%] ${testimonialClassName}`}
          >
            {truncatedTestimonial}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialSection2({
  sectionId = "",
  testimonialBadge,
  title,
  description,
  testimonialsArray = testimonials,
  className = "",
}: Testimonial2SectionProps) {
  let lgGridColsClass = "lg:grid-cols-4";
  if (testimonialsArray.length === 1) {
    lgGridColsClass = "lg:grid-cols-1";
  } else if (testimonialsArray.length === 2) {
    lgGridColsClass = "lg:grid-cols-2";
  } else if (testimonialsArray.length === 3) {
    lgGridColsClass = "lg:grid-cols-3";
  }

  const { text: badgeText = "Testimonial", className: badgeClassName = "" } =
    testimonialBadge || {};

  const {
    text: titleText = "What our students say about us in platform",
    className: titleClassName = "",
  } = title || {};

  const {
    text: descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel risus at ligula interdum vestibulum. Mauris quis convallis nunc. Class aptent taciti sociosqu.",
    className: descriptionClassName = "",
  } = description || {};

  return (
    <section id={sectionId} className={`py-12 max-sm:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <Badge
              variant={"secondary"}
              className={`p-1 font-medium rounded-3xl px-4 text-[13px] bg-primary/10 text-primary ${badgeClassName}`}
            >
              {badgeText}
            </Badge>

            <div className="grid grid-cols-[1fr_1fr] items-start max-lg:grid-cols-1">
              <h2
                className={`text-3xl font-extrabold pt-5 bg-transparent max-lg:mt-5 sm:text-4xl ${titleClassName}`}
              >
                {titleText}
              </h2>
              <p
                className={`mt-3 text-lg pl-24 max-lg:pl-0 opacity-50 max-lg:pt-5 max-sm:text-[16px] ${descriptionClassName}`}
              >
                {descriptionText}
              </p>
            </div>
          </div>
        </div>
        <ul
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 ${lgGridColsClass} gap-6 max-sm:gap-5`}
        >
          {testimonialsArray.map((testimonial, index) => {
            return (
              <li key={index}>
                <TestimonialCardComponent
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  avatar={testimonial.avatar}
                  className={testimonial.className}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default TestimonialSection2;

// Function to generate avatar fallback initials from a name
const generateAvatarFallback = (name: string): string => {
  if (name.trim().length === 0) return "U"; // Default fallback for undefined names

  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2) // Take only first 2 initials
    .join("");
};
