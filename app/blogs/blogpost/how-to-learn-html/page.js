import React from "react";

const page = () => {
  return (
    <div className="mb-16 px-6 md:px-20 lg:px-40 py-10">

      {/* Title */}
      <div className="text-center text-4xl font-bold mb-10">
        How to Learn HTML
      </div>

      {/* Author */}
     

      {/* 1 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          1. Start with the Basics
        </h1>
        <p className="text-lg mt-4 leading-8">
          HTML, which stands for HyperText Markup Language, is the foundation of
          web development. Begin by understanding the basic structure of HTML
          documents, including elements, tags, and attributes.
        </p>
      </div>

      {/* 2 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          2. Choose Your Learning Resources
        </h1>

        <ul className="mt-4 space-y-3 text-lg list-disc pl-6 leading-8">
          <li>
            <span className="font-semibold">Online Courses:</span> Platforms
            like Codecademy, freeCodeCamp, and Udemy offer comprehensive HTML
            courses for beginners.
          </li>

          <li>
            <span className="font-semibold">Tutorials and Articles:</span>
            Websites like MDN Web Docs, W3Schools, and HTML.com provide
            tutorials and references.
          </li>

          <li>
            <span className="font-semibold">Books:</span> Books like
            "HTML and CSS: Design and Build Websites" by Jon Duckett and
            "Learning Web Design" by Jennifer Niederst Robbins are excellent
            resources.
          </li>
        </ul>
      </div>

      {/* 3 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          3. Practice Regularly
        </h1>
        <p className="text-lg mt-4 leading-8">
          Hands-on practice is essential for mastering HTML. Start by creating
          simple web pages and gradually move on to more complex projects.
          Experiment with different elements, attributes, and layouts.
        </p>
      </div>

      {/* 4 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          4. Learn Semantic HTML
        </h1>
        <p className="text-lg mt-4 leading-8">
          Understanding semantic HTML is crucial for creating accessible,
          SEO-friendly, and maintainable web pages. Learn about semantic
          elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;,
          &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, and &lt;footer&gt;.
        </p>
      </div>

      {/* 5 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          5. Explore CSS and JavaScript
        </h1>
        <p className="text-lg mt-4 leading-8">
          While HTML forms the structure of web pages, CSS adds styling and
          JavaScript adds interactivity. Learning these alongside HTML will
          greatly enhance your development skills.
        </p>
      </div>

      {/* 6 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          6. Validate Your HTML
        </h1>
        <p className="text-lg mt-4 leading-8">
          Use online validators like the W3C Markup Validation Service to
          ensure your HTML follows correct syntax and standards. Valid code
          improves accessibility and SEO.
        </p>
      </div>

      {/* 7 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          7. Stay Updated
        </h1>
        <p className="text-lg mt-4 leading-8">
          HTML evolves over time with new elements and features. Stay informed
          by following trusted sources like W3C and modern web development blogs.
        </p>
      </div>

      {/* Conclusion */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          Conclusion
        </h1>
        <p className="text-lg mt-4 leading-8">
          Learning HTML is the first step toward becoming a proficient web
          developer. Master the basics, practice regularly, learn semantic
          structure, explore CSS & JavaScript, validate your code, and stay
          updated. Happy coding!
        </p>
      </div>
    </div>
  );
};

export default page;