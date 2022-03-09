function emp(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

}

emp.prototype={
    getDetails: function(){
        console.log('inside the getDetails');
        console.log("Name"+this.name+"Age "+this.age+"Salary "+this.salary);
        return " ";

    }
}

var emp=new emp('Tarun',9,6565);
emp.getDetails();
