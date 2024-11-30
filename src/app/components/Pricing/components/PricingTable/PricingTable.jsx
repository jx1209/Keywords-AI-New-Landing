import { Check } from "@/app/components/icons-old";
import "./PricingTable.css";
import { Button } from "@/app/components/Buttons";
import { PricingCell } from "./PricingCell";
import { PricingColumn } from "./PricingColumn";
import { TitleColumn } from "./TitleColumn";
import cn from "@/utilities/ClassMerge";

// export function PricingTable() {
//   const planFeatures = {
//     free: {
//       title: "Free",
//       buttonText: "Get started free",
//       highlighted: false,
//       checkHighlighted: false,
//       features: {
//         Workspace: {
//           seats: { text: "2 seats", hasCheck: true },
//           teams: { },
//           key_vault: { hasCheck: true },
//         },
//         Monitoring: {
//           logs: { text: "1,000 included", hasCheck: true },
//           usage: { }, // Additional logs
//           user: { text: "100", hasCheck: true }, // User analytics
//           dashboard: { hasCheck: true },
//           alerts: { hasCheck: true },
//           guardrails: { },
//         },
//         "Prompt engineering": {
//           prompts: { text: "2", hasCheck: true },
//           workspace: { hasCheck: true },
//           version: { },
//           playground: { hasCheck: true },
//           function: { },
//           experiment: { },
//           custom_models: { },
//         },
//         Evaluations: {
//           lab: { hasCheck: true },
//           testsets: { hasCheck: true }, // datasets renamed to testsets
//           data: { }, // Data management
//           custom_evals: { },
//           llm_as_judge: { },
//           fine_tuning: { },
//           annotations: { },
//         },
//         "Model gateway": {
//           proxy: { },
//           caching: { hasCheck: true }, // caches renamed to caching
//           fallback: { },
//           retries: { },
//           load_balancing: { },
//         },
//         Data: {
//           ingestion: { text: "60 RPM", hasCheck: true },
//           export: { text: "JSON & CSV", hasCheck: true },
//           retention: { text: "7 days", hasCheck: true },
//         },
//         Security: {
//           sso: { },
//           role: { },
//           role_based: { },
//           audit_logs: { },
//           dpa: { },
//           soc2: { },
//           hipaa: { },
//           pii: { },
//           self_hosted: { },
//         },
//         Support: {
//           community: { hasCheck: true },
//           email: { hasCheck: true },
//           slack: { },
//           white_glove: { },
//           founders_text: { },
//           consulting: { },
//           sla: { },
//         },
//       }
//     },
//     pro: {
//       title: "Pro",
//       buttonText: "Get started",
//       highlighted: false,
//       checkHighlighted: false,
//       features: {
//         Workspace: {
//           seats: { text: "Unlimited", hasCheck: true },
//           teams: { },
//           key_vault: { hasCheck: true },
//         },
//         Monitoring: {
//           logs: { text: "10,000 included", hasCheck: true },
//           usage: {text: "$0.25 / 1k more", hasCheck: true },
//           user: { text: "1,000", hasCheck: true },
//           dashboard: { hasCheck: true },
//           alerts: { hasCheck: true },
//           guardrails: { },
//         },
//         "Prompt engineering": {
//           prompts: { text: "5", hasCheck: true },
//           workspace: { hasCheck: true },
//           version: { },
//           playground: { hasCheck: true },
//           function: { },
//           experiment: { },
//           custom_models: { },
//         },
//         Evaluations: {
//           lab: { hasCheck: true },
//           testsets: { hasCheck: true },
//           data: { },
//           custom_evals: { },
//           llm_as_judge: { },
//           fine_tuning: { },
//           annotations: { },
//         },
//         "Model gateway": {
//           proxy: { },
//           caching: { hasCheck: true },
//           fallback: { },
//           retries: { },
//           load_balancing: { },
//         },
//         Data: {
//           ingestion: { text: "600 RPM", hasCheck: true },
//           export: { text: "JSON & CSV", hasCheck: true },
//           retention: { text: "30 days", hasCheck: true },
//         },
//         Security: {
//           sso: { },
//           role: { hasCheck: true },
//           role_based: { },
//           audit_logs: { },
//           dpa: {},
//           soc2: { },
//           hipaa: {  },
//           pii: {  },
//           self_hosted: {}
//         },
//         Support: {
//           community: { hasCheck: true },
//           email: { hasCheck: true },
//           slack: {  },
//           white_glove: {  },
//           founders_text: {  },
//           consulting: { },
//           sla: {  }
//         },
//       }
//     },
//     team: {
//       title: "Team",
//       buttonText: "Get started",
//       highlighted: true,
//       checkHighlighted: true,
//       features: {
//         Workspace: {
//           seats: { text: "Unlimited", hasCheck: true },
//           teams: { },
//           key_vault: { hasCheck: true },
//         },
//         Monitoring: {
//           logs: {text: "100,000 included", hasCheck: true },
//           usage: {text: "$0.10 / 1k more", hasCheck: true },
//           user: {text: "Unlimited", hasCheck: true },
//           dashboard: { hasCheck: true },
//           alerts: { hasCheck: true },
//           guardrails: { },
//         },
//         "Prompt engineering": {
//           prompts: {text: "Unlimited", hasCheck: true },
//           workspace: { hasCheck: true },
//           version: { },
//           playground: { hasCheck: true },
//           function: { },
//           experiment: { },
//           custom_models: { },
//         },
//         Evaluations: {
//           lab: { hasCheck: true },
//           testsets: { hasCheck: true },
//           data: { },
//           custom_evals: { },
//           llm_as_judge: { },
//           fine_tuning: {},
//           annotations: { },
//         },
//         "Model gateway": {
//           proxy: { },
//           caching: { hasCheck: true },
//           fallback: { },
//           retries: { },
//           load_balancing: { },
//         },
//         Data: {
//           ingestion: { text: "6,000 RPM", hasCheck: true },
//           export: { text: "JSON & CSV", hasCheck: true },
//           retention: { text: "90 days", hasCheck: true },
//         },
//         Security: {
//           sso: {},
//           role: { hasCheck: true },
//           role_based: {},
//           audit_logs: {},
//           dpa: {},
//           soc2: { },
//           hipaa: {},
//           pii: {},
//           self_hosted: { }
//         },
//         Support: {
//           community: { hasCheck: true },
//           email: { hasCheck: true },
//           slack: { hasCheck: true },
//           white_glove: {  },
//           founders_text: { },
//           consulting: { },
//           sla: { }
//         },
//       }
//     },
//     enterprise: {
//       title: "Enterprise",
//       buttonText: "Request a trial",
//       highlighted: false,
//       checkHighlighted: true,
//       features: {
//         Workspace: {
//           seats: { text: "Unlimited", hasCheck: true },
//           teams: { },
//           key_vault: { hasCheck: true },
//         },
//         Monitoring: {
//           logs: {text: "Unlimited", hasCheck: true },
//           usage: {text: "Volume discount", hasCheck: true },
//           user: {text: "Unlimited", hasCheck: true },
//           dashboard: { hasCheck: true },
//           alerts: { hasCheck: true },
//           guardrails: { },
//         },
//         "Prompt engineering": {
//           prompts: {text: "Unlimited", hasCheck: true },
//           workspace: { hasCheck: true },
//           version: { },
//           playground: { hasCheck: true },
//           function: { },
//           experiment: { },
//           custom_models: { },
//         },
//         Evaluations: {
//           lab: { hasCheck: true },
//           testsets: { hasCheck: true },
//           data: { },
//           custom_evals: { },
//           llm_as_judge: { },
//           fine_tuning: { hasCheck: true },
//           annotations: { },
//         },
//         "Model gateway": {
//           proxy: { },
//           caching: { hasCheck: true },
//           fallback: { },
//           retries: { },
//           load_balancing: { },
//         },
//         Data: {
//           ingestion: { text: "Unlimited", hasCheck: true },
//           export: { text: "JSON & CSV", hasCheck: true },
//           retention: { text: "Unlimited", hasCheck: true },
//         },
//         Security: {
//           sso: { hasCheck: true },
//           role: { hasCheck: true },
//           role_based: { },
//           audit_logs: { hasCheck: true },
//           dpa: { hasCheck: true },
//           soc2: { hasCheck: true },
//           hipaa: { hasCheck: true },
//           pii: { hasCheck: true },
//           self_hosted: { hasCheck: true }
//         },
//         Support: {
//           community: { hasCheck: true },
//           email: { hasCheck: true },
//           slack: { hasCheck: true },
//           white_glove: { hasCheck: true },
//           founders_text: { hasCheck: true },
//           consulting: { },
//           sla: { hasCheck: true }
//         },
//       }
//     }
//   };

