const { getConfig } = require("@airbnb/config-babel");

const config = getConfig({
  library: true,
  react: true,
  next: true,
  esm: process.env.BABEL_OUTPUT === "esm",
  node: process.env.NODE_ENV === "test",
  typescript: true,
  env: {
    targets: { esmodules: true },
  },
});

config.plugins = [["@babel/plugin-proposal-class-properties", { loose: true }]];

module.exports = config;
