var nb = require('nice-bar')

module.exports = angular
  .module('ngNiceBar', [])
  .directive('niceBar', niceBarDirective)
  .factory('niceBar', niceBarService);


// @ngInject
function niceBarDirective() {
  return {
    restrict: 'AE',
    link: function(scope, element, attr) {
      var delay = 0;

      if (attr.niceBarDelay) {
        delay = parseInt(attr.niceBarDelay, 10);
        if (delay.toString() === NaN.toString()) {
          throw new Error('nice-bar-delay shoule be a number');
        }
      }

      setTimeout(function() {
        setTimeout(function() {
          nb.init(element[0]);
        }, delay)
      }, 30)

    }
  }
}


// @ngInject
function niceBarService() {
  return {
    init: function (element) {
      console.log(123456);
      nb.init(element);
    }
  }
}
