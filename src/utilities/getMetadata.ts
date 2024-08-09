import { promises as fs } from "fs";
import path from "path";

interface BlogStructureMetaData {
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  images: string;
  time: string;
  timestamp: string;
  author?: string;
  authors?: string[];
  type: string;
}
export async function getMetadata(
  filePath: string
): Promise<BlogStructureMetaData | null> {
  const basePath = path.join(process.cwd(), "src", "app", "blog", "articles", filePath);

  const jsonPath = path.join(basePath, "metadata.json");
  try {
    const jsonContent = await fs.readFile(jsonPath, "utf8");
    const hMetadata = JSON.parse(jsonContent);
    return hMetadata;
  } catch (error) {
    console.error("Error loading metadata:", error);
  }
  return null;
}