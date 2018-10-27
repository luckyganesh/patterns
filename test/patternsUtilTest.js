const assert = require("assert");
const util = require("../src/patternsUtil.js");
//generate pattern
let {generatePattern} = util;
assert.equal(generatePattern(4,"*"),"****");
assert.equal(generatePattern(6," "),"      ");
console.log("generatePattern function test passed");

//left width function
let {leftWidth} = util;
assert.equal(leftWidth(4),1);
assert.equal(leftWidth(1),1);
assert.equal(leftWidth(0),0);
console.log("leftWidth function test passed");

//right width function
let {rightWidth} = util;
assert.equal(rightWidth(2),1);
assert.equal(rightWidth(4),1);
assert.equal(rightWidth(1),0);
assert.equal(rightWidth(6),1);
console.log("rightWidth function test passed");

//generate line function
let {generateLine} = util;
assert.equal(generateLine(7,"+","+","+"),"+++++++");
assert.equal(generateLine(7,"+"," ","+"),"+     +");
console.log("generateLine function test passed");

//filled line function
let {filledLine} = util;
assert.equal(filledLine(7),"*******");
assert.equal(filledLine(1),"*");
assert.equal(filledLine(0),"");
console.log("filledLinefunctionPassed");

//hollow line function
let {hollowLine} = util;
assert.equal(hollowLine(7),"*     *");
assert.equal(hollowLine(1),"*");
assert.equal(hollowLine(0),"");
console.log("hollowLinefunctionPassed");

//angled line function
let {angledLine} = util;
assert.equal(angledLine(7),"/     \\");
assert.equal(angledLine(1),"/");
assert.equal(angledLine(0),"");
console.log("angledLinefunctionPassed");

//generateLeftTriangleLine function
let {generateLeftTriangleLine} = util;
assert.equal(generateLeftTriangleLine(4,5),"**** ");
assert.equal(generateLeftTriangleLine(2,5),"**   ");
assert.equal(generateLeftTriangleLine(0,5),"     ");
console.log("generate left triangle line function passed");

//generateRightTriangleLine function
let {generateRightTriangleLine} = util;
assert.equal(generateRightTriangleLine(4,5)," ****");
assert.equal(generateRightTriangleLine(2,5),"   **");
assert.equal(generateRightTriangleLine(0,5),"     ");
console.log("generate right triangle line function passed");

//reversing text function
let {reverseText} = util;
assert.equal(reverseText("/  \\"),"\\  /");
assert.equal(reverseText("/  *"),"*  /");
console.log("reverseText function passed");

//extract inputs function
let { extractInputs } = util;
assert.deepEqual(extractInputs([1,2,3,4,5]),{ type : 3 ,width : 4 , height :5 });
assert.deepEqual(extractInputs(["node","createRectangle.js","filled","4","5"]),{ type : "filled" ,width : 4 , height :5 });
assert.deepEqual(extractInputs(["node","createTriangle.js","left","4"]),{ type : "left" ,height : 4 });
assert.deepEqual(extractInputs(["node","createDiamond.js","angled","9"]),{ type : "angled" ,height : 9 });
console.log("extractInputs function passed");
