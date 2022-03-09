let arr=['Apple',1,2,true,false,()=>{return 'Hello'},10,12,new Date()];

console.log(arr);

let arr1:Array<number> = [1,2,4,3,5,6,3,7,8]; //Here Array can hold only number type of data.
console.log(arr1);

for(const i of arr1){
    console.log(i);
}