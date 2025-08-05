import React, { ReactNode } from "react";

import {
  Users,
  BookOpen,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type BaseButtonProps = {
  text?: string;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonClickProps = BaseButtonProps & {
  onClick?: () => void;
  urlLink?: never;
};

type ButtonUrlProps = BaseButtonProps & {
  onClick?: never;
  urlLink?: string;
};

type ButtonProps = ButtonClickProps | ButtonUrlProps;

// Updated Interfaces for Posts Card Design
export interface PostsCardBlogPostsSection3 {
  title: { text?: string; className?: string };
  description: {
    text?: string;
    className?: string;
    truncateLimit?: number;
  };
  className?: string;
  image?: {
    src?: string;
    alt?: string;
    className?: string;
  };
  stats?: {
    stat1?: { value?: string; label?: string; icon?: ReactNode };
    stat2?: { value?: string; label?: string; icon?: ReactNode };
  };
  button: ButtonProps;
  category?: { text?: string; className?: string };
}

interface BlogPostsSection3Props<T extends PostsCardBlogPostsSection3> {
  sectionId?: string;
  featureBadge?: { text?: string; className?: string };
  title?: { text?: string; className?: string };
  description?: { text?: string; className?: string };
  postsArray?: T[];
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

// Professional and diverse posts data
const defaultPosts: PostsCardBlogPostsSection3[] = [
  {
    title: { text: "Strategic Leadership for Executives", className: "" },
    description: {
      text: "A masterclass designed to sharpen the decision-making skills of senior leaders and drive organizational growth.",
      className: "text-gray-500",
    },
    image: {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=240&fit=crop&crop=center",
      alt: "Strategic Leadership Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "25",
        label: "Modules",
        icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "50+",
        label: "Case Studies",
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
    title: { text: "AI and Machine Learning in Business" },
    description: {
      text: "Understand how to leverage AI and ML technologies to create business value, optimize operations, and innovate.",
    },

    image: {
      src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop&crop=center",
      alt: "AI and Machine Learning Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "40",
        label: "Hours",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "8",
        label: "Projects",
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
    title: { text: "Global Market Entry Strategies" },
    description: {
      text: "Learn the frameworks and tactics for successful international expansion, from market analysis to legal considerations.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=400&h=240&fit=crop&crop=center",
      alt: "Global Market Strategy Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "30",
        label: "Modules",
        icon: <Briefcase className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "5",
        label: "Experts",
        icon: <Users className="w-4 h-4 text-amber-400" />,
      },
    },
    button: {
      text: "View Details",
      // urlLink: "#",
      onClick: () => {
        console.log("zaza");
      },
      className: "text-green-500 hover:text-white hover:bg-green-500",
    },
  },
  {
    title: { text: "Cybersecurity for Modern Enterprises" },
    description: {
      text: "A course covering threat detection, risk management, and building a resilient security posture for your organization.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop&crop=center",
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
        value: "10+",
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
    title: { text: "Sustainable Business Practices" },
    description: {
      text: "Integrate environmental and social responsibility into your core business strategy to drive long-term value and positive impact.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=240&fit=crop&crop=center",
      alt: "Sustainable Business Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "20",
        label: "Modules",
        icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "5",
        label: "Case Studies",
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
    title: { text: "Advanced Financial Modeling" },
    description: {
      text: "Develop sophisticated financial models for valuation, forecasting, and investment analysis using industry-standard tools.",
    },
    image: {
      src: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=240&fit=crop&crop=center",
      alt: "Financial Modeling Course",
      className: "w-full h-48 object-cover",
    },
    stats: {
      stat1: {
        value: "50",
        label: "Hours",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
      },
      stat2: {
        value: "10",
        label: "Exercises",
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

function BlogPostsSection3<T extends PostsCardBlogPostsSection3>({
  sectionId = "",
  featureBadge,
  title,
  description,
  postsArray = defaultPosts as T[],
  className,
}: BlogPostsSection3Props<T>) {
  let lgGridColsClass = "lg:grid-cols-3";
  if (postsArray.length === 1) {
    lgGridColsClass = "lg:grid-cols-1";
  } else if (postsArray.length === 2) {
    lgGridColsClass = "lg:grid-cols-2";
  } else if (postsArray.length === 3) {
    lgGridColsClass = "lg:grid-cols-3";
  }

  const {
    text: featureText = "Featured Programs",
    className: featureClassName = "",
  } = featureBadge || {};

  const {
    text: titleText = "Professional Development for Your Team",
    className: titleClassName = "",
  } = title || {};

  const {
    text: descriptionText = "Explore our curated selection of professional development programs, designed to equip your team with the skills needed to succeed in today's competitive landscape.",
    className: descriptionClassName = "",
  } = description || {};

  return (
    <section id={sectionId} className={`py-16 ${className} max-xl:px-6`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div>
            <Badge
              variant={"secondary"}
              className={`p-1 font-medium rounded-3xl px-4 text-[13px] bg-primary/10 text-primary ${featureClassName}`}
            >
              {featureText}
            </Badge>

            <div className="grid grid-cols-[1fr_1fr] items-start max-lg:grid-cols-1 gap-4">
              <h2
                className={`text-3xl font-bold pt-5 bg-transparent max-lg:mt-5 sm:text-4xl  ${titleClassName}`}
              >
                {titleText}
              </h2>
              <p
                className={`mt-3 text-lg pl-12 max-lg:pl-0 opacity-65 max-lg:pt-5 max-sm:text-[16px] ${descriptionClassName}`}
              >
                {descriptionText}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1    md:grid-cols-2 ${lgGridColsClass} gap-6 justify-items-center`}
        >
          {postsArray.map((post, index) => (
            <PostsCard
              key={index}
              title={post.title}
              description={post.description}
              image={post.image}
              stats={post.stats}
              button={post.button}
              category={post.category}
              className={post.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPostsSection3;

// Updated PostsCard component with course-like design
function PostsCard({
  title,
  description,
  image,
  stats,
  button,
  className,
}: PostsCardBlogPostsSection3) {
  const {
    urlLink = "#",
    text: buttonText = "Learn More",
    className: buttonClassName,
    variant = "ghost",
    onClick,
  } = button || {};

  const truncatedDescriptionLimit = description.truncateLimit ?? 150;
  const truncatedDescription = truncateString(
    description.text,
    truncatedDescriptionLimit
  );

  return (
    <Card
      className={`border-none  p-[3px] rounded-[15px] w-full max-w-[400px] 
        max-sm:max-w-[80%] max-[400px]:w-full overflow-hidden shadow-none transition-all duration-300 md:w-[400px] ${className}`}
    >
      {/* Image Section */}
      <div className="relative">
        <div className="absolute inset-[9px] p-3 overflow-hidden bg-black opacity-30 rounded-[15px]"></div>

        {image?.src && (
          <img
            src={image.src}
            alt={image.alt || "Course image"}
            className={`w-full p-2 h-80 rounded-[26px] overflow-hidden object-cover ${image.className}`}
          />
        )}
      </div>

      {/* Content Section */}
      <CardHeader className="px-4 pt-4 pb-4">
        <h3
          className={`text-xl sm:text-2xl mt-1 md:text-[28px] lg:text-[26px] xl:text-[30px] font-semibold ${title.className}`}
        >
          {truncateString(title.text, 60)}
        </h3>
      </CardHeader>

      <CardContent className="px-4 pb-4 pt-3">
        <p className={`text-sm leading-relaxed ${description.className}`}>
          {truncatedDescription}
        </p>

        {stats && (
          <div className="flex items-center gap-4 sm:gap-6 mt-6 flex-wrap">
            {stats.stat1 && (
              <div className="flex items-center gap-2 text-sm">
                {stats.stat1.icon}
                <span className="font-medium text-gray-600">
                  {stats.stat1.value}
                </span>
                <span className="text-gray-400">{stats.stat1.label}</span>
              </div>
            )}
            {stats.stat2 && (
              <div className="flex items-center gap-2 text-sm">
                {stats.stat2.icon}
                <span className="font-medium text-gray-600">
                  {stats.stat2.value}
                </span>
                <span className="text-gray-400">{stats.stat2.label}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-6 mt-1">
        {onClick ? (
          <Button
            variant={variant}
            onClick={onClick}
            className={`hover:bg-primary p-5 px-0 hover:px-5 hover:no-underline text-primary rounded-full py-6 hover:text-white no-underline transition-all ${buttonClassName}`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant={variant}
            asChild
            className={`hover:bg-primary p-5 px-0 hover:px-5 hover:no-underline text-primary rounded-full py-6 hover:text-white no-underline transition-all ${buttonClassName}`}
          >
            <a className="no-underline" href={urlLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
