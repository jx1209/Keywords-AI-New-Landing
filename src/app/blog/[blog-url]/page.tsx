import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { cn } from "@/lib/utils";
import { RemoteMdxPage } from "../markdownRender";
import SocialIcons from "@/app/customers/components/social";
import { BlogLogo } from "@/app/components/Icons";
import { ButtonWrapper } from "@/app/customers/[customer-url]/buttonwrapper";

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blogSlug = params.slug;

  const blogPath = path.join(
    process.cwd(),
    "src",
    "app",
    "blog",
    "articles",
    blogSlug,
    "src.mdx"
  );

  const source = fs.readFileSync(blogPath, "utf8");
  const { data: frontmatter } = matter(source);

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkToc, { heading: "Table of Contents", tight: true, maxDepth: 2 }],
      ],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  return (
    <React.Fragment>
      <div
        className={cn(
          "flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text relative"
        )}
      >
        <div className="flex flex-col max-w-[800px] items-start gap-sm w-full">
          <div className="flex flex-col w-full items-start gap-xl">
            <div className="flex flex-col items-center gap-sm self-stretch">
              <div className="flex flex-col w-full items-center gap-xxs">
                <span className="caption text-gray-4 text-center sm:text-left w-full">
                  {String(frontmatter?.type || "BLOG POST")}
                </span>
                <h1 className="sm:hidden display-lg-600 w-full text-center text-gray-white">
                  {String(frontmatter?.title)}
                </h1>
                <h1 className="hidden sm:block text-left display-sm text-gray-white">
                  {String(frontmatter?.title)}
                </h1>
              </div>
              {frontmatter?.subtitle && (
                <span className="display-xs text-gray-4 text-center">
                  {String(frontmatter?.subtitle)}
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <span className="text-sm-regular text-gray-4">
                {String(frontmatter?.date || "")}
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>

        <div className="flex flex-col max-w-[800px] w-full items-start gap-sm px-sm">
          <RemoteMdxPage mdxSource={mdxSource} />
        </div>

        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        <div className="flex flex-col w-[800px] items-start gap-sm sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white">
            About Keywords AI
          </span>
          <span className="text-md-regular text-gray-white">
            A full-stack LLM engineering platform for developers and PMs.
            Keywords AI helps teams build reliable AI products 10x faster. In a
            shared workspace, product teams can build, monitor, and improve AI
            performance.
          </span>
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
      </div>

      <div className="flex flex-col py-xl px-sm items-center gap-sm self-stretch bg-gray-2">
        <BlogLogo />
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

//sdddd