var demo=(
    function(){
        let count=0;
        return function(){

        

    count+=1;
    return count; 
        }
    
})();

console.log(demo());
console.log(demo());
console.log(demo());
