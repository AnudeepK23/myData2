var cars=["Hundai","TATA","BMW","Mahindra"];

cars[4]="Audi";
cars.push(new Date());
cars.pop();
for(var i=0;i<cars.length;i++)
{
    console.log(cars[i]);
}

console.log('-------');

var fruits= new Array();
fruits[1]="banana";
fruits[0]="grapes";
fruits.push("strawberry");

fruits.sort();
console.log(fruits);
console.log('-------');
fruits.sort().reverse();
for(const items of fruits){
    console.log(items);
}


console.log('-------');

for(const items in fruits){
    console.log(items);
}

console.log('-------');

var date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log("Time "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
console.log(date.getUTCDay());




// function abc(){

//     this.name="This is demo text";
//     console.log(this.name);
//     console.log(this.name.toLocaleLowerCase());
//     console.log(this.name.toUpperCase());

//     this.name=this.name.concat(' welcome');
//     console.log(this.name);
//     console.log(this.name.slice(0,18));
//     console.log(this.name.substr(7,10));
//     this.name=this.name.replace('welcome','Demo');
//     console.log(this.name);
//     console.log(this.name.lastIndexOf('Demo'));
// console.log(this.name.startsWith('Demo'));
// console.log(this.name.endsWith('Demo'));

// }

// abc();


