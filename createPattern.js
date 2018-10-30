const {createPattern} = require("./src/patternsLib.js");
  
const main = function(){
  patternInputs = process.argv;
  pattern = createPattern(patternInputs);
  console.log(pattern);
}
main();
