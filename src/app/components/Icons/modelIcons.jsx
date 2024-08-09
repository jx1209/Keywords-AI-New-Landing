import React from "react";
import { Anthropic, Cohere, Google, Labs, OpenAI } from ".";

const modelMap = {
  "openai": OpenAI,
  "gpt-3.5-turbo": OpenAI,
  "gpt-4-32k": OpenAI,
  "gpt-4": OpenAI,
  "gpt-4-1106-preview": OpenAI,
  "gpt-3.5-turbo-16k": OpenAI,
  
  "anthropic": Anthropic,
  "claude-instant-1": Anthropic,
  "claude-2.1": Anthropic,
  "claude-instant-1.2": Anthropic,

  "google": Google,
  "chat-bison": Google,

  "labs": Labs,
  "j2-light": Labs,
  "j2-ultra": Labs,
  "j2-mid": Labs,

  "cohere": Cohere,
  "command-nightly": Cohere,
};

export const ModelIcon = (model) => {
  return modelMap[model];
};