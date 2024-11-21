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
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "\n* We compared Anthropic's Claude 3 Haiku and OpenAI's GPT-4-Turbo in various AI tasks. \n* Haiku offers faster response times, lower costs, and comparable performance. \n* Claude 3 Haiku could potentially substitute GPT-4-Turbo in 95% of AI applications at 1/25th Cost. \n* Haiku demonstrates better readability and can handle specific tasks more effectively than GPT-4-Turbo in certain situations.\n\n This article presents the details of our tests and their results, highlighting Haiku's strengths.",
      },
      {
        id: 2,
        primary_title: "Intro",
        text: "Claude 3 Haiku: Haiku is Anthropic's newest, fastest, and most streamlined model, delivering near-instant replies. \n\n GPT-4-Turbo: OpenAI's flagship model, renowned for its versatility in tasks ranging from writing to programming, has set the benchmark for excellence over the past year.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/anthropic_family.jpg",
          caption: "Anthropic's family of models",
          captionURL: "https://anthropic.com/",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        primary_title: "Test results",
        text: "We created a knowledge base for a virtual AI company and asked most of the questions based on this information. \n\n After running almost 100 different prompts, here are the results of each model's performance: \n\n **Speed Comparison:** \n\n - Haiku's average generation time is 78% faster than GPT-4-preview-0125 (2.283s vs 10.475s) \n- Haiku's time to first token (TTFT) is 58% faster than GPT-4-preview-0125 (0.45s vs 1.07s)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/speed.jpg",
          caption: "Speed comparison",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "**Cost comparison:** \n\n - Haiku's average cost per request is 95% lower than GPT-4 ($0.00032 vs $0.007) \n- Input Pricing: Haiku - $0.25 / MTok, GPT-4-Turbo - $10.00 / MTok \n- Output Pricing: Haiku - $1.25 / MTok, GPT-4-Turbo - $30.00 / MTok",
        image: {
          id: 1,
          url: "/images/blog_Images/blog1/cost.jpg",
          caption: "Cost comparison",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        text: `**Evaluation tests:** \n\n We conducted evaluation tests on Keywords AI, a critical component in natural language processing tasks. The results are as follows: \n\n - GPT-4-0125-preview: Context Precision: 0.96, Faithfulness: 0.97, Readability: 0.85, Relevance: 0.94 \n- Claude-3-haiku: Context Precision: 0.92, Faithfulness: 0.91, Readability: 0.88, Relevance: 0.94 \n- Haiku demonstrates better readability than GPT-4-preview-0125 (0.88 vs 0.85) \n- Both models have similar performance in context precision, faithfulness, and relevance \n\n **Interesting Observation:** \n\n When using the "Airportcode extractor" prompt from OpenAI's prompt library, GPT-4 couldn't solve the problem, while Haiku successfully extracted the airport codes.`,
      },
      {
        id: 6,
        primary_title: "Conclusion",
        text: "Based on our extensive testing and analysis, Claude 3 Haiku has proven to be a strong contender against GPT-4 in various AI tasks.\n\n With its faster response times, lower cost per request, and comparable performance in key evaluation metrics, Haiku could potentially substitute GPT-4 in most AI applications.\n\nAs AI continues to advance, models like Claude 3 Haiku will play a crucial role in shaping the future of natural language processing and AI-driven solutions.",
      },
      {
        id: 7,
        primary_title: "How You Can Run Your Own Tests",
        text: 'Visit [Keywords AI](https://keywordsai.co) and click on "Dashboard" \n\n Choose the models you want to test in [Playground](https://docs.keywordsai.co/features/prompt/test&compare) and run requests! \n\n Check / Export your every single request on the[ Request page](https://docs.keywordsai.co/features/monitoring/logging). \n\n Turn on the [evaluations](https://docs.keywordsai.co/features/evaluation/overview) you want to run and see the result! \n\n Best of all, integrating Keywords AI into your codebase is a snap, requiring only a couple of lines of code. \n\n This means you can quickly and effortlessly incorporate state-of-the-art AI models into your projects and applications.',
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "Effective LLM monitoring is crucial for delivering high-quality AI applications while managing costs. Focus on: \n- **Accuracy Monitoring**: Combine human evaluation and AI scoring to ensure relevant, readable outputs. \n- **Cost & Latency**: Use comprehensive tools to track expenses and optimize performance. \n- **Outage Management**: Implement in-house alerts or third-party solutions for seamless fallback and uptime.",
      },
      {
        id: 2,
        primary_title: "What is LLM monitoring?",
        text: "LLM monitoring involves tracking the performance of LLM applications using a variety of evaluation metrics and techniques. \n\n It ensures models deliver accurate, reliable results and provides observability for developers, enabling them to identify and address issues promptly.",
      },
      {
        id: 3,
        primary_title: "What are the common metrics with LLM applications?",
        text: "**Accuracy** \n\n Ensuring high accuracy in LLM applications can be challenging due to various factors: \n- **[Hallucination](https://docs.keywordsai.co/features/evaluation/generation/faithfulness):** LLMs sometimes generate information that appears plausible but is entirely fabricated. This can mislead users and reduce trust in the application. \n- **[Answer Relevance](https://docs.keywordsai.co/features/evaluation/generation/answer-relevance)**: The model may provide off-topic responses or not directly addressing the user’s query, affecting the application's usefulness. \n- **[Readability](https://docs.keywordsai.co/features/evaluation/generation/flesch-kincaid)**: The generated text may be grammatically correct but awkward or difficult to read, hampering user understanding and engagement.",
      },
      {
        id: 4,
        text: "**Cost** \n\n Cost is a significant factor in LLM applications. Selecting the most appropriate model for your AI product can save thousands of dollars monthly. \n\n Occasionally, some requests can be costly, costing $1-5 each. Analyzing and managing these costly requests is crucial to control expenses effectively.",
      },
      {
        id: 5,
        text: "**Latency** \n\n Latency is crucial, especially in real-time applications like voice AI. Delays can hinder user experience and reduce effectiveness. \n\n Key aspects include: \n\n - **Time to First Token (TTFT):** The time it takes for the model to generate the first token after receiving a request. A shorter TTFT enhances the perceived responsiveness of the application. \n- **Time Per Output Token (TPOT):** The time taken to generate each subsequent token after the first one. Reducing TPOT can improve the overall generation speed. \n- **Total Generation Time:** The cumulative time required to generate the entire response. \n- **Speed:** This measures how many tokens the model can generate per second. Higher speed indicates better performance and a smoother user experience. \n- Latency Calculation: Latency is calculated as TTFT + (TPOT * number of tokens to be generated). Managing both TTFT and TPOT is essential to minimize overall latency.",
      },
      {
        id: 6,
        text: "**Outage from providers** \n\n With many LLM providers like OpenAI, Anthropic, and Mistral, outages can occur, causing downtime for your apps.\n\n These interruptions can disrupt the availability of LLM applications, affecting business operations and user satisfaction.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/outage.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 7,
        primary_title: "How to monitor these metrics?",
        text: "**Accuracy**\n\n To ensure high output quality in LLM applications, various methods can be employed: \n\n - **Human Evaluation:** This aligns with user preferences but can introduce bias and subjectivity. Using a diverse group of evaluators helps mitigate these issues but could be costly. \n- **[LLM-as-a-Judge](https://docs.keywordsai.co/features/evaluation/overview)**: The most cost-effective and efficient way to evaluate numerous inferences. However, it might yield inaccurate evaluation outcomes due to LLM performance limitations.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/eval.jpg",
          caption: "LLM Output evaluations on Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 8,
        text: "**Cost & Latency**\n\n Managing both cost and latency effectively requires a comprehensive dashboard that tracks expenses and performance metrics.\n\n - Providers’ Native Tracking: Limited to cost tracking without latency metrics. Only offers a monthly view and requires accessing different dashboards if multiple LLMs are used. It doesn’t provide specific costs or latency metrics for individual inferences.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/dashboard.jpg",
          caption: "OpenAI dashboard",
          captionURL: "https://platform.openai.com/playground",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "- Keywords AI Solution: Offers a custom timeline, consolidates costs of different LLMs into a single chart, and allows detailed analysis of individual requests to see exact costs. Additionally, it provides both overall and specific latency metrics for each request.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/keywords_dashboard.jpg",
          caption: "Keywords AI LLM dashboard",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/log.jpg",
          caption: "Keywords AI Log",
          captionURL: "https://docs.keywordsai.co/features/monitoring/logging",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 11,
        text: "**Outage from providers**\n\n No one wants downtime for their product! Ensuring continuous availability of LLM apps is crucial for maintaining user satisfaction and business operations. \n- **Build your own alert system:** Develop an in-house solution to monitor LLM providers and automatically switch to backups during outages. This offers full control but requires significant time —20+ hours for setup and 30+ hours for debugging. \n- **[Auto fallback to other LLMs](https://docs.keywordsai.co/features/generation/fallbacks):** Use a third-party solution for real-time outage notifications and automatic fallback. This approach minimizes downtime without extensive setup, ensuring 100% uptime by seamlessly switching to fallback models.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog2/alert.jpg",
          caption: "Keywords AI alerts & fallback",
          captionURL:
            "https://docs.keywordsai.co/features/generation/fallbacks",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 12,
        primary_title: "Learn more about LLM monitoring",
        text: "[Keywords AI](https://keywordsai.co) is a unified developer platform where you can [call 150+ LLMs using the OpenAI SDK with one API key](https://docs.keywordsai.co/integration/development-frameworks/openai-sdk) and get insights into your AI products. This platform provides comprehensive insights into your AI products, helping you build better AI solutions with complete observability.\n\n With just two lines of code, you can enhance your AI products, track performance, manage costs, and ensure reliability. Explore Keywords AI to streamline your LLM management and elevate your AI capabilities.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "TL;DR",
        text: "- We compared Anthropic's Claude-3.5-Sonnet and OpenAI's GPT-4o across various AI tasks. \n- Claude-3.5-Sonnet excels in context precision, faithfulness, and readability. \n- GPT-4o is faster and better for voice AI startups due to lower latency and quicker time to first token (TTFT). \n- I'll show you how to test and compare these models in just 1 minute using [Keywords AI](https://keywordsai.co).",
      },
      {
        id: 2,
        primary_title: "Intro",
        text: "Anthropic released its latest flagship LLM Claude-3.5-Sonnet on Jun 20, 2024. It’s 2x faster than Claude-3-Sonnet at 20% of the cost and better performance in every mainstream LLM benchmark. \n\n OpenAI released its most intelligent model, GPT-4o, on May 13, 2024. It’s 2x faster and 50% cheaper than GPT-4 Turbo.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/anthropic.jpg",
          caption: "Anthropic's family of models",
          captionURL: "https://anthropic.com/",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        primary_title: "Basic Comparison",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/basic.jpg",
          caption: "",
          captionURL: "",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Benchmark Comparison",
        text: "In benchmark evaluations, Claude 3.5 Sonnet consistently outperforms GPT-4o in areas such as graduate-level reasoning, undergraduate-level knowledge, coding, multilingual math, and reasoning over text.\n\n While GPT-4o shows a slight advantage in math problem-solving, Claude 3.5 Sonnet generally demonstrates superior performance across most benchmarks, making it a strong choice for diverse tasks.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/benchmark.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 5,
        primary_title: "Test results",
        text: "We still used our virtual AI company knowledge base and asked questions based on this knowledge base.",
      },
      {
        id: 6,
        primary_title: "Speed Comparison",
        text: "**Latency & Tokens** \n\n - GPT-4o's average latency is 24% faster than Claude-3.5-Sonnet (7.5226s vs 9.3055s) \n- GPT-4o even has more output tokens than Sonnet (431 tokens/request vs 260 tokens/request)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/latency.jpg",

          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "**Speed & TTFT (Time to First Token)** \n\n - GPT-4o's average TTFT is 2x faster than Claude-3.5-Sonnet (0.5623s vs 1.2341s) \n- GPT-4o’s average speed is also 2x faster than Claude-3.5-Sonnet (56T/s vs 28/2T/s)",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/ttft.jpg",

          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Evaluation tests",
        text: "We conducted evaluation tests on [Keywords AI](https://keywordsai.co), a critical component in natural language processing tasks. The results are as follows:",
        image: {
          id: 1,
          url: "/images/blog_Images/blog3/eval.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "Evaluation tests showed that Claude-3.5-Sonnet outperformed GPT-4o in context precision, faithfulness, and readability, while GPT-4o was slightly better in relevance.",
      },
      {
        id: 10,
        primary_title: "Coding tests",
        text: "Claude-3.5-Sonnet and GPT-4o excel in coding tasks, solving basic problems and complex issues like machine learning algorithms and debugging.\n\n Claude-3.5-Sonnet provides faster responses and detailed explanations, while GPT-4o excels in algorithmic tasks and performance optimization.\n\n Both models effectively handle bugs and support multiple programming languages.",
      },
      {
        id: 11,
        primary_title: "Conclusion",
        text: "Based on our extensive testing and analysis, both Claude-3.5-Sonnet and GPT-4o excel in various AI tasks, with Claude-3.5-Sonnet leading in context precision, faithfulness, and readability.\n\n However, GPT-4o's faster speed and time to first token (TTFT) make it a superior choice for voice AI startups where latency is critical.\nn As AI technology continues to evolve, choosing the right model will depend on the specific needs of each application, but both models are strong candidates for driving innovation in natural language processing and AI solutions.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "New LLMs are released almost weekly. These models, whether open-sourced or flagship, each have unique strengths. Some excel in generating low-cost conversational chatbots, while others are adept at coding or producing high-quality written content.\n\n In this blog, we will delve into using benchmarks to evaluate LLMs. You'll learn how to compare the performance of models across different benchmarks, enabling you to select the most suitable LLM for your specific AI applications.\n\n Before we dive into the benchmarks, check the LLM Leaderboard if you need the best overall model, regardless of cost or speed. It highlights top-performing models, helping you quickly find the most advanced options.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/rank.jpg",
          caption: "LLM Leaderboard",
          captionURL:
            "https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 2,
        text: "At the end of this blog, I'll demonstrate how to utilize all mainstream LLMs through a single platform or API call. \n- Mathematical Benchmarks \n- General Knowledge & Question Answering Benchmarks \n- Coding Benchmarks \n-  Logical Reasoning Benchmarks",
      },
      {
        id: 3,
        primary_title: "Mathematical Benchmarks",
        text: "**[GSM-8K (Grade School Math 8K)](https://github.com/openai/grade-school-math)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/gsm8k.jpg",
          caption: "GSM8K",
          captionURL:
            "https://paperswithcode.com/sota/arithmetic-reasoning-on-gsm8k",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "GSM-8K tests a model's ability to solve grade-school level math problems, focusing on numerical reasoning and understanding of elementary concepts. The dataset includes 8,500 math word problems that require 2 to 8 steps to solve, using basic arithmetic, algebra, and geometry. The final score is the percentage of correctly answered questions.",
      },
      {
        id: 5,
        text: "**[MATH](https://github.com/hendrycks/math)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/math.jpg",
          caption: "MATH",
          captionURL:
            "https://paperswithcode.com/sota/math-word-problem-solving-on-math",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "MATH is a benchmark with 12,500 challenging competition-level math problems, each accompanied by a detailed step-by-step solution. It assesses a model's ability to solve advanced math problems across five difficulty levels and seven sub-disciplines, including algebra, calculus, and statistics. The benchmark emphasizes the importance of detailed answer derivations and explanations.",
      },
      {
        id: 7,
        primary_title: "General Knowledge & Question Answering Benchmarks",
        text: "**[MMLU: Better Benchmarking for LLM Language Understanding](https://arxiv.org/pdf/2009.03300)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/mmlu.jpg",
          caption: "MMLU",
          captionURL:
            "https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "MMLU is a comprehensive benchmark designed to evaluate an LLM’s natural language understanding (NLU) and problem-solving abilities across diverse subjects. It comprises 15,908 questions divided into 57 tasks, covering STEM, humanities, social sciences, and other topics from elementary to professional levels. This benchmark assesses a model's ability to integrate and apply knowledge nuancedly rather than just factual recall.\n\n **Limitations of MMLU** \n\n MMLU has some limitations, including missing context in questions, ambiguous or incorrect answers, and errors in the dataset. Additionally, there is limited information on how the corpus was constructed, underscoring the need for more reliable benchmarking standards",
      },
      {
        id: 9,
        text: "**[TriviaQA](https://arxiv.org/pdf/2109.07958)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/trivia.jpg",
          caption: "TriviaQA",
          captionURL:
            "https://paperswithcode.com/sota/question-answering-on-triviaqa",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        text: "TriviaQA measures a language model's ability to generate truthful answers. It includes questions that humans often answer incorrectly due to false beliefs. Models must avoid replicating these errors. Larger models can be less truthful due to ingesting more false information. The challenge is to use provided documents to find and verify correct answers to trivia questions across various topics.",
      },
      {
        id: 11,
        primary_title: "Coding Benchmarks",
        text: "**[HumanEval](https://github.com/openai/human-eval)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/humaneval.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 12,
        text: "HumanEval, created by OpenAI, evaluates LLMs' ability to generate functional and correct Python code. It includes 164 hand-crafted programming challenges with unit tests and uses the pass@k metric to assess code correctness. This benchmark is crucial for measuring LLM performance in code generation tasks. \n\n **Limitations of HumanEval** \n\n Despite its significance, HumanEval has limitations. It mainly focuses on algorithmic problems, missing the complexity of real-world tasks. It doesn't test for writing tests, code explanation, or docstring generation; its unit tests can be weak. Additionally, biases and potential data exposure during training can overestimate model performance.",
      },
      {
        id: 13,
        text: "**[MBPP (Mostly Basic Python Programming)](https://arxiv.org/pdf/2108.07732)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/mbpp.jpg",
          caption: "MBPP",
          captionURL: "https://paperswithcode.com/sota/code-generation-on-mbpp",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 14,
        text: "The Mostly Basic Programming Problems (MBPP) benchmark evaluates LLMs' ability to generate short Python programs from natural language descriptions. The dataset includes 974 entry-level programming tasks, each with a task description, code solution, and three automated test cases for functional correctness. MBPP covers more problems than HumanEval and consistently includes three input/output examples formatted as assert statements. This makes it a valuable tool for assessing both the correctness and efficiency of code generated by LLMs.",
      },
      {
        id: 15,
        primary_title: "Logical Reasoning Benchmarks",
        text: "**[HellaSwag](https://github.com/rowanz/hellaswag)**",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/hellaswag.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 16,
        text: "HellaSwag tests LLMs' commonsense reasoning through sentence completion tasks. Each question includes a video caption segment and four possible endings, with only one correct. Designed to challenge models, the scenarios are easy for humans but difficult for LLMs. Created using adversarial filtering, HellaSwag ensures complex and deceptive wrong answers to test models' everyday knowledge understanding.\n\n **Limitations of HellaSwag**  \n\n HellaSwag struggles with nuanced contextual ambiguity, which can affect the accuracy of its results. Moreover, it focuses on general knowledge and does not adequately test commonsense reasoning in specialized domains.",
      },
      {
        id: 17,
        text: "**[AI2 Reasoning Challenge (ARC)](https://arxiv.org/abs/1803.05457)** \n\n The AI2 Reasoning Challenge (ARC) is a QA benchmark designed to test LLMs' knowledge and reasoning skills using 7787 multiple-choice science questions for grades 3 to 9. Divided into Easy and Challenge sets, these questions cover various types of knowledge, including factual, spatial, experimental, and algebraic.\n\n Unlike benchmarks like SQuAD, ARC requires models to use distributed evidence and reasoning rather than merely extracting answers from text. This makes ARC a more comprehensive and difficult benchmark for evaluating language models. However, it only has scientific questions.",
      },
      {
        id: 18,
        primary_title: "Where to Evaluate and Integrate Best-in-Class LLMs?",
        image: {
          id: 1,
          url: "/images/blog_Images/blog4/playground.jpg",
          caption: "Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 19,
        text: "After selecting your desired LLMs based on specific benchmarks, testing them to ensure they meet your requirements is important, as benchmarks can have biases or be incomplete. Visit the Keywords AI LLM playground to compare different models' performance. \n\n Once you manually evaluate the models, you can integrate them into your codebase using the Keywords AI OpenAI-compatible API.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "What are LLM hallucinations?",
        text: "Hallucinations in LLMs occur when they generate incorrect, nonsensical, or irrelevant content. These issues arise from the models' reliance on statistical patterns rather than true understanding, leading to misinformation and reducing trust in their outputs. Addressing these hallucinations is crucial for improving the accuracy and reliability of LLMs.",
      },
      {
        id: 2,
        primary_title: "Why LLMs hallucinate",
        text: "- **Ambiguous Prompts:** When prompts are too broad or vague, LLMs may misinterpret the user's intentions, leading to irrelevant or incorrect content generation. \n- **Insufficient Training Data:** LLMs trained on small or low-quality datasets may lack a robust understanding of language relationships, leading to inaccurate or irrelevant outputs.\n- **Lack of domain knowledge:** LLMs may produce hallucinations when they encounter topics outside their training data's scope, leading to gaps in understanding and erroneous information.",
      },
      {
        id: 3,
        primary_title: "How to detect LLM hallucinations?",
        text: "- **Human evaluation:** Manual review by people can effectively identify inaccuracies and irrelevant information in LLM outputs. However, this method is time-consuming and subject to human bias, making it less practical for large-scale evaluations.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/hallucination.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 4,
        text: "- **LLM-as-a-Judge:** An LLM evaluates another LLM's outputs by measuring consistency or rating them on a scale. This automates detection but depends on the evaluator model's accuracy.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/evaluation.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 5,
        primary_title: "Ways to Stop LLM Hallucinations",
        text: "- **Advanced Prompting** \n- **Retrieval Augmented Generation (RAG)**  \n- **Fine-tuning** ",
      },
      {
        id: 6,
        primary_title: "Advanced Prompting",
        image: {
          id: 1,
          url: "/images/blog_Images/blog5/prompt.jpg",
          caption: "Keywords AI Prompts management",
          captionURL: "https://platform.keywordsai.co/platform",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: 'Advanced prompting techniques guide LLMs to generate more accurate and coherent responses. Using specific, detailed prompts helps reduce irrelevant or incorrect outputs. Instructional prompts with clear examples of the desired format and style further align the model\'s responses with the expected outcome. \n\n Prompt engineering, the design, and refinement of instructions is crucial for reliable results. Explicit instructions and contextual cues in prompts reduce ambiguity, while system prompts like "Please only provide accurate and verifiable information" ensure the model produces trustworthy content. \n\n Utilizing prompt management tools can also be beneficial for creating high-quality prompts. There are many such tools available that effectively test and refine prompts, helping to achieve the best possible results.',
      },
      {
        id: 9,
        primary_title: "Retrieval Augmented Generation (RAG)",
        text: "Retrieval-augmented generation (RAG) enhances the accuracy and relevance of LLM outputs by combining generative capabilities with information retrieval methods. This approach grounds the model's responses in real, verifiable data, reducing the likelihood of hallucinations.\n\n Despite its benefits, challenges remain in ensuring LLMs do not produce content misaligned with the retrieved information. Tools like the Retrieval-Augmented Generation Benchmark (RGB) and RAGTruth are instrumental in addressing these challenges, helping quantify and minimize hallucinations by providing comprehensive evaluation frameworks.\n\n RAG is particularly useful in applications such as question-answering chatbots, search engines, and knowledge bases, where accuracy and context awareness are crucial. RAG ensures real-time accuracy and relevance in responses by integrating a retrieval system that searches a vector database for relevant data. This method also includes extending prompts with additional context from databases or APIs, further reducing hallucinations and enhancing the reliability of LLM outputs.",
      },
      {
        id: 10,
        primary_title: "Fine-Tuning",
        text: "Fine-tuning adjusts the learned patterns of an LLM to align closely with the specific nuances, vocabulary, and factual information of a new context, improving accuracy and relevance. By training the LLM on a curated dataset, fine-tuning updates its knowledge base, mitigating the propagation of errors or outdated information from its broader pretraining.\n\nThis process enhances the model's ability to generate factually correct, contextual, and coherent responses within a specific domain, significantly reducing the likelihood of hallucinations.\n\n Fine-tuning is particularly effective for standardized tasks with sufficient training data. It involves collecting many high-quality prompt/completion pairs and experimenting with different foundation models and hyperparameters, such as learning rate and number of epochs, to achieve the best results for your use case. This focused approach refines the model’s precision and minimizes its tendency to generate incorrect or baseless information, ensuring more reliable outputs.",
      },
      {
        id: 11,
        primary_title: "Conclusion",
        text: "To effectively address LLM hallucinations, it's essential to tackle root causes such as ambiguous prompts, insufficient training data, and gaps in domain knowledge. Detection methods like human evaluation and LLM-based assessment offer varying degrees of reliability and scalability.\n\n Mitigation strategies involve advanced prompting for clarity, retrieval augmented generation (RAG) to bolster accuracy with external data, and fine-tuning to tailor models to specific contexts, collectively enhancing the reliability and trustworthiness of AI-generated outputs.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Exploring the capabilities of LLMs has become more accessible and exciting in 2024, thanks to various innovative playgrounds. Whether you're a developer, researcher, or AI enthusiast, having the right platform can significantly enhance your work with LLMs. \n\n In this blog, we'll introduce you to the 5 best LLM playgrounds of 2024. From versatile platforms supporting a wide range of models to specialized tools with unique features, these playgrounds offer diverse options to suit different needs and preferences. Dive in to discover the top tools that can help you unlock new possibilities in the world of AI.",
      },
      {
        id: 2,
        primary_title: "Vercel AI ⭐️⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/vercel_playground.jpg",
          caption: "Vercel AI Playground",
          captionURL: "https://sdk.vercel.ai/",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 3,
        text: "Vercel AI offers an **[impressive playground](https://sdk.vercel.ai/)** for those looking to experiment with mainstream LLMs such as Llama-3, Claude-3.5, and GPT-4.0. One of its standout features is the ability to compare the performance of different models using the same prompt or test various prompts across multiple models simultaneously. This flexibility is particularly valuable for users who must test and evaluate multiple models in a single session.\n\n However, access to Anthropic and other flagship models is restricted to pro users, which requires a subscription of $20/month. While Vercel Playground supports image uploading, it lacks a view code panel, making it less friendly for users who wish to integrate models into their codebase. Additionally, it does not integrate with other popular LLMs, such as Cohere Command-R and the Qwen family, limiting its versatility for users who rely on these models.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/vercel_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Keywords AI ⭐️⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/keywordsai.jpg",
          caption: "Keywords AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 5,
        text: "Keywords AI is a unified DevOps platform where developers can access over 200 LLMs and monitor their performance in production. [The Keywords AI LLM playground](https://keywordsai.co) allows users to choose any two of these models to compare their performance. Users can also customize settings such as temperature, Top P, and variants, enabling models to generate multiple responses based on a single prompt. \n\nThe platform provides a dedicated View Code feature for seamless integration in OpenAI, Anthropic, or Langchain formats. It also supports file and image uploading, making it versatile for various testing scenarios. \n\nDespite these strengths, the playground does not support comparing more than two models simultaneously, and users cannot add function calling within the playground.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/keywordsai_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        primary_title: "Fireworks AI ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/fireworks.jpg",
          caption: "Fireworks AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 7,
        text: "Fireworks AI playground supports various open-source LLMs that they host. Users can test these models and easily integrate them into their projects by copying the integration code from the View Code panel. Additionally, users can customize settings such as temperature, stop words, and function calling, making it a versatile tool for fine-tuning model behavior.\n\n However, despite its usage-based pricing being affordable for common use cases, users must add a credit card to get started. The playground does not support image uploading, and users can only experiment with models hosted by Fireworks, meaning they can't try models from OpenAI, Anthropic, and Google. Furthermore, it only allows users to test a single model at a time, which is inconvenient when comparing models' performance.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/fireworks_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Together AI ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/together.jpg",
          caption: "Together AI Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 9,
        text: "The Together AI playground is quite similar to Fireworks AI but offers more extensive support for open-source models. It includes additional settings such as System prompt and Safety Models, giving users more control over model behavior and safety parameters.\n\n Despite these advantages, it does not support models from providers like OpenAI and Anthropic. Additionally, users cannot compare multiple models simultaneously, limiting its functionality for side-by-side performance evaluation.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/together_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        primary_title: "LMSYS Chatbot Arena ⭐️⭐️⭐️⭐️",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/chat.jpg",
          caption: "LMSYS Playground",
          props: {
            variant: "lg",
          },
        },
      },
      {
        id: 11,
        text: "The LMSYS Chatbot Arena playground is completely free for public use and supports 51 mainstream LLMs. It allows users to compare the performance of two models simultaneously, making it a highly cost-effective option for testing models in simple use cases.\n\n However, this playground is limited in its capabilities and does not support system prompts, metric settings, or image uploading, which restricts its usability for more complex scenarios.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog6/chat_pros.jpg",
          props: {
            variant: "md",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: 'In today\'s tech-driven world, Large Language Models (LLMs) are increasingly vital. By 2025, an estimated 750 million apps will utilize LLMs, significantly boosting content generation and efficiency. \n\nAs the reliance on LLMs grows, so does the need to control and improve the quality of their outputs. One innovative approach to achieving this is using LLMs as evaluators, or "LLM-as-a-judge." \n\n In this blog, we’ll delve into 3 essential LLM evaluation metrics and introduce frameworks and platforms you can use to assess the performance of your LLMs effectively.',
      },
      {
        id: 2,
        primary_title: "3 Essential LLM evaluation metrics",
        text: "**Correctness** \n\n Correctness assesses how accurately the generated answer matches the ground truth, considering both semantic and factual similarities. Key metrics include ROUGE-L, Token Overlap, and BLEU, which collectively measure precision, recall, and F1 score.\n\n **Answer Relevancy** \n\n Answer relevancy evaluates the pertinence of the generated answer to the given prompt, with higher scores for more relevant responses. This metric considers the question, context, and answer to ensure the output is informative and concise.\n\n  **Hallucination** \n\n Hallucination determines if the LLM output contains made-up information, while faithfulness measures the factual consistency of the answer against the given context. An answer is deemed faithful if all its claims can be inferred from the context, with higher scores indicating better faithfulness.",
      },
      {
        id: 3,
        primary_title: "Conventional Evaluation Scores",
        text: " - **BLEU (Bilingual Evaluation Understudy):** The BLEU scorer evaluates the output of your LLM application against annotated ground truths (expected outputs). It calculates the precision for each matching n-gram (n consecutive words) between the generated and expected outputs, determining their geometric mean and applying a brevity penalty if needed. \n - **ROUGE (Recall-Oriented Understudy for Gisting Evaluation):** ROUGE evaluates text summaries by comparing n-gram overlaps between LLM outputs and expected outputs. Key variants include ROUGE-L, which measures the longest common subsequence (LCS) reflecting sentence-level word order; ROUGE-N, which assesses unigram, bigram, trigram, and higher-order n-gram overlap; and ROUGE-S, which evaluates skip-gram concurrence allowing for arbitrary gaps between words. These metrics provide a comprehensive evaluation of text similarity and relevance.\n - **BERTScore**: it leverages pre-trained contextual embeddings from BERT to match words in candidate and reference sentences by cosine similarity. Emerging as an alternative to traditional evaluation metrics, BERTScore is particularly useful for evaluating the quality of text summarization by measuring the similarity between the text summary and the original text. ",
      },
      {
        id: 4,
        primary_title: "LLM-as-a-judge",
        text: "Evaluating LLM outputs programmatically can be challenging due to a lack of good metrics, especially for generative tasks. LLM-as-a-Judge leverages LLMs to score outputs, offering an alternative to human labels when programmatic evaluation is difficult. This method is particularly useful for detecting hallucinations, assessing correctness, and identifying toxic or inappropriate answers. \n\n LLM-as-a-Judge uses LLMs to evaluate outputs based on criteria such as accuracy, toxicity, and hallucinations. The process involves creating evaluation prompts, selecting a suitable LLM, and generating evaluations across datasets. This approach provides consistent assessments, accelerates the iteration process, and enables quick refinements without manual annotation. ",
      },
      {
        id: 5,
        primary_title: "Evaluation frameworks",
        text: "- [Relari AI](https://www.relari.ai/): Relari AI (YC W24) develops testing and simulation tools for GenAI applications, including the continuous-eval framework and a cloud platform for synthetic data and auto-evaluators. Ragas: A framework that helps us evaluate our Retrieval Augmented Generation (RAG) pipeline \n- [Ragas](https://ragas.io): A framework that helps us evaluate our Retrieval Augmented Generation (RAG) pipeline",
      },
      {
        id: 6,
        primary_title: "LLM Evaluation platforms",
        text: "The frameworks above ensure high-quality LLM outputs, but it's also crucial to have observability and control over the evaluation process. [Keywords AI]{https://keywordsai.co} offers a comprehensive platform that integrates Relari AI, providing both an evaluation framework and observability. This platform allows you to choose from existing metrics or create your own to evaluate LLM outputs.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/evaluation_main.jpg",
          caption: "Keywords AI LLM evaluation",
          captionURL: "https://platform.keywordsai.co/platform/api/evaluations",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "You can select any model to evaluate your LLM output or use conventional evaluation methods.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/metric.jpg",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 8,
        text: "You can also monitor your LLM's performance through evaluation graphs displayed on the dashboard.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog7/graph.jpg",
          props: {
            variant: "sm",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Previously, we discussed [methods to prevent LLM hallucinations](https://keywordsai.co/#/blog/how-to-stop-llm-hallucinations), highlighting three main strategies: advanced prompting, retrieval-augmented generation (RAG), and fine-tuning. In this blog, we'll focus on fine-tuning large language models (LLMs) and guide you through creating a custom dataset for this purpose.",
      },
      {
        id: 2,
        primary_title: "What is LLM fine-tuning?",
        text: "Fine-tuning large language models (LLMs) involves training a pre-existing model, like GPT-3, on a smaller, specific dataset to make it better at specialized tasks. This process uses the model's existing knowledge, saving time and resources compared to training a model from scratch.\n\n By fine-tuning, we can adapt a general model to specific needs. For example, GPT-3 can be fine-tuned with medical reports to help it understand and generate accurate medical content. This makes the model more useful for particular applications, improving its performance in specialized areas while retaining its broad language skills.",
      },
      {
        id: 3,
        primary_title: "When to fine-tune",
        text: "Fine-tuning is particularly useful in several situations:\n\n - **Specializing in a Specific Domain:** When you need the model to handle specialized content, like legal documents, medical reports, or technical jargon, fine-tuning helps the model become proficient in that area. \n- **Improving Task Performance:** Fine-tuning the model with relevant data improves performance and output quality if you're working on a specific task, such as generating creative writing or translating languages. \n- **Customizing Outputs:** Fine-tuning allows you to adjust the model’s tone, style, or level of detail to match your specific needs, such as creating a distinct voice for content or ensuring appropriate formality in communication. \n- **Adapting to Changing Data:** When the data distribution shifts over time, fine-tuning helps the model stay accurate and relevant, ensuring it performs well with new data. \n- **Enhancing Privacy and Fairness:** Fine-tuning can focus on improving privacy and security for applications that handle sensitive information. Additionally, it can help mitigate biases by using balanced datasets to train the model, promoting fairness. \n\n In essence, fine-tuning is beneficial when you must tailor a general model to meet specific requirements, enhance its task performance, customize its outputs, adapt to new data, or improve its handling of privacy and fairness issues.",
      },
      {
        id: 4,
        primary_title: "Steps of Fine-Tuning",
        text: "There are key steps for developers to fine-tune a Large Language Model (LLM):\n\n - **Select a Pre-Trained Model:** Previously, GPT-3 was the primary choice for fine-tuning due to its performance and limited alternatives. However, as of mid-2024, numerous models are available, each with its own strengths. Options now include Mistral-7B, Cohere Command-R, Meta LLaMA 2, and GPT-4. \n- **Prepare your custom dataset:** Gather a dataset relevant to your specific task or domain. Once you have the raw data, preprocess it by cleaning and organizing it. This includes splitting the dataset into training and testing sets to ensure the model can learn effectively and be appropriately evaluated. \n- **Fine-tuning:** Choose a fine-tuning platform to train your model or opt to train it in-house, depending on your resources and requirements. \n- **Validation:** Fine-tuning a model is an ongoing process. Continuously monitor its performance using accuracy, loss, and precision metrics. Adjust parameters as needed to optimize the model for your specific task, ensuring it meets your desired performance standards.",
      },
      {
        id: 4,
        primary_title: "Methods for fine-tuning LLMs",
        text: "Fine-tuning a Large Language Model (LLM) involves a supervised learning process where labeled examples adjust the model’s weights to enhance its proficiency in specific tasks. Here are some notable techniques used in fine-tuning: \n\n **Full Fine-Tuning (Instruction Fine-Tuning)** \n\n Instruction fine-tuning, or full fine-tuning, updates all the model's weights to improve its performance across various tasks. This technique involves training the model on examples that guide its responses to specific queries. The dataset used is tailored to the task at hand, such as summarization or translation. Full fine-tuning creates a new version of the model with enhanced capabilities, but it requires significant memory and computational resources, similar to pre-training, to store and process gradients, optimizers, and other components during training. \n\n **Parameter-Efficient Fine-Tuning (PEFT)** Parameter-efficient fine-tuning (PEFT) is more resource-efficient than full fine-tuning. It addresses the challenge of high memory and computational requirements by updating only a subset of the model's parameters and \"freezing\" the rest. This reduces the number of trainable parameters, making memory requirements more manageable and preventing catastrophic forgetting, where the model loses previously learned information. PEFT maintains the original LLM weights, ensuring the retention of general knowledge while fine-tuning for specific tasks. Techniques like Low-Rank Adaptation (LoRA) and Quantized LoRA (QLoRA) are popular and effective methods within PEFT, significantly reducing the number of trainable parameters and optimizing the fine-tuning process.",
      },
      {
        id: 5,
        primary_title: "How to have your own golden dataset?",
        text: "Having the right dataset is crucial for effective fine-tuning. However, selecting the most appropriate one can be challenging. Here are two methods to obtain a suitable dataset:",
      },
      {
        id: 6,
        text: "**Pick an existing dataset** \n\n There are numerous existing datasets available for developers to use in fine-tuning models. You can choose one based on your specific use case. Here are some high-quality examples: \n\n - [Nectar](https://huggingface.co/datasets/berkeley-nest/Nectar) \n- [SlimOrca](https://huggingface.co/datasets/Open-Orca/SlimOrca) \n- [openhermes](https://huggingface.co/datasets/teknium/openhermes)",
      },
      {
        id: 7,
        text: "**Customize a Dataset Based on Your Specific Needs** \n\n Sometimes, existing datasets won’t meet your specific requirements, or you may want to transition from using public models to a custom model for tasks like developing a specialized chatbot for your website or a unique coding assistant for your AI product. In such cases, you need to create a customized dataset using your own data. This involves collecting and labeling relevant data for your use case, ensuring it aligns perfectly with your tasks and objectives. ",
      },
      {
        id: 8,
        text: "**Example**\n\n  You can use [Keywords AI](https://keywordsai.co) to collect and analyze your LLM logs, tagging them for easy filtering. Once your request logs are recorded, you can edit them to create a dataset for fine-tuning models. \n\n For example, you can search for logs related to math and gather them into a new dataset. You can then edit and delete logs as needed to ensure your dataset is optimized for the best performance.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog8/dataset.jpg",
          caption: "Keywords AI",
          captionURL: "https://keywordsai.co",
          props: {
            variant: "lg",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "With the rapid advancements in artificial intelligence, new language models are emerging every week, each offering unique strengths and capabilities. Navigating this ever-evolving landscape can be challenging, especially when identifying the best large language model (LLM) for specific use cases.\n\nIn this blog, we will explore the top 5 LLMs for 5 different fields. After spending a weekend testing over 100 LLMs and considering our users' preferences and use cases, along with data from Huggingface, we have compiled a comprehensive guide to help you choose the right LLM for your needs.",
      },
      {
        id: 2,
        primary_title: "Coding",
        text: "- **Claude 3.5 Sonnet:** Anthropic’s latest flagship model, leading [the LMSYS Arena Leaderboard’s Coding category](https://chat.lmsys.org/). It surpasses every existing LLMs, becoming our team's primary coding assistant, replacing GPT-4o. \n- **GPT-4-Turbo-2024-04-09:** OpenAI's top choice for coding, solving most problems efficiently. Its drawback is the pricing, which is double that of GPT-4o.\n- **GPT-4o-2024-05-13:** OpenAI's flagship model, though slightly less proficient in coding than GPT-4-Turbo. It solves most daily coding issues but tends to repeat code. However, its speed makes it ideal for AI coding assistants. \n- **Gemini 1.5 Pro:** Google's latest, highly capable model for coding. Comparable to GPT-4o in performance, its limited public availability restricts high-volume usage. \n- **Claude 3 Opus:** Anthropic’s previous flagship model is on par with GPT-4-Turbo in performance but is currently too expensive to recommend. ($15 / 1M input tokens, $75 / 1M output tokens)",
      },
      {
        id: 3,
        primary_title: "Content Creation",
        text: "- **Claude 3.5 Sonnet:** Anthropic’s premier model excels in generating high-quality content. It was one of the top performers in script writing, demonstrating strong capabilities in producing detailed and coherent drafts. **Best for: script writing, storytelling, and creative content.** \n- **Llama 3 70b Instruct:** Meta’s open-source LLM, Llama-3–70b, is currently the best open-source LLM available. It is known for its thorough outlines, ability to learn from reference texts, and high-quality text generation. Llama-3–70b’s nuanced responses and attention to detail make it stand out among competitors. **Best for: blog writing, detailed articles, and technical documentation.** \n- **GPT-4o-2024-05-13:** OpenAI's most powerful LLM for content creation. It generates high-quality content and understands prompts clearly. It shines particularly when integrated with ChatGPT, allowing users to utilize a wide range of tools for enhanced functionality. **Best for: versatile content creation and email writing.** \n- **Gemini 1.5 Pro:** A top contender from Google, Gemini 1.5 Pro performed exceptionally well in script writing, matching the capabilities of Llama-3–70b and Claude-3-Sonnet. Its nuanced responses and attention to detail make it a strong choice for content creation tasks. **Best for: comprehensive reports, story development, and academic writing.** \n- **Mistral Large:** Another strong performer in the content creation field, Mistral Large offers robust capabilities in generating quality content. Though not as widely recognized as some competitors, it produces coherent, detailed text. **Best for: general content creation, marketing copy, and social media posts.**",
      },
      {
        id: 4,
        primary_title: "Translation",
        text: "- **Claude 3.5 Sonnet:** This model is widely used by many AI language translators due to its excellent performance across most languages and cost-effectiveness. **Best for: Spanish, German, and general multilingual translations.** \n- **GPT-4o-2024-05-13:** OpenAI's powerful model supports multiple languages and excels particularly in translating Chinese, French, German, and Spanish. **Best for: Chinese, French, German, and Spanish translations, especially where speed and accuracy are crucial.** \n- **Gemini Pro:** Known for its strong performance in French translations, Gemini Pro is also a reliable choice for other languages. **Best for: French translations and versatile multilingual tasks.** \n- **Llama 3 70b Instruct:** Meta’s open-source LLM supports multiple languages, with notable proficiency in Spanish. **Best for: Spanish translations and open-source multilingual projects.** \n- **Gemini 1.5 Pro:** This model excels in translating Chinese, French, and German, making it a top choice for these languages. **Best for: Chinese, French, and German translations, particularly in professional and technical contexts.**",
      },
      {
        id: 5,
        primary_title: "Long Text Summarization",
        text: "- **Claude 3.5 Sonnet:** With a large context window of 200K, this model matches the performance of Opus but at a quarter of the cost. Its max output token limit is 4096 tokens. **Best for: summarizing extensive documents and articles where cost-effectiveness is important.** \n- **GPT-4o-2024-05-13:** Featuring a 100K context window, GPT-4o is exceptionally fast and consistently accurate, rarely hallucinating. **Best for: reliable and speedy summarization of lengthy texts with minimal errors.** \n- **Command R+:** The top choice for local deployment, Command R+ excels at structuring and organizing summaries. It effectively splits layers of abstraction and formats topics coherently. **Best for: local summarization tasks requiring detailed and well-structured outputs.** \n- **Gemini 1.5 Pro:** With a 100K context length and incredible speed, Gemini 1.5 Pro can summarize thousands of pages within a minute. **Best for: rapid summarization of very large documents, such as multi-thousand-page PDFs.** \n- **Gemini 1.5 Flash:** Google’s cost-effective and extremely fast model, though not as reliable as Gemini 1.5 Pro. **Best for: quick summarization tasks where cost and speed are prioritized over reliability.**",
      },
      {
        id: 6,
        primary_title: "Document Processing",
        text: "- **Claude 3.5 Sonnet:** This model excels in extracting detailed information from complex documents, handling intricate data with impressive precision. Its performance in processing financial data and other detailed documents stands out. **Best for: detailed financial data extraction, complex document analysis, and precise information retrieval.** \n- **GPT-4o-2024-05-13:** GPT-4o is a robust model for document processing, offering a wide range of capabilities. It effectively summarizes reports and extracts key information, although it may occasionally miss some details in more intricate tasks. **Best for: general document processing, summarizing reports, and extracting key information from standard documents.** \n- **Claude 3 Haiku:** Priced attractively, Haiku offers the best value among visual language models. It provides low-cost outputs with commendable performance, particularly suitable for tasks requiring visual language processing. **Best for: cost-effective document analysis, visual data processing, and tasks requiring multimodal capabilities.** \n- **Qwen-VL:** As a leading open-source model, Qwen-VL excels in extracting text from images and providing insightful responses. It supports high-definition images and various aspect ratios, making it highly versatile. **Best for: image-based text extraction, detailed image analysis, and open-source projects needing robust multimodal processing.** \n- **Gemini 1.5 Flash: While cost-effective and extremely fast, Gemini 1.5 Flash may have some accuracy trade-offs. Best for: rapid document processing tasks where speed and cost are prioritized over absolute precision.**",
      },
      {
        id: 7,
        primary_title: "How to Try Out These Models",
        text: "You can easily explore and test all of these models on Keywords AI’s LLM Playground. This platform allows you to experiment with different language models and seamlessly integrate them into your AI applications, enhancing your projects with the best-suited LLM for your needs.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "As large language model (LLM) products continue proliferating, managing their rate limits becomes increasingly critical for developers. Rate limits for LLMs define the number of requests a user or client can make to the model within a specified timeframe. With the growing demand for these powerful tools, developers face the challenge of ensuring their applications can handle high traffic without running into rate limit constraints. Addressing this issue is essential to prevent customer-facing errors and maintain a seamless user experience. Understanding and enhancing your LLM rate limit is key to optimizing performance and reliability. \n\nIn this blog, we’ll delve into how you can enhance your LLM rate limit and avoid LLM downtime, ensuring optimal performance and reliability for your applications.",
      },
      {
        id: 2,
        primary_title: "Rate Limits of Leading LLM Providers",
        text: "**OpenAI**\n\n OpenAI offers 6 tiers for users, ranging from a free tier to tier 5, each with varying rate limits based on your spending. For instance, if your monthly expenditure is between $500 and $1,000, the rate limit for flagship models like gpt-4o will be 5,000 requests per minute (5,000 RPM).",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/openai.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "**Anthropic**\n\n Anthropic’s rate limits are similar to OpenAI's, with 1 free tier and 4 paid tiers (tiers 1 to 4). At a monthly spending of over $1,000, users can achieve a maximum rate limit of 4,000 RPM and a maximum usage cap of $5,000 per month.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/anthropic.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "**Gemini**\n\n Despite Gemini’s impressive performance for AI products, its rate limits are relatively low. The top model, Gemini 1.5 Pro, supports only 360 requests per minute (RPM), but its tokens per minute (TPM) is significantly higher than those of OpenAI and Anthropic.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/google.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        primary_title:
          "Strategies to Enhance LLM Rate Limits Without Additional Costs",
        text: "**Load balancing between models**\n\n Load balancing between models involves distributing your LLM requests across multiple models proportionally. By utilizing different LLMs with similar performance levels, you can effectively manage and optimize your rate limits. This approach ensures that no single model is overwhelmed, thereby reducing the likelihood of hitting rate limits and maintaining smooth operations. \n\nFor instance, Keywords AI’s load balancing feature allows you to easily control your LLM rate limits by distributing requests among various models. You can use models like Anthropic Haiku, Gemini 1.5 Flash, and GPT-3.5-turbo simultaneously, specifying their weights to balance the load efficiently. \n\nIn the example below, 50% of your requests are directed to Claude 3 Haiku, while 25% go to GPT-3.5-turbo and Gemini 1.5 Flash each:\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/code.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        primary_title: "Load balancing between API keys",
        text: "Sometimes, you may prefer not to distribute your API requests across different models and instead want a single LLM to handle all your requests. In such cases, load balancing between API keys from a single provider is the best solution.\n\n To achieve this, you need to create multiple accounts with a single provider and generate API keys for each account. Then, navigate to the Keywords AI Credential page to add your credentials and specify weights for each deployment.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/lb1.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "You can also add load balancing for any other providers you use on the platform, ensuring optimal management of your rate limits across various credentials. ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog10/lb3.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Additional Strategies to Enhance Your LLM Rate Limits",
        text: "Besides the two primary methods, there are several other ways to enhance your LLM rate limits: \n- **Request Higher Rate Limits from Providers:** If you have a substantial spending history with a provider, you can request them to manually increase your rate limits. This option is viable but typically requires significant expenditure for approval. \n- **Use OpenAI’s Batch API:** For use cases that do not require synchronous processing, OpenAI’s asynchronous Batch API is an excellent option. It offers higher rate limits and is more cost-effective than synchronous processing. However, responses can take up to 24 hours, making it unsuitable for real-time applications. \n- **Build Your Own Load Balancing Solution:** If data privacy is a concern, building your own load balancing solution might be the best route. While this approach ensures full control over your data, it requires significant effort and technical expertise. Leveraging third-party packages can help streamline this process, but it will still demand considerable time and resources.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "Intro",
        text: "On July 18, 2024, OpenAI released GPT-4o Mini, a new, intelligent small model. OpenAI claims that GPT-4o Mini matches the speed of GPT-3.5 Turbo while being significantly smarter and more cost-effective. This means future LLMs will be cheaper and smarter, making cost reduction less of a sustainable business strategy. \n\n Could GPT-4o Mini become the go-to choice for AI companies and developers seeking a balance of cost, speed, and performance? In this blog, I’ll present the test results of GPT-4o Mini show you what’s the best small model for you.",
      },
      {
        id: 2,
        primary_title: "Basic Comparison",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/basic.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "GPT-4o Mini stands out with its cost-effectiveness, extended context window, and ability to handle both text and images, making it a strong contender against its competitors. It offers a compelling balance of price, performance, and versatility, positioning it as an attractive option for AI developers and companies.",
      },
      {
        id: 4,
        primary_title: "Speed comparison",
        text: "**Latency**\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/latency.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        text: "From the graph, we can conclude that GPT-3.5 Turbo and Claude-3 Haiku have the lowest latency, making them the fastest in response time. GPT-4o Mini performs better than Gemini-1.5 Flash but lags behind the top two models.",
      },
      {
        id: 6,
        text: "**TTFT (Time to first token)**\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/ttft.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "Gemini-1.5 Flash has an incredible TTFT, clocking in at under 0.2 seconds. This is particularly impressive and highlights its efficiency for applications requiring rapid initial responses. However, GPT-4o Mini has the longest TTFT, indicating it may not be suitable for voice AI applications where immediate feedback is critical.",
      },
      {
        id: 8,
        text: "**Throughput (Tokens per second)** ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/throughput.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "GPT-4o Mini is on par with GPT-3.5 Turbo, both delivering around 80 tokens per second. Claude-3 Haiku, however, leads the pack with a throughput of 165 tokens per second, making it the fastest model in terms of token generation speed.\n\n In terms of speed, GPT-4o Mini shows competitive latency and throughput but falls behind in TTFT compared to its rivals. While it performs well in latency and token generation, its slower TTFT suggests it may not yet be ideal for applications where immediate responses are crucial, such as voice AI. However, its overall performance indicates it is still a strong contender in the market, particularly for tasks where latency and throughput are more critical than initial response time.",
      },
      {
        id: 10,
        primary_title: "Performance comparison",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/performance.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 11,
        text: "According to OpenAI's official model evaluation scores, GPT-4o Mini outperforms all other small models and is second only to GPT-4o.\n\n  We also conducted evaluation tests on the [Keywords AI platform](https://www.keywordsai.co). The evaluation comprised three parts: \n- **Coding Task:** We used the four models to debug the frontend development of Keywords AI. Both Claude-3 Haiku and GPT-4o Mini solved most bugs in zero shots and all bugs within three shots. \n- **Document Processing:** We provided large documents (around 100 pages) for the models to process. Gemini-1.5 Flash had the fastest processing speed with good performance. Claude-3 Haiku and GPT-4o Mini demonstrated the best performance, showing minimal hallucinations throughout the process. \n- **Logical Reasoning:** Claude-3 Haiku and GPT-4o Mini excelled in this task, easily solving complex problems across multiple domains. \n\n The evaluation metrics results are as follows:",
        image: {
          id: 1,
          url: "/images/blog_Images/blog11/evaluation.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 12,
        text: "GPT-4o Mini excels in multiple evaluation metrics, showcasing its superior performance in context precision, faithfulness, readability, and relevance. It particularly stands out in coding tasks and logical reasoning, making it a robust choice for diverse applications.",
      },
      {
        id: 13,
        primary_title: "Conclusion",
        text: "In this comprehensive analysis, we have evaluated the performance, speed, and cost of several leading language models, including Claude-3 Haiku, GPT-4o Mini, GPT-3.5 Turbo, and Gemini 1.5 Flash. Each model brings unique strengths to the table, making them suitable for different applications.",
      },
      {
        id: 14,
        primary_title: "Recommendations:",
        text: "**GPT-4o mini:** \n- **Best For:** Developers and AI companies seeking a balance of cost, speed, and performance. \n- **Strengths:** Superior context precision, faithfulness, and relevance. It performs exceptionally well in coding tasks and logical reasoning, making it an excellent choice for complex problem-solving and technical applications.\n\n **Claude-3 Haiku:** \n- **Best For:** Applications requiring fast response times and high throughput. \n- **Strengths:** Lowest latency and highest throughput among the tested models. Excels in coding tasks and logical reasoning, providing reliable performance with minimal hallucinations in document processing. \n\n **GPT-3.5 Turbo:**   \n- **Recommendation:** Switch to GPT-4o Mini. \n- **Reasons:** GPT-4o Mini offers a longer output length, a more recent knowledge cutoff, and overall improved performance. It's a more cost-effective and advanced choice for most applications, making it a better investment in the long term. \n\n**Gemini 1.5 Flash:** \n- **Best For:** Scenarios requiring the fastest TTFT and high processing speed for large documents. \n- **Strengths:** Incredible TTFT, making it ideal for applications where immediate response is critical. Strong performance in document processing, though it has a higher latency compared to others. \n\n In conclusion, while GPT-4o Mini emerges as a robust and versatile model, the choice ultimately depends on your specific needs and priorities. Evaluate your requirements based on cost, speed, and performance to select the most suitable model for your applications.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Last September, [Andy](https://www.linkedin.com/in/hanheli/) came across a paper that introduced the concept of [FrugalGPT](https://arxiv.org/abs/2305.05176). This paper presented a method for reducing the cost of using Large Language Models (LLMs) while maintaining comparable performance by leveraging various smaller models.\n\n Inspired by FrugalGPT, we quickly turned theory into practice. [Raymond](https://www.linkedin.com/in/yunrui-huang/) developed a Minimum Viable Product (MVP) for an LLM router in just one week, followed by a front-end implementation the next week. Remarkably, we secured our first customer by week three. \n\n This blog post will guide you through our journey of building the LLM router MVP and provide insights on how you can create your own.",
      },
      {
        id: 2,
        primary_title: "What is FrugalGPT?",
        text: "**FrugalGPT** is a framework designed to reduce the costs of using Large Language Models (LLMs) while maintaining or improving performance. It employs three strategies: \n- **Prompt Adaptation:** Reducing the length of prompts to save costs. \n- **LLM Approximation:** Using cheaper models or caching responses to approximate expensive LLMs. \n- **LLM Cascade:** Sequentially querying different LLMs, starting with cheaper ones and only using expensive models if necessary. \n\n FrugalGPT can significantly cut costs (up to 98%) and even enhance accuracy by up to 4% compared to using a single LLM like GPT-4.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog12/graph.png",
          caption: "from FrugalGPT",
          captionURL: "https://arxiv.org/abs/2305.05176",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 3,
        primary_title: "Initial concept of the LLM router",
        text: 'After thoroughly reviewing the FrugalGPT paper, Andy recognized its potential to significantly reduce costs for AI startups and developers. This was particularly relevant to us, as our one-stop job search copilot consumed substantial daily resources on OpenAI. \n\n Our investigation led us to focus on LLM approximation, which we found to be the most practical and efficient strategy for our use case. To rapidly gather user feedback, we created a simplified LLM router integrating only GPT-3.5 Turbo and GPT-4. \n\n At the time, the cost difference between these models was substantial: \n- GPT-4: $30 (input) and $60 (output) per million tokens \n- GPT-3.5 Turbo: $0.5 (input) and $1.5 (output) per million tokens \n\nThis stark contrast highlighted the importance of efficient model selection. After all, you wouldn\'t want your AI application to use the expensive GPT-4 for simple responses like "Hello"! ',
      },
      {
        id: 4,
        primary_title:
          "Developing the MVP: Architecture and Classification System",
        text: 'Our LLM router concept utilizes an embedding model (text-embedding-3-small from OpenAI) to classify input, generate a vector score, and select the most suitable LLM based on that score. To enhance the router\'s model selection capability, we first established our evaluation and model ranking framework. \n\n **Model Ranking System:** \n\n We defined models and their characteristics in our backend:\n\n ```  gpt_4 = ModelParam(model_name="gpt-4", speed=48, max_context_window=8192, model_size=170, mmlu_score=86.4, mt_bench_score=8.96, big_bench_score=83, input_cost=30,output_cost=60, rate_limit=10000, function_call=1)  ```  \n\n ```gpt_3_5_turbo = ModelParam(model_name="gpt-3.5-turbo", speed=150,  max_context_window=4096, model_size=20, mmlu_score=70,  mt_bench_score=7.94, big_bench_score=71.6, input_cost=0.5, output_cost=0.1,function_call=1)```',
      },
      {
        id: 5,
        primary_title: "Classification Categories",
        text: '**1. Difficulty Levels:** \n\n ```difficulty_details = { "1": "This query is just as a greeting or the most basic human interaction.", "2": "This is a simple question that can be answered with a single sentence.", "3": "This question requires a few sentences to answer, probably some logic or reasoning, basic coding question, or short JSON parsing.", "4": "This question requires a paragraph to answer, requires a fair amount of logic and reasoning, coding algorithm, or long JSON parsing.", "5": "This question requires a long answer, intricated logic or reasoning, complicated coding questions, or complicated nested JSON parsing."}   ```',
      },
      {
        id: 6,
        text: '**2. Task Categories:** \n\n ```category_details = { "Writing": "Engaging in narrative and creative text generation.", "Questions": "Responding to inquiries across various topics.", "Math": "Performing calculations and interpreting data.", "Roleplay": "Engaging in simulated dialogues and scenarios.", "Analysis": "Performing sentiment analysis, summarization, and entity recognition.","Creativity": "Generating ideas and concepts in arts and design.", "Coding": "This task requires coding assistants and code generation.", "Education": "Developing learning materials and providing explanations.", "Research": "Conducting online research and compiling information.", "Translation": "Translating text across multiple languages."}```',
      },
      {
        id: 7,
        text: '**3. Input Formats:** \n\n ```format_details = { "PlainText": "Standard unformatted text responses.", "StructuredData": "JSON, XML, and YAML output for structured data formats.", "CodeScript": "Generation of source code and executable scripts.", "ListOutput": "Bullet points and numbered list formats.", "InteractiveText": "Q&A style and other interactive text elements.","Customized": "Custom instructions and unique output formats."}```',
      },

      {
        id: 8,
        text: '**4. Expertise Areas:** \n\n ```expertise_details = { "STEM": "Covering science, technology, engineering, mathematics topics.", "Humanities": "Specializing in literature, history, philosophy, arts.", "Business": "Expertise in economics, management, marketing.", "Health": "Providing healthcare and medical knowledge.", "Legal": "Insights into law, politics, and governance.", "Education": "Specializing in teaching and learning techniques.", "Environment": "Focus on ecology, geography, and environmental science.", "Tech": "Information technology, computer science, AI specialization.","Arts": "Covering music, visual arts, and entertainment.","Social": "Understanding of sociology, psychology, anthropology."}```',
      },
      {
        id: 9,
        text: "Check out the full code for the LLM router here: [LLM Router Code](https://medium.com/ai-advances/a-yc-startups-first-project-an-llm-router-with-code-4e8a66363b94)",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "Intro",
        text: "This week has been bustling with activity in the open-source AI community. Meta unveiled its new flagship model, Llama 3.1 405B, along with its smaller counterparts, the 70B and 8B models. Not to be outdone, Mistral quickly followed suit by releasing its latest top-tier model, the Mistral Large 2, boasting an impressive 123B parameters. \n\n In this blog, we'll dive deep into a comparison of these two powerhouse models and offer recommendations to help you choose the one that best suits your needs.",
      },
      {
        id: 2,
        primary_title: "Basic Comparison",
        text: "Both the Llama 3.1 405B and Mistral Large 2 models are open-source, making them accessible for hosting on your desktop or through an AI gateway. For our analysis, we utilized [Keywords AI](https://www.keywordsai.co), a platform that allows seamless integration with over 200 LLMs using a unified format.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/basic.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "While both models offer substantial parameter counts, context windows, and max output tokens, the Llama 3.1 405B stands out with its significantly higher parameter count. However, the Mistral Large 2 has a later knowledge cutoff date, potentially offering more up-to-date information. Pricing structures are similar for input tokens but differ for output tokens, with Mistral Large 2 being more expensive.",
      },
      {
        id: 4,
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/benchmark.png",
          props: {
            variant: "md",
          },
        },
        text: "Llama 3.1 405B generally leads in MMLU and GSM8K, indicating strong performance in multi-task language understanding and grade school math problems. However, Mistral Large 2 excels in the HumanEval benchmark, demonstrating superior coding capabilities. The MBPP Plus scores show a closer competition, with Llama 3.1 405B slightly ahead.",
      },
      {
        id: 5,
        primary_title: "Speed comparison",
        text: "**Latency**\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/latency.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "In terms of latency, Mistral Large 2 and Llama 3.1 405B perform at comparable levels. Our tests, consisting of hundreds of requests for each model, revealed that Mistral Large 2 has an average latency of 20.642 seconds, while Llama 3.1 405B averages at 25.47 seconds. Despite these differences, the overall generation times for both models are quite similar, indicating no significant disparity in performance.",
      },
      {
        id: 7,
        text: "**TTFT (Time to first token)**\n\n ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/ttft.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "The Time to First Token (TTFT) for Mistral Large 2 and Llama 3.1 405B is remarkably similar. Mistral Large 2 averages a TTFT of 0.5446 seconds, while Llama 3.1 405B comes in at 0.5282 seconds. Both models have TTFTs of around 0.5 seconds, which, while slower than GPT-4o and Claude 3.5 Sonnet, still represents a good performance level.",
      },
      {
        id: 9,
        text: "**Throughput (Tokens per second)** ",
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/throughput.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        text: "The throughput for Mistral Large 2 and Llama 3.1 405B is relatively modest, with Mistral Large 2 achieving 27.465 tokens per second and Llama 3.1 405B reaching 26.395 tokens per second. This throughput, around 25 tokens per second, is significantly slower than that of GPT-4o and Claude 3.5 Sonnet. However, it is comparable to models like Claude 3 Opus and GPT-4. \n\n In terms of speed, both Mistral Large 2 and Llama 3.1 405B deliver similar performance levels across various metrics. Their latency is comparable, with Mistral Large 2 slightly ahead at 20.642 seconds versus Llama 3.1 405B's 25.47 seconds. The Time to First Token (TTFT) for both models hovers around 0.5 seconds, demonstrating their efficiency despite being marginally slower than some of the latest offerings like GPT-4o and Claude 3.5 Sonnet. When it comes to throughput, both models perform at around 25 tokens per second, aligning them more closely with models like Claude 3 Opus and GPT-4. Overall, while neither model leads the pack in speed, they maintain competitive performance levels that are suitable for many applications..",
      },
      {
        id: 11,
        primary_title: "Performance comparison",
        image: {
          id: 1,
          url: "/images/blog_Images/blog13/performance.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 12,
        text: "We conducted evaluation tests on the [Keywords AI platform](https://www.keywordsai.co). The evaluation comprised three parts: \n- **Coding Task:** Both models were tested on debugging the frontend development of Keywords AI. Their understanding of coding was comparable, but Mistral Large 2 exhibited a slightly smarter problem-solving approach in certain instances compared to Llama 3.1 405B. \n- **Document Processing:** Large documents (around 100 pages) were provided to the models for information extraction. Both models demonstrated strong capabilities in this area. However, their slower processing speeds make them less ideal for handling large documents efficiently. \n- **Logical Reasoning:** Llama 3.1 405B outperformed Mistral Large 2 in logical reasoning tasks. Mistral Large 2 made some incorrect explanations and provided wrong answers, whereas Llama 3.1 405B consistently delivered accurate and reliable responses",
      },
      {
        id: 13,
        primary_title: "Conclusion",
        text: "In conclusion, our evaluations reveal distinct strengths and weaknesses for both Mistral Large 2 and Llama 3.1 405B. Mistral Large 2 demonstrated smarter problem-solving abilities in coding tasks, while Llama 3.1 405B excelled in logical reasoning. Both models performed well in document processing but are hampered by slower processing speeds, making them less suitable for extensive document handling. Overall, these tests highlight that each model has unique advantages, and the best choice depends on the specific requirements of your use case.",
      },
      {
        id: 14,
        primary_title: "Model recommendations:",
        text: "**Llama 3.1 405B:** \n- **Best For:** Logical reasoning tasks, complex problem-solving, and applications requiring high parameter counts for nuanced understanding and detailed responses. \n- **Not suitable for:** Tasks requiring fast processing speeds, such as real-time document processing or applications where throughput is critical. Additionally, due to its large parameter size, hosting the 405B model can be prohibitively expensive for individual users. \n\n **Mistral Large 2:** \n- **Best For:** Coding tasks, especially those requiring intelligent problem-solving and debugging. It also performs well in scenarios where slightly faster latency is beneficial. \n- **Not suitable for:** Tasks requiring precise logical reasoning and accuracy, as well as applications demanding high throughput for large-scale document processing.",
      },
      {
        id: 15,
        primary_title: "Where to try these open-source models?",
        text: "Self-hosting open-source models has its own strengths, offering complete control and customization. However, it can be inconvenient for developers who want a simpler and more streamlined way to experiment with these models. \n\n Consider using Keywords AI, a platform that allows you to access and test over 200 LLMs using a consistent format. With Keywords AI, you can try all the trending models with a simple API call or use the [model playground](https://docs.keywordsai.co/features/prompt/model-playground) to test them instantly.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "AI has become the hottest topic for startups and investors, largely due to the rapid development of Large Language Models (LLMs). Major providers like OpenAI, Anthropic, and Google are releasing new models almost monthly, leading to a surge in LLM-based applications. Alongside this growth, numerous tools have emerged to help developers build LLM products more quickly and easily. Developers can now use OpenAI's Assistant API to create AI assistants, LangChain to construct AI agents, and various frameworks to develop autopilots. \n\n However, most tools in the market focus solely on enabling developers to build LLM products, without offering any reliability assistance. As a result, developers often need to rely on third-party services or create their own reliability setups to ensure their LLM apps maintain high uptime and reliability. \n\n In this blog, we'll explore three key reliability setups that LLM developers are often overlooking. We'll discuss how to implement these setups or build your own solutions quickly and effectively.",
      },
      {
        id: 2,
        primary_title: "LLM App Reliability: Key Metrics",
        text: "To measure an LLM application's reliability, developers should focus on three crucial metrics: \n\n **Uptime:** Critical for all products, not just LLM applications. Uptime directly impacts user retention. If an application experiences significant downtime, users will likely abandon it. The current industry standard for LLM application uptime should be at least 99.95%.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog14/cover.png",
          props: {
            variant: "md",
          },
          caption: "Keywords AI status page",
          captionURL: "https://status.keywordsai.co/",
        },
      },
      {
        id: 3,
        text: "**Error rate:** This metric represents the number of errors that occur per 100 requests sent to LLMs. For example, an error rate of 5 means that 5 out of every 100 requests result in an error. Errors can stem from various sources: \n- Instability of upstream providers (e.g., OpenAI) \n- Incompatibility between tool frameworks and providers \n- Mismatches between developers' use cases and LLM capabilities (e.g., sending an image to a text-only LLM) \n- Exceeding rate limits due to high request volumes to a single model/provider",
        image: {
          id: 1,
          url: "/images/blog_Images/blog14/error.png",
          props: {
            variant: "md",
          },
          caption: "Keywords AI usage dashboard",
          captionURL:
            "https://docs.keywordsai.co/features/monitoring/analytics",
        },
      },
      {
        id: 4,
        image: {
          id: 1,
          url: "/images/blog_Images/blog14/user.png",
          props: {
            variant: "md",
          },
          caption: "User analytics",
          captionURL: "https://docs.keywordsai.co/features/user/user-data",
        },
        text: "**User churn rate:** With thousands of new LLM applications entering the market daily, competition is intensifying rapidly. Developers may see a surge in users one day, only to lose them the next. Monitoring user activity and understanding the churn rate is essential for any developer aiming for long-term success.",
      },
      {
        id: 5,
        primary_title: "Reliability setup",
        text: "**Implementing an alert system**\n\n An alert system is crucial for all products, including LLM applications, regardless of whether they operate in real-time. Timely notifications allow for swift problem resolution. Consider the following components: \n- Uptime monitoring platforms: Set up an uptime page for your apps to track availability and enhance credibility for potential users. For example, [Better Stack](https://betterstack.com/) offers a simple sign-up process for a unique uptime page and provides downtime notifications. \n- All-in-one alert system: This goes beyond simple system status monitoring, addressing LLM-specific issues like provider outages, API errors (400/404), and webhook failures. You can build your own using frameworks like Django for email notifications, or utilize specialized services like [Keywords AI's all-in-one alert system](https://docs.keywordsai.co/features/monitoring/subscribe-alerts) for customizable LLM-specific alerts.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog14/alert.png",
          props: {
            variant: "md",
          },
          caption: "LLM alert system",
          captionURL:
            "https://docs.keywordsai.co/features/monitoring/subscribe-alerts",
        },
      },
      {
        id: 6,
        primary_title: "Setup fallbacks",
        text: "Fallback is crucial when you encounter errors from your primary model. It allows you to switch to another model seamlessly, without users experiencing any errors. This is vital for ensuring a great user experience - nobody wants to waste time on AI apps that constantly generate errors. For instance, if you're using OpenAI's API to call models like GPT-4o or GPT-4 Turbo, you might notice frequent incidents and elevated error rates. Your job is to handle all of this in your backend, ensuring users never see these errors. \n\n Ways to implement a fallback system: \n- Build your own: Integrate models from different providers. If you're using Google's Gemini 1.5 Flash, consider also integrating Claude 3 Haiku and GPT-4 Mini into your product. They offer similar performance! The quickest way is to use an LLM gateway to access these models with a consistent format. Check out [the LLM gateway provider](https://docs.keywordsai.co/integration/supported-models). Then you could try to catch the exceptions and then switch to other models. \n- Choose a third-party fallback system: While you could build everything in your backend, it might take many hours of work. Alternatively, [the fallback system on Keywords AI](https://docs.keywordsai.co/features/generation/fallbacks) is super simple. Just add your desired fallback models on their website, and they'll handle all LLM outages for you. It takes just 1 minute to set up and ensures 0 seconds of downtime.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog14/fallback.png",
          props: {
            variant: "md",
          },
          caption: "LLM fallback system",
          captionURL:
            "https://docs.keywordsai.co/features/generation/fallbacks",
        },
      },
      {
        id: 7,
        primary_title: "Increase LLM rate limits",
        text: "No one can predict when a surge in demand will occur, but being prepared for this possibility is crucial. As a developer or startup founder, you should always dream big and have a robust plan in place to handle sudden spikes in usage. Here are two effective strategies to increase your LLM rate limits: \n- If you have a substantial spending history with a provider, you can request a manual increase in your rate limits. While this option is viable, it typically requires significant expenditure and can be a slow process. Waiting for provider approval can result in downtime and potential loss of users. Therefore, while this method is viable, it shouldn't be your only line of defense. \n- Load Balancing LLM Requests: A more dynamic and efficient approach is to load balance your LLM requests across different models or accounts. This method is straightforward and can be implemented with just a few lines of code. By distributing requests among various models or creating multiple accounts, you can handle large volumes of traffic seamlessly. For a detailed guide on how to implement load balancing, check out our article: [How to Increase Your LLM Rate Limits for Free!](https://www.keywordsai.co/blog/increase-llm-rate-limits).",
      },
      {
        id: 8,
        primary_title: "Monitor your users.",
        text: "While this isn't directly related to reliability setups, it's crucial for developers to understand the importance of user monitoring in maintaining a reliable LLM application. Knowing your users' behavior and inputs (with their permission plz) and tracking your application's responses ensures output quality and enhances overall reliability. \n\n  Key monitoring aspects include user inputs and application responses (with user permission), total number of users, number of active users, individual user usage statistics, and cost per user. Implementing user monitoring offers several benefits: it ensures output quality, identifies potential issues or areas for improvement, helps optimize resource allocation, and provides insights for product development. \n\n There are numerous user analytics tools and internal solutions available to gain insights into user sessions. For a comprehensive solution, consider platforms like [Keywords AI's User feature](https://docs.keywordsai.co/features/user/user-data), which allows you to track various user metrics in one place.",
      },
      {
        id: 9,
        primary_title: "Conclusion",
        text: "In the rapidly evolving LLM landscape, reliability is key to standing out. By implementing a robust alert system, setting up fallbacks, and strategically increasing rate limits, developers can ensure their applications remain stable and user-friendly even under unexpected conditions. These setups, combined with effective user monitoring, form the backbone of a resilient LLM application. \n\n While implementing these reliability measures may require initial effort, the long-term benefits are substantial. A reliable LLM application not only retains users but also builds trust and credibility in a competitive field. As you continue to develop your LLM products, prioritizing these reliability setups will position you for success, enabling your application to scale efficiently and adapt to the dynamic challenges of the AI industry.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "What is a Language Processing Unit (LPU)?",
        text: "A Language Processing Unit (LPU) is a specialized chip developed by [Groq](https://groq.com/), designed to handle the unique demands of Large Language Models (LLMs). Unlike traditional processors, LPUs focus on sequential processing, making them ideal for language-related tasks.",
        image: {
          id: 1,
          url: "/images/blog_Images/blog15/cover.jpg",
          caption: "Image source: Groq",
          captionURL: "https://groq.com/",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 2,
        primary_title: "Try Groq models on Keywords AI",
        text: "Keywords AI support all groq models, including Llama 3.1 405B, Llama 3.1 70B, and Llama 3.1 8B. You can easily access these models through the Keywords AI platform, allowing you to test and deploy them in your applications. Check out the [Keywords AI](https://docs.keywordsai.co/integration/supported-models) for more information on how to use Groq models.",
      },
      {
        id: 3,
        primary_title: "How LPUs Work",
        text: "LPUs are built to address two main bottlenecks in LLM processing: 1. Compute density 2. Memory bandwidth\n\nThe architecture of LPUs sets them apart from traditional processors:\n- Single-core Architecture: Unlike multi-core processors, LPUs use a single-core design. This simplifies processing and reduces coordination overhead.\n- Synchronous Networking: Even in large-scale deployments, LPUs maintain synchronous communication, ensuring efficient data flow.\n- Sequential Processing: LPUs excel at sequential tasks, which is ideal for language processing where context and order are crucial.\n- Optimized Memory Access: LPUs feature near-instant memory access, reducing latency in data retrieval and processing.",
      },
      {
        id: 4,
        primary_title: "Why LPUs Are Faster",
        text: "Several factors contribute to the superior speed of LPUs:\n- Specialized Design: LPUs are purpose-built for language tasks, eliminating unnecessary components found in general-purpose processors.\n- Reduced Bottlenecks: By addressing compute density and memory bandwidth issues, LPUs remove major performance bottlenecks.\n- Efficient Data Handling: The synchronous, sequential nature of LPUs allows for more efficient handling of language data.\n- High Accuracy at Lower Precision: LPUs maintain high accuracy even when operating at lower precision levels, allowing for faster processing without significant quality loss.\n- Auto-compilation: LPUs can auto-compile LLMs with over 50 billion parameters, streamlining the deployment of large models.",
      },
      {
        id: 5,
        primary_title: "The Benefits of LPUs",
        text: "Speed\nRecent tests have shown impressive results:\n- Llama-3 70B ran at over 250 tokens per second\n- Mixtral achieved nearly 500 tokens per second per user\n\nFor context, this means a user could potentially generate a 4,000-word essay in just over a minute.\n\nEfficiency\nLPUs offer:\n- Higher processing speeds\n- Improved throughput\n- Better precision\n\nThese benefits make LPUs particularly valuable for industries like finance, government, and technology, where rapid and accurate data processing is crucial.",
      },
      {
        id: 6,
        primary_title: "LPUs vs. GPUs",
        text: "While LPUs excel at inference tasks, GPUs still lead in model training. Both have their strengths:\n\n- LPUs: Optimal for applying trained models to new data\n- GPUs: Best for the initial training of AI models\n\nThe future may see LPUs and GPUs working together, each focusing on their strengths.",
      },
      {
        id: 7,
        primary_title: "The Origins of LPU",
        text: "Jonathan Ross, who started the Tensor Processing Unit (TPU) project at Google, founded Groq in 2016. The company's innovative approach involved developing software and compilers before designing the hardware, resulting in a highly optimized system.\n\nThe Software-First Approach\n\nGroq's innovative approach to developing LPUs involved:\n\n1. Focusing on software and compiler development before hardware design.\n2. Ensuring optimal communication between chips.\n3. Creating a system where software guides inter-chip communication.\n\nThis software-first strategy resulted in a highly optimized system that outperforms traditional setups in speed, cost efficiency, and energy consumption.",
      },
      {
        id: 8,
        primary_title: "Conclusion",
        text: "Language Processing Units represent a significant advancement in AI hardware. By combining architectural innovations with a software-optimized approach, LPUs achieve remarkable speeds in language processing tasks. As we enter a new era of LLMs, technologies like LPUs will play a crucial role in pushing the boundaries of what's possible in natural language processing and generation.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Large language models (LLMs) are revolutionizing AI development. This blog highlights essential dev tools that streamline LLM work, from building AI applications to fine-tuning models. Whether you're a seasoned AI practitioner or a newcomer, these tools will enhance your productivity and unlock new possibilities in LLM projects.",
      },
      {
        id: 2,
        primary_title: "Langchain: Building AI Products",
        text: 'LangChain is a powerful framework built around LLMs, designed to accelerate AI development. It offers a range of capabilities for creating chatbots, Generative Question-Answering (GQA) systems, summarization tools, and more. \n\n **Key Features** \n\n LangChain\'s core concept is "chaining" different components to create advanced LLM use cases. These components include: \n- **Prompt Templates:** Pre-designed templates for various prompt types, including chatbot-style and ELI5 question-answering \n- **LLMs:** Integration with large language models like GPT-4 and Claude-3.5 Sonnet. \n- **Agents:** LLM-powered decision-making tools that can use web search, calculators, and other resources in a logical operation loop. \n- **Memory:** Both short-term and long-term memory capabilities. \n\n Keywords AI is fully Langchain compatible! Check out Keywords AI [Langchain integration](https://docs.keywordsai.co/integration/development-frameworks/langchain) for more details.',
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/top_tools/langchain.jpg",
          caption: "Langchain",
          captionURL: "https://www.langchain.com/",
          props: {
            variant: "sm",
          },
        },
      },
      {
        id: 3,
        primary_title: "Keywords AI: LLM monitoring platform",
        primary_title_url: "https://www.keywordsai.co",
        text: "Keywords AI is an LLM monitoring platform where you can call 200+ LLMs using a single format and get complete observability. It helps you monitor, debug, and iterate your LLM applications in production. \n\n **Key features** \n\n Keywords AI's core concept is monitoring. Think of it as Datadog, but built for LLMs. With the surge of AI applications in the market, developers need a more efficient way to debug and iterate their applications to stay competitive. \n- **Unified LLM API:** Call 200+ LLMs using a single format. \n- **LLM usage dashboard:** View 20+ LLM metrics, including number of requests, LLM performance, speed, and costs. \n- **Logs:** See details of every LLM request, which is helpful for debugging and improving prompts. \n- **Model playground:** Test 200+ LLMs and bring the best model to your production. \n- **Security settings:** Build reliable LLM apps with features like fallback, load balancing, outage alerts, and warnings.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/top_tools/keywords-ai.jpg",
          caption: "Keywords AI LLM dashboard",
          captionURL:
            "https://docs.keywordsai.co/features/monitoring/analytics",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Relari AI: Evaluating your LLM outputs",
        text: "[Relari AI](https://www.relari.ai) is a comprehensive, data-driven toolkit designed to evaluate and improve LLM applications. It helps AI teams simulate, test, and validate complex AI systems throughout the development lifecycle. \n\n **Key features** \n- **Experiment-Driven Development:** Relari enables systematic decision-making through comprehensive evaluations, moving beyond anecdotal testing or subjective impressions. \n- **Versatile Metrics:** Relari offers over 30 standard metrics covering various LLM use cases, including text generation, retrieval (RAG), classification, summarization, agent tool use, and code generation. \n- **Custom Metrics:** For task-specific evaluations, Relari allows you to create custom metrics that align with your unique application requirements and user preferences. \n- **Holistic Performance Assessment:** Run experiments on single data points or entire datasets to quickly understand how changes in prompts, models, or hyperparameters impact performance across various scenarios. \n\n Keywords AI integrates Relari AI for developers to run evaluations on their LLM requests. Check out[ Keywords AI LLM evaluation](https://docs.keywordsai.co/features/evaluation/overview) for more information.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/top_tools/relari.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        primary_title: "OpenPipe: Fine-tuning custom LLMs",
        text: "OpenPipe is a streamlined platform for training specialized LLM models, designed to replace slow and expensive prompts with fine-tuned alternatives. \n\n **Key Features** \n- **Unified SDK:** Collect interaction data to fine-tune custom models and seamlessly switch between LLM providers. \n- **Data Management:** Automatically log and tag past requests, and export recorded request logs. \n- **Fine-Tuning Process:** Select specific data for fine-tuning, apply pruning rules to reduce input size and lower costs, and train models through an intuitive web interface. \n- **Model Hosting:** Automatically host trained models with optional response caching for improved performance and cost reduction. \n- **Evaluation Tools:** Compare custom models against each other and OpenAI base models using tailored instructions. \n\n You can monitor your LLM apps in Keywords AI and export your LLM logs to OpenPipe with one click. Check out [Keywords AI's Datasets feature](https://docs.keywordsai.co/features/datasets) for more details.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/top_tools/openpipe.jpg",
          props: {
            variant: "md",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "As LLMs continue to revolutionize AI and its applications, the need for effective monitoring has become crucial. But what exactly is LLM monitoring, and why is it so important? Let's dive in.",
      },
      {
        id: 2,
        primary_title: "What is LLM Monitoring?",
        text: "LLM monitoring is the comprehensive process of overseeing, evaluating, and gaining insights into the performance and activities of Large Language Models in real-time. It encompasses both traditional monitoring aspects (tracking key metrics) and observability (understanding the system's internal workings).\n\n This approach enables developers, data scientists, and operations teams to: \n- Track performance metrics \n- Ensure accuracy and relevance of LLM outputs \n- Identify and troubleshoot issues \n- Gain deep insights into the LLM's decision-making processes \n- Maintain security and reliability ",
      },
      {
        id: 2,
        primary_title: "Why is LLM Monitoring Important?",
        text: '\n- **Ensuring Accuracy and Relevance**: LLMs can sometimes produce inaccurate or irrelevant responses, a phenomenon known as "hallucination." Monitoring helps detect these instances, allowing for timely interventions and improvements. \n- **Maintaining Performance**: By tracking metrics such as response time, throughput, and error rates, teams can ensure that their LLM applications are performing optimally, which is crucial for maintaining a positive user experience. \n- **Enhancing Reliability**: LLM applications can face downtime due to various reasons, such as provider outages, hitting rate limits, or delayed alerts. Monitoring helps prevent and quickly address these issues. \n- **Optimizing LLM costs:** By monitoring LLM performance, you can identify the most cost-effective model for your applications and utilize features like LLM caching to reduce expenses. \n- **Debugging and Troubleshooting:** Many LLM applications involve complex chains of operations. Monitoring provides visibility into these processes, making it easier to identify and resolve issues.',
      },
      {
        id: 3,
        primary_title: "Key Aspects of LLM Monitoring",
        text: "**Quality Metrics:** \n-  Correctness: Verify that responses are based on accurate information. \n- Hallucination: Identify instances where the LLM generates false or unsupported information. \n- Answer relevance: Assess how well responses align with user queries. \n- Sentiment Analysis: Evaluate the tone and emotional content of responses. \n\n**Performance Metrics:** \n- Latency: Measure the time taken for the LLM to generate responses. \n- Throughput: Track the number of requests processed per seconds. \n- Error Rates: Monitor the frequency of incorrect or failed responses. \n\n**Reliability Settings:** \n- Fallback: Implement backup models or systems to maintain uptime and prevent request failures.\n- Alert system: YSet up notifications for errors or anomalies to enable rapid response and minimize downtime. \n\n **User Analytics:** \n- Focus on LLM-specific user interactions and behaviors. \n- Provide insights into how users engage with LLM features. \n- Enable developers to iterate and improve their applications based on user data.",
      },
      {
        id: 4,
        primary_title: "How Keywords AI provides the best LLM monitoring",
        text: "Keywords AI is a leading LLM monitoring platform for AI startups and developers. As an AI gateway and LLM observability platform, it simplifies the process of monitoring, debugging, and iterating AI applications. \n\nThe platform offers comprehensive workflow capture, providing developers with complete observability of their AI apps. Through the LLM usage dashboard and logs page, developers can access detailed information about the performance of their applications. \n\n Keywords AI equips developers with an LLM playground and prompt management tools for optimizing and debugging LLM performance. The platform includes an alert system, user management features, and fallback options to enhance reliability. \n\n Additionally, Keywords AI provides user analytics focused on LLM-specific interactions, enabling developers to gain insights into user behavior and improve their applications accordingly. \n\n By offering this suite of tools, Keywords AI enables developers to effectively monitor, optimize, and ensure the reliability of their AI applications, making it an valuable asset in the LLM development ecosystem.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        primary_title: "Introduction",
        text: "<span classname='text-md-regular' style='color: #6483F0;'>Datadog</span> is a cloud monitoring platform that provides: \n- Infrastructure monitoring \n- Application performance tracking \n- Log management \n- Security monitoring \n- LLM monitoring \n\n It integrates with numerous technologies, offering a unified view of metrics, traces, and logs. Datadog is useful for complex, distributed systems and cloud-based architectures, helping teams quickly identify issues and optimize performance.",
      },
      {
        id: 2,
        primary_title: "LLM observability platform choice",
        text: "As AI and LLMs gain prominence, Datadog has expanded its services to include LLM monitoring for companies integrating these technologies into their workflows or core features. While Datadog excels in infrastructure monitoring, users often cite high costs and platform complexity as drawbacks. ",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/twitter.jpg",
          props: {
            variant: "md",
          },
          caption: "From X",
          captionURL: "https://x.com/dhh/status/1828078003579920674",
        },
      },
      {
        id: 3,
        text: "Consequently, many LLM developers are turning to Keywords AI instead of Datadog for several reasons: \n- Incredible shipping speed \n- Best UI/UX \n- Comprehensive LLM observability and debugging tools \n- Built for LLM developers \n- Competitive pricing \n- 24/7 Founder support",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/customer.jpg",
          props: {
            variant: "sm",
          },
          caption: "Keywords AI customer support",
          captionURL: "https://discord.com/invite/KEanfAafQQ",
        },
      },
      {
        id: 4,
        primary_title: "Features in Keywords AI that you can’t ignore",
        text: "**LLM playground** \n\n Keywords AI offers a powerful LLM playground used by thousands of developers to test prompts, debug suboptimal LLM outputs, and experiment with various LLMs. Developers can import their LLM logs to the playground and refine their prompts for optimal results. In our LLM playground, developers can: \n- Test prompts with over 200 LLMs \n- Import LLM logs to the playground with a single click \n- Use compare mode to evaluate two LLMs simultaneously \n- Add and test function calling directly in the frontend",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/playground.jpg",
          props: {
            variant: "md",
          },
          caption: "LLM playground",
          captionURL:
            "https://docs.keywordsai.co/features/prompt/model-playground",
        },
      },
      {
        id: 5,
        text: "**Prompt management** \n\n Prompts are the cornerstone of any LLM application, with output quality heavily dependent on prompt effectiveness. Creating clear, accurate, and detailed prompts is crucial for building a great product. \n\n Keywords AI's prompt management system enables teams to: \n- Create, iterate, and version prompts collaboratively. \n- Deploy the latest prompts to production with a single click.\n- Test prompts in our comprehensive LLM playground",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/prompt.jpg",
          props: {
            variant: "md",
          },
          caption: "Prompt management",
          captionURL:
            "https://docs.keywordsai.co/features/prompt/prompt-management",
        },
      },
      {
        id: 6,
        text: "**Reliability Settings** \n\n While many tools enable rapid AI app development, reliability is often overlooked. High error rates can significantly impact user retention and satisfaction. Keywords AI's reliability settings help make your AI apps more robust.\n\n Developers can: \n- [Increase LLM rate limits at no additional cost](https://www.keywordsai.co/blog/increase-llm-rate-limits) \n- [Subscribe to alerts](https://docs.keywordsai.co/features/monitoring/subscribe-alerts) for immediate error notifications \n- [Set up fallbacks using backup models](https://docs.keywordsai.co/features/generation/fallbacks) to mitigate upstream provider errors",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/datadog/alerts.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        primary_title: "Conclusion",
        text: "While Datadog offers comprehensive infrastructure monitoring, Keywords AI emerges as a specialized solution for LLM developers. With its user-friendly interface, rapid integration, and focused features like the LLM playground, prompt management, and reliability settings, Keywords AI addresses the unique challenges of LLM development. \n\n As AI continues to evolve, tools like Keywords AI provide the necessary observability and debugging capabilities to help developers create more robust and efficient LLM applications. By choosing a platform tailored to LLM development, teams can streamline their workflows, improve productivity, and ultimately deliver better AI-powered products to their users.",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Today (Sep 12, 2024), OpenAI unveiled its latest language model, o1-preview. This advanced model is engineered to dedicate more time to processing before generating responses, enabling it to tackle complex tasks and solve challenging problems in science, coding, and mathematics with enhanced capabilities. \n\n In this blog post, we'll thoroughly analyze o1-preview and compare it to Claude 3.5 Sonnet, which was previously considered one of the most advanced models available.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/openai.jpg",
          props: {
            variant: "md",
          },
          caption: "From OpenAI",
          captionURL: "https://openai.com/index/introducing-openai-o1-preview/",
        },
      },
      {
        id: 2,
        primary_title: "Comparison Methodology",
        text: "Our analysis utilizes [Keywords AI's LLM playground](https://www.keywordsai.co), a platform that supports over 200 language models and offers function-calling capabilities. We'll explore the following aspects: \n- Basic comparison \n- Benchmark comparison \n- Processing speed \n- Performance comparison \n- Suggested use cases ",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/playground.jpg",
          props: {
            variant: "md",
          },
          caption: "LLM playground",
          captionURL: "https://www.keywordsai.co",
        },
      },
      {
        id: 3,
        primary_title: "Basic Comparison",
        text: "**Note:** o1-preview doesn’t support Streaming, function calling, and system messages.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/basic.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        primary_title: "Benchmark Comparison",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/benchmark.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        text: "O1-preview outperforms Claude 3.5 Sonnet across all benchmarks. The smallest gap is in MMLU (general knowledge). GPQA Diamond, testing graduate-level reasoning, shows a significant performance difference. The MATH benchmark reveals the largest gap, highlighting o1-preview's advanced mathematical capabilities. These results indicate o1-preview's substantial improvements in complex reasoning and problem-solving across various domains.",
      },
      {
        id: 6,
        primary_title: "Speed Comparison",
        text: "O1-preview takes longer to think and respond than other LLMs. While direct speed comparisons may not be entirely fair, testing o1-preview's speed is crucial. This information helps developers better understand o1-preview's capabilities and determine if it's suitable for their projects. \n\n Note: As o1-preview doesn't support streaming, we disabled streaming for both models. Consequently, time to first token (TTFT) couldn't be measured.",
      },
      {
        id: 7,
        text: "**Latency** \n\n Our tests, involving hundreds of requests per model, revealed significant differences. Claude 3.5 Sonnet averages 18.3s/request, whereas o1-preview takes 39.4s/request. O1-preview's significantly longer latency is due to its extended thinking and reasoning process.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/latency.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "**Throughput (Tokens per second)** \n\n Despite higher latency, o1-preview shows superior throughput. O1-preview generates 92.94 tokens/second, while Claude 3.5 Sonnet produces 74.87 tokens/second. This indicates that o1-preview's longer generation time is primarily due to its initial processing phase rather than token generation speed.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/speed.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        primary_title: "Performance comparison",
        text: "We conducted evaluation tests on the [Keywords AI platform](https://keywordsai.co). The evaluation comprised three parts: \n- **Coding Task**: Both models successfully completed frontend and backend development tasks. O1-preview demonstrated superior performance with longer contexts, identifying and resolving bugs more efficiently in the first attempt. It also exhibited a more thorough code analysis capability. \n- **Logical Reasoning**: O1-preview excels in reasoning tasks. Its thinking process closely mimics human cognition. While Claude 3.5 Sonnet performs well on most problems, o1-preview consistently solves complex reasoning challenges, including International Mathematical Olympiad (IMO) level problems. \n- **Writing Task:** Both models perform exceptionally well on writing tasks. They demonstrate the ability to craft genuine, personalized cold emails, as well as concise and meaningful blog posts.",
      },
      {
        id: 10,
        primary_title: "Suggested Use Cases",
        text: "**o1-preview** \n- **Best for:** Complex problem-solving in mathematics, coding, and physics. Particularly suited for researchers tackling challenging tasks. \n- **Not suitable for:** AI applications requiring rapid response times or heavily reliant on system prompts. Voice AI applications due to lack of streaming support. \n\n **Claude 3.5 Sonnet** \n- **Best for:** Most AI applications requiring problem-solving capabilities and high-quality content generation. \n- **Not suitable for:** Voice AI applications or projects with strict budget constraints requiring lower operational costs.",
      },
      {
        id: 11,
        primary_title: "How to integrate o1-preview into your AI apps.",
        text: 'To incorporate o1-preview into your AI applications, simply visit the Keywords AI model page and locate the "View code" button. Click this button to copy the provided code snippet, then paste it directly into your codebase. With this straightforward process, you\'ll be ready to harness the power of o1-preview in your projects, enabling you to tackle complex problems and generate high-quality content with ease.',
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/o1-preview/model.jpg",
          props: {
            variant: "md",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "Check out my AI SEO description generator here: https://seo.keywordsai.co/ \n\n SEO is crucial for startups, focusing on two key strategies: increasing website traffic and adding backlinks. To boost traffic, I developed a free AI SEO description generator in just 2 hours. This tool streamlines the process of creating clear, concise descriptions for blog posts, making them more searchable on Google and other engines. Users can paste content or upload files to generate SEO-friendly descriptions using LLM technology. \n\n This blog post will detail the tools used to build this AI app and how I monitor its performance.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/traffic.png",
          props: {
            variant: "md",
          },
          caption: "Traffic after releasing the SEO description generator",
          captionURL: "https://seo.keywordsai.co",
        },
      },
      {
        id: 2,
        primary_title: "Website Layout (0.5h)",
        text: 'I leveraged AI to help design the entire website layout. By simply communicating my requirements to Claude-3.5-Sonnet, I received detailed and polished front-end code. \n\n For this project, my specific requirements were: \n- Utilize the App Router from Next.js \n- Include a text area for users to paste their blog content \n- Implement a drag-and-drop zone for file uploads \n- Provide options for users to select their preferred LLM \n- Include "Generate," "Reset," and "Copy" buttons \n\n By clearly defining these requirements, the AI was able to quickly generate a functional and user-friendly layout, significantly reducing development time',
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/cover.png",
          props: {
            variant: "md",
          },
          caption: "AI SEO description generator",
          captionURL: "https://seo.keywordsai.co",
        },
      },
      {
        id: 3,
        primary_title: "Integrate LLMs into my codebase (1h)",
        text: "Choosing the right LLM from the thousands available can be challenging. After comparing over 50 LLMs, I selected GPT-4o-mini as the primary, free LLM for all users. However, I also wanted to offer Claude-3.5-Sonnet and GPT-4o as premium options. To efficiently integrate multiple LLMs, I needed an AI gateway that could call different models using the same format. \n\n The solution: Keywords AI's LLM proxy, which supports 200+ LLMs using a unified format and offers additional functionalities. I utilized its OpenAI SDK framework to call these three models. When a user selects their preferred model in the front end, the corresponding model ID is passed to the Keywords AI API.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/api.png",
          props: {
            variant: "md",
          },
          caption: "Keywords AI LLM proxy",
          captionURL:
            "https://docs.keywordsai.co/integration/development-frameworks/openai-sdk",
        },
      },
      {
        id: 4,
        text: "A key advantage of using Keywords AI is the ability to create and manage prompts on their platform. This feature allows me to test and iterate prompts without modifying any code. I can easily connect my application to the desired prompt by simply passing a prompt ID to the API, streamlining the development process.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/prompt.png",
          props: {
            variant: "md",
          },
          caption: "Prompt management",
          captionURL:
            "https://docs.keywordsai.co/features/prompt/prompt-management",
        },
      },
      {
        id: 5,
        text: "As Claude-3.5-Sonnet and GPT-4o are more expensive than GPT-4o-mini, I couldn't offer them for free. Instead, I implemented a system allowing users to use their own OpenAI/Anthropic API keys for these premium models. Keywords AI supports this feature through a `customer_credential` parameter, which routes LLM requests through the user's API key. \n\n To accommodate this, I added a text field in the front end where users can input their API keys to access GPT-4o and Claude-3.5-Sonnet. This approach allows me to offer premium options without incurring additional costs.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/credential.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        primary_title: "Deploy the app and monitor it",
        text: "I deployed my app to Vercel and redirected the domain to [seo.keywordsai.co](http://seo.keywordsai.co/). The entire deployment process was remarkably smooth, demonstrating that anyone can launch an app publicly in under 10 minutes.\n\n After announcing the app on various social media channels, it attracted some initial users. As my goal is to make this tool beneficial for content creators, iterating and improving it has become a daily task. To ensure a positive user experience and guide future developments, monitoring the app's performance is crucial.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/dashboard.png",
          props: {
            variant: "md",
          },
          caption: "LLM usage dashboard",
          captionURL: "https://www.keywordsai.co",
        },
      },
      {
        id: 7,
        text: "Using Keywords AI's usage dashboard and logs page, I can: \n- Track the actual usage of my product \n- Monitor LLM performance \n- Debug any problematic LLM outputs",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/seo-description/logs.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "This data-driven approach allows me to: \n- Understand how users are interacting with the tool \n- Identify areas for improvement \n- Ensure the tool remains helpful and efficient \n\n By continuously monitoring and refining the app based on real user data, I can make informed decisions to enhance its functionality and user experience. \n\n Best of all, this product is open-source! You're welcome to self-host it on your own computer. Check out the repository here: [SEO description generator.](https://github.com/Keywords-AI/seo-description-generator)",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "We regularly share feature releases on [LinkedIn](https://www.linkedin.com/company/keywordsai) and our [Changelog page](https://www.keywordsai.co/changelog). However, we recognize the value in consolidating these updates in one comprehensive space, along with exclusive insights and resources for our audience.",
      },
      {
        id: 2,
        primary_title: "Major Updates ✨",
        text: "**Introducing Lab** \n\n 📡 Lab: A spreadsheet-style editor for running prompts and models across multiple test cases. Import testsets to easily test, evaluate, and optimize your LLM outputs. <span classname='text-md-regular' style='color: #6483F0;'>[Read our guide >](https://docs.keywordsai.co/features/prompt/lab)</span>",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/changelog/lab.gif",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "**Manage test cases in Testsets** \n\n 📊 Testsets: Easily manage and organize test cases. Import a CSV file and edit it like a Google Sheet. [Read our guide >](https://docs.keywordsai.co/features/prompt/testsets)",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/september-updates/testsets.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 4,
        text: "**Customize LLM retries** \n\n When an LLM call fails, our system detects the error and retries the request to prevent failover. \n\n You can: \n-  Set the number of retries \n- Define initial retry time in seconds \n\n [Read our guide >](https://platform.keywordsai.co/platform/api/retries)",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/september-updates/retries.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        primary_title: "News 📰",
        text: "**Keywords AI @ GitHub HQ!** \n\n Andy demoed Keywords AI at the Awesome AI DevTools event at GitHub HQ, invited by Yujian Tang. Over 300 developers attended, giving us great feedback and new connections. [Watch our demo here >](https://www.youtube.com/watch?v=i9pbGEazWzw)",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/september-updates/github.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "**Keywords AI demo @ Product Hunt** \n\n We recently had the opportunity to demo Keywords AI at Product Hunt, alongside over 10 other leading AI observability and evaluation tools. It was a great chance to showcase how we stand out in this fast-evolving space. [Watch our demo here >](https://www.youtube.com/watch?v=AP-RYDoMkDc)",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/september-updates/producthunt.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        primary_title: "Some interesting updates 👀",
        text: "✅ [BAML integration.](https://docs.keywordsai.co/integration/development-frameworks/baml) Build LLM apps using BAML and monitor them with Keywords AI. \n\n ✅ [Mem0 integration.](https://docs.keywordsai.co/integration/development-frameworks/mem0) Give your AI apps memory. \n\n  ✅ [OpenAI O1 models.](https://x.com/HendrixLiu29208/status/1834625528164491690) Test OpenAI's latest models in our LLM playground. \n\n ✅ [Cost management](https://platform.keywordsai.co/platform/api/limits). Added Limits page where you can edit usage and rate limits. \n\n ✅ [Warning page.](https://platform.keywordsai.co/platform/api/warnings) Customize warnings when any anomalies are detected.   \n\n ✅ [AI SEO description generator.](https://seo.keywordsai.co) Rank higher on Google with AI-powered, SEO-friendly descriptions.",
      },
      {
        id: 8,
        primary_title: "New blogs 📖",
        text: "🔔 [Beyond Datadog: Why LLM developers are switching to Keywords AI](https://www.keywordsai.co/blog/keywords-ai-vs-datadog) \n\n  🥇 [o1-preview vs. claude-3.5-sonnet: Comparing top LLMs](https://www.keywordsai.co/blog/o1-preview-vs-claude-3-5-sonnet) \n\n  🧑‍💻 [How I Built a Free AI SEO Tool in Just 2 Hours](https://www.keywordsai.co/blog/how-i-built-a-free-ai-seo-tool-in-just-2-hours)",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "LLM apps need careful watching. Here's how to do it right: \n-  **Track key metrics**: Accuracy, latency, cost, user engagement \n- **Set up alerts**: Choose metrics, set thresholds, plan actions \n- **Check data quality**: Define standards, use tools, monitor over time \n- **Test for security**: Use [OWASP](https://owasp.org/www-project-top-ten/) Top 10, control access, watch logs \n- **Pick an LLM monitoring platform**: [Keywords AI](https://www.keywordsai.co/), Langsmith.",
      },
      {
        id: 2,
        text: "Why it matters: \n-   Keeps AI apps reliable and safe \n-   Catches mistakes and biases \n-   Saves money on resources \n-   Protects user data",
      },
      {
        id: 3,
        text: "Remember: LLM monitoring is ongoing. Keep learning and improving your process.",
      },
      {
        id: 4,
        primary_title: "1. Track Key Metrics",
        text: "Keeping your LLM app running smoothly? It's all about watching the right numbers. Here's what you need to track: \n\n **Accuracy**: Is your LLM getting it right? This is key for quality. \n\n **Latency**: Speed counts. Watch these: \n-   Time to First Token (TTFT) \n-   Time Per Output Token (TPOT) \n\n **Cost**: LLM requests can hit your wallet hard. Some might set you back $1-5 each. \n\n **User Engagement**: Are folks actually using your LLM?",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/user-engagement.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 5,
        primary_title: "2. Set Up Alert Systems",
        text: "Alert systems are crucial for your LLM app. They help you catch issues fast and get user feedback. \n\n Here's how to set up effective alerts: \n- **Pick your metrics** \n\n Choose what to track based on your app's goals. This might include accuracy, latency, or user engagement. \n- **Set thresholds** \n\n Decide when an alert should trigger. For example:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/threshold.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "**Choose alert channels** \n\n Pick how you'll get notified. Options include Slack, email, SMS, or [PagerDuty](https://www.pagerduty.com/). \n\n **Create an action plan** \n\n Know what to do when an alert fires. This might mean checking data quality, adjusting model parameters, or pausing the service for fixes. \n\n **Gather user feedback** \n\n Set up ways for users to report issues or give input. This could be through in-app feedback forms, user surveys, or support ticket analysis. \n\n **Use anomaly detection** \n\n Spot weird patterns that might signal problems. Tools like [Edge Delta](https://edgedelta.com/use-cases/anomaly-detection) can help with this. \n\n **Test your system** \n\n Make sure alerts work as planned. Run drills to check response times and processes. \n\n Keep improving your alert system. What you track today might not be what you need tomorrow.",
      },
      {
        id: 7,
        primary_title: "3. Check Data Quality",
        text: "Data quality can make or break your LLM app. Bad data? Bad results. Simple as that. \n\n Here's how to keep your data clean: \n\n **Set quality standards** What's \"good data\" for your app? Define it. Example:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/eval-metric.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        text: "**Use LLM evaluation framework** \n\n Frameworks like Relari and Ragas can run evaluations on your LLM responses and your RAG content. You can self host those frameworks or choose a provide to automatically log your LLM requests and run the evaluations, like Keywords AI. \n\n **Monitor key metrics** \n\nTrack data quality over time. Watch for drops. \n\n **Export good data to a dataset.** \n\n Simply export those good data to a dataset, you could feed your LLM with those golden datasets.",
      },
      {
        id: 9,
        primary_title: "4. Test for Security Flaws",
        text: "LLM apps can be a hacker's playground. You need to test for security issues regularly. \n\n Here's how: \n\n **Use the OWASP Top 10 for LLMs** \n\n OWASP lists the top 10 security risks for LLM apps:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/security.png",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        primary_title: "5. Pick a unifed LLMOps Platform",
        text: "You need specialized tools to keep your LLM apps running smoothly. Here are some top options: \n\n Keywords AI: Built for AI startups. Features include: ",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.amazonaws.com/landing/blog/5-best-practices/keywordsai.png",
          props: {
            variant: "md",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "OpenAI dominates the AI market, with Anthropic and Gemini also gaining popularity. Developers need these models to build reliable AI products.Using OpenAI or Anthropic's basic SDKs can be challenging. Frameworks like LangChain and Vercel AI SDK simplify development and handle complex workflows.",
      },
      {
        id: 2,
        text: "Vercel's AI SDK provides a unified API for text generation, structured data, and tool calls with LLMs. It also offers a modern UI, streamlining app creation.However, it lacks observability tools for LLM apps, making performance monitoring and debugging difficult.",
      },
      {
        id: 3,
        text: "Once your app's basic functionalities are set up, monitoring and improving performance becomes crucial. [Keywords AI](https://www.keywordsai.co/) fills this gap.",
      },
      {
        id: 4,
        text: "In this blog, we'll show how to implement LLM logging in production in just 5 minutes using a simple AI app.",
      },
      {
        id: 5,
        primary_title:
          "Installing the AI SDK and Importing It into Your Codebase",
        text: "Using Vercel's starter code, you can quickly create a local project. Begin by importing the Anthropic framework to leverage Anthropic models in your app.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/install.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        text: "To make the app functional, implement two functions in your `api/route.ts` file: \n\n 1.**Import Anthropic Framework**: Set up the Anthropic client by importing the necessary modules and configuring the API keys. \n\n 2.**Call Anthropic Models**: Create a function that handles requests to the Anthropic API, enabling your app to generate AI responses.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/function_calls.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        text: "With these functions added, run your app to view the frontend and assess its performance. \n\n The app is working! What's next?",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/sample_app.gif",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Track the performance and improve it",
        text: "**Keywords AI** is an LLM monitoring and evaluation platform that enables you to monitor, debug, and enhance your AI app's performance. By integrating with the AI SDK, you can add monitoring capabilities with just a few lines of code changes. \n\n Steps to Integrate Keywords AI: \n\n **Generate an API Key**: Visit [Keywords AI](https://platform.keywordsai.co/) and obtain your API key. \n\n **Update Your Code**: \n- Replace the `baseURL` with `https://api.keywordsai.co/api/anthropic/v1`. \n- Replace the `apiKey` with your Keywords AI API key. \n\n Now, you can monitor your AI app directly through Keywords AI.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/monitor_example.gif",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        primary_title: "Full Code Snippet:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/full_code.jpg",
          props: {
            variant: "md",
          },
        },
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "**TL;DR**: \n\n - **Team plan**: $299/month → $49 per seat/month \n- **New Pro plan**: $9 per seat/month \n- **Free plan**: Now includes 2,000 free logs/month",
      },
      {
        id: 2,
        primary_title: "What's the difference between these plans?",
        text: "We’ve revamped our pricing to better serve different user groups. With the addition of the Pro plan, Keywords AI now offers 4 options: \n- **Free plan** \n- **Pro plan** \n- **Team plan** \n- **Enterprise plan** (if you’re curious about this, [click here](https://cal.com/keywordsai/demo)) \n\n **Plan details:**",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/new_pricing/plans.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 3,
        text: "\\* why 412? 🤔",
      },
      {
        id: 4,
        primary_title: "How to choose the right plan",
        text: "**Start with the Free Plan** \n\n We recommend beginning with our **Free Plan**. No credit card is required, and you can experience most of our core features within the free usage limit of **2,000 logs per month**. You can also invite one team member to collaborate and explore the platform's teamwork capabilities. \n\n **For indie hackers: Pro Plan** \n\n If you're an indie hacker, the **new Pro Plan** at **$9 per seat/month** is ideal. It includes **10,000 logs**, enough to test your product prototype or even engage with initial customers. If you exceed 10,000 logs, our usage-based pricing ensures you only pay for what you use. \n\n **For early-stage startups: Team Plan** \n\n For startups with high LLM usage or those managing multiple projects, the new **Team Plan** at **$49 per seat/month** is the best choice. It offers more free logs each month and more affordable usage pricing. You can also create multiple teams to monitor different projects separately. \n\n The Team Plan is the all-in-one solution for teams aiming to scale quickly. Enjoy benefits like: \n- **Best pricing** \n- **Competitive usage pricing** \n- **Unlimited prompts** \n- **Unlimited team members** \n- **Unlimited user analytics** \n\n Choose the Team Plan for the best experience on the platform!",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/new_pricing/pricing_card.jpg",
          props: {
            variant: "md",
          },
        },
      },

      {
        id: 5,
        primary_title: "Why we changed our pricing plans",
        text: "We received a lot of feedback from users, especially some independent developers. They love our product but couldn't afford the $299 monthly subscription at their initial stages. While they agreed that the $299 plan is fair—given its features and 1 million free logs per month—their usage didn't come close to these limits. It was hard for them to justify purchasing a product that exceeded their budget. \n\n After careful consideration, we decided to introduce an additional plan tailored for these developers. This is why we launched our **Pro Plan**. For the price of a cup of coffee, they can access a dedicated product to help monitor, debug, and improve their AI apps. \n\n Similarly, with the new Team Plan, we wanted to give users the flexibility to choose how much they are willing to pay. They might not need extensive monitoring but have a team that needs to conduct prompt experiments or collaborate on prompts. With this plan, they only pay for seat fees instead of log fees.",
      },
      {
        id: 6,
        primary_title: "What about existing customers on the old Team Plan?",
        text: "We will continue to support the old Team Plan, now renamed Team Plus. Customers on this plan have the option to migrate to the new Team Plan—just reach out to us, and we'll help you make the switch in just five minutes. If you prefer, you can stay on your current plan; nothing will change unless you decide to switch.",
      },
      {
        id: 7,
        primary_title:
          "What happens if you exceed your usage limit as an LLM Proxy User?",
        text: "Don’t worry! None of your LLM requests will fail if you go beyond your usage limit. We will simply mask the additional logs on the frontend. You can unlock them anytime by upgrading to the appropriate plan.",
      },
      {
        id: 8,
        primary_title: "What's next?",
        text: "[Check out our new plans](https://www.keywordsai.co/pricing) and choose the one that's right for you. Start your 14-day free trial today! \n\n If you have any questions or feedback, feel free to chat with us. We're here to help!",
      },
    ],
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
    paragraphs: [
      {
        id: 1,
        text: "OpenAI dominates the AI market, with Anthropic and Gemini also gaining popularity. Developers need these models to build reliable AI products.Using OpenAI or Anthropic's basic SDKs can be challenging. Frameworks like LangChain and Vercel AI SDK simplify development and handle complex workflows.",
      },
      {
        id: 2,
        text: "LangChain is an open-source framework for building applications based on large language models (LLMs). It allows developers to flexibly adapt language models to specific business contexts by defining the necessary steps to achieve desired outcomes.",
      },
      {
        id: 3,
        text: "At the heart of LangChain are **chains**, which link various AI components to deliver context-aware responses. A chain is a sequence of automated actions that transform a user's query into the model's output. Developers can use chains for tasks like: \n- Connecting to diverse data sources \n- Generating unique content \n- Translating multiple languages \n- Answering user queries",
      },
      {
        id: 4,
        text: "In this blog, we'll show how to monitor the performance of AI applications built with LangChain using the Keywords AI LangChain integration.",
      },
      {
        id: 5,
        primary_title:
          "Step 1: Install the LangChain SDK",
        text: "To begin using LangChain for your AI application, you'll need to install the Python SDK and import the necessary models. While detailed tutorials are available on the [LangChain website](https://langchain.com/), here's a quick guide to get you started. \n\n First, install the LangChain package using pip, if you plan to use OpenAI models, install the OpenAI package as well:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/langchain_SDK/install.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 6,
        primary_title: "Step 2 Call OpenAI models",
        text: "To interact with an LLM using LangChain, you can use the `ChatOpenAI` function. Simply specify the model name and provide your API key. In this example, we'll use an API key from [Keywords AI](https://www.keywordsai.co/) to access the models. \n\n Here's how you can set it up in your Python script:",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/langchain_SDK/first_step.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 7,
        primary_title: "Step 3: Track the performance and improve it",
        text: "**Keywords AI** is an LLM monitoring and evaluation platform that enables you to monitor, debug, and enhance your AI app's performance. By integrating with the AI SDK, you can add monitoring capabilities with just a few lines of code changes. \n\n Steps to Integrate Keywords AI: \n\n **Generate an API Key**: Visit [Keywords AI](https://platform.keywordsai.co/) and obtain your API key. \n\n **Update Your Code**: \n- Replace the `baseURL` with `https://api.keywordsai.co/api/`. \n- Replace the `apiKey` with your Keywords AI API key. \n\n Now, you can monitor your AI app directly through Keywords AI.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/vercel_sdk/monitor_example.gif",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 8,
        primary_title: "Step 4: Enable user analytics",
        text: "To monitor user interactions within your AI application, you can assign a unique customer ID to each user. By passing this customer ID using the `customer_id` parameter, you can log and track user activities through Keywords AI.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/langchain_SDK/users.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 9,
        text: "By including the `customer_id` parameter, you can: \n- **Track individual user interactions**: Monitor how each user engages with your AI application. \n- **Analyze user behavior**: Gain insights into usage patterns to improve your service. \n- **Enhance user experience**: Identify and address issues specific to individual users. \n\n Once you've passed the customer IDs to Keywords AI, you can begin monitoring your users directly on the [Keywords AI platform](https://www.keywordsai.co/). This enables you to maintain oversight of your application's usage and performance from a user-centric perspective.",
        image: {
          id: 1,
          url: "https://keywordsai-static.s3.us-east-1.amazonaws.com/landing/blog/langchain_SDK/user_monitoring.jpg",
          props: {
            variant: "md",
          },
        },
      },
      {
        id: 10,
        primary_title: "Conclusion",
        text: "By integrating LangChain with Keywords AI, you can effortlessly build and monitor AI applications. Assigning customer IDs and leveraging Keywords AI's platform enables you to track user activities and enhance your application's performance. Start using Keywords AI with LangChain today to gain valuable insights and improve your AI products.",
      },
    ],
  },
];
