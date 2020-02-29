module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/__setup__/setup.js"],
};