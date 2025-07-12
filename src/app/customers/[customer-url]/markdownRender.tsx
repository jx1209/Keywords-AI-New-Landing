"use client";

import { useMDXComponents } from "@/app/customers/components/mdx-components";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export function RemoteMdxPage({ mdxSource }: Props) {
  return (
    <div className="w-full max-w-none">
      <MDXRemote {...mdxSource} components={useMDXComponents} />
    </div>
  );
}