// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // Add this new configuration object for React-specific rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Ensure these rules apply to your code files
    settings: {
      react: {
        version: "detect", // Automatically detect the React version from your package.json
      },
    },
    rules: {
      // Disable the unescaped entities rule
      "react/no-unescaped-entities": "off",
      // You can add other React-specific rules here if needed
      // For example:
      // "react/react-in-jsx-scope": "off", // Not needed in React 17+ with new JSX transform
    },
  },
];

export default eslintConfig;