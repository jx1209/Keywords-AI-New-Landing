'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Extract text content from the code block
      const text = extractTextContent(children);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const extractTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') {
      return node;
    }
    if (typeof node === 'number') {
      return node.toString();
    }
    if (React.isValidElement(node)) {
      return extractTextContent(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(extractTextContent).join('');
    }
    return '';
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-2 p-lg rounded-lg overflow-x-auto my-lg border border-gray-3 text-sm" {...props}>
        <code className={`text-gray-white font-mono text-sm leading-relaxed ${className || ''}`}>
          {children}
        </code>
        
        {/* Copy button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-sm right-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-3 hover:bg-gray-4 p-xxs rounded-sm border border-gray-4 hover:border-gray-white"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4 text-gray-white" />
          )}
        </button>
      </pre>
    </div>
  );
}; 