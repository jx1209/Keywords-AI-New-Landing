import React from "react";
import { blogs } from "../articles/articles";
import { Blog } from "../articles/articles"; // Import the Blog type
import { Largecard } from "../components/Largecard";
import fs from "fs";
import "@mintlify/mdx/dist/styles.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
// import { MarkdownRenderer } from "./markdownRender";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

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

// function getContent(filePath: string) {
//   try {
//     const source = fs.readFileSync(filePath, "utf8");
//     console.log("Sourcegwrgwrgrwegrwg:", source);
//     return getCompiledServerMdx({ source });
//   } catch (error) {
//     console.error("Error!Error.", error);
//     return null;
//   }
// }

export default async function BlogDetail({
  params,
}: {
  params: Promise<{
    "blog-url": string;
  }>;
}) {
  console.log("Current working directory:", process.cwd());
  const resolvedParams = await params;
  const blogUrl = resolvedParams["blog-url"];
  const blog = blogs.find((blog) => blog.slug === "/blog/" + blogUrl);
  console.log("Blog:", blog);
  // const { slug } = useParams(); // Get the slug parameter from the URL
  // const router = useRouter();
  // const {slug} = router.query
  // const params = useParams()
  // const slug = params?.slug as string

  // const contentResult = await getContent(blogFolder);
  const metadata = await getMetadata(blogUrl);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getLatestBlogs = (currentBlogSlug: string): Blog[] => {
    // Reverse the blogs array to get from latest to earliest
    const reversedBlogs = blogs.slice().reverse();

    // Filter out the current blog by slug and select top 3 latest blogs
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
                  {String(metadata?.type)}
                </span>
                <h1 className="sm:hidden display-lg-600 w-full text-center text-gray-white">
                  {String(metadata?.h1 || metadata?.title)}
                </h1>
                <h1 className="hidden sm:block text-left display-sm text-gray-white">
                  {String(metadata?.h1 || metadata?.title)}
                </h1>
              </div>
              {String(metadata?.subtitle) && (
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
                {String(metadata?.timestamp)}
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>
        {blog.paragraphs?.map((paragraph) => (
          <div
            key={paragraph.id}
            className=" flex flex-col max-w-[1200px] w-full items-center gap-sm"
          >
            <div className=" flex flex-col max-w-[800px] w-full items-start gap-sm">
              {paragraph.primary_title &&
                (paragraph.primary_title_url ? (
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
                ))}
              <ReactMarkdown
                components={{
                  code(props) {
                    const { children, className, node, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    
                    // Handle backtick code blocks
                    if (String(children).startsWith('`') && String(children).endsWith('`')) {
                      return (
                        <code className="bg-gray-3 px-2 py-1 rounded text-sm font-mono" {...rest}>
                          {String(children).slice(1, -1)} {/* Remove backticks */}
                        </code>
                      );
                    }
                    
                    // Handle regular code blocks
                    return match ? (
                      <SyntaxHighlighter
                        PreTag="div"
                        language={match[1]}
                        style={dark}
                        className="rounded-lg my-4" // Add rounded corners and margin
                        customStyle={{
                          padding: '1.5rem',
                          backgroundColor: '#1E1E1E', // Dark background
                          fontSize: '0.9rem',
                          lineHeight: '1.5',
                          overflow: 'auto',
                          maxHeight: '600px' // Limit maximum height
                        }}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-3 px-2 py-1 rounded text-sm font-mono" {...rest}>
                        {children}
                      </code>
                    );
                  },
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-lg" {...props} />
                  ),
                  ol: ({ ...props }) => (
                    <ol className="list-decimal pl-4 text-blog text-blog-body [&>li]:mb-2" {...props} />
                  ),
                  ul: ({ ...props }) => (
                    <ul className="list-disc pl-4 text-blog text-blog-body [&>li]:mb-2" {...props} />
                  ),
                  // li: ({ node, ...props }) => {
                  //   return (
                  //     <li style={{ marginBottom: "8px" }}>
                  //       <span style={{ color: "white", marginRight: "8px" }}>
                  //         •
                  //       </span>
                  //       <span className="text-gray-white text-md-regular">
                  //         {props.children}
                  //       </span>
                  //     </li>
                  //   );
                  // },
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto w-full">
                      <table className="w-full my-8 border-collapse min-w-[600px]" {...props} />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th 
                      className="text-md-regular text-blog p-6 text-left border-b border-gray-2 whitespace-nowrap" 
                      {...props} 
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td 
                      className="text-md-regular text-blog p-6 border-b border-gray-2 whitespace-normal" 
                      {...props} 
                    />
                  ),
                  p: ({ node, ...props }) => {
                    // Exclude captions under images from being styled with text-gray-white
                    // const isCaption =
                    //   node?.children.length === 1 &&
                    //   node?.children?[0].type === "image";
                    // const textStyle = isCaption ? {} : { color: "text-gray-white" };
                      const textStyle = { color: "text-blog" };

                    return (
                      <p className={`text-blog-body ${textStyle} mb-1`}>
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
                      className="text-primary hover:text-primary-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
                remarkPlugins={[gfm, remarkGfm]}
                rehypePlugins={[rehypeRaw]}
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
                    "caption text-gray-4 items-start max-w-[800px] w-full self-stretch ",
                    paragraph.image.props?.variant === "sm" ? "" : "px-[200px] sm:px-[0px]"
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
          <div className=" flex flex-col max-w-[1200px] w-full items-center gap-sm text-gray-white">
          <div className=" flex flex-col max-w-[800px] w-full items-start gap-sm">
            {content}
            </div>
          </div> 
        </article> */}
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
