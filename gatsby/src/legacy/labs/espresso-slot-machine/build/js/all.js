/*global ESM:false */

$(document).ready(function () {
  'use strict';

  (new ESM.slotMachine($('.esm-machine')));

});

/*
 *  ESM.slotMachine
 *
 *  Made by Davidson Fellipe
 *  Under MIT License
 */

var ESM = ESM || {};

(function($, window, document, undefined) {

  "use strict";

  var slotMachine = function (element, options) {

    this.el = element;

    this.defaults = {
      slots: 3,
      minRotations: 3,
      itemsPerSlot: 3,
      turnsPerSec: 1,
      slotsHeight: 100,
      classRunning: 'esm-machine-running',
      classWin: 'esm-machine-reel--blink',
      reels: this.el.find('.esm-machine-reel'),
      display: this.el.find('.esm-machine-display')
    };

    this.states = {
      IS_STARTING: false,
      IS_RUNNING: false,
      IS_READY: false,
      IS_ENDED: false
    };

    this.txt = {
      IS_STARTING: 'starting',
      IS_READY: 'espresso<br>slot machine',
      IS_RUNNING: 'good<br>luck',
      IS_TRY_AGAIN: 'try<br>again',
      IS_WIN: 'you won<br>',
    };

    this.gifts = [
      'cup of coffee',
      'tea',
      'espresso'
    ];

    this.conf = $.extend({}, this.defaults, options);

    this.results = [];
    this.turns = [];

    this.start();
    this.bind();
  };

  slotMachine.prototype.start = function (){

    this.setState('IS_READY');

  };

  slotMachine.prototype.getBackgroundPositionY = function (element) {

    //this function is needed because many browsers doen't support background-position-y
    var backgroundPosition = $(element).css('background-position').split(" ");

    return backgroundPosition[1];

  };

  slotMachine.prototype.setBackgroundPositionY = function (element, value) {

    //this function is needed because many browsers doen't support background-position-y
    var backgroundPosition = $(element).css('background-position').split(" ");

    backgroundPosition[1] = value;

    $(element).css('background-position', backgroundPosition.join(' '));

  };

  slotMachine.prototype.convertPositionToNumberPosition = function (element) {

    var position = parseInt( this.getBackgroundPositionY(element) ) / -100;

    return position % 3;

  };

  slotMachine.prototype.check = function (){

    var positions = [];

    for (var i = 0, len = this.conf.slots; i < len; i++) {
      positions[i] = this.convertPositionToNumberPosition(this.conf.reels.eq(i));

      if(positions[i] !== positions[0]) {
        this.setState('IS_TRY_AGAIN');
        return;
      }
    }

    this.setState('IS_WIN', this.gifts[positions[0]]);

    this.conf.display.addClass(this.conf.classWin);
  };

  slotMachine.prototype.generatePositions = function () {

    for (var i = 0, len = this.conf.slots; i < len; i++) {

      this.results[i] = ESM.Util.getRandomInt(0, this.conf.itemsPerSlot);

      // for minimal of turns
      this.turns[i] = ESM.Util.getRandomInt(this.conf.minRotations, this.conf.minRotations + i);

    }

  };

  slotMachine.prototype.showResult = function () {

    var currentPosition,
      futurePosition,
      futurePositionWithTurns,
      self = this;

    for (var i = 0, len = this.conf.slots; i < len; i++) {

      currentPosition = parseInt( this.getBackgroundPositionY(this.conf.reels.eq(i)), 10 );
      futurePosition = currentPosition - ( this.results[i] * this.conf.slotsHeight );
      futurePositionWithTurns = futurePosition - ( this.turns[i] * this.conf.slotsHeight );

      this.setBackgroundPositionY(this.conf.reels.eq(i), futurePositionWithTurns + 'px');
    }

    // trigger check result only on transitionend
    this.conf
      .reels
      .last()
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        self.check();
      });
  };

  slotMachine.prototype.spin = function () {

    this.generatePositions();
    this.showResult();

  };

  slotMachine.prototype.setState = function (state, suffix) {

    suffix = suffix || "";

    // reset all states
    this.states.IS_RUNNING = false;
    this.states.IS_READY = false;
    this.states.IS_READY = false;
    this.states.IS_ENDED = false;

    // set current state
    this.states[state] = true;
    this.conf.display.attr('data-state', state);
    this.conf.display.html(this.txt[state] + suffix);

  };

  slotMachine.prototype.bind = function () {

    var self = this;

    this.el
      .find('.esm-machine-button[data-machine-action="start"]')
      .click(function() {

        if(!self.states.IS_RUNNING) {
          self.setState('IS_RUNNING');
          self.spin();
        }

    });

  };

  // assign a slotMachine to namespace ESM
  window.ESM.slotMachine = slotMachine;

})(jQuery, window, document, undefined);

var ESM = ESM || {};

ESM.Util = ESM.Util || {};

ESM.Util.getRandomInt = function(min, max) {
  "use strict";

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
