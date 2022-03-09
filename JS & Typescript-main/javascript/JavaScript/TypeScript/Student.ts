export class student{


    id:number;
    name:string;
    marks:number;


    constructor(id:number,name:string,marks:number){
this.id=id;
this.name=name;
this.marks=marks;
    }

    verify():void
    {
        if(this.marks >= 35)
        {
            console.log(`Student name is ${this.name} and her marks is ${this.marks}`);
    }
    else{
        console.log('Failed');
    }
}


    // setId(id:number){
    //     this.id = id;
    // }

    // getId():number{
    //     return this.id;
    // }
}

class Teacher extends student{
    subject:string;

    constructor(id:number,name:string,marks:number,subject:string){
super(id,name,marks);
this.subject=subject;
    }
}

var std:student=new Teacher(1,'Pooja',88,'Maths');
//console.log('Student Marks is : ' +std.marks);

std.verify();