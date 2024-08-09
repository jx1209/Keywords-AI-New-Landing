import { Page } from "src/components/Page";
import Markdown from "react-markdown";
import { Subtract } from "src/components/Icons";
const Dot = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="2"
      viewBox="0 0 2 2"
      fill="none"
    >
      <path
        d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.555 0.45 2 1 2C1.555 2 2 1.555 2 1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0Z"
        fill="#B1B3BC"
      />
    </svg>
  );
};
const Heading = () => {
  return (
    <div className="flex-col w-[600px] max-w-[800px] items-start gap-lg">
      <div className="flex-col items-start gap-xxs self-stretch">
        <p className="display-sm text-gray-white">Changelog</p>
        <p className=" text-gray-4 text-sm-regular">
          New updates and improvements.
        </p>
        <div className="flex items-center gap-xxs">
          <a className="text-sm-md text-primary cursor-pointer">
            Subscribe to updates
          </a>
          <Dot />
          <a className="text-sm-md text-primary cursor-pointer">
            Follow us on LinkedIn
          </a>
        </div>
      </div>
      <div className="flex h-[1px] bg-gray-2 self-stretch"></div>
    </div>
  );
};

const changeLogItemData = [
  {
    date: "October 23, 2023",
    content: `# Organization Settings

- **Improvements and Fixes**
  - xyz bug fixed
  - abc bug fixed`,
  },
  {
    date: "October 23, 2023",
    content: `# Organization Settings

- **Improvements and Fixes**
  - xyz bug fixed
  - abc bug fixed`,
  },
  
];
const ChangeLogItem = ({ date, content }) => {
  return (
    <div className="flex w-[1200px] max-w-[1200px] items-start">
      <div className="flex-col w-[300px] h-[28px] justify-center items-start gap-xxs shrink-0">
        <p className="text-sm-regular">{date}</p>
      </div>
      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="display-xs text-gray-white" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="text-sm-md" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol
              {...props}
              className="list-inside list-decimal ml-1 space-y-[8px]"
            />
          ),
          ul: ({ node, ...props }) => (
            <ul
              {...props}
              className="list-inside list-disc ml-1 space-y-[8px]"
            />
          ),
          li: ({ node, ...props }) => (
            <li {...props} className="space-y-[8px]" />
          ),
        }}
        className="text-sm-regular text-gray-4 flex-col gap-[20px]"
      >
        {content}
      </Markdown>
    </div>
  );
};

export function ChangeLog() {
  return (
    <Page>
      <div className="flex-col p-xl pb-0 items-center gap-xl self-stretch">
        <Heading />
        {changeLogItemData.map((item, index) => (
          <ChangeLogItem key={index} date={item.date} content={item.content} />
        ))}
        <Subtract />
      </div>
    </Page>
  );
}
