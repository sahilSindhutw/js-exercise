"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContainerClickListener = addContainerClickListener;
exports.createChildBoxes = createChildBoxes;
exports.handleBoxClick = handleBoxClick;
exports.handleCountBoxChange = handleCountBoxChange;
exports.handleMessages = handleMessages;
exports.updateBoxClass = updateBoxClass;
var _Box = require("./constants/Box.js");
var _appendElements = _interopRequireDefault(require("./utils/appendElements.js"));
var _createElements = require("./utils/createElements.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('container');
  var inputField = (0, _createElements.createElement)({
    element: 'input',
    className: 'text-input'
  });
  createChildBoxes({
    container: container,
    count: _Box.TotalBoxCount,
    className: _Box.BoxClasses["default"]
  });
  addContainerClickListener(container);
  inputField.value = _Box.TotalBoxCount;
  container.before(inputField);
  inputField.addEventListener('change', function (e) {
    return handleCountBoxChange(e.target.value);
  });
});
function createChildBoxes(_ref) {
  var container = _ref.container,
    count = _ref.count,
    className = _ref.className,
    startingIndex = _ref.startingIndex;
  var boxElements = (0, _createElements.createElements)({
    count: count,
    element: 'div',
    className: className,
    startingIndex: startingIndex
  });
  (0, _appendElements["default"])({
    container: container,
    childList: boxElements
  });
}
function addContainerClickListener(container) {
  container.addEventListener('click', function (event) {
    if (event.target.classList.contains(_Box.BoxClasses["default"])) {
      handleBoxClick(event.target);
    }
  });
}
function handleCountBoxChange(value) {
  var desiredCount = parseInt(value) || 0;
  var currentCount = container.querySelectorAll('.' + _Box.BoxClasses["default"]).length;
  if (desiredCount > currentCount) {
    createChildBoxes({
      container: container,
      count: desiredCount - currentCount,
      className: _Box.BoxClasses["default"],
      startingIndex: currentCount
    });
  } else if (desiredCount < currentCount) {
    for (var i = currentCount; i > desiredCount; i--) {
      container.removeChild(container.lastChild);
    }
  }
}
;
function handleBoxClick(box) {
  var index = parseInt(box.dataset.index);
  updateBoxClass(box);
  var boxStatus = box.classList.contains(_Box.BoxClasses.active) ? _Box.StatusOptions.on : _Box.StatusOptions.off;
  handleMessages(index, boxStatus);
}
function handleMessages(index, status) {
  console.log("Turning ".concat(status, " ").concat(index + 1));
}
function updateBoxClass(box) {
  if (box.classList.contains(_Box.BoxClasses.active)) {
    box.classList.remove(_Box.BoxClasses.active);
  } else {
    box.classList.add(_Box.BoxClasses.active);
  }
  return box;
}