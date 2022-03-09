
interface adress{
    city:string;
    pincode:number;
}




interface Employee extends adress{

    id:number;
    name:string;
    display():void;
}

var v:Employee={
    id: 4,
    name:'Vasu',
    city:'Kolar',
    pincode:563146,
    display:function ():void{
        console.log('demo text');
    }
};
console.log('Json Implementation -----------------');
console.log(`Name is ${v.name} and city is ${v.city}`);


class Manager implements Employee{
    id:number;
    name:string;
    city:string;
    pincode:number;

    constructor(id:number,name:string,city:string,pincode:number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.pincode=pincode;
    }
    display():void{
console.log(`Hi this is ${this.name} and I'm in ${this.city}`);        

    }

}

console.log(`Object Implementation ---------------`);
var employee:Manager = new Manager(1,'Vasu','Kolar',563146);
employee.display();




