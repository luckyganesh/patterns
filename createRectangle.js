const { generateRectangle } = require("./src/patternsLib.js")
const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  console.log(generateRectangle(type,width,height));
};

main();
