import { Check } from "@/app/components/icons-old";
import "./PricingTable.css";
import { Button } from "@/app/components/Buttons";
import { PricingCell } from "./PricingCell";
import { PricingColumn } from "./PricingColumn";
import { TitleColumn } from "./TitleColumn";



export function PricingTable() {
  const planFeatures = {
    free: {
      title: "Free",
      buttonText: "Get started free",
      highlighted: false,
      features: {
        Platform: {
          seats: { text: "2 seat", hasCheck: true },
          dashboard: { hasCheck: true },
          logs: { text: "1k logs free", hasCheck: true },
          usage_based: {},
          analytics: {text: "100 users free", hasCheck: true },
          playground: { hasCheck: true },
          prompt_management: {text: "2 prompts free", hasCheck: true },
          lab: { hasCheck: true },
          datasets: { hasCheck: true },
          caches:{ hasCheck: true },
          key_vault: { hasCheck: true },
          alerts:{ hasCheck: true },
          log_ingestion: {text: "60 calls / min", hasCheck: true },
          fine_tuning: {  },
          traces: {},
          sessions: {},
          evaluators: {},
        },
        Security: {
          role: {  },
          sso: {  },
          dpa: {  },
          hipaa: {  },
          soc2: {  },
          pii: {  },
          self_hosted: {  }
        },
        Support: {
          community: { hasCheck: true },
          email: {  },
          slack: {  },
          founders_text: {  },
          white_glove: {  },
          sla: {  }
        },
        Data: {
          retention: { text: "7 days", hasCheck: true },
          json: {text: "JSON & CSV", hasCheck: true }
        },
        Integrations: {
          openai: { hasCheck: true },
          anthropic: { hasCheck: true },
          langchain: { hasCheck: true },
          llamaindex: { hasCheck: true },
          vercel: { hasCheck: true }
        },
      }
    },
    basic: {
      title: "Basic",
      buttonText: "Get started",
      highlighted: false,
      features: {
        Platform: {
          seats: { text: "5 seats", hasCheck: true },
          dashboard: { hasCheck: true },
          logs: { text: "10k logs free", hasCheck: true },
          usage_based: {text: "$0.1/1k extra logs", hasCheck: true },
          analytics: {text: "1k users free", hasCheck: true },
          playground: { hasCheck: true },
          prompt_management: {text: "5 prompts free", hasCheck: true },
          lab: { hasCheck: true },
          datasets: { hasCheck: true },
          caches: { hasCheck: true },
          key_vault: { hasCheck: true },
          alerts: { hasCheck: true },
          log_ingestion: {text: "600 calls / min", hasCheck: true },
          fine_tuning: {  },
          traces: { },
          sessions: {},
          evaluators: { },
        },
        Security: {
          role: { hasCheck: true },
          sso: {  },
          dpa: {},
          hipaa: {  },
          soc2: {  },
          pii: {  },
          self_hosted: {}
        },
        Support: {
          community: { hasCheck: true },
          email: { hasCheck: true },
          slack: {  },
          founders_text: {  },
          white_glove: {  },
          sla: {  }
        },
        Data: {
          retention: { text: "30 days", hasCheck: true },
          json: {text: "JSON & CSV", hasCheck: true }
        },
        Integrations: {
          openai: { hasCheck: true },
          anthropic: { hasCheck: true },
          langchain: { hasCheck: true },
          llamaindex: { hasCheck: true },
          vercel: { hasCheck: true }
        }
      }
    },
    team: {
      title: "Team",
      buttonText: "Get started",
      highlighted: true,
      features: {
        Platform: {
          seats: { text: "Unlimited", hasCheck: true },
          dashboard: { hasCheck: true },
          logs: {text: "100k logs free", hasCheck: true },
          usage_based: {text: "$0.1/1k extra logs", hasCheck: true },
          analytics: {text: "10k users free", hasCheck: true },
          playground: { hasCheck: true },
          prompt_management: {text: "Unlimited", hasCheck: true },
          lab: { hasCheck: true },
          datasets: { hasCheck: true },
          caches: { hasCheck: true },
          key_vault: { hasCheck: true },
          alerts: { hasCheck: true },
          log_ingestion: {text: "6,000 calls / min", hasCheck: true },
          evaluators: { hasCheck: true },
          traces: { },
          sessions: { },
          fine_tuning: {},
        },
        Security: {
          role: { hasCheck: true },
          sso: {},
          dpa: {},
          hipaa: {},
          soc2: { },
          pii: {},
          self_hosted: { }
        },
        Support: {
          community: { hasCheck: true },
          email: { hasCheck: true },
          slack: { hasCheck: true },
          founders_text: { },
          white_glove: {  },
          sla: { }
        },
        Data: {
          retention: { text: "90 days", hasCheck: true },
          json: {text: "JSON & CSV", hasCheck: true }
        },
        Integrations: {
          openai: { hasCheck: true },
          anthropic: { hasCheck: true },
          langchain: { hasCheck: true },
          llamaindex: { hasCheck: true },
          vercel: { hasCheck: true }
        }
      }
    },
    enterprise: {
      title: "Enterprise",
      buttonText: "Request a trial",
      highlighted: false,
      features: {
        Platform: {
          seats: { text: "Unlimited", hasCheck: true },
          dashboard: { hasCheck: true },
          logs: {text: "100k logs free", hasCheck: true },
          usage_based: {text: "Volume discount", hasCheck: true },
          analytics: {text: "Unlimited", hasCheck: true },
          playground: { hasCheck: true },
          prompt_management: {text: "Unlimited", hasCheck: true },
          lab: { hasCheck: true },
          datasets: { hasCheck: true },
          caches: { hasCheck: true },
          key_vault: { hasCheck: true },
          alerts: { hasCheck: true },
          log_ingestion: {text: "Unlimited", hasCheck: true },
          evaluators: { hasCheck: true },
          traces: { hasCheck: true },
          sessions: { hasCheck: true },
          fine_tuning: { hasCheck: true },
        },
        Security: {
          role: { hasCheck: true },
          sso: { hasCheck: true },
          dpa: { hasCheck: true },
          hipaa: { hasCheck: true },
          soc2: { hasCheck: true },
          pii: { hasCheck: true },
          self_hosted: { hasCheck: true }
        },
        Support: {
          community: { hasCheck: true },
          email: { hasCheck: true },
          slack: { hasCheck: true },
          founders_text: { hasCheck: true },
          white_glove: { hasCheck: true },
          sla: { hasCheck: true }
        },
        Data: {
          retention: { text: "Unlimited", hasCheck: true },
          json: {text: "JSON & CSV", hasCheck: true }
        },
        Integrations: {
          openai: { hasCheck: true },
          anthropic: { hasCheck: true },
          langchain: { hasCheck: true },
          llamaindex: { hasCheck: true },
          vercel: { hasCheck: true }
        }
      }
    }
  };

  const titleByCol = [
    {
      section: "Platform",
      seats: "Seats",
      dashboard: "Dashboard",
      logs: "Request logging",
      usage_based: "Usage based pricing",
      analytics: "User analytics",
      playground: "Playground",
      prompt_management: "Prompt management",
      lab: "Lab",
      datasets: "Datasets",
      caches: "Caches",
      key_vault: "Key Vault",
      alerts: "Alerts",
      log_ingestion: "Log ingestion",
      evaluators: "Evaluators",
      traces: "Traces",
      sessions: "Sessions",
      fine_tuning: "Fine-tuning",
    },
    {
      section: "Security",
      role: "Admin roles",
      sso: "Single Sign-On",
      dpa: "DPA",
      hipaa: "HIPAA compliance",
      soc2: "SOC-2 compliance",
      pii: "PII removal",
      self_hosted: "On-prem deployment"
    },
    {
      section: "Support",
      community: "Community Discord",
      email: "Email support",
      slack: "Private Slack",
      founders_text: "24/7 support",
      white_glove: "Dedicated onboarding",
      sla: "SLA"
    },
    {
      section: "Data",
      retention: "Data retention",
      json: "Data export"
    },
    {
      section: "Integrations",
      openai: "OpenAI",
      anthropic: "Anthropic",
      langchain: "LangChain",
      llamaindex: "LlamaIndex",
      vercel: "Vercel"
    },
  ];

  // Transform the features object into the format needed by PricingColumn
  const transformFeatures = (features) => {
    return Object.entries(features).map(([section, items]) => ({
      section,
      ...items,
    }));
  };

  return (
    <div className="flex flex-col max-w-[1000px] items-center gap-md w-full">
      <div className="flex flex-row max-w-[1000px] gap-md items-end self-stretch">
        <TitleColumn sections={titleByCol} />

        {Object.entries(planFeatures).map(([key, plan]) => (
          <PricingColumn
            key={key}
            title={plan.title}
            buttonText={plan.buttonText}
            cells={transformFeatures(plan.features)}
            highlighted={plan.highlighted}
            onButtonClick={() => {
              const url =
                plan.title === "Enterprise"
                  ? "https://cal.com/keywordsai/demo"
                  : "https://platform.keywordsai.co/login";
              window.location.href = url;
            }}
          />
        ))}
      </div>
    </div>
  );
}
