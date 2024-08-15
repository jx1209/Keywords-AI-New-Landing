import React, { useEffect, useState } from "react";
import { blogs } from "../articles/articles";
import { Blog } from "../articles/articles"; // Import the Blog type
import { Largecard } from "../components/Largecard";
import fs from "fs";
import { getCompiledServerMdx } from "@mintlify/mdx";
import "@mintlify/mdx/dist/styles.css";

import {
  BlogLogo,
  Discord,
  DividerLine,
  LinkedIn,
  Twitter,
} from "@/app/components/Icons";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import cn from "src/utilities/ClassMerge";

import { Smallcard } from "../components/Smallcard";
import { Button } from "@/app/components/Buttons";
import { useParams } from "next/navigation";
import path from "path";
import SocialIcons from "../components/social";
import { getMetadata } from "@/utilities/getMetadata";
import Link from "next/link";
import Image from "next/image";
import { ButtonWrapper } from "./buttonwrapper";

const getImageClass = (size: string) => {
  switch (size) {
    case "lg":
      // return "max-w-[1200px]";
      return "1200";
    case "md":
      // return "max-w-[800px]";
      return "800";
    case "sm":
      // return "max-w-[400px] ";
      return "400";
    default:
      // return "max-w-[1200px]"; // Default to large if size is not specified
      return "1200";
  }
};

function getContent(filePath: string) {
  try {
    const source = fs.readFileSync(filePath, "utf8");
    console.log("Sourcegwrgwrgrwegrwg:", source);
    return getCompiledServerMdx({ source });
  } catch (error) {
    console.error("Error!Error!", error);
    return null;
  }
}

