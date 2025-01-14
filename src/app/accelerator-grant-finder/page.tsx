import type { Metadata } from "next";
import FinderCard from "../components/AcceleratorGrantFinder/FinderCard";


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
      <h1 className="text-gray-1 max-w-[1200px] self-stretch w-full display-lg font-semibold text-center">
        Accelerators & AI Grants Finder
      </h1>

      <FinderCard />
    </div>
  );
}
