const { generateDiamond } = require("./src/patternsLib.js");
const { extractInputs } = require("./src/patternsUtil.js");
const main = function(){
  let args = extractInputs(process.argv.slice(2));
  console.log(generateDiamond(args));
};
main();
