'use strict';

function enter(element, done) {
  // run the animation here and call done when the animation is complete
  return function(cancelled) {
    // this (optional) function will be called when the animation
    // completes or when the animation is cancelled (the cancelled
    // flag will be set to true if cancelled).
  };
}

function leave(element, done) { }

export default angular.module('<%= cameledName %>', ['ngAnimate'])
  .animation('.<%= tagName %>', () => ({
    enter: enter,
    leave: leave,
  }));
