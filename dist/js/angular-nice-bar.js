(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// var nb = require('nice-bar');

var nb = { init: function init() {} };

module.exports = angular.module('ngNiceBar', []).directive('niceBar', niceBarDirective).factory('niceBar', niceBarService);

function niceBarDirective() {
  return {
    restrict: 'AE',
    link: function link(scope, element, attr) {
      var delay = 0;

      if (attr.niceBarDelay) {
        delay = parseInt(attr.niceBarDelay, 10);
        if (delay.toString() === NaN.toString()) {
          throw new Error('nice-bar-delay shoule be a number');
        }
      }

      setTimeout(function () {
        nb.init(element[0]);
      }, delay);
    }
  };
}

// @ngInject
function niceBarService() {
  return {
    init: function init(element) {
      nb.init(element);
    }
  };
}

},{}]},{},[1]);
