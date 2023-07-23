// next.config.js
module.exports = {
    // Disable server-side rendering (SSR)
    // Use 'exportPathMap' for static site generation (SSG)
    // Use 'trailingSlash' to add a trailing slash to SSG output (optional)
    exportPathMap: function () {
      return {
        '/': { page: '/' }, // Replace '/' with other pages as needed
      };
    },
    compiler: {
        styledComponents: true
    }
  };
  