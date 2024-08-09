import React from "react";
import Blog from "../../components/Blog/Blog";
import BlogDetail from "../[blog-url]/page";
import Link from "next/link";

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
  id
}) => {

  return (
    <Link
      className="w-full flex flex-col pb-lg items-start gap-lg flex-1 rounded-lg border border-gray-3 bg-gray-2 cursor-pointer transform transition-transform duration-300 hover:scale-101"
      href={`/blog/${slug}`}
      // onClick={() => {
      //   // router.push(`blog/${slug}`);
      //   <BlogDetail />;
      // }}
    >
      <img
        className="flex flex-col h-[280px] min-w-[320px] w-full justify-center items-center gap-xl self-stretch  rounded-t-lg rounded-b-[0px] bg-gray-black "
        src={image}
        alt="cover"
      />
      <div className="flex flex-col py-0 px-lg items-start gap-sm self-stretch">
        <div className="flex flex-col items-start gap-xxs ">
          <span className="text-sm-regular text-gray-4">{type}</span>
          <span className="display-md-bold text-gray-white min-h-[80px]">{title}</span>
        </div>
        <div className="flex flex-row justify-between items-center self-stretch ">
          <span className="text-sm-regular text-gray-4">{date}</span>
          <img
            className="rounded-full h-[24px] w-[24px]"
            src={author}
            alt="author"
          />
        </div>
      </div>
    </Link>
  );
};
