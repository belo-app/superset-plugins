"use strict";

exports.__esModule = true;
exports.default = Funnel;

var _plots = require("@ant-design/plots");

var _core = require("@superset-ui/core");

var _react = _interopRequireWildcard(require("react"));

let _ = t => t,
    _t;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Styles = _core.styled.div(_t || (_t = _`
  height: ${0};
  width: ${0};
`), ({
  height
}) => height, ({
  width
}) => width);

function Funnel(properties) {
  const {
    width,
    height,
    retdata,
    rateCalculation
  } = properties;
  const rootElement = /*#__PURE__*/(0, _react.createRef)();
  const config = {
    data: retdata,
    xField: "stage",
    yField: "number",
    label: {
      formatter: datum => datum["stage"]
    },
    conversionTag: rateCalculation ? {
      formatter: (datum, data) => "Rate: " + (datum["number"] * 100 / data[0]["number"]).toFixed(2)
    } : {}
  };
  return /*#__PURE__*/_react.default.createElement(Styles, {
    ref: rootElement,
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement(_plots.Funnel, _extends({
    legend: false
  }, config)));
}