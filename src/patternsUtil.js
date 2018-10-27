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
  let result = [];
  for(row = 0;row < height;row++){
    result[row] = line[row%2](width);
  };
  return result.join("\n");
};

const createFilledOrHollowRectangle = function(width,height,type){
  let rectangle = [];
  line = { "filled" :filledLine ,"hollow":hollowLine};;
  rectangle[0] = filledLine(width);
  for(row = 1;row < height-1;row++){
    rectangle[row] = line[type](width);
  };
  if(height > 1){
    rectangle [height-1]= filledLine(width);
  };
  return rectangle.join("\n");;
};

const createFilledRectangle = function(width,height){
  return createFilledOrHollowRectangle(width,height,"filled");
}

const createHollowRectangle = function(width,height){
  return createFilledOrHollowRectangle(width,height,"hollow");
}
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

const extractInputs = function(args){
  let userArgs = {};
  userArgs.type = args[2];
  userArgs.height = +args[3];
  let isRectangle = args[4];
  if(isRectangle){
    userArgs.width = +args[3];
    userArgs.height = +args[4];
  }
  return userArgs;
};

module.exports = {generatePattern , generateLine , leftWidth , rightWidth , filledLine, hollowLine , alternateLine , createAlternativeRectangle , generateLeftTriangleLine , generateRightTriangleLine , angledLine , reverseText,extractInputs , createFilledRectangle , createHollowRectangle };
