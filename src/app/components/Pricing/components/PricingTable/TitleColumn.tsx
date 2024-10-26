import { PricingCell } from "./PricingCell";


interface PricingSection {
  section: string;
  [key: string]: string;  // Allow for dynamic properties
}

export function TitleColumn({ sections }: { sections: PricingSection[] }) {
    return (
      <div className="flex flex-col py-md items-start gap-md flex-1 self-stretch">
        {/* Empty header space to align with other columns */}
        <div className="flex flex-col items-start gap-sm self-stretch h-[84px]" />
  
        {/* Section titles */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-start w-full"
          >
            <PricingCell
              text={section.section}
              isInPricingColumn={false}
              className="w-full"
              isSectionTitle={true}
            />
            {Object.entries(section).map(([key, value]) => {
              if (key === "section") return null;
              return (
                <PricingCell
                  key={key}
                  text={value}
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
