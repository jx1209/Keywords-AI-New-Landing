"use client";

import { useEffect, useState } from "react";
import { ModelsResponse } from "@/types/models";
import { OpenAI } from "../Icons";
import { Button } from "../Buttons";

export function ModelDetailContent({ modelName }: { modelName: string }) {
  const [model, setModel] = useState<ModelsResponse["models"][0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const modelData = localStorage.getItem(`model-${modelName}`);
      if (modelData) {
        setModel(JSON.parse(modelData));
      }
    } catch (error) {
      console.error('Error loading model data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [modelName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-lg self-stretch pt-[140px] px-sm pb-[120px] ">
      <div className="flex flex-col items-center gap-xxs w-full">
        <div className="flex items-center gap-xxxs">
          {/* <OpenAI size="sm" /> */}
          <span className="text-gray-4 caption">
            {model.provider.provider_name}
          </span>
        </div>
        <span className="text-gray-white display-lg">
          {model.display_name}
        </span>
        <h2 className="text-gray-4 text-sm">{model.model_name}</h2>
      </div>
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
              {model.output_cost === 0 ? "Free" : `$${model.output_cost} / 1M`}
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
  );
}
