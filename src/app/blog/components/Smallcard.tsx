'use client';
import React from "react";
import BlogDetail from "../[blog-url]/page";
import { Blog } from "../articles/articles";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  blog: Blog;
};

export const Smallcard: React.FC<Props> = ({ blog }) => {


  console.log(blog);
  return (
    <Link
      className="flex max-w-[800px] items-center gap-lg cursor-pointer transform transition-transform duration-300 hover:scale-101"
      href={`/blog/${blog.slug}`}
      // onClick={() => {
      //   <BlogDetail />;
      // }}
    >
      <img
        src={blog.cover.url}
        className="w-[200px] rounded-lg h-[116px]"
        alt={blog.title}
      />
      <div className="flex flex-col items-start gap-sm flex-1 min-h-[116px]">
        <div className="flex flex-col items-start gap-xxxs flex-1">
          <span className="text-sm-regular text-gray-4">{blog.type}</span>
          <span className="display-xs text-gray-white">{blog.title}</span>
        </div>
        <span className="text-sm-regular text-gray-4">{blog.timestamp}</span>
      </div>
    </Link>
  );
};

{
  /* <div className="flex max-w-[800px] items-center gap-lg ">
          <img src={blog?.cover.url} className="w-[200px] rounded-lg " />
          <div className="flex flex-col items-start gap-sm flex-1">
            <div className="flex flex-col items-start gap-xxxs flex-1">
              <span className="text-sm-md text-gray-4">{blog?.type}</span>
              <span className="display-xs text-gray-white">{blog?.title}</span>
            </div>
            <span className="text-sm-md text-gray-4">{blog?.timestamp}</span>
          </div>
        </div> */
}
