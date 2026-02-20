/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <div className="text-center text-3xl mt-15 font-bold ">
        How to Learn CSS
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          1. Understand the Basics of CSS
        </h1>
        <p className="text-xl mt-3">
          CSS (Cascading Style Sheets) is used to style and design web pages.
          It controls colors, fonts, spacing, layout, and responsiveness.
          Before moving to advanced topics, understand selectors,
          properties, values, and how CSS connects with HTML.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          2. Learn Selectors and Properties
        </h1>
        <p className="text-xl mt-3">
          Selectors help target HTML elements. Learn basic selectors like
          element, class, and id selectors. After that, explore advanced
          selectors such as pseudo-classes and pseudo-elements.
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Element Selector:</span> Targets all elements of a type.
          </li>
          <li>
            <span className="font-bold">Class Selector:</span> Targets elements with a specific class.
          </li>
          <li>
            <span className="font-bold">ID Selector:</span> Targets a unique element.
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          3. Understand the Box Model
        </h1>
        <p className="text-xl mt-3">
          Every HTML element is considered a box. The box model consists of
          content, padding, border, and margin. Mastering the box model
          is essential for building proper layouts and spacing elements
          correctly.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          4. Learn Flexbox and Grid
        </h1>
        <p className="text-xl mt-3">
          Flexbox and CSS Grid are modern layout systems that make
          designing responsive layouts much easier.
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Flexbox:</span> Best for one-dimensional layouts.
          </li>
          <li>
            <span className="font-bold">Grid:</span> Best for two-dimensional layouts.
          </li>
        </div>
        <p className="text-xl mt-3">
          Practice building navigation bars, card layouts,
          and dashboard structures using these tools.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          5. Learn Responsive Design
        </h1>
        <p className="text-xl mt-3">
          Responsive design ensures that your website works properly
          on mobile, tablet, and desktop devices. Learn media queries
          and mobile-first design techniques to make your layouts adaptable.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          6. Explore CSS Animations and Transitions
        </h1>
        <p className="text-xl mt-3">
          CSS allows you to create smooth animations and transitions.
          Learn properties like transition, transform, and keyframes
          to make your UI more interactive and modern.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          7. Choose Learning Resources
        </h1>
        <p className="text-xl mt-3">
          There are many resources available to master CSS:
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">MDN Web Docs:</span> Comprehensive and reliable documentation.
          </li>
          <li>
            <span className="font-bold">W3Schools:</span> Beginner-friendly tutorials.
          </li>
          <li>
            <span className="font-bold">YouTube Channels:</span> Traversy Media and The Net Ninja.
          </li>
          <li>
            <span className="font-bold">Practice Projects:</span> Build landing pages and portfolios.
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          8. Practice Regularly
        </h1>
        <p className="text-xl mt-3">
          Consistency is the key to mastering CSS.
          Practice by cloning website designs,
          building responsive layouts, and experimenting
          with different styles and animations.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">Conclusion</h1>
        <p className="text-xl mt-3">
          CSS is a powerful styling language that transforms
          simple HTML structures into visually appealing websites.
          By mastering selectors, layouts, responsiveness,
          and animations, you can build professional and modern UI designs.
          Keep practicing and experimenting to strengthen your skills.
        </p>
      </div>
    </div>
  );
};

export default page;