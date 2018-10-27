const { generateRectangle } = require("./src/patternsLib.js")
const { extractInputs } = require("./src/patternsUtil.js");
const main = function(){
  let args = extractInputs(process.argv);
  let { type , width , height } = args;
  console.log(generateRectangle(type,width,height));
};

main();
