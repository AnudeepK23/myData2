var v = {
    id: 4,
    name: 'Vasu',
    city: 'Kolar',
    pincode: 563146,
    display: function () {
        console.log('demo text');
    }
};
console.log('Json Implementation -----------------');
console.log("Name is " + v.name + " and city is " + v.city);
var Manager = /** @class */ (function () {
    function Manager(id, name, city, pincode) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.pincode = pincode;
    }
    Manager.prototype.display = function () {
        console.log("Hi this is " + this.name + " and I'm in " + this.city);
    };
    return Manager;
}());
console.log("Object Implementation ---------------");
var employee = new Manager(1, 'Vasu', 'Kolar', 563146);
employee.display();
