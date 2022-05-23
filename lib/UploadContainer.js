"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++; return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) _.ops.pop();
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactModal = require("react-modal");
var UploadHook_1 = require("./UploadHook");
var UploadModal_1 = require("./UploadModal");
require("../Uploads.css");
exports.UploadContainer = function (props) {
  var _a = React.useState(false), modal = _a[0], setModal = _a[1];
  var _b = UploadHook_1.useUpload({
    validateFile: setModal,
    post: props.post,
    setURL: props.setURL,
    type: props.type,
    url: props.url,
    id: props.id,
    aspect: props.aspect,
    sizes: props.sizes
  }), file = _b.file, setFile = _b.setFile, state = _b.state, upload = _b.upload, setCompletedCrop = _b.setCompletedCrop, setImage = _b.setImage;
  var handleUpload = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var gallery;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(props.type === 'gallery')) return [3, 2];
            return [4, upload(props.id)];
          case 1:
            gallery = _a.sent();
            if (props.setFileGallery) {
              props.setFileGallery(gallery);
            }
            return [3, 4];
          case 2: return [4, upload(props.id)];
          case 3:
            _a.sent();
            _a.label = 4;
          case 4: return [2];
        }
      });
    });
  };
  return (React.createElement('div', { className: 'upload', style: { height: 'auto' } }, React.createElement(UploadModal_1.UploadsModal, { file: file, setCompletedCrop: setCompletedCrop, setFile: setFile, state: state, upload: handleUpload, aspect: props.aspect, setImage: setImage }), React.createElement(ReactModal, {
    isOpen: modal, onRequestClose: function () { return setModal(false); }, contentLabel: 'Modal',
    className: 'modal-portal-content small-width-height', bodyOpenClassName: 'modal-portal-open', overlayClassName: 'modal-portal-backdrop'
  }, React.createElement('div', { className: 'view-container profile-info' }, React.createElement('form', { 'model-name': 'data' }, React.createElement('header', null, React.createElement('h2', null, props.resource ? props.resource.upload_files : 'Upload files'), React.createElement('button', { type: 'button', id: 'btnClose', name: 'btnClose', className: 'btn-close', onClick: function () { return setModal(false); } })), React.createElement('div', null, React.createElement('section', { className: 'row' }, React.createElement('div', null, props.resource ? props.resource.reupload_small : 'Image too small, please select a another images'))), React.createElement('footer', null, React.createElement('button', { type: 'button', id: 'btnSave', name: 'btnSave', onClick: function () { return setModal(false); } }, props.resource ? props.resource.button_ok : 'OK')))))));
};
