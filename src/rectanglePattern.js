const generatePattern=function(width,character){
  let pattern=""
  for(let count=0;count<width;count++){
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

const alternateLine = function (width){
  return generateLine(width,"-","-","-");
}

const createAlternativeRectangle = function(width,height){
  let line ={"0" :filledLine ,"1" :alternateLine};
  let result="";
  let delimeter = "";
  for(row = 0;row < height;row++){
    result += delimeter+line[row%2](width);
    delimeter = "\n"
  }
  return result;
}

const createRectangle=function(type,width,height){
  let result="wrong input"
  line = { "filled" :filledLine ,"hollow":hollowLine};
  delimeter = "\n";
  if(type == "alternating"){
    return createAlternativeRectangle(width,height);
  }
  if(!(type =="filled" || type == "hollow")){
    return "wrong input";
  }
  if(height > 0){
    result = filledLine(width);
  }
  for(row=1;row < height-1;row++){
    result += delimeter + line[type](width);
  }
  if(height > 1){
    result += delimeter + filledLine(width);
  }
  return result;
}

const main = function(){
let type=process.argv[2];
let width=+process.argv[3];
let height=+process.argv[4];
console.log(createRectangle(type,width,height));
}

main();
