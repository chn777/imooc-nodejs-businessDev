console.log("this is my Module");

const varVal = 100;

function test() {
	console.log(varVal);
}

module.exports.varVal = varVal;
module.exports.testFn = test;