import React from "react";
import { customers, Customer } from "../articles/articles";
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
import { cn } from "@/lib/utils";
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
    const articlesDir = path.join(process.cwd(), 'src/app/customers/articles');
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

export default async function CustomerDetail({
  params,
}: {
  params: Promise<{
    "customer-url": string;
  }>;
}) {
  const resolvedParams = await params;
  const customerUrl = resolvedParams["customer-url"];
  
  // First try to get MDX content
  const mdxContent = await getMDXContent(customerUrl);
  
  // If no MDX file, fall back to articles.tsx for backward compatibility
  const customer = customers.find((customer) => customer.slug === "/customers/" + customerUrl);
  
  if (!mdxContent && !customer) {
    return <div>Customer not found</div>;
  }

  // Use MDX frontmatter if available, otherwise use customer data
  const metadata = mdxContent?.frontmatter || {
    title: customer?.title,
    subtitle: customer?.subtitle,
    type: customer?.industry,
    date: customer?.date,
    company: customer?.company?.name,
    cover: customer?.cover,
  };

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
          {/* Title block */}
          <div
            className="flex flex-col w-full items-start gap-xl "
            aria-label="title-block"
          >
            <div className="flex flex-col items-center gap-sm self-stretch">
              <div className="flex flex-col w-full items-center gap-xxs">
                <span className="caption text-gray-4 text-center sm:text-left w-full">
                  {String(metadata?.type || 'CUSTOMER STORY')}
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
                {String(metadata?.date || customer?.date)}
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>

        {/* Main content area */}
        <div className="flex flex-col max-w-[1200px] w-full items-center gap-sm">
          <div className="flex flex-col max-w-[800px] w-full items-start gap-sm">
            {mdxContent ? (
              // Render MDX content using MarkdownRenderer
              <MarkdownRenderer>{mdxContent.content}</MarkdownRenderer>
            ) : (
              // Fallback: render customer paragraphs from articles.tsx
              customer?.paragraphs?.map((paragraph: any) => (
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
                        alt={paragraph.image.alt || "Customer image"}
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
