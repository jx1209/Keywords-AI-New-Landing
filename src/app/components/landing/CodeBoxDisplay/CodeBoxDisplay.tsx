import CodeMirror, { Extension } from "@uiw/react-codemirror";
// import "./CodeViewer.css";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import {
  Bracket,
  Check,
  Code,
  Copy,
  Down,
  Go,
  Google,
  JavaScript,
  OpenAI,
  Php,
  Python,
} from "@/app/components/Icons";
import { Button, } from "@/app/components/Buttons";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { whiteDarkInit } from "@uiw/codemirror-theme-white/dark";
import { whiteLightInit } from "@uiw/codemirror-theme-white/light";
// import { colors } from "../../styles/color-themes";
// import { useSelector } from "react-redux";
// import { useTypedSelector } from "src/store/store";
import {ButtonGroupSmall} from "@/app/components/Buttons/ButtonGroupSmall";
import { NewDropDownMenu } from "@/app/components/DropDownMenu/NewDropDownMenu";

// const LightTheme = whiteLightInit({
//   settings: {
//     background: "#transparent",
//     foreground: "#151519",
//     gutterForeground: colors.gray4d,
//     fontFamily: "monospace",
//     lineHighlight: "transparent",
//     gutterBackground: "#F9FAFC",
//     selection: "#3E424A",
//     matchingBracket: "#6483F0",
//     string: "#1E1E23",
//     comment: "#DDE0E8",
//     regexp: "#1E1E23",
//     gutterBorder: "transparent",
//   },
// });

export type ChatMessageType = {
  id?: string | number;
  role: string;
  content: string | any;
  model?: string | null;
};

const DarkTheme = whiteDarkInit({
  settings: {
    foreground: "#F9FAFC",
    background: "#151519",
    gutterBackground: "#151519",
    lineHighlight: "transparent",
    selection: "#3E424A",
    fontFamily: "monospace",
    gutterForeground: "#B1B3BC",
    // matchingBracket: "#6483F0",
    // keyword: null,
    // storage: null,
    // variable: null,
    // parameter: null,
    // function: null,
    // string: "#B1B3BC",
    // constant: null,
    // type: null,
    // class: null,
    // number: null,
    // comment: "#2e2e37",
    // heading: null,
    // invalid: null,
    // regexp: "#B1B3BC",
    // tag: null,
    gutterBorder: "transparent",
  },
});

