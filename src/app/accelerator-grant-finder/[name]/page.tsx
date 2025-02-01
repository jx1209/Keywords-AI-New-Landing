import AGDetailContent from "@/app/components/AcceleratorGrantFinder/AGDetailContent";
import { Metadata } from "next";

export async function generateMetadata({ params }: {
  params: { name : string }
}): Promise<Metadata> {
  const resolvedParams = await params;
  const name = resolvedParams.name;

  return {
    title: `How to apply for ${name}`,
    description: `Learn the details about ${name} and how to get accepted.`,
    openGraph: {
      type: 'website',
      title: `${name} | Keywords AI`,
      description: `Learn the details about ${name} and how to get accepted.`,
      url: `https://keywordsai.co/accelerator-grant-finder/${name}`,
      siteName: 'Keywords AI',
      images: [
        {
          url: 'https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@keywordsai',
      title: `${name} | Keywords AI`,
      images: ['https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png'],
    },
  }
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
  searchParams,
}: {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Await the params before accessing
  const resolvedParams = await params;
  const name = resolvedParams.name;

  return (
    <AGDetailContent
      name={name}
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
