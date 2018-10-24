const { generateDiamond } = require("./src/patternsLib.js");
const main = function(){
  let type = process.argv[2];
  let height = +process.argv[3];
  console.log(generateDiamond(type,height));
};
main();
