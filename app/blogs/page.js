import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="  h-100  text-xl px-60    ">
      <div className=" py-1 ">
        <div className="mt-8 ">
          <Link href="/blogs/blogpost/how-to-learn-html">
            <h2 className=" font-bold underline ">
              How to learn HTML
            </h2>
          </Link>

          <p className=" font-mono ">
            1. Start with the Basics HTML, which stands for HyperText Markup Language, is the foundation of web development. Begin by understanding the basic structure of HTML documents, including elements, tags, and attributes. 2. Choose Your Learning Resources Numerous resources are available for learning HT...
          </p>
          <Link href="/blogs/blogpost/how-to-learn-html">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer  hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
        </div>
        <div className="mt-4  ">
          <Link href="/blog/blogpost/how-to-learn-css">
            <h2 className=" font-bold underline ">How to learn CSS</h2>
          </Link>

          <p className=" font-mono">
           1. Understand the Basics of CSS,CSS (Cascading Style Sheets) is used to style and design web pages.
          It controls colors, fonts, spacing, layout, and responsiveness.
          Before moving to advanced topics, understand selectors,
          properties, values, and how CSS connects with HTML.
          </p>
          <Link href="/blogs/blogpost/how-to-learn-css">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
        </div><div className="mt-4  ">
          <Link href="/blogs/blogpost">
            <h2 className=" font-bold underline ">How to learn JavaScript?</h2>
          </Link>

          <p className=" font-mono">
            1. Understand the Basics Before diving into JavaScript, it
            important to have a basic understanding of HTML and CSS. These two
            languages are the foundation of web development and will make
            learning JavaScript easier. 2. Choose Your Learning Resources There
            are numerous resources available for lear...
          </p>
          <Link href="/blogs/blogpost">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600">
                    Read More
                  </button>
                
        <div className="mt-4  ">
          <Link href="/blogs/blogpost/how-to-learn-react">
            <h2 className=" font-bold underline ">How to Learn React</h2>
          </Link>

          <p className=" font-mono">
           1. Learn JavaScript First,Before learning React, it is very important to have a strong
          foundation in JavaScript. React is a JavaScript library, so concepts
          like variables, functions, arrays, objects, promises, ES6 syntax,
          arrow functions, destructuring, and modules should be clear.
          A solid understanding of JavaScript will make React much easier
          to understand and use effectively.....
          </p>
          <Link href="/blogs/blogpost/how-to-learn-react">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
        </div>
        </Link>
        </div>
        <div className="mt-4  ">
          <Link href="/blogs/blogpost/how-to-learn-tailwindcss">
            <h2 className=" font-bold underline ">How to Learn Tailwind CSS</h2>
          </Link>

          <p className=" font-mono">
            1. Understand What Tailwind CSS Is, Tailwind CSS is a utility-first CSS framework that allows you to build
          modern user interfaces directly inside your HTML or JSX using utility classes.
          Instead of writing custom CSS files, you apply pre-built classes
          to style elements quickly and efficiently....
          </p>
          <Link href="/blogs/blogpost/how-to-learn-tailwindcss">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
        </div>
        
        <div className="mt-4 ">
          <Link href="/blogs/blogpost/how-to-learn-nextjs">
            <h2 className=" font-bold underline  ">
              How to learn Next-Js ?
            </h2>
          </Link>

          <p className=" font-mono ">
            1. Understand the Basics of React Before diving into Next.js, it’s essential to have a solid understanding of React. Next.js is built on top of React and extends its capabilities for server-side rendering, routing, and more. 2. Choose Your Learning Resources There are several resources available fo...
          </p>
          <Link href="/blogs/blogpost/how-to-learn-nextjs">
          
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600 mb-20">
                    Read More
                  </button>
                </Link>
        </div>
        
      </div>
    </div>
  );
};

export default page;