//   const titleByCol = [
//     {
//       section: "Workspace",
//       teams: "Teams",
//       key_vault: "Key Vault",
//     },
//     {
//       section: "Monitoring",
//       logs: "Logs",
//       usage: "Additional logs",
//       user: "User analytics",
//       dashboard: "Dashboard",
//       alerts: "Alerts",
//       guardrails: "Custom guardrails",
//     },
//     {
//       section: "Prompt engineering",
//       prompts: "Prompts",
//       workspace: "Collaborative Workspace",
//       version: "Version history",
//       playground: "Model playground",
//       function: "Function calling",
//       experiment: "Prompt experiments",
//       custom_models: "Custom model",
//     },
//     {
//       section: "Evaluations",
//       lab: "Prompt lab",
//       testsets: "Test cases",
//       data: "Data management",
//       custom_evals: "Custom eval metrics",
//       llm_as_judge: "LLM-as-a-judge evals",
//       fine_tuning: "Fine-tuning",
//       annotations: "Annotation queue",
//     },
//     {
//       section: "Model gateway",
//       proxy: "Unified proxy API",
//       caching: "Prompt caching",
//       fallback: "Request fallback",
//       retries: "Request retries",
//       load_balancing: "Load balancing",
//     },
//     {
//       section: "Data",
//       ingestion: "Log ingestion",
//       export: "Data export",
//       retention: "Data retention",
//     },
//     {
//       section: "Security",
//       sso: "Single Sign-On",
//       role: "Admin roles",
//       role_based: "Role-based access",
//       audit_logs: "Audit logs",
//       dpa: "DPA",
//       soc2: "SOC-2 compliance",
//       hipaa: "HIPAA compliance",
//       dpa: "Enterprise DPA",
//       pii: "PII masking",
//       self_hosted: "On-prem deployment"
//     },
//     {
//       section: "Support",
//       community: "Community support",
//       email: "Email support",
//       slack: "Private Slack channel",
//       white_glove: "white-glove onboarding",
//       founders_text: "Priority support",
//       consulting: "AI consultations",
//       sla: "Uptime SLA"
//     },
//   ];

