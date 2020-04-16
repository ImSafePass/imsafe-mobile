module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            components: "./src/shared/components",
            pages: "./src/shared/pages",
            assets: "./src/shared/assets",
            utils: "./src/shared/utils",
          },
        },
      ],
    ],
  };
};
