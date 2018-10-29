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

//create alternating rectangle
let { createAlternativeRectangle } = util;
assert.deepEqual(createAlternativeRectangle(1,1),"*");
assert.deepEqual(createAlternativeRectangle(1,2),"*\n-");
assert.deepEqual(createAlternativeRectangle(2,2),"**\n--");
assert.deepEqual(createAlternativeRectangle(5,5),"*****\n-----\n*****\n-----\n*****");
assert.deepEqual(createAlternativeRectangle(5,6),"*****\n-----\n*****\n-----\n*****\n-----");
console.log("createAlternateRectangle function passed");

//create filled rectangle
let { createFilledRectangle } = util;
assert.deepEqual(createFilledRectangle(1,1),"*");
assert.deepEqual(createFilledRectangle(1,2),"*\n*");
assert.deepEqual(createFilledRectangle(2,2),"**\n**");
assert.deepEqual(createFilledRectangle(5,5),"*****\n*****\n*****\n*****\n*****");
assert.deepEqual(createFilledRectangle(5,6),"*****\n*****\n*****\n*****\n*****\n*****");
console.log("createFilledRectangle function passed");

//create hollow rectangle
let { createHollowRectangle } = util;
assert.deepEqual(createHollowRectangle(1,1),"*");
assert.deepEqual(createHollowRectangle(1,2),"*\n*");
assert.deepEqual(createHollowRectangle(2,2),"**\n**");
assert.deepEqual(createHollowRectangle(3,3),"***\n* *\n***");
assert.deepEqual(createHollowRectangle(5,5),"*****\n*   *\n*   *\n*   *\n*****");
assert.deepEqual(createHollowRectangle(5,6),"*****\n*   *\n*   *\n*   *\n*   *\n*****");
console.log("createHollowRectangle function passed");

//centerJustifier function
let { centerJustifier } = util;
assert.deepEqual(centerJustifier("a",3)," a ");
assert.deepEqual(centerJustifier("abc",3),"abc");
assert.deepEqual(centerJustifier("abc",5)," abc ");
console.log("center justifier function passed");

//create left triangle function
let { createLeftTriangle } = util;
assert.deepEqual(createLeftTriangle(1),"*");
assert.deepEqual(createLeftTriangle(2),"* \n**");
assert.deepEqual(createLeftTriangle(0),"");
console.log("createLeftTriangle function passed");

//create right triangle function
let { createRightTriangle } = util;
assert.deepEqual(createRightTriangle(1),"*");
assert.deepEqual(createRightTriangle(2)," *\n**");
assert.deepEqual(createRightTriangle(0),"");
console.log("createRightTriangle function passed");

//make cycler function
let { makeCycler } = util;
let cycleOne = makeCycler([1]);
assert.equal(1,cycleOne());
assert.equal(1,cycleOne());
assert.equal(1,cycleOne());

let cycleColours=makeCycler(["black","white"]);
assert.equal("black",cycleColours());
assert.equal("white",cycleColours());
assert.equal("black",cycleColours());
assert.equal("white",cycleColours());
console.log("make cycler function passed");
