import React from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi";

export type BlogPost = {
  image: string;
  date: { day: string; month: string };
  category: string;
  author: string;
  comments: string;
  title: string;
};

const Blog: React.FC = () => {

  const blogPosts: BlogPost[] = [
    {
      image: "./blog/lemon.jpg",
      date: { day: "18", month: "Nov" },
      category: "Food",
      author: "Admin",
      comments: "65 Comments",
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      image: "./blog/egg.jpg",
      date: { day: "23", month: "Jan" },
      category: "Food",
      author: "Admin",
      comments: "65 Comments",
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      image: "./blog/vegetable.jpg",
      date: { day: "18", month: "Nov" },
      category: "Food",
      author: "Admin",
      comments: "65 Comments",
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
  ];

  return (
    <section className="flex flex-col pb-9 pt-20 w-full bg-[#F2F2F2] bg-[url(./BG/blogBG.png)] bg-contain bg-no-repeat">
      <header className="flex flex-col items-center w-full leading-tight text-center">
        <p className="w-full text-base text-green-600 uppercase max-md:max-w-full">
          Blog
        </p>
        <h2 className="w-full text-4xl font-semibold text-zinc-900 max-md:max-w-full">
          Latest News
        </h2>
      </header>

      <div className="flex flex-wrap gap-10 items-start justify-center mt-14">
        {blogPosts.map((post: BlogPost, index: number) => (
          <article
            key={index}
            className="min-w-60 shadow-[0px_20px_50px_rgba(0,0,0,0.08)] w-[424px] rounded group"
          >
            {/* Image */}
            <div className="flex relative flex-col items-start px-6 pt-60 pb-6 w-full">
              <img
                src={post.image}
                className="object-cover absolute inset-0 size-full rounded-t"
                alt="Blog post image"
              />
              <div className="flex relative flex-col items-center px-3 py-2 bg-white rounded h-[58px] w-[58px]">
                <span className="text-xl text-zinc-900">{post.date.day}</span>
                <span className="text-xs tracking-wide leading-none uppercase text-zinc-500">
                  {post.date.month}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col rounded p-6 w-full bg-white max-w-[424px] max-md:px-5 max-md:max-w-full">
              <div className="flex gap-4 items-start self-start text-sm text-neutral-600">
                <div className="flex gap-1 items-center whitespace-nowrap">
                  <GoTag />
                  <span className="self-stretch my-auto text-neutral-600">
                    {post.category}
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <HiOutlineUser />
                  <span className="self-stretch my-auto text-neutral-600">
                    By {post.author}
                  </span>
                </div>
                <div className="flex gap-1 items-center text-stone-500">
                  <MdOutlineModeComment />
                  <span className="self-stretch my-auto text-stone-500">
                    {post.comments}
                  </span>
                </div>
              </div>
              <h3
                className={`mt-2 text-lg font-medium leading-7 group-hover:text-green-800 text-zinc-900`}
              >
                {post.title}
              </h3>
              <button className="flex gap-3 items-center self-start mt-5 text-base font-semibold leading-tight text-green-600 rounded-[43px]">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
