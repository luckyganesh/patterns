const assert = require("assert");
const { generateRectangle , generateTriangle , generateDiamond } = require("../src/patternsLib.js");
//generateTriangle function
assert.deepEqual(generateTriangle("left",3),"*  \n** \n***");
assert.deepEqual(generateTriangle("right",3),"  *\n **\n***");
assert.deepEqual(generateTriangle("right",1),"*");
assert.deepEqual(generateTriangle("left",1),"*");
console.log("generatetriangle function test passed");

//generateRectangle function
assert.deepEqual(generateRectangle("filled",3,3),"***\n***\n***");
assert.deepEqual(generateRectangle("hollow",3,3),"***\n* *\n***");
assert.deepEqual(generateRectangle("hollow",1,1),"*");
assert.deepEqual(generateRectangle("filled",1,1),"*");
console.log("generateRectangle function passed");

//generateDiamond function
assert.deepEqual(generateDiamond("filled",5),"  *  \n *** \n*****\n *** \n  *  ");
assert.deepEqual(generateDiamond("hollow",5),"  *  \n * * \n*   *\n * * \n  *  ");
assert.deepEqual(generateDiamond("angled",5),"  *  \n / \\ \n*   *\n \\ / \n  *  ");
assert.deepEqual(generateDiamond("angled",1),"*");
console.log("generate diamond function test passed");

