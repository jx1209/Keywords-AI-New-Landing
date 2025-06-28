'use client'
import React, { useState } from 'react';
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

// Copy button component for code blocks
const CopyButton = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white px-3 py-1.5 rounded text-xs font-medium transition-colors duration-200 flex items-center gap-1"
      title="Copy code"
    >
      {copied ? (
        <>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
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
          // Check if the paragraph contains only an image element
          const childrenArray = React.Children.toArray(children);
          
          // Helper function to check if a child is an image
          const isImageChild = (child: any) => {
            if (!React.isValidElement(child)) return false;
            // Check both direct type and props.node.tagName for react-markdown processed elements
            return child.type === 'img' || 
                   (child.props && 
                    typeof child.props === 'object' && 
                    'node' in child.props && 
                    child.props.node && 
                    typeof child.props.node === 'object' && 
                    'tagName' in child.props.node && 
                    child.props.node.tagName === 'img');
          };
          
          const hasOnlyImage = childrenArray.length === 1 && isImageChild(childrenArray[0]);
          
          // Check if it's just whitespace and an image
          const hasOnlyImageWithWhitespace = childrenArray.every(child => {
            if (typeof child === 'string' && child.trim() === '') return true;
            return isImageChild(child);
          }) && childrenArray.some(child => isImageChild(child));
          
          // If paragraph contains only an image, return the children directly
          // without wrapping in any container to avoid nesting issues
          if (hasOnlyImage || hasOnlyImageWithWhitespace) {
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
        
        // Enhanced Code Blocks
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          const codeString = String(children).replace(/\n$/, '');
          
          // Inline code
          if (inline) {
            return (
              <code className="bg-gray-700 text-gray-100 px-2 py-0.5 rounded text-sm font-mono border border-gray-600" {...props}>
                {children}
              </code>
            );
          }
          
          // Code blocks with syntax highlighting
          if (match) {
            return (
              <div className="relative my-6 group">
                {/* Language label */}
                {language && (
                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-600">
                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                      {language}
                    </span>
                    <CopyButton code={codeString} />
                  </div>
                )}
                
                {/* Code content */}
                <div className={`relative ${!language ? 'rounded-lg' : 'rounded-b-lg'} overflow-hidden`}>
                  {!language && (
                    <div className="absolute top-0 right-0 z-10">
                      <CopyButton code={codeString} />
                    </div>
                  )}
                  
                  <SyntaxHighlighter 
                    style={{
                      ...dark,
                      'pre[class*="language-"]': {
                        ...dark['pre[class*="language-"]'],
                        background: '#1a1a1a',
                        margin: 0,
                      },
                      'code[class*="language-"]': {
                        ...dark['code[class*="language-"]'],
                        background: '#1a1a1a',
                      }
                    }} 
                    PreTag="div" 
                    language={language || 'text'}
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      backgroundColor: '#1a1a1a',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                      border: 'none',
                      borderRadius: language ? '0 0 0.5rem 0.5rem' : '0.5rem',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: '0.875rem',
                        fontFamily: 'inherit',
                      }
                    }}
                    showLineNumbers={codeString.split('\n').length > 5}
                    lineNumberStyle={{
                      minWidth: '2.5rem',
                      paddingRight: '1rem',
                      color: '#6B7280',
                      borderRight: '1px solid #374151',
                      marginRight: '1rem',
                      fontSize: '0.75rem',
                    }}
                    wrapLines={true}
                    wrapLongLines={true}
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          }
          
          // Fallback for code blocks without language
          return (
            <div className="relative my-6 group">
              <div className="absolute top-3 right-3 z-10">
                <CopyButton code={codeString} />
              </div>
              <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm font-mono text-gray-100 overflow-auto shadow-lg">
                <code className="block whitespace-pre" {...props}>
                  {children}
                </code>
              </pre>
            </div>
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
        img: ({ src, alt, width, height, ...props }) => {
          if (!src) return null;
          
          // Extract caption from alt text (format: "alt text|caption text")
          const [altText, caption] = (alt || '').split('|').map(s => s.trim());
          
          // Filter out props that might conflict with Next.js Image
          const { style, ...safeProps } = props;
          
          return (
            <div className="my-6 flex flex-col items-center">
              <Image
                src={src}
                alt={altText || 'Blog image'}
                width={typeof width === 'number' ? width : 800}
                height={typeof height === 'number' ? height : 450}
                className="w-full rounded-lg"
                style={{ height: 'auto', ...style }}
                {...safeProps}
              />
              {caption && (
                <div className="caption text-gray-4 mt-2 text-center">
                  {caption}
                </div>
              )}
            </div>
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