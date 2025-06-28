import { promises as fs } from "fs";
import path from "path";

interface CustomerMetaData {
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  image: string;
  date: string;
  industry: string;
  company: {
    name: string;
    logo: string;
  };
  h1?: string;
  type?: string;
}

export async function getCustomerMetadata(
  filePath: string
): Promise<CustomerMetaData | null> {
  const basePath = path.join(process.cwd(), "src", "app", "customers", "articles", filePath);

  const jsonPath = path.join(basePath, "metadata.json");
  try {
    const jsonContent = await fs.readFile(jsonPath, "utf8");
    const customerMetadata = JSON.parse(jsonContent);
    console.log("Customer metadata loaded:", customerMetadata);
    return customerMetadata;
  } catch (error) {
    console.error("Error loading customer metadata:", error);
  }
  return null;
} 