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
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function BlogDetail() {
  const params = useParams();
  const rawBlogUrl = params?.["blog-url"];
  const blogUrl = Array.isArray(rawBlogUrl) ? rawBlogUrl[0] : rawBlogUrl ?? "";

  const blog = blogs.find((blog) => blog.slug === "/blog/" + blogUrl);
  const metadata = blog ? getMetadata(blogUrl) : null;


  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getLatestBlogs = (currentBlogSlug: string): Blog[] => {
    const reversedBlogs = blogs.slice().reverse();
    const latestBlogs = reversedBlogs
      .filter((blog) => blog.slug !== "/blog/" + currentBlogSlug)
      .slice(0, 3);
    return latestBlogs;
  };

  const latestBlogs = getLatestBlogs(blogUrl);

  console.log("BlogDetail rendered successfully with blogUrl:", blogUrl); // ✅ Debug print

  // Render logic unchanged from your existing version
  return (
    <React.Fragment>
      <div className={cn("flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text")}> ... </div>
    </React.Fragment>
  );
}
