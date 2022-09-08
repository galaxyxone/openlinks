const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  plugins: [{ plugin: CracoAliasPlugin, options: {} }],
};
