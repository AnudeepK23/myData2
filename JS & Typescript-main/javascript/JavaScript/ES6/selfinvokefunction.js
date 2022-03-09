
var a=(function(){
    console.log('self invoke')
})();

var b=((a)=>{
    console.log('arrow function '+a);
    return a
})(10);

var c=b;
console.log(c);