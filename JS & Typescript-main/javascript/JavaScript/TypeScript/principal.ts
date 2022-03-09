import {student} from './Student';

class principal extends student{
    constructor(id:number,name:string,marks:number)
    {
        super(id,name,marks);
    }
}

var pp:principal = new principal(2,'Sanju',26);
console.log("Principal name is : " +pp.name);