import React from "react";
import { Button } from "@/app/components/Buttons";
import {
  Right,
  Down,
  TagDashboard,
  TagRequests,
  TagUser,
  TagPlayground,
  TagRocket,
  TagLogo,
  TagDatasets,
} from "@/app/components/Icons";
import { Tag } from "@/app/components/Tag/Tag";
import Accordion from "@/app/components/Sections/Accordion";
import cn from "src/utilities/ClassMerge";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { StateEffect } from "@uiw/react-codemirror";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export function TagIconHelper(flag: string) {
  switch (flag) {
    case "Dashboard":
      return <TagDashboard />;
    case "Logs":
      return <TagRequests />;
    case "Users":
      return <TagUser />;
    case "Playground":
      return <TagPlayground />;
    case "API":
      return <TagLogo />;
    case "Datasets":
      return <TagDatasets />;
    default:
      return <TagRocket />;
  }
}
interface LogSectionProps {
  sectionContent: Array<{
    id?: string | number;
    tag: string;
    description: string;
  }>;
  sectionName: string;
}
interface Log {
  date: string;
  Title: string;
  snapshot?: string;
  version?: string;
  introduction: string;
  sections: {
    New?: Array<{ tag: string; description: string }>;
    Improved?: Array<{ tag: string; description: string }>;
    Fixed?: Array<{ tag: string; description: string }>;
  };
}
export function LogSection({ sectionContent, sectionName }: LogSectionProps) {
  return (
    <div className="flex flex-col items-start gap-xs self-stretch">
      <Accordion
        className={cn("flex flex-col items-start self-stretch ")}
        content={{
          trigger: sectionName,
          content: (
            <div className="flex flex-col items-start gap-xxs">
              {/* {sectionContent.map((item) => (
                <div className="flex pl-sm items-start gap-xxxs self-stretch">
                  <p className="inline-block text-gray-white">·</p>
                  <p className="text-gray-white text-md-regular">
                    <div className="inline-block mr-xxxs">
                      <Tag icon={TagIconHelper(item.tag)} text={item.tag} />
                    </div>
                    {item.description}
                  </p>
                </div>
              ))} */}
              {sectionContent.map((item, index) => (
                <div
                  key={item.id || index}
                  className="flex pl-sm items-start gap-xxxs self-stretch"
                >
                  <p className="inline-block text-gray-white">·</p>
                  <p className="text-gray-white text-md-regular">
                    <div className="inline-block mr-xxxs">
                      <Tag icon={TagIconHelper(item.tag)} text={item.tag} />
                    </div>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ),
          contentClassName: "flex flex-col items-start gap-xs self-stretch",
        }}
      ></Accordion>
    </div>
  );
}

export function LogContent({ log }: { log: Log }) {
  const isExternalLink = log.snapshot?.startsWith('http://') || log.snapshot?.startsWith('https://');
  return (
    <div aria-label="changelog history" className="flex w-[1200px] items-start">
      <div className="flex w-[300px] h-[28px] py-xxs px-0 flex-col justify-center items-start gap-[8px] flex-shrink-0">
        <p className="caption text-gray-4">{log.date}</p>
      </div>
      <div className="flex w-[600px] flex-col items-start gap-md flex-shrink-0">
        <p className="text-gray-white display-xs-md">{log.Title}</p>
        {log.snapshot && (
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={isExternalLink ? log.snapshot : `/images/changelog/snapshots/${log.snapshot}`}
              alt={`Snapshot for version ${log.version}`}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        )}
        {/* <p className="text-gray-white text-md-regular">
          {log.introduction.split("\n").map((line, index, array) => (
            <React.Fragment key={index}>
              {line}
              {index !== array.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p> */}
        <div className="text-gray-white text-md-regular">
          {log.introduction.split("\n").map((line, index) => (
            <React.Fragment key={index}>
               <ReactMarkdown
                components={{
                  li: ({ node, ...props }) => {
                    return (
                      <li style={{ marginBottom: "8px" }}>
                        <span style={{ color: "white", marginRight: "8px" }}>
                          •
                        </span>
                        <span className="text-gray-white text-md-regular">
                          {props.children}
                        </span>
                      </li>
                    );
                  },
                  p: ({ node, ...props }) => {
                    // Exclude captions under images from being styled with text-gray-white
                    // const isCaption =
                    //   node?.children.length === 1 &&
                    //   node?.children?[0].type === "image";
                    // const textStyle = isCaption ? {} : { color: "text-gray-white" };
                    const textStyle = { color: "text-gray-white" };

                    return (
                      <p className={`text-md-regular ${textStyle}`} style={{ marginBottom: "24px" }}>
                        {props.children}
                      </p>
                    );
                  },
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-gray-white underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
                remarkPlugins={[gfm]}
              >
                {line}
              {/* {index !== log.introduction.split("\n").length - 1 && <br />} */}
              </ReactMarkdown>
  

            </React.Fragment>
          ))}
        </div>
        <div
          aria-label="frame 2209"
          className="flex flex-col items-start gap-sm self-stretch"
        >
          {log.sections.New && log.sections.New.length > 0 && (
            <LogSection sectionContent={log.sections.New} sectionName="New" />
          )}
          {log.sections.Improved && log.sections.Improved.length > 0 && (
            <LogSection
              sectionContent={log.sections.Improved}
              sectionName="Improved"
            />
          )}
          {log.sections.Fixed && log.sections.Fixed.length > 0 && (
            <LogSection
              sectionContent={log.sections.Fixed}
              sectionName="Fixed"
            />
          )}
        </div>
      </div>
    </div>
  );
}
