import { Image } from "@radix-ui/react-avatar";

export type Image = {
  id: number;
  url: string;
  alt?: string;
  caption?: string;
  captionURL?: string;
  props?: {
    variant: string;
  };
};

export type Paragraph = {
  id: number;
  text?: string;
  image?: Image;
  primary_title?: string;
  primary_title_url?: string;
  //   secondary_title?: string;
};
export type Card = {
  image: Image;
  title: string;
  date: string;
};

export type Customer = {
  id: number;
  date: string;
  title: string;
  subtitle?: string;
  paragraphs?: Paragraph[];
  cover: Image;
  industry: string;
  company: {
    name: string;
    logo: Image;
  };
  slug: string;
  meta?: {
    description?: string;
  };
};

export const customers: Customer[] = [
  {
    id: 45,
    date: "May 27, 2025",
    slug: "/customers/claude-sonnet-4-vs-claude-opus-4-a-comprehensive-comparison",
    title: "Claude Sonnet 4 vs Claude Opus 4: A comprehensive comparison",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/claude-4-opus-vs-sonnet/cover.jpg",
    },
    industry: "TECHNOLOGY",
    company: {
      name: "Keywords AI",
      logo: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
];
