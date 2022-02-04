"use strict";

exports.__esModule = true;
exports.default = transformProperties;

var _core = require("@superset-ui/core");

function transformProperties(chartProperties) {
  const {
    width,
    height,
    formData,
    queriesData
  } = chartProperties;
  const data = queriesData[0].data || [];
  const metricName = (0, _core.getMetricLabel)(formData.metric);
  const groupbyLabel = formData.groupby[0];
  const rateCalculation = formData.rateCalculation;
  const retdata = data.map(d => {
    return {
      stage: d[groupbyLabel],
      number: d[metricName]
    };
  }).sort((a, b) => a["number"] < b["number"] ? 1 : b["number"] < a["number"] ? -1 : 0);
  return {
    width,
    height,
    metricName,
    groupbyLabel,
    retdata,
    rateCalculation
  };
}