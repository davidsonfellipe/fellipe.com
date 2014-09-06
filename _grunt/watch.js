// Hint: newer:taskName - configure Grunt tasks to run with newer files only.
module.exports = {
  scripts: {
      files: ['<%= path %>scss/*.scss'],
      tasks: ['sass'],
      options: {
          nospawn: true,
          debounceDelay: 250,
      },
  }
};
