"use client";
import React, { useEffect, useState } from "react";
import { fetchModels } from "@/services/modelService";
import { ModelsResponse } from "@/types/models";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "@/app/components/Icons/iconsDS";

type SortDirection = 'asc' | 'desc' | null;

export const Library = () => {
  const [models, setModels] = useState<ModelsResponse["models"]>([]);
  const [sortField, setSortField] = useState<'input_cost' | 'output_cost' | 'max_context_window' | 'max_output_length' | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSort = (field: 'input_cost' | 'output_cost' | 'max_context_window' | 'max_output_length') => {
    if (sortField === field) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortField(null);
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredModels = models.filter((model) =>
    model.model_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.provider.provider_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedModels = [...filteredModels].sort((a, b) => {
    if (!sortField || !sortDirection) return 0;
    
    const aValue = a[sortField] || 0;
    const bValue = b[sortField] || 0;
    
    return sortDirection === 'asc' 
      ? Number(aValue) - Number(bValue)
      : Number(bValue) - Number(aValue);
  });

  return (
    <div className="flex flex-col items-center gap-xl self-stretch pt-[140px] px-sm pb-[120px] ">
      <div className="flex flex-col items-center gap-xxs">
        <h1 className="text-gray-4 max-w-[1200px] w-full display-lg text-center">
          <span className="text-gray-white">250+</span> AI models
        </h1>
        <h2 className="text-gray-4 text-sm">Curated by Keywords AI</h2>
      </div>
      <div className="flex flex-col items-start max-h-[800px] max-w-[1200px] w-full gap-sm">
        <div className="w-[320px] flex items-center px-sm bg-gray-2 rounded-sm h-[36px]">
          <Search />
          <input
            type="text"
            placeholder="Search models or providers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-sm py-xs bg-transparent text-md-regular text-gray-white focus:outline-none h-[36px]"
          />
        </div>
        <div className="grid grid-cols-[148px_1fr_160px_160px_160px_164px] rounded-sm bg-gray-2 items-center min-h-[42px] w-full px-sm">
          <span className="text-gray-4 text-md-md">Provider</span>
          <span className="text-gray-4 text-md-md">Model</span>
          <button 
            onClick={() => handleSort('output_cost')}
            className="text-gray-4 text-md-md text-left hover:text-gray-white"
          >
            Output (1M tokens){sortField === 'output_cost' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => handleSort('input_cost')}
            className="text-gray-4 text-md-md text-left hover:text-gray-white"
          >
            Input (1M tokens){sortField === 'input_cost' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => handleSort('max_context_window')}
            className="text-gray-4 text-md-md text-left hover:text-gray-white"
          >
            Context window{sortField === 'max_context_window' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
          <button 
            onClick={() => handleSort('max_output_length')}
            className="text-gray-4 text-md-md text-left hover:text-gray-white"
          >
            Max output tokens{sortField === 'max_output_length' && (sortDirection === 'asc' ? '↑' : '↓')}
          </button>
        </div>
        <div className="flex flex-col items-start w-full overflow-y-auto">
          {sortedModels.map((model) => (
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
                {model.display_name}
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