export function CodeBoxDisplay({
  apiKey = "YOUR_API_KEY",
  modelName = "gpt-3.5-turbo",
  messages,
}: {
  modelName?: string;
  apiKey?: string;
  messages?: ChatMessageType[];
}) {
  // const theme = useTypedSelector((state) => state.theme.theme);

  if (!apiKey) apiKey = "YOUR_API_KEY";
  let displayMessages: string;
  let phpMessages: string;
  if (messages != undefined) {
    displayMessages = JSON.stringify(
      messages.map((message) => {
        const { id, ...rest } = message;
        return rest;
      })
    );
    phpMessages = generatePHPArrayCode(
      messages.map((message) => {
        const { id, ...rest } = message;
        return rest;
      })
    );
  } else {
    displayMessages = `[{"role": "user", "content": "Hello"}]`;
    phpMessages = `array(["role" => "user", "content" => "Hello"])`;
  }

  const [isOpenAI, setIsOpenAI] = useState(true);
  const languages:any = (model: string, displayMessages: string) => {
    return [
      {
        name: "Python",
        value: "python",
        text: "Python",
        icon: Python,
        extension: loadLanguage("python"),
        code: `import requests
import json
      
headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${apiKey}",
}
      
data = {
  "model": "${model || "gpt-3.5-turbo"}",
  "messages": ${displayMessages},
  "stream": False,
  "max_tokens": 100,
  # ... other parameters in similar format ...
}
      
response = requests.post("https://api.keywordsai.co/chat/completions",
headers=headers, json=data)`,
      },
      {
        name: "JavaScript",
        value: "javascript",
        text: "JavaScript",
        icon: JavaScript,
        extension: loadLanguage("javascript"),
        code: `fetch("https://api.keywordsai.co/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${apiKey}",
  },
  body: JSON.stringify({
    "model": "${model || "gpt-3.5-turbo"}",
    "messages": ${displayMessages},
    "stream": false,
    "max_tokens": 100,
    // ... other parameters in similar format ...
  }),
})
.then(response => response.json())
.then(data => console.log(data));`,
      },
      {
        name: "Bash",
        value: "bash",
        text: "Bash",
        icon: Bracket,

        extension: loadLanguage("shell"),
        code: `curl -X POST "https://api.keywordsai.co/chat/completions" 
-H "Content-Type: application/json" 
-H "Authorization: Bearer ${apiKey}" 
-d "{
  "model": "${model || "gpt-3.5-turbo"}",
  "messages": ${displayMessages},
  "stream": false,
  "max_tokens": 100,
  ... other parameters in similar format ...
}"`,
      },
      {
        name: "PHP",
        value: "php",
        text: "PHP",
        icon: Php,
        extension: loadLanguage("php"),
        code: `<?php
  $ch = curl_init();
    
  curl_setopt($ch, CURLOPT_URL, "https://api.keywordsai.co/chat/completions");
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json",
    "Authorization: Bearer ${apiKey}",
  ));
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(
    "model" => "${model || "gpt-3.5-turbo"}",
    "messages" => ${phpMessages},
    "stream" => false,
    "max_tokens" => 100,
    // ... other parameters in similar format ...
  )));
    
  $response = curl_exec($ch);
  curl_close($ch);
?>`,
      },
      {
        name: "Go",
        value: "go",
        text: "Go",
        icon: Go,
        extension: loadLanguage("go"),
        code: `package main
import (
  "bytes"
  "net/http"
)
    
func main() {
  url := "https://api.keywordsai.co/chat/completions"
  method := "POST"
    
  payload := []byte(\`{
    "model" : "${model || "gpt-3.5-turbo"}",
    "messages": ${displayMessages},
    "stream": false,
    "max_tokens": 100,
    ... other parameters in similar format ...
  }\`)
    
  client := &http.Client{}
  req, err := http.NewRequest(method, url, bytes.NewBuffer(payload))
    
  if err != nil {
    panic(err)
  }
    
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "Bearer ${apiKey}")
    
  res, err := client.Do(req)
  defer res.Body.Close()
}`,
      },
    ];
  };
  const openAIlanguages = (model: string, displayMessages: string) => {
    return [
      {
        name: "Python",
        value: "python",
        text: "Python",
        icon: Python,
        extension: loadLanguage("python"),
        code: `from openai import OpenAI

client = OpenAI(
  base_url="https://api.keywordsai.co/api/",
  api_key="${apiKey}",
)

response = client.chat.completions.create(
  model="${model || "gpt-3.5-turbo"}",
  messages=${displayMessages},
  stream=True,
  extra_body={"customer_identifier": "customer_11"}
)`,
      },
      {
        name: "JavaScript",
        value: "javascript",
        text: "JavaScript",
        icon: JavaScript,
        extension: loadLanguage("javascript"),
        code: `import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.keywordsai.co/api/",
  apiKey: "${apiKey}",
});

const chatCompletion = await openai.chat.completions.create({
  model: "${model || "gpt-3.5-turbo"}",
  messages: ${displayMessages},
});`,
      },
    ];
  };
  const leftButtons = [
    {
      text: "OpenAI SDK",
      icon: OpenAI,
      iconSize: "sm", // Add iconSize property with value "sm"
      onClick: () => {
        setIsOpenAI(true);
      },
    },
    {
      text: "Standard API call",
      icon: Code,
      iconSize: "sm",
      onClick: () => {
        setIsOpenAI(false);
      },
    },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  useEffect(() => {
    if (copyClicked) {
      setTimeout(() => {
        setCopyClicked(false);
      }, 4000);
    }
  }, [copyClicked]);

  useEffect(() => {
    if (isOpenAI) {
      setCurrentLanguage(openAIlanguages(modelName, displayMessages)[0]);
    } else {
      setCurrentLanguage(languages(modelName, displayMessages)[0]);
    }
  }, [isOpenAI, modelName]);
  const languagesButtons = languages(modelName, displayMessages).map(
    (e: { name: string; value: string; icon: any }, i: number) => ({
      text: e.name,
      value: e.value,
      icon: e.icon,
      onClick: () =>
        setCurrentLanguage(languages(modelName, displayMessages)[i]),
    })
  );

  const openAIlanguagesButtons = openAIlanguages(
    modelName,
    displayMessages
  ).map((e: { name: string; value: string; icon: any }, i: number) => ({
    text: e.name,
    value: e.value,
    icon: e.icon,
    onClick: () =>
      setCurrentLanguage(openAIlanguages(modelName, displayMessages)[i]),
  }));
  return (
    <div className="flex-col w-[800px] items-center rounded-md shadow-border shadow-gray-3 bg-gray-1">
      <div className="flex items-center justify-between self-stretch px-sm py-xs rounded-t-md">
        <div className="flex flex-row items-center gap-xxs">
          <NewDropDownMenu
            open={open}
            setOpen={setOpen as Dispatch<SetStateAction<boolean>>}
            align="start"
            alignOffset={0}
            sideOffset={4}
            width={"w-[200px]"}
            trigger={

              <Button
                variant="small"
                icon={Down}
                iconSize="xxs"
                secIcon={isOpenAI ? OpenAI : Code}
                secIconPosition="left"
                secIconSize="sm"
                text={isOpenAI ? "OpenAI SDK" : "Standard API call"}
                onClick={() => setOpen(!open)}
                iconPosition={"right"}
                active={open}
              />
            }
            items={
              <>
                {leftButtons.map((button, index) => (
                  <DropdownMenuItem asChild key={index}>
                    <Button
                      variant="panel"
                      text={button.text}
                      // onClick={() => setCurrentLanguage(language)}
                      onClick={button.onClick}
                      icon={button.icon}
                      iconPosition="left"
                      iconSize="sm"
                      justification="justify-start"
                    />
                  </DropdownMenuItem>
                ))}
              </>
            }
          />
          <div className="w-[1px] h-[28px] bg-gray-2"></div>
          {!isOpenAI && (
            <ButtonGroupSmall
              buttons={languagesButtons}
              defaultActive={languagesButtons.findIndex(
                (i: any) => i.value == currentLanguage?.value
              )}
            />
          )}
          {isOpenAI && (
            <ButtonGroupSmall
              buttons={openAIlanguagesButtons}
              defaultActive={openAIlanguagesButtons.findIndex(
                (i) => i.value == currentLanguage?.value
              )}
            />
          )}
        </div>

        {!copyClicked ? (
          <Button
            variant="text"
            text="Copy code"
            icon={Copy}
            iconSize="sm"
            onClick={() => {
              setCopyClicked(true);
              navigator.clipboard.writeText(currentLanguage.code);
            }}
          />
        ) : (
          <Button variant="text" text="Copied" icon={Check} iconSize="sm" />
        )}
      </div>
      <div className="h-[1px] self-stretch bg-gray-2"></div>
      <CodeBlock currentLanguage={currentLanguage} theme={DarkTheme} />
    </div>
  );
}

function generatePHPArrayCode(obj: any): string {
  if (Array.isArray(obj)) {
    const arrayItems = obj.map(generatePHPArrayCode).join(", ");
    return `array(${arrayItems})`;
  } else if (typeof obj === "object") {
    const objectItems = Object.entries(obj)
      .map(([key, value]) => `"${key}" => ${generatePHPArrayCode(value)}`)
      .join(", ");
    return `array(${objectItems})`;
  } else if (typeof obj === "string") {
    return `"${obj}"`;
  } else {
    return String(obj);
  }
}

const CodeBlock = ({ currentLanguage, theme }: { currentLanguage: any, theme: any }) => {
  return (
    <div className="flex p-xs self-stretch w-full rounded-b-md bg-fill">
      <CodeMirror
        value={currentLanguage?.code}
        extensions={[
          (currentLanguage?.extension as Extension) || loadLanguage("python"),
        ]}
        editable={false}
        className="w-full"
        height="100%"
        basicSetup={{ tabSize: 1, foldGutter: false }}
        theme={DarkTheme}
      />
    </div>
  );
};
