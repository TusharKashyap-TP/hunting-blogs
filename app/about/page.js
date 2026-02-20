export default function Page() {
  return (
    <div className="min-h-screen px-6 md:px-20 lg:px-40 py-12">
      {/* Title */}
      <h1 className="text-center text-4xl font-bold mb-10">
        About &lt;HuntingCoder/&gt;
      </h1>

      {/* Intro */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Introduction</h2>
        <p className="text-lg leading-8 text-white">
          Welcome to <span className="font-semibold">Hunting Coder</span> — my
          personal blog where I share my coding journey, projects, and lessons
          I learn along the way. This space is for developers, learners, and
          tech enthusiasts who want to grow and explore programming together.
        </p>
      </section>

      {/* About me */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">About Me</h2>
        <p className="text-lg leading-8 text-white">
          Hi, I’m <span className="font-semibold">Tushar Kashyap</span>, the
          developer behind this blog. I enjoy building real-world projects and
          learning modern web technologies like MERN stack and Next.js.  
          I created Hunting Coder to document my progress, share knowledge,
          and connect with other developers.
        </p>
      </section>

      {/* What you'll find */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">What You’ll Find Here</h2>

        <ul className="space-y-3 text-lg text-white list-disc pl-6">
          <li>
            <span className="font-semibold">Tutorials:</span> Simple explanations
            of coding concepts from beginner to advanced.
          </li>
          <li>
            <span className="font-semibold">Project Walkthroughs:</span> Deep
            dives into real-world projects and how they are built.
          </li>
          <li>
            <span className="font-semibold">Coding Tips:</span> Practical tips
            that improve coding skills and productivity.
          </li>
          <li>
            <span className="font-semibold">Tech Thoughts:</span> My opinions on
            new technologies, tools, and trends.
          </li>
        </ul>
      </section>

      {/* Connect section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>

        <div className="flex flex-wrap gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/TusharKashyap-TP"
            target="_blank"
            className="px-6 py-3 bg-black text-white rounded-xl hover:scale-105 transition"
          >
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:scale-105 transition"
          >
            LinkedIn
          </a>

          {/* Vercel Portfolio */}
          <a
            href="https://believe-music-india-buuzkrtvy-tusharkashyap-tps-projects.vercel.app/"
            target="_blank"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:scale-105 transition"
          >
            Portfolio
          </a>
        </div>
      </section>

      {/* Journey */}
      <section>
        <h2 className="text-2xl font-bold mb-3">Join Me on This Journey</h2>
        <p className="text-lg leading-8 text-white">
          Coding is a continuous journey of learning and building. Through this
          blog, I share what I learn in public and connect with developers like
          you. Let’s grow together 🚀
        </p>
      </section>
    </div>
  );
}