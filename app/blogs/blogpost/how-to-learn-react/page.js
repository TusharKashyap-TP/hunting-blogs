/* eslint-disable react/no-unescaped-entities */
import React from "react";

const page = () => {
  return (
    <div className="mb-10">
      <div className="text-center text-3xl mt-15 font-bold ">
        How to Learn React
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          1. Understand the Basics of JavaScript
        </h1>
        <p className="text-xl mt-3">
          Before learning React, it is very important to have a strong
          foundation in JavaScript. React is a JavaScript library, so concepts
          like variables, functions, arrays, objects, promises, ES6 syntax,
          arrow functions, destructuring, and modules should be clear.
          A solid understanding of JavaScript will make React much easier
          to understand and use effectively.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          2. Learn What React Is and Why It Is Used
        </h1>
        <p className="text-xl mt-3">
          React is a JavaScript library used to build user interfaces,
          especially single-page applications. It allows developers to
          create reusable components and efficiently update the UI
          using a virtual DOM. Understanding why React is popular
          and how it improves performance will help you appreciate
          its real-world importance.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          3. Choose Your Learning Resources
        </h1>
        <p className="text-xl mt-3">
          There are many excellent resources available to learn React.
          Some popular ones include:
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Official Documentation:</span>
            The React official website provides detailed explanations
            and examples for beginners and advanced users.
          </li>
          <li>
            <span className="font-bold">Online Courses:</span>
            Platforms like Udemy, freeCodeCamp, and Codecademy
            offer structured React courses.
          </li>
          <li>
            <span className="font-bold">YouTube Tutorials:</span>
            Channels like Traversy Media, The Net Ninja,
            and Codevolution provide high-quality React tutorials.
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          4. Understand Components and JSX
        </h1>
        <p className="text-xl mt-3">
          Components are the building blocks of React applications.
          Learn how to create functional components and use JSX
          (JavaScript XML) to structure UI elements.
          JSX allows you to write HTML-like code inside JavaScript,
          making it easier to build dynamic interfaces.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          5. Learn Hooks and State Management
        </h1>
        <p className="text-xl mt-3">
          Hooks are one of the most important concepts in modern React.
          Start with:
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">useState:</span> Manage component state.
          </li>
          <li>
            <span className="font-bold">useEffect:</span> Handle side effects like API calls.
          </li>
          <li>
            <span className="font-bold">useContext:</span> Share data globally.
          </li>
          <li>
            <span className="font-bold">useRef:</span> Access DOM elements directly.
          </li>
        </div>
        <p className="text-xl mt-3">
          After mastering basic hooks, you can explore advanced
          state management tools like Redux.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          6. Build Real Projects
        </h1>
        <p className="text-xl mt-3">
          Practice is the most important step in learning React.
          Start with small projects and gradually increase complexity.
          Some project ideas include:
        </p>
        <div className="px-5">
          <li>
            <span className="font-bold">Todo App:</span>
            Learn state management and component structure.
          </li>
          <li>
            <span className="font-bold">Weather App:</span>
            Practice API integration.
          </li>
          <li>
            <span className="font-bold">Blog Application:</span>
            Work with routing and dynamic data.
          </li>
          <li>
            <span className="font-bold">Dashboard:</span>
            Combine charts, authentication, and layout management.
          </li>
        </div>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          7. Learn Routing and Next.js
        </h1>
        <p className="text-xl mt-3">
          Once comfortable with React, learn React Router
          for navigation between pages.
          After that, move to Next.js to build full-stack,
          SEO-friendly applications with server-side rendering
          and static site generation.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">
          8. Join the Community
        </h1>
        <p className="text-xl mt-3">
          Join developer communities to stay motivated and learn faster.
          Platforms like Stack Overflow, Reddit, and Discord groups
          provide support, discussions, and solutions to problems.
        </p>
      </div>

      <div className="px-50 mt-7 ">
        <h1 className="text-2xl font-bold">Conclusion</h1>
        <p className="text-xl mt-3">
          Learning React requires consistent practice and patience.
          Start with JavaScript fundamentals, understand components
          and hooks, build real-world projects, and keep exploring
          advanced topics. With dedication and regular coding,
          you can become proficient in React and build powerful
          modern web applications.
        </p>
      </div>
    </div>
  );
};

export default page;