import React from "react";
import Blog from "../../components/Blog/Blog";
import BlogDetail from "../[blog-url]/page";
import Link from "next/link";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
  type: string;
  author: string;
  slug: string;
  id: number;
};

export const Largecard: React.FC<Props> = ({
  image,
  title,
  date,
  type,
  author,
  slug,
  id,
}) => {
  const isExternalLink = slug.startsWith('http://') || slug.startsWith('https://');
  return (
    <Link
      className="w-full flex flex-col pb-lg items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 cursor-pointer transform transition-transform duration-200 hover:scale-101"
      href={`${slug}`}
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      // onClick={() => {
      //   // router.push(`blog/${slug}`);
      //   <BlogDetail />;
      // }}
    >
      {/* <img
        className="flex flex-col h-[280px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black "
        src={image}
        alt="cover"
      /> */}
      <div className="relative h-[280px] min-w-[320px] w-full">
        <Image
          src={image}
          alt="cover"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col py-0 px-lg items-start gap-sm self-stretch">
        <div className="flex flex-col items-start gap-xxs ">
          <span className="caption text-gray-4">{type}</span>
          <span className="display-xs-md text-gray-white min-h-[80px]">
            {title}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch ">
          <span className="caption text-gray-4">{date}</span>
          <div className="relative h-[24px] w-[24px]">
            <Image
              src={author}
              alt="author"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
