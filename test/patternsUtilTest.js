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
assert.deepEqual(extractInputs([3,4,5]),{ type : 3 ,width : 4 , height :5 });
assert.deepEqual(extractInputs(["filled","4","5"]),{ type : "filled" ,width : 4 , height :5 });
assert.deepEqual(extractInputs(["left","4"]),{ type : "left" ,height : 4 });
assert.deepEqual(extractInputs(["angled","9"]),{ type : "angled" ,height : 9 });
console.log("extractInputs function passed");

//create alternating rectangle
let { createAlternativeRectangle } = util;
assert.deepEqual(createAlternativeRectangle(1,1),["*"]);
assert.deepEqual(createAlternativeRectangle(1,2),["*","-"]);
assert.deepEqual(createAlternativeRectangle(2,2),["**","--"]);
assert.deepEqual(createAlternativeRectangle(5,5),["*****","-----","*****","-----","*****"]);
assert.deepEqual(createAlternativeRectangle(5,6),["*****","-----","*****","-----","*****","-----"]);
console.log("createAlternateRectangle function passed");

//create filled rectangle
let { createFilledRectangle } = util;
assert.deepEqual(createFilledRectangle(1,1),["*"]);
assert.deepEqual(createFilledRectangle(1,2),["*","*"]);
assert.deepEqual(createFilledRectangle(2,2),["**","**"]);
assert.deepEqual(createFilledRectangle(5,5),["*****","*****","*****","*****","*****"]);
assert.deepEqual(createFilledRectangle(5,6),["*****","*****","*****","*****","*****","*****"]);
console.log("createFilledRectangle function passed");

//create hollow rectangle
let { createHollowRectangle } = util;
assert.deepEqual(createHollowRectangle(1,1),["*"]);
assert.deepEqual(createHollowRectangle(1,2),["*","*"]);
assert.deepEqual(createHollowRectangle(2,2),["**","**"]);
assert.deepEqual(createHollowRectangle(3,3),["***","* *","***"]);
assert.deepEqual(createHollowRectangle(5,5),["*****","*   *","*   *","*   *","*****"]);
assert.deepEqual(createHollowRectangle(5,6),["*****","*   *","*   *","*   *","*   *","*****"]);
console.log("createHollowRectangle function passed");

//centerJustifier function
let { centerJustifier } = util;
assert.deepEqual(centerJustifier("a",3)," a ");
assert.deepEqual(centerJustifier("abc",3),"abc");
assert.deepEqual(centerJustifier("abc",5)," abc ");
console.log("center justifier function passed");

//create left triangle function
let { createLeftTriangle } = util;
assert.deepEqual(createLeftTriangle(1),["*"]);
assert.deepEqual(createLeftTriangle(2),["* ","**"]);
assert.deepEqual(createLeftTriangle(0),[]);
console.log("createLeftTriangle function passed");

//create right triangle function
let { createRightTriangle } = util;
assert.deepEqual(createRightTriangle(1),["*"]);
assert.deepEqual(createRightTriangle(2),[" *","**"]);
assert.deepEqual(createRightTriangle(0),[]);
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

//find Max length
let { findMaxlength } = util;
assert.equal(findMaxlength(1,[]),1);
assert.equal(findMaxlength(1,["s"]),1);
assert.equal(findMaxlength(1,["s","a"]),2);
assert.equal(findMaxlength(3,["s","a"]),3);
console.log("findMaxlength function passed");

//mergePatterns 
let { mergePatterns } = util;
assert.deepEqual(mergePatterns([[1,2],[3,4]]),['1 3','2 4']);
assert.deepEqual(mergePatterns([[1],[3,4]]),['1 3','  4']);
assert.deepEqual(mergePatterns([[1,2],[3]]),['1 3','2  ']);
console.log("mergePatterns function passed");

//extractMultiple inputs
let { extractMultiInputs } = util;
expectedOutput = [];
expectedOutput.push({ type :"filled" ,height : 5 , shape : "diamond"});
assert.deepEqual(extractMultiInputs(["node" , "createPattern.js","filled_diamond",5]),expectedOutput);
expectedOutput = [];
expectedOutput.push({ type :"left" ,height : 5 , shape : "triangle"});
assert.deepEqual(extractMultiInputs(["node" , "createPattern.js","left_triangle",5]),expectedOutput);
expectedOutput = [];
expectedOutput.push({ type :"right" ,height : 5 , shape : "triangle"});
expectedOutput.push({ type :"filled" ,height : 5 , shape : "diamond"});
let inputs = [];
inputs.push("node");
inputs.push("createPatterns.js");
inputs = inputs.concat(["right_triangle",5]);
inputs = inputs.concat(["filled_diamond",5]);
assert.deepEqual(extractMultiInputs(inputs),expectedOutput);
expectedOutput = [];
expectedOutput.push({ type :"right" ,height : 5 , shape : "triangle"});
expectedOutput.push({ type :"filled" ,height : 5 , shape : "diamond"});
expectedOutput.push({ type :"filled" ,height : 5 , width : 5 , shape : "rectangle"});
inputs = [];
inputs.push("node");
inputs.push("createPatterns.js");
inputs = inputs.concat(["right_triangle",5]);
inputs = inputs.concat(["filled_diamond",5]);
inputs = inputs.concat(["filled_rectangle",5,5]);
assert.deepEqual(extractMultiInputs(inputs),expectedOutput);
console.log("extractMultiple inputs function passed");

//flip
let { flip } = util;
inputs = [[],[]];
expectedOutput =[[],[]];
assert.deepEqual(flip(inputs),expectedOutput);
inputs = [["l"],["u"]];
expectedOutput = [["l"],["u"]]
assert.deepEqual(flip(inputs),expectedOutput);
inputs = [["+-*"],["--*"]];
expectedOutput = [["*-+"],["*--"]];
assert.deepEqual(flip(inputs),expectedOutput);
inputs = [["**-","--*","004"],["123","456","789"]];
expectedOutput = [["-**","*--","400"],["321","654","987"]];
assert.deepEqual(flip(inputs),expectedOutput);
inputs = [["123","456"],["567","224"],["2786","86e","hello"]];
expectedOutput = [["321","654"],["765","422"],["6872","e68","olleh"]];
assert.deepEqual(flip(inputs),expectedOutput);
console.log("flip function passed");

//mirror
let { mirror } = util;
inputs = [[],[]];
expectedOutput =[[],[]];
assert.deepEqual(mirror(inputs),expectedOutput);
inputs = [["l"],["u"]];
expectedOutput = [["l"],["u"]]
assert.deepEqual(mirror(inputs),expectedOutput);
inputs = [["**-","--*","004"],["123","456","789"]];
expectedOutput = [["004","--*","**-"],["789","456","123"]];
assert.deepEqual(mirror(inputs),expectedOutput);
console.log("mirror function passed");
