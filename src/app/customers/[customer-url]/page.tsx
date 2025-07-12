import React from "react";
import { customers, Customer } from "../customer-list/customer-list";
import { Largecard } from "../components/Largecard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
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
import { RemoteMdxPage } from "./markdownRender";
import SocialIcons from "../components/social";
import rehypeHighlight from "rehype-highlight";
import { AtAGlanceCard } from "../components/AtAGlanceCard";

export default async function CustomerDetail({
  params,
}: {
  params: Promise<{
    "customer-url": string;
  }>;
}) {
  const resolvedParams = await params;
  const customerUrl = resolvedParams["customer-url"];

  // Function to read MDX file and extract frontmatte

  const changelogFolder = path.join(
    process.cwd(),
    "src",
    "app",
    "customers",
    "customer-list",
    customerUrl,
    "src.mdx"
  );

  const source = fs.readFileSync(changelogFolder, "utf8");
  // const { content, data: frontmatter } = matter(source);

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkToc, { heading: "Table of Contents", tight: true, maxDepth: 2 }],
      ],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  });

  // If no MDX file, fall back to articles.tsx for backward compatibility
  const customer = customers.find(
    (customer) => customer.slug === "/customers/" + customerUrl
  );

  // if (!frontmatter && !customer) {
  //   return <div>Customer not found</div>;
  // }

  // Use MDX frontmatter if available, otherwise use customer data
  const metadata = {
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
          "flex flex-col pt-[140px] pb-[120px] px-sm items-center gap-xl w-full !select-text relative"
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
                  {String(metadata?.type || "CUSTOMER STORY")}
                </span>
                <h1 className="sm:hidden display-lg-600 w-full text-center text-gray-white">
                  {String(metadata?.title)}
                </h1>
                <h1 className="hidden sm:block text-left display-sm text-gray-white">
                  {String(metadata?.title)}
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
                {/* {String(metadata?.date || customer?.date)} */}
              </span>
              <SocialIcons />
            </div>
          </div>
          <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        </div>


      {/* Desktop AT A GLANCE card - moved outside main content frame */}
      <div className="flex gap-sm w-full max-w-[1400px]">
      <div className="hidden lg:block w-[280px] sticky top-[140px] z-10 items-start">
        <AtAGlanceCard
          customer={customer?.atAGlance?.customer || ""}
          industry={customer?.atAGlance?.industry || ""}
          stage={customer?.atAGlance?.stage || ""}
          challenge={customer?.atAGlance?.challenge || ""}
          solution={customer?.atAGlance?.solution || ""}
        />
      </div>
        {/* Main content container */}
        <div className="flex flex-col max-w-[800px] w-full items-start gap-sm px-sm">
          <RemoteMdxPage mdxSource={mdxSource} />
        </div>
        </div>
        <div className="h-[1px] bg-gray-2 w-full max-w-[800px]"></div>
        <div className="flex flex-col w-[800px] items-start gap-sm sm:max-w-[400px] sm:w-full">
          <span className="display-xs-md text-gray-white ">
            About Keywords AI
          </span>
          <span className="text-md-regular text-gray-white">
          A full-stack LLM engineering platform for developers and PMs. Keywords AI helps teams build reliable AI products 10x faster. In a shared workspace, product teams can build, monitor, and improve AI performance.
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
