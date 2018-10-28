const { generatePattern , generateLine , leftWidth , rightWidth } = require("./patternsUtil.js");
const { filledLine , hollowLine , alternateLine , createAlternativeRectangle } = require("./patternsUtil.js");
const { generateLeftTriangleLine , generateRightTriangleLine } = require("./patternsUtil.js");
const { angledLine , reverseText ,createFilledRectangle ,createHollowRectangle} = require("./patternsUtil.js");
const { centerJustifier } = require("./patternsUtil.js");

const generateRectangle = function(parameters){
  let { type , width , height } = parameters;
  let rectangleType = { filled : createFilledRectangle , hollow : createHollowRectangle , alternating :createAlternativeRectangle };
  return rectangleType[type](width,height);
};

const generateTriangle = function (parameters){
  let { type , height } = parameters;
  let line = { "right" :generateRightTriangleLine , "left" :generateLeftTriangleLine };;
  let triangle = Array(height).fill("");
  const triangleLine = function(element,index){
    return line[type](index+1,height);
  }
  triangle = triangle.map(triangleLine);
  return triangle.join("\n");
};

const generateDiamond = function (parameters){
  let { type , height } = parameters;
  let diamondType = { "filled":filledLine , "hollow" :hollowLine ,"angled" :angledLine };;
  let length = Math.ceil(height/2);
  let diamondLines = [];
  let spaces = generatePattern(length-1," ");
  if(height < 1){
    return "";
  };
  diamondLines[0] = "*";
  for(let row = 1 ;row < length-1;row++){
    diamondLines[row] = diamondType[type](row*2+1);
  };
  if(height > 1){
    diamondLines[length-1] = filledLine(length*2-1);
    if(type == "hollow" || type == "angled"){
      diamondLines[length-1] = hollowLine(length*2-1);
    };
  };
  let justifier = function(text){
    return centerJustifier(text,height);
  }
  diamondLines = diamondLines.map(justifier);
  for(let row = length-2;row >= 0;row--){
    diamondLines[diamondLines.length] = reverseText(diamondLines[row]);
  };
  return diamondLines.join("\n");
};

module.exports = { generateRectangle , generateTriangle , generateDiamond };
