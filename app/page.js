import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" mt-6    h-200   ">
      <div>
        <div>
          <h1 className="text-5xl text-white text-center  ">
            &lt;HuntingCoder/&gt;
          </h1>
          <p className="mt-6  text-xl text-center font-mono ">
            A blog for hunting coders by hunting coders.{" "}
          </p>

          <Image
            src="/3.png"
            alt="Img."
            className=" mt-10 mx-20 border-6 rounded-3xl border-b-cyan-300 border-t-cyan-300 border-l-emerald-400 border-r-emerald-400 ml-[29%]"
            width={624}
            height={426}
          />
        </div>
        <div className="text-2xl font-bold  mt-10 px-25">
          <h1 className="text-center text-3xl">Latest Blogs</h1>
        </div>
        <div>
          {" "}
          <div className="  h-100  text-xl px-60   ">
            <div className=" py-1 ">
              <div className="mt-8 ">
                <Link href="/Blogspost">
                  <h2 className=" font-bold underline ">How to learn HTML?</h2>
                </Link>

                <p className=" font-mono   ">
                  1. Start with the Basics HTML, which stands for HyperText
                  Markup Language, is the foundation of web development. Begin
                  by understanding the basic structure of HTML documents,
                  including elements, tags, and attributes. 2. Choose Your
                  Learning Resources Numerous resources are available for
                  learning HT...
                </p>
                <Link href="/Blogspost">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer  hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="mt-4  ">
                <Link href="/blogs/blogpost">
                  <h2 className=" font-bold underline ">How to learn JavaScript?</h2>
                </Link>

                <p className=" font-mono ">
                  1. Understand the Basics Before diving into JavaScript, it
                  important to have a basic understanding of HTML and CSS. These
                  two languages are the foundation of web development and will
                  make learning JavaScript easier. 2. Choose Your Learning
                  Resources There are numerous resources available for lear...
                </p>
                <Link href="/blogs/blogpost">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
              </div>
              <div className="mt-4 ">
                <Link href="/blogs/blogpost/how-to-learn-nextjs">
                  <h2 className=" font-bold   underline ">How to learn Next-Js ?</h2>
                </Link>

                <p className=" font-mono ">
                  1. Understand the Basics of React Before diving into Next.js,
                  it’s essential to have a solid understanding of React. Next.js
                  is built on top of React and extends its capabilities for
                  server-side rendering, routing, and more. 2. Choose Your
                  Learning Resources There are several resources available fo...
                </p>
                <Link href="/blogs/blogpost/how-to-learn-nextjs">
                  <button className="border-s-white border-2 mt-2 font-light px-3 rounded-2xl cursor-pointer hover:bg-blue-600 mb-20">
                    Read More
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
