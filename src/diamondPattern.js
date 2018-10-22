const generatePattern=function(width,character){
  let pattern=""
  for(let count=1;count<=width;count++){
    pattern+=character;
  }
  return pattern;
}

const leftWidth=function(width){
  return 1 % (width+1);
}

const rightWidth=function(width){
  return 1 % width;
}

const generateLine=function(width,leftCharacter,middleCharacter,rightCharacter){
  let line = generatePattern(leftWidth(width),leftCharacter);
  line = line + generatePattern(width-2,middleCharacter);
  return line + generatePattern(rightWidth(width),rightCharacter);
}

const filledLine = function (width){
  return generateLine(width,"*","*","*");
}

const hollowLine = function (width){
  return generateLine(width,"*"," ","*");
}

const angledLine = function (width){
  return generateLine(width,"/"," ","\\");
}

const generateDiamond = function (height,type){
  let diamondType = { "filled":filledLine , "hollow" :hollowLine ,"angled" :angledLine };
  let length = Math.ceil(height/2);
  let diamondLines=[];
  let spaces=generatePattern(length-1," ");
  if(height > 0){
    diamondLines[0] = spaces;
    diamondLines[0] += "*";
    diamondLines[0] += spaces;
  }
  for(let row =1;row < length-1;row++){
    spaces = generatePattern(length-row-1," ");
    diamondLines[row] = spaces+diamondType[type](row*2+1);
    diamondLines[row] += spaces;
  }
  if(height > 1){
    diamondLines[length-1] = filledLine(length*2-1);
    if(type == "hollow" || type == "angled"){
      diamondLines[length-1] = hollowLine(length*2-1);
    }
  }
  for(let row = length-2;row >= 0;row--){
    diamondLines[diamondLines.length]=reverse(diamondLines[row]);
  }
  return diamondLines;
}

const reverse =function(text){
  let revText="";
  for(let character=text.length-1;character>=0;character--){
    revText+=text[character];
  }
  return revText
}

const main = function(){
  let type=process.argv[2];
  let height = +process.argv[3];
  let result=[];
  result = generateDiamond(height,type);
  for(let row=0;row<result.length;row++){
    console.log(result[row]);
  }
}
main();
