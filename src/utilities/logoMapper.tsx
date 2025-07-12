import React from "react";
import {
  OctolaneLogo,
  AgentHubLogo,
  CruxLogo,
  EduPhoriaAiLogo,
  JobLoomLogo,
  JustPaidLogo,
  LawmeLogo,
  MilaLogo,
  ShepherdLogo,
  WonderChatLogo,
  LumonaLogo,
  GovlyLogo,
  MomenticLogo,
  FirstQuadrantLogo,
  WaddleLogo,
  RevisionDojoLogo,
  IIncLogo,
} from "@/app/components/landing/TeamsLogo";

type LogoSize = "sm" | "md";

interface LogoMapping {
  [key: string]: (props: { size?: LogoSize }) => JSX.Element | undefined;
}

const logoComponents: LogoMapping = {
  OctolaneLogo,
  AgentHubLogo,
  CruxLogo,
  EduPhoriaAiLogo,
  JobLoomLogo,
  JustPaidLogo,
  LawmeLogo,
  MilaLogo,
  ShepherdLogo,
  WonderChatLogo,
  LumonaLogo,
  GovlyLogo,
  MomenticLogo,
  FirstQuadrantLogo,
  WaddleLogo,
  RevisionDojoLogo,
  IIncLogo,
};

export function getLogoComponent(logoName: string): JSX.Element | null {
  // Handle cases like "OctolaneLogo-md" or "OctolaneLogo-sm"
  const [componentName, size] = logoName.split("-");
  const LogoComponent = logoComponents[componentName];
  
  if (!LogoComponent) {
    console.warn(`Logo component not found: ${componentName}`);
    return null;
  }
  
  // Handle size parameter for logos that support it (like OctolaneLogo)
  const logoSize = (size === "md" || size === "sm") ? size : "sm";
  
  return <LogoComponent size={logoSize} />;
}

export function isLogoComponentName(logoName: string): boolean {
  const [componentName] = logoName.split("-");
  return componentName in logoComponents;
} 