module.exports = {
  build: {
    auth: {
      host: 'fellipe.com',
      port: 21,
      authKey: 'key'
    },
    src: '_site/',
    dest: '/public_html/',
    exclusions: ['.DS_Store',
                 'Makefile',
                 'package.json',
                 'Gruntfile.js',
                 'node_modules'],
    simple: true,
    useList: false
  }
};
