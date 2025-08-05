"use client";

import React, { ReactNode } from "react";

import {
  ListChecks,
  Cloud,
  Headset,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
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

// New Interfaces
export interface FeatureSection3Card {
  title: { text?: string; className?: string };
  description: {
    text?: string;
    className?: string;
    truncateLimit?: number;
  };
  className?: string;
  iconProperty: {
    icon: ReactNode;
    className?: string;
    iconBackgroundClassName?: string;
  };
  button: ButtonProps;
}

interface FeatureSection3Props<T extends FeatureSection3Card> {
  sectionId?: string;
  featureBadge?: { text?: string; className?: string };
  title?: { text?: string; className?: string };
  description?: { text?: string; className?: string };
  featuresArray?: T[];
  className?: string;
  image?: { alt?: string; src?: string };
  truncateLimit?: number; // Added new prop for truncation limit
}

const features: FeatureSection3Card[] = [
  {
    title: { text: "Cloud-Based Platform" },
    description: {
      text: "Our platform is built on a robust, scalable cloud infrastructure, ensuring high availability and seamless performance for your team.",
    },
    iconProperty: {
      icon: <Cloud size={45} aria-label="Cloud-Based Platform Icon" />,
    },
    button: {
      text: "Explore Features",
      urlLink: "#",
      // onClick: () => {},
    },
  },
  {
    title: {
      text: "Intuitive Project Management",
    },
    description: {
      text: "Streamline your workflow and keep projects on track with our user-friendly interface and powerful management tools.",
    },
    iconProperty: {
      icon: <ListChecks size={45} aria-label="Project Management Icon" />,
    },
    button: {
      text: "Discover Solutions",
      urlLink: "#",
    },
  },
  {
    title: {
      text: "Advanced Security & Compliance",
    },
    description: {
      text: "We prioritize your data's safety with enterprise-grade security, including regular audits and compliance certifications.",
    },
    iconProperty: {
      icon: <ShieldCheck size={45} aria-label="Security Icon" />,
    },
    button: {
      text: "Learn About Security",
      urlLink: "#",
    },
  },
  {
    title: { text: "24/7 Expert Support" },
    description: {
      text: "Our dedicated support team is available around the clock to help you with any questions or technical issues, ensuring you're never alone.",
    },
    iconProperty: {
      icon: <Headset size={45} aria-label="Customer Support Icon" />,
    },
    button: {
      text: "Contact Support",
      urlLink: "#",
    },
  },
];

function FeatureSection3<T extends FeatureSection3Card>({
  sectionId = "",
  featureBadge,
  title,
  description,
  featuresArray = features as T[],
  className = "",
  image,
}: FeatureSection3Props<T>) {
  const {
    text: featureText = "Our Mission",
    className: featureClassName = "text-primary bg-primary/10",
  } = featureBadge || {};

  const {
    text: titleText = "A Comprehensive Platform to Drive Your Business Forward",
    className: titleClassName = "",
  } = title || {};

  const {
    text: descriptionText = "Explore our powerful suite of tools designed to help you achieve your business objectives, enhance productivity, and unlock new opportunities.",
    className: descriptionClassName = "",
  } = description || {};

  const { alt = "", src = "/new.jpg" } = image || {};

  return (
    <section id={sectionId} className={`py-12 ${className} px-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <div>
            <Badge
              variant={"secondary"}
              className={`p-1 font-medium rounded-3xl px-4 text-[13px] ${featureClassName}`}
            >
              {featureText}
            </Badge>

            <div className="grid grid-cols-[1fr_1fr] items-start max-lg:grid-cols-1">
              <h2
                className={`text-3xl font-extrabold pt-5 bg-transparent max-lg:mt-5 sm:text-4xl ${titleClassName}`}
              >
                {titleText}
              </h2>
              <p
                className={`mt-3 text-lg opacity-50 pl-12 max-lg:pl-0 max-lg:pt-5 max-sm:text-[16px] ${descriptionClassName}`}
              >
                {descriptionText}
              </p>
            </div>
          </div>
        </div>

        {/* Updated layout for 2x2 grid + vertical image */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8  mt-20">
          {/* Cards in 2x2 grid - smaller container */}
          <div className="grid grid-cols-1    md:grid-cols-2 gap-x-3 max-sm:gap-y-4 lg:gap-x-4 lg:gap-y-3 max-w-2xl">
            {featuresArray.slice(0, 4).map((feature, index) => (
              <FeatureSection3Card
                key={index}
                title={feature.title}
                description={feature.description}
                iconProperty={feature.iconProperty}
                button={feature.button}
                className={feature.className}
              />
            ))}
          </div>

          {/* Vertical image - larger space */}
          <div className="flex items-stretch justify-center">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-lg min-h-[400px] lg:min-h-[750px] max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection3;

function FeatureSection3Card({
  title,
  description,
  iconProperty,
  button,
  className,
}: FeatureSection3Card) {
  const {
    icon,
    className: iconClassName = "text-primary",
    iconBackgroundClassName = "bg-primary/10",
  } = iconProperty;
  const {
    urlLink = "#",
    text: buttonText = "Learn More",
    className: buttonClassName = "",
    onClick: onButtonClick,
    variant = "ghost",
  } = button || {};

  const truncatedDescriptionLimit = description.truncateLimit ?? 150;

  const truncatedDescription = truncateString(
    description.text,
    truncatedDescriptionLimit
  );

  return (
    <Card
      className={`flex flex-col justify-between h-fit  p-4  shadow-none dark:border rounded-xl  max-w-sm ${className}`}
    >
      <CardHeader className="">
        <div
          className={`flex h-16 w-16 items-center  justify-center rounded-xl mb-3 ${iconBackgroundClassName}`}
        >
          <div className={`flex items-center text-primary ${iconClassName}`}>
            {React.cloneElement(icon as React.ReactElement, { size: 32 })}
          </div>
        </div>
        <CardTitle>
          <h3 className={`text-xl font-medium pt-4  ${title.className}`}>
            {truncateString(title.text, 50)}
          </h3>
        </CardTitle>
      </CardHeader>
      <div className="flex-grow">
        <CardContent className="p-4 pt-0">
          <p className={`opacity-50 text-sm ${description.className}`}>
            {truncatedDescription}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {onButtonClick ? (
            <Button
              variant={variant}
              className={`hover:bg-primary p-3 px-0 h-12   hover:px-3 hover:no-underline text-primary rounded-full py-4 hover:text-white no-underline transition-all text-sm ${buttonClassName}`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant={variant}
              asChild
              className={`hover:bg-primary p-3 px-0 h-12 hover:px-3 hover:no-underline text-primary rounded-full py-4 hover:text-white no-underline transition-all text-sm ${buttonClassName}`}
            >
              <a className="no-underline" href={urlLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
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
