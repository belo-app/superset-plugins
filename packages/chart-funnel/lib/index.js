"use strict";

exports.__esModule = true;

var _plugin = require("./plugin");

Object.keys(_plugin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _plugin[key]) return;
  exports[key] = _plugin[key];
});