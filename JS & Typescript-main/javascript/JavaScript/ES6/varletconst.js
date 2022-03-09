

function abc(){

    var fruits=["pineapple","strawberry","mango","kiwi"]
    for(let index=0;index<fruits.length;index++){
        var element = fruits[index];
        console.log(element);
    }

    console.log(element);
    console.log(fruits);
    // console.log(index); //let will be having local scope

    
}
abc();

console.log('Template string');

var message=`This is
a message 
from
whatsapp`;

console.log(message);

var a= 10;
var b=20;
console.log(`Result is ${a+b}`);




