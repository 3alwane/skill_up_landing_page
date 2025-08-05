"use client";

import React, { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type VariantProps } from "class-variance-authority";
import { Building } from "lucide-react";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
type BaseButtonProps = {
  text?: string;
  variant?: ButtonVariant;
  className?: string;
  isVisible?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  onClick?: never;
  buttonUrl?: string;
};

type ClickButtonProps = BaseButtonProps & {
  onClick?: () => void;
  buttonUrl?: never;
};

type ButtonProps = LinkButtonProps | ClickButtonProps;

interface HeroSection2Props {
  sectionId?: string;
  badge?: {
    mainText: string;
    secondText: string;
    className: string;
    isVisible?: boolean;
  };
  mainHeading?: { text: string; className?: string };
  subHeading?: { text: string; className?: string };
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  socialProf?: {
    text?: string;
    customers: { name?: string; logo?: ReactNode }[];
  };

  heroImage?: {
    src: string;
    alt: string;
    className?: string;
  };
  className?: string;
}

//Extract the customers type from the HeroSection3Props > social Prof
//Since social prof is optional meaning it could be undefined, we use
//the NonNullable to remove undefined or null, so we can safely access to the
//sub proprities types: text, and customers. Then we use number between square
//brackets to acess the type of each array since customers is an array
//
type CustomerType = NonNullable<
  HeroSection2Props["socialProf"]
>["customers"][number];

const default_customers: CustomerType[] = [
  { name: "GlobalTech", logo: <Building /> },
  { name: "Innovate Solutions", logo: <Building /> },
  { name: "Future Corp", logo: <Building /> },
];

const HeroSection2: React.FC<HeroSection2Props> = ({
  sectionId = "",
  badge,
  socialProf,
  mainHeading,
  subHeading,
  primaryButton,
  secondaryButton,
  heroImage,
  className = "",
}) => {
  const {
    text: socialProofText = "TRUSTED BY INDUSTRY-LEADING COMPANIES",
    customers: socialProfCustomers = default_customers,
  } = socialProf || {};
  const {
    mainText: mainBadgeText = "NEW",
    secondText: secondBadgeText = "Join our team. Explore career opportunities",
    isVisible: isBadgeVisible = true,
    className: badgeClassName = "",
  } = badge || {};

  const {
    text: mainHeadingText = "Empower Your Workforce with World-Class Mentorship",
    className: mainHeadingClassName = "",
  } = mainHeading || {};

  const {
    text: subHeadingText = "Our platform connects your employees with industry experts, fostering professional growth and leadership skills.",
    className: subHeadingClassName = "",
  } = subHeading || {};

  const {
    text: primaryButtonText = "Request a Demo",
    variant: primaryButtonVariant = "default",
    className: primaryButtonClassName = "",
    isVisible: isPrimaryButtonVisible = true,
    buttonUrl: primaryButtonUrl = "#",
    onClick: onPrimaryClick,
  } = primaryButton || {};

  const {
    isVisible: isSecondaryButtonVisible = true,
    text: secondaryButtonText = "Learn More",
    variant: secondaryButtonVariant = "outline",
    className: secondaryButtonClassName = "",
    buttonUrl: secondaryButtonUrl = "#",
    onClick: onSecondaryClick,
  } = secondaryButton || {};

  const {
    src: heroImageSrc = "/hero-image.jpg",
    alt: heroImageAlt = "A group of professionals collaborating in a modern office environment",
    className: heroImageClassName = "",
  } = heroImage || {};

  return (
    <section
      id={sectionId}
      className={`w-full max-xl:px-10 max-lg:px-14 mx-auto px-4 py-24 relative overflow-hidden ${className}`}
    >
      {isBadgeVisible && (
        <div className="flex gap-4 mb-14 max-w-6xl mx-auto max-lg:justify-center">
          <div
            className={`bg-primary/10 rounded-full w-fit justify-start p-[6px] items-start flex ${badgeClassName}`}
          >
            <Badge
              variant={"default"}
              className="font-normal max-sm:hidden h-6 rounded-full shadow-none"
            >
              {mainBadgeText}
            </Badge>
            <span className="ml-3 mr-1 text-primary max-sm:text-[11px]">
              {secondBadgeText}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-14 w-full max-w-6xl mx-auto">
        <article className="flex flex-col w-full lg:w-1/2 max-lg:text-center md:flex-row gap-12 items-center">
          <div>
            <header>
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 max-lg:mx-10 max-sm:mx-6 ${mainHeadingClassName}`}
              >
                {mainHeadingText}
              </h1>
              <p
                className={`text-lg opacity-60 mb-8 max-lg:mx-6 ${subHeadingClassName}`}
              >
                {subHeadingText}
              </p>
            </header>

            <div className="flex max-lg:flex-col max-lg:items-center gap-3 mb-14">
              {isPrimaryButtonVisible && (
                <>
                  {onPrimaryClick ? (
                    <Button
                      size="lg"
                      variant={primaryButtonVariant}
                      onClick={onPrimaryClick}
                      className={`h-12 max-lg:w-[38%] max-sm:w-[80%] ${primaryButtonClassName}`}
                      aria-label={primaryButtonText}
                    >
                      {primaryButtonText}
                    </Button>
                  ) : (
                    <Button
                      size="lg"
                      variant={primaryButtonVariant}
                      className={` h-12 max-lg:w-[38%] max-sm:w-[80%]  ${primaryButtonClassName}`}
                      aria-label={primaryButtonText}
                      asChild
                    >
                      <a href={primaryButtonUrl}>{primaryButtonText}</a>
                    </Button>
                  )}
                </>
              )}

              {isSecondaryButtonVisible && (
                <>
                  {onSecondaryClick ? (
                    <Button
                      variant={secondaryButtonVariant}
                      size="lg"
                      className={`  max-lg:w-[38%] max-sm:w-[80%] h-12 ${secondaryButtonClassName}`}
                      aria-label={secondaryButtonText}
                      onClick={onSecondaryClick}
                    >
                      {secondaryButtonText}
                    </Button>
                  ) : (
                    <Button
                      variant={secondaryButtonVariant}
                      size="lg"
                      className={`   max-lg:w-[38%] max-sm:w-[80%] h-12 ${secondaryButtonClassName}`}
                      aria-label={secondaryButtonText}
                      asChild
                    >
                      <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
                    </Button>
                  )}
                </>
              )}
            </div>

            <aside aria-label="Trusted by companies">
              <p className="text-xs font-medium text-gray-500 mb-6">
                {socialProofText}
              </p>
              {socialProfCustomers && (
                <div
                  className="flex flex-wrap max-lg:justify-center gap-8 items-center max-sm:flex-col max-sm:items-start max-sm:px-32 max-sm:pt-7"
                  role="list"
                >
                  {socialProfCustomers.map((customer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                      role="listitem"
                    >
                      {customer.logo}
                      <p className="text-sm opacity-65">{customer.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </article>

        <figure
          className={`w-[40%] absolute max-lg:hidden right-8 h-[700px] bottom-[-20px]  flex items-center justify-center ${heroImageClassName}`}
        >
          <img
            className={`h-full rounded-md w-full object-cover object-center ${heroImageClassName}`}
            src={heroImageSrc}
            alt={heroImageAlt}
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroSection2;
