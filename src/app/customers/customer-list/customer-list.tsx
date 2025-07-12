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
  highlight?: {
    value: string;
    description: string;
  };
  atAGlance?: {
    customer: string;
    stage: string;
    industry: string;
    challenge: string;
    solution: string;
  };
};

export const customers: Customer[] = [
  {
    id: 1,
    date: "May 27, 2025",
    slug: "/customers/octolane",
    title: "How Octolane’s self-driving CRM cut debug time by 90% with Keywords AI",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/customers/octolane/founders.jpg",
    },
    industry: "TECHNOLOGY",
    company: {
      name: "Octolane AI",
      logo: {
        id: 1,
        url: "OctolaneLogo-md",
        props: {
          variant: "circle",
        },
      },
    },
    highlight: {
      value: "10X",
      description: "FASTER DEBUGGING OF LLM FAILURES"
    },
    atAGlance: {
      customer: "Octolane AI (YC W24) - The First Self-Driving AI CRM",
      stage: "Seed round - $2.6M",
      industry: "B2B SaaS / AI CRM",
      challenge: "LLM bugs and blindspots slowed down shipping speed",
      solution: "Drop-in observability, prompt management, and prompt debugging with Keywords AI",
    },
  },
];
