"use client";

import React, { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  AppWindow,
  ListChecks,
  ChartBar,
  Cloud,
  Layers,
  Shield,
  ArrowRight,
} from "lucide-react";
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
export interface FeatureSection2Card {
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
  button?: ButtonProps;
}

interface FeatureSection2Props<T extends FeatureSection2Card> {
  sectionId?: string;
  featureBadge?: { text?: string; className?: string };
  title?: { text?: string; className?: string };
  description?: { text?: string; className?: string };
  featuresArray?: T[];
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

// Updated features array to match the new content and color scheme
const features: FeatureSection2Card[] = [
  {
    title: { text: "Scalable Infrastructure" },
    description: {
      text: "Build and deploy applications with a robust, scalable cloud infrastructure that grows with you.",
    },
    iconProperty: {
      icon: <Cloud size={45} aria-label="Scalable Infrastructure Icon" />,
    },
    button: {
      text: "Explore More",
      className: "",
      urlLink: "#",
      variant: "link",
    },
  },
  {
    title: { text: "Customizable Workflows" },
    description: {
      text: "Tailor your development pipeline and project management to fit your team's unique needs.",
    },
    iconProperty: {
      icon: <ListChecks size={45} aria-label="Customizable Workflows Icon" />,
    },
    button: {
      text: "Discover Solutions",
      // urlLink: "/ssqs",
      // onClick: () => {
      //   console.log("clcked");

      // },
    },
  },
  {
    title: { text: "Advanced Analytics" },
    description: {
      text: "Leverage powerful, real-time analytics to make data-driven decisions and optimize performance.",
    },
    iconProperty: {
      icon: <ChartBar size={45} aria-label="Advanced Analytics Icon" />,
    },
    button: {
      text: "View Dashboards",
      urlLink: "#",
    },
  },
  {
    title: { text: "Centralized Management" },
    description: {
      text: "Manage all your projects and teams from a single, intuitive dashboard for maximum efficiency.",
    },
    iconProperty: {
      icon: <Layers size={45} aria-label="Centralized Management Icon" />,
    },
    button: {
      text: "Learn More",
      urlLink: "#",
    },
  },
  {
    title: { text: "Enterprise-Grade Security" },
    description: {
      text: "Protect your data with our state-of-the-art security protocols and compliance features.",
    },
    iconProperty: {
      icon: <Shield size={45} aria-label="Enterprise-Grade Security Icon" />,
    },
    button: {
      text: "Security Details",
      urlLink: "#",
    },
  },
  {
    title: { text: "Seamless Integrations" },
    description: {
      text: "Connect with your favorite tools and services for a truly integrated and productive environment.",
    },
    iconProperty: {
      icon: <AppWindow size={45} aria-label="Seamless Integrations Icon" />,
    },
    button: {
      text: "See All Integrations",
      urlLink: "#",
    },
  },
];

// Updated ServiceCard component to use the new interface structure
function FeatureSection2Card({
  title,
  description,
  iconProperty,
  button,
  className,
}: FeatureSection2Card) {
  const {
    icon,
    className: iconClassName,
    iconBackgroundClassName = "",
  } = iconProperty;
  const {
    urlLink = "#",
    text: buttonText = "Learn More",
    className: buttonClassName = "",
    onClick: onButtonClick,
    variant: variantButton = "ghost",
  } = button || {};

  const truncatedDescriptionLimit = description.truncateLimit ?? 150;

  const truncatedDescription = truncateString(
    description.text,
    truncatedDescriptionLimit
  );

  return (
    <Card
      className={`w-full max-w-[350px] h-[450px] p-1 flex flex-col justify-around max-sm:h-fit shadow-none border-none rounded-xl ${className}`}
    >
      <CardHeader className="p-6">
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-xl mb-4 bg-primary/10  ${iconBackgroundClassName}`}
        >
          <div className={`flex items-center text-primary ${iconClassName}`}>
            {icon}
          </div>
        </div>
        <CardTitle>
          <h3 className={`text-2xl font-medium pt-6  ${title.className}`}>
            {truncateString(title.text, 50)}
          </h3>
        </CardTitle>
      </CardHeader>
      <div>
        <CardContent className="p-6 pt-0">
          <p className={`opacity-50 ${description.className}`}>
            {truncatedDescription}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          {onButtonClick ? (
            <Button
              variant={variantButton}
              onClick={onButtonClick}
              className={`hover:bg-primary p-5 px-0 hover:px-5 hover:no-underline text-primary rounded-full py-6 hover:text-white no-underline transition-all ${buttonClassName}`}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant={variantButton}
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
      </div>
    </Card>
  );
}

function FeatureSection2<T extends FeatureSection2Card>({
  sectionId = "",
  featureBadge,
  title,
  description,
  featuresArray = features as T[],
  className = "",
}: FeatureSection2Props<T>) {
  let lgGridColsClass = "lg:grid-cols-3";
  if (featuresArray.length === 1) {
    lgGridColsClass = "lg:grid-cols-1";
  } else if (featuresArray.length === 2) {
    lgGridColsClass = "lg:grid-cols-2";
  } else if (featuresArray.length === 3) {
    lgGridColsClass = "lg:grid-cols-3";
  }

  const { text: featureText = "What we do", className: featureClassName = "" } =
    featureBadge || {};

  const {
    text: titleText = "Empowering your educational journey with the perfect solution",
    className: titleClassName = "",
  } = title || {};

  const {
    text: descriptionText = "Discover how our features can help you achieve your goals and streamline your workflow.",
    className: descriptionClassName = "",
  } = description || {};

  return (
    <section
      id={sectionId}
      className={`py-12  max-xl:px-10 max-lg:px-14  ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <Badge
              variant={"secondary"}
              className={`p-1 font-medium rounded-3xl px-4 text-[13px] bg-primary/10 text-primary ${featureClassName}`}
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
                className={`mt-3 text-lg pl-24 max-lg:pl-0 opacity-50 max-lg:pt-5 max-sm:text-[16px] ${descriptionClassName}`}
              >
                {descriptionText}
              </p>
            </div>
          </div>
        </div>
        <ul
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 ${lgGridColsClass} max-sm:gap-5 `}
        >
          {featuresArray.map((feature, index) => {
            return (
              <li key={index}>
                <FeatureSection2Card
                  title={feature.title}
                  description={feature.description}
                  iconProperty={feature.iconProperty}
                  button={feature.button}
                  className={feature.className}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FeatureSection2;
