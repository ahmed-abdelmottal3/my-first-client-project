import React, { useState, useRef, useEffect } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(showMore ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [showMore]);

  return (
    <section id="about" className="w-[85%] sm:w-[75%] max-w-7xl m-auto mt-10">
      <h1 className="flex items-center text-3xl font-semibold text-blue-600 border-b-1 border-gray-300 pb-2 mb-8 gap-3">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></span>
        About Me
      </h1>

      <div className="text-gray-700 text-lg leading-relaxed space-y-4">
        <p>
          Creative Graphic Designer. Over the past two years, I have entered the
          world of graphic design with a passion and a desire to continually
          develop my skills
          {!showMore && (
            <span
              onClick={() => setShowMore(true)}
              className="text-blue-500 cursor-pointer ml-1"
            >
              ...Read more
            </span>
          )}
        </p>

        <div
          ref={contentRef}
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-700"
        >
          <p className="mb-4 dark:text-amber-700">
            I have worked for various companies across Egypt, ensuring client
            satisfaction with every project. I have worked on a variety of
            projects that have helped me gain extensive practical experience in
            image processing and editing, social media advertising, layout and
            printing, and social media ad design.
          </p>

          <p className="mb-4">
            I excel at transforming ideas into attractive and eye-catching
            designs, with a focus on the smallest details and creativity. I am
            proficient in design programs such as Adobe Photoshop and
            Illustrator, and I always strive to keep up with the latest trends
            and technologies in the field.
          </p>

          <p>
            My next goal is to expand my business to work with international
            clients and deliver creative designs that make a noticeable impact
            on brands.
          </p>

          <span
            onClick={() => setShowMore(false)}
            className="text-blue-500 cursor-pointer"
          >
            Show less
          </span>
        </div>
      </div>

      {/* Skills
      <div className="flex flex-wrap gap-4 mt-6">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
          Adobe Photoshop
        </span>
        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">
          Adobe Illustrator
        </span>
        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
          Figma
        </span>
        <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full">
          Branding
        </span>
        <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full">
          Typography
        </span>
      </div> */}
    </section>
  );
}
