import { ModelsResponse } from '@/types/models';

export const fetchModels = async (): Promise<ModelsResponse> => {
  const response = await fetch('https://api.keywordsai.co/api/models/public');
  if (!response.ok) {
    throw new Error('Failed to fetch models');
  }
  return response.json();
};

export async function fetchModelByName(modelName: string) {
  const response = await fetch(`https://api.keywordsai.co/api/models/${modelName}`);
  if (!response.ok) {
    throw new Error('Failed to fetch model');
  }
  return response.json();
}