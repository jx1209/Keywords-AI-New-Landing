'use client'
import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';
import Link from 'next/link';

type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer({ children: markdown }: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Headings
        h1: ({ children, ...props }) => (
          <h1 className="display-xs-md text-gray-white mb-6 mt-8" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="display-xs-md text-gray-white mb-4 mt-6" {...props}>
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3 className="text-xl font-semibold text-gray-white mb-3 mt-4" {...props}>
            {children}
          </h3>
        ),
        
        // Paragraphs
        p: ({ children, ...props }) => {
          // Check if the paragraph contains only an image
          const hasOnlyImage = React.Children.count(children) === 1 && 
            React.isValidElement(children) && 
            (children as any).type === 'img';
          
          if (hasOnlyImage) {
            return <>{children}</>;
          }
          
          return (
            <p className="text-blog-body text-blog mb-4" {...props}>
              {children}
            </p>
          );
        },
        
        // Links
        a: ({ href, children, ...props }) => (
          <Link
            href={href || '#'}
            className="text-primary hover:text-primary-2 underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </Link>
        ),
        
        // Lists
        ul: ({ children, ...props }) => (
          <ul className="list-disc pl-6 text-blog text-blog-body mb-4 [&>li]:mb-2" {...props}>
            {children}
          </ul>
        ),
        ol: ({ children, ...props }) => (
          <ol className="list-decimal pl-6 text-blog text-blog-body mb-4 [&>li]:mb-2" {...props}>
            {children}
          </ol>
        ),
        
        // Strong/Bold
        strong: ({ children, ...props }) => (
          <strong className="font-semibold text-blog" {...props}>
            {children}
          </strong>
        ),
        
        // Code
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          
          // Inline code
          if (inline) {
            return (
              <code className="bg-gray-3 px-2 py-1 rounded text-sm font-mono text-gray-white" {...props}>
                {children}
              </code>
            );
          }
          
          // Code blocks
          return match ? (
            <SyntaxHighlighter 
              style={dark} 
              PreTag="div" 
              language={match[1]}
              className="rounded-lg my-4"
              customStyle={{
                padding: '1.5rem',
                backgroundColor: '#1E1E1E',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                overflow: 'auto',
                maxHeight: '600px'
              }}
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="block bg-gray-3 p-4 rounded-lg text-sm font-mono text-gray-white my-4 overflow-auto" {...props}>
              {children}
            </code>
          );
        },
        
        // Tables
        table: ({ children, ...props }) => (
          <div className="overflow-x-auto w-full my-6">
            <table className="w-full border-collapse min-w-[600px]" {...props}>
              {children}
            </table>
          </div>
        ),
        th: ({ children, ...props }) => (
          <th className="text-md-regular text-blog p-4 text-left border-b border-gray-2 font-semibold" {...props}>
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td className="text-md-regular text-blog p-4 border-b border-gray-2" {...props}>
            {children}
          </td>
        ),
        
        // Images
        img: ({ src, alt, ...props }) => {
          if (!src) return null;
          
          // Extract caption from alt text (format: "alt text|caption text")
          const [altText, caption] = (alt || '').split('|').map(s => s.trim());
          
          return (
            <figure className="my-6 flex flex-col items-center">
              <Image
                src={src}
                alt={altText || 'Blog image'}
                width={800}
                height={0}
                className="w-full rounded-lg"
                style={{ height: 'auto' }}
                {...props}
              />
              {caption && (
                <figcaption className="caption text-gray-4 mt-2 text-center">
                  {caption}
                </figcaption>
              )}
            </figure>
          );
        },
        
        // Blockquotes
        blockquote: ({ children, ...props }) => (
          <blockquote className="border-l-4 border-gray-3 pl-4 my-4 text-gray-4 italic" {...props}>
            {children}
          </blockquote>
        ),
        
        // Horizontal rules
        hr: () => <hr className="my-8 border-gray-2" />
      }}
    >
      {markdown}
    </Markdown>
  );
}