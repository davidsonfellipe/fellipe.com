module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  excludeFile: (str) =>
    /(\.DS_Store|\.git|\.next|node_modules)/.test(str) ||
    /(\/\..+)/.test(str),
};
  