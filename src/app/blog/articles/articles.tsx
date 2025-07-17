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

export type Blog = {
  id: number;
  timestamp: string;
  title: string;
  subtitle?: string;
  paragraphs?: Paragraph[];
  cover: Image;
  type: string;
  author: {
    name: string;
    image: Image;
  };
  slug: string;
  meta?: {
    description?: string;
  };
};

export const blogs: Blog[] = [
  {
    id: 1,
    timestamp: "March 25, 2024",
    title: "Claude Haiku can substitute GPT-4 in 95% of AI tasks at 4% cost",
    slug: "/blog/claude-haiku-vs-gpt-4",
    type: "MODEL",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog1/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 2,
    timestamp: "June 20, 2024",
    title: "The ten LLM metrics you need to monitor (and why)",
    slug: "/blog/ten-llm-metrics-need-monitor",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog2/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    meta: {
      description:
        "Effective LLM monitoring is crucial for delivering high-quality AI applications while managing costs. Focus on: Accuracy Monitoring, Cost & Latency, Outage Management.   ",
    },

  },
  {
    id: 3,
    timestamp: "June 21, 2024",
    title: "Claude-3.5-Sonnet vs. GPT-4o: which is better?",
    slug: "/blog/claude-3.5-vs-gpt-4o",
    type: "MODEL",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog3/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude-3.5-Sonnet and OpenAI's GPT-4o across various AI tasks. Claude-3.5-Sonnet excels in context precision, faithfulness, and readability.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 4,
    timestamp: "June 24, 2024",
    title: "LLM Benchmarking: A complete guide to evaluating LLM in 2024",
    slug: "/blog/llm-benchmarking",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog4/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 5,
    timestamp: "June 26, 2024",
    title: "How to stop LLM hallucinations?",
    slug: "/blog/stop-llm-hallucinations",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog5/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 6,
    timestamp: "June 28, 2024",
    title: "5 best LLM playgrounds in 2024",
    subtitle:
      "Discover the Top Tools for Experimenting with Large Language Models in 2024",
    slug: "/blog/5-best-llm-playgrounds",
    type: "GUIDE",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog6/cover.jpg",
      props: {
        variant: "circle",
      },
    },
    meta: {
      description:
        "We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. Haiku offers faster response times, lower costs, and comparable performance. Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations. This article presents the details of our tests and their results, highlighting Haiku's strengths.",
    },
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 7,
    timestamp: "June 30, 2024",
    title: "All about LLM evaluating",
    slug: "/blog/all-about-llm-evaluating",
    subtitle:
      "Discover 3 Essential LLM Evaluation Metrics and the Innovative LLM-as-a-Judge Approach to Ensuring Quality Outputs",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog7/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 8,
    timestamp: "July 4, 2024",
    title: "Fine-Tuning LLMs with Custom Datasets",
    slug: "/blog/fine-tuning-llm-with-datasets",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog8/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 9,
    timestamp: "July 10, 2024",
    title: "The 2024 LLM Directory: Find the Best Models for Your Use Cases",
    slug: "/blog/2024-llm-directory",
    type: "MODEL",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog9/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 10,
    timestamp: "July 15, 2024",
    title: "How to increase your LLM rate limits for free",
    slug: "/blog/increase-llm-rate-limits",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog10/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 11,
    timestamp: "July 18, 2024",
    title: "A new choice in small models: GPT-4o mini vs.Haiku, and Flash",
    slug: "/blog/gpt-4o-mini-vs-claude-3-haiku-vs-gemini-1-5-flash",
    type: "MODEL",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog11/cover.jpg",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 12,
    timestamp: "July 22, 2024",
    title: "A YC startup's first project - an LLM router (with code)",
    slug: "/blog/yc-startup-llm-router",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog12/cover.jpg",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 13,
    timestamp: "July 28, 2024",
    title: "Week of Open-Source models: Mistral Large 2 vs. Llama 3.1 405B",
    slug: "/blog/mistral-large-2-vs-llama-3-1",
    type: "MODEL",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog13/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 14,
    timestamp: "July 31, 2024",
    title: "95% of LLM developers are missing these 3 key reliability setups",
    slug: "/blog/llm-reliability-setups",
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog14/cover.png",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 15,
    timestamp: "Auguest 14, 2024",
    title:
      "Innovative LLM solutions: Keywords AI CEO Andy Li discusses product impact",
    slug: "https://www.websiteplanet.com/blog/interview-keywordsai/",
    type: "INTERVIEW",
    author: {
      name: "Predrag",
      image: {
        id: 1,
        url: "/images/blog_Images/predrag.jpg",
      },
    },
    cover: {
      id: 1,
      url: "/images/blog_Images/blog16/cover.jpg",
    },
    meta: {
      description: "",
    },
  },
  {
    id: 16,
    timestamp: "August 20, 2024",
    slug: "/blog/what-is-lpu",
    title: "What is a LPU and why it's faster than GPUs?",
    cover: {
      id: 1,
      url: "/images/blog_Images/blog15/cover.jpg",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
    meta: {
      description: "",
    },
  },
  {
    id: 17,
    timestamp: "August 28, 2024",
    slug: "/blog/top-llm-dev-tools",
    title: "Top LLM dev tools for AI developers",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/top_tools/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 18,
    timestamp: "August 30, 2024",
    slug: "/blog/what-is-llm-monitoring-and-observability",
    title: "What is LLM monitoring?",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/what-is-llm-monitoring/cover.jpg",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 19,
    timestamp: "September 2, 2024",
    slug: "/blog/keywords-ai-vs-datadog",
    title: "Beyond Datadog: Why LLM developers are switching to Keywords AI",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 20,
    timestamp: "September 12, 2024",
    slug: "/blog/o1-preview-vs-claude-3-5-sonnet",
    title: "o1-preview vs. claude-3.5-sonnet: Comparing top LLMs",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/cover.png",
    },
    type: "MODEL",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 21,
    timestamp: "September 20, 2024",
    slug: "/blog/how-i-built-a-free-ai-seo-tool-in-just-2-hours",
    title: "How I built a free AI SEO tool in just 2 hours",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/traffic.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 22,
    timestamp: "October 2, 2024",
    slug: "/blog/keywords-ai-september-updates",
    title: "Keywords AI Update: September 2024",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/september-updates/cover.jpg",
    },
    type: "UPDATE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 23,
    timestamp: "October 21, 2024",
    slug: "/blog/5-best-practices-for-llm-application-monitoring",
    title: "5 Best Practices for LLM Application Monitoring",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 24,
    timestamp: "November 16, 2024",
    slug: "/blog/llm-logging-with-vercel-ai-sdk",
    title: "LLM logging with Vercel AI SDK",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 25,
    timestamp: "November 18, 2024",
    slug: "/blog/introducing-our-new-pricing-plans",
    title: "Introducing our new pricing plans",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/new_pricing/cover.jpg",
    },
    type: "UPDATE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 26,
    timestamp: "November 16, 2024",
    slug: "/blog/llm-logging-with-langchain",
    title: "LLM logging with LangChain",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/langchain_SDK/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 27,
    timestamp: "November 22, 2024",
    slug: "/blog/how-to-optimize-llm-performance-in-startups",
    title: "How to optimize LLM performance in startups",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/optimize_llm-performance/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 28,
    timestamp: "November 26, 2024",
    slug: "/blog/claude-3-5-sonnet-vs-claude-3-5-haiku",
    title:
      "Claude 3.5 Haiku vs. Sonnet: Speed or Power? A Comprehensive Comparison",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/haiku_vs_sonnet/cover.png",
    },
    type: "MODEL",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 29,
    timestamp: "November 27, 2024",
    slug: "/blog/top-7-platforms-frameworks-for-building-ai-agents-in-2025",
    title: "Top 7 platforms & frameworks for building AI agents in 2025",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/top_7_agent_platforms/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 30,
    timestamp: "December 1, 2024",
    slug: "/blog/what-is-langchain-is-langchain-worth-it",
    title: "What is LangChain? Is LangChain worth it?",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/what-is-langchain/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 31,
    timestamp: "December 9, 2024",
    slug: "/blog/what-to-expect-from-gpt-5-speculation-and-innovation",
    title: "What to expect from GPT-5: speculation and innovation",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/gpt-5/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Alex",
      image: {
        id: 1,
        url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/alex.png",
        props: {
          variant: "circle",
        },
      },
    },

  },
  {
    id: 32,
    timestamp: "December 11, 2024",
    slug: "/blog/lets-think-step-by-step-chain-of-thought-prompting-in-llms",
    title: "Let’s think step by step: Chain of Thought prompting in LLMs",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/cot/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Alex",
      image: {
        id: 1,
        url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/alex.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 33,
    timestamp: "December 27, 2024",
    slug: "/blog/top-7-llm-debugging-challenges-and-solutions",
    title: "Top 7 LLM debugging challenges and solutions",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/top-7-debugging-challenges/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 34,
    timestamp: "January 7, 2025",
    slug: "/blog/top-10-llm-research-papers",
    title: "My top 10 LLM research papers in 2024",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/best-llm-research-paper/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Raymond",
      image: {
        id: 1,
        url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/raymond.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 35,
    timestamp: "January 9, 2025",
    slug: "/blog/best-llms",
    title: "The best LLMs in 2025",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/best-llms/cover.png",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 36,
    timestamp: "January 11, 2025",
    slug: "/blog/top-10-llm-api-providers",
    title: "Top 10 LLM API providers in 2025",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/top-10-providers/cover.png",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 37,
    timestamp: "February 1, 2025",
    slug: "/blog/top-benchmarks-for-the-best-open-source-coding-llms",
    title: "Top benchmarks for the best open-source coding LLMs in 2025",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/best-coding-benchmark/cover.png",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 38,
    timestamp: "February 28, 2025",
    slug: "/blog/how-to-use-openai-deep-research-effectively",
    title: "How to Use OpenAI Deep Research Effectively",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/deep-research/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 39,
    timestamp: "March 1, 2025",
    slug: "/blog/introducing-grok-3-what-it-is-how-to-access-it-and-why-it-matters",
    title:
      "Introducing Grok 3: What It Is, How to Access It, and Why It Matters",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/grok3/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 40,
    timestamp: "March 4, 2025",
    slug: "/blog/comparing-o3-mini-vs-gpt-4.5",
    title: "Comparing o3-mini vs GPT-4.5: Key differences and best uses",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/o3mini-vs-gpt-4.5/cover.png",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 41,
    timestamp: "March 6, 2025",
    slug: "/blog/posthog-keywords-ai-integration",
    title: "PostHog <> Keywords AI Integration",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/posthog/cover.jpg",
    },
    type: "INTEGRATION",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 42,
    timestamp: "March 8, 2025",
    slug: "/blog/introduction-to-mcp",
    title: "A Complete Guide to the Model Context Protocol (MCP) in 2025",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/guide-of-mcp/cover_v2.jpg",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 43,
    timestamp: "March 27, 2025",
    slug: "/blog/introducing-inference-net",
    title: "Meet Inference.net – A Faster, Cheaper Way to Run Open-Source LLMs",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/inference-net/cover.jpg",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 44,
    timestamp: "April 14, 2025",
    slug: "/blog/gpt-41-vs-gpt-45-a-comprehensive-comparison",
    title: "GPT-4.1 vs GPT-4.5: A comprehensive comparison",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/gpt-4.5-vs-gpt-4.1/cover_v3.jpg",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 45,
    timestamp: "May 27, 2025",
    slug: "/blog/claude-sonnet-4-vs-claude-opus-4-a-comprehensive-comparison",
    title: "Claude Sonnet 4 vs Claude Opus 4: A comprehensive comparison",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/claude-4-opus-vs-sonnet/cover_v2.jpg",
    },
    type: "MODELS",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 46,
    timestamp: "June 25, 2025",
    slug: "/blog/google-adk-intro",
    title: "Introducing Google’s Agent Development Kit (ADK)",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/google-adk-intro/cover_v2.jpg",
    },
    type: "GUIDE",
    author: {
      name: "Hendrix",
      image: {
        id: 1,
        url: "/images/blog_Images/hendrix.png",
        props: {
          variant: "circle",
        },
      },
    },
  },
  {
    id: 47,
    timestamp: "June 25, 2025",
    slug: "/blog/intro-grok4",
    title: "Developer guide to grok 4",
    cover: {
      id: 1,
      url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/grok-4/cover_v1.jpg",
    },
    type: "MODELS",
    author: {
      name: "Frank",
      image: {
        id: 1,
        url: "/images/blog_Images/frank.jpg",
        props: {
          variant: "circle",
        },
      },
    },
  },
];
