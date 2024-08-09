import CodeMirror from "@uiw/react-codemirror";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { DropDownMenu } from "../DropDownMenu";
import {
  Bracket,
  Copy,
  Down,
  Go,
  JavaScript,
  Php,
  Python,
  Check,
} from "../Icons";
import { Button } from "../Buttons";
import { useEffect, useState } from "react";
import "./CodeViewer.css";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { whiteDark, whiteDarkInit } from "@uiw/codemirror-theme-white/dark";
const languages = [
  {
    name: "Bash",
    value: "bash",
    icon: Bracket,
    extension: loadLanguage("shell"),
    code: `curl -X POST "https://keywordsapi.info/api/generate/" 
  -H "Content-Type: application/json" 
  -H "Authorization: Api-Key {YOUR_ACCESS_TOKEN}" 
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
    'Authorization': 'Api-Key {YOUR_ACCESS_TOKEN}',
  }
  
  data = {
    'messages': [{'role': 'user', 'content': 'Hello'}],
    'stream': False,
    'max_tokens': 100,
    # ... other parameters in similar format ...
  }
  
  response = requests.post('https://keywordsapi.info/api/generate/',
    headers=headers, json=data)
    `,
  },
  {
    name: "Javascript",
    value: "javascript",
    icon: JavaScript,
    extension: loadLanguage("javascript"),
    code: `fetch('https://keywordsapi.info/api/generate/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Api-Key {YOUR_ACCESS_TOKEN}',
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
  
  curl_setopt($ch, CURLOPT_URL, 'https://keywordsapi.info/api/generate/');
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Api-Key {YOUR_ACCESS_TOKEN}',
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
    url := "https://keywordsapi.info/api/generate/"
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
    req.Header.Add("Authorization", "Api-Key {YOUR_ACCESS_TOKEN}")
  
    res, err := client.Do(req)
    defer res.Body.Close()
  }
  `,
  },
];
export function CodeViewer() {
  // const theme = useSelector((state) => state.theme.theme);[]
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  const DarkTheme = whiteDarkInit({
    settings: {
      foreground: "#F9FAFC",
      background: "transparent",
      gutterBackground: "transparent",
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
    <div className="flex-col w-[800px] items-center rounded-md shadow-border shadow-gray-3 bg-gray-1">
      <div className="flex items-center justify-between self-stretch px-sm py-xxs rounded-t-md">
        <DropDownMenu
          open={open}
          setOpen={setOpen}
          width={"w-[160px]"}
          trigger={
            <Button
              variant="small"
              icon={Down}
              iconSize="xxs"
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
      <div className="h-[1px] self-stretch bg-highlight"></div>
      <div className="flex p-xs self-stretch w-full rounded-b-md bg-fill">
        <CodeMirror
          value={currentLanguage.code}
          extensions={[currentLanguage.extension]}
          editable={false}
          className="w-full"
          height="100%"
          basicSetup={{ tabSize: 1, foldGutter: false }}
          theme={DarkTheme}
        />
      </div>
    </div>
  );
}
