const generatePattern = function(width,character){
  let pattern = ""
  for(let count = 0;count < width;count++){
    pattern += character;
  };
  return pattern;
};

const leftWidth = function(width){
  return 1 % (width+1);
};

const rightWidth = function(width){
  return 1 % width;
};

const generateLine = function(width,leftCharacter,middleCharacter,rightCharacter){
  let line = generatePattern(leftWidth(width),leftCharacter);
  line = line + generatePattern(width-2,middleCharacter);
  return line + generatePattern(rightWidth(width),rightCharacter);
};

const filledLine = function (width){
  return generateLine(width,"*","*","*");
};

const hollowLine = function (width){
  return generateLine(width,"*"," ","*");
};

const alternateLine = function (width){
  return generateLine(width,"-","-","-");
};

const angledLine = function (width){
  return generateLine(width,"/"," ","\\");
};

const createAlternativeRectangle = function(width,height){
  let line ={"0" :filledLine ,"1" :alternateLine};;
  let result = "";
  let delimeter = "";
  for(row = 0;row < height;row++){
    result += delimeter+line[row%2](width);
    delimeter = "\n"
  };
  return result;
};
const generateLeftTriangleLine = function(row,height){
  let line = "";
  line = generatePattern(row,"*");
  line += generatePattern(height-row," ");
  return line;
};

const generateRightTriangleLine = function(row,height){
  let line = "";
  line = generatePattern(height-row," ");
  line += generatePattern(row,"*");
  return line;
};

const reverseText = function(text){
  let revText = "";
  for(let character = text.length-1;character >= 0;character--){
    revText += text[character];
  };
  return revText
};

module.exports = {generatePattern , generateLine , leftWidth , rightWidth , filledLine, hollowLine , alternateLine , createAlternativeRectangle , generateLeftTriangleLine , generateRightTriangleLine , angledLine , reverseText};
