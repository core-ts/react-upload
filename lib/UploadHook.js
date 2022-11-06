"use strict";
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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
exports.useUpload = function (props) {
  var _a = React.useState(), file = _a[0], setFile = _a[1];
  var _b = React.useState(), completedCrop = _b[0], setCompletedCrop = _b[1];
  var _c = React.useState(), image = _c[0], setImage = _c[1];
  var _d = React.useState({
    success: false,
    loading: false,
  }), state = _d[0], setState = _d[1];
  React.useEffect(function () {
    validateFile();
  }, [file]);
  React.useEffect(function () {
    console.log('type', props.type);
  }, [props.type]);
  var validateFile = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var img, _i, _a, size, height;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (props.type === 'gallery') {
              return [2];
            }
            return [4, readFileAsync(file)];
          case 1:
            img = _b.sent();
            if (!img) {
              return [2];
            }
            for (_i = 0, _a = props.sizes; _i < _a.length; _i++) {
              size = _a[_i];
              height = size / props.aspect;
              if (img.naturalHeight < height || img.naturalWidth < size) {
                if (props.validateFile) {
                  props.validateFile(true);
                }
                setFile(undefined);
              }
            }
            return [2];
        }
      });
    });
  };
  var upload = function (id) {
    return __awaiter(void 0, void 0, void 0, function () {
      var fileCustomSizes, bodyFormData, headers;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!file) {
              return [2, []];
            }
            fileCustomSizes = [];
            setState(function (pre) { return (__assign(__assign({}, pre), { loading: true })); });
            bodyFormData = new FormData();
            if (!(props.type !== 'gallery')) return [3, 2];
            return [4, resizes(props.sizes)];
          case 1:
            fileCustomSizes = _a.sent();
            bodyFormData.append('files', file);
            fileCustomSizes.forEach(function (fileCustom) {
              bodyFormData.append('files', fileCustom);
            });
            return [3, 3];
          case 2:
            bodyFormData.append('files', file);
            _a.label = 3;
          case 3:
            bodyFormData.append('id', id || '');
            headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            return [2, props
              .post(props.url + "/" + props.id + "/" + props.type, bodyFormData)
              .then(function (res) {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    setState(function (pre) { return (__assign(__assign({}, pre), { open: false, success: true, loading: false })); });
                    setFile(undefined);
                    if (props.setURL) {
                      props.setURL(res);
                    }
                    return [2, res];
                  });
                });
              })
              .catch(function () {
                setState(function (pre) { return (__assign(__assign({}, pre), { loading: false })); });
              })];
        }
      });
    });
  };
  function imageInfo(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function (imageEvent) {
        debugger;
        console.log(img.naturalHeight, img.naturalWidth);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }
  function readFileAsync(fileObj) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function (readerEvent) {
        var _a;
        var img = new Image();
        img.onload = function (imageEvent) {
          resolve(img);
        };
        img.onerror = reject;
        img.src = ((_a = readerEvent.target.result) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      };
      reader.onerror = reject;
      if (fileObj) {
        reader.readAsDataURL(fileObj);
      }
    });
  }
  var cropImage = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var canvas, scaleX, scaleY, ctx, pixelRatio, imagee, newFile;
      var _a;
      return __generator(this, function (_b) {
        if (!completedCrop || !file || !image) {
          return [2];
        }
        if (props.aspect === 0) {
          return [2];
        }
        canvas = document.createElement('canvas');
        scaleX = image.naturalWidth / image.width;
        scaleY = image.naturalHeight / image.height;
        ctx = canvas.getContext('2d');
        if (!ctx) {
          return [2];
        }
        pixelRatio = window.devicePixelRatio;
        canvas.width = completedCrop.width * pixelRatio;
        canvas.height = completedCrop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(image, completedCrop.x * scaleX, completedCrop.y * scaleY, completedCrop.width * scaleX, completedCrop.height * scaleY, 0, 0, completedCrop.width, completedCrop.height);
        imagee = new Image();
        imagee.src = canvas.toDataURL(file === null || file === void 0 ? void 0 : file.type);
        newFile = exports.dataURLtoFile(imagee.src, (_a = file === null || file === void 0 ? void 0 : file.name) !== null && _a !== void 0 ? _a : '');
        return [2, newFile];
      });
    });
  };
  var resizes = function (sizes) {
    return __awaiter(void 0, void 0, void 0, function () {
      var croptedFile, img, files;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0: return [4, cropImage()];
          case 1:
            croptedFile = _a.sent();
            if (!croptedFile) {
              return [2, []];
            }
            return [4, readFileAsync(croptedFile)];
          case 2:
            img = _a.sent();
            files = [];
            sizes.forEach(function (size) {
              var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), oc = document.createElement('canvas'), octx = oc.getContext('2d');
              canvas.width = size;
              canvas.height = (canvas.width * img.height) / img.width;
              var cur = {
                width: Math.floor(img.width),
                height: Math.floor(img.height),
              };
              oc.width = cur.width;
              oc.height = cur.height;
              octx.drawImage(img, 0, 0, cur.width, cur.height);
              while (cur.width * 0.5 > size) {
                cur = {
                  width: Math.floor(cur.width * 0.5),
                  height: Math.floor(cur.height * 0.5),
                };
                octx.drawImage(oc, 0, 0, cur.width * 2, cur.height * 2, 0, 0, cur.width, cur.height);
              }
              ctx.drawImage(oc, 0, 0, cur.width, cur.height, 0, 0, canvas.width, canvas.height);
              var imagee = new Image();
              imagee.src = canvas.toDataURL(croptedFile.type);
              var ext = getFileExtension((croptedFile === null || croptedFile === void 0 ? void 0 : croptedFile.name) || '');
              var newFile = exports.dataURLtoFile(imagee.src, removeFileExtension((croptedFile === null || croptedFile === void 0 ? void 0 : croptedFile.name) || '') +
                ("_" + size.toString() + ".") +
                ext);
              files.push(newFile);
            });
            return [2, files];
        }
      });
    });
  };
  return { file: file, setFile: setFile, state: state, setState: setState, upload: upload, setCompletedCrop: setCompletedCrop, setImage: setImage, imageInfo: imageInfo };
};
exports.dataURLtoFile = function (dataurl, filename) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/);
  var type = '';
  if (mime) {
    type = mime[1];
  }
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: type });
};
function removeFileExtension(name) {
  var idx = name.lastIndexOf('.');
  return idx >= 0 ? name.substring(0, idx) : name;
}
exports.removeFileExtension = removeFileExtension;
function appendFileExtension(s, ext) {
  return ext.length > 0 ? s + '.' + ext : s;
}
exports.appendFileExtension = appendFileExtension;
function getFileExtension(name) {
  var idx = name.lastIndexOf('.');
  return idx >= 0 ? name.substring(idx + 1) : '';
}
exports.getFileExtension = getFileExtension;
