'use client';

import React, { useEffect, useState } from 'react';
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
import posthog from 'posthog-js';


if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const getImageClass = (size: string) => {
  switch (size) {
    case 'lg': return '1200';
    case 'md': return '800';
    case 'sm': return '400';
    default: return '1200';
  }
};

export default function BlogDetail() {
  const [metadata, setMetadata] = useState<any>(null);
  console.log("POSTHOG KEY:", process.env.NEXT_PUBLIC_POSTHOG_KEY);
  const params = useParams();
  const rawBlogUrl = params?.['blog-url'];
  const blogUrl = Array.isArray(rawBlogUrl) ? rawBlogUrl[0] : rawBlogUrl ?? '';

  const blog = blogs.find((blog) => blog.slug === '/blog/' + blogUrl);

  useEffect(() => {
    const fetchMetadata = async () => {
      if (blog) {
        try {
          const meta = await getMetadata(blogUrl);
          setMetadata(meta);
        } catch (error) {
          console.error('Error fetching metadata:', error);
        }
      }
    };
    
    fetchMetadata();
  }, [blog, blogUrl]);

  useEffect(() => {
    if (blog) {
      posthog.capture('blog_viewed', {
        slug: blog.slug,
        title: blog.title,
      });
    }
  }, [blog]);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getLatestBlogs = (currentBlogSlug: string): Blog[] => {
    return blogs
      .slice()
      .reverse()
      .filter((b) => b.slug !== '/blog/' + currentBlogSlug)
      .slice(0, 3);
  };

  const latestBlogs = getLatestBlogs(blogUrl);

  return (
    <React.Fragment>
      <div className={cn("flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text")}>        
        <div className="flex flex-col max-w-[800px] items-start gap-sm w-full">
          <span className="caption text-gray-4 w-full text-left">{metadata?.type}</span>
          <h1 className="display-lg-600 text-gray-white w-full text-left">{metadata?.h1 || metadata?.title}</h1>
          {metadata?.subtitle && (
            <span className="display-xs text-gray-4 text-center">{metadata.subtitle}</span>
          )}
          <div className="flex justify-between w-full items-center">
            <span className="text-sm-regular text-gray-4">{metadata?.timestamp}</span>
            <SocialIcons />
          </div>
        </div>

        {blog.paragraphs?.map((paragraph) => (
          <div key={paragraph.id} className="flex flex-col max-w-[1200px] w-full items-center gap-sm">
            <div className="flex flex-col max-w-[800px] w-full items-start gap-sm">
              {paragraph.primary_title && (
                paragraph.primary_title_url ? (
                  <Link href={paragraph.primary_title_url} target="_blank" rel="noopener noreferrer">
                    <h2 className="display-xs-md text-gray-white underline">{paragraph.primary_title}</h2>
                  </Link>
                ) : (
                  <h2 className="display-xs-md text-gray-white">{paragraph.primary_title}</h2>
                )
              )}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({ children, className }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        PreTag="div"
                        language={match[1]}
                        style={dark}
                        className="rounded-lg my-4"
                        customStyle={{
                          padding: '1.5rem',
                          backgroundColor: '#1E1E1E',
                          fontSize: '0.9rem',
                          lineHeight: '1.5',
                          overflow: 'auto',
                          maxHeight: '600px',
                        }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-3 px-2 py-1 rounded text-sm font-mono">{children}</code>
                    );
                  },
                  strong: ({ node, ...props }) => (
                    <strong className="font-semibold text-lg" {...props} />
                  ),
                  ol: (props) => <ol className="list-decimal pl-4 text-blog [&>li]:mb-2" {...props} />,
                  ul: (props) => <ul className="list-disc pl-4 text-blog [&>li]:mb-2" {...props} />,
                  table: (props) => <div className="overflow-x-auto"><table className="w-full my-8 border-collapse min-w-[600px]" {...props} /></div>,
                  th: (props) => <th className="p-6 border-b border-gray-2 text-left whitespace-nowrap" {...props} />,
                  td: (props) => <td className="p-6 border-b border-gray-2" {...props} />,
                  p: (props) => <p className="text-blog-body mb-1" {...props} />,
                  a: ({ href, children }) => (
                    <a href={href} className="text-primary hover:text-primary-2" target="_blank" rel="noopener noreferrer">{children}</a>
                  )
                }}
              >
                {paragraph.text}
              </ReactMarkdown>
            </div>
            {paragraph.image && (
              <div className={cn("flex flex-col gap-xxs w-full", paragraph.image.props?.variant === 'sm' ? 'items-start px-[200px]' : 'items-center')}>
                <Image
                  src={paragraph.image.url}
                  alt="Paragraph Image"
                  width={+getImageClass(paragraph.image.props?.variant || 'default')}
                  height={0}
                  className={cn("w-full rounded-lg", `max-w-[${getImageClass(paragraph.image.props?.variant || '')}px]`)}
                />
                <a href={paragraph.image.captionURL} target="_blank" rel="noopener noreferrer" className="caption text-gray-4 underline">
                  {paragraph.image.caption}
                </a>
              </div>
            )}
          </div>
        ))}

        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>

        <div className="flex flex-col w-[800px] items-start gap-sm sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white">About Keywords AI</span>
          <span className="text-md-regular text-gray-white">Keywords AI is the leading developer platform for LLM applications.</span>
        </div>

        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>

        <div className="flex flex-col items-start gap-lg w-[800px] sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white">Latest blogs</span>
          {latestBlogs.map((blog) => (
            <Smallcard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <div className="flex flex-col py-xl px-sm items-center gap-sm self-stretch bg-gray-2">
        <Image src="/logo.svg" alt="Blog Logo" width={40} height={40} />
        <div className="flex flex-col max-w-[600px] items-center gap-xs">
          <span className="display-md-semibold text-gray-white">Keywords AI</span>
          <span className="display-xs text-gray-4">Powering the best AI startups.</span>
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
