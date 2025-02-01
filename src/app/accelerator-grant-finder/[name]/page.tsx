
import AGDetailContent from "@/app/components/AcceleratorGrantFinder/AGDetailContent";
import { Metadata } from "next";

export async function generateMetadata({ params }: {
  params: { name : string }
}): Promise<Metadata> {
  const resolvedParams = await params;
  const name = resolvedParams.name;

  return {
    title: `How to apply for ${name}`,
    description: `Learn the details about ${name} and how to apply for it.`,
    openGraph: {
      type: 'website',
      title: `${name} | Keywords AI`,
      description: `Learn the details about ${name} and how to apply for it.`,
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

export default function AcceleratorGrantDetails({ name, type, amount, description, cover, website, perks, deadline, qualifications }: { name: string, type: string, amount: string, description: string, cover: string, website: string, perks: string, deadline: string, qualifications: string }) {
  return (
    <AGDetailContent
        name={name}
        type={type}
        amount={amount}
        description={description}
        cover={cover}
        website={website}
        perks={perks}
        deadline={deadline}
        qualifications={qualifications}
    />
  );
}
