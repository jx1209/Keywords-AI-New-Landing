"use client";
import React, { useEffect, useState } from "react";
import { fetchModels } from "@/services/modelService";
import { ModelsResponse } from "@/types/models";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Library = () => {
  const [models, setModels] = useState<ModelsResponse["models"]>([]);
  const router = useRouter();
  useEffect(() => {
    const loadModels = async () => {
      const response = await fetchModels();
      setModels(response.models);
      console.log("models", response.models);
    };
    loadModels();
  }, []);

  const handleModelClick = (
    model: ModelsResponse["models"][0],
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    const safeModelName = model.model_name.replace(/[/:]/g, "-");
    localStorage.setItem(`model-${safeModelName}`, JSON.stringify(model));
    router.push(`/llm-library/${safeModelName}`);
  };

  return (
    <div className="flex flex-col items-center gap-xl self-stretch pt-[140px] px-sm pb-[120px] ">
      <div className="flex flex-col items-center gap-xxs">
        <h1 className="text-gray-4 max-w-[1200px] w-full display-lg text-center">
          <span className="text-gray-white">250+</span> AI models
        </h1>
        <h2 className="text-gray-4 text-sm">Curated by Keywords AI</h2>
      </div>
      <div className="flex flex-col items-start max-h-[800px] max-w-[1200px] w-full">
        <div className="grid grid-cols-[148px_1fr_160px_160px_160px_164px] rounded-sm bg-gray-2 items-center min-h-[42px] w-full px-sm">
          <span className="text-gray-4 text-md-md">Provider</span>
          <span className="text-gray-4 text-md-md">Model</span>
          <span className="text-gray-4 text-md-md">Output (1M tokens)</span>
          <span className="text-gray-4 text-md-md">Input (1M tokens)</span>
          <span className="text-gray-4 text-md-md">Context window</span>
          <span className="text-gray-4 text-md-md">Max output tokens</span>
        </div>
        <div className="flex flex-col items-start w-full overflow-y-auto">
          {models.map((model) => (
            <Link
              key={model.model_name}
              className="grid grid-cols-[148px_1fr_160px_160px_160px_160px] items-center w-full shadow-gray-2 hover:shadow-border hover:shadow-gray-3 shadow-[0_0_0_0.5px] min-h-[42px] h-fit rounded-sm hover:bg-gray-2  px-sm"
              href={`/llm-library/${model.model_name.replace(/\//g, "-")}`}
              onClick={(e) => handleModelClick(model, e)}
            >
              <span className="text-gray-white text-md-regular truncate">
                {model.provider.provider_name}
              </span>
              <span className="text-gray-white text-md-regular truncate pr-xs">
                {model.model_name}
              </span>
              <span className="text-gray-white text-md-regular truncate">
                $
                {typeof model.output_cost === "number"
                  ? model.output_cost.toFixed(3).replace(/\.?0+$/, "")
                  : model.output_cost}
              </span>
              <span className="text-gray-white text-md-regular truncate">
                $
                {typeof model.input_cost === "number"
                  ? model.input_cost.toFixed(3).replace(/\.?0+$/, "")
                  : model.input_cost}
              </span>
              <span className="text-gray-white text-md-regular truncate">
                {model.max_context_window
                  ? model.max_context_window.toLocaleString()
                  : "N/A"}
              </span>
              <span className="text-gray-white text-md-regular truncate">
                {model.max_output_length
                  ? model.max_output_length.toLocaleString()
                  : "N/A"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
