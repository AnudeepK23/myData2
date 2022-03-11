import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit ,OnDestroy{

x:boolean=true;
y:boolean=false;
clr:string='Brown';



  constructor() { }

ngOnDestroy():void
{
  console.log("component destroyed.......")
}

  ngOnInit(): void {
  }

}
