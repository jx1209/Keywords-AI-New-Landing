import type { Config } from "tailwindcss";
import { join } from "path";

const theme = require("./src/app/components/styles/theme.js");

const config: Config = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,js,jsx,html,mdx}"
    ),
  ],
  // theme: theme,
  theme: {
    extend: {
      ...theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)", ...theme.extend.fontFamily.inter],
        "fira-code": theme.extend.fontFamily["fira-code"],
      },
    },
    animation: {
      ...theme.animation,
    },
    boxShadow: {
      ...theme.boxShadow,
    },
    backgroundImage: {
      ...theme.backgroundImage,
    },
    screens: {
      ...theme.screens,
    },
  },
  plugins: [require("./flexPlugin.js")],
};
export default config;
