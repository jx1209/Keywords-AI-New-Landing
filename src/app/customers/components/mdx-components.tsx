import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";
import NextImage from "next/image";
import { HeadingWithCopyLink } from "./HeadingWithCopyLink";
import { CodeBlock } from "./CodeBlock";
import { cn } from "@/lib/utils";

const ResponsiveTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="overflow-x-auto w-full my-lg">
      <div className="min-w-full">
        {children}
      </div>
    </div>
  );
};

const QuoteWithHeadshot = ({ children, image, author, ...props }: any) => {
  return (
    <blockquote className="border-l-4 border-gray-3 pl-lg py-md my-lg bg-gray-2 rounded-r-lg" {...props}>
      <div className="text-lg text-gray-white italic mb-md">
        {children}
      </div>
      {(image || author) && (
        <div className="flex items-center gap-md mt-md">
          {image && (
            <NextImage
              src={image}
              alt={author || "Quote author"}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          {author && (
            <span className="text-md text-gray-white font-medium">
              — {author}
            </span>
          )}
        </div>
      )}
    </blockquote>
  );
};

const StyledBlockquote = ({ children, image, author, ...props }: any) => {
  return (
    <blockquote className="border-l-4 border-gray-3 pl-lg py-md my-lg bg-gray-2 rounded-r-lg" {...props}>
      <div className="text-lg text-gray-white italic mb-md">
        {children}
      </div>
      {(image || author) && (
        <div className="flex items-center gap-md mt-md">
          {image && (
            <NextImage
              src={image}
              alt={author || "Quote author"}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          {author && (
            <span className="text-md text-gray-white font-medium">
              — {author}
            </span>
          )}
        </div>
      )}
    </blockquote>
  );
};

const StyledParagraph = ({ children, ...props }: any) => {
  return (
    <p className="text-lg text-gray-4 mb-lg leading-relaxed [img+&]:mt-xl [div:has(img)+&]:mt-xl" {...props}>
      {children}
    </p>
  );
};

const StyledList = ({ children, ...props }: any) => {
  return (
    <ul className="text-lg text-gray-white mb-lg ml-lg space-y-xs list-disc" {...props}>
      {children}
    </ul>
  );
};

const StyledOrderedList = ({ children, ...props }: any) => {
  return (
    <ol className="text-lg text-gray-white mb-lg ml-lg space-y-xs list-decimal" {...props}>
      {children}
    </ol>
  );
};

const StyledListItem = ({ children, ...props }: any) => {
  return (
    <li className="text-lg text-gray-white leading-relaxed" {...props}>
      {children}
    </li>
  );
};

const StyledHr = (props: any) => {
  return <hr className="border-gray-3 my-xl" {...props} />;
};

const StyledLink = ({ href, children, ...props }: any) => {
  const isExternal = href?.startsWith('http');
  
  return (
    <a
      href={href}
      className="text-primary underline hover:text-primary-2 transition-colors"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
};

const StyledStrong = ({ children, ...props }: any) => {
  return <strong className="font-semibold text-gray-white" {...props}>{children}</strong>;
};

const StyledCode = ({ children, className, ...props }: any) => {
  // Check if this is a code block (when used inside <pre>) or inline code
  const isCodeBlock = className?.includes('hljs') || className?.includes('language-');
  
  if (isCodeBlock) {
    // For code blocks, return minimal styling to work with rehypeHighlight
    return (
      <code className={`text-gray-white font-mono text-sm leading-relaxed ${className || ''}`} {...props}>
        {children}
      </code>
    );
  }
  
  // For inline code
  return (
    <code className="bg-gray-3 text-gray-white px-xxs py-xxxs rounded-sm font-mono text-sm" {...props}>
      {children}
    </code>
  );
};



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    QuoteWithHeadshot,
    h1: (props) => (
      <HeadingWithCopyLink 
        level={1} 
        className="display-sm text-gray-white mb-lg mt-xl first:mt-0 scroll-mt-24" 
        {...props} 
      />
    ),
    h2: (props) => (
      <HeadingWithCopyLink 
        level={2} 
        className="display-sm text-gray-white mb-lg mt-0 scroll-mt-24" 
        {...props} 
      />
    ),
    h3: (props) => (
      <HeadingWithCopyLink 
        level={3} 
        className="display-xs text-gray-white mb-md mt-lg scroll-mt-24" 
        {...props} 
      />
    ),
    h4: (props) => (
      <HeadingWithCopyLink 
        level={4} 
        className="text-lg font-semibold text-gray-white mb-md mt-lg scroll-mt-24" 
        {...props} 
      />
    ),
    h5: (props) => (
      <HeadingWithCopyLink 
        level={5} 
        className="text-md-medium text-gray-white mb-sm mt-md scroll-mt-24" 
        {...props} 
      />
    ),
    h6: (props) => (
      <HeadingWithCopyLink 
        level={6} 
        className="text-md font-semibold text-gray-white mb-sm mt-md scroll-mt-24" 
        {...props} 
      />
    ),
    p: StyledParagraph,
    blockquote: StyledBlockquote,
    ul: StyledList,
    ol: StyledOrderedList,
    li: StyledListItem,
    hr: StyledHr,
    a: StyledLink,
    strong: StyledStrong,
    code: StyledCode,
    pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
    table: (props) => (
      <ResponsiveTable>
        <table className="w-full border-separate border-spacing-0 rounded-lg overflow-hidden my-lg" {...props} />
      </ResponsiveTable>
    ),
    thead: (props) => (
      <thead {...props} />
    ),
    tbody: (props) => (
      <tbody {...props} />
    ),
    tr: (props) => (
      <tr className="hover:bg-gray-2 transition-colors" {...props} />
    ),
    th: (props) => (
      <th className="text-left px-md py-sm text-lg font-semibold text-gray-white pb-xs border-b-2 border-gray-3" {...props} />
    ),
    td: (props) => (
      <td className="px-md py-xs text-md text-gray-white border-b border-gray-3" {...props} />
    ),
    img: ({ src, alt, ...props }: any) => {
      // Handle img.shields.io badges
      if (typeof src === "string" && src.includes("img.shields.io")) {
        return (
          <img
            src={src}
            alt={alt || ""}
            style={{ maxWidth: "100px", height: "auto" }}
            className="my-lg rounded-[12px]"
            {...props}
          />
        );
      }

      // Only use Next/Image for valid string sources
      if (typeof src === "string") {
        // Check if this is the first image in the post (likely the hero)
        const isHeroImage = src.includes("-cover.") || src.includes("-hero.");

        return (
          <div className="my-xl">
            <NextImage
              src={src}
              alt={alt || ""}
              width={800}
              height={450}
              priority={isHeroImage}
              loading={isHeroImage ? undefined : "lazy"}
              className="rounded-[12px]"
            />
          </div>
        );
      }

      // Fallback to standard img if src is not a string
      return <img src={src} alt={alt} className="my-xl rounded-lg" {...props} />;
    },
  };
}