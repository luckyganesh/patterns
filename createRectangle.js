const { generateRectangle } = require("./src/patternsLib.js")
const { extractInputs } = require("./src/patternsUtil.js");
const main = function(){
  let args = extractInputs(process.argv);
  console.log(generateRectangle(args));
};

main();
