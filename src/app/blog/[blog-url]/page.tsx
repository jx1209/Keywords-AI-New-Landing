import React from "react";
import { blogs } from "../articles/articles";
import { Blog } from "../articles/articles";
import { Largecard } from "../components/Largecard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import "@mintlify/mdx/dist/styles.css";
import {
  BlogLogo,
  Discord,
  DividerLine,
  LinkedIn,
  Twitter,
} from "@/app/components/Icons";
import cn from "src/utilities/ClassMerge";
import { Smallcard } from "../components/Smallcard";
import { Button } from "@/app/components/Buttons";
import Link from "next/link";
import Image from "next/image";
import { ButtonWrapper } from "./buttonwrapper";
import { MarkdownRenderer } from "./markdownRender";
import SocialIcons from "../components/social";

// Function to read MDX file and extract frontmatter
async function getMDXContent(slug: string) {
  try {
    const articlesDir = path.join(process.cwd(), 'src/app/blog/articles');
    const mdxPath = path.join(articlesDir, slug, 'src.mdx');
    
    if (fs.existsSync(mdxPath)) {
      const fileContent = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContent);
      return { frontmatter: data, content };
    }
    
    return null;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return null;
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{
    "blog-url": string;
  }>;
}) {
  const resolvedParams = await params;
  const blogUrl = resolvedParams["blog-url"];
  
  // First try to get MDX content
  const mdxContent = await getMDXContent(blogUrl);
  
  // If no MDX file, fall back to articles.tsx for backward compatibility
  const blog = blogs.find((blog) => blog.slug === "/blog/" + blogUrl);
  
  if (!mdxContent && !blog) {
    return <div>Blog not found</div>;
  }

  // Use MDX frontmatter if available, otherwise use blog data
  const metadata = mdxContent?.frontmatter || {
    title: blog?.title,
    subtitle: blog?.subtitle,
    type: blog?.type,
    timestamp: blog?.timestamp,
    author: blog?.author,
    cover: blog?.cover,
  };

  const getLatestBlogs = (currentBlogSlug: string): Blog[] => {
    const reversedBlogs = blogs.slice().reverse();
    const latestBlogs = reversedBlogs
      .filter((blog) => blog.slug !== "/blog/" + currentBlogSlug)
      .slice(0, 3);
    return latestBlogs;
  };
  
  const latestBlogs = getLatestBlogs(blogUrl);

  return (
    <React.Fragment>
      <div
        className={cn(
          "flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text"
        )}
      >
        <div
          aria-label="hero"
          className="flex flex-col max-w-[800px] items-start gap-sm w-full"
        >
          <div
            className="flex flex-col w-full items-start gap-xl "
            aria-label="title-block"
          >
            <div className="flex flex-col items-center gap-sm self-stretch">
              <div className="flex flex-col w-full items-center gap-xxs">
                <span className="caption text-gray-4 text-center sm:text-left w-full">
                  {String(metadata?.type || 'BLOG')}
                </span>
                <h1 className="sm:hidden display-lg-600 w-full text-center text-gray-white">
                  {String(metadata?.h1 || metadata?.title)}
                </h1>
                <h1 className="hidden sm:block text-left display-sm text-gray-white">
                  {String(metadata?.h1 || metadata?.title)}
                </h1>
              </div>
              {metadata?.subtitle && (
                <span className="display-xs text-gray-4 text-center">
                  {String(metadata?.subtitle)}
                </span>
              )}
            </div>
            <div
              className="flex flex-row justify-between w-full items-center"
              aria-label="info-block"
            >
              <span className="text-sm-regular text-gray-4">
                {String(metadata?.timestamp || metadata?.date || blog?.timestamp)}
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>

        {/* Main content area */}
        <div className="flex flex-col max-w-[1200px] w-full items-center gap-sm">
          <div className="flex flex-col max-w-[800px] w-full items-start gap-sm prose prose-invert max-w-none">
            {mdxContent ? (
              // Render MDX content using MarkdownRenderer
              <MarkdownRenderer>{mdxContent.content}</MarkdownRenderer>
            ) : (
              // Fallback: render blog paragraphs from articles.tsx
              blog?.paragraphs?.map((paragraph) => (
                <React.Fragment key={paragraph.id}>
                  {/* Render existing paragraph structure for backward compatibility */}
                  {paragraph.primary_title && (
                    paragraph.primary_title_url ? (
                      <Link
                        href={paragraph.primary_title_url}
                        className="display-xs-md text-gray-white underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="display-xs-md text-gray-white underline">
                          {paragraph.primary_title}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="display-xs-md text-gray-white">
                        {paragraph.primary_title}
                      </h2>
                    )
                  )}
                  
                  {paragraph.text && (
                    <MarkdownRenderer>{paragraph.text}</MarkdownRenderer>
                  )}
                  
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
                        alt={paragraph.image.alt || "Blog image"}
                        width={800}
                        height={0}
                        className={cn(
                          "w-full rounded-lg",
                          paragraph.image.props?.variant === "sm" && "max-w-[400px]",
                          paragraph.image.props?.variant === "md" && "max-w-[800px]",
                          paragraph.image.props?.variant === "lg" && "max-w-[1200px]"
                        )}
                        style={{ height: 'auto' }}
                      />
                      {paragraph.image.caption && (
                        <a
                          href={paragraph.image.captionURL || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "caption text-gray-4 items-start max-w-[800px] w-full self-stretch",
                            paragraph.image.props?.variant === "sm" ? "" : "px-[200px] sm:px-[0px]"
                          )}
                          style={{ textDecoration: "underline" }}
                        >
                          {paragraph.image.caption}
                        </a>
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))
            )}
          </div>
        </div>

        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        <div className="flex flex-col w-[800px] items-start gap-sm sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white ">
            About Keywords AI
          </span>
          <span className="text-md-regular text-gray-white">
            Keywords AI is the leading developer platform for LLM applications.
          </span>
        </div>
        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        <div className="flex flex-col items-start gap-lg w-[800px] sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white">Latest blogs</span>
          {latestBlogs.map((blog) => (
            <Smallcard key={blog.id} blog={blog}></Smallcard>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col py-xl px-sm items-center gap-sm self-stretch bg-gray-2">
        <BlogLogo></BlogLogo>
        <div className="flex flex-col max-w-[600px] items-center gap-xs">
          <span className="display-md-semibold text-gray-white">
            Keywords AI
          </span>
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
