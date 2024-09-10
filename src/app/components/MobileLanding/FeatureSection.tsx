import {
  AnalyticCard,
  DataCollectionCard,
  DeployCard,
  EvaluationCard,
  FineTuneCard,
  LogsCard,
  PlaygroundCard,
  PromptCard,
  UserInsightCard,
} from "./OtherSVG";

const Section = ({
  keyword,
  header,
  children,
  footer,
  footerHighlight,
}: {
  keyword: string;
  header: string;
  children: React.ReactNode;
  footer: string;
  footerHighlight: string;
}) => {
  return (
    <div
      aria-label="feature section"
      className="flex flex-col items-start gap-md bg-gray-black py-xl px-md"
    >
      <div
        aria-label="some frame"
        className="flex-col items-start gap-sm self-stretch"
      >
        <div className="bg-gray-2 py-xxs px-xs rounded-md">
          <p className="caption-cap text-start gradient-text">{keyword}</p>
        </div>
        <p className="max-w-[800px] w-full text-start display-md-semibold gradient-text">
          {header}
        </p>
      </div>
      {children}
      {/* <div className="min-h-[1.2px] shrink-0 [background:linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(0,0,0,0.20)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0.04)_100%)] w-full max-w-[1200px]" /> */}
      <div className=" text-gray-4 max-w-[800px] w-full display-xs text-start">
        {footer}
        <span className="text-gray-white">{footerHighlight}</span>
      </div>
    </div>
  );
};

export const FeatureSection = () => {
  return (
    <>
      <Section
        keyword={"DEPLOY"}
        header={"Build with a unified API endpoint"}
        footer={
          "A unified interface for any model with built-in infrastructure, so you can "
        }
        footerHighlight={"focus on building a product people love."}
      >
        <div className="flex max-w-[1000px] justify-start items-start content-start gap-md w-full flex-wrap">
          <DeployCard />
        </div>
      </Section>
      <Section
        keyword={"TEST"}
        header={"Run experiments with prompts and models"}
        footer={
          "Playground and prompt management for testing models and improving prompts. "
        }
        footerHighlight={"Run A/B tests effortlessly from the UI."}
      >
        <div className="flex max-w-[1000px] justify-start items-start content-start gap-lg w-full flex-wrap">
          <PlaygroundCard />
          <PromptCard />
        </div>
      </Section>
      <Section
        keyword={"MONITOR"}
        header={"Visualize and log every user session"}
        footer={
          "Beautiful pre-built dashboards to monitor every LLM metric and request log. "
        }
        footerHighlight={"Integration literally takes 2 minutes."}
      >
        <div className="flex max-w-[1000px] justify-start items-start content-start gap-lg w-full flex-wrap">
          <AnalyticCard />
          <LogsCard />
        </div>
      </Section>
      <Section
        keyword={"ANALYZE"}
        header={"Monitor performance, scale with happy users"}
        footer={
          "Production performance monitoring with auto-evaluations, designed to "
        }
        footerHighlight={"help you improve user experiences."}
      >
        <div className="flex max-w-[1000px] justify-start items-start content-start gap-lg w-full sm:flex-wrap">
          <EvaluationCard />
          <UserInsightCard />
        </div>
      </Section>
      <Section
        keyword={"IMPROVE"}
        header={"Collect data, improve, and repeat..."}
        footer={
          "Powerful toolkit for collecting datasets from production, so you can "
        }
        footerHighlight={"easily fine-tune models to optimize performance."}
      >
        <div className="flex max-w-[1000px] justify-start items-start content-start gap-lg w-full flex-wrap">
          <DataCollectionCard />
          <FineTuneCard />
        </div>
      </Section>
    </>
  );
};
