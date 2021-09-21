module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    PLugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
