module.exports = ({ config, stage }) => {
  config.merge({
    resolve: {
      modulesDirectories: [
        `libs`
      ]
    }
  });
  return config;
};