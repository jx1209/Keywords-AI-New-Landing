import AGDetailContent from "@/app/components/AcceleratorGrantFinder/AGDetailContent";
import accels_grants from "../accelerators-grants.json";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  // export async function generateMetadata({ params }: { params: Promise<{ "llm-url": string}> }): Promise<Metadata> {
  const resolvedParams = await params;
  const name = decodeURIComponent(resolvedParams["name"]);

  // Find the matching entry
  const entry = accels_grants.find((item) => item.Name === name);

  if (!entry) {
    console.log(`Entry not found for name: ${name}`); // Debug log
    // Fallback metadata if entry not found
    console.log("Entry not found");
    return {
      title: `How to apply for ${name}`,
      description: `Learn the details about ${name} and how to get accepted.`,
      openGraph: {
        type: "website",
        title: `${name} | Keywords AI`,
        description: `Learn the details about ${name} and how to get accepted.`,
        url: `https://keywordsai.co/accelerator-grant-finder/${name}`,
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
        title: `${name} | Keywords AI`,
        images: [
          "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
        ],
      },
    };
  }

  return {
    title: `How to apply for ${name}`,
    description: entry["One-line description"],
    openGraph: {
      type: "website",
      title: `${name} | Keywords AI`,
      description: entry["One-line description"],
      url: `https://keywordsai.co/accelerator-grant-finder/${name}`,
      siteName: "Keywords AI",
      images: [
        {
          url:
            entry.Cover ||
            "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@keywordsai",
      title: `${name} | Keywords AI`,
      description: entry["One-line description"],
      images: [
        entry.Cover ||
          "https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png",
      ],
    },
  };
}

export interface AGDetails {
  name: string;
  type: string;
  amount: string;
  description: string;
  cover: string;
  website: string;
  perks: string;
  deadline: string;
  qualifications: string;
}

export default async function AcceleratorGrantDetails({
  params,
}: // searchParams,
{
  params: Promise<{ name: string }>;
  // searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const resolvedParams = await params;
  const decodedName = decodeURIComponent(resolvedParams.name).replace(
    /%2F/g,
    "/"
  );

  console.log("Decoded Name:", decodedName); // Debug log
  console.log(
    "Available entries:",
    accels_grants.map((item) => item.Name)
  ); // Debug log

  // Find the matching entry from accels_grants
  const entry = accels_grants.find((item) => {
    console.log("Comparing:", item.Name, "===", decodedName); // Debug log
    return item.Name === decodedName;
  });

  if (!entry) {
    console.log(`No entry found for: ${decodedName}`); // Debug log
    return (
      <AGDetailContent
        name={decodedName}
        type=""
        amount=""
        description=""
        cover=""
        website=""
        perks=""
        deadline=""
        qualifications=""
      />
    );
  }

  console.log("Found entry:", entry); // Debug log

  // Return the component with the found data
  return (
    <div className="flex flex-col items-center">
      <AGDetailContent
        name={entry.Name}
        type={entry.Type}
        amount={entry.Funding}
        description={entry["One-line description"]}
        cover={entry.Cover}
        website={entry.Website}
        perks={entry.Perks}
        deadline={entry["Application deadline"]}
        qualifications={entry.Qualifications}
      />
    </div>
  );
}
