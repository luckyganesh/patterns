const {createPattern} = require("./src/patternsLib.js");
  
const main = function(){
  patternInputs = process.argv.slice(2);
  pattern = createPattern(patternInputs);
  console.log(pattern);
}
main();
