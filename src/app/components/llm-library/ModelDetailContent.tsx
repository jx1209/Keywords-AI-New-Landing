"use client";

import { useEffect, useState } from "react";
import { ModelsResponse } from "@/types/models";
import { OpenAI } from "../Icons";
import { Button } from "../Buttons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import { fetchModels } from "@/services/modelService";

export function ModelDetailContent({ modelName }: { modelName: string }) {
  const [model, setModel] = useState<ModelsResponse["models"][0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // First try to get from localStorage
        const modelData = localStorage.getItem(`model-${modelName}`);
        if (modelData) {
          setModel(JSON.parse(modelData));
          return;
        }

        // If not in localStorage, fetch from API
        const response = await fetchModels();
        const foundModel = response.models.find(
          m => m.model_name.replace(/[/:]/g, "-") === modelName
        );
        
        if (foundModel) {
          setModel(foundModel);
          // Store in localStorage for future use
          localStorage.setItem(`model-${modelName}`, JSON.stringify(foundModel));
        }
      } catch (error) {
        console.error("Error loading model data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadModel();
  }, [modelName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex justify-center items-center gap-xxs self-stretch bg-primary-2 mt-[60px] w-full py-xxs">
        <span className="text-gray-white text-md-md">Not sure which model is right for you? Check out our latest blog:</span>
        <a href="https://www.keywordsai.co/blog/best-llms" className="text-gray-white text-md-md underline">The best LLMs for 2025</a>
      </div>
      <div className="flex flex-col items-center self-stretch pt-[75px] px-sm pb-[120px] gap-xl">
        <div className="flex flex-col items-center gap-xxs w-full">
          <div className="flex items-center gap-xxxs">
            {/* <OpenAI size="sm" /> */}
            <span className="text-gray-4 caption">
              {model.provider.provider_name}
            </span>
          </div>
          <h1 className="text-gray-white display-lg">{model.display_name} features</h1>

        </div>
        <div className="flex items-start gap-xl w-full max-w-[1200px]">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full border border-gray-3 rounded-sm divide-y divide-gray-3"
          >
            <AccordionItem value="context-window" className="border-0 px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  What is {model.display_name || model.model_name}&apos;s context
                  window?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  {model.display_name || model.model_name} supports a context
                  window of up to{" "}
                  {model.max_context_window
                    ? model.max_context_window.toLocaleString()
                    : "Not specified"}{" "}
                  tokens.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="max-output" className="px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  What is the maximum output length for{" "}
                  {model.display_name || model.model_name}?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  {model.display_name || model.model_name} can generate outputs of
                  up to{" "}
                  {model.max_output_length
                    ? model.max_output_length.toLocaleString()
                    : "Not specified"}{" "}
                  tokens in a single response.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pricing" className="px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  How is {model.display_name || model.model_name} priced?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  Input:{" "}
                  {model.input_cost === 0
                    ? "Free"
                    : `$${model.input_cost} / 1 million`}{" "}
                  tokens. Output:{" "}
                  {model.output_cost === 0
                    ? "Free"
                    : `$${model.output_cost} / 1 million`}{" "}
                  tokens
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vision" className="px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  Does {model.display_name || model.model_name} support vision
                  inputs?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  {model.image_support === 1 ? (
                    `Yes, ${model.display_name || model.model_name} supports vision capabilities.`
                  ) : (
                    `No, ${model.display_name || model.model_name} does not support vision capabilities.`
                  )}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="audio" className="px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  Does {model.display_name || model.model_name} support audio
                  functionality?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  {model.audio_support === 1 ? (
                    `Yes, ${model.display_name || model.model_name} supports audio functionality.`
                  ) : (
                    `No, ${model.display_name || model.model_name} does not support audio functionality.`
                  )}
                </p>
              </AccordionContent>
            </AccordionItem>

              <AccordionItem value="function-calls" className="px-[24px] py-[24px]">
              <AccordionTrigger className="py-[0px]">
                <span className="text-gray-white display-xs">
                  Can {model.display_name || model.model_name} perform tool
                  calling (functions)?
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-xxs">
                <p className="text-gray-4 text-md-regular">
                  {model.function_call === 1 ? (
                    `Yes, ${model.display_name || model.model_name} supports tool calling (functions).`
                  ) : (
                    `No, ${model.display_name || model.model_name} does not support tool calling (functions).`
                  )}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-col items-center gap-sm w-full max-w-[420px] shadow-border border-gray-3 bg-gray-2 p-sm rounded-sm shadow-window">
            <div className="flex flex-col items-start w-full gap-xxxs">
              <div className="flex items-center justify-between w-full">
                <span className="text-gray-white display-xs truncate pr-sm">
                  {model.display_name || model.model_name}
                </span>
                <div className="flex items-center gap-xxxs">
                  {/* <OpenAI size="sm" /> */}
                  <span className="text-gray-4 caption">
                    {model.provider.provider_name}
                  </span>
                </div>
              </div>
              <div className="flex items-start w-full gap-xxxs">
                {model.image_support === 1 && (
                  <div className="flex bg-gray-3 rounded-sm py-[2px] px-[6px]">
                    <span className="text-gray-4 caption">Vision</span>
                  </div>
                )}
                {model.audio_support === 1 && (
                  <div className="flex bg-gray-3 rounded-sm py-[2px] px-[6px]">
                    <span className="text-gray-4 caption">Audio</span>
                  </div>
                )}
                {model.function_call === 1 && (
                  <div className="flex bg-gray-3 rounded-sm py-[2px] px-[6px]">
                    <span className="text-gray-4 caption">Function Call</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-xxs">
              <div className="flex flex-col gap-0 max-w-[180px] w-full">
                <span className="text-gray-4  caption">Input token pricing</span>
                <span className="text-gray-white text-md-md">
                  {model.input_cost === 0 ? "Free" : `$${model.input_cost} / 1M`}
                </span>
              </div>
              <div className="flex flex-col gap-0 max-w-[180px] w-full">
                <span className="text-gray-4 caption">Output token pricing</span>
                <span className="text-gray-white text-md-md">
                  {model.output_cost === 0
                    ? "Free"
                    : `$${model.output_cost} / 1M`}
                </span>
              </div>
              <div className="flex flex-col gap-0 max-w-[180px] w-full">
                <span className="text-gray-4 caption">Context window</span>
                <span className="text-gray-white text-md-md">
                  {model.max_context_window
                    ? model.max_context_window.toLocaleString()
                    : "Not specified"}
                </span>
              </div>
              <div className="flex flex-col gap-0 max-w-[180px] w-full">
                <span className="text-gray-4 caption">Maximum output</span>
                <span className="text-gray-white text-md-md">
                  {model.max_output_length
                    ? model.max_output_length.toLocaleString()
                    : "Not specified"}
                </span>
              </div>
            </div>
            <Button
              variant="r4-primary"
              text="Try in Playground"
              className="w-full"
              onClick={() =>
                (window.location.href =
                  "https://platform.keywordsai.co/platform/playground")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
