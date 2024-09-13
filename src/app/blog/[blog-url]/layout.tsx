import { getMetadata } from "@/utilities/getMetadata";
import "@mintlify/mdx/dist/styles.css";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { "blog-url": string };
}): Promise<Metadata> {
  const filePath = params["blog-url"];
  const metadata = await getMetadata(filePath);
  if (!metadata) {
    return {};
  }
  const getImageUrl = (image: string | undefined) => {
    if (!image) return 'https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png';
    return image.startsWith('https://') ? image : `https://keywordsai.co/${image}`;
  };

  const imageUrl = getImageUrl(metadata.image);

  return {
    title: metadata?.title ?? "",
    description: metadata?.description ?? "",
    openGraph: {
      type: "website",
      siteName: "KeywordsAI.co",
      title: metadata.title ?? "",
      url: `https://keywordsai.co/blog/${filePath}`,
      description: metadata.description ?? "",
      images: imageUrl,
      locale: "en_US",
    },
    twitter: {
      title: metadata.title ?? "",
      description: metadata.description ?? "",
      card: "summary_large_image",
      images:
        (`https://keywordsai.co/${metadata?.image}` || metadata?.image) ??
        `https://keywordsai-static.s3.amazonaws.com/social_media_images/social_image.png`,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
