import FeatureSection2 from "./components/feature-section-2";
import FeatureSection3 from "./components/feature-section-3";
import BlogPostsSection3 from "./components/blog-posts";
import TestimonialSection from "./components/testimonials";
import HeroSection3 from "./components/hero-section";
import NewsLetterClient from "./components/newsLetterClient";
import { NavBar2 } from "./components/nav-bar";
import { ChartNoAxesCombined } from "lucide-react";
import { ModeToggle } from "./dark-mode";
import { FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";

import Footer1 from "./components/footer";
import { navMainMenu } from "./data/nav-bar-data";
import { myfooterNavigation } from "./data/footer_data";
import { testimonials } from "./data/testimonials_data";
import { aboutUsFeatures } from "./data/about-us-data";
import { howItWoksItems } from "./data/how-it-works-data";
import { bestCoursesData } from "./data/bast-courses-data";
import { getHashPlusName, removeHash } from "./utils";

export default function Home() {
  return (
    <div className={`dark:bg-dark-blue`}>
      {/* Navbar */}
      <NavBar2
        className={`px-[160px]  w-full max-xl:px-[40px] dark:bg-dark-blue  `}
        navigationMenu={navMainMenu}
        authLinks={{
          login: {
            className: "rounded-full",
            urlLink: "/",
          },
          register: {
            className: " px-7 rounded-full",
            text: "Sign Up",
          },
        }}
        isSticky={false}
        domain={{
          name: (
            <div className="text-3xl flex items-center gap-2 max-sm:hidden ">
              <span className="font-bold">Skill</span>
              <span className="text-primary font-medium">Up</span>
            </div>
          ),
          logo: <ChartNoAxesCombined size={40} />,
        }}
        leftAddon={<ModeToggle />}
      />
      {/* Hero section */}
      <HeroSection3
        mainHeading={{ text: " Unlock Your Potential. Master New Skills" }}
        subHeading={{
          text: "Learn from industry experts and build the career you've always dreamed of.",
        }}
        className={` bg-gradient-to-t from-[#faf6f0] to-white   pt-[160px] max-sm:pt-[100px]  dark:from-[#30210a] dark:to-[#0a1424] `}
        primaryButton={{
          text: "Explore Programs",
          className: "rounded-full bg-[#ff9700]",
          buttonUrl: "/",
        }}
        socialProf={{
          text: "Proudly partnered with",

          customers: [
            {
              name: "Google",
              logo: <FaGoogle size={20} className="opacity-50" />,
            },
            {
              name: "Apple",
              logo: <FaApple size={20} className="opacity-50" />,
            },
            {
              name: "Microsoft",
              logo: <FaMicrosoft size={20} className="opacity-50" />,
            },
          ],
        }}
        secondaryButton={{ text: "Meet Our Mentors", variant: "ghost" }}
        heroImage={{
          alt: "",
          src: "/student_1.png",
          className: "h-[700px]",
        }}
      />
      {/* About Section */}
      <FeatureSection2
        sectionId={removeHash(getHashPlusName(navMainMenu, "About Us"))}
        className="pt-24"
        featuresArray={aboutUsFeatures}
        description={{
          text: "Discover our personalized features that help you learn efficiently and achieve your goals.",
        }}
        title={{
          text: "Your Educational Journey, Simplified",
          // className: "text-[70px]",
        }}
      />
      {/* How it works */}
      <FeatureSection3
        sectionId={removeHash(getHashPlusName(navMainMenu, "How It Works"))}
        featuresArray={howItWoksItems}
        className=""
        featureBadge={{
          text: "Join a community of 12,000+ tech professionals",
        }}
        title={{
          text: "Unlock your potential with tailored courses",
        }}
        description={{
          text: "Our tools are designed to boost productivity and unlock new opportunities for your business.",
        }}
        image={{ src: "/student_2.png" }}
      />
      {/* courses */}
      <BlogPostsSection3
        sectionId={removeHash(getHashPlusName(navMainMenu, "Courses"))}
        className="bg-gray-100 dark:bg-transparent"
        postsArray={bestCoursesData}
        featureBadge={{ text: "Best Courses" }}
        title={{ text: "Professional Growth for Everyone, Anytime" }}
        description={{
          text: "Access a curated library of online courses designed to upskill your team, enhance collaboration, and keep your organization ahead in today’s digital-first world.",
        }}
      />
      {/* testimonials */}
      <TestimonialSection
        testimonialsArray={testimonials}
        sectionId={removeHash(navMainMenu[3].url)}
      />
      {/* <Newsletter1 /> */}

      <NewsLetterClient sectionId={navMainMenu[4].url} />
      {/*  */}
      <Footer1
        website="Skill Up"
        websiteDescription="Your go-to platform for mastering web development, AI, and data science. Learn by doing, grow with a global community."
        handle="skill_up"
        footerNavigation={myfooterNavigation}
        classname="px-40 max-sm:px-20 py-[97px] dark:shadow-xl dark:bg-[#060b12]  "
      />
    </div>
  );
}
