const { generateTriangle } = require("./src/patternsLib.js");
const { extractInputs } = require("./src/patternsUtil.js");
const main = function (){
  let args = extractInputs(process.argv);
  let { type , height } = args;
  console.log(generateTriangle(type,height)); 
};
main();
