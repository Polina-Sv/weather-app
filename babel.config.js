module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);

  const isProduction = process.env.NODE_ENV === "production";

  return {
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          development: !isProduction,
          runtime: "automatic",
        },
      ],
    ],
  };
};