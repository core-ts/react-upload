"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("../Loading.css");
exports.Loading = function () {
  return (React.createElement('div', { className: 'loading' }, React.createElement('svg', { viewBox: '0 0 50 50', className: 'spinner' }, React.createElement('circle', { className: 'ring', cx: '25', cy: '25', r: '22.5' }), React.createElement('circle', { className: 'line', cx: '25', cy: '25', r: '22.5' }))));
};
