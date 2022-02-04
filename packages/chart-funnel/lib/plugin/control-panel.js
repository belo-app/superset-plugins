"use strict";

exports.__esModule = true;
exports.default = void 0;

var _chartControls = require("@superset-ui/chart-controls");

var _core = require("@superset-ui/core");

const config = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)("Query"),
    expanded: true,
    controlSetRows: [["groupby"], ["metric"], ["adhoc_filters"], [{
      name: "rate_calculation",
      config: {
        type: "SelectControl",
        label: (0, _core.t)("Rate calcultarion"),
        default: true,
        renderTrigger: true,
        choices: [[true, "Against first valie"], [false, "Against previous value"]],
        description: (0, _core.t)("How we should calculate the rate?")
      }
    }]]
  }]
};
var _default = config;
exports.default = _default;