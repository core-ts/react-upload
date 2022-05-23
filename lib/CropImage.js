"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_image_crop_1 = require("react-image-crop");
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return react_image_crop_1.centerCrop(react_image_crop_1.makeAspectCrop({
    unit: '%',
    width: 100,
  }, aspect, mediaWidth, mediaHeight), mediaWidth, mediaHeight);
}
function CropImage(props) {
  var _a = react_1.useState(), upImg = _a[0], setUpImg = _a[1];
  var imgRef = react_1.useRef(null);
  var previewCanvasRef = react_1.useRef(null);
  var _b = react_1.useState(), crop = _b[0], setCrop = _b[1];
  var _c = react_1.useState(), completedCrop = _c[0], setCompletedCrop = _c[1];
  var scale = react_1.useState(1)[0];
  var rotate = react_1.useState(0)[0];
  react_1.useEffect(function () {
    onSelectFile(props.image);
  }, []);
  var onSelectFile = function (file) {
    var reader = new FileReader();
    reader.addEventListener('load', function () { return setUpImg(reader.result); });
    reader.readAsDataURL(file);
  };
  function onImageLoad(e) {
    if (props.aspect) {
      var _a = e.currentTarget, width = _a.width, height = _a.height;
      setCrop(centerAspectCrop(width, height, props.aspect));
    }
  }
  React.useEffect(function () {
    var _a;
    props.setCompletedCropHook(completedCrop);
    props.setImage((_a = imgRef.current) !== null && _a !== void 0 ? _a : undefined);
    cropImage();
  }, [completedCrop, props.isPreview]);
  var cropImage = function () {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    if (!props.isPreview) {
      return;
    }
    var image = imgRef.current;
    var canvas = previewCanvasRef.current;
    var scaleX = image.naturalWidth / image.width;
    var scaleY = image.naturalHeight / image.height;
    var ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    var pixelRatio = window.devicePixelRatio;
    canvas.width = completedCrop.width * pixelRatio;
    canvas.height = completedCrop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(image, completedCrop.x * scaleX, completedCrop.y * scaleY, completedCrop.width * scaleX, completedCrop.height * scaleY, 0, 0, completedCrop.width, completedCrop.height);
  };
  return (React.createElement('div', { className: 'Crop-Image' }, React.createElement(react_image_crop_1.default, { aspect: props.aspect, crop: crop, onChange: function (_, percentCrop) { return setCrop(percentCrop); }, onComplete: function (c) { return setCompletedCrop(c); } }, React.createElement('img', { ref: imgRef, src: upImg, alt: '', onLoad: onImageLoad, style: { transform: 'scale(' + scale + ') rotate(' + rotate + 'deg)' } })), React.createElement('div', { style: { display: props.isPreview ? 'block' : 'none' } }, React.createElement('canvas', {
    ref: previewCanvasRef, style: {
      width: Math.round(completedCrop && completedCrop.width ? completedCrop.width : 0),
      height: Math.round(completedCrop && completedCrop.height ? completedCrop.height : 0),
    }
  }))));
}
exports.CropImage = CropImage;
