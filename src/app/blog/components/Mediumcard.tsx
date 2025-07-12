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
  const isExternalLink = blog.slug.startsWith('http://') || blog.slug.startsWith('https://');
  return (
    <Link
      className="flex flex-col items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 max-w-[400px] w-full cursor-pointer transform transition-transform duration-200 hover:scale-101"
      href={`${blog.slug}`}
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {/* <img
        className="flex flex-col h-[200px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black"
        src={blog.cover.url}
        alt="cover"
      /> */}
      <div className="relative min-w-[320px] w-full aspect-[16/9]">
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
          <span className="caption text-gray-4">{blog.type}</span>
          <span className="display-xs-md text-gray-white self-stretch min-h-[96px]">
            {blog.title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch">
          <span className="caption text-gray-4">{blog.timestamp}</span>

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
