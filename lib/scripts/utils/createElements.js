"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.createElements = createElements;
function createElements(_ref) {
  var count = _ref.count,
    element = _ref.element,
    className = _ref.className,
    _ref$startingIndex = _ref.startingIndex,
    startingIndex = _ref$startingIndex === void 0 ? 0 : _ref$startingIndex;
  var createElementsList = [];
  for (var i = startingIndex; i < count + startingIndex; i++) {
    var createdElement = createElement({
      element: element,
      className: className
    });
    createdElement.dataset.index = i;
    createElementsList.push(createdElement);
  }
  return createElementsList;
}
function createElement(_ref2) {
  var element = _ref2.element,
    className = _ref2.className;
  var createdElement = document.createElement(element);
  createdElement.classList.add(className);
  return createdElement;
}