$.widget("ui.bgRed", {
  // default options
  options: {
    'background-color': "red"
  },
  _create: function() {
    // creation code for mywidget
    // can use this.options
    if (this.options.hidden) {
      // and this.element
      this.element.hide(); 
    }
  },
  destroy: function() {
      $.Widget.prototype.destroy.apply(this, arguments); // default destroy
  }
});