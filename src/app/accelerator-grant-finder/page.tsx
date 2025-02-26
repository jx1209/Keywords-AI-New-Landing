import type { Metadata } from "next";
import accels_grants from './accelerators-grants.json';
import FinderCard from "../components/AcceleratorGrantFinder/FinderCard";

export const metadata: Metadata = {
  title: "Accelerators & AI Grants Finder | Curated by Keywords AI",
  description:
    "Explore funding opportunities, accelerators, and grants for AI startups. Get details on programs and eligibility to support your AI innovation.",
  openGraph: {
    type: "website",
    title: "Accelerators & AI Grants Finder | Curated by Keywords AI",
    description:
      "Explore funding opportunities, accelerators, and grants for AI startups. Get details on programs and eligibility to support your AI innovation.",
    url: "https://keywordsai.co/accelerator-grant-finder",
    siteName: "Keywords AI",
    images: [
      {
        url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/social_media_images/grants.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@keywordsai",
    title: "Accelerators & AI Grants Finder | Curated by Keywords AI",
    images: [
      "https://keywordsai-static.s3.us-east-1.amazonaws.com/social_media_images/grants.png",
    ],
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-xl pt-[140px] px-sm pb-[120px] ">
      <h1 className="text-gray-1 max-w-[1200px] w-full display-lg font-semibold text-center">
        Accelerators & AI grants finder
      </h1>
      <div className="mx-auto w-full max-w-[1200px] px-10">
        <div className="grid  grid-cols-3  sm:grid-cols-1 w-full gap-[60px]">
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
                  perks={accel_grant.Perks}
                  deadline={accel_grant["Application deadline"]}
                  qualifications={accel_grant.Qualifications}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
