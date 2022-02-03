module.exports = {
  moduleFileExtensions: ["mock.js", "ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|png|jpg)$":
      "<rootDir>/test/__mocks__/mock-export-string.js",
  },
};
