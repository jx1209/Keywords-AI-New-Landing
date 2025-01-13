import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "250+ AI models | Curated by Keywords AI",
  description:
    "Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.",
  openGraph: {
    type: "website",
    title: "250+ AI models | Curated by Keywords AI",
    description:
      "Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.",
    url: "https://keywordsai.co/llm-library",
    siteName: "Keywords AI",
    images: [
      {
        url: "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@keywordsai",
    title: "Keywords AI",
    images: [
      "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
    ],
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-xl self-stretch pt-[140px] px-sm pb-[120px] ">
      <h1 className="text-gray-4 max-w-[1200px] w-full display-lg text-center">
        Accelerator Grant Finder
      </h1>
      {/* {<FinderCard/>} */}
    {/* // - Grant finder folder in the components folder
         -- Finder file
            - call card to for loop the data
         -- component - card {FinderCard.tsx} */}
    </div>

  );
}
