module.exports = {
  build: {
    auth: {
      host: 'fellipe.com',
      port: 21,
      authKey: 'key'
    },
    src: '_site/',
    dest: '/public_html/_x',
    exclusions: ['.DS_Store',
                 'Makefile',
                 'temp',
                 'package.json',
                 'Gruntfile.js',
                 'node_modules'],
    // keep: ['/important/images/at/server/*.jpg'],
    simple: true,
    useList: false
  }
};
