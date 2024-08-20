"use client";

import React from "react";

import BlogDetail from "../[blog-url]/page";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "../articles/articles";

type Props = {
  blog: Blog;
};

export const MediumCard: React.FC<Props> = ({ blog }) => {
  return (
    <Link
      className="flex flex-col pb-lg items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 max-w-[378px] w-full cursor-pointer transform transition-transform duration-300 hover:scale-101"
      href={`${blog.slug}`}
    >
      {/* <img
        className="flex flex-col h-[200px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black"
        src={blog.cover.url}
        alt="cover"
      /> */}
      <div className="relative h-[200px] min-w-[320px] w-full">
        <Image
          src={blog.cover.url}
          alt="cover"
          fill
          sizes="(min-width: 320px) 100vw, 320px"
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col py-[0px] px-lg items-start gap-sm self-stretch">
        <div className="flex flex-col items-start gap-[8px]  ">
          <span className="text-md-md text-gray-4">{blog.type}</span>
          <span className="display-sm text-gray-white self-stretch min-h-[96px]">
            {blog.title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch">
          <span className="text-sm-regular text-gray-4">{blog.timestamp}</span>

          <div className="relative h-[24px] w-[24px]">
            <Image
              src={blog.author.image.url}
              alt="author"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
