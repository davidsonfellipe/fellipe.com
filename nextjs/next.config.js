// next.config.js
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  excludeFile: (str) =>
    /(\.DS_Store|\.git|\.next|node_modules)/.test(str) ||
    /(\/\..+)/.test(str),
};
  