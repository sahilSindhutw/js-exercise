"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function appendElements(_ref) {
  var container = _ref.container,
    childList = _ref.childList;
  if (childList.length > 0) {
    childList.forEach(function (childElement) {
      container.appendChild(childElement);
    });
  }
}
var _default = exports["default"] = appendElements;