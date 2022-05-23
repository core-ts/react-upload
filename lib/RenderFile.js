"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.RenderItem = function (props) {
  if (props.item.type === 'youtube') {
    return (React.createElement('div', { className: 'col xl11 l11 m11 s11' }, React.createElement('div', { className: 'data-item' }, React.createElement('iframe', { width: '338', height: '190', src: props.item.url, title: 'YouTube video player', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;' }))));
  }
  else if (props.item.type === 'video') {
    return (React.createElement('div', { className: 'col xl11 l11 m11 s11' }, React.createElement('div', { className: 'data-item' }, React.createElement('video', { controls: true, className: 'video-uploaded', src: props.item.url }))));
  }
  else {
    return (React.createElement('div', { className: 'col xl11 l11 m11 s11' }, React.createElement('div', { className: 'data-item' }, React.createElement('img', { className: 'image-uploaded', src: props.item.url, alt: 'uploads' }))));
  }
};
