const generatePattern=function(width,character){
  let pattern=""
  for(let count=1;count<=width;count++){
    pattern+=character;
  }
  return pattern;
}

const generateLeftTriangleLine=function(row,height){
  let line = "";
  line=generatePattern(row,"*");
  line+=generatePattern(height-row," ");
  return line;
}

const generateRightTriangleLine=function(row,height){
  let line ="";
  line = generatePattern(height-row," ");
  line+=generatePattern(row,"*");
  return line;
}

const generateTriangle = function (height,type){
  let line = { "right" :generateRightTriangleLine , "left" :generateLeftTriangleLine };
  let delimeter="";
  let triangle="";
  for(let row=0;row<height;row++){
    triangle+=delimeter+line[type](row+1,height);
    delimeter="\n";
  }
  return triangle;
}

const main = function (){
  let type=process.argv[2];
  let height=+process.argv[3];
  result="wrong input"
  result = generateTriangle(height,type); 
  console.log(result);
}
main();
