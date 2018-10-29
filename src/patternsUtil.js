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

const identity = function(element){return element};

const makeCycler = function(elements){
  let counter = 0;
  let array = [];
  array = elements.map(identity);
  return function(){
    return array[(counter++) % array.length];
  }
}

const createAlternativeRectangle = function(width,height){
  let result = Array(height).fill("");
  let rotater = makeCycler([filledLine(width),alternateLine(width)]);
   result =  result.map(rotater);
  return result;
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
  return rectangle;
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

const createTriangle = function(type,height){
  let line = { "right" :generateRightTriangleLine , "left" :generateLeftTriangleLine };;
  let triangle = Array(height).fill("");
  const triangleLine = function(element,index){
    return line[type](index+1,height);
  }
  triangle = triangle.map(triangleLine);
  return triangle;
}

const createLeftTriangle = function(height){
  return createTriangle("left",height);
}

const createRightTriangle = function(height){
  return createTriangle("right",height);
}

const reverseText = function(text){
  let revText = "";
  for(let character = text.length-1;character >= 0;character--){
    revText += text[character];
  };
  return revText
};

const extractInputs = function(args){
  let userArgs = {};
  userArgs.type = args[0];
  if(!args[1]){
    userArgs.error="wrong inputs";
  };
  userArgs.height = +args[1];
  let isRectangle = args[2];
  if(isRectangle){
    userArgs.width = +args[1];
    userArgs.height = +args[2];
  }
  return userArgs;
};

const centerJustifier = function(text,length){
  let number = (length - text.length)/2;
  let spaces = generatePattern(number," ");
  return spaces+text+spaces;
}
module.exports = {generatePattern , generateLine , leftWidth , rightWidth , filledLine, hollowLine , alternateLine , createAlternativeRectangle , generateLeftTriangleLine , generateRightTriangleLine , angledLine , reverseText,extractInputs , createFilledRectangle , createHollowRectangle ,centerJustifier , createLeftTriangle , createRightTriangle ,makeCycler };
