import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  bn:Bank=new Bank();

  constructor(private bank:BankService) { }

  ngOnInit(): void {
  }



save(obj:any){
  this.bn.id=obj.id;
  this.bn.fullName=obj.fullName;
  this.bn.email=obj.email;
  this.bn.contact=obj.contact;
  this.bn.account=obj.account;
  this.bn.password=obj.password;
  this.bn.confirmpassword=obj.confirmpassword;

if(this.bn !== null)
{
 
  this.bank.saveBan(this.bn).subscribe( (res) =>{
    alert("Registered Succesfully")
    console.log(res);
  },err=>{
  
    alert("Something went wrong");
  });

}

 

}
}