//   // Transform the features object into the format needed by PricingColumn
//   const transformFeatures = (features) => {
//     return Object.entries(features).map(([section, items]) => ({
//       section,
//       ...items,
//     }));
//   };

//   return (
//     <div className="flex flex-col max-w-[1000px] items-center gap-md w-full">
//       <div className="flex flex-row max-w-[1000px] gap-md items-end self-stretch">
//         <TitleColumn sections={titleByCol} />

//         {Object.entries(planFeatures).map(([key, plan]) => (
//           <PricingColumn
//             key={key}

//             title={plan.title}
//             buttonText={plan.buttonText}
//             cells={transformFeatures(plan.features)}
//             highlighted={plan.highlighted}
//             checkHighlighted={plan.checkHighlighted}
//             onButtonClick={() => {
//               const url =
//                 plan.title === "Enterprise"
//                   ? "https://cal.com/keywordsai/demo"
//                   : "https://platform.keywordsai.co/platform/api/plans";
//               window.location.href = url;
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
export const pricingData = {
  Workspace: {
    displayName: "Workspace",
    features: {
      seats: {
        displayName: "Seats",
        free: { content: "2 members", hasCheck: true },
        pro: { content: "Unlimited", hasCheck: true },
        team: { content: "Unlimited", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      teams: {
        displayName: "Teams",
        free: { content: "1 team", hasCheck: true },
        pro: { content: "1 team", hasCheck: true },
        team: { content: "5 teams", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      key_vault: {
        displayName: "Key vault",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
    },
  },
  Monitoring: {
    displayName: "Monitoring",
    features: {
      requests: {
        displayName: "Logs",
        free: { content: "2k logs / mo", hasCheck: true },
        pro: { content: "10k logs / mo", hasCheck: true },
        team: { content: "100k logs / mo", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      usage: {
        displayName: "Additional logs",
        free: { hasCheck: false },
        pro: { content: "$0.25 per 1k logs", hasCheck: true },
        team: { content: "$0.1 per 1k logs", hasCheck: true },
        enterprise: { content: "Volume discount", hasCheck: true },
      },
      user_analytics: {
        displayName: "User analytics",
        free: { content: "100 users", hasCheck: true },
        pro: { content: "1k users", hasCheck: true },
        team: { content: "Unlimited", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      dashboard: {
        displayName: "Metric dashboard",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      // traces: {
      //   displayName: "Traces",
      //   free: { hasCheck: false },
      //   pro: { hasCheck: false },
      //   team: { hasCheck: false },
      //   enterprise: { hasCheck: true },
      // },
      alerts: {
        displayName: "Alerts",
        free: { hasCheck: false },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      guardrails: {
        displayName: "Custom guardrails",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { content: "Add-on", hasCheck: true },
      },
    },
  },
  Prompt: {
    displayName: "Prompt engineering",
    features: {
      prompts: {
        displayName: "Prompts",
        free: { content: "2 prompts", hasCheck: true },
        pro: { content: "5 prompts", hasCheck: true },
        team: { content: "Unlimited", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      workspace: {
        displayName: "Collaborative workspace",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      versioning: {
        displayName: "Version history",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      playground: {
        displayName: "Model playground",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      function: {
        displayName: "Function calling",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      experiments: {
        displayName: "Prompt experiments",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      custom_model: {
        displayName: "Custom model",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
    },
  },
  Evaluations: {
    displayName: "Evaluations",
    features: {
      lab: {
        displayName: "Prompt lab",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      testsets: {
        displayName: "Test cases",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      datasets: {
        displayName: "Dataset management",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      evaluators: {
        displayName: "Custom eval metrics",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      llm_evaluators: {
        displayName: "LLM-as-judge evals",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      fine_tuning: {
        displayName: "Fine-tuning",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      annotation: {
        displayName: "Annotation queue",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
    },
  },
  Gateway: {
    displayName: "Model gateway",
    features: {
      models: {
        displayName: "Unified proxy API",
        free: { content: "250+ models", hasCheck: true },
        pro: { content: "250+ models", hasCheck: true },
        team: { content: "250+ models", hasCheck: true },
        enterprise: { content: "250+ models", hasCheck: true },
      },
      caches: {
        displayName: "Prompt caching",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      fallback: {
        displayName: "Request fallback",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      retries: {
        displayName: "Request retries",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      load_balancing: {
        displayName: "Load balancing",
        free: { hasCheck: false },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
    },
  },
  Data: {
    displayName: "Data",
    features: {
      log_ingestion: {
        displayName: "Log ingestion",
        free: { content: "42 logs / min", hasCheck: true },
        pro: { content: "412 logs / min", hasCheck: true },
        team: { content: "4,200 logs / min", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
      export: {
        displayName: "Data export",
        free: { hasCheck: false },
        pro: { content: "JSON & CSV export", hasCheck: true },
        team: { content: "JSON & CSV export", hasCheck: true },
        enterprise: { content: "JSON & CSV export", hasCheck: true },
      },
      retention: {
        displayName: "Data retention",
        free: { content: "7 days", hasCheck: true },
        pro: { content: "30 days", hasCheck: true },
        team: { content: "90 days", hasCheck: true },
        enterprise: { content: "Unlimited", hasCheck: true },
      },
    },
  },
  Security: {
    displayName: "Security",
    features: {
      sso: {
        displayName: "SSO",
        free: { content: "G Suite", hasCheck: true },
        pro: { content: "G Suite", hasCheck: true },
        team: { content: "G Suite", hasCheck: true },
        enterprise: { content: "G Suite + SAML", hasCheck: true },
      },
      admins: {
        displayName: "Admin roles",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      access_control: {
        displayName: "Role-based access",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      audit_logs: {
        displayName: "Audit logs",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      soc2: {
        displayName: "SOC 2 compliance",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      hipaa: {
        displayName: "HIPAA compliance",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      dpa: {
        displayName: "Enterprise DPA",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { content: "Add-on", hasCheck: true },
      },
      pii: {
        displayName: "PII masking",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { content: "Add-on", hasCheck: true },
      },
      self_hosted: {
        displayName: "On-prem deployment",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { content: "Add-on", hasCheck: true },
      },
    },
  },

  Support: {
    displayName: "Support",
    features: {
      discord: {
        displayName: "Community Discord",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      email: {
        displayName: "Email support",
        free: { hasCheck: true },
        pro: { hasCheck: true },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      slack: {
        displayName: "Private Slack channel",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      white_glove: {
        displayName: "White glove onboarding",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: true },
        enterprise: { hasCheck: true },
      },
      priority: {
        displayName: "Priority support",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      consulting: {
        displayName: "AI consultation",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
      sla: {
        displayName: "Uptime SLA",
        free: { hasCheck: false },
        pro: { hasCheck: false },
        team: { hasCheck: false },
        enterprise: { hasCheck: true },
      },
    },
  },
};

const renderCell = (content, plan, link) => {
  return (
    <div
      className={cn(
        "flex flex-row h-[42px] px-sm items-center gap-xxs self-stretch shadow-border-b shadow-gray-2",
        plan === "team" && "bg-gray-2"
      )}
    >
      {content.hasCheck && (
        <Check fill={plan === "team" ? "fill-primary" : "fill-gray-4"} />
      )}
      {content.content && (
        <span
          className={`text-md-regular text-gray-white`}
          onClick={() => window.open(link, "_blank")}
        >
          &nbsp;{content.content}
        </span>
      )}
    </div>
  );
};

export function PricingTable() {
  return (
    <div className="flex flex-col">
      <div className="flex self-stretch gap-sm w-full">
        <div className="text-md-medium text-gray-white w-1/5 min-w-[240px] h-[42px] flex items-center">
          Free trial
        </div>
        <div className="text-md-regular text-gray-white w-1/5 flex items-center h-[42px]  px-sm gap-xxs">
          <Check fill="fill-gray-4" />
          Free forever
        </div>
        <div className="text-md-regular text-gray-white w-1/5 flex items-center h-[42px] px-sm gap-xxs">
          <Check fill="fill-gray-4" />7 days free
        </div>
        <div className="text-md-regular text-gray-white w-1/5 flex items-center h-[42px] px-sm gap-xxs bg-gray-2">
          <Check fill="fill-primary" />7 days free
        </div>{" "}
        <div className="text-md-regular text-gray-white w-1/5 flex items-center h-[42px] px-sm gap-xxs">
          <Check fill="fill-gray-4" />1 month free
        </div>
      </div>

      {Object.entries(pricingData).map(([sectionKey, section]) => (
        <div key={sectionKey} className="flex flex-col">
          <div className="flex flex-row gap-sm">
            <div className="text-md-medium text-gray-white w-1/5 min-w-[240px] h-[42px] flex items-center">
              {section.displayName}
            </div>
            <div className="h-[42px] bg-gray-1 w-1/5" />
            <div className="h-[42px] bg-gray-1 w-1/5" />
            <div className="h-[42px] bg-gray-2 w-1/5" />
            <div className="h-[42px] bg-gray-1 w-1/5" />
          </div>
          {Object.entries(section.features).map(([featureKey, feature]) => (
            <div key={featureKey} className="flex flex-row gap-sm">
              <div className="text-md-regular text-gray-4 w-1/5 flex items-center h-[42px] min-w-[240px] shadow-border-b shadow-gray-2">
                {feature.displayName}
              </div>
              <div className="w-1/5">{renderCell(feature.free, "free")}</div>
              <div className="w-1/5 ">{renderCell(feature.pro, "pro")}</div>
              <div className="w-1/5 min-w-[224px]">
                {renderCell(feature.team, "team")}
              </div>
              <div className="w-1/5">
                {renderCell(feature.enterprise, "enterprise")}
              </div>
            </div>
          ))}
          <div className="h-md w-full flex gap-sm">
            <div className="h-full bg-gray-1 w-1/5 min-w-[240px]" />
            <div className="h-full bg-gray-1 w-1/5" />
            <div className="h-full bg-gray-1 w-1/5" />
            <div className="h-full bg-gray-2 w-1/5" />
            <div className="h-full bg-gray-1 w-1/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