export default async function BlogDetail({
  params,
}: {
  params: {
    "blog-url": string;
  };
}) {
  console.log("Current working directory:", process.cwd());
  const blog = blogs.find((blog) => blog.slug === params["blog-url"]);
  // const { slug } = useParams(); // Get the slug parameter from the URL
  // const router = useRouter();
  // const {slug} = router.query
  // const params = useParams()
  // const slug = params?.slug as string

  // const contentResult = await getContent(blogFolder);
  const metadata = await getMetadata(params["blog-url"]);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getLatestBlogs = (currentBlogSlug: string): Blog[] => {
    // Reverse the blogs array to get from latest to earliest
    const reversedBlogs = blogs.slice().reverse();

    // Filter out the current blog by slug and select top 3 latest blogs
    const latestBlogs = reversedBlogs
      .filter((blog) => blog.slug !== currentBlogSlug)
      .slice(0, 3);

    return latestBlogs;
  };
  const latestBlogs = getLatestBlogs(params["blog-url"]);

  return (
    <React.Fragment>
      <div
        className={cn(
          "flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text"
        )}
      >
        <div
          aria-label="hero"
          className="flex flex-col max-w-[800px] items-start gap-md  w-full"
        >
          <div
            className="flex flex-col justify-center items-start gap-xxxs"
            aria-label="info-block"
          >
            <span className="text-sm-md text-gray-4">
              {String(metadata?.type)}
            </span>
            <span className="text-sm-regular text-gray-4">
              {String(metadata?.timestamp)}
            </span>
          </div>
          <div
            className="flex flex-col max-w-[1200px] items-start gap-xl "
            aria-label="title-blcok"
          >
            <div className="flex flex-col max-w-[1000px] items-start gap-sm self-stretch">
              <span className="display-lg text-gray-white">
                {String(metadata?.title)}
              </span>
              {String(metadata?.subtitle) && (
                <span className="display-xs text-gray-4">
                  {String(metadata?.subtitle)}
                </span>
              )}
            </div>
            <SocialIcons />
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>
        {blog.paragraphs?.map((paragraph) => (
          <div
            key={paragraph.id}
            className=" flex flex-col max-w-[1200px] w-full items-center gap-md"
          >
            <div className=" flex flex-col max-w-[800px] w-full items-start gap-md">
              {paragraph.primary_title && (
                <span className="display-md-bold text-gray-white">
                  {paragraph.primary_title}
                </span>
              )}
              <ReactMarkdown
                components={{
                  li: ({ node, ...props }) => {
                    return (
                      <li style={{ marginBottom: "8px" }}>
                        <span style={{ color: "white", marginRight: "8px" }}>
                          •
                        </span>
                        <span className="text-gray-white text-md-regular">
                          {props.children}
                        </span>
                      </li>
                    );
                  },
                  p: ({ node, ...props }) => {
                    // Exclude captions under images from being styled with text-gray-white
                    // const isCaption =
                    //   node?.children.length === 1 &&
                    //   node?.children?[0].type === "image";
                    // const textStyle = isCaption ? {} : { color: "text-gray-white" };
                    const textStyle = { color: "text-gray-white" };

                    return (
                      <p className={`text-md-regular ${textStyle}`}>
                        {props.children}
                      </p>
                    );
                  },
                  // a: ({ href, children }) => (
                  //   <Link
                  //     to={href}
                  //     className="text-gray-white"
                  //     style={{
                  //       textDecoration: "underline",
                  //       color: "text-gray-white",
                  //     }}
                  //     target="_blank" // Opens link in a new tab
                  //     rel="noopener noreferrer" // Recommended for security
                  //   >
                  //     {children}
                  //   </Link>

                  // ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-gray-white underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
                remarkPlugins={[gfm]}
              >
                {paragraph.text}
              </ReactMarkdown>
            </div>
            {paragraph.image && (
              <div
                className={cn(
                  "flex flex-col gap-xxs w-full max-w-[1200px] self-stretch",
                  paragraph.image.props?.variant === "sm"
                    ? "items-start px-[200px]"
                    : "items-center"
                )}
              >
                <Image
                  src={paragraph.image.url}
                  alt="Paragraph Image"
                  width={getImageClass(
                    paragraph?.image?.props?.variant || "default"
                  )}
                  height={0}
                  // style={{ height: 'auto' }}
                  className={cn(
                    "w-full rounded-lg  ",
                    `max-w-[${getImageClass(
                      paragraph?.image?.props?.variant as string
                    )}px]`
                  )}
                />
                <a
                  href={paragraph.image.captionURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "caption text-gray-4 items-start max-w-[800px] w-full self-stretch",
                    paragraph.image.props?.variant === "sm" ? "" : "px-[200px]"
                  )}
                  style={{ textDecoration: "underline" }}
                >
                  {paragraph.image.caption}
                </a>
              </div>
            )}
          </div>
        ))}
        {/* <article className="prose ">
          <div className=" flex flex-col max-w-[1200px] w-full items-center gap-md text-gray-white">
          <div className=" flex flex-col max-w-[800px] w-full items-start gap-md">
            {content}
            </div>
          </div> 
        </article> */}
        <div className="flex flex-col w-[800px] items-start gap-xxs">
          <span className="text-md-md text-gray-white ">About Keywords AI</span>
          <span className="text-sm-regular text-gray-white">
            Keywords AI is building the leading developer platform for LLM
            applications.
          </span>
        </div>
        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        <div className="flex flex-col items-start gap-lg w-[800px]">
          <span className="display-md-bold text-gray-white">Latest blogs</span>
          {latestBlogs.map((blog) => (
            <Smallcard key={blog.id} blog={blog}></Smallcard>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-xl px-sm items-center gap-md self-stretch bg-gray-2">
        <BlogLogo></BlogLogo>
        <div className="flex flex-col max-w-[600px] items-center gap-xs">
          <span className="display-lg text-gray-white">Keywords AI</span>
          <span className="display-xs text-gray-4">
            Powering the best AI startups.
          </span>
        </div>
        <ButtonWrapper
          variant="big-white"
          text="Get started free"
          size="large"
          bgColor="bg-gray-3"
          textColor="text-gray-white"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </React.Fragment>
  );
}
{
  /* <img
                src={blog?.author.image.url}
                alt="author"
                className="rounded-full h-[48px] w-[48px]"
            />
            <div className="flex flex-col items-start gap-xxs">
                <span className="text-md-md text-gray-4">{blog?.author.name}</span>
                <span className="text-sm-regular text-gray-4">Author</span>
            </div> */
}
