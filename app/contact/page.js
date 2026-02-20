"use client";

import React, { useState } from "react";

function Page() {
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    
    // formData.append("access_key", "YOUR_NEW_ACCESS_KEY");
    formData.append("access_key", "040d05cd-6694-4720-a1f5-3d83032c4da5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      form.reset();
    } else {
      setResult("Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen px-6 md:px-20 py-12">
      <h1 className="text-center text-4xl font-bold mb-10">
        Contact Us
      </h1>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto bg-neutral-900 p-8 rounded-2xl space-y-6"
      >
        <div>
          <label className="block mb-2 font-medium">
            Enter your name:
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Enter your email address:
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Enter your phone number:
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
            placeholder="Phone Number"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Elaborate your concern:
          </label>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded-md bg-neutral-800 border border-neutral-700 focus:border-blue-500 outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold"
        >
          Submit
        </button>

        {result && (
          <p className="text-center text-green-400 mt-4">
            {result}
          </p>
        )}
      </form>

      {/* Connect With Me Section */}
      <div className="text-center mt-12 space-y-4">
        <h2 className="text-2xl font-bold">Connect With Me</h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://github.com/TusharKashyap-TP"
            target="_blank"
            className="px-5 py-2 bg-black rounded-xl hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="px-5 py-2 bg-blue-600 rounded-xl hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://believe-music-india-buuzkrtvy-tusharkashyap-tps-projects.vercel.app/"
            
            target="_blank"
            className="px-5 py-2 bg-purple-600 rounded-xl hover:scale-105 transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;