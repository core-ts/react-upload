"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var CropImage_1 = require("./CropImage");
var Loading_1 = require("./Loading");
var UploadHook_1 = require("./UploadHook");
exports.UploadsModal = function (props) {
  var _a = react_1.useState(''), cropImage = _a[0], setCropImage = _a[1];
  var _b = react_1.useState(false), select = _b[0], setSelect = _b[1];
  var _c = react_1.useState(false), isCrop = _c[0], setIsCrop = _c[1];
  var _d = react_1.useState(false), isPreview = _d[0], setIsPreview = _d[1];
  var handleSelectFile = function (event) {
    var data = event.target.files;
    if (!data) {
      return;
    }
    var fileUpload = data[0];
    if (fileUpload) {
      props.setFile(fileUpload);
    }
  };
  var handleDelete = function () {
    props.setFile(undefined);
    if (cropImage) {
      setCropImage('');
      setSelect(false);
      setIsCrop(false);
    }
  };
  var handleSelectCropImage = function (e) {
    e.preventDefault();
    if (cropImage && props.file) {
      props.setFile(UploadHook_1.dataURLtoFile(cropImage, props.file.name));
      setIsCrop(true);
      setSelect(true);
    }
  };
  var togglePreview = function (e) {
    e.preventDefault();
    setIsPreview(!isPreview);
  };
  return (React.createElement('div', { className: 'upload-modal' }, React.createElement('div', { className: 'frame' }, React.createElement('div', { className: 'center' }, props.file && props.file !== null ? (React.createElement(React.Fragment, null, React.createElement('p', { className: 'file-name' }, props.file.name), React.createElement('button', { onClick: togglePreview }, props.resource ? props.resource.button_preview : 'Preview'), React.createElement('div', { className: 'preview-image' }, (props.file.type === 'image/jpeg' || props.file.type === 'image/png') &&
    React.createElement('div', null, select ? (React.createElement('img', { className: 'image-cut', src: URL.createObjectURL(props.file), alt: 'file' })) : (React.createElement(React.Fragment, null, React.createElement(CropImage_1.CropImage, { setImage: props.setImage, setCompletedCropHook: props.setCompletedCrop, aspect: props.aspect, image: props.file, setCropImage: setCropImage, isPreview: isPreview }), React.createElement('button', { onClick: function (e) { return handleSelectCropImage(e); } }, props.resource ? props.resource.button_select : 'Select'))))), React.createElement('div', { className: 'row btn-area' }, props.state.loading ? (React.createElement('div', { className: 'loading col xl5 md5 s5', style: { position: 'relative' } }, React.createElement(Loading_1.Loading, null))) : (React.createElement('button', { disabled: props.file.type === 'image' && !isCrop, className: 'btn col xl5 md5 s5', type: 'button', onClick: function () { return props.upload(); } }, props.resource ? props.resource.button_upload : 'Upload')), React.createElement('button', { disabled: props.state.loading, className: 'btn remove col xl5 md5 s5', type: 'button', onClick: handleDelete }, props.resource ? props.resource.button_remove : 'Remove')))) : (React.createElement(React.Fragment, null, React.createElement('div', { className: 'title' }, React.createElement('h1', null, props.resource ? props.resource.drop_file_to_upload : 'Drop file to upload')), React.createElement('div', { className: 'dropzone' }, React.createElement('label', { className: 'area', htmlFor: 'upload' }, React.createElement('div', null, React.createElement('img', { alt: 'upload', src: 'http://100dayscss.com/codepen/upload.svg', className: 'upload-icon' }), React.createElement('p', null, props.resource ? props.resource.or_click_here : 'Or Click Here!'), React.createElement('input', { id: 'upload', type: 'file', accept: '*', className: 'upload-input', onChange: handleSelectFile }))))))))));
};
