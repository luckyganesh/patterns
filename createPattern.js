const {createPattern} = require("./src/patternsLib.js");
  
const printPattern = function(pattern){
  for(index = 0 ; index < pattern.length ; index++){
    console.log(pattern[index]);
  }
}

const main = function(){
  patternInputs = process.argv;
  pattern = createPattern(patternInputs);
  printPattern(pattern);
}
main();
