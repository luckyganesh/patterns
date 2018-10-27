const { generatePattern , generateLine , leftWidth , rightWidth } = require("./patternsUtil.js");
const { filledLine , hollowLine , alternateLine , createAlternativeRectangle } = require("./patternsUtil.js");
const { generateLeftTriangleLine , generateRightTriangleLine } = require("./patternsUtil.js");
const { angledLine , reverseText ,createFilledRectangle ,createHollowRectangle} = require("./patternsUtil.js");

const generateRectangle = function(parameters){
  let { type , width , height } = parameters;
  let rectangle = [];
  line = { "filled" :filledLine ,"hollow":hollowLine};;
  if(type == "alternating"){
    return createAlternativeRectangle(width,height);
  };
  if(type == "filled"){
    return createFilledRectangle(width,height);
  }
  if(type == "hollow"){
    return createHollowRectangle(width,height);
  }
  return "";
};

const generateTriangle = function (parameters){
  let { type , height } = parameters;
  let line = { "right" :generateRightTriangleLine , "left" :generateLeftTriangleLine };;
  let delimeter = "";
  let triangle = "";
  for(let row = 0;row < height;row++){
    triangle += delimeter+line[type](row+1,height);
    delimeter = "\n";
  };
  return triangle;
};

const generateDiamond = function (parameters){
  let { type , height } = parameters;
  let diamondType = { "filled":filledLine , "hollow" :hollowLine ,"angled" :angledLine };;
  let length = Math.ceil(height/2);
  let diamondLines = [];
  let spaces = generatePattern(length-1," ");
  if(height > 0){
    diamondLines[0] = spaces;
    diamondLines[0] += "*";
    diamondLines[0] += spaces;
  };
  for(let row = 1 ;row < length-1;row++){
    spaces = generatePattern(length-row-1," ");
    diamondLines[row] = spaces+diamondType[type](row*2+1);
    diamondLines[row] += spaces;
  };
  if(height > 1){
    diamondLines[length-1] = filledLine(length*2-1);
    if(type == "hollow" || type == "angled"){
      diamondLines[length-1] = hollowLine(length*2-1);
    };
  };
  for(let row = length-2;row >= 0;row--){
    diamondLines[diamondLines.length] = reverseText(diamondLines[row]);
  };
  return diamondLines.join("\n");
};

module.exports = { generateRectangle , generateTriangle , generateDiamond };
