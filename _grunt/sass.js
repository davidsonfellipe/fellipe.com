// This task requires you to have Ruby and Sass installed.
module.exports = {
  dist: {
    options: {
      style: 'compressed'
    },
    files: [{
      expand: true,
      cwd: '<%= path %>scss',
      src: ['*.{scss,sass}'],
      dest: '<%= path %>css',
      ext: '.css'
    }]
  }
};
