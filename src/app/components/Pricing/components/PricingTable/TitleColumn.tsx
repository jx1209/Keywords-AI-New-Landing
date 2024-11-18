import { PricingCell } from "./PricingCell";

interface PricingSection {
  section: string;
  [key: string]: string; // Allow for dynamic properties
}

export function TitleColumn({ sections }: { sections: PricingSection[] }) {
  return (
    <div className="flex flex-col py-md items-start gap-md flex-1 self-stretch">
      {/* Empty header space to align with other columns */}
      <div className="flex flex-col items-start gap-sm self-stretch h-[84px]" />
      <div className="text-md-regular text-gray-white w-1/5 min-w-[187px] h-[36px] flex items-center">
        Free trial
      </div>
      {/* Section titles */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex flex-col justify-end items-start w-full"
        >
          <PricingCell
            text={section.section}
            className="w-full"
            isSectionTitle={true}
          />
          {Object.entries(section).map(([key, value]) => {
            if (key === "section") return null;
            return (
              <PricingCell
                key={key}
                text={
                  key === "community" ? (
                    <a
                      className="underline-offset-4 underline decoration-dotted decoration-gray-3 hover:decoration-gray-4"
                      href="https://discord.com/invite/KEanfAafQQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value}
                    </a>
                  ) : key === "email" ? (
                    <a
                      className="underline-offset-4 underline decoration-dotted decoration-gray-3 hover:decoration-gray-4"
                      href="mailto:team@keywordsai.co?subject=Keywords%20AI%20Support&body=Hi%20Keywords%20AI%20team%2C%0A%0A"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )
                }
                className="w-full"
                hasCheck={false}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
