import CodeMirror, { Extension } from "@uiw/react-codemirror";
import "./CodeBoxDisplay.css";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";

import { DropDownMenu } from "src/components/DropDownMenu";
import {
  Bracket,
  Copy,
  Down,
  Go,
  JavaScript,
  Php,
  Python,
  Check,
} from "src/components/Icons";
import { Button } from "src/components/Buttons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { whiteDarkInit } from "@uiw/codemirror-theme-white/dark";
import { whiteLightInit } from "@uiw/codemirror-theme-white/light";

export function CodeBoxDisplay({
  modelName,
  apikey,
}: {
  modelName?: string[];
  apikey: string;
}) {
  const languages = [
    {
      name: "Bash",
      value: "bash",
      icon: Bracket,
      extension: loadLanguage("shell"),
      code: `curl -X POST "https://api.keywordsai.co/api/generate/" 
    -H "Content-Type: application/json" 
    -H "Authorization: Api-Key ${apikey}" 
    -d '{
      "messages":[{
        "role":"user",
        "content":"Hello"
      }],
      "stream": false,
      "max_tokens": 100,
      ... other parameters in similar format ...
    }'`,
    },
    {
      name: "Python",
      value: "python",
      icon: Python,
      extension: loadLanguage("python"),
      code: `import requests
    import json
    
    headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Api-Key ${apikey}',
    }
    
    data = {
      'messages': [{'role': 'user', 'content': 'Hello'}],
      'stream': False,
      'max_tokens': 100,
      # ... other parameters in similar format ...
    }
    
    response = requests.post('https://api.keywordsai.co/api/generate/',
      headers=headers, json=data)
      `,
    },
    {
      name: "Javascript",
      value: "javascript",
      icon: JavaScript,
      extension: loadLanguage("javascript"),
      code: `fetch('https://api.keywordsai.co/api/generate/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Api-Key ${apikey}',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello' }],
        'stream': false,
        'max_tokens': 100,
        // ... other parameters in similar format ...
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data));
    `,
    },
    {
      name: "PHP",
      value: "php",
      icon: Php,
      extension: loadLanguage("php"),
      code: `<?php
    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, 'https://api.keywordsai.co/api/generate/');
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
      'Content-Type: application/json',
      'Authorization: Api-Key ${apikey}',
    ));
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(array(
      "messages" => array(
        array("role" => "user", "content" => "Hello")
      ),
      "stream" => false,
      "max_tokens" => 100,
      // ... other parameters in similar format ...
    )));
    
    $response = curl_exec($ch);
    curl_close($ch);
    ?>
    `,
    },
    {
      name: "Golang",
      value: "go",
      icon: Go,
      extension: loadLanguage("go"),
      code: `package main
  import (
      "bytes"
      "net/http"
    )
    
    func main() {
      url := "https://api.keywordsai.co/api/generate/"
      method := "POST"
    
      payload := []byte(\`{
        "messages": [{"role": "user", "content": "Hello"}],
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
      req.Header.Add("Authorization", "Api-Key ${apikey}")
    
      res, err := client.Do(req)
      defer res.Body.Close()
    }
    `,
    },
  ];
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);
  const LightTheme = whiteLightInit({
    settings: {
      background: "#transparent",
      foreground: "#151519",
      gutterForeground: "#B1B3BC",
      fontFamily: "monospace",
      lineHighlight: "transparent",
      gutterBackground: "#F9FAFC",
      selection: "#3E424A",
      matchingBracket: "#6483F0",
      string: "#1E1E23",
      comment: "#DDE0E8",
      regexp: "#1E1E23",
      gutterBorder: "transparent",
    },
  });
  const DarkTheme = whiteDarkInit({
    settings: {
      foreground: "#F9FAFC",
      background: "#151519",
      gutterBackground: "#151519",
      lineHighlight: "transparent",
      selection: "#3E424A",
      fontFamily: "monospace",
      gutterForeground: "#B1B3BC",
      matchingBracket: "#6483F0",
      keyword: null,
      storage: null,
      variable: null,
      parameter: null,
      function: null,
      string: "#B1B3BC",
      constant: null,
      type: null,
      class: null,
      number: null,
      comment: "#2e2e37",
      heading: null,
      invalid: null,
      regexp: "#B1B3BC",
      tag: null,
      gutterBorder: "transparent",
    },
  });

  useEffect(() => {
    if (copyClicked) {
      setTimeout(() => {
        setCopyClicked(false);
      }, 4000);
    }
  }, [copyClicked]);
  return (
    <div className="flex-col w-[800px] sm:w-[360px] items-center rounded-md shadow-border shadow-gray-2 bg-gray-1">
      <div className="flex items-center justify-between self-stretch px-sm py-xxs rounded-t-md">
        <DropDownMenu
          open={open}
          setOpen={setOpen as Dispatch<SetStateAction<boolean | undefined>>}
          width={"w-[160px]"}
          align="start"
          trigger={
            <Button
              variant="small"
              icon={Down}
              iconSize="xxs"
              className="outline-none"
              text={currentLanguage.name}
              onClick={() => setOpen(!open)}
              iconPosition={"right"}
            />
          }
          items={
            <>
              {languages.map((language, index) => (
                <DropdownMenuItem asChild key={index}>
                  <Button
                    variant="panel"
                    text={language.name}
                    onClick={() => setCurrentLanguage(language)}
                    icon={language.icon}
                    iconPosition="left"
                    className="outline-none"
                    iconSize="md"
                    justification="justify-start"
                  />
                </DropdownMenuItem>
              ))}
            </>
          }
        />
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
      <div className="flex p-xs self-stretch w-full rounded-b-md bg-fill">
        <CodeMirror
          value={currentLanguage.code}
          extensions={[currentLanguage.extension as Extension]}
          editable={false}
          className="w-full "
          height="100%"
          basicSetup={{ tabSize: 1, foldGutter: false }}
          theme={DarkTheme}
        />
      </div>
    </div>
  );
}
