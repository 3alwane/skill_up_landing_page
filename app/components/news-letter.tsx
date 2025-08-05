"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { VariantProps } from "class-variance-authority";
import React, { useState } from "react";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

type ButtonProps = {
  text?: string;
  className?: string;
  variant?: ButtonVariant;
};

export interface NewsletterStat1Card {
  count: string;
  title: string;
  description: string;
  className?: string;
}

const DEFAULT_STATS: NewsletterStat1Card[] = [
  {
    count: "47k+",
    title: "Designer, Developers & Marketers",
    description:
      "Get the latest content on your inbox of every week. We don't need to spam.",
  },
  {
    count: "12",
    title: "Hand-made reports every week",
    description:
      "Get the latest content on your inbox of every week. We don't need to spam.",
  },
];

type BaseInputProps = {
  placeholder?: string;
  className?: string;
  caption?: string;
};

type ControlledInputProps = BaseInputProps & {
  onSubmit: (email: string) => void;
  value: string;
  setValue: (email: string) => void;
};

type UncontrolledInputProps = BaseInputProps & {
  onSubmit?: never;
  value?: never;
  setValue?: never;
};

type InputProps = ControlledInputProps | UncontrolledInputProps;

interface Newsletter1Props<T extends NewsletterStat1Card> {
  sectionId?: string;

  heading?: { text?: string; className?: string };
  subheading?: { text?: string; className?: string };
  button?: ButtonProps;
  featureBadge?: { text?: string; className?: string };
  inputElement?: InputProps;
  stats?: T[];
}

export default function Newsletter1<T extends NewsletterStat1Card>({
  sectionId = "",
  heading,
  subheading,
  button,
  featureBadge,
  inputElement,
  stats = DEFAULT_STATS as T[],
}: Newsletter1Props<T>) {
  const { text: badgeText = "NewsLetter", className: badgeClassName = "" } =
    featureBadge || {};

  const { text: titleText = "Updates", className: titleClassName = "" } =
    heading || {};

  const {
    text: descriptionText = "Lorem ipsum dolor sit amet, to the consectr adipiscin",
    className: descriptionClassName = "",
  } = subheading || {};

  const {
    text: buttonText = "Subscribe Now!",
    className: buttonClassName = "",
    variant: variantButton = "default",
  } = button || {};

  const {
    className = "",
    onSubmit,
    placeholder = "Your Email Adress...",
    value,
    setValue,
    caption = "Get the latest content in your inbox every week. We don't spam.",
  } = inputElement || {};

  const [email, setEmail] = useState("");

  const isEmailInputControlled = value !== undefined && setValue !== undefined;

  const currentValue = isEmailInputControlled ? value : email;
  const setCurrentValue = isEmailInputControlled ? setValue : setEmail;

  //
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(currentValue);
    } else {
    }
    // Reset email field
    setCurrentValue("");
  };

  return (
    <section id={sectionId} className="w-full py-12 px-14 mt-6">
      <div className="max-w-6xl mx-auto">
        <header>
          <Badge
            variant="secondary"
            className={`p-1 font-medium rounded-3xl px-4 text-[13px] bg-primary/10 text-primary ${badgeClassName}`}
          >
            {badgeText}
          </Badge>

          <div className="flex flex-col md:flex-row gap-14 mt-6">
            {/* Left column with subscription form */}
            <div className="md:w-1/2">
              <hgroup>
                <h2 className={`text-4xl font-bold mb-3 ${titleClassName}`}>
                  {titleText}
                </h2>
                <p className={`opacity-60 mb-6 ${descriptionClassName}`}>
                  {descriptionText}
                </p>
              </hgroup>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <label htmlFor="email-input" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder={placeholder}
                  className={`px-4 py-3 border h-12 border-gray-300 rounded-md flex-grow ${className}`}
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                />
                <Button
                  type="submit"
                  variant={variantButton}
                  className={`px-4 py-3 h-12 rounded-md whitespace-nowrap font-medium ${buttonClassName}`}
                >
                  {buttonText}
                </Button>
              </form>
              <p className="text-[13px] opacity-50 mt-3">{caption}</p>
            </div>

            {/* Right column with stats */}
            <div className="md:w-1/2 flex flex-col sm:flex-row gap-6">
              <ul className="flex flex-col sm:flex-row gap-6 w-full">
                {stats.map((stat, index) => (
                  <li key={index} className="flex-1">
                    <Card
                      className={`flex-1 p-6 rounded-lg shadow-none h-full ${stat.className}`}
                    >
                      <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                      <h4 className="font-medium mb-2">{stat.title}</h4>
                      <p className="text-sm opacity-50">{stat.description}</p>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
