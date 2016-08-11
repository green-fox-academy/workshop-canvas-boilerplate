'use strict';

var canvasElement = document.getElementById('gfCanvas');
var canvas = canvasElement.getContext('2d');

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

canvas.fillFox = function (x, y, s) {
  this.beginPath();
  this.moveTo(x, y+s/7*3);
  this.lineTo(x+s/7*2, y);
  this.lineTo(x+s/7*3, y+s/7*2);
  this.lineTo(x+s/7*4, y+s/7*2);
  this.lineTo(x+s/7*5, y);
  this.lineTo(x+s, y+s/7*3);
  this.lineTo(x+s/2, y+s);
  this.lineTo(x, y+s/7*3);
  this.fill();
}
