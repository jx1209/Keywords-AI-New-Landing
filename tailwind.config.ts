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
  theme: theme,
  plugins: [require("./flexPlugin.js")],
};
export default config;
