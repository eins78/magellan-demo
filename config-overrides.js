const { join } = require("path");

const isProduction = process.env.NODE_ENV === "production";

const websmithConfig = {
  debug: process.env.NODE_ENV === "debug",
  sourceMap: !isProduction,
  project: join(__dirname, "tsconfig.json"),
  config: join(__dirname, "websmith.config.json"),
  targets: "client,server",
};

module.exports = {
  webpack: function override(config, env) {
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include: [join(__dirname, "src"), join(__dirname, "node_modules", "@quatico", "magellan-client")],
      exclude: [/\.spec\.tsx?$/, /node_modules/],
      loader: "@quatico/websmith-webpack",
      options: websmithConfig,
    });

    return config;
  },
};
