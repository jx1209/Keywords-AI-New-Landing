import { ReactNode } from "react";

export interface ModelParameter {
    name: string;
    type: string;
    default?: number | string;
    range?: {
      min: number;
      max: number;
    };
    description: string;
    required: boolean;
  }
  
  export interface ModelProvider {
    provider_name: string;
    provider_id: string;
    api_key: string;
    moderation: string;
    credential_fields: string[];
  }
  
  export interface Model {
    max_output_length: ReactNode;
    model_name: string;
    display_name: string;
    audio_support: number;
    input_cost: number;
    output_cost: number;
    rate_limit: number;
    supported_params: {
      [key: string]: ModelParameter;
    };
    max_context_window: number;
    function_call: number;
    json_mode: number;
    image_support: number;
    image_generation_support: number;
    prompt_cost: number;
    completion_cost: number;
    provider: ModelProvider;
  }
  
  export interface ModelsResponse {
    models: Model[];
  }