import type { Metadata } from "next";
import accels_grants from './accelerators-grants.json';
import FinderCard from "../components/AcceleratorGrantFinder/FinderCard";

export const metadata: Metadata = {
  title: "Accelerators & AI Grants Finder | Curated by Keywords AI",
  description:
    "Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.",
  openGraph: {
    type: "website",
    title: "Accelerators & AI Grants Finder | Curated by Keywords AI",
    description:
      "Comprehensive directory of 250+ AI models and large language models (LLMs) and their capabilities. Compare details, pricing, benchmarks, and more.",
    url: "https://keywordsai.co/accelerator-grant-finder",
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
    <div className="flex flex-col items-center gap-xl pt-[140px] px-sm pb-[120px] ">
      <h1 className="text-gray-1 max-w-[1200px] w-full display-lg font-semibold text-center">
        Accelerators & AI Grants Finder
      </h1>
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-3 w-full gap-[60px]">
          {accels_grants.map((accel_grant) => {
            return (
              <div className="w-full" key={accel_grant.Name}>
                <FinderCard 
                  name={accel_grant.Name}
                  type={accel_grant.Type}
                  amount={accel_grant.Funding}
                  description={accel_grant["One-line description"]}
                  cover={accel_grant.Cover}
                  website={accel_grant.Website}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
