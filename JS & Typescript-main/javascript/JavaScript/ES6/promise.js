
var pr = new Promise( (resolve,reject) =>{




var condition = true;

if(condition)
{
    console.log('Entered pin is proper')
    resolve('Successful money is withdrawn');
}
else{
    console.log('Insufficient funds....!')
    reject('Amount is greater than your balance');

}
} );

pr.then(function success(msg){
    console.log('call back');
    console.log(msg);
},failure);

//pr.then(success).catch(failure).finally(def);



//pr.then(success,failure);
//pr.then(success).catch(failure)

function success(msg){
    console.log('promise is  succesful');
    console.log(msg);
}

function failure(msg){
    console.log('promise is not succesful');
    console.log(msg);
}

function def(){
    console.log('Finally block is executed');
}



