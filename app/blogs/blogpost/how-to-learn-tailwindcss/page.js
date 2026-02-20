/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <div className="text-center text-3xl mt-15 font-bold ">
        How to Learn Tailwind CSS
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          1. Understand What Tailwind CSS Is
        </h1>
        <p className="text-xl mt-3">
          Tailwind CSS is a utility-first CSS framework that allows you to build
          modern user interfaces directly inside your HTML or JSX using utility classes.
          Instead of writing custom CSS files, you apply pre-built classes
          to style elements quickly and efficiently.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          2. Learn Core Utility Classes
        </h1>
        <p className="text-xl mt-3">
          Tailwind provides thousands of utility classes that control spacing,
          colors, typography, layout, and more.
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Spacing:</span> p-4, m-4, px-6
          </li>
          <li>
            <span className="font-bold">Colors:</span> bg-blue-500, text-red-600
          </li>
          <li>
            <span className="font-bold">Typography:</span> text-xl, font-bold
          </li>
          <li>
            <span className="font-bold">Flex & Grid:</span> flex, justify-center, grid-cols-3
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          3. Understand Responsive Design
        </h1>
        <p className="text-xl mt-3">
          Tailwind follows a mobile-first approach. It uses responsive
          prefixes to apply styles at different screen sizes.
        </p>
        <div className="px-5">
          <li><span className="font-bold">sm:</span> Small screens</li>
          <li><span className="font-bold">md:</span> Medium screens</li>
          <li><span className="font-bold">lg:</span> Large screens</li>
          <li><span className="font-bold">xl:</span> Extra large screens</li>
        </div>
        <p className="text-xl mt-3">
          Example: md:text-xl means apply larger text on medium screens and above.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          4. Build Reusable Components
        </h1>
        <p className="text-xl mt-3">
          Tailwind works extremely well with React and Next.js.
          Combine utility classes to create reusable components like:
        </p>
        <div className="px-5">
          <li>Navbar</li>
          <li>Cards</li>
          <li>Forms</li>
          <li>Buttons</li>
          <li>Dashboard layouts</li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          5. Customize Tailwind Configuration
        </h1>
        <p className="text-xl mt-3">
          Tailwind allows customization through the tailwind.config.js file.
          You can extend colors, fonts, spacing, and breakpoints to match
          your design system.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          6. Learn Animations and Effects
        </h1>
        <p className="text-xl mt-3">
          Tailwind includes built-in utilities for transitions,
          transforms, shadows, and hover effects.
          These help you build interactive and modern UIs.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          7. Choose Learning Resources
        </h1>
        <p className="text-xl mt-3">
          Some useful resources for learning Tailwind CSS:
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Official Documentation:</span> Best and most detailed guide.
          </li>
          <li>
            <span className="font-bold">YouTube Tutorials:</span> Traversy Media, Net Ninja.
          </li>
          <li>
            <span className="font-bold">Practice Projects:</span> Clone modern websites.
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          8. Practice Regularly
        </h1>
        <p className="text-xl mt-3">
          The best way to master Tailwind is by building real-world projects.
          Practice designing responsive layouts, dashboards, and landing pages.
          The more you use utility classes, the faster and more confident
          you will become.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">Conclusion</h1>
        <p className="text-xl mt-3">
          Tailwind CSS is a powerful framework that speeds up UI development.
          By mastering utility classes, responsiveness, customization,
          and component building, you can create clean and professional designs.
          Keep practicing and experimenting to become confident in Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default page;