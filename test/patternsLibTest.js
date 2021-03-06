const assert = require("assert");
const { generateRectangle , generateTriangle , generateDiamond ,createPattern} = require("../src/patternsLib.js");
let expectedResult;
//generateTriangle function
assert.deepEqual(generateTriangle({type:"left",height:3}),["*  ","** ","***"]);
assert.deepEqual(generateTriangle({type:"right",height:3}),["  *"," **","***"]);
assert.deepEqual(generateTriangle({type:"right",height:1}),["*"]);
assert.deepEqual(generateTriangle({type:"left",height:1}),["*"]);
console.log("generatetriangle function test passed");

//generateRectangle function
assert.deepEqual(generateRectangle({type:"filled",width:3,height:3}),["***","***","***"]);
assert.deepEqual(generateRectangle({type:"hollow",width:3,height:3}),["***","* *","***"]);
assert.deepEqual(generateRectangle({type:"hollow",width:1,height:1}),["*"]);
assert.deepEqual(generateRectangle({type:"filled",width:1,height:1}),["*"]);
console.log("generateRectangle function passed");

//generateDiamond function
assert.deepEqual(generateDiamond({type:"filled",height:5}),["  *  "," *** ","*****"," *** ","  *  "]);
assert.deepEqual(generateDiamond({type:"hollow",height:5}),["  *  "," * * ","*   *"," * * ","  *  "]);
assert.deepEqual(generateDiamond({type:"angled",height:5}),["  *  "," / \\ ","*   *"," \\ / ","  *  "]);
assert.deepEqual(generateDiamond({type:"angled",height:1}),["*"]);
console.log("generate diamond function test passed");

//createPattern function
assert.deepEqual(createPattern(["node","createPattern.js","left_triangle",5]),["*    ","**   ","***  ","**** ","*****"]);
assert.deepEqual(createPattern(["node","createPattern.js","right_triangle",5]),["    *","   **","  ***"," ****","*****"]);
expectedResult = [];
expectedResult.push("*****     *");
expectedResult.push("*****    **");
expectedResult.push("*****   ***");
expectedResult.push("*****  ****");
expectedResult.push("***** *****");
expectedResult.push("*****      ");
assert.deepEqual(createPattern(["node","createPattern.js","filled_rectangle",5,6,"right_triangle",5]),expectedResult);
console.log("create pattern function test passed");
