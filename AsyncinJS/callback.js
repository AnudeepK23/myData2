// const posts=[
//     { title:'Post One' , body:'This is post one' },
//     { title:'Post Two' , body:'This is post two' }
// ];

// function getCall(){
//     setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//             output += `<li>${post.body}</li>`;

//         });
//         document.body.innerHTML=output;

//     },3000);

// }
// function dontworry(post,callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },3000)

// }
// dontworry({title:'Post Three', body:'This is Post three'},getCall);

// OR

//NORMAL FUNCTION

// console.log('This is New beginning');

// function Love(){
//     return "Anudeep"
// }
// var a = Love();
// console.log(a);

console.log('This is New begining');

async function Love(){
    console.log('Inside Love function')
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log(`User resolved`)
    return users;
    // return "Anudeep"
}
console.log('Before calling Love')
let a = Love();
console.log('After calling Love')
console.log(a);
a.then(data => console.log(data))
console.log('Last line of this js file');