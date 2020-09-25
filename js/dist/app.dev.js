"use strict";

var d = document.getElementById('days');
var h = document.getElementById('hour');
var m = document.getElementById('min');
var s = document.getElementById('sec');
var count = new Date('jan 5,2007 20:30:40').getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var D = count - now;
  var days = Math.floor(D / 1000 * 60 * 60 * 24);
  var hour = Math.floor(D % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var min = Math.floor(D % (1000 * 60 * 60) / (1000 * 60));
  var sec = Math.floor(D % (1000 * 60) / 1000);
  days.innerHTML = 'd';
  hour.innerHTML = 'h';
  min.innerHTML = 'm';
  sec.innerHTML = 's';
}, 1000);