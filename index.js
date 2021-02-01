// File Sys
const fs = require('fs');

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

fs.readFile('./nfl.txt', 'utf8', function(error, data){
    if(error){
        console.log("there was an error loading data:", error)
    } else {
        console.log(data)
    }
})