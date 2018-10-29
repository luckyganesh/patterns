const assert = require("assert");
const { generateRectangle , generateTriangle , generateDiamond ,createPattern} = require("../src/patternsLib.js");
//generateTriangle function
assert.deepEqual(generateTriangle({type:"left",height:3}),"*  \n** \n***");
assert.deepEqual(generateTriangle({type:"right",height:3}),"  *\n **\n***");
assert.deepEqual(generateTriangle({type:"right",height:1}),"*");
assert.deepEqual(generateTriangle({type:"left",height:1}),"*");
console.log("generatetriangle function test passed");

//generateRectangle function
assert.deepEqual(generateRectangle({type:"filled",width:3,height:3}),"***\n***\n***");
assert.deepEqual(generateRectangle({type:"hollow",width:3,height:3}),"***\n* *\n***");
assert.deepEqual(generateRectangle({type:"hollow",width:1,height:1}),"*");
assert.deepEqual(generateRectangle({type:"filled",width:1,height:1}),"*");
console.log("generateRectangle function passed");

//generateDiamond function
assert.deepEqual(generateDiamond({type:"filled",height:5}),"  *  \n *** \n*****\n *** \n  *  ");
assert.deepEqual(generateDiamond({type:"hollow",height:5}),"  *  \n * * \n*   *\n * * \n  *  ");
assert.deepEqual(generateDiamond({type:"angled",height:5}),"  *  \n / \\ \n*   *\n \\ / \n  *  ");
assert.deepEqual(generateDiamond({type:"angled",height:1}),"*");
console.log("generate diamond function test passed");

//createPattern function
assert.deepEqual(createPattern(["left_triangle",5]),"*    \n**   \n***  \n**** \n*****");
console.log("create pattern function test passed");
