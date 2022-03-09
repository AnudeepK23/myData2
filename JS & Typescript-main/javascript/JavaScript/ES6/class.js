class Car{
    

constructor(name,model,price){
    this.name=name;
    this.model=model;
    this.price=price;
}

getCarDetails(){
    console.log('Name '+this.name+" model "+this.model+" price "+this.price+" car type is " +this.type);

}
}

class Omni extends Car{
    constructor(name,model,price,type){
        super(name,model,price)
        this.type=type;
    }
   
}

class Hundai extends Omni{
    constructor(name,model,price,type){
        super(name,model,price)
        this.type=type;
    }
   
}



var car = new Omni('Omni','g720',70000,'sedan');
car.getCarDetails();

var car = new Hundai('Hundai','i20',88000,'swift');
car.getCarDetails();