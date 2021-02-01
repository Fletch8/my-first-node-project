const myModule = require('./myModule')
const myOtherMod = require('./myOtherModule')
const testMod = require('./moduleTest')

console.log("hello world");

function hello(name){
    console.log(`Hell0, ${name}`)
}

hello('Fletch')

console.log(myModule.add(1,1));
console.log(myModule.subtract(5,4));
myOtherMod.welcomeToNode()

testMod.testFunc()