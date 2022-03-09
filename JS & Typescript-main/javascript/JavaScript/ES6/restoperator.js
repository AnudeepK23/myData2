console.log('rest operator');


function add(...a){
    var b=0;
    for(const i of a){
        b+=i;
    }
    console.log(b);
}
add(1,2);
add(1,2,3,4);
add(1,2,3,4,5,6);

console.log('spread operator-------------');

var arr=[1,2,3,4];
var arr1=[4,3,1,2];
var arr2=[...arr,...arr1];
console.log(...arr2);