"use client";

import React, { useEffect, useState } from "react";
import Newsletter1 from "./news-letter";
import { newsletter_stats } from "../data/news-letter-data";

export function NewsLetterClient({ sectionId }: { sectionId?: string }) {
  const [input, setInput] = useState("");
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section id={sectionId}>
      <Newsletter1
        // sectionId={sectionId || ""}
        heading={{ text: "Stay Ahead in Your Learning Journey" }}
        subheading={{
          text: "Join thousands of learners and get the latest updates, course launches, and exclusive learning tips directly to your inbox.",
        }}
        stats={newsletter_stats}
        button={{ text: "Start Learning Free" }}
        inputElement={{
          value: input,
          setValue: setInput,
          onSubmit: (e) => {
            console.log(e);
          },
        }}
      />
    </section>
  );
}

export default NewsLetterClient;
